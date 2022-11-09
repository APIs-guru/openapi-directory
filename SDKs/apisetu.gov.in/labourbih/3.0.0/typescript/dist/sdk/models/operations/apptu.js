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
var ApptuRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(ApptuRequestBodyCertificateParameters, _super);
    function ApptuRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], ApptuRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        Metadata({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], ApptuRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return ApptuRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { ApptuRequestBodyCertificateParameters };
export var ApptuRequestBodyFormatEnum;
(function (ApptuRequestBodyFormatEnum) {
    ApptuRequestBodyFormatEnum["Pdf"] = "pdf";
})(ApptuRequestBodyFormatEnum || (ApptuRequestBodyFormatEnum = {}));
var ApptuRequestBody = /** @class */ (function (_super) {
    __extends(ApptuRequestBody, _super);
    function ApptuRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", ApptuRequestBodyCertificateParameters)
    ], ApptuRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], ApptuRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], ApptuRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], ApptuRequestBody.prototype, "txnId", void 0);
    return ApptuRequestBody;
}(SpeakeasyBase));
export { ApptuRequestBody };
var ApptuSecurity = /** @class */ (function (_super) {
    __extends(ApptuSecurity, _super);
    function ApptuSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ApptuSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], ApptuSecurity.prototype, "clientId", void 0);
    return ApptuSecurity;
}(SpeakeasyBase));
export { ApptuSecurity };
var ApptuRequest = /** @class */ (function (_super) {
    __extends(ApptuRequest, _super);
    function ApptuRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ApptuRequestBody)
    ], ApptuRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ApptuSecurity)
    ], ApptuRequest.prototype, "security", void 0);
    return ApptuRequest;
}(SpeakeasyBase));
export { ApptuRequest };
export var Apptu400ApplicationJsonErrorEnum;
(function (Apptu400ApplicationJsonErrorEnum) {
    Apptu400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Apptu400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Apptu400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Apptu400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Apptu400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Apptu400ApplicationJsonErrorEnum || (Apptu400ApplicationJsonErrorEnum = {}));
export var Apptu400ApplicationJsonErrorDescriptionEnum;
(function (Apptu400ApplicationJsonErrorDescriptionEnum) {
    Apptu400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Apptu400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Apptu400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Apptu400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Apptu400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Apptu400ApplicationJsonErrorDescriptionEnum || (Apptu400ApplicationJsonErrorDescriptionEnum = {}));
var Apptu400ApplicationJson = /** @class */ (function (_super) {
    __extends(Apptu400ApplicationJson, _super);
    function Apptu400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Apptu400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Apptu400ApplicationJson.prototype, "errorDescription", void 0);
    return Apptu400ApplicationJson;
}(SpeakeasyBase));
export { Apptu400ApplicationJson };
export var Apptu401ApplicationJsonErrorEnum;
(function (Apptu401ApplicationJsonErrorEnum) {
    Apptu401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Apptu401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Apptu401ApplicationJsonErrorEnum || (Apptu401ApplicationJsonErrorEnum = {}));
export var Apptu401ApplicationJsonErrorDescriptionEnum;
(function (Apptu401ApplicationJsonErrorDescriptionEnum) {
    Apptu401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Apptu401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Apptu401ApplicationJsonErrorDescriptionEnum || (Apptu401ApplicationJsonErrorDescriptionEnum = {}));
var Apptu401ApplicationJson = /** @class */ (function (_super) {
    __extends(Apptu401ApplicationJson, _super);
    function Apptu401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Apptu401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Apptu401ApplicationJson.prototype, "errorDescription", void 0);
    return Apptu401ApplicationJson;
}(SpeakeasyBase));
export { Apptu401ApplicationJson };
export var Apptu404ApplicationJsonErrorEnum;
(function (Apptu404ApplicationJsonErrorEnum) {
    Apptu404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Apptu404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Apptu404ApplicationJsonErrorEnum || (Apptu404ApplicationJsonErrorEnum = {}));
export var Apptu404ApplicationJsonErrorDescriptionEnum;
(function (Apptu404ApplicationJsonErrorDescriptionEnum) {
    Apptu404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Apptu404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Apptu404ApplicationJsonErrorDescriptionEnum || (Apptu404ApplicationJsonErrorDescriptionEnum = {}));
var Apptu404ApplicationJson = /** @class */ (function (_super) {
    __extends(Apptu404ApplicationJson, _super);
    function Apptu404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Apptu404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Apptu404ApplicationJson.prototype, "errorDescription", void 0);
    return Apptu404ApplicationJson;
}(SpeakeasyBase));
export { Apptu404ApplicationJson };
export var Apptu500ApplicationJsonErrorEnum;
(function (Apptu500ApplicationJsonErrorEnum) {
    Apptu500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Apptu500ApplicationJsonErrorEnum || (Apptu500ApplicationJsonErrorEnum = {}));
export var Apptu500ApplicationJsonErrorDescriptionEnum;
(function (Apptu500ApplicationJsonErrorDescriptionEnum) {
    Apptu500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Apptu500ApplicationJsonErrorDescriptionEnum || (Apptu500ApplicationJsonErrorDescriptionEnum = {}));
var Apptu500ApplicationJson = /** @class */ (function (_super) {
    __extends(Apptu500ApplicationJson, _super);
    function Apptu500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Apptu500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Apptu500ApplicationJson.prototype, "errorDescription", void 0);
    return Apptu500ApplicationJson;
}(SpeakeasyBase));
export { Apptu500ApplicationJson };
export var Apptu502ApplicationJsonErrorEnum;
(function (Apptu502ApplicationJsonErrorEnum) {
    Apptu502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Apptu502ApplicationJsonErrorEnum || (Apptu502ApplicationJsonErrorEnum = {}));
export var Apptu502ApplicationJsonErrorDescriptionEnum;
(function (Apptu502ApplicationJsonErrorDescriptionEnum) {
    Apptu502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Apptu502ApplicationJsonErrorDescriptionEnum || (Apptu502ApplicationJsonErrorDescriptionEnum = {}));
var Apptu502ApplicationJson = /** @class */ (function (_super) {
    __extends(Apptu502ApplicationJson, _super);
    function Apptu502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Apptu502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Apptu502ApplicationJson.prototype, "errorDescription", void 0);
    return Apptu502ApplicationJson;
}(SpeakeasyBase));
export { Apptu502ApplicationJson };
export var Apptu503ApplicationJsonErrorEnum;
(function (Apptu503ApplicationJsonErrorEnum) {
    Apptu503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Apptu503ApplicationJsonErrorEnum || (Apptu503ApplicationJsonErrorEnum = {}));
export var Apptu503ApplicationJsonErrorDescriptionEnum;
(function (Apptu503ApplicationJsonErrorDescriptionEnum) {
    Apptu503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Apptu503ApplicationJsonErrorDescriptionEnum || (Apptu503ApplicationJsonErrorDescriptionEnum = {}));
var Apptu503ApplicationJson = /** @class */ (function (_super) {
    __extends(Apptu503ApplicationJson, _super);
    function Apptu503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Apptu503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Apptu503ApplicationJson.prototype, "errorDescription", void 0);
    return Apptu503ApplicationJson;
}(SpeakeasyBase));
export { Apptu503ApplicationJson };
export var Apptu504ApplicationJsonErrorEnum;
(function (Apptu504ApplicationJsonErrorEnum) {
    Apptu504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Apptu504ApplicationJsonErrorEnum || (Apptu504ApplicationJsonErrorEnum = {}));
export var Apptu504ApplicationJsonErrorDescriptionEnum;
(function (Apptu504ApplicationJsonErrorDescriptionEnum) {
    Apptu504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Apptu504ApplicationJsonErrorDescriptionEnum || (Apptu504ApplicationJsonErrorDescriptionEnum = {}));
var Apptu504ApplicationJson = /** @class */ (function (_super) {
    __extends(Apptu504ApplicationJson, _super);
    function Apptu504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Apptu504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Apptu504ApplicationJson.prototype, "errorDescription", void 0);
    return Apptu504ApplicationJson;
}(SpeakeasyBase));
export { Apptu504ApplicationJson };
var ApptuResponse = /** @class */ (function (_super) {
    __extends(ApptuResponse, _super);
    function ApptuResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ApptuResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ApptuResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Apptu400ApplicationJson)
    ], ApptuResponse.prototype, "apptu400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Apptu401ApplicationJson)
    ], ApptuResponse.prototype, "apptu401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Apptu404ApplicationJson)
    ], ApptuResponse.prototype, "apptu404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Apptu500ApplicationJson)
    ], ApptuResponse.prototype, "apptu500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Apptu502ApplicationJson)
    ], ApptuResponse.prototype, "apptu502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Apptu503ApplicationJson)
    ], ApptuResponse.prototype, "apptu503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Apptu504ApplicationJson)
    ], ApptuResponse.prototype, "apptu504ApplicationJsonObject", void 0);
    return ApptuResponse;
}(SpeakeasyBase));
export { ApptuResponse };
