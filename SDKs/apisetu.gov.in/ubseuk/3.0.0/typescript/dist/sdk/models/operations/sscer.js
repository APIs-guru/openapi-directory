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
var SscerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SscerRequestBodyCertificateParameters, _super);
    function SscerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], SscerRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], SscerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RROLL" }),
        __metadata("design:type", String)
    ], SscerRequestBodyCertificateParameters.prototype, "rroll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], SscerRequestBodyCertificateParameters.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=YEAR" }),
        __metadata("design:type", String)
    ], SscerRequestBodyCertificateParameters.prototype, "year", void 0);
    return SscerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { SscerRequestBodyCertificateParameters };
export var SscerRequestBodyFormatEnum;
(function (SscerRequestBodyFormatEnum) {
    SscerRequestBodyFormatEnum["Pdf"] = "pdf";
})(SscerRequestBodyFormatEnum || (SscerRequestBodyFormatEnum = {}));
var SscerRequestBody = /** @class */ (function (_super) {
    __extends(SscerRequestBody, _super);
    function SscerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SscerRequestBodyCertificateParameters)
    ], SscerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SscerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SscerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SscerRequestBody.prototype, "txnId", void 0);
    return SscerRequestBody;
}(SpeakeasyBase));
export { SscerRequestBody };
var SscerSecurity = /** @class */ (function (_super) {
    __extends(SscerSecurity, _super);
    function SscerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SscerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SscerSecurity.prototype, "clientId", void 0);
    return SscerSecurity;
}(SpeakeasyBase));
export { SscerSecurity };
export var Sscer400ApplicationJsonErrorEnum;
(function (Sscer400ApplicationJsonErrorEnum) {
    Sscer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Sscer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Sscer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Sscer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Sscer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Sscer400ApplicationJsonErrorEnum || (Sscer400ApplicationJsonErrorEnum = {}));
export var Sscer400ApplicationJsonErrorDescriptionEnum;
(function (Sscer400ApplicationJsonErrorDescriptionEnum) {
    Sscer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Sscer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Sscer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Sscer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Sscer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Sscer400ApplicationJsonErrorDescriptionEnum || (Sscer400ApplicationJsonErrorDescriptionEnum = {}));
var Sscer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Sscer400ApplicationJson, _super);
    function Sscer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sscer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sscer400ApplicationJson.prototype, "errorDescription", void 0);
    return Sscer400ApplicationJson;
}(SpeakeasyBase));
export { Sscer400ApplicationJson };
export var Sscer401ApplicationJsonErrorEnum;
(function (Sscer401ApplicationJsonErrorEnum) {
    Sscer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Sscer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Sscer401ApplicationJsonErrorEnum || (Sscer401ApplicationJsonErrorEnum = {}));
export var Sscer401ApplicationJsonErrorDescriptionEnum;
(function (Sscer401ApplicationJsonErrorDescriptionEnum) {
    Sscer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Sscer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Sscer401ApplicationJsonErrorDescriptionEnum || (Sscer401ApplicationJsonErrorDescriptionEnum = {}));
var Sscer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Sscer401ApplicationJson, _super);
    function Sscer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sscer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sscer401ApplicationJson.prototype, "errorDescription", void 0);
    return Sscer401ApplicationJson;
}(SpeakeasyBase));
export { Sscer401ApplicationJson };
export var Sscer404ApplicationJsonErrorEnum;
(function (Sscer404ApplicationJsonErrorEnum) {
    Sscer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Sscer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Sscer404ApplicationJsonErrorEnum || (Sscer404ApplicationJsonErrorEnum = {}));
export var Sscer404ApplicationJsonErrorDescriptionEnum;
(function (Sscer404ApplicationJsonErrorDescriptionEnum) {
    Sscer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Sscer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Sscer404ApplicationJsonErrorDescriptionEnum || (Sscer404ApplicationJsonErrorDescriptionEnum = {}));
var Sscer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Sscer404ApplicationJson, _super);
    function Sscer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sscer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sscer404ApplicationJson.prototype, "errorDescription", void 0);
    return Sscer404ApplicationJson;
}(SpeakeasyBase));
export { Sscer404ApplicationJson };
export var Sscer500ApplicationJsonErrorEnum;
(function (Sscer500ApplicationJsonErrorEnum) {
    Sscer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Sscer500ApplicationJsonErrorEnum || (Sscer500ApplicationJsonErrorEnum = {}));
export var Sscer500ApplicationJsonErrorDescriptionEnum;
(function (Sscer500ApplicationJsonErrorDescriptionEnum) {
    Sscer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Sscer500ApplicationJsonErrorDescriptionEnum || (Sscer500ApplicationJsonErrorDescriptionEnum = {}));
var Sscer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Sscer500ApplicationJson, _super);
    function Sscer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sscer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sscer500ApplicationJson.prototype, "errorDescription", void 0);
    return Sscer500ApplicationJson;
}(SpeakeasyBase));
export { Sscer500ApplicationJson };
export var Sscer502ApplicationJsonErrorEnum;
(function (Sscer502ApplicationJsonErrorEnum) {
    Sscer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Sscer502ApplicationJsonErrorEnum || (Sscer502ApplicationJsonErrorEnum = {}));
export var Sscer502ApplicationJsonErrorDescriptionEnum;
(function (Sscer502ApplicationJsonErrorDescriptionEnum) {
    Sscer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Sscer502ApplicationJsonErrorDescriptionEnum || (Sscer502ApplicationJsonErrorDescriptionEnum = {}));
var Sscer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Sscer502ApplicationJson, _super);
    function Sscer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sscer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sscer502ApplicationJson.prototype, "errorDescription", void 0);
    return Sscer502ApplicationJson;
}(SpeakeasyBase));
export { Sscer502ApplicationJson };
export var Sscer503ApplicationJsonErrorEnum;
(function (Sscer503ApplicationJsonErrorEnum) {
    Sscer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Sscer503ApplicationJsonErrorEnum || (Sscer503ApplicationJsonErrorEnum = {}));
export var Sscer503ApplicationJsonErrorDescriptionEnum;
(function (Sscer503ApplicationJsonErrorDescriptionEnum) {
    Sscer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Sscer503ApplicationJsonErrorDescriptionEnum || (Sscer503ApplicationJsonErrorDescriptionEnum = {}));
var Sscer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Sscer503ApplicationJson, _super);
    function Sscer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sscer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sscer503ApplicationJson.prototype, "errorDescription", void 0);
    return Sscer503ApplicationJson;
}(SpeakeasyBase));
export { Sscer503ApplicationJson };
export var Sscer504ApplicationJsonErrorEnum;
(function (Sscer504ApplicationJsonErrorEnum) {
    Sscer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Sscer504ApplicationJsonErrorEnum || (Sscer504ApplicationJsonErrorEnum = {}));
export var Sscer504ApplicationJsonErrorDescriptionEnum;
(function (Sscer504ApplicationJsonErrorDescriptionEnum) {
    Sscer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Sscer504ApplicationJsonErrorDescriptionEnum || (Sscer504ApplicationJsonErrorDescriptionEnum = {}));
var Sscer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Sscer504ApplicationJson, _super);
    function Sscer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sscer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sscer504ApplicationJson.prototype, "errorDescription", void 0);
    return Sscer504ApplicationJson;
}(SpeakeasyBase));
export { Sscer504ApplicationJson };
var SscerRequest = /** @class */ (function (_super) {
    __extends(SscerRequest, _super);
    function SscerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SscerRequestBody)
    ], SscerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SscerSecurity)
    ], SscerRequest.prototype, "security", void 0);
    return SscerRequest;
}(SpeakeasyBase));
export { SscerRequest };
var SscerResponse = /** @class */ (function (_super) {
    __extends(SscerResponse, _super);
    function SscerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SscerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SscerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sscer400ApplicationJson)
    ], SscerResponse.prototype, "sscer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sscer401ApplicationJson)
    ], SscerResponse.prototype, "sscer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sscer404ApplicationJson)
    ], SscerResponse.prototype, "sscer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sscer500ApplicationJson)
    ], SscerResponse.prototype, "sscer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sscer502ApplicationJson)
    ], SscerResponse.prototype, "sscer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sscer503ApplicationJson)
    ], SscerResponse.prototype, "sscer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sscer504ApplicationJson)
    ], SscerResponse.prototype, "sscer504ApplicationJsonObject", void 0);
    return SscerResponse;
}(SpeakeasyBase));
export { SscerResponse };
