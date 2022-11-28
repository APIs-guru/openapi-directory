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
var DelcsRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(DelcsRequestBodyCertificateParameters, _super);
    function DelcsRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationNo" }),
        __metadata("design:type", String)
    ], DelcsRequestBodyCertificateParameters.prototype, "applicationNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licenseNo" }),
        __metadata("design:type", String)
    ], DelcsRequestBodyCertificateParameters.prototype, "licenseNo", void 0);
    return DelcsRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { DelcsRequestBodyCertificateParameters };
export var DelcsRequestBodyFormatEnum;
(function (DelcsRequestBodyFormatEnum) {
    DelcsRequestBodyFormatEnum["Pdf"] = "pdf";
})(DelcsRequestBodyFormatEnum || (DelcsRequestBodyFormatEnum = {}));
var DelcsRequestBody = /** @class */ (function (_super) {
    __extends(DelcsRequestBody, _super);
    function DelcsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", DelcsRequestBodyCertificateParameters)
    ], DelcsRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], DelcsRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], DelcsRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], DelcsRequestBody.prototype, "txnId", void 0);
    return DelcsRequestBody;
}(SpeakeasyBase));
export { DelcsRequestBody };
var DelcsSecurity = /** @class */ (function (_super) {
    __extends(DelcsSecurity, _super);
    function DelcsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DelcsSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], DelcsSecurity.prototype, "clientId", void 0);
    return DelcsSecurity;
}(SpeakeasyBase));
export { DelcsSecurity };
export var Delcs400ApplicationJsonErrorEnum;
(function (Delcs400ApplicationJsonErrorEnum) {
    Delcs400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Delcs400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Delcs400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Delcs400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Delcs400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Delcs400ApplicationJsonErrorEnum || (Delcs400ApplicationJsonErrorEnum = {}));
export var Delcs400ApplicationJsonErrorDescriptionEnum;
(function (Delcs400ApplicationJsonErrorDescriptionEnum) {
    Delcs400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Delcs400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Delcs400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Delcs400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Delcs400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Delcs400ApplicationJsonErrorDescriptionEnum || (Delcs400ApplicationJsonErrorDescriptionEnum = {}));
var Delcs400ApplicationJson = /** @class */ (function (_super) {
    __extends(Delcs400ApplicationJson, _super);
    function Delcs400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Delcs400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Delcs400ApplicationJson.prototype, "errorDescription", void 0);
    return Delcs400ApplicationJson;
}(SpeakeasyBase));
export { Delcs400ApplicationJson };
export var Delcs401ApplicationJsonErrorEnum;
(function (Delcs401ApplicationJsonErrorEnum) {
    Delcs401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Delcs401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Delcs401ApplicationJsonErrorEnum || (Delcs401ApplicationJsonErrorEnum = {}));
export var Delcs401ApplicationJsonErrorDescriptionEnum;
(function (Delcs401ApplicationJsonErrorDescriptionEnum) {
    Delcs401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Delcs401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Delcs401ApplicationJsonErrorDescriptionEnum || (Delcs401ApplicationJsonErrorDescriptionEnum = {}));
var Delcs401ApplicationJson = /** @class */ (function (_super) {
    __extends(Delcs401ApplicationJson, _super);
    function Delcs401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Delcs401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Delcs401ApplicationJson.prototype, "errorDescription", void 0);
    return Delcs401ApplicationJson;
}(SpeakeasyBase));
export { Delcs401ApplicationJson };
export var Delcs404ApplicationJsonErrorEnum;
(function (Delcs404ApplicationJsonErrorEnum) {
    Delcs404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Delcs404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Delcs404ApplicationJsonErrorEnum || (Delcs404ApplicationJsonErrorEnum = {}));
export var Delcs404ApplicationJsonErrorDescriptionEnum;
(function (Delcs404ApplicationJsonErrorDescriptionEnum) {
    Delcs404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Delcs404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Delcs404ApplicationJsonErrorDescriptionEnum || (Delcs404ApplicationJsonErrorDescriptionEnum = {}));
var Delcs404ApplicationJson = /** @class */ (function (_super) {
    __extends(Delcs404ApplicationJson, _super);
    function Delcs404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Delcs404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Delcs404ApplicationJson.prototype, "errorDescription", void 0);
    return Delcs404ApplicationJson;
}(SpeakeasyBase));
export { Delcs404ApplicationJson };
export var Delcs500ApplicationJsonErrorEnum;
(function (Delcs500ApplicationJsonErrorEnum) {
    Delcs500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Delcs500ApplicationJsonErrorEnum || (Delcs500ApplicationJsonErrorEnum = {}));
export var Delcs500ApplicationJsonErrorDescriptionEnum;
(function (Delcs500ApplicationJsonErrorDescriptionEnum) {
    Delcs500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Delcs500ApplicationJsonErrorDescriptionEnum || (Delcs500ApplicationJsonErrorDescriptionEnum = {}));
var Delcs500ApplicationJson = /** @class */ (function (_super) {
    __extends(Delcs500ApplicationJson, _super);
    function Delcs500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Delcs500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Delcs500ApplicationJson.prototype, "errorDescription", void 0);
    return Delcs500ApplicationJson;
}(SpeakeasyBase));
export { Delcs500ApplicationJson };
export var Delcs502ApplicationJsonErrorEnum;
(function (Delcs502ApplicationJsonErrorEnum) {
    Delcs502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Delcs502ApplicationJsonErrorEnum || (Delcs502ApplicationJsonErrorEnum = {}));
export var Delcs502ApplicationJsonErrorDescriptionEnum;
(function (Delcs502ApplicationJsonErrorDescriptionEnum) {
    Delcs502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Delcs502ApplicationJsonErrorDescriptionEnum || (Delcs502ApplicationJsonErrorDescriptionEnum = {}));
var Delcs502ApplicationJson = /** @class */ (function (_super) {
    __extends(Delcs502ApplicationJson, _super);
    function Delcs502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Delcs502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Delcs502ApplicationJson.prototype, "errorDescription", void 0);
    return Delcs502ApplicationJson;
}(SpeakeasyBase));
export { Delcs502ApplicationJson };
export var Delcs503ApplicationJsonErrorEnum;
(function (Delcs503ApplicationJsonErrorEnum) {
    Delcs503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Delcs503ApplicationJsonErrorEnum || (Delcs503ApplicationJsonErrorEnum = {}));
export var Delcs503ApplicationJsonErrorDescriptionEnum;
(function (Delcs503ApplicationJsonErrorDescriptionEnum) {
    Delcs503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Delcs503ApplicationJsonErrorDescriptionEnum || (Delcs503ApplicationJsonErrorDescriptionEnum = {}));
var Delcs503ApplicationJson = /** @class */ (function (_super) {
    __extends(Delcs503ApplicationJson, _super);
    function Delcs503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Delcs503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Delcs503ApplicationJson.prototype, "errorDescription", void 0);
    return Delcs503ApplicationJson;
}(SpeakeasyBase));
export { Delcs503ApplicationJson };
export var Delcs504ApplicationJsonErrorEnum;
(function (Delcs504ApplicationJsonErrorEnum) {
    Delcs504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Delcs504ApplicationJsonErrorEnum || (Delcs504ApplicationJsonErrorEnum = {}));
export var Delcs504ApplicationJsonErrorDescriptionEnum;
(function (Delcs504ApplicationJsonErrorDescriptionEnum) {
    Delcs504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Delcs504ApplicationJsonErrorDescriptionEnum || (Delcs504ApplicationJsonErrorDescriptionEnum = {}));
var Delcs504ApplicationJson = /** @class */ (function (_super) {
    __extends(Delcs504ApplicationJson, _super);
    function Delcs504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Delcs504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Delcs504ApplicationJson.prototype, "errorDescription", void 0);
    return Delcs504ApplicationJson;
}(SpeakeasyBase));
export { Delcs504ApplicationJson };
var DelcsRequest = /** @class */ (function (_super) {
    __extends(DelcsRequest, _super);
    function DelcsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DelcsRequestBody)
    ], DelcsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DelcsSecurity)
    ], DelcsRequest.prototype, "security", void 0);
    return DelcsRequest;
}(SpeakeasyBase));
export { DelcsRequest };
var DelcsResponse = /** @class */ (function (_super) {
    __extends(DelcsResponse, _super);
    function DelcsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DelcsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DelcsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Delcs400ApplicationJson)
    ], DelcsResponse.prototype, "delcs400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Delcs401ApplicationJson)
    ], DelcsResponse.prototype, "delcs401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Delcs404ApplicationJson)
    ], DelcsResponse.prototype, "delcs404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Delcs500ApplicationJson)
    ], DelcsResponse.prototype, "delcs500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Delcs502ApplicationJson)
    ], DelcsResponse.prototype, "delcs502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Delcs503ApplicationJson)
    ], DelcsResponse.prototype, "delcs503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Delcs504ApplicationJson)
    ], DelcsResponse.prototype, "delcs504ApplicationJsonObject", void 0);
    return DelcsResponse;
}(SpeakeasyBase));
export { DelcsResponse };
