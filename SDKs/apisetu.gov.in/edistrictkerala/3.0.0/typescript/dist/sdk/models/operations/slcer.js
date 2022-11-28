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
var SlcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SlcerRequestBodyCertificateParameters, _super);
    function SlcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], SlcerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], SlcerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], SlcerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return SlcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { SlcerRequestBodyCertificateParameters };
export var SlcerRequestBodyFormatEnum;
(function (SlcerRequestBodyFormatEnum) {
    SlcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(SlcerRequestBodyFormatEnum || (SlcerRequestBodyFormatEnum = {}));
var SlcerRequestBody = /** @class */ (function (_super) {
    __extends(SlcerRequestBody, _super);
    function SlcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SlcerRequestBodyCertificateParameters)
    ], SlcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SlcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SlcerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SlcerRequestBody.prototype, "txnId", void 0);
    return SlcerRequestBody;
}(SpeakeasyBase));
export { SlcerRequestBody };
var SlcerSecurity = /** @class */ (function (_super) {
    __extends(SlcerSecurity, _super);
    function SlcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SlcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SlcerSecurity.prototype, "clientId", void 0);
    return SlcerSecurity;
}(SpeakeasyBase));
export { SlcerSecurity };
export var Slcer400ApplicationJsonErrorEnum;
(function (Slcer400ApplicationJsonErrorEnum) {
    Slcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Slcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Slcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Slcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Slcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Slcer400ApplicationJsonErrorEnum || (Slcer400ApplicationJsonErrorEnum = {}));
export var Slcer400ApplicationJsonErrorDescriptionEnum;
(function (Slcer400ApplicationJsonErrorDescriptionEnum) {
    Slcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Slcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Slcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Slcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Slcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Slcer400ApplicationJsonErrorDescriptionEnum || (Slcer400ApplicationJsonErrorDescriptionEnum = {}));
var Slcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Slcer400ApplicationJson, _super);
    function Slcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Slcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Slcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Slcer400ApplicationJson;
}(SpeakeasyBase));
export { Slcer400ApplicationJson };
export var Slcer401ApplicationJsonErrorEnum;
(function (Slcer401ApplicationJsonErrorEnum) {
    Slcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Slcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Slcer401ApplicationJsonErrorEnum || (Slcer401ApplicationJsonErrorEnum = {}));
export var Slcer401ApplicationJsonErrorDescriptionEnum;
(function (Slcer401ApplicationJsonErrorDescriptionEnum) {
    Slcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Slcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Slcer401ApplicationJsonErrorDescriptionEnum || (Slcer401ApplicationJsonErrorDescriptionEnum = {}));
var Slcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Slcer401ApplicationJson, _super);
    function Slcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Slcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Slcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Slcer401ApplicationJson;
}(SpeakeasyBase));
export { Slcer401ApplicationJson };
export var Slcer404ApplicationJsonErrorEnum;
(function (Slcer404ApplicationJsonErrorEnum) {
    Slcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Slcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Slcer404ApplicationJsonErrorEnum || (Slcer404ApplicationJsonErrorEnum = {}));
export var Slcer404ApplicationJsonErrorDescriptionEnum;
(function (Slcer404ApplicationJsonErrorDescriptionEnum) {
    Slcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Slcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Slcer404ApplicationJsonErrorDescriptionEnum || (Slcer404ApplicationJsonErrorDescriptionEnum = {}));
var Slcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Slcer404ApplicationJson, _super);
    function Slcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Slcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Slcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Slcer404ApplicationJson;
}(SpeakeasyBase));
export { Slcer404ApplicationJson };
export var Slcer500ApplicationJsonErrorEnum;
(function (Slcer500ApplicationJsonErrorEnum) {
    Slcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Slcer500ApplicationJsonErrorEnum || (Slcer500ApplicationJsonErrorEnum = {}));
export var Slcer500ApplicationJsonErrorDescriptionEnum;
(function (Slcer500ApplicationJsonErrorDescriptionEnum) {
    Slcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Slcer500ApplicationJsonErrorDescriptionEnum || (Slcer500ApplicationJsonErrorDescriptionEnum = {}));
var Slcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Slcer500ApplicationJson, _super);
    function Slcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Slcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Slcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Slcer500ApplicationJson;
}(SpeakeasyBase));
export { Slcer500ApplicationJson };
export var Slcer502ApplicationJsonErrorEnum;
(function (Slcer502ApplicationJsonErrorEnum) {
    Slcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Slcer502ApplicationJsonErrorEnum || (Slcer502ApplicationJsonErrorEnum = {}));
export var Slcer502ApplicationJsonErrorDescriptionEnum;
(function (Slcer502ApplicationJsonErrorDescriptionEnum) {
    Slcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Slcer502ApplicationJsonErrorDescriptionEnum || (Slcer502ApplicationJsonErrorDescriptionEnum = {}));
var Slcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Slcer502ApplicationJson, _super);
    function Slcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Slcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Slcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Slcer502ApplicationJson;
}(SpeakeasyBase));
export { Slcer502ApplicationJson };
export var Slcer503ApplicationJsonErrorEnum;
(function (Slcer503ApplicationJsonErrorEnum) {
    Slcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Slcer503ApplicationJsonErrorEnum || (Slcer503ApplicationJsonErrorEnum = {}));
export var Slcer503ApplicationJsonErrorDescriptionEnum;
(function (Slcer503ApplicationJsonErrorDescriptionEnum) {
    Slcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Slcer503ApplicationJsonErrorDescriptionEnum || (Slcer503ApplicationJsonErrorDescriptionEnum = {}));
var Slcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Slcer503ApplicationJson, _super);
    function Slcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Slcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Slcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Slcer503ApplicationJson;
}(SpeakeasyBase));
export { Slcer503ApplicationJson };
export var Slcer504ApplicationJsonErrorEnum;
(function (Slcer504ApplicationJsonErrorEnum) {
    Slcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Slcer504ApplicationJsonErrorEnum || (Slcer504ApplicationJsonErrorEnum = {}));
export var Slcer504ApplicationJsonErrorDescriptionEnum;
(function (Slcer504ApplicationJsonErrorDescriptionEnum) {
    Slcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Slcer504ApplicationJsonErrorDescriptionEnum || (Slcer504ApplicationJsonErrorDescriptionEnum = {}));
var Slcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Slcer504ApplicationJson, _super);
    function Slcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Slcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Slcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Slcer504ApplicationJson;
}(SpeakeasyBase));
export { Slcer504ApplicationJson };
var SlcerRequest = /** @class */ (function (_super) {
    __extends(SlcerRequest, _super);
    function SlcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SlcerRequestBody)
    ], SlcerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SlcerSecurity)
    ], SlcerRequest.prototype, "security", void 0);
    return SlcerRequest;
}(SpeakeasyBase));
export { SlcerRequest };
var SlcerResponse = /** @class */ (function (_super) {
    __extends(SlcerResponse, _super);
    function SlcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SlcerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SlcerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Slcer400ApplicationJson)
    ], SlcerResponse.prototype, "slcer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Slcer401ApplicationJson)
    ], SlcerResponse.prototype, "slcer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Slcer404ApplicationJson)
    ], SlcerResponse.prototype, "slcer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Slcer500ApplicationJson)
    ], SlcerResponse.prototype, "slcer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Slcer502ApplicationJson)
    ], SlcerResponse.prototype, "slcer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Slcer503ApplicationJson)
    ], SlcerResponse.prototype, "slcer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Slcer504ApplicationJson)
    ], SlcerResponse.prototype, "slcer504ApplicationJsonObject", void 0);
    return SlcerResponse;
}(SpeakeasyBase));
export { SlcerResponse };
