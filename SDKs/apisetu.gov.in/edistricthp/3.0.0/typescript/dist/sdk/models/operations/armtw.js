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
var ArmtwRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(ArmtwRequestBodyCertificateParameters, _super);
    function ArmtwRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], ArmtwRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return ArmtwRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { ArmtwRequestBodyCertificateParameters };
export var ArmtwRequestBodyFormatEnum;
(function (ArmtwRequestBodyFormatEnum) {
    ArmtwRequestBodyFormatEnum["Pdf"] = "pdf";
})(ArmtwRequestBodyFormatEnum || (ArmtwRequestBodyFormatEnum = {}));
var ArmtwRequestBody = /** @class */ (function (_super) {
    __extends(ArmtwRequestBody, _super);
    function ArmtwRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", ArmtwRequestBodyCertificateParameters)
    ], ArmtwRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], ArmtwRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], ArmtwRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], ArmtwRequestBody.prototype, "txnId", void 0);
    return ArmtwRequestBody;
}(SpeakeasyBase));
export { ArmtwRequestBody };
var ArmtwSecurity = /** @class */ (function (_super) {
    __extends(ArmtwSecurity, _super);
    function ArmtwSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ArmtwSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], ArmtwSecurity.prototype, "clientId", void 0);
    return ArmtwSecurity;
}(SpeakeasyBase));
export { ArmtwSecurity };
export var Armtw400ApplicationJsonErrorEnum;
(function (Armtw400ApplicationJsonErrorEnum) {
    Armtw400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Armtw400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Armtw400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Armtw400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Armtw400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Armtw400ApplicationJsonErrorEnum || (Armtw400ApplicationJsonErrorEnum = {}));
export var Armtw400ApplicationJsonErrorDescriptionEnum;
(function (Armtw400ApplicationJsonErrorDescriptionEnum) {
    Armtw400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Armtw400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Armtw400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Armtw400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Armtw400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Armtw400ApplicationJsonErrorDescriptionEnum || (Armtw400ApplicationJsonErrorDescriptionEnum = {}));
var Armtw400ApplicationJson = /** @class */ (function (_super) {
    __extends(Armtw400ApplicationJson, _super);
    function Armtw400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Armtw400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Armtw400ApplicationJson.prototype, "errorDescription", void 0);
    return Armtw400ApplicationJson;
}(SpeakeasyBase));
export { Armtw400ApplicationJson };
export var Armtw401ApplicationJsonErrorEnum;
(function (Armtw401ApplicationJsonErrorEnum) {
    Armtw401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Armtw401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Armtw401ApplicationJsonErrorEnum || (Armtw401ApplicationJsonErrorEnum = {}));
export var Armtw401ApplicationJsonErrorDescriptionEnum;
(function (Armtw401ApplicationJsonErrorDescriptionEnum) {
    Armtw401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Armtw401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Armtw401ApplicationJsonErrorDescriptionEnum || (Armtw401ApplicationJsonErrorDescriptionEnum = {}));
var Armtw401ApplicationJson = /** @class */ (function (_super) {
    __extends(Armtw401ApplicationJson, _super);
    function Armtw401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Armtw401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Armtw401ApplicationJson.prototype, "errorDescription", void 0);
    return Armtw401ApplicationJson;
}(SpeakeasyBase));
export { Armtw401ApplicationJson };
export var Armtw404ApplicationJsonErrorEnum;
(function (Armtw404ApplicationJsonErrorEnum) {
    Armtw404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Armtw404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Armtw404ApplicationJsonErrorEnum || (Armtw404ApplicationJsonErrorEnum = {}));
export var Armtw404ApplicationJsonErrorDescriptionEnum;
(function (Armtw404ApplicationJsonErrorDescriptionEnum) {
    Armtw404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Armtw404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Armtw404ApplicationJsonErrorDescriptionEnum || (Armtw404ApplicationJsonErrorDescriptionEnum = {}));
var Armtw404ApplicationJson = /** @class */ (function (_super) {
    __extends(Armtw404ApplicationJson, _super);
    function Armtw404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Armtw404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Armtw404ApplicationJson.prototype, "errorDescription", void 0);
    return Armtw404ApplicationJson;
}(SpeakeasyBase));
export { Armtw404ApplicationJson };
export var Armtw500ApplicationJsonErrorEnum;
(function (Armtw500ApplicationJsonErrorEnum) {
    Armtw500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Armtw500ApplicationJsonErrorEnum || (Armtw500ApplicationJsonErrorEnum = {}));
export var Armtw500ApplicationJsonErrorDescriptionEnum;
(function (Armtw500ApplicationJsonErrorDescriptionEnum) {
    Armtw500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Armtw500ApplicationJsonErrorDescriptionEnum || (Armtw500ApplicationJsonErrorDescriptionEnum = {}));
var Armtw500ApplicationJson = /** @class */ (function (_super) {
    __extends(Armtw500ApplicationJson, _super);
    function Armtw500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Armtw500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Armtw500ApplicationJson.prototype, "errorDescription", void 0);
    return Armtw500ApplicationJson;
}(SpeakeasyBase));
export { Armtw500ApplicationJson };
export var Armtw502ApplicationJsonErrorEnum;
(function (Armtw502ApplicationJsonErrorEnum) {
    Armtw502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Armtw502ApplicationJsonErrorEnum || (Armtw502ApplicationJsonErrorEnum = {}));
export var Armtw502ApplicationJsonErrorDescriptionEnum;
(function (Armtw502ApplicationJsonErrorDescriptionEnum) {
    Armtw502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Armtw502ApplicationJsonErrorDescriptionEnum || (Armtw502ApplicationJsonErrorDescriptionEnum = {}));
var Armtw502ApplicationJson = /** @class */ (function (_super) {
    __extends(Armtw502ApplicationJson, _super);
    function Armtw502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Armtw502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Armtw502ApplicationJson.prototype, "errorDescription", void 0);
    return Armtw502ApplicationJson;
}(SpeakeasyBase));
export { Armtw502ApplicationJson };
export var Armtw503ApplicationJsonErrorEnum;
(function (Armtw503ApplicationJsonErrorEnum) {
    Armtw503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Armtw503ApplicationJsonErrorEnum || (Armtw503ApplicationJsonErrorEnum = {}));
export var Armtw503ApplicationJsonErrorDescriptionEnum;
(function (Armtw503ApplicationJsonErrorDescriptionEnum) {
    Armtw503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Armtw503ApplicationJsonErrorDescriptionEnum || (Armtw503ApplicationJsonErrorDescriptionEnum = {}));
var Armtw503ApplicationJson = /** @class */ (function (_super) {
    __extends(Armtw503ApplicationJson, _super);
    function Armtw503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Armtw503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Armtw503ApplicationJson.prototype, "errorDescription", void 0);
    return Armtw503ApplicationJson;
}(SpeakeasyBase));
export { Armtw503ApplicationJson };
export var Armtw504ApplicationJsonErrorEnum;
(function (Armtw504ApplicationJsonErrorEnum) {
    Armtw504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Armtw504ApplicationJsonErrorEnum || (Armtw504ApplicationJsonErrorEnum = {}));
export var Armtw504ApplicationJsonErrorDescriptionEnum;
(function (Armtw504ApplicationJsonErrorDescriptionEnum) {
    Armtw504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Armtw504ApplicationJsonErrorDescriptionEnum || (Armtw504ApplicationJsonErrorDescriptionEnum = {}));
var Armtw504ApplicationJson = /** @class */ (function (_super) {
    __extends(Armtw504ApplicationJson, _super);
    function Armtw504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Armtw504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Armtw504ApplicationJson.prototype, "errorDescription", void 0);
    return Armtw504ApplicationJson;
}(SpeakeasyBase));
export { Armtw504ApplicationJson };
var ArmtwRequest = /** @class */ (function (_super) {
    __extends(ArmtwRequest, _super);
    function ArmtwRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ArmtwRequestBody)
    ], ArmtwRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArmtwSecurity)
    ], ArmtwRequest.prototype, "security", void 0);
    return ArmtwRequest;
}(SpeakeasyBase));
export { ArmtwRequest };
var ArmtwResponse = /** @class */ (function (_super) {
    __extends(ArmtwResponse, _super);
    function ArmtwResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ArmtwResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ArmtwResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Armtw400ApplicationJson)
    ], ArmtwResponse.prototype, "armtw400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Armtw401ApplicationJson)
    ], ArmtwResponse.prototype, "armtw401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Armtw404ApplicationJson)
    ], ArmtwResponse.prototype, "armtw404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Armtw500ApplicationJson)
    ], ArmtwResponse.prototype, "armtw500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Armtw502ApplicationJson)
    ], ArmtwResponse.prototype, "armtw502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Armtw503ApplicationJson)
    ], ArmtwResponse.prototype, "armtw503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Armtw504ApplicationJson)
    ], ArmtwResponse.prototype, "armtw504ApplicationJsonObject", void 0);
    return ArmtwResponse;
}(SpeakeasyBase));
export { ArmtwResponse };
