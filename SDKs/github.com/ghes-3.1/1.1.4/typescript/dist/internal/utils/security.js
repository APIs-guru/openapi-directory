var securityMetadataKey = "security";
export function CreateSecurityClient(client, security) {
    return ParseSecurityClass(client, security);
}
function ParseSecurityDecorator(securityAnn) {
    // scheme=true;type=apiKey;subtype=header"
    var option = false;
    var scheme = false;
    var name = "";
    var securityType = "";
    var securitySubType = "";
    securityAnn.split(";").forEach(function (securityAnnPart) {
        var _a = securityAnnPart.split("="), sKey = _a[0], sVal = _a[1];
        switch (sKey) {
            case "name":
                name = sVal;
                break;
            case "type":
                securityType = sVal;
                break;
            case "subtype":
                securitySubType = sVal;
                break;
            case "option":
                option = sVal == "true";
                break;
            case "scheme":
                scheme = sVal == "true";
        }
    });
    return new SecurityDecorator(name, securityType, option, scheme, securitySubType);
}
function ParseSecurityClass(client, security) {
    var fieldNames = Object.getOwnPropertyNames(security);
    fieldNames.forEach(function (fname) {
        var securityAnn = Reflect.getMetadata(securityMetadataKey, security, fname);
        if (securityAnn == null)
            return;
        var securityDecorator = ParseSecurityDecorator(securityAnn);
        if (securityDecorator == null)
            return;
        if (securityDecorator.Option) {
            return ParseSecurityOption(client, security[fname]);
        }
        else if (securityDecorator.Scheme) {
            return ParseSecurityScheme(client, securityDecorator, security[fname]);
        }
    });
    return client;
}
function ParseSecurityOption(client, optionType) {
    var fieldNames = Object.getOwnPropertyNames(optionType);
    fieldNames.forEach(function (fname) {
        var securityAnn = Reflect.getMetadata(securityMetadataKey, optionType, fname);
        if (securityAnn == null)
            return;
        var securityDecorator = ParseSecurityDecorator(securityAnn);
        if (securityDecorator != null && securityDecorator.Scheme)
            return;
        if (securityDecorator.Scheme) {
            return ParseSecurityScheme(client, securityDecorator, optionType[fname]);
        }
    });
    return client;
}
function ParseSecurityScheme(client, schemeDecorator, scheme) {
    if (schemeDecorator.Type === "http" && schemeDecorator.SubType === "basic") {
        return ParseBasicAuthScheme(client, scheme);
    }
    var fieldNames = Object.getOwnPropertyNames(scheme);
    fieldNames.forEach(function (fname) {
        var securityAnn = Reflect.getMetadata(securityMetadataKey, scheme, fname);
        if (securityAnn == null)
            return;
        var securityDecorator = ParseSecurityDecorator(securityAnn);
        if (securityDecorator == null || securityDecorator.Name === "")
            return;
        switch (schemeDecorator.Type) {
            case "apiKey":
                switch (schemeDecorator.SubType) {
                    case "header":
                        client.defaults.headers.common[securityDecorator.Name] =
                            scheme[fname];
                        break;
                    case "query":
                        client.defaults.params[securityDecorator.Name] = scheme[fname];
                        break;
                    case "cookie":
                        var securityDecoratorName = securityDecorator.Name;
                        var val = scheme[fname];
                        client.defaults.headers.common["Cookie"] = "".concat(securityDecoratorName, "=").concat(val);
                        break;
                    default:
                        throw new Error("not supported");
                }
                break;
            case "openIdConnect":
                client.defaults.headers.common[securityDecorator.Name] = scheme[fname];
                break;
            case "oauth2":
                client.defaults.headers.common[securityDecorator.Name] = scheme[fname];
                break;
            case "http":
                switch (schemeDecorator.SubType) {
                    case "basic":
                        break;
                    case "bearer":
                        client.defaults.headers.common[securityDecorator.Name] =
                            scheme[fname];
                        break;
                    default:
                        throw new Error("not supported");
                }
                break;
            default:
                throw new Error("not supported");
        }
    });
    return client;
}
function ParseBasicAuthScheme(client, scheme) {
    var username, password = "";
    var fieldNames = Object.getOwnPropertyNames(scheme);
    fieldNames.forEach(function (fname) {
        var securityAnn = Reflect.getMetadata(securityMetadataKey, scheme, fname);
        if (securityAnn == null)
            return;
        var securityDecorator = ParseSecurityDecorator(securityAnn);
        if (securityDecorator == null || securityDecorator.Name === "")
            return;
        switch (securityDecorator.Name) {
            case "username":
                username = scheme[fname];
                break;
            case "password":
                password = scheme[fname];
                break;
        }
    });
    client.defaults.headers.common["Authorization"] = "Basic ".concat(Buffer.from("".concat(username, ":").concat(password)).toString("base64"));
    return client;
}
var SecurityDecorator = /** @class */ (function () {
    function SecurityDecorator(Name, Type, Option, Scheme, SubType) {
        this.Name = Name;
        this.Type = Type;
        this.Option = Option;
        this.Scheme = Scheme;
        this.SubType = SubType;
    }
    return SecurityDecorator;
}());
