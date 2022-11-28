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
var SslcrRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SslcrRequestBodyCertificateParameters, _super);
    function SslcrRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], SslcrRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], SslcrRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], SslcrRequestBodyCertificateParameters.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regno" }),
        __metadata("design:type", String)
    ], SslcrRequestBodyCertificateParameters.prototype, "regno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], SslcrRequestBodyCertificateParameters.prototype, "year", void 0);
    return SslcrRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { SslcrRequestBodyCertificateParameters };
export var SslcrRequestBodyFormatEnum;
(function (SslcrRequestBodyFormatEnum) {
    SslcrRequestBodyFormatEnum["Pdf"] = "pdf";
})(SslcrRequestBodyFormatEnum || (SslcrRequestBodyFormatEnum = {}));
var SslcrRequestBody = /** @class */ (function (_super) {
    __extends(SslcrRequestBody, _super);
    function SslcrRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SslcrRequestBodyCertificateParameters)
    ], SslcrRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SslcrRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SslcrRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SslcrRequestBody.prototype, "txnId", void 0);
    return SslcrRequestBody;
}(SpeakeasyBase));
export { SslcrRequestBody };
var SslcrSecurity = /** @class */ (function (_super) {
    __extends(SslcrSecurity, _super);
    function SslcrSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SslcrSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SslcrSecurity.prototype, "clientId", void 0);
    return SslcrSecurity;
}(SpeakeasyBase));
export { SslcrSecurity };
export var Sslcr400ApplicationJsonErrorEnum;
(function (Sslcr400ApplicationJsonErrorEnum) {
    Sslcr400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Sslcr400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Sslcr400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Sslcr400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Sslcr400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Sslcr400ApplicationJsonErrorEnum || (Sslcr400ApplicationJsonErrorEnum = {}));
export var Sslcr400ApplicationJsonErrorDescriptionEnum;
(function (Sslcr400ApplicationJsonErrorDescriptionEnum) {
    Sslcr400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Sslcr400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Sslcr400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Sslcr400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Sslcr400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Sslcr400ApplicationJsonErrorDescriptionEnum || (Sslcr400ApplicationJsonErrorDescriptionEnum = {}));
var Sslcr400ApplicationJson = /** @class */ (function (_super) {
    __extends(Sslcr400ApplicationJson, _super);
    function Sslcr400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sslcr400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sslcr400ApplicationJson.prototype, "errorDescription", void 0);
    return Sslcr400ApplicationJson;
}(SpeakeasyBase));
export { Sslcr400ApplicationJson };
export var Sslcr401ApplicationJsonErrorEnum;
(function (Sslcr401ApplicationJsonErrorEnum) {
    Sslcr401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Sslcr401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Sslcr401ApplicationJsonErrorEnum || (Sslcr401ApplicationJsonErrorEnum = {}));
export var Sslcr401ApplicationJsonErrorDescriptionEnum;
(function (Sslcr401ApplicationJsonErrorDescriptionEnum) {
    Sslcr401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Sslcr401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Sslcr401ApplicationJsonErrorDescriptionEnum || (Sslcr401ApplicationJsonErrorDescriptionEnum = {}));
var Sslcr401ApplicationJson = /** @class */ (function (_super) {
    __extends(Sslcr401ApplicationJson, _super);
    function Sslcr401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sslcr401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sslcr401ApplicationJson.prototype, "errorDescription", void 0);
    return Sslcr401ApplicationJson;
}(SpeakeasyBase));
export { Sslcr401ApplicationJson };
export var Sslcr404ApplicationJsonErrorEnum;
(function (Sslcr404ApplicationJsonErrorEnum) {
    Sslcr404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Sslcr404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Sslcr404ApplicationJsonErrorEnum || (Sslcr404ApplicationJsonErrorEnum = {}));
export var Sslcr404ApplicationJsonErrorDescriptionEnum;
(function (Sslcr404ApplicationJsonErrorDescriptionEnum) {
    Sslcr404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Sslcr404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Sslcr404ApplicationJsonErrorDescriptionEnum || (Sslcr404ApplicationJsonErrorDescriptionEnum = {}));
var Sslcr404ApplicationJson = /** @class */ (function (_super) {
    __extends(Sslcr404ApplicationJson, _super);
    function Sslcr404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sslcr404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sslcr404ApplicationJson.prototype, "errorDescription", void 0);
    return Sslcr404ApplicationJson;
}(SpeakeasyBase));
export { Sslcr404ApplicationJson };
export var Sslcr500ApplicationJsonErrorEnum;
(function (Sslcr500ApplicationJsonErrorEnum) {
    Sslcr500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Sslcr500ApplicationJsonErrorEnum || (Sslcr500ApplicationJsonErrorEnum = {}));
export var Sslcr500ApplicationJsonErrorDescriptionEnum;
(function (Sslcr500ApplicationJsonErrorDescriptionEnum) {
    Sslcr500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Sslcr500ApplicationJsonErrorDescriptionEnum || (Sslcr500ApplicationJsonErrorDescriptionEnum = {}));
var Sslcr500ApplicationJson = /** @class */ (function (_super) {
    __extends(Sslcr500ApplicationJson, _super);
    function Sslcr500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sslcr500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sslcr500ApplicationJson.prototype, "errorDescription", void 0);
    return Sslcr500ApplicationJson;
}(SpeakeasyBase));
export { Sslcr500ApplicationJson };
export var Sslcr502ApplicationJsonErrorEnum;
(function (Sslcr502ApplicationJsonErrorEnum) {
    Sslcr502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Sslcr502ApplicationJsonErrorEnum || (Sslcr502ApplicationJsonErrorEnum = {}));
export var Sslcr502ApplicationJsonErrorDescriptionEnum;
(function (Sslcr502ApplicationJsonErrorDescriptionEnum) {
    Sslcr502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Sslcr502ApplicationJsonErrorDescriptionEnum || (Sslcr502ApplicationJsonErrorDescriptionEnum = {}));
var Sslcr502ApplicationJson = /** @class */ (function (_super) {
    __extends(Sslcr502ApplicationJson, _super);
    function Sslcr502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sslcr502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sslcr502ApplicationJson.prototype, "errorDescription", void 0);
    return Sslcr502ApplicationJson;
}(SpeakeasyBase));
export { Sslcr502ApplicationJson };
export var Sslcr503ApplicationJsonErrorEnum;
(function (Sslcr503ApplicationJsonErrorEnum) {
    Sslcr503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Sslcr503ApplicationJsonErrorEnum || (Sslcr503ApplicationJsonErrorEnum = {}));
export var Sslcr503ApplicationJsonErrorDescriptionEnum;
(function (Sslcr503ApplicationJsonErrorDescriptionEnum) {
    Sslcr503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Sslcr503ApplicationJsonErrorDescriptionEnum || (Sslcr503ApplicationJsonErrorDescriptionEnum = {}));
var Sslcr503ApplicationJson = /** @class */ (function (_super) {
    __extends(Sslcr503ApplicationJson, _super);
    function Sslcr503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sslcr503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sslcr503ApplicationJson.prototype, "errorDescription", void 0);
    return Sslcr503ApplicationJson;
}(SpeakeasyBase));
export { Sslcr503ApplicationJson };
export var Sslcr504ApplicationJsonErrorEnum;
(function (Sslcr504ApplicationJsonErrorEnum) {
    Sslcr504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Sslcr504ApplicationJsonErrorEnum || (Sslcr504ApplicationJsonErrorEnum = {}));
export var Sslcr504ApplicationJsonErrorDescriptionEnum;
(function (Sslcr504ApplicationJsonErrorDescriptionEnum) {
    Sslcr504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Sslcr504ApplicationJsonErrorDescriptionEnum || (Sslcr504ApplicationJsonErrorDescriptionEnum = {}));
var Sslcr504ApplicationJson = /** @class */ (function (_super) {
    __extends(Sslcr504ApplicationJson, _super);
    function Sslcr504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sslcr504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sslcr504ApplicationJson.prototype, "errorDescription", void 0);
    return Sslcr504ApplicationJson;
}(SpeakeasyBase));
export { Sslcr504ApplicationJson };
var SslcrRequest = /** @class */ (function (_super) {
    __extends(SslcrRequest, _super);
    function SslcrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SslcrRequestBody)
    ], SslcrRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SslcrSecurity)
    ], SslcrRequest.prototype, "security", void 0);
    return SslcrRequest;
}(SpeakeasyBase));
export { SslcrRequest };
var SslcrResponse = /** @class */ (function (_super) {
    __extends(SslcrResponse, _super);
    function SslcrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SslcrResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SslcrResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sslcr400ApplicationJson)
    ], SslcrResponse.prototype, "sslcr400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sslcr401ApplicationJson)
    ], SslcrResponse.prototype, "sslcr401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sslcr404ApplicationJson)
    ], SslcrResponse.prototype, "sslcr404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sslcr500ApplicationJson)
    ], SslcrResponse.prototype, "sslcr500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sslcr502ApplicationJson)
    ], SslcrResponse.prototype, "sslcr502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sslcr503ApplicationJson)
    ], SslcrResponse.prototype, "sslcr503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sslcr504ApplicationJson)
    ], SslcrResponse.prototype, "sslcr504ApplicationJsonObject", void 0);
    return SslcrResponse;
}(SpeakeasyBase));
export { SslcrResponse };
