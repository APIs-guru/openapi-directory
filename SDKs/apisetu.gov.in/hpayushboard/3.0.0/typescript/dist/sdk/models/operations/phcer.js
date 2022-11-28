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
var PhcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PhcerRequestBodyCertificateParameters, _super);
    function PhcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], PhcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegistrationNo" }),
        __metadata("design:type", String)
    ], PhcerRequestBodyCertificateParameters.prototype, "registrationNo", void 0);
    return PhcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { PhcerRequestBodyCertificateParameters };
export var PhcerRequestBodyFormatEnum;
(function (PhcerRequestBodyFormatEnum) {
    PhcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(PhcerRequestBodyFormatEnum || (PhcerRequestBodyFormatEnum = {}));
var PhcerRequestBody = /** @class */ (function (_super) {
    __extends(PhcerRequestBody, _super);
    function PhcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", PhcerRequestBodyCertificateParameters)
    ], PhcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], PhcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PhcerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], PhcerRequestBody.prototype, "txnId", void 0);
    return PhcerRequestBody;
}(SpeakeasyBase));
export { PhcerRequestBody };
var PhcerSecurity = /** @class */ (function (_super) {
    __extends(PhcerSecurity, _super);
    function PhcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PhcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PhcerSecurity.prototype, "clientId", void 0);
    return PhcerSecurity;
}(SpeakeasyBase));
export { PhcerSecurity };
export var Phcer400ApplicationJsonErrorEnum;
(function (Phcer400ApplicationJsonErrorEnum) {
    Phcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Phcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Phcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Phcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Phcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Phcer400ApplicationJsonErrorEnum || (Phcer400ApplicationJsonErrorEnum = {}));
export var Phcer400ApplicationJsonErrorDescriptionEnum;
(function (Phcer400ApplicationJsonErrorDescriptionEnum) {
    Phcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Phcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Phcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Phcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Phcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Phcer400ApplicationJsonErrorDescriptionEnum || (Phcer400ApplicationJsonErrorDescriptionEnum = {}));
var Phcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Phcer400ApplicationJson, _super);
    function Phcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Phcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Phcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Phcer400ApplicationJson;
}(SpeakeasyBase));
export { Phcer400ApplicationJson };
export var Phcer401ApplicationJsonErrorEnum;
(function (Phcer401ApplicationJsonErrorEnum) {
    Phcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Phcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Phcer401ApplicationJsonErrorEnum || (Phcer401ApplicationJsonErrorEnum = {}));
export var Phcer401ApplicationJsonErrorDescriptionEnum;
(function (Phcer401ApplicationJsonErrorDescriptionEnum) {
    Phcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Phcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Phcer401ApplicationJsonErrorDescriptionEnum || (Phcer401ApplicationJsonErrorDescriptionEnum = {}));
var Phcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Phcer401ApplicationJson, _super);
    function Phcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Phcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Phcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Phcer401ApplicationJson;
}(SpeakeasyBase));
export { Phcer401ApplicationJson };
export var Phcer404ApplicationJsonErrorEnum;
(function (Phcer404ApplicationJsonErrorEnum) {
    Phcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Phcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Phcer404ApplicationJsonErrorEnum || (Phcer404ApplicationJsonErrorEnum = {}));
export var Phcer404ApplicationJsonErrorDescriptionEnum;
(function (Phcer404ApplicationJsonErrorDescriptionEnum) {
    Phcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Phcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Phcer404ApplicationJsonErrorDescriptionEnum || (Phcer404ApplicationJsonErrorDescriptionEnum = {}));
var Phcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Phcer404ApplicationJson, _super);
    function Phcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Phcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Phcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Phcer404ApplicationJson;
}(SpeakeasyBase));
export { Phcer404ApplicationJson };
export var Phcer500ApplicationJsonErrorEnum;
(function (Phcer500ApplicationJsonErrorEnum) {
    Phcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Phcer500ApplicationJsonErrorEnum || (Phcer500ApplicationJsonErrorEnum = {}));
export var Phcer500ApplicationJsonErrorDescriptionEnum;
(function (Phcer500ApplicationJsonErrorDescriptionEnum) {
    Phcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Phcer500ApplicationJsonErrorDescriptionEnum || (Phcer500ApplicationJsonErrorDescriptionEnum = {}));
var Phcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Phcer500ApplicationJson, _super);
    function Phcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Phcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Phcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Phcer500ApplicationJson;
}(SpeakeasyBase));
export { Phcer500ApplicationJson };
export var Phcer502ApplicationJsonErrorEnum;
(function (Phcer502ApplicationJsonErrorEnum) {
    Phcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Phcer502ApplicationJsonErrorEnum || (Phcer502ApplicationJsonErrorEnum = {}));
export var Phcer502ApplicationJsonErrorDescriptionEnum;
(function (Phcer502ApplicationJsonErrorDescriptionEnum) {
    Phcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Phcer502ApplicationJsonErrorDescriptionEnum || (Phcer502ApplicationJsonErrorDescriptionEnum = {}));
var Phcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Phcer502ApplicationJson, _super);
    function Phcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Phcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Phcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Phcer502ApplicationJson;
}(SpeakeasyBase));
export { Phcer502ApplicationJson };
export var Phcer503ApplicationJsonErrorEnum;
(function (Phcer503ApplicationJsonErrorEnum) {
    Phcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Phcer503ApplicationJsonErrorEnum || (Phcer503ApplicationJsonErrorEnum = {}));
export var Phcer503ApplicationJsonErrorDescriptionEnum;
(function (Phcer503ApplicationJsonErrorDescriptionEnum) {
    Phcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Phcer503ApplicationJsonErrorDescriptionEnum || (Phcer503ApplicationJsonErrorDescriptionEnum = {}));
var Phcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Phcer503ApplicationJson, _super);
    function Phcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Phcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Phcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Phcer503ApplicationJson;
}(SpeakeasyBase));
export { Phcer503ApplicationJson };
export var Phcer504ApplicationJsonErrorEnum;
(function (Phcer504ApplicationJsonErrorEnum) {
    Phcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Phcer504ApplicationJsonErrorEnum || (Phcer504ApplicationJsonErrorEnum = {}));
export var Phcer504ApplicationJsonErrorDescriptionEnum;
(function (Phcer504ApplicationJsonErrorDescriptionEnum) {
    Phcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Phcer504ApplicationJsonErrorDescriptionEnum || (Phcer504ApplicationJsonErrorDescriptionEnum = {}));
var Phcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Phcer504ApplicationJson, _super);
    function Phcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Phcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Phcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Phcer504ApplicationJson;
}(SpeakeasyBase));
export { Phcer504ApplicationJson };
var PhcerRequest = /** @class */ (function (_super) {
    __extends(PhcerRequest, _super);
    function PhcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PhcerRequestBody)
    ], PhcerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PhcerSecurity)
    ], PhcerRequest.prototype, "security", void 0);
    return PhcerRequest;
}(SpeakeasyBase));
export { PhcerRequest };
var PhcerResponse = /** @class */ (function (_super) {
    __extends(PhcerResponse, _super);
    function PhcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PhcerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PhcerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Phcer400ApplicationJson)
    ], PhcerResponse.prototype, "phcer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Phcer401ApplicationJson)
    ], PhcerResponse.prototype, "phcer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Phcer404ApplicationJson)
    ], PhcerResponse.prototype, "phcer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Phcer500ApplicationJson)
    ], PhcerResponse.prototype, "phcer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Phcer502ApplicationJson)
    ], PhcerResponse.prototype, "phcer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Phcer503ApplicationJson)
    ], PhcerResponse.prototype, "phcer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Phcer504ApplicationJson)
    ], PhcerResponse.prototype, "phcer504ApplicationJsonObject", void 0);
    return PhcerResponse;
}(SpeakeasyBase));
export { PhcerResponse };
