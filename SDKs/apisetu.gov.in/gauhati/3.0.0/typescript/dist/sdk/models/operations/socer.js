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
var SocerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SocerRequestBodyCertificateParameters, _super);
    function SocerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=APPL_NO" }),
        __metadata("design:type", String)
    ], SocerRequestBodyCertificateParameters.prototype, "applNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], SocerRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], SocerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SESSION" }),
        __metadata("design:type", String)
    ], SocerRequestBodyCertificateParameters.prototype, "session", void 0);
    return SocerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { SocerRequestBodyCertificateParameters };
export var SocerRequestBodyFormatEnum;
(function (SocerRequestBodyFormatEnum) {
    SocerRequestBodyFormatEnum["Pdf"] = "pdf";
})(SocerRequestBodyFormatEnum || (SocerRequestBodyFormatEnum = {}));
var SocerRequestBody = /** @class */ (function (_super) {
    __extends(SocerRequestBody, _super);
    function SocerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SocerRequestBodyCertificateParameters)
    ], SocerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SocerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SocerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SocerRequestBody.prototype, "txnId", void 0);
    return SocerRequestBody;
}(SpeakeasyBase));
export { SocerRequestBody };
var SocerSecurity = /** @class */ (function (_super) {
    __extends(SocerSecurity, _super);
    function SocerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SocerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SocerSecurity.prototype, "clientId", void 0);
    return SocerSecurity;
}(SpeakeasyBase));
export { SocerSecurity };
export var Socer400ApplicationJsonErrorEnum;
(function (Socer400ApplicationJsonErrorEnum) {
    Socer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Socer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Socer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Socer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Socer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Socer400ApplicationJsonErrorEnum || (Socer400ApplicationJsonErrorEnum = {}));
export var Socer400ApplicationJsonErrorDescriptionEnum;
(function (Socer400ApplicationJsonErrorDescriptionEnum) {
    Socer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Socer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Socer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Socer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Socer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Socer400ApplicationJsonErrorDescriptionEnum || (Socer400ApplicationJsonErrorDescriptionEnum = {}));
var Socer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Socer400ApplicationJson, _super);
    function Socer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Socer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Socer400ApplicationJson.prototype, "errorDescription", void 0);
    return Socer400ApplicationJson;
}(SpeakeasyBase));
export { Socer400ApplicationJson };
export var Socer401ApplicationJsonErrorEnum;
(function (Socer401ApplicationJsonErrorEnum) {
    Socer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Socer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Socer401ApplicationJsonErrorEnum || (Socer401ApplicationJsonErrorEnum = {}));
export var Socer401ApplicationJsonErrorDescriptionEnum;
(function (Socer401ApplicationJsonErrorDescriptionEnum) {
    Socer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Socer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Socer401ApplicationJsonErrorDescriptionEnum || (Socer401ApplicationJsonErrorDescriptionEnum = {}));
var Socer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Socer401ApplicationJson, _super);
    function Socer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Socer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Socer401ApplicationJson.prototype, "errorDescription", void 0);
    return Socer401ApplicationJson;
}(SpeakeasyBase));
export { Socer401ApplicationJson };
export var Socer404ApplicationJsonErrorEnum;
(function (Socer404ApplicationJsonErrorEnum) {
    Socer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Socer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Socer404ApplicationJsonErrorEnum || (Socer404ApplicationJsonErrorEnum = {}));
export var Socer404ApplicationJsonErrorDescriptionEnum;
(function (Socer404ApplicationJsonErrorDescriptionEnum) {
    Socer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Socer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Socer404ApplicationJsonErrorDescriptionEnum || (Socer404ApplicationJsonErrorDescriptionEnum = {}));
var Socer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Socer404ApplicationJson, _super);
    function Socer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Socer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Socer404ApplicationJson.prototype, "errorDescription", void 0);
    return Socer404ApplicationJson;
}(SpeakeasyBase));
export { Socer404ApplicationJson };
export var Socer500ApplicationJsonErrorEnum;
(function (Socer500ApplicationJsonErrorEnum) {
    Socer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Socer500ApplicationJsonErrorEnum || (Socer500ApplicationJsonErrorEnum = {}));
export var Socer500ApplicationJsonErrorDescriptionEnum;
(function (Socer500ApplicationJsonErrorDescriptionEnum) {
    Socer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Socer500ApplicationJsonErrorDescriptionEnum || (Socer500ApplicationJsonErrorDescriptionEnum = {}));
var Socer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Socer500ApplicationJson, _super);
    function Socer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Socer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Socer500ApplicationJson.prototype, "errorDescription", void 0);
    return Socer500ApplicationJson;
}(SpeakeasyBase));
export { Socer500ApplicationJson };
export var Socer502ApplicationJsonErrorEnum;
(function (Socer502ApplicationJsonErrorEnum) {
    Socer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Socer502ApplicationJsonErrorEnum || (Socer502ApplicationJsonErrorEnum = {}));
export var Socer502ApplicationJsonErrorDescriptionEnum;
(function (Socer502ApplicationJsonErrorDescriptionEnum) {
    Socer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Socer502ApplicationJsonErrorDescriptionEnum || (Socer502ApplicationJsonErrorDescriptionEnum = {}));
var Socer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Socer502ApplicationJson, _super);
    function Socer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Socer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Socer502ApplicationJson.prototype, "errorDescription", void 0);
    return Socer502ApplicationJson;
}(SpeakeasyBase));
export { Socer502ApplicationJson };
export var Socer503ApplicationJsonErrorEnum;
(function (Socer503ApplicationJsonErrorEnum) {
    Socer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Socer503ApplicationJsonErrorEnum || (Socer503ApplicationJsonErrorEnum = {}));
export var Socer503ApplicationJsonErrorDescriptionEnum;
(function (Socer503ApplicationJsonErrorDescriptionEnum) {
    Socer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Socer503ApplicationJsonErrorDescriptionEnum || (Socer503ApplicationJsonErrorDescriptionEnum = {}));
var Socer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Socer503ApplicationJson, _super);
    function Socer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Socer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Socer503ApplicationJson.prototype, "errorDescription", void 0);
    return Socer503ApplicationJson;
}(SpeakeasyBase));
export { Socer503ApplicationJson };
export var Socer504ApplicationJsonErrorEnum;
(function (Socer504ApplicationJsonErrorEnum) {
    Socer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Socer504ApplicationJsonErrorEnum || (Socer504ApplicationJsonErrorEnum = {}));
export var Socer504ApplicationJsonErrorDescriptionEnum;
(function (Socer504ApplicationJsonErrorDescriptionEnum) {
    Socer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Socer504ApplicationJsonErrorDescriptionEnum || (Socer504ApplicationJsonErrorDescriptionEnum = {}));
var Socer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Socer504ApplicationJson, _super);
    function Socer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Socer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Socer504ApplicationJson.prototype, "errorDescription", void 0);
    return Socer504ApplicationJson;
}(SpeakeasyBase));
export { Socer504ApplicationJson };
var SocerRequest = /** @class */ (function (_super) {
    __extends(SocerRequest, _super);
    function SocerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SocerRequestBody)
    ], SocerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SocerSecurity)
    ], SocerRequest.prototype, "security", void 0);
    return SocerRequest;
}(SpeakeasyBase));
export { SocerRequest };
var SocerResponse = /** @class */ (function (_super) {
    __extends(SocerResponse, _super);
    function SocerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SocerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SocerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Socer400ApplicationJson)
    ], SocerResponse.prototype, "socer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Socer401ApplicationJson)
    ], SocerResponse.prototype, "socer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Socer404ApplicationJson)
    ], SocerResponse.prototype, "socer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Socer500ApplicationJson)
    ], SocerResponse.prototype, "socer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Socer502ApplicationJson)
    ], SocerResponse.prototype, "socer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Socer503ApplicationJson)
    ], SocerResponse.prototype, "socer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Socer504ApplicationJson)
    ], SocerResponse.prototype, "socer504ApplicationJsonObject", void 0);
    return SocerResponse;
}(SpeakeasyBase));
export { SocerResponse };
