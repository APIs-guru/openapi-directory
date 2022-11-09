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
var LfcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(LfcerRequestBodyCertificateParameters, _super);
    function LfcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], LfcerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        Metadata({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], LfcerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        Metadata({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], LfcerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return LfcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { LfcerRequestBodyCertificateParameters };
export var LfcerRequestBodyFormatEnum;
(function (LfcerRequestBodyFormatEnum) {
    LfcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(LfcerRequestBodyFormatEnum || (LfcerRequestBodyFormatEnum = {}));
var LfcerRequestBody = /** @class */ (function (_super) {
    __extends(LfcerRequestBody, _super);
    function LfcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", LfcerRequestBodyCertificateParameters)
    ], LfcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], LfcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], LfcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], LfcerRequestBody.prototype, "txnId", void 0);
    return LfcerRequestBody;
}(SpeakeasyBase));
export { LfcerRequestBody };
var LfcerSecurity = /** @class */ (function (_super) {
    __extends(LfcerSecurity, _super);
    function LfcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LfcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], LfcerSecurity.prototype, "clientId", void 0);
    return LfcerSecurity;
}(SpeakeasyBase));
export { LfcerSecurity };
var LfcerRequest = /** @class */ (function (_super) {
    __extends(LfcerRequest, _super);
    function LfcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", LfcerRequestBody)
    ], LfcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LfcerSecurity)
    ], LfcerRequest.prototype, "security", void 0);
    return LfcerRequest;
}(SpeakeasyBase));
export { LfcerRequest };
export var Lfcer400ApplicationJsonErrorEnum;
(function (Lfcer400ApplicationJsonErrorEnum) {
    Lfcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Lfcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Lfcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Lfcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Lfcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Lfcer400ApplicationJsonErrorEnum || (Lfcer400ApplicationJsonErrorEnum = {}));
export var Lfcer400ApplicationJsonErrorDescriptionEnum;
(function (Lfcer400ApplicationJsonErrorDescriptionEnum) {
    Lfcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Lfcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Lfcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Lfcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Lfcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Lfcer400ApplicationJsonErrorDescriptionEnum || (Lfcer400ApplicationJsonErrorDescriptionEnum = {}));
var Lfcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Lfcer400ApplicationJson, _super);
    function Lfcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lfcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lfcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Lfcer400ApplicationJson;
}(SpeakeasyBase));
export { Lfcer400ApplicationJson };
export var Lfcer401ApplicationJsonErrorEnum;
(function (Lfcer401ApplicationJsonErrorEnum) {
    Lfcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Lfcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Lfcer401ApplicationJsonErrorEnum || (Lfcer401ApplicationJsonErrorEnum = {}));
export var Lfcer401ApplicationJsonErrorDescriptionEnum;
(function (Lfcer401ApplicationJsonErrorDescriptionEnum) {
    Lfcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Lfcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Lfcer401ApplicationJsonErrorDescriptionEnum || (Lfcer401ApplicationJsonErrorDescriptionEnum = {}));
var Lfcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Lfcer401ApplicationJson, _super);
    function Lfcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lfcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lfcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Lfcer401ApplicationJson;
}(SpeakeasyBase));
export { Lfcer401ApplicationJson };
export var Lfcer404ApplicationJsonErrorEnum;
(function (Lfcer404ApplicationJsonErrorEnum) {
    Lfcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Lfcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Lfcer404ApplicationJsonErrorEnum || (Lfcer404ApplicationJsonErrorEnum = {}));
export var Lfcer404ApplicationJsonErrorDescriptionEnum;
(function (Lfcer404ApplicationJsonErrorDescriptionEnum) {
    Lfcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Lfcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Lfcer404ApplicationJsonErrorDescriptionEnum || (Lfcer404ApplicationJsonErrorDescriptionEnum = {}));
var Lfcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Lfcer404ApplicationJson, _super);
    function Lfcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lfcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lfcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Lfcer404ApplicationJson;
}(SpeakeasyBase));
export { Lfcer404ApplicationJson };
export var Lfcer500ApplicationJsonErrorEnum;
(function (Lfcer500ApplicationJsonErrorEnum) {
    Lfcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Lfcer500ApplicationJsonErrorEnum || (Lfcer500ApplicationJsonErrorEnum = {}));
export var Lfcer500ApplicationJsonErrorDescriptionEnum;
(function (Lfcer500ApplicationJsonErrorDescriptionEnum) {
    Lfcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Lfcer500ApplicationJsonErrorDescriptionEnum || (Lfcer500ApplicationJsonErrorDescriptionEnum = {}));
var Lfcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Lfcer500ApplicationJson, _super);
    function Lfcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lfcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lfcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Lfcer500ApplicationJson;
}(SpeakeasyBase));
export { Lfcer500ApplicationJson };
export var Lfcer502ApplicationJsonErrorEnum;
(function (Lfcer502ApplicationJsonErrorEnum) {
    Lfcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Lfcer502ApplicationJsonErrorEnum || (Lfcer502ApplicationJsonErrorEnum = {}));
export var Lfcer502ApplicationJsonErrorDescriptionEnum;
(function (Lfcer502ApplicationJsonErrorDescriptionEnum) {
    Lfcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Lfcer502ApplicationJsonErrorDescriptionEnum || (Lfcer502ApplicationJsonErrorDescriptionEnum = {}));
var Lfcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Lfcer502ApplicationJson, _super);
    function Lfcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lfcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lfcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Lfcer502ApplicationJson;
}(SpeakeasyBase));
export { Lfcer502ApplicationJson };
export var Lfcer503ApplicationJsonErrorEnum;
(function (Lfcer503ApplicationJsonErrorEnum) {
    Lfcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Lfcer503ApplicationJsonErrorEnum || (Lfcer503ApplicationJsonErrorEnum = {}));
export var Lfcer503ApplicationJsonErrorDescriptionEnum;
(function (Lfcer503ApplicationJsonErrorDescriptionEnum) {
    Lfcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Lfcer503ApplicationJsonErrorDescriptionEnum || (Lfcer503ApplicationJsonErrorDescriptionEnum = {}));
var Lfcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Lfcer503ApplicationJson, _super);
    function Lfcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lfcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lfcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Lfcer503ApplicationJson;
}(SpeakeasyBase));
export { Lfcer503ApplicationJson };
export var Lfcer504ApplicationJsonErrorEnum;
(function (Lfcer504ApplicationJsonErrorEnum) {
    Lfcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Lfcer504ApplicationJsonErrorEnum || (Lfcer504ApplicationJsonErrorEnum = {}));
export var Lfcer504ApplicationJsonErrorDescriptionEnum;
(function (Lfcer504ApplicationJsonErrorDescriptionEnum) {
    Lfcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Lfcer504ApplicationJsonErrorDescriptionEnum || (Lfcer504ApplicationJsonErrorDescriptionEnum = {}));
var Lfcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Lfcer504ApplicationJson, _super);
    function Lfcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lfcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lfcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Lfcer504ApplicationJson;
}(SpeakeasyBase));
export { Lfcer504ApplicationJson };
var LfcerResponse = /** @class */ (function (_super) {
    __extends(LfcerResponse, _super);
    function LfcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LfcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LfcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lfcer400ApplicationJson)
    ], LfcerResponse.prototype, "lfcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lfcer401ApplicationJson)
    ], LfcerResponse.prototype, "lfcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lfcer404ApplicationJson)
    ], LfcerResponse.prototype, "lfcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lfcer500ApplicationJson)
    ], LfcerResponse.prototype, "lfcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lfcer502ApplicationJson)
    ], LfcerResponse.prototype, "lfcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lfcer503ApplicationJson)
    ], LfcerResponse.prototype, "lfcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lfcer504ApplicationJson)
    ], LfcerResponse.prototype, "lfcer504ApplicationJsonObject", void 0);
    return LfcerResponse;
}(SpeakeasyBase));
export { LfcerResponse };
