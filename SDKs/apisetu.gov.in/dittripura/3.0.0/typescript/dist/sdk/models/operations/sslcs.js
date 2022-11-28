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
var SslcsRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SslcsRequestBodyCertificateParameters, _super);
    function SslcsRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], SslcsRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], SslcsRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return SslcsRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { SslcsRequestBodyCertificateParameters };
export var SslcsRequestBodyFormatEnum;
(function (SslcsRequestBodyFormatEnum) {
    SslcsRequestBodyFormatEnum["Pdf"] = "pdf";
})(SslcsRequestBodyFormatEnum || (SslcsRequestBodyFormatEnum = {}));
var SslcsRequestBody = /** @class */ (function (_super) {
    __extends(SslcsRequestBody, _super);
    function SslcsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SslcsRequestBodyCertificateParameters)
    ], SslcsRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SslcsRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SslcsRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SslcsRequestBody.prototype, "txnId", void 0);
    return SslcsRequestBody;
}(SpeakeasyBase));
export { SslcsRequestBody };
var SslcsSecurity = /** @class */ (function (_super) {
    __extends(SslcsSecurity, _super);
    function SslcsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SslcsSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SslcsSecurity.prototype, "clientId", void 0);
    return SslcsSecurity;
}(SpeakeasyBase));
export { SslcsSecurity };
export var Sslcs400ApplicationJsonErrorEnum;
(function (Sslcs400ApplicationJsonErrorEnum) {
    Sslcs400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Sslcs400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Sslcs400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Sslcs400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Sslcs400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Sslcs400ApplicationJsonErrorEnum || (Sslcs400ApplicationJsonErrorEnum = {}));
export var Sslcs400ApplicationJsonErrorDescriptionEnum;
(function (Sslcs400ApplicationJsonErrorDescriptionEnum) {
    Sslcs400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Sslcs400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Sslcs400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Sslcs400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Sslcs400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Sslcs400ApplicationJsonErrorDescriptionEnum || (Sslcs400ApplicationJsonErrorDescriptionEnum = {}));
var Sslcs400ApplicationJson = /** @class */ (function (_super) {
    __extends(Sslcs400ApplicationJson, _super);
    function Sslcs400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sslcs400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sslcs400ApplicationJson.prototype, "errorDescription", void 0);
    return Sslcs400ApplicationJson;
}(SpeakeasyBase));
export { Sslcs400ApplicationJson };
export var Sslcs401ApplicationJsonErrorEnum;
(function (Sslcs401ApplicationJsonErrorEnum) {
    Sslcs401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Sslcs401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Sslcs401ApplicationJsonErrorEnum || (Sslcs401ApplicationJsonErrorEnum = {}));
export var Sslcs401ApplicationJsonErrorDescriptionEnum;
(function (Sslcs401ApplicationJsonErrorDescriptionEnum) {
    Sslcs401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Sslcs401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Sslcs401ApplicationJsonErrorDescriptionEnum || (Sslcs401ApplicationJsonErrorDescriptionEnum = {}));
var Sslcs401ApplicationJson = /** @class */ (function (_super) {
    __extends(Sslcs401ApplicationJson, _super);
    function Sslcs401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sslcs401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sslcs401ApplicationJson.prototype, "errorDescription", void 0);
    return Sslcs401ApplicationJson;
}(SpeakeasyBase));
export { Sslcs401ApplicationJson };
export var Sslcs404ApplicationJsonErrorEnum;
(function (Sslcs404ApplicationJsonErrorEnum) {
    Sslcs404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Sslcs404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Sslcs404ApplicationJsonErrorEnum || (Sslcs404ApplicationJsonErrorEnum = {}));
export var Sslcs404ApplicationJsonErrorDescriptionEnum;
(function (Sslcs404ApplicationJsonErrorDescriptionEnum) {
    Sslcs404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Sslcs404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Sslcs404ApplicationJsonErrorDescriptionEnum || (Sslcs404ApplicationJsonErrorDescriptionEnum = {}));
var Sslcs404ApplicationJson = /** @class */ (function (_super) {
    __extends(Sslcs404ApplicationJson, _super);
    function Sslcs404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sslcs404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sslcs404ApplicationJson.prototype, "errorDescription", void 0);
    return Sslcs404ApplicationJson;
}(SpeakeasyBase));
export { Sslcs404ApplicationJson };
export var Sslcs500ApplicationJsonErrorEnum;
(function (Sslcs500ApplicationJsonErrorEnum) {
    Sslcs500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Sslcs500ApplicationJsonErrorEnum || (Sslcs500ApplicationJsonErrorEnum = {}));
export var Sslcs500ApplicationJsonErrorDescriptionEnum;
(function (Sslcs500ApplicationJsonErrorDescriptionEnum) {
    Sslcs500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Sslcs500ApplicationJsonErrorDescriptionEnum || (Sslcs500ApplicationJsonErrorDescriptionEnum = {}));
var Sslcs500ApplicationJson = /** @class */ (function (_super) {
    __extends(Sslcs500ApplicationJson, _super);
    function Sslcs500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sslcs500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sslcs500ApplicationJson.prototype, "errorDescription", void 0);
    return Sslcs500ApplicationJson;
}(SpeakeasyBase));
export { Sslcs500ApplicationJson };
export var Sslcs502ApplicationJsonErrorEnum;
(function (Sslcs502ApplicationJsonErrorEnum) {
    Sslcs502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Sslcs502ApplicationJsonErrorEnum || (Sslcs502ApplicationJsonErrorEnum = {}));
export var Sslcs502ApplicationJsonErrorDescriptionEnum;
(function (Sslcs502ApplicationJsonErrorDescriptionEnum) {
    Sslcs502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Sslcs502ApplicationJsonErrorDescriptionEnum || (Sslcs502ApplicationJsonErrorDescriptionEnum = {}));
var Sslcs502ApplicationJson = /** @class */ (function (_super) {
    __extends(Sslcs502ApplicationJson, _super);
    function Sslcs502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sslcs502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sslcs502ApplicationJson.prototype, "errorDescription", void 0);
    return Sslcs502ApplicationJson;
}(SpeakeasyBase));
export { Sslcs502ApplicationJson };
export var Sslcs503ApplicationJsonErrorEnum;
(function (Sslcs503ApplicationJsonErrorEnum) {
    Sslcs503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Sslcs503ApplicationJsonErrorEnum || (Sslcs503ApplicationJsonErrorEnum = {}));
export var Sslcs503ApplicationJsonErrorDescriptionEnum;
(function (Sslcs503ApplicationJsonErrorDescriptionEnum) {
    Sslcs503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Sslcs503ApplicationJsonErrorDescriptionEnum || (Sslcs503ApplicationJsonErrorDescriptionEnum = {}));
var Sslcs503ApplicationJson = /** @class */ (function (_super) {
    __extends(Sslcs503ApplicationJson, _super);
    function Sslcs503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sslcs503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sslcs503ApplicationJson.prototype, "errorDescription", void 0);
    return Sslcs503ApplicationJson;
}(SpeakeasyBase));
export { Sslcs503ApplicationJson };
export var Sslcs504ApplicationJsonErrorEnum;
(function (Sslcs504ApplicationJsonErrorEnum) {
    Sslcs504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Sslcs504ApplicationJsonErrorEnum || (Sslcs504ApplicationJsonErrorEnum = {}));
export var Sslcs504ApplicationJsonErrorDescriptionEnum;
(function (Sslcs504ApplicationJsonErrorDescriptionEnum) {
    Sslcs504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Sslcs504ApplicationJsonErrorDescriptionEnum || (Sslcs504ApplicationJsonErrorDescriptionEnum = {}));
var Sslcs504ApplicationJson = /** @class */ (function (_super) {
    __extends(Sslcs504ApplicationJson, _super);
    function Sslcs504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sslcs504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sslcs504ApplicationJson.prototype, "errorDescription", void 0);
    return Sslcs504ApplicationJson;
}(SpeakeasyBase));
export { Sslcs504ApplicationJson };
var SslcsRequest = /** @class */ (function (_super) {
    __extends(SslcsRequest, _super);
    function SslcsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SslcsRequestBody)
    ], SslcsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SslcsSecurity)
    ], SslcsRequest.prototype, "security", void 0);
    return SslcsRequest;
}(SpeakeasyBase));
export { SslcsRequest };
var SslcsResponse = /** @class */ (function (_super) {
    __extends(SslcsResponse, _super);
    function SslcsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SslcsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SslcsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sslcs400ApplicationJson)
    ], SslcsResponse.prototype, "sslcs400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sslcs401ApplicationJson)
    ], SslcsResponse.prototype, "sslcs401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sslcs404ApplicationJson)
    ], SslcsResponse.prototype, "sslcs404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sslcs500ApplicationJson)
    ], SslcsResponse.prototype, "sslcs500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sslcs502ApplicationJson)
    ], SslcsResponse.prototype, "sslcs502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sslcs503ApplicationJson)
    ], SslcsResponse.prototype, "sslcs503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sslcs504ApplicationJson)
    ], SslcsResponse.prototype, "sslcs504ApplicationJsonObject", void 0);
    return SslcsResponse;
}(SpeakeasyBase));
export { SslcsResponse };
