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
var SkcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SkcerRequestBodyCertificateParameters, _super);
    function SkcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], SkcerRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], SkcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=RollNumber" }),
        __metadata("design:type", String)
    ], SkcerRequestBodyCertificateParameters.prototype, "rollNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=Session" }),
        __metadata("design:type", String)
    ], SkcerRequestBodyCertificateParameters.prototype, "session", void 0);
    return SkcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { SkcerRequestBodyCertificateParameters };
export var SkcerRequestBodyFormatEnum;
(function (SkcerRequestBodyFormatEnum) {
    SkcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(SkcerRequestBodyFormatEnum || (SkcerRequestBodyFormatEnum = {}));
var SkcerRequestBody = /** @class */ (function (_super) {
    __extends(SkcerRequestBody, _super);
    function SkcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SkcerRequestBodyCertificateParameters)
    ], SkcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SkcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SkcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SkcerRequestBody.prototype, "txnId", void 0);
    return SkcerRequestBody;
}(SpeakeasyBase));
export { SkcerRequestBody };
var SkcerSecurity = /** @class */ (function (_super) {
    __extends(SkcerSecurity, _super);
    function SkcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SkcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SkcerSecurity.prototype, "clientId", void 0);
    return SkcerSecurity;
}(SpeakeasyBase));
export { SkcerSecurity };
var SkcerRequest = /** @class */ (function (_super) {
    __extends(SkcerRequest, _super);
    function SkcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SkcerRequestBody)
    ], SkcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SkcerSecurity)
    ], SkcerRequest.prototype, "security", void 0);
    return SkcerRequest;
}(SpeakeasyBase));
export { SkcerRequest };
export var Skcer400ApplicationJsonErrorEnum;
(function (Skcer400ApplicationJsonErrorEnum) {
    Skcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Skcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Skcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Skcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Skcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Skcer400ApplicationJsonErrorEnum || (Skcer400ApplicationJsonErrorEnum = {}));
export var Skcer400ApplicationJsonErrorDescriptionEnum;
(function (Skcer400ApplicationJsonErrorDescriptionEnum) {
    Skcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Skcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Skcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Skcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Skcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Skcer400ApplicationJsonErrorDescriptionEnum || (Skcer400ApplicationJsonErrorDescriptionEnum = {}));
var Skcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Skcer400ApplicationJson, _super);
    function Skcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Skcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Skcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Skcer400ApplicationJson;
}(SpeakeasyBase));
export { Skcer400ApplicationJson };
export var Skcer401ApplicationJsonErrorEnum;
(function (Skcer401ApplicationJsonErrorEnum) {
    Skcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Skcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Skcer401ApplicationJsonErrorEnum || (Skcer401ApplicationJsonErrorEnum = {}));
export var Skcer401ApplicationJsonErrorDescriptionEnum;
(function (Skcer401ApplicationJsonErrorDescriptionEnum) {
    Skcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Skcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Skcer401ApplicationJsonErrorDescriptionEnum || (Skcer401ApplicationJsonErrorDescriptionEnum = {}));
var Skcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Skcer401ApplicationJson, _super);
    function Skcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Skcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Skcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Skcer401ApplicationJson;
}(SpeakeasyBase));
export { Skcer401ApplicationJson };
export var Skcer404ApplicationJsonErrorEnum;
(function (Skcer404ApplicationJsonErrorEnum) {
    Skcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Skcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Skcer404ApplicationJsonErrorEnum || (Skcer404ApplicationJsonErrorEnum = {}));
export var Skcer404ApplicationJsonErrorDescriptionEnum;
(function (Skcer404ApplicationJsonErrorDescriptionEnum) {
    Skcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Skcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Skcer404ApplicationJsonErrorDescriptionEnum || (Skcer404ApplicationJsonErrorDescriptionEnum = {}));
var Skcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Skcer404ApplicationJson, _super);
    function Skcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Skcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Skcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Skcer404ApplicationJson;
}(SpeakeasyBase));
export { Skcer404ApplicationJson };
export var Skcer500ApplicationJsonErrorEnum;
(function (Skcer500ApplicationJsonErrorEnum) {
    Skcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Skcer500ApplicationJsonErrorEnum || (Skcer500ApplicationJsonErrorEnum = {}));
export var Skcer500ApplicationJsonErrorDescriptionEnum;
(function (Skcer500ApplicationJsonErrorDescriptionEnum) {
    Skcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Skcer500ApplicationJsonErrorDescriptionEnum || (Skcer500ApplicationJsonErrorDescriptionEnum = {}));
var Skcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Skcer500ApplicationJson, _super);
    function Skcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Skcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Skcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Skcer500ApplicationJson;
}(SpeakeasyBase));
export { Skcer500ApplicationJson };
export var Skcer502ApplicationJsonErrorEnum;
(function (Skcer502ApplicationJsonErrorEnum) {
    Skcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Skcer502ApplicationJsonErrorEnum || (Skcer502ApplicationJsonErrorEnum = {}));
export var Skcer502ApplicationJsonErrorDescriptionEnum;
(function (Skcer502ApplicationJsonErrorDescriptionEnum) {
    Skcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Skcer502ApplicationJsonErrorDescriptionEnum || (Skcer502ApplicationJsonErrorDescriptionEnum = {}));
var Skcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Skcer502ApplicationJson, _super);
    function Skcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Skcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Skcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Skcer502ApplicationJson;
}(SpeakeasyBase));
export { Skcer502ApplicationJson };
export var Skcer503ApplicationJsonErrorEnum;
(function (Skcer503ApplicationJsonErrorEnum) {
    Skcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Skcer503ApplicationJsonErrorEnum || (Skcer503ApplicationJsonErrorEnum = {}));
export var Skcer503ApplicationJsonErrorDescriptionEnum;
(function (Skcer503ApplicationJsonErrorDescriptionEnum) {
    Skcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Skcer503ApplicationJsonErrorDescriptionEnum || (Skcer503ApplicationJsonErrorDescriptionEnum = {}));
var Skcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Skcer503ApplicationJson, _super);
    function Skcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Skcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Skcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Skcer503ApplicationJson;
}(SpeakeasyBase));
export { Skcer503ApplicationJson };
export var Skcer504ApplicationJsonErrorEnum;
(function (Skcer504ApplicationJsonErrorEnum) {
    Skcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Skcer504ApplicationJsonErrorEnum || (Skcer504ApplicationJsonErrorEnum = {}));
export var Skcer504ApplicationJsonErrorDescriptionEnum;
(function (Skcer504ApplicationJsonErrorDescriptionEnum) {
    Skcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Skcer504ApplicationJsonErrorDescriptionEnum || (Skcer504ApplicationJsonErrorDescriptionEnum = {}));
var Skcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Skcer504ApplicationJson, _super);
    function Skcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Skcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Skcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Skcer504ApplicationJson;
}(SpeakeasyBase));
export { Skcer504ApplicationJson };
var SkcerResponse = /** @class */ (function (_super) {
    __extends(SkcerResponse, _super);
    function SkcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SkcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SkcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Skcer400ApplicationJson)
    ], SkcerResponse.prototype, "skcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Skcer401ApplicationJson)
    ], SkcerResponse.prototype, "skcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Skcer404ApplicationJson)
    ], SkcerResponse.prototype, "skcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Skcer500ApplicationJson)
    ], SkcerResponse.prototype, "skcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Skcer502ApplicationJson)
    ], SkcerResponse.prototype, "skcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Skcer503ApplicationJson)
    ], SkcerResponse.prototype, "skcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Skcer504ApplicationJson)
    ], SkcerResponse.prototype, "skcer504ApplicationJsonObject", void 0);
    return SkcerResponse;
}(SpeakeasyBase));
export { SkcerResponse };
