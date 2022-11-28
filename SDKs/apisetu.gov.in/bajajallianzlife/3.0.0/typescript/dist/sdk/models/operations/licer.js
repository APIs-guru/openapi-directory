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
var LicerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(LicerRequestBodyCertificateParameters, _super);
    function LicerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], LicerRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], LicerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyNumber" }),
        __metadata("design:type", String)
    ], LicerRequestBodyCertificateParameters.prototype, "policyNumber", void 0);
    return LicerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { LicerRequestBodyCertificateParameters };
export var LicerRequestBodyFormatEnum;
(function (LicerRequestBodyFormatEnum) {
    LicerRequestBodyFormatEnum["Pdf"] = "pdf";
})(LicerRequestBodyFormatEnum || (LicerRequestBodyFormatEnum = {}));
var LicerRequestBody = /** @class */ (function (_super) {
    __extends(LicerRequestBody, _super);
    function LicerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", LicerRequestBodyCertificateParameters)
    ], LicerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], LicerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], LicerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], LicerRequestBody.prototype, "txnId", void 0);
    return LicerRequestBody;
}(SpeakeasyBase));
export { LicerRequestBody };
var LicerSecurity = /** @class */ (function (_super) {
    __extends(LicerSecurity, _super);
    function LicerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LicerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], LicerSecurity.prototype, "clientId", void 0);
    return LicerSecurity;
}(SpeakeasyBase));
export { LicerSecurity };
export var Licer400ApplicationJsonErrorEnum;
(function (Licer400ApplicationJsonErrorEnum) {
    Licer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Licer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Licer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Licer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Licer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Licer400ApplicationJsonErrorEnum || (Licer400ApplicationJsonErrorEnum = {}));
export var Licer400ApplicationJsonErrorDescriptionEnum;
(function (Licer400ApplicationJsonErrorDescriptionEnum) {
    Licer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Licer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Licer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Licer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Licer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Licer400ApplicationJsonErrorDescriptionEnum || (Licer400ApplicationJsonErrorDescriptionEnum = {}));
var Licer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Licer400ApplicationJson, _super);
    function Licer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Licer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Licer400ApplicationJson.prototype, "errorDescription", void 0);
    return Licer400ApplicationJson;
}(SpeakeasyBase));
export { Licer400ApplicationJson };
export var Licer401ApplicationJsonErrorEnum;
(function (Licer401ApplicationJsonErrorEnum) {
    Licer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Licer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Licer401ApplicationJsonErrorEnum || (Licer401ApplicationJsonErrorEnum = {}));
export var Licer401ApplicationJsonErrorDescriptionEnum;
(function (Licer401ApplicationJsonErrorDescriptionEnum) {
    Licer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Licer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Licer401ApplicationJsonErrorDescriptionEnum || (Licer401ApplicationJsonErrorDescriptionEnum = {}));
var Licer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Licer401ApplicationJson, _super);
    function Licer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Licer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Licer401ApplicationJson.prototype, "errorDescription", void 0);
    return Licer401ApplicationJson;
}(SpeakeasyBase));
export { Licer401ApplicationJson };
export var Licer404ApplicationJsonErrorEnum;
(function (Licer404ApplicationJsonErrorEnum) {
    Licer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Licer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Licer404ApplicationJsonErrorEnum || (Licer404ApplicationJsonErrorEnum = {}));
export var Licer404ApplicationJsonErrorDescriptionEnum;
(function (Licer404ApplicationJsonErrorDescriptionEnum) {
    Licer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Licer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Licer404ApplicationJsonErrorDescriptionEnum || (Licer404ApplicationJsonErrorDescriptionEnum = {}));
var Licer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Licer404ApplicationJson, _super);
    function Licer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Licer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Licer404ApplicationJson.prototype, "errorDescription", void 0);
    return Licer404ApplicationJson;
}(SpeakeasyBase));
export { Licer404ApplicationJson };
export var Licer500ApplicationJsonErrorEnum;
(function (Licer500ApplicationJsonErrorEnum) {
    Licer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Licer500ApplicationJsonErrorEnum || (Licer500ApplicationJsonErrorEnum = {}));
export var Licer500ApplicationJsonErrorDescriptionEnum;
(function (Licer500ApplicationJsonErrorDescriptionEnum) {
    Licer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Licer500ApplicationJsonErrorDescriptionEnum || (Licer500ApplicationJsonErrorDescriptionEnum = {}));
var Licer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Licer500ApplicationJson, _super);
    function Licer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Licer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Licer500ApplicationJson.prototype, "errorDescription", void 0);
    return Licer500ApplicationJson;
}(SpeakeasyBase));
export { Licer500ApplicationJson };
export var Licer502ApplicationJsonErrorEnum;
(function (Licer502ApplicationJsonErrorEnum) {
    Licer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Licer502ApplicationJsonErrorEnum || (Licer502ApplicationJsonErrorEnum = {}));
export var Licer502ApplicationJsonErrorDescriptionEnum;
(function (Licer502ApplicationJsonErrorDescriptionEnum) {
    Licer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Licer502ApplicationJsonErrorDescriptionEnum || (Licer502ApplicationJsonErrorDescriptionEnum = {}));
var Licer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Licer502ApplicationJson, _super);
    function Licer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Licer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Licer502ApplicationJson.prototype, "errorDescription", void 0);
    return Licer502ApplicationJson;
}(SpeakeasyBase));
export { Licer502ApplicationJson };
export var Licer503ApplicationJsonErrorEnum;
(function (Licer503ApplicationJsonErrorEnum) {
    Licer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Licer503ApplicationJsonErrorEnum || (Licer503ApplicationJsonErrorEnum = {}));
export var Licer503ApplicationJsonErrorDescriptionEnum;
(function (Licer503ApplicationJsonErrorDescriptionEnum) {
    Licer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Licer503ApplicationJsonErrorDescriptionEnum || (Licer503ApplicationJsonErrorDescriptionEnum = {}));
var Licer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Licer503ApplicationJson, _super);
    function Licer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Licer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Licer503ApplicationJson.prototype, "errorDescription", void 0);
    return Licer503ApplicationJson;
}(SpeakeasyBase));
export { Licer503ApplicationJson };
export var Licer504ApplicationJsonErrorEnum;
(function (Licer504ApplicationJsonErrorEnum) {
    Licer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Licer504ApplicationJsonErrorEnum || (Licer504ApplicationJsonErrorEnum = {}));
export var Licer504ApplicationJsonErrorDescriptionEnum;
(function (Licer504ApplicationJsonErrorDescriptionEnum) {
    Licer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Licer504ApplicationJsonErrorDescriptionEnum || (Licer504ApplicationJsonErrorDescriptionEnum = {}));
var Licer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Licer504ApplicationJson, _super);
    function Licer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Licer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Licer504ApplicationJson.prototype, "errorDescription", void 0);
    return Licer504ApplicationJson;
}(SpeakeasyBase));
export { Licer504ApplicationJson };
var LicerRequest = /** @class */ (function (_super) {
    __extends(LicerRequest, _super);
    function LicerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", LicerRequestBody)
    ], LicerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LicerSecurity)
    ], LicerRequest.prototype, "security", void 0);
    return LicerRequest;
}(SpeakeasyBase));
export { LicerRequest };
var LicerResponse = /** @class */ (function (_super) {
    __extends(LicerResponse, _super);
    function LicerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LicerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LicerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Licer400ApplicationJson)
    ], LicerResponse.prototype, "licer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Licer401ApplicationJson)
    ], LicerResponse.prototype, "licer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Licer404ApplicationJson)
    ], LicerResponse.prototype, "licer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Licer500ApplicationJson)
    ], LicerResponse.prototype, "licer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Licer502ApplicationJson)
    ], LicerResponse.prototype, "licer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Licer503ApplicationJson)
    ], LicerResponse.prototype, "licer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Licer504ApplicationJson)
    ], LicerResponse.prototype, "licer504ApplicationJsonObject", void 0);
    return LicerResponse;
}(SpeakeasyBase));
export { LicerResponse };
