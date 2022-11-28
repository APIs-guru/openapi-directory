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
var PalcsRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PalcsRequestBodyCertificateParameters, _super);
    function PalcsRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationNo" }),
        __metadata("design:type", String)
    ], PalcsRequestBodyCertificateParameters.prototype, "applicationNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licenseNo" }),
        __metadata("design:type", String)
    ], PalcsRequestBodyCertificateParameters.prototype, "licenseNo", void 0);
    return PalcsRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { PalcsRequestBodyCertificateParameters };
export var PalcsRequestBodyFormatEnum;
(function (PalcsRequestBodyFormatEnum) {
    PalcsRequestBodyFormatEnum["Pdf"] = "pdf";
})(PalcsRequestBodyFormatEnum || (PalcsRequestBodyFormatEnum = {}));
var PalcsRequestBody = /** @class */ (function (_super) {
    __extends(PalcsRequestBody, _super);
    function PalcsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", PalcsRequestBodyCertificateParameters)
    ], PalcsRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], PalcsRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PalcsRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], PalcsRequestBody.prototype, "txnId", void 0);
    return PalcsRequestBody;
}(SpeakeasyBase));
export { PalcsRequestBody };
var PalcsSecurity = /** @class */ (function (_super) {
    __extends(PalcsSecurity, _super);
    function PalcsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PalcsSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PalcsSecurity.prototype, "clientId", void 0);
    return PalcsSecurity;
}(SpeakeasyBase));
export { PalcsSecurity };
export var Palcs400ApplicationJsonErrorEnum;
(function (Palcs400ApplicationJsonErrorEnum) {
    Palcs400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Palcs400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Palcs400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Palcs400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Palcs400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Palcs400ApplicationJsonErrorEnum || (Palcs400ApplicationJsonErrorEnum = {}));
export var Palcs400ApplicationJsonErrorDescriptionEnum;
(function (Palcs400ApplicationJsonErrorDescriptionEnum) {
    Palcs400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Palcs400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Palcs400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Palcs400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Palcs400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Palcs400ApplicationJsonErrorDescriptionEnum || (Palcs400ApplicationJsonErrorDescriptionEnum = {}));
var Palcs400ApplicationJson = /** @class */ (function (_super) {
    __extends(Palcs400ApplicationJson, _super);
    function Palcs400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Palcs400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Palcs400ApplicationJson.prototype, "errorDescription", void 0);
    return Palcs400ApplicationJson;
}(SpeakeasyBase));
export { Palcs400ApplicationJson };
export var Palcs401ApplicationJsonErrorEnum;
(function (Palcs401ApplicationJsonErrorEnum) {
    Palcs401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Palcs401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Palcs401ApplicationJsonErrorEnum || (Palcs401ApplicationJsonErrorEnum = {}));
export var Palcs401ApplicationJsonErrorDescriptionEnum;
(function (Palcs401ApplicationJsonErrorDescriptionEnum) {
    Palcs401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Palcs401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Palcs401ApplicationJsonErrorDescriptionEnum || (Palcs401ApplicationJsonErrorDescriptionEnum = {}));
var Palcs401ApplicationJson = /** @class */ (function (_super) {
    __extends(Palcs401ApplicationJson, _super);
    function Palcs401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Palcs401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Palcs401ApplicationJson.prototype, "errorDescription", void 0);
    return Palcs401ApplicationJson;
}(SpeakeasyBase));
export { Palcs401ApplicationJson };
export var Palcs404ApplicationJsonErrorEnum;
(function (Palcs404ApplicationJsonErrorEnum) {
    Palcs404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Palcs404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Palcs404ApplicationJsonErrorEnum || (Palcs404ApplicationJsonErrorEnum = {}));
export var Palcs404ApplicationJsonErrorDescriptionEnum;
(function (Palcs404ApplicationJsonErrorDescriptionEnum) {
    Palcs404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Palcs404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Palcs404ApplicationJsonErrorDescriptionEnum || (Palcs404ApplicationJsonErrorDescriptionEnum = {}));
var Palcs404ApplicationJson = /** @class */ (function (_super) {
    __extends(Palcs404ApplicationJson, _super);
    function Palcs404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Palcs404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Palcs404ApplicationJson.prototype, "errorDescription", void 0);
    return Palcs404ApplicationJson;
}(SpeakeasyBase));
export { Palcs404ApplicationJson };
export var Palcs500ApplicationJsonErrorEnum;
(function (Palcs500ApplicationJsonErrorEnum) {
    Palcs500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Palcs500ApplicationJsonErrorEnum || (Palcs500ApplicationJsonErrorEnum = {}));
export var Palcs500ApplicationJsonErrorDescriptionEnum;
(function (Palcs500ApplicationJsonErrorDescriptionEnum) {
    Palcs500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Palcs500ApplicationJsonErrorDescriptionEnum || (Palcs500ApplicationJsonErrorDescriptionEnum = {}));
var Palcs500ApplicationJson = /** @class */ (function (_super) {
    __extends(Palcs500ApplicationJson, _super);
    function Palcs500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Palcs500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Palcs500ApplicationJson.prototype, "errorDescription", void 0);
    return Palcs500ApplicationJson;
}(SpeakeasyBase));
export { Palcs500ApplicationJson };
export var Palcs502ApplicationJsonErrorEnum;
(function (Palcs502ApplicationJsonErrorEnum) {
    Palcs502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Palcs502ApplicationJsonErrorEnum || (Palcs502ApplicationJsonErrorEnum = {}));
export var Palcs502ApplicationJsonErrorDescriptionEnum;
(function (Palcs502ApplicationJsonErrorDescriptionEnum) {
    Palcs502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Palcs502ApplicationJsonErrorDescriptionEnum || (Palcs502ApplicationJsonErrorDescriptionEnum = {}));
var Palcs502ApplicationJson = /** @class */ (function (_super) {
    __extends(Palcs502ApplicationJson, _super);
    function Palcs502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Palcs502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Palcs502ApplicationJson.prototype, "errorDescription", void 0);
    return Palcs502ApplicationJson;
}(SpeakeasyBase));
export { Palcs502ApplicationJson };
export var Palcs503ApplicationJsonErrorEnum;
(function (Palcs503ApplicationJsonErrorEnum) {
    Palcs503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Palcs503ApplicationJsonErrorEnum || (Palcs503ApplicationJsonErrorEnum = {}));
export var Palcs503ApplicationJsonErrorDescriptionEnum;
(function (Palcs503ApplicationJsonErrorDescriptionEnum) {
    Palcs503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Palcs503ApplicationJsonErrorDescriptionEnum || (Palcs503ApplicationJsonErrorDescriptionEnum = {}));
var Palcs503ApplicationJson = /** @class */ (function (_super) {
    __extends(Palcs503ApplicationJson, _super);
    function Palcs503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Palcs503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Palcs503ApplicationJson.prototype, "errorDescription", void 0);
    return Palcs503ApplicationJson;
}(SpeakeasyBase));
export { Palcs503ApplicationJson };
export var Palcs504ApplicationJsonErrorEnum;
(function (Palcs504ApplicationJsonErrorEnum) {
    Palcs504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Palcs504ApplicationJsonErrorEnum || (Palcs504ApplicationJsonErrorEnum = {}));
export var Palcs504ApplicationJsonErrorDescriptionEnum;
(function (Palcs504ApplicationJsonErrorDescriptionEnum) {
    Palcs504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Palcs504ApplicationJsonErrorDescriptionEnum || (Palcs504ApplicationJsonErrorDescriptionEnum = {}));
var Palcs504ApplicationJson = /** @class */ (function (_super) {
    __extends(Palcs504ApplicationJson, _super);
    function Palcs504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Palcs504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Palcs504ApplicationJson.prototype, "errorDescription", void 0);
    return Palcs504ApplicationJson;
}(SpeakeasyBase));
export { Palcs504ApplicationJson };
var PalcsRequest = /** @class */ (function (_super) {
    __extends(PalcsRequest, _super);
    function PalcsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PalcsRequestBody)
    ], PalcsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PalcsSecurity)
    ], PalcsRequest.prototype, "security", void 0);
    return PalcsRequest;
}(SpeakeasyBase));
export { PalcsRequest };
var PalcsResponse = /** @class */ (function (_super) {
    __extends(PalcsResponse, _super);
    function PalcsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PalcsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PalcsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Palcs400ApplicationJson)
    ], PalcsResponse.prototype, "palcs400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Palcs401ApplicationJson)
    ], PalcsResponse.prototype, "palcs401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Palcs404ApplicationJson)
    ], PalcsResponse.prototype, "palcs404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Palcs500ApplicationJson)
    ], PalcsResponse.prototype, "palcs500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Palcs502ApplicationJson)
    ], PalcsResponse.prototype, "palcs502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Palcs503ApplicationJson)
    ], PalcsResponse.prototype, "palcs503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Palcs504ApplicationJson)
    ], PalcsResponse.prototype, "palcs504ApplicationJsonObject", void 0);
    return PalcsResponse;
}(SpeakeasyBase));
export { PalcsResponse };
