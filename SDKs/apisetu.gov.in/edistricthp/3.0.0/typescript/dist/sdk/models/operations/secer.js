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
var SecerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SecerRequestBodyCertificateParameters, _super);
    function SecerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], SecerRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return SecerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { SecerRequestBodyCertificateParameters };
export var SecerRequestBodyFormatEnum;
(function (SecerRequestBodyFormatEnum) {
    SecerRequestBodyFormatEnum["Pdf"] = "pdf";
})(SecerRequestBodyFormatEnum || (SecerRequestBodyFormatEnum = {}));
var SecerRequestBody = /** @class */ (function (_super) {
    __extends(SecerRequestBody, _super);
    function SecerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SecerRequestBodyCertificateParameters)
    ], SecerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SecerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SecerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SecerRequestBody.prototype, "txnId", void 0);
    return SecerRequestBody;
}(SpeakeasyBase));
export { SecerRequestBody };
var SecerSecurity = /** @class */ (function (_super) {
    __extends(SecerSecurity, _super);
    function SecerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SecerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SecerSecurity.prototype, "clientId", void 0);
    return SecerSecurity;
}(SpeakeasyBase));
export { SecerSecurity };
var SecerRequest = /** @class */ (function (_super) {
    __extends(SecerRequest, _super);
    function SecerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SecerRequestBody)
    ], SecerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecerSecurity)
    ], SecerRequest.prototype, "security", void 0);
    return SecerRequest;
}(SpeakeasyBase));
export { SecerRequest };
export var Secer400ApplicationJsonErrorEnum;
(function (Secer400ApplicationJsonErrorEnum) {
    Secer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Secer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Secer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Secer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Secer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Secer400ApplicationJsonErrorEnum || (Secer400ApplicationJsonErrorEnum = {}));
export var Secer400ApplicationJsonErrorDescriptionEnum;
(function (Secer400ApplicationJsonErrorDescriptionEnum) {
    Secer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Secer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Secer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Secer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Secer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Secer400ApplicationJsonErrorDescriptionEnum || (Secer400ApplicationJsonErrorDescriptionEnum = {}));
var Secer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Secer400ApplicationJson, _super);
    function Secer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Secer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Secer400ApplicationJson.prototype, "errorDescription", void 0);
    return Secer400ApplicationJson;
}(SpeakeasyBase));
export { Secer400ApplicationJson };
export var Secer401ApplicationJsonErrorEnum;
(function (Secer401ApplicationJsonErrorEnum) {
    Secer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Secer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Secer401ApplicationJsonErrorEnum || (Secer401ApplicationJsonErrorEnum = {}));
export var Secer401ApplicationJsonErrorDescriptionEnum;
(function (Secer401ApplicationJsonErrorDescriptionEnum) {
    Secer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Secer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Secer401ApplicationJsonErrorDescriptionEnum || (Secer401ApplicationJsonErrorDescriptionEnum = {}));
var Secer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Secer401ApplicationJson, _super);
    function Secer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Secer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Secer401ApplicationJson.prototype, "errorDescription", void 0);
    return Secer401ApplicationJson;
}(SpeakeasyBase));
export { Secer401ApplicationJson };
export var Secer404ApplicationJsonErrorEnum;
(function (Secer404ApplicationJsonErrorEnum) {
    Secer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Secer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Secer404ApplicationJsonErrorEnum || (Secer404ApplicationJsonErrorEnum = {}));
export var Secer404ApplicationJsonErrorDescriptionEnum;
(function (Secer404ApplicationJsonErrorDescriptionEnum) {
    Secer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Secer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Secer404ApplicationJsonErrorDescriptionEnum || (Secer404ApplicationJsonErrorDescriptionEnum = {}));
var Secer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Secer404ApplicationJson, _super);
    function Secer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Secer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Secer404ApplicationJson.prototype, "errorDescription", void 0);
    return Secer404ApplicationJson;
}(SpeakeasyBase));
export { Secer404ApplicationJson };
export var Secer500ApplicationJsonErrorEnum;
(function (Secer500ApplicationJsonErrorEnum) {
    Secer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Secer500ApplicationJsonErrorEnum || (Secer500ApplicationJsonErrorEnum = {}));
export var Secer500ApplicationJsonErrorDescriptionEnum;
(function (Secer500ApplicationJsonErrorDescriptionEnum) {
    Secer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Secer500ApplicationJsonErrorDescriptionEnum || (Secer500ApplicationJsonErrorDescriptionEnum = {}));
var Secer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Secer500ApplicationJson, _super);
    function Secer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Secer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Secer500ApplicationJson.prototype, "errorDescription", void 0);
    return Secer500ApplicationJson;
}(SpeakeasyBase));
export { Secer500ApplicationJson };
export var Secer502ApplicationJsonErrorEnum;
(function (Secer502ApplicationJsonErrorEnum) {
    Secer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Secer502ApplicationJsonErrorEnum || (Secer502ApplicationJsonErrorEnum = {}));
export var Secer502ApplicationJsonErrorDescriptionEnum;
(function (Secer502ApplicationJsonErrorDescriptionEnum) {
    Secer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Secer502ApplicationJsonErrorDescriptionEnum || (Secer502ApplicationJsonErrorDescriptionEnum = {}));
var Secer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Secer502ApplicationJson, _super);
    function Secer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Secer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Secer502ApplicationJson.prototype, "errorDescription", void 0);
    return Secer502ApplicationJson;
}(SpeakeasyBase));
export { Secer502ApplicationJson };
export var Secer503ApplicationJsonErrorEnum;
(function (Secer503ApplicationJsonErrorEnum) {
    Secer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Secer503ApplicationJsonErrorEnum || (Secer503ApplicationJsonErrorEnum = {}));
export var Secer503ApplicationJsonErrorDescriptionEnum;
(function (Secer503ApplicationJsonErrorDescriptionEnum) {
    Secer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Secer503ApplicationJsonErrorDescriptionEnum || (Secer503ApplicationJsonErrorDescriptionEnum = {}));
var Secer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Secer503ApplicationJson, _super);
    function Secer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Secer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Secer503ApplicationJson.prototype, "errorDescription", void 0);
    return Secer503ApplicationJson;
}(SpeakeasyBase));
export { Secer503ApplicationJson };
export var Secer504ApplicationJsonErrorEnum;
(function (Secer504ApplicationJsonErrorEnum) {
    Secer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Secer504ApplicationJsonErrorEnum || (Secer504ApplicationJsonErrorEnum = {}));
export var Secer504ApplicationJsonErrorDescriptionEnum;
(function (Secer504ApplicationJsonErrorDescriptionEnum) {
    Secer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Secer504ApplicationJsonErrorDescriptionEnum || (Secer504ApplicationJsonErrorDescriptionEnum = {}));
var Secer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Secer504ApplicationJson, _super);
    function Secer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Secer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Secer504ApplicationJson.prototype, "errorDescription", void 0);
    return Secer504ApplicationJson;
}(SpeakeasyBase));
export { Secer504ApplicationJson };
var SecerResponse = /** @class */ (function (_super) {
    __extends(SecerResponse, _super);
    function SecerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SecerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SecerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Secer400ApplicationJson)
    ], SecerResponse.prototype, "secer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Secer401ApplicationJson)
    ], SecerResponse.prototype, "secer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Secer404ApplicationJson)
    ], SecerResponse.prototype, "secer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Secer500ApplicationJson)
    ], SecerResponse.prototype, "secer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Secer502ApplicationJson)
    ], SecerResponse.prototype, "secer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Secer503ApplicationJson)
    ], SecerResponse.prototype, "secer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Secer504ApplicationJson)
    ], SecerResponse.prototype, "secer504ApplicationJsonObject", void 0);
    return SecerResponse;
}(SpeakeasyBase));
export { SecerResponse };
