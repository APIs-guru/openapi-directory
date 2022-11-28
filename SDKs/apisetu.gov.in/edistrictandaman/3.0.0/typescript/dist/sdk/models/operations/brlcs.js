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
var BrlcsRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(BrlcsRequestBodyCertificateParameters, _super);
    function BrlcsRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificateNumber" }),
        __metadata("design:type", String)
    ], BrlcsRequestBodyCertificateParameters.prototype, "certificateNumber", void 0);
    return BrlcsRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { BrlcsRequestBodyCertificateParameters };
export var BrlcsRequestBodyFormatEnum;
(function (BrlcsRequestBodyFormatEnum) {
    BrlcsRequestBodyFormatEnum["Pdf"] = "pdf";
})(BrlcsRequestBodyFormatEnum || (BrlcsRequestBodyFormatEnum = {}));
var BrlcsRequestBody = /** @class */ (function (_super) {
    __extends(BrlcsRequestBody, _super);
    function BrlcsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", BrlcsRequestBodyCertificateParameters)
    ], BrlcsRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], BrlcsRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], BrlcsRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], BrlcsRequestBody.prototype, "txnId", void 0);
    return BrlcsRequestBody;
}(SpeakeasyBase));
export { BrlcsRequestBody };
var BrlcsSecurity = /** @class */ (function (_super) {
    __extends(BrlcsSecurity, _super);
    function BrlcsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], BrlcsSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], BrlcsSecurity.prototype, "clientId", void 0);
    return BrlcsSecurity;
}(SpeakeasyBase));
export { BrlcsSecurity };
export var Brlcs400ApplicationJsonErrorEnum;
(function (Brlcs400ApplicationJsonErrorEnum) {
    Brlcs400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Brlcs400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Brlcs400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Brlcs400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Brlcs400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Brlcs400ApplicationJsonErrorEnum || (Brlcs400ApplicationJsonErrorEnum = {}));
export var Brlcs400ApplicationJsonErrorDescriptionEnum;
(function (Brlcs400ApplicationJsonErrorDescriptionEnum) {
    Brlcs400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Brlcs400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Brlcs400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Brlcs400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Brlcs400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Brlcs400ApplicationJsonErrorDescriptionEnum || (Brlcs400ApplicationJsonErrorDescriptionEnum = {}));
var Brlcs400ApplicationJson = /** @class */ (function (_super) {
    __extends(Brlcs400ApplicationJson, _super);
    function Brlcs400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Brlcs400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Brlcs400ApplicationJson.prototype, "errorDescription", void 0);
    return Brlcs400ApplicationJson;
}(SpeakeasyBase));
export { Brlcs400ApplicationJson };
export var Brlcs401ApplicationJsonErrorEnum;
(function (Brlcs401ApplicationJsonErrorEnum) {
    Brlcs401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Brlcs401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Brlcs401ApplicationJsonErrorEnum || (Brlcs401ApplicationJsonErrorEnum = {}));
export var Brlcs401ApplicationJsonErrorDescriptionEnum;
(function (Brlcs401ApplicationJsonErrorDescriptionEnum) {
    Brlcs401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Brlcs401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Brlcs401ApplicationJsonErrorDescriptionEnum || (Brlcs401ApplicationJsonErrorDescriptionEnum = {}));
var Brlcs401ApplicationJson = /** @class */ (function (_super) {
    __extends(Brlcs401ApplicationJson, _super);
    function Brlcs401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Brlcs401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Brlcs401ApplicationJson.prototype, "errorDescription", void 0);
    return Brlcs401ApplicationJson;
}(SpeakeasyBase));
export { Brlcs401ApplicationJson };
export var Brlcs404ApplicationJsonErrorEnum;
(function (Brlcs404ApplicationJsonErrorEnum) {
    Brlcs404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Brlcs404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Brlcs404ApplicationJsonErrorEnum || (Brlcs404ApplicationJsonErrorEnum = {}));
export var Brlcs404ApplicationJsonErrorDescriptionEnum;
(function (Brlcs404ApplicationJsonErrorDescriptionEnum) {
    Brlcs404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Brlcs404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Brlcs404ApplicationJsonErrorDescriptionEnum || (Brlcs404ApplicationJsonErrorDescriptionEnum = {}));
var Brlcs404ApplicationJson = /** @class */ (function (_super) {
    __extends(Brlcs404ApplicationJson, _super);
    function Brlcs404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Brlcs404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Brlcs404ApplicationJson.prototype, "errorDescription", void 0);
    return Brlcs404ApplicationJson;
}(SpeakeasyBase));
export { Brlcs404ApplicationJson };
export var Brlcs500ApplicationJsonErrorEnum;
(function (Brlcs500ApplicationJsonErrorEnum) {
    Brlcs500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Brlcs500ApplicationJsonErrorEnum || (Brlcs500ApplicationJsonErrorEnum = {}));
export var Brlcs500ApplicationJsonErrorDescriptionEnum;
(function (Brlcs500ApplicationJsonErrorDescriptionEnum) {
    Brlcs500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Brlcs500ApplicationJsonErrorDescriptionEnum || (Brlcs500ApplicationJsonErrorDescriptionEnum = {}));
var Brlcs500ApplicationJson = /** @class */ (function (_super) {
    __extends(Brlcs500ApplicationJson, _super);
    function Brlcs500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Brlcs500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Brlcs500ApplicationJson.prototype, "errorDescription", void 0);
    return Brlcs500ApplicationJson;
}(SpeakeasyBase));
export { Brlcs500ApplicationJson };
export var Brlcs502ApplicationJsonErrorEnum;
(function (Brlcs502ApplicationJsonErrorEnum) {
    Brlcs502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Brlcs502ApplicationJsonErrorEnum || (Brlcs502ApplicationJsonErrorEnum = {}));
export var Brlcs502ApplicationJsonErrorDescriptionEnum;
(function (Brlcs502ApplicationJsonErrorDescriptionEnum) {
    Brlcs502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Brlcs502ApplicationJsonErrorDescriptionEnum || (Brlcs502ApplicationJsonErrorDescriptionEnum = {}));
var Brlcs502ApplicationJson = /** @class */ (function (_super) {
    __extends(Brlcs502ApplicationJson, _super);
    function Brlcs502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Brlcs502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Brlcs502ApplicationJson.prototype, "errorDescription", void 0);
    return Brlcs502ApplicationJson;
}(SpeakeasyBase));
export { Brlcs502ApplicationJson };
export var Brlcs503ApplicationJsonErrorEnum;
(function (Brlcs503ApplicationJsonErrorEnum) {
    Brlcs503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Brlcs503ApplicationJsonErrorEnum || (Brlcs503ApplicationJsonErrorEnum = {}));
export var Brlcs503ApplicationJsonErrorDescriptionEnum;
(function (Brlcs503ApplicationJsonErrorDescriptionEnum) {
    Brlcs503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Brlcs503ApplicationJsonErrorDescriptionEnum || (Brlcs503ApplicationJsonErrorDescriptionEnum = {}));
var Brlcs503ApplicationJson = /** @class */ (function (_super) {
    __extends(Brlcs503ApplicationJson, _super);
    function Brlcs503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Brlcs503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Brlcs503ApplicationJson.prototype, "errorDescription", void 0);
    return Brlcs503ApplicationJson;
}(SpeakeasyBase));
export { Brlcs503ApplicationJson };
export var Brlcs504ApplicationJsonErrorEnum;
(function (Brlcs504ApplicationJsonErrorEnum) {
    Brlcs504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Brlcs504ApplicationJsonErrorEnum || (Brlcs504ApplicationJsonErrorEnum = {}));
export var Brlcs504ApplicationJsonErrorDescriptionEnum;
(function (Brlcs504ApplicationJsonErrorDescriptionEnum) {
    Brlcs504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Brlcs504ApplicationJsonErrorDescriptionEnum || (Brlcs504ApplicationJsonErrorDescriptionEnum = {}));
var Brlcs504ApplicationJson = /** @class */ (function (_super) {
    __extends(Brlcs504ApplicationJson, _super);
    function Brlcs504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Brlcs504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Brlcs504ApplicationJson.prototype, "errorDescription", void 0);
    return Brlcs504ApplicationJson;
}(SpeakeasyBase));
export { Brlcs504ApplicationJson };
var BrlcsRequest = /** @class */ (function (_super) {
    __extends(BrlcsRequest, _super);
    function BrlcsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BrlcsRequestBody)
    ], BrlcsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BrlcsSecurity)
    ], BrlcsRequest.prototype, "security", void 0);
    return BrlcsRequest;
}(SpeakeasyBase));
export { BrlcsRequest };
var BrlcsResponse = /** @class */ (function (_super) {
    __extends(BrlcsResponse, _super);
    function BrlcsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BrlcsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BrlcsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Brlcs400ApplicationJson)
    ], BrlcsResponse.prototype, "brlcs400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Brlcs401ApplicationJson)
    ], BrlcsResponse.prototype, "brlcs401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Brlcs404ApplicationJson)
    ], BrlcsResponse.prototype, "brlcs404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Brlcs500ApplicationJson)
    ], BrlcsResponse.prototype, "brlcs500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Brlcs502ApplicationJson)
    ], BrlcsResponse.prototype, "brlcs502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Brlcs503ApplicationJson)
    ], BrlcsResponse.prototype, "brlcs503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Brlcs504ApplicationJson)
    ], BrlcsResponse.prototype, "brlcs504ApplicationJsonObject", void 0);
    return BrlcsResponse;
}(SpeakeasyBase));
export { BrlcsResponse };
