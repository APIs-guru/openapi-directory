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
var RelcsRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RelcsRequestBodyCertificateParameters, _super);
    function RelcsRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=applicationNo" }),
        __metadata("design:type", String)
    ], RelcsRequestBodyCertificateParameters.prototype, "applicationNo", void 0);
    __decorate([
        Metadata({ data: "json, name=licenseNo" }),
        __metadata("design:type", String)
    ], RelcsRequestBodyCertificateParameters.prototype, "licenseNo", void 0);
    return RelcsRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { RelcsRequestBodyCertificateParameters };
export var RelcsRequestBodyFormatEnum;
(function (RelcsRequestBodyFormatEnum) {
    RelcsRequestBodyFormatEnum["Pdf"] = "pdf";
})(RelcsRequestBodyFormatEnum || (RelcsRequestBodyFormatEnum = {}));
var RelcsRequestBody = /** @class */ (function (_super) {
    __extends(RelcsRequestBody, _super);
    function RelcsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RelcsRequestBodyCertificateParameters)
    ], RelcsRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RelcsRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RelcsRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RelcsRequestBody.prototype, "txnId", void 0);
    return RelcsRequestBody;
}(SpeakeasyBase));
export { RelcsRequestBody };
var RelcsSecurity = /** @class */ (function (_super) {
    __extends(RelcsSecurity, _super);
    function RelcsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RelcsSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RelcsSecurity.prototype, "clientId", void 0);
    return RelcsSecurity;
}(SpeakeasyBase));
export { RelcsSecurity };
var RelcsRequest = /** @class */ (function (_super) {
    __extends(RelcsRequest, _super);
    function RelcsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RelcsRequestBody)
    ], RelcsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RelcsSecurity)
    ], RelcsRequest.prototype, "security", void 0);
    return RelcsRequest;
}(SpeakeasyBase));
export { RelcsRequest };
export var Relcs400ApplicationJsonErrorEnum;
(function (Relcs400ApplicationJsonErrorEnum) {
    Relcs400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Relcs400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Relcs400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Relcs400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Relcs400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Relcs400ApplicationJsonErrorEnum || (Relcs400ApplicationJsonErrorEnum = {}));
export var Relcs400ApplicationJsonErrorDescriptionEnum;
(function (Relcs400ApplicationJsonErrorDescriptionEnum) {
    Relcs400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Relcs400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Relcs400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Relcs400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Relcs400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Relcs400ApplicationJsonErrorDescriptionEnum || (Relcs400ApplicationJsonErrorDescriptionEnum = {}));
var Relcs400ApplicationJson = /** @class */ (function (_super) {
    __extends(Relcs400ApplicationJson, _super);
    function Relcs400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Relcs400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Relcs400ApplicationJson.prototype, "errorDescription", void 0);
    return Relcs400ApplicationJson;
}(SpeakeasyBase));
export { Relcs400ApplicationJson };
export var Relcs401ApplicationJsonErrorEnum;
(function (Relcs401ApplicationJsonErrorEnum) {
    Relcs401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Relcs401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Relcs401ApplicationJsonErrorEnum || (Relcs401ApplicationJsonErrorEnum = {}));
export var Relcs401ApplicationJsonErrorDescriptionEnum;
(function (Relcs401ApplicationJsonErrorDescriptionEnum) {
    Relcs401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Relcs401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Relcs401ApplicationJsonErrorDescriptionEnum || (Relcs401ApplicationJsonErrorDescriptionEnum = {}));
var Relcs401ApplicationJson = /** @class */ (function (_super) {
    __extends(Relcs401ApplicationJson, _super);
    function Relcs401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Relcs401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Relcs401ApplicationJson.prototype, "errorDescription", void 0);
    return Relcs401ApplicationJson;
}(SpeakeasyBase));
export { Relcs401ApplicationJson };
export var Relcs404ApplicationJsonErrorEnum;
(function (Relcs404ApplicationJsonErrorEnum) {
    Relcs404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Relcs404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Relcs404ApplicationJsonErrorEnum || (Relcs404ApplicationJsonErrorEnum = {}));
export var Relcs404ApplicationJsonErrorDescriptionEnum;
(function (Relcs404ApplicationJsonErrorDescriptionEnum) {
    Relcs404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Relcs404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Relcs404ApplicationJsonErrorDescriptionEnum || (Relcs404ApplicationJsonErrorDescriptionEnum = {}));
var Relcs404ApplicationJson = /** @class */ (function (_super) {
    __extends(Relcs404ApplicationJson, _super);
    function Relcs404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Relcs404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Relcs404ApplicationJson.prototype, "errorDescription", void 0);
    return Relcs404ApplicationJson;
}(SpeakeasyBase));
export { Relcs404ApplicationJson };
export var Relcs500ApplicationJsonErrorEnum;
(function (Relcs500ApplicationJsonErrorEnum) {
    Relcs500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Relcs500ApplicationJsonErrorEnum || (Relcs500ApplicationJsonErrorEnum = {}));
export var Relcs500ApplicationJsonErrorDescriptionEnum;
(function (Relcs500ApplicationJsonErrorDescriptionEnum) {
    Relcs500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Relcs500ApplicationJsonErrorDescriptionEnum || (Relcs500ApplicationJsonErrorDescriptionEnum = {}));
var Relcs500ApplicationJson = /** @class */ (function (_super) {
    __extends(Relcs500ApplicationJson, _super);
    function Relcs500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Relcs500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Relcs500ApplicationJson.prototype, "errorDescription", void 0);
    return Relcs500ApplicationJson;
}(SpeakeasyBase));
export { Relcs500ApplicationJson };
export var Relcs502ApplicationJsonErrorEnum;
(function (Relcs502ApplicationJsonErrorEnum) {
    Relcs502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Relcs502ApplicationJsonErrorEnum || (Relcs502ApplicationJsonErrorEnum = {}));
export var Relcs502ApplicationJsonErrorDescriptionEnum;
(function (Relcs502ApplicationJsonErrorDescriptionEnum) {
    Relcs502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Relcs502ApplicationJsonErrorDescriptionEnum || (Relcs502ApplicationJsonErrorDescriptionEnum = {}));
var Relcs502ApplicationJson = /** @class */ (function (_super) {
    __extends(Relcs502ApplicationJson, _super);
    function Relcs502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Relcs502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Relcs502ApplicationJson.prototype, "errorDescription", void 0);
    return Relcs502ApplicationJson;
}(SpeakeasyBase));
export { Relcs502ApplicationJson };
export var Relcs503ApplicationJsonErrorEnum;
(function (Relcs503ApplicationJsonErrorEnum) {
    Relcs503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Relcs503ApplicationJsonErrorEnum || (Relcs503ApplicationJsonErrorEnum = {}));
export var Relcs503ApplicationJsonErrorDescriptionEnum;
(function (Relcs503ApplicationJsonErrorDescriptionEnum) {
    Relcs503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Relcs503ApplicationJsonErrorDescriptionEnum || (Relcs503ApplicationJsonErrorDescriptionEnum = {}));
var Relcs503ApplicationJson = /** @class */ (function (_super) {
    __extends(Relcs503ApplicationJson, _super);
    function Relcs503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Relcs503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Relcs503ApplicationJson.prototype, "errorDescription", void 0);
    return Relcs503ApplicationJson;
}(SpeakeasyBase));
export { Relcs503ApplicationJson };
export var Relcs504ApplicationJsonErrorEnum;
(function (Relcs504ApplicationJsonErrorEnum) {
    Relcs504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Relcs504ApplicationJsonErrorEnum || (Relcs504ApplicationJsonErrorEnum = {}));
export var Relcs504ApplicationJsonErrorDescriptionEnum;
(function (Relcs504ApplicationJsonErrorDescriptionEnum) {
    Relcs504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Relcs504ApplicationJsonErrorDescriptionEnum || (Relcs504ApplicationJsonErrorDescriptionEnum = {}));
var Relcs504ApplicationJson = /** @class */ (function (_super) {
    __extends(Relcs504ApplicationJson, _super);
    function Relcs504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Relcs504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Relcs504ApplicationJson.prototype, "errorDescription", void 0);
    return Relcs504ApplicationJson;
}(SpeakeasyBase));
export { Relcs504ApplicationJson };
var RelcsResponse = /** @class */ (function (_super) {
    __extends(RelcsResponse, _super);
    function RelcsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RelcsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RelcsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Relcs400ApplicationJson)
    ], RelcsResponse.prototype, "relcs400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Relcs401ApplicationJson)
    ], RelcsResponse.prototype, "relcs401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Relcs404ApplicationJson)
    ], RelcsResponse.prototype, "relcs404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Relcs500ApplicationJson)
    ], RelcsResponse.prototype, "relcs500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Relcs502ApplicationJson)
    ], RelcsResponse.prototype, "relcs502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Relcs503ApplicationJson)
    ], RelcsResponse.prototype, "relcs503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Relcs504ApplicationJson)
    ], RelcsResponse.prototype, "relcs504ApplicationJsonObject", void 0);
    return RelcsResponse;
}(SpeakeasyBase));
export { RelcsResponse };
