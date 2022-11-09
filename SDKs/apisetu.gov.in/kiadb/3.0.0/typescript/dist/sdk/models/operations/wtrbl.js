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
var WtrblRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(WtrblRequestBodyCertificateParameters, _super);
    function WtrblRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], WtrblRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], WtrblRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=RegNum" }),
        __metadata("design:type", String)
    ], WtrblRequestBodyCertificateParameters.prototype, "regNum", void 0);
    __decorate([
        Metadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], WtrblRequestBodyCertificateParameters.prototype, "uid", void 0);
    return WtrblRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { WtrblRequestBodyCertificateParameters };
export var WtrblRequestBodyFormatEnum;
(function (WtrblRequestBodyFormatEnum) {
    WtrblRequestBodyFormatEnum["Pdf"] = "pdf";
})(WtrblRequestBodyFormatEnum || (WtrblRequestBodyFormatEnum = {}));
var WtrblRequestBody = /** @class */ (function (_super) {
    __extends(WtrblRequestBody, _super);
    function WtrblRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", WtrblRequestBodyCertificateParameters)
    ], WtrblRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], WtrblRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], WtrblRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], WtrblRequestBody.prototype, "txnId", void 0);
    return WtrblRequestBody;
}(SpeakeasyBase));
export { WtrblRequestBody };
var WtrblSecurity = /** @class */ (function (_super) {
    __extends(WtrblSecurity, _super);
    function WtrblSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], WtrblSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], WtrblSecurity.prototype, "clientId", void 0);
    return WtrblSecurity;
}(SpeakeasyBase));
export { WtrblSecurity };
var WtrblRequest = /** @class */ (function (_super) {
    __extends(WtrblRequest, _super);
    function WtrblRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", WtrblRequestBody)
    ], WtrblRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", WtrblSecurity)
    ], WtrblRequest.prototype, "security", void 0);
    return WtrblRequest;
}(SpeakeasyBase));
export { WtrblRequest };
export var Wtrbl400ApplicationJsonErrorEnum;
(function (Wtrbl400ApplicationJsonErrorEnum) {
    Wtrbl400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Wtrbl400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Wtrbl400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Wtrbl400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Wtrbl400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Wtrbl400ApplicationJsonErrorEnum || (Wtrbl400ApplicationJsonErrorEnum = {}));
export var Wtrbl400ApplicationJsonErrorDescriptionEnum;
(function (Wtrbl400ApplicationJsonErrorDescriptionEnum) {
    Wtrbl400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Wtrbl400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Wtrbl400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Wtrbl400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Wtrbl400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Wtrbl400ApplicationJsonErrorDescriptionEnum || (Wtrbl400ApplicationJsonErrorDescriptionEnum = {}));
var Wtrbl400ApplicationJson = /** @class */ (function (_super) {
    __extends(Wtrbl400ApplicationJson, _super);
    function Wtrbl400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wtrbl400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wtrbl400ApplicationJson.prototype, "errorDescription", void 0);
    return Wtrbl400ApplicationJson;
}(SpeakeasyBase));
export { Wtrbl400ApplicationJson };
export var Wtrbl401ApplicationJsonErrorEnum;
(function (Wtrbl401ApplicationJsonErrorEnum) {
    Wtrbl401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Wtrbl401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Wtrbl401ApplicationJsonErrorEnum || (Wtrbl401ApplicationJsonErrorEnum = {}));
export var Wtrbl401ApplicationJsonErrorDescriptionEnum;
(function (Wtrbl401ApplicationJsonErrorDescriptionEnum) {
    Wtrbl401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Wtrbl401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Wtrbl401ApplicationJsonErrorDescriptionEnum || (Wtrbl401ApplicationJsonErrorDescriptionEnum = {}));
var Wtrbl401ApplicationJson = /** @class */ (function (_super) {
    __extends(Wtrbl401ApplicationJson, _super);
    function Wtrbl401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wtrbl401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wtrbl401ApplicationJson.prototype, "errorDescription", void 0);
    return Wtrbl401ApplicationJson;
}(SpeakeasyBase));
export { Wtrbl401ApplicationJson };
export var Wtrbl404ApplicationJsonErrorEnum;
(function (Wtrbl404ApplicationJsonErrorEnum) {
    Wtrbl404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Wtrbl404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Wtrbl404ApplicationJsonErrorEnum || (Wtrbl404ApplicationJsonErrorEnum = {}));
export var Wtrbl404ApplicationJsonErrorDescriptionEnum;
(function (Wtrbl404ApplicationJsonErrorDescriptionEnum) {
    Wtrbl404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Wtrbl404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Wtrbl404ApplicationJsonErrorDescriptionEnum || (Wtrbl404ApplicationJsonErrorDescriptionEnum = {}));
var Wtrbl404ApplicationJson = /** @class */ (function (_super) {
    __extends(Wtrbl404ApplicationJson, _super);
    function Wtrbl404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wtrbl404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wtrbl404ApplicationJson.prototype, "errorDescription", void 0);
    return Wtrbl404ApplicationJson;
}(SpeakeasyBase));
export { Wtrbl404ApplicationJson };
export var Wtrbl500ApplicationJsonErrorEnum;
(function (Wtrbl500ApplicationJsonErrorEnum) {
    Wtrbl500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Wtrbl500ApplicationJsonErrorEnum || (Wtrbl500ApplicationJsonErrorEnum = {}));
export var Wtrbl500ApplicationJsonErrorDescriptionEnum;
(function (Wtrbl500ApplicationJsonErrorDescriptionEnum) {
    Wtrbl500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Wtrbl500ApplicationJsonErrorDescriptionEnum || (Wtrbl500ApplicationJsonErrorDescriptionEnum = {}));
var Wtrbl500ApplicationJson = /** @class */ (function (_super) {
    __extends(Wtrbl500ApplicationJson, _super);
    function Wtrbl500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wtrbl500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wtrbl500ApplicationJson.prototype, "errorDescription", void 0);
    return Wtrbl500ApplicationJson;
}(SpeakeasyBase));
export { Wtrbl500ApplicationJson };
export var Wtrbl502ApplicationJsonErrorEnum;
(function (Wtrbl502ApplicationJsonErrorEnum) {
    Wtrbl502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Wtrbl502ApplicationJsonErrorEnum || (Wtrbl502ApplicationJsonErrorEnum = {}));
export var Wtrbl502ApplicationJsonErrorDescriptionEnum;
(function (Wtrbl502ApplicationJsonErrorDescriptionEnum) {
    Wtrbl502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Wtrbl502ApplicationJsonErrorDescriptionEnum || (Wtrbl502ApplicationJsonErrorDescriptionEnum = {}));
var Wtrbl502ApplicationJson = /** @class */ (function (_super) {
    __extends(Wtrbl502ApplicationJson, _super);
    function Wtrbl502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wtrbl502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wtrbl502ApplicationJson.prototype, "errorDescription", void 0);
    return Wtrbl502ApplicationJson;
}(SpeakeasyBase));
export { Wtrbl502ApplicationJson };
export var Wtrbl503ApplicationJsonErrorEnum;
(function (Wtrbl503ApplicationJsonErrorEnum) {
    Wtrbl503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Wtrbl503ApplicationJsonErrorEnum || (Wtrbl503ApplicationJsonErrorEnum = {}));
export var Wtrbl503ApplicationJsonErrorDescriptionEnum;
(function (Wtrbl503ApplicationJsonErrorDescriptionEnum) {
    Wtrbl503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Wtrbl503ApplicationJsonErrorDescriptionEnum || (Wtrbl503ApplicationJsonErrorDescriptionEnum = {}));
var Wtrbl503ApplicationJson = /** @class */ (function (_super) {
    __extends(Wtrbl503ApplicationJson, _super);
    function Wtrbl503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wtrbl503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wtrbl503ApplicationJson.prototype, "errorDescription", void 0);
    return Wtrbl503ApplicationJson;
}(SpeakeasyBase));
export { Wtrbl503ApplicationJson };
export var Wtrbl504ApplicationJsonErrorEnum;
(function (Wtrbl504ApplicationJsonErrorEnum) {
    Wtrbl504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Wtrbl504ApplicationJsonErrorEnum || (Wtrbl504ApplicationJsonErrorEnum = {}));
export var Wtrbl504ApplicationJsonErrorDescriptionEnum;
(function (Wtrbl504ApplicationJsonErrorDescriptionEnum) {
    Wtrbl504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Wtrbl504ApplicationJsonErrorDescriptionEnum || (Wtrbl504ApplicationJsonErrorDescriptionEnum = {}));
var Wtrbl504ApplicationJson = /** @class */ (function (_super) {
    __extends(Wtrbl504ApplicationJson, _super);
    function Wtrbl504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wtrbl504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wtrbl504ApplicationJson.prototype, "errorDescription", void 0);
    return Wtrbl504ApplicationJson;
}(SpeakeasyBase));
export { Wtrbl504ApplicationJson };
var WtrblResponse = /** @class */ (function (_super) {
    __extends(WtrblResponse, _super);
    function WtrblResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], WtrblResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], WtrblResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Wtrbl400ApplicationJson)
    ], WtrblResponse.prototype, "wtrbl400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Wtrbl401ApplicationJson)
    ], WtrblResponse.prototype, "wtrbl401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Wtrbl404ApplicationJson)
    ], WtrblResponse.prototype, "wtrbl404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Wtrbl500ApplicationJson)
    ], WtrblResponse.prototype, "wtrbl500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Wtrbl502ApplicationJson)
    ], WtrblResponse.prototype, "wtrbl502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Wtrbl503ApplicationJson)
    ], WtrblResponse.prototype, "wtrbl503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Wtrbl504ApplicationJson)
    ], WtrblResponse.prototype, "wtrbl504ApplicationJsonObject", void 0);
    return WtrblResponse;
}(SpeakeasyBase));
export { WtrblResponse };
