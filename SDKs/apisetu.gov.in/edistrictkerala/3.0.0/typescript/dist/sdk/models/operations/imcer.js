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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var ImcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(ImcerRequestBodyCertificateParameters, _super);
    function ImcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], ImcerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], ImcerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], ImcerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return ImcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { ImcerRequestBodyCertificateParameters };
export var ImcerRequestBodyFormatEnum;
(function (ImcerRequestBodyFormatEnum) {
    ImcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(ImcerRequestBodyFormatEnum || (ImcerRequestBodyFormatEnum = {}));
var ImcerRequestBody = /** @class */ (function (_super) {
    __extends(ImcerRequestBody, _super);
    function ImcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", ImcerRequestBodyCertificateParameters)
    ], ImcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], ImcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], ImcerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], ImcerRequestBody.prototype, "txnId", void 0);
    return ImcerRequestBody;
}(SpeakeasyBase));
export { ImcerRequestBody };
var ImcerSecurity = /** @class */ (function (_super) {
    __extends(ImcerSecurity, _super);
    function ImcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ImcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], ImcerSecurity.prototype, "clientId", void 0);
    return ImcerSecurity;
}(SpeakeasyBase));
export { ImcerSecurity };
export var Imcer400ApplicationJsonErrorEnum;
(function (Imcer400ApplicationJsonErrorEnum) {
    Imcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Imcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Imcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Imcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Imcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Imcer400ApplicationJsonErrorEnum || (Imcer400ApplicationJsonErrorEnum = {}));
export var Imcer400ApplicationJsonErrorDescriptionEnum;
(function (Imcer400ApplicationJsonErrorDescriptionEnum) {
    Imcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Imcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Imcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Imcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Imcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Imcer400ApplicationJsonErrorDescriptionEnum || (Imcer400ApplicationJsonErrorDescriptionEnum = {}));
var Imcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Imcer400ApplicationJson, _super);
    function Imcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Imcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Imcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Imcer400ApplicationJson;
}(SpeakeasyBase));
export { Imcer400ApplicationJson };
export var Imcer401ApplicationJsonErrorEnum;
(function (Imcer401ApplicationJsonErrorEnum) {
    Imcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Imcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Imcer401ApplicationJsonErrorEnum || (Imcer401ApplicationJsonErrorEnum = {}));
export var Imcer401ApplicationJsonErrorDescriptionEnum;
(function (Imcer401ApplicationJsonErrorDescriptionEnum) {
    Imcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Imcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Imcer401ApplicationJsonErrorDescriptionEnum || (Imcer401ApplicationJsonErrorDescriptionEnum = {}));
var Imcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Imcer401ApplicationJson, _super);
    function Imcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Imcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Imcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Imcer401ApplicationJson;
}(SpeakeasyBase));
export { Imcer401ApplicationJson };
export var Imcer404ApplicationJsonErrorEnum;
(function (Imcer404ApplicationJsonErrorEnum) {
    Imcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Imcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Imcer404ApplicationJsonErrorEnum || (Imcer404ApplicationJsonErrorEnum = {}));
export var Imcer404ApplicationJsonErrorDescriptionEnum;
(function (Imcer404ApplicationJsonErrorDescriptionEnum) {
    Imcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Imcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Imcer404ApplicationJsonErrorDescriptionEnum || (Imcer404ApplicationJsonErrorDescriptionEnum = {}));
var Imcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Imcer404ApplicationJson, _super);
    function Imcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Imcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Imcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Imcer404ApplicationJson;
}(SpeakeasyBase));
export { Imcer404ApplicationJson };
export var Imcer500ApplicationJsonErrorEnum;
(function (Imcer500ApplicationJsonErrorEnum) {
    Imcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Imcer500ApplicationJsonErrorEnum || (Imcer500ApplicationJsonErrorEnum = {}));
export var Imcer500ApplicationJsonErrorDescriptionEnum;
(function (Imcer500ApplicationJsonErrorDescriptionEnum) {
    Imcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Imcer500ApplicationJsonErrorDescriptionEnum || (Imcer500ApplicationJsonErrorDescriptionEnum = {}));
var Imcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Imcer500ApplicationJson, _super);
    function Imcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Imcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Imcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Imcer500ApplicationJson;
}(SpeakeasyBase));
export { Imcer500ApplicationJson };
export var Imcer502ApplicationJsonErrorEnum;
(function (Imcer502ApplicationJsonErrorEnum) {
    Imcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Imcer502ApplicationJsonErrorEnum || (Imcer502ApplicationJsonErrorEnum = {}));
export var Imcer502ApplicationJsonErrorDescriptionEnum;
(function (Imcer502ApplicationJsonErrorDescriptionEnum) {
    Imcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Imcer502ApplicationJsonErrorDescriptionEnum || (Imcer502ApplicationJsonErrorDescriptionEnum = {}));
var Imcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Imcer502ApplicationJson, _super);
    function Imcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Imcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Imcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Imcer502ApplicationJson;
}(SpeakeasyBase));
export { Imcer502ApplicationJson };
export var Imcer503ApplicationJsonErrorEnum;
(function (Imcer503ApplicationJsonErrorEnum) {
    Imcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Imcer503ApplicationJsonErrorEnum || (Imcer503ApplicationJsonErrorEnum = {}));
export var Imcer503ApplicationJsonErrorDescriptionEnum;
(function (Imcer503ApplicationJsonErrorDescriptionEnum) {
    Imcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Imcer503ApplicationJsonErrorDescriptionEnum || (Imcer503ApplicationJsonErrorDescriptionEnum = {}));
var Imcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Imcer503ApplicationJson, _super);
    function Imcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Imcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Imcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Imcer503ApplicationJson;
}(SpeakeasyBase));
export { Imcer503ApplicationJson };
export var Imcer504ApplicationJsonErrorEnum;
(function (Imcer504ApplicationJsonErrorEnum) {
    Imcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Imcer504ApplicationJsonErrorEnum || (Imcer504ApplicationJsonErrorEnum = {}));
export var Imcer504ApplicationJsonErrorDescriptionEnum;
(function (Imcer504ApplicationJsonErrorDescriptionEnum) {
    Imcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Imcer504ApplicationJsonErrorDescriptionEnum || (Imcer504ApplicationJsonErrorDescriptionEnum = {}));
var Imcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Imcer504ApplicationJson, _super);
    function Imcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Imcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Imcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Imcer504ApplicationJson;
}(SpeakeasyBase));
export { Imcer504ApplicationJson };
var ImcerRequest = /** @class */ (function (_super) {
    __extends(ImcerRequest, _super);
    function ImcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ImcerRequestBody)
    ], ImcerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImcerSecurity)
    ], ImcerRequest.prototype, "security", void 0);
    return ImcerRequest;
}(SpeakeasyBase));
export { ImcerRequest };
var ImcerResponse = /** @class */ (function (_super) {
    __extends(ImcerResponse, _super);
    function ImcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ImcerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ImcerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Imcer400ApplicationJson)
    ], ImcerResponse.prototype, "imcer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Imcer401ApplicationJson)
    ], ImcerResponse.prototype, "imcer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Imcer404ApplicationJson)
    ], ImcerResponse.prototype, "imcer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Imcer500ApplicationJson)
    ], ImcerResponse.prototype, "imcer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Imcer502ApplicationJson)
    ], ImcerResponse.prototype, "imcer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Imcer503ApplicationJson)
    ], ImcerResponse.prototype, "imcer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Imcer504ApplicationJson)
    ], ImcerResponse.prototype, "imcer504ApplicationJsonObject", void 0);
    return ImcerResponse;
}(SpeakeasyBase));
export { ImcerResponse };
