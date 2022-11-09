var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var NctscRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(NctscRequestBodyCertificateParameters, _super);
    function NctscRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], NctscRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], NctscRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        Metadata({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], NctscRequestBodyCertificateParameters.prototype, "year", void 0);
    return NctscRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { NctscRequestBodyCertificateParameters };
export var NctscRequestBodyFormatEnum;
(function (NctscRequestBodyFormatEnum) {
    NctscRequestBodyFormatEnum["Pdf"] = "pdf";
})(NctscRequestBodyFormatEnum || (NctscRequestBodyFormatEnum = {}));
var NctscRequestBody = /** @class */ (function (_super) {
    __extends(NctscRequestBody, _super);
    function NctscRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", NctscRequestBodyCertificateParameters)
    ], NctscRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], NctscRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], NctscRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], NctscRequestBody.prototype, "txnId", void 0);
    return NctscRequestBody;
}(SpeakeasyBase));
export { NctscRequestBody };
var NctscSecurity = /** @class */ (function (_super) {
    __extends(NctscSecurity, _super);
    function NctscSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], NctscSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], NctscSecurity.prototype, "clientId", void 0);
    return NctscSecurity;
}(SpeakeasyBase));
export { NctscSecurity };
var NctscRequest = /** @class */ (function (_super) {
    __extends(NctscRequest, _super);
    function NctscRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", NctscRequestBody)
    ], NctscRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NctscSecurity)
    ], NctscRequest.prototype, "security", void 0);
    return NctscRequest;
}(SpeakeasyBase));
export { NctscRequest };
export var Nctsc400ApplicationJsonErrorEnum;
(function (Nctsc400ApplicationJsonErrorEnum) {
    Nctsc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Nctsc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Nctsc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Nctsc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Nctsc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Nctsc400ApplicationJsonErrorEnum || (Nctsc400ApplicationJsonErrorEnum = {}));
export var Nctsc400ApplicationJsonErrorDescriptionEnum;
(function (Nctsc400ApplicationJsonErrorDescriptionEnum) {
    Nctsc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Nctsc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Nctsc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Nctsc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Nctsc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Nctsc400ApplicationJsonErrorDescriptionEnum || (Nctsc400ApplicationJsonErrorDescriptionEnum = {}));
var Nctsc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Nctsc400ApplicationJson, _super);
    function Nctsc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nctsc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nctsc400ApplicationJson.prototype, "errorDescription", void 0);
    return Nctsc400ApplicationJson;
}(SpeakeasyBase));
export { Nctsc400ApplicationJson };
export var Nctsc401ApplicationJsonErrorEnum;
(function (Nctsc401ApplicationJsonErrorEnum) {
    Nctsc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Nctsc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Nctsc401ApplicationJsonErrorEnum || (Nctsc401ApplicationJsonErrorEnum = {}));
export var Nctsc401ApplicationJsonErrorDescriptionEnum;
(function (Nctsc401ApplicationJsonErrorDescriptionEnum) {
    Nctsc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Nctsc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Nctsc401ApplicationJsonErrorDescriptionEnum || (Nctsc401ApplicationJsonErrorDescriptionEnum = {}));
var Nctsc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Nctsc401ApplicationJson, _super);
    function Nctsc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nctsc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nctsc401ApplicationJson.prototype, "errorDescription", void 0);
    return Nctsc401ApplicationJson;
}(SpeakeasyBase));
export { Nctsc401ApplicationJson };
export var Nctsc404ApplicationJsonErrorEnum;
(function (Nctsc404ApplicationJsonErrorEnum) {
    Nctsc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Nctsc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Nctsc404ApplicationJsonErrorEnum || (Nctsc404ApplicationJsonErrorEnum = {}));
export var Nctsc404ApplicationJsonErrorDescriptionEnum;
(function (Nctsc404ApplicationJsonErrorDescriptionEnum) {
    Nctsc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Nctsc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Nctsc404ApplicationJsonErrorDescriptionEnum || (Nctsc404ApplicationJsonErrorDescriptionEnum = {}));
var Nctsc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Nctsc404ApplicationJson, _super);
    function Nctsc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nctsc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nctsc404ApplicationJson.prototype, "errorDescription", void 0);
    return Nctsc404ApplicationJson;
}(SpeakeasyBase));
export { Nctsc404ApplicationJson };
export var Nctsc500ApplicationJsonErrorEnum;
(function (Nctsc500ApplicationJsonErrorEnum) {
    Nctsc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Nctsc500ApplicationJsonErrorEnum || (Nctsc500ApplicationJsonErrorEnum = {}));
export var Nctsc500ApplicationJsonErrorDescriptionEnum;
(function (Nctsc500ApplicationJsonErrorDescriptionEnum) {
    Nctsc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Nctsc500ApplicationJsonErrorDescriptionEnum || (Nctsc500ApplicationJsonErrorDescriptionEnum = {}));
var Nctsc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Nctsc500ApplicationJson, _super);
    function Nctsc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nctsc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nctsc500ApplicationJson.prototype, "errorDescription", void 0);
    return Nctsc500ApplicationJson;
}(SpeakeasyBase));
export { Nctsc500ApplicationJson };
export var Nctsc502ApplicationJsonErrorEnum;
(function (Nctsc502ApplicationJsonErrorEnum) {
    Nctsc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Nctsc502ApplicationJsonErrorEnum || (Nctsc502ApplicationJsonErrorEnum = {}));
export var Nctsc502ApplicationJsonErrorDescriptionEnum;
(function (Nctsc502ApplicationJsonErrorDescriptionEnum) {
    Nctsc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Nctsc502ApplicationJsonErrorDescriptionEnum || (Nctsc502ApplicationJsonErrorDescriptionEnum = {}));
var Nctsc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Nctsc502ApplicationJson, _super);
    function Nctsc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nctsc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nctsc502ApplicationJson.prototype, "errorDescription", void 0);
    return Nctsc502ApplicationJson;
}(SpeakeasyBase));
export { Nctsc502ApplicationJson };
export var Nctsc503ApplicationJsonErrorEnum;
(function (Nctsc503ApplicationJsonErrorEnum) {
    Nctsc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Nctsc503ApplicationJsonErrorEnum || (Nctsc503ApplicationJsonErrorEnum = {}));
export var Nctsc503ApplicationJsonErrorDescriptionEnum;
(function (Nctsc503ApplicationJsonErrorDescriptionEnum) {
    Nctsc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Nctsc503ApplicationJsonErrorDescriptionEnum || (Nctsc503ApplicationJsonErrorDescriptionEnum = {}));
var Nctsc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Nctsc503ApplicationJson, _super);
    function Nctsc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nctsc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nctsc503ApplicationJson.prototype, "errorDescription", void 0);
    return Nctsc503ApplicationJson;
}(SpeakeasyBase));
export { Nctsc503ApplicationJson };
export var Nctsc504ApplicationJsonErrorEnum;
(function (Nctsc504ApplicationJsonErrorEnum) {
    Nctsc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Nctsc504ApplicationJsonErrorEnum || (Nctsc504ApplicationJsonErrorEnum = {}));
export var Nctsc504ApplicationJsonErrorDescriptionEnum;
(function (Nctsc504ApplicationJsonErrorDescriptionEnum) {
    Nctsc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Nctsc504ApplicationJsonErrorDescriptionEnum || (Nctsc504ApplicationJsonErrorDescriptionEnum = {}));
var Nctsc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Nctsc504ApplicationJson, _super);
    function Nctsc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nctsc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nctsc504ApplicationJson.prototype, "errorDescription", void 0);
    return Nctsc504ApplicationJson;
}(SpeakeasyBase));
export { Nctsc504ApplicationJson };
var NctscResponse = /** @class */ (function (_super) {
    __extends(NctscResponse, _super);
    function NctscResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NctscResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NctscResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Nctsc400ApplicationJson)
    ], NctscResponse.prototype, "nctsc400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Nctsc401ApplicationJson)
    ], NctscResponse.prototype, "nctsc401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Nctsc404ApplicationJson)
    ], NctscResponse.prototype, "nctsc404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Nctsc500ApplicationJson)
    ], NctscResponse.prototype, "nctsc500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Nctsc502ApplicationJson)
    ], NctscResponse.prototype, "nctsc502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Nctsc503ApplicationJson)
    ], NctscResponse.prototype, "nctsc503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Nctsc504ApplicationJson)
    ], NctscResponse.prototype, "nctsc504ApplicationJsonObject", void 0);
    return NctscResponse;
}(SpeakeasyBase));
export { NctscResponse };
