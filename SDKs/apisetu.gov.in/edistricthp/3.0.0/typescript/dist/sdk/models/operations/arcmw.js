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
var ArcmwRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(ArcmwRequestBodyCertificateParameters, _super);
    function ArcmwRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], ArcmwRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return ArcmwRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { ArcmwRequestBodyCertificateParameters };
export var ArcmwRequestBodyFormatEnum;
(function (ArcmwRequestBodyFormatEnum) {
    ArcmwRequestBodyFormatEnum["Pdf"] = "pdf";
})(ArcmwRequestBodyFormatEnum || (ArcmwRequestBodyFormatEnum = {}));
var ArcmwRequestBody = /** @class */ (function (_super) {
    __extends(ArcmwRequestBody, _super);
    function ArcmwRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", ArcmwRequestBodyCertificateParameters)
    ], ArcmwRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], ArcmwRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], ArcmwRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], ArcmwRequestBody.prototype, "txnId", void 0);
    return ArcmwRequestBody;
}(SpeakeasyBase));
export { ArcmwRequestBody };
var ArcmwSecurity = /** @class */ (function (_super) {
    __extends(ArcmwSecurity, _super);
    function ArcmwSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ArcmwSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], ArcmwSecurity.prototype, "clientId", void 0);
    return ArcmwSecurity;
}(SpeakeasyBase));
export { ArcmwSecurity };
export var Arcmw400ApplicationJsonErrorEnum;
(function (Arcmw400ApplicationJsonErrorEnum) {
    Arcmw400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Arcmw400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Arcmw400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Arcmw400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Arcmw400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Arcmw400ApplicationJsonErrorEnum || (Arcmw400ApplicationJsonErrorEnum = {}));
export var Arcmw400ApplicationJsonErrorDescriptionEnum;
(function (Arcmw400ApplicationJsonErrorDescriptionEnum) {
    Arcmw400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Arcmw400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Arcmw400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Arcmw400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Arcmw400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Arcmw400ApplicationJsonErrorDescriptionEnum || (Arcmw400ApplicationJsonErrorDescriptionEnum = {}));
var Arcmw400ApplicationJson = /** @class */ (function (_super) {
    __extends(Arcmw400ApplicationJson, _super);
    function Arcmw400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Arcmw400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Arcmw400ApplicationJson.prototype, "errorDescription", void 0);
    return Arcmw400ApplicationJson;
}(SpeakeasyBase));
export { Arcmw400ApplicationJson };
export var Arcmw401ApplicationJsonErrorEnum;
(function (Arcmw401ApplicationJsonErrorEnum) {
    Arcmw401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Arcmw401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Arcmw401ApplicationJsonErrorEnum || (Arcmw401ApplicationJsonErrorEnum = {}));
export var Arcmw401ApplicationJsonErrorDescriptionEnum;
(function (Arcmw401ApplicationJsonErrorDescriptionEnum) {
    Arcmw401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Arcmw401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Arcmw401ApplicationJsonErrorDescriptionEnum || (Arcmw401ApplicationJsonErrorDescriptionEnum = {}));
var Arcmw401ApplicationJson = /** @class */ (function (_super) {
    __extends(Arcmw401ApplicationJson, _super);
    function Arcmw401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Arcmw401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Arcmw401ApplicationJson.prototype, "errorDescription", void 0);
    return Arcmw401ApplicationJson;
}(SpeakeasyBase));
export { Arcmw401ApplicationJson };
export var Arcmw404ApplicationJsonErrorEnum;
(function (Arcmw404ApplicationJsonErrorEnum) {
    Arcmw404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Arcmw404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Arcmw404ApplicationJsonErrorEnum || (Arcmw404ApplicationJsonErrorEnum = {}));
export var Arcmw404ApplicationJsonErrorDescriptionEnum;
(function (Arcmw404ApplicationJsonErrorDescriptionEnum) {
    Arcmw404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Arcmw404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Arcmw404ApplicationJsonErrorDescriptionEnum || (Arcmw404ApplicationJsonErrorDescriptionEnum = {}));
var Arcmw404ApplicationJson = /** @class */ (function (_super) {
    __extends(Arcmw404ApplicationJson, _super);
    function Arcmw404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Arcmw404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Arcmw404ApplicationJson.prototype, "errorDescription", void 0);
    return Arcmw404ApplicationJson;
}(SpeakeasyBase));
export { Arcmw404ApplicationJson };
export var Arcmw500ApplicationJsonErrorEnum;
(function (Arcmw500ApplicationJsonErrorEnum) {
    Arcmw500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Arcmw500ApplicationJsonErrorEnum || (Arcmw500ApplicationJsonErrorEnum = {}));
export var Arcmw500ApplicationJsonErrorDescriptionEnum;
(function (Arcmw500ApplicationJsonErrorDescriptionEnum) {
    Arcmw500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Arcmw500ApplicationJsonErrorDescriptionEnum || (Arcmw500ApplicationJsonErrorDescriptionEnum = {}));
var Arcmw500ApplicationJson = /** @class */ (function (_super) {
    __extends(Arcmw500ApplicationJson, _super);
    function Arcmw500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Arcmw500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Arcmw500ApplicationJson.prototype, "errorDescription", void 0);
    return Arcmw500ApplicationJson;
}(SpeakeasyBase));
export { Arcmw500ApplicationJson };
export var Arcmw502ApplicationJsonErrorEnum;
(function (Arcmw502ApplicationJsonErrorEnum) {
    Arcmw502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Arcmw502ApplicationJsonErrorEnum || (Arcmw502ApplicationJsonErrorEnum = {}));
export var Arcmw502ApplicationJsonErrorDescriptionEnum;
(function (Arcmw502ApplicationJsonErrorDescriptionEnum) {
    Arcmw502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Arcmw502ApplicationJsonErrorDescriptionEnum || (Arcmw502ApplicationJsonErrorDescriptionEnum = {}));
var Arcmw502ApplicationJson = /** @class */ (function (_super) {
    __extends(Arcmw502ApplicationJson, _super);
    function Arcmw502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Arcmw502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Arcmw502ApplicationJson.prototype, "errorDescription", void 0);
    return Arcmw502ApplicationJson;
}(SpeakeasyBase));
export { Arcmw502ApplicationJson };
export var Arcmw503ApplicationJsonErrorEnum;
(function (Arcmw503ApplicationJsonErrorEnum) {
    Arcmw503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Arcmw503ApplicationJsonErrorEnum || (Arcmw503ApplicationJsonErrorEnum = {}));
export var Arcmw503ApplicationJsonErrorDescriptionEnum;
(function (Arcmw503ApplicationJsonErrorDescriptionEnum) {
    Arcmw503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Arcmw503ApplicationJsonErrorDescriptionEnum || (Arcmw503ApplicationJsonErrorDescriptionEnum = {}));
var Arcmw503ApplicationJson = /** @class */ (function (_super) {
    __extends(Arcmw503ApplicationJson, _super);
    function Arcmw503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Arcmw503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Arcmw503ApplicationJson.prototype, "errorDescription", void 0);
    return Arcmw503ApplicationJson;
}(SpeakeasyBase));
export { Arcmw503ApplicationJson };
export var Arcmw504ApplicationJsonErrorEnum;
(function (Arcmw504ApplicationJsonErrorEnum) {
    Arcmw504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Arcmw504ApplicationJsonErrorEnum || (Arcmw504ApplicationJsonErrorEnum = {}));
export var Arcmw504ApplicationJsonErrorDescriptionEnum;
(function (Arcmw504ApplicationJsonErrorDescriptionEnum) {
    Arcmw504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Arcmw504ApplicationJsonErrorDescriptionEnum || (Arcmw504ApplicationJsonErrorDescriptionEnum = {}));
var Arcmw504ApplicationJson = /** @class */ (function (_super) {
    __extends(Arcmw504ApplicationJson, _super);
    function Arcmw504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Arcmw504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Arcmw504ApplicationJson.prototype, "errorDescription", void 0);
    return Arcmw504ApplicationJson;
}(SpeakeasyBase));
export { Arcmw504ApplicationJson };
var ArcmwRequest = /** @class */ (function (_super) {
    __extends(ArcmwRequest, _super);
    function ArcmwRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ArcmwRequestBody)
    ], ArcmwRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArcmwSecurity)
    ], ArcmwRequest.prototype, "security", void 0);
    return ArcmwRequest;
}(SpeakeasyBase));
export { ArcmwRequest };
var ArcmwResponse = /** @class */ (function (_super) {
    __extends(ArcmwResponse, _super);
    function ArcmwResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ArcmwResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ArcmwResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Arcmw400ApplicationJson)
    ], ArcmwResponse.prototype, "arcmw400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Arcmw401ApplicationJson)
    ], ArcmwResponse.prototype, "arcmw401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Arcmw404ApplicationJson)
    ], ArcmwResponse.prototype, "arcmw404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Arcmw500ApplicationJson)
    ], ArcmwResponse.prototype, "arcmw500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Arcmw502ApplicationJson)
    ], ArcmwResponse.prototype, "arcmw502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Arcmw503ApplicationJson)
    ], ArcmwResponse.prototype, "arcmw503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Arcmw504ApplicationJson)
    ], ArcmwResponse.prototype, "arcmw504ApplicationJsonObject", void 0);
    return ArcmwResponse;
}(SpeakeasyBase));
export { ArcmwResponse };
