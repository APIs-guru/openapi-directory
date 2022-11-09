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
var SmcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SmcerRequestBodyCertificateParameters, _super);
    function SmcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], SmcerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        Metadata({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], SmcerRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return SmcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { SmcerRequestBodyCertificateParameters };
export var SmcerRequestBodyFormatEnum;
(function (SmcerRequestBodyFormatEnum) {
    SmcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(SmcerRequestBodyFormatEnum || (SmcerRequestBodyFormatEnum = {}));
var SmcerRequestBody = /** @class */ (function (_super) {
    __extends(SmcerRequestBody, _super);
    function SmcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SmcerRequestBodyCertificateParameters)
    ], SmcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SmcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SmcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SmcerRequestBody.prototype, "txnId", void 0);
    return SmcerRequestBody;
}(SpeakeasyBase));
export { SmcerRequestBody };
var SmcerSecurity = /** @class */ (function (_super) {
    __extends(SmcerSecurity, _super);
    function SmcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SmcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SmcerSecurity.prototype, "clientId", void 0);
    return SmcerSecurity;
}(SpeakeasyBase));
export { SmcerSecurity };
var SmcerRequest = /** @class */ (function (_super) {
    __extends(SmcerRequest, _super);
    function SmcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SmcerRequestBody)
    ], SmcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SmcerSecurity)
    ], SmcerRequest.prototype, "security", void 0);
    return SmcerRequest;
}(SpeakeasyBase));
export { SmcerRequest };
export var Smcer400ApplicationJsonErrorEnum;
(function (Smcer400ApplicationJsonErrorEnum) {
    Smcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Smcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Smcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Smcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Smcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Smcer400ApplicationJsonErrorEnum || (Smcer400ApplicationJsonErrorEnum = {}));
export var Smcer400ApplicationJsonErrorDescriptionEnum;
(function (Smcer400ApplicationJsonErrorDescriptionEnum) {
    Smcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Smcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Smcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Smcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Smcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Smcer400ApplicationJsonErrorDescriptionEnum || (Smcer400ApplicationJsonErrorDescriptionEnum = {}));
var Smcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Smcer400ApplicationJson, _super);
    function Smcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Smcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Smcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Smcer400ApplicationJson;
}(SpeakeasyBase));
export { Smcer400ApplicationJson };
export var Smcer401ApplicationJsonErrorEnum;
(function (Smcer401ApplicationJsonErrorEnum) {
    Smcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Smcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Smcer401ApplicationJsonErrorEnum || (Smcer401ApplicationJsonErrorEnum = {}));
export var Smcer401ApplicationJsonErrorDescriptionEnum;
(function (Smcer401ApplicationJsonErrorDescriptionEnum) {
    Smcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Smcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Smcer401ApplicationJsonErrorDescriptionEnum || (Smcer401ApplicationJsonErrorDescriptionEnum = {}));
var Smcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Smcer401ApplicationJson, _super);
    function Smcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Smcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Smcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Smcer401ApplicationJson;
}(SpeakeasyBase));
export { Smcer401ApplicationJson };
export var Smcer404ApplicationJsonErrorEnum;
(function (Smcer404ApplicationJsonErrorEnum) {
    Smcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Smcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Smcer404ApplicationJsonErrorEnum || (Smcer404ApplicationJsonErrorEnum = {}));
export var Smcer404ApplicationJsonErrorDescriptionEnum;
(function (Smcer404ApplicationJsonErrorDescriptionEnum) {
    Smcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Smcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Smcer404ApplicationJsonErrorDescriptionEnum || (Smcer404ApplicationJsonErrorDescriptionEnum = {}));
var Smcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Smcer404ApplicationJson, _super);
    function Smcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Smcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Smcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Smcer404ApplicationJson;
}(SpeakeasyBase));
export { Smcer404ApplicationJson };
export var Smcer500ApplicationJsonErrorEnum;
(function (Smcer500ApplicationJsonErrorEnum) {
    Smcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Smcer500ApplicationJsonErrorEnum || (Smcer500ApplicationJsonErrorEnum = {}));
export var Smcer500ApplicationJsonErrorDescriptionEnum;
(function (Smcer500ApplicationJsonErrorDescriptionEnum) {
    Smcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Smcer500ApplicationJsonErrorDescriptionEnum || (Smcer500ApplicationJsonErrorDescriptionEnum = {}));
var Smcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Smcer500ApplicationJson, _super);
    function Smcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Smcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Smcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Smcer500ApplicationJson;
}(SpeakeasyBase));
export { Smcer500ApplicationJson };
export var Smcer502ApplicationJsonErrorEnum;
(function (Smcer502ApplicationJsonErrorEnum) {
    Smcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Smcer502ApplicationJsonErrorEnum || (Smcer502ApplicationJsonErrorEnum = {}));
export var Smcer502ApplicationJsonErrorDescriptionEnum;
(function (Smcer502ApplicationJsonErrorDescriptionEnum) {
    Smcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Smcer502ApplicationJsonErrorDescriptionEnum || (Smcer502ApplicationJsonErrorDescriptionEnum = {}));
var Smcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Smcer502ApplicationJson, _super);
    function Smcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Smcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Smcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Smcer502ApplicationJson;
}(SpeakeasyBase));
export { Smcer502ApplicationJson };
export var Smcer503ApplicationJsonErrorEnum;
(function (Smcer503ApplicationJsonErrorEnum) {
    Smcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Smcer503ApplicationJsonErrorEnum || (Smcer503ApplicationJsonErrorEnum = {}));
export var Smcer503ApplicationJsonErrorDescriptionEnum;
(function (Smcer503ApplicationJsonErrorDescriptionEnum) {
    Smcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Smcer503ApplicationJsonErrorDescriptionEnum || (Smcer503ApplicationJsonErrorDescriptionEnum = {}));
var Smcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Smcer503ApplicationJson, _super);
    function Smcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Smcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Smcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Smcer503ApplicationJson;
}(SpeakeasyBase));
export { Smcer503ApplicationJson };
export var Smcer504ApplicationJsonErrorEnum;
(function (Smcer504ApplicationJsonErrorEnum) {
    Smcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Smcer504ApplicationJsonErrorEnum || (Smcer504ApplicationJsonErrorEnum = {}));
export var Smcer504ApplicationJsonErrorDescriptionEnum;
(function (Smcer504ApplicationJsonErrorDescriptionEnum) {
    Smcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Smcer504ApplicationJsonErrorDescriptionEnum || (Smcer504ApplicationJsonErrorDescriptionEnum = {}));
var Smcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Smcer504ApplicationJson, _super);
    function Smcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Smcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Smcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Smcer504ApplicationJson;
}(SpeakeasyBase));
export { Smcer504ApplicationJson };
var SmcerResponse = /** @class */ (function (_super) {
    __extends(SmcerResponse, _super);
    function SmcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SmcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SmcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Smcer400ApplicationJson)
    ], SmcerResponse.prototype, "smcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Smcer401ApplicationJson)
    ], SmcerResponse.prototype, "smcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Smcer404ApplicationJson)
    ], SmcerResponse.prototype, "smcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Smcer500ApplicationJson)
    ], SmcerResponse.prototype, "smcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Smcer502ApplicationJson)
    ], SmcerResponse.prototype, "smcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Smcer503ApplicationJson)
    ], SmcerResponse.prototype, "smcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Smcer504ApplicationJson)
    ], SmcerResponse.prototype, "smcer504ApplicationJsonObject", void 0);
    return SmcerResponse;
}(SpeakeasyBase));
export { SmcerResponse };
