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
var OtcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(OtcerRequestBodyCertificateParameters, _super);
    function OtcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], OtcerRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], OtcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], OtcerRequestBodyCertificateParameters.prototype, "uid", void 0);
    return OtcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { OtcerRequestBodyCertificateParameters };
export var OtcerRequestBodyFormatEnum;
(function (OtcerRequestBodyFormatEnum) {
    OtcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(OtcerRequestBodyFormatEnum || (OtcerRequestBodyFormatEnum = {}));
var OtcerRequestBody = /** @class */ (function (_super) {
    __extends(OtcerRequestBody, _super);
    function OtcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", OtcerRequestBodyCertificateParameters)
    ], OtcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], OtcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], OtcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], OtcerRequestBody.prototype, "txnId", void 0);
    return OtcerRequestBody;
}(SpeakeasyBase));
export { OtcerRequestBody };
var OtcerSecurity = /** @class */ (function (_super) {
    __extends(OtcerSecurity, _super);
    function OtcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], OtcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], OtcerSecurity.prototype, "clientId", void 0);
    return OtcerSecurity;
}(SpeakeasyBase));
export { OtcerSecurity };
var OtcerRequest = /** @class */ (function (_super) {
    __extends(OtcerRequest, _super);
    function OtcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", OtcerRequestBody)
    ], OtcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OtcerSecurity)
    ], OtcerRequest.prototype, "security", void 0);
    return OtcerRequest;
}(SpeakeasyBase));
export { OtcerRequest };
export var Otcer400ApplicationJsonErrorEnum;
(function (Otcer400ApplicationJsonErrorEnum) {
    Otcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Otcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Otcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Otcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Otcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Otcer400ApplicationJsonErrorEnum || (Otcer400ApplicationJsonErrorEnum = {}));
export var Otcer400ApplicationJsonErrorDescriptionEnum;
(function (Otcer400ApplicationJsonErrorDescriptionEnum) {
    Otcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Otcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Otcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Otcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Otcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Otcer400ApplicationJsonErrorDescriptionEnum || (Otcer400ApplicationJsonErrorDescriptionEnum = {}));
var Otcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Otcer400ApplicationJson, _super);
    function Otcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Otcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Otcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Otcer400ApplicationJson;
}(SpeakeasyBase));
export { Otcer400ApplicationJson };
export var Otcer401ApplicationJsonErrorEnum;
(function (Otcer401ApplicationJsonErrorEnum) {
    Otcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Otcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Otcer401ApplicationJsonErrorEnum || (Otcer401ApplicationJsonErrorEnum = {}));
export var Otcer401ApplicationJsonErrorDescriptionEnum;
(function (Otcer401ApplicationJsonErrorDescriptionEnum) {
    Otcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Otcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Otcer401ApplicationJsonErrorDescriptionEnum || (Otcer401ApplicationJsonErrorDescriptionEnum = {}));
var Otcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Otcer401ApplicationJson, _super);
    function Otcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Otcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Otcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Otcer401ApplicationJson;
}(SpeakeasyBase));
export { Otcer401ApplicationJson };
export var Otcer404ApplicationJsonErrorEnum;
(function (Otcer404ApplicationJsonErrorEnum) {
    Otcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Otcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Otcer404ApplicationJsonErrorEnum || (Otcer404ApplicationJsonErrorEnum = {}));
export var Otcer404ApplicationJsonErrorDescriptionEnum;
(function (Otcer404ApplicationJsonErrorDescriptionEnum) {
    Otcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Otcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Otcer404ApplicationJsonErrorDescriptionEnum || (Otcer404ApplicationJsonErrorDescriptionEnum = {}));
var Otcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Otcer404ApplicationJson, _super);
    function Otcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Otcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Otcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Otcer404ApplicationJson;
}(SpeakeasyBase));
export { Otcer404ApplicationJson };
export var Otcer500ApplicationJsonErrorEnum;
(function (Otcer500ApplicationJsonErrorEnum) {
    Otcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Otcer500ApplicationJsonErrorEnum || (Otcer500ApplicationJsonErrorEnum = {}));
export var Otcer500ApplicationJsonErrorDescriptionEnum;
(function (Otcer500ApplicationJsonErrorDescriptionEnum) {
    Otcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Otcer500ApplicationJsonErrorDescriptionEnum || (Otcer500ApplicationJsonErrorDescriptionEnum = {}));
var Otcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Otcer500ApplicationJson, _super);
    function Otcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Otcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Otcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Otcer500ApplicationJson;
}(SpeakeasyBase));
export { Otcer500ApplicationJson };
export var Otcer502ApplicationJsonErrorEnum;
(function (Otcer502ApplicationJsonErrorEnum) {
    Otcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Otcer502ApplicationJsonErrorEnum || (Otcer502ApplicationJsonErrorEnum = {}));
export var Otcer502ApplicationJsonErrorDescriptionEnum;
(function (Otcer502ApplicationJsonErrorDescriptionEnum) {
    Otcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Otcer502ApplicationJsonErrorDescriptionEnum || (Otcer502ApplicationJsonErrorDescriptionEnum = {}));
var Otcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Otcer502ApplicationJson, _super);
    function Otcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Otcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Otcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Otcer502ApplicationJson;
}(SpeakeasyBase));
export { Otcer502ApplicationJson };
export var Otcer503ApplicationJsonErrorEnum;
(function (Otcer503ApplicationJsonErrorEnum) {
    Otcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Otcer503ApplicationJsonErrorEnum || (Otcer503ApplicationJsonErrorEnum = {}));
export var Otcer503ApplicationJsonErrorDescriptionEnum;
(function (Otcer503ApplicationJsonErrorDescriptionEnum) {
    Otcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Otcer503ApplicationJsonErrorDescriptionEnum || (Otcer503ApplicationJsonErrorDescriptionEnum = {}));
var Otcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Otcer503ApplicationJson, _super);
    function Otcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Otcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Otcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Otcer503ApplicationJson;
}(SpeakeasyBase));
export { Otcer503ApplicationJson };
export var Otcer504ApplicationJsonErrorEnum;
(function (Otcer504ApplicationJsonErrorEnum) {
    Otcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Otcer504ApplicationJsonErrorEnum || (Otcer504ApplicationJsonErrorEnum = {}));
export var Otcer504ApplicationJsonErrorDescriptionEnum;
(function (Otcer504ApplicationJsonErrorDescriptionEnum) {
    Otcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Otcer504ApplicationJsonErrorDescriptionEnum || (Otcer504ApplicationJsonErrorDescriptionEnum = {}));
var Otcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Otcer504ApplicationJson, _super);
    function Otcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Otcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Otcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Otcer504ApplicationJson;
}(SpeakeasyBase));
export { Otcer504ApplicationJson };
var OtcerResponse = /** @class */ (function (_super) {
    __extends(OtcerResponse, _super);
    function OtcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OtcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], OtcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Otcer400ApplicationJson)
    ], OtcerResponse.prototype, "otcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Otcer401ApplicationJson)
    ], OtcerResponse.prototype, "otcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Otcer404ApplicationJson)
    ], OtcerResponse.prototype, "otcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Otcer500ApplicationJson)
    ], OtcerResponse.prototype, "otcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Otcer502ApplicationJson)
    ], OtcerResponse.prototype, "otcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Otcer503ApplicationJson)
    ], OtcerResponse.prototype, "otcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Otcer504ApplicationJson)
    ], OtcerResponse.prototype, "otcer504ApplicationJsonObject", void 0);
    return OtcerResponse;
}(SpeakeasyBase));
export { OtcerResponse };
