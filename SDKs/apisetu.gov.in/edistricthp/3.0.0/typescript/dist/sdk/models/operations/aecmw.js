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
var AecmwRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(AecmwRequestBodyCertificateParameters, _super);
    function AecmwRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], AecmwRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return AecmwRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { AecmwRequestBodyCertificateParameters };
export var AecmwRequestBodyFormatEnum;
(function (AecmwRequestBodyFormatEnum) {
    AecmwRequestBodyFormatEnum["Pdf"] = "pdf";
})(AecmwRequestBodyFormatEnum || (AecmwRequestBodyFormatEnum = {}));
var AecmwRequestBody = /** @class */ (function (_super) {
    __extends(AecmwRequestBody, _super);
    function AecmwRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", AecmwRequestBodyCertificateParameters)
    ], AecmwRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], AecmwRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AecmwRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], AecmwRequestBody.prototype, "txnId", void 0);
    return AecmwRequestBody;
}(SpeakeasyBase));
export { AecmwRequestBody };
var AecmwSecurity = /** @class */ (function (_super) {
    __extends(AecmwSecurity, _super);
    function AecmwSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], AecmwSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], AecmwSecurity.prototype, "clientId", void 0);
    return AecmwSecurity;
}(SpeakeasyBase));
export { AecmwSecurity };
var AecmwRequest = /** @class */ (function (_super) {
    __extends(AecmwRequest, _super);
    function AecmwRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AecmwRequestBody)
    ], AecmwRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AecmwSecurity)
    ], AecmwRequest.prototype, "security", void 0);
    return AecmwRequest;
}(SpeakeasyBase));
export { AecmwRequest };
export var Aecmw400ApplicationJsonErrorEnum;
(function (Aecmw400ApplicationJsonErrorEnum) {
    Aecmw400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Aecmw400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Aecmw400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Aecmw400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Aecmw400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Aecmw400ApplicationJsonErrorEnum || (Aecmw400ApplicationJsonErrorEnum = {}));
export var Aecmw400ApplicationJsonErrorDescriptionEnum;
(function (Aecmw400ApplicationJsonErrorDescriptionEnum) {
    Aecmw400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Aecmw400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Aecmw400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Aecmw400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Aecmw400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Aecmw400ApplicationJsonErrorDescriptionEnum || (Aecmw400ApplicationJsonErrorDescriptionEnum = {}));
var Aecmw400ApplicationJson = /** @class */ (function (_super) {
    __extends(Aecmw400ApplicationJson, _super);
    function Aecmw400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Aecmw400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Aecmw400ApplicationJson.prototype, "errorDescription", void 0);
    return Aecmw400ApplicationJson;
}(SpeakeasyBase));
export { Aecmw400ApplicationJson };
export var Aecmw401ApplicationJsonErrorEnum;
(function (Aecmw401ApplicationJsonErrorEnum) {
    Aecmw401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Aecmw401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Aecmw401ApplicationJsonErrorEnum || (Aecmw401ApplicationJsonErrorEnum = {}));
export var Aecmw401ApplicationJsonErrorDescriptionEnum;
(function (Aecmw401ApplicationJsonErrorDescriptionEnum) {
    Aecmw401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Aecmw401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Aecmw401ApplicationJsonErrorDescriptionEnum || (Aecmw401ApplicationJsonErrorDescriptionEnum = {}));
var Aecmw401ApplicationJson = /** @class */ (function (_super) {
    __extends(Aecmw401ApplicationJson, _super);
    function Aecmw401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Aecmw401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Aecmw401ApplicationJson.prototype, "errorDescription", void 0);
    return Aecmw401ApplicationJson;
}(SpeakeasyBase));
export { Aecmw401ApplicationJson };
export var Aecmw404ApplicationJsonErrorEnum;
(function (Aecmw404ApplicationJsonErrorEnum) {
    Aecmw404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Aecmw404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Aecmw404ApplicationJsonErrorEnum || (Aecmw404ApplicationJsonErrorEnum = {}));
export var Aecmw404ApplicationJsonErrorDescriptionEnum;
(function (Aecmw404ApplicationJsonErrorDescriptionEnum) {
    Aecmw404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Aecmw404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Aecmw404ApplicationJsonErrorDescriptionEnum || (Aecmw404ApplicationJsonErrorDescriptionEnum = {}));
var Aecmw404ApplicationJson = /** @class */ (function (_super) {
    __extends(Aecmw404ApplicationJson, _super);
    function Aecmw404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Aecmw404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Aecmw404ApplicationJson.prototype, "errorDescription", void 0);
    return Aecmw404ApplicationJson;
}(SpeakeasyBase));
export { Aecmw404ApplicationJson };
export var Aecmw500ApplicationJsonErrorEnum;
(function (Aecmw500ApplicationJsonErrorEnum) {
    Aecmw500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Aecmw500ApplicationJsonErrorEnum || (Aecmw500ApplicationJsonErrorEnum = {}));
export var Aecmw500ApplicationJsonErrorDescriptionEnum;
(function (Aecmw500ApplicationJsonErrorDescriptionEnum) {
    Aecmw500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Aecmw500ApplicationJsonErrorDescriptionEnum || (Aecmw500ApplicationJsonErrorDescriptionEnum = {}));
var Aecmw500ApplicationJson = /** @class */ (function (_super) {
    __extends(Aecmw500ApplicationJson, _super);
    function Aecmw500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Aecmw500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Aecmw500ApplicationJson.prototype, "errorDescription", void 0);
    return Aecmw500ApplicationJson;
}(SpeakeasyBase));
export { Aecmw500ApplicationJson };
export var Aecmw502ApplicationJsonErrorEnum;
(function (Aecmw502ApplicationJsonErrorEnum) {
    Aecmw502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Aecmw502ApplicationJsonErrorEnum || (Aecmw502ApplicationJsonErrorEnum = {}));
export var Aecmw502ApplicationJsonErrorDescriptionEnum;
(function (Aecmw502ApplicationJsonErrorDescriptionEnum) {
    Aecmw502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Aecmw502ApplicationJsonErrorDescriptionEnum || (Aecmw502ApplicationJsonErrorDescriptionEnum = {}));
var Aecmw502ApplicationJson = /** @class */ (function (_super) {
    __extends(Aecmw502ApplicationJson, _super);
    function Aecmw502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Aecmw502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Aecmw502ApplicationJson.prototype, "errorDescription", void 0);
    return Aecmw502ApplicationJson;
}(SpeakeasyBase));
export { Aecmw502ApplicationJson };
export var Aecmw503ApplicationJsonErrorEnum;
(function (Aecmw503ApplicationJsonErrorEnum) {
    Aecmw503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Aecmw503ApplicationJsonErrorEnum || (Aecmw503ApplicationJsonErrorEnum = {}));
export var Aecmw503ApplicationJsonErrorDescriptionEnum;
(function (Aecmw503ApplicationJsonErrorDescriptionEnum) {
    Aecmw503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Aecmw503ApplicationJsonErrorDescriptionEnum || (Aecmw503ApplicationJsonErrorDescriptionEnum = {}));
var Aecmw503ApplicationJson = /** @class */ (function (_super) {
    __extends(Aecmw503ApplicationJson, _super);
    function Aecmw503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Aecmw503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Aecmw503ApplicationJson.prototype, "errorDescription", void 0);
    return Aecmw503ApplicationJson;
}(SpeakeasyBase));
export { Aecmw503ApplicationJson };
export var Aecmw504ApplicationJsonErrorEnum;
(function (Aecmw504ApplicationJsonErrorEnum) {
    Aecmw504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Aecmw504ApplicationJsonErrorEnum || (Aecmw504ApplicationJsonErrorEnum = {}));
export var Aecmw504ApplicationJsonErrorDescriptionEnum;
(function (Aecmw504ApplicationJsonErrorDescriptionEnum) {
    Aecmw504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Aecmw504ApplicationJsonErrorDescriptionEnum || (Aecmw504ApplicationJsonErrorDescriptionEnum = {}));
var Aecmw504ApplicationJson = /** @class */ (function (_super) {
    __extends(Aecmw504ApplicationJson, _super);
    function Aecmw504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Aecmw504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Aecmw504ApplicationJson.prototype, "errorDescription", void 0);
    return Aecmw504ApplicationJson;
}(SpeakeasyBase));
export { Aecmw504ApplicationJson };
var AecmwResponse = /** @class */ (function (_super) {
    __extends(AecmwResponse, _super);
    function AecmwResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AecmwResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AecmwResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Aecmw400ApplicationJson)
    ], AecmwResponse.prototype, "aecmw400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Aecmw401ApplicationJson)
    ], AecmwResponse.prototype, "aecmw401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Aecmw404ApplicationJson)
    ], AecmwResponse.prototype, "aecmw404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Aecmw500ApplicationJson)
    ], AecmwResponse.prototype, "aecmw500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Aecmw502ApplicationJson)
    ], AecmwResponse.prototype, "aecmw502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Aecmw503ApplicationJson)
    ], AecmwResponse.prototype, "aecmw503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Aecmw504ApplicationJson)
    ], AecmwResponse.prototype, "aecmw504ApplicationJsonObject", void 0);
    return AecmwResponse;
}(SpeakeasyBase));
export { AecmwResponse };
