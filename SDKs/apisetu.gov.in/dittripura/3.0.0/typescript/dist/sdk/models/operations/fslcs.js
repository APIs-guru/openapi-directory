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
var FslcsRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(FslcsRequestBodyCertificateParameters, _super);
    function FslcsRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], FslcsRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        Metadata({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], FslcsRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return FslcsRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { FslcsRequestBodyCertificateParameters };
export var FslcsRequestBodyFormatEnum;
(function (FslcsRequestBodyFormatEnum) {
    FslcsRequestBodyFormatEnum["Pdf"] = "pdf";
})(FslcsRequestBodyFormatEnum || (FslcsRequestBodyFormatEnum = {}));
var FslcsRequestBody = /** @class */ (function (_super) {
    __extends(FslcsRequestBody, _super);
    function FslcsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", FslcsRequestBodyCertificateParameters)
    ], FslcsRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], FslcsRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], FslcsRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], FslcsRequestBody.prototype, "txnId", void 0);
    return FslcsRequestBody;
}(SpeakeasyBase));
export { FslcsRequestBody };
var FslcsSecurity = /** @class */ (function (_super) {
    __extends(FslcsSecurity, _super);
    function FslcsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], FslcsSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], FslcsSecurity.prototype, "clientId", void 0);
    return FslcsSecurity;
}(SpeakeasyBase));
export { FslcsSecurity };
var FslcsRequest = /** @class */ (function (_super) {
    __extends(FslcsRequest, _super);
    function FslcsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", FslcsRequestBody)
    ], FslcsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FslcsSecurity)
    ], FslcsRequest.prototype, "security", void 0);
    return FslcsRequest;
}(SpeakeasyBase));
export { FslcsRequest };
export var Fslcs400ApplicationJsonErrorEnum;
(function (Fslcs400ApplicationJsonErrorEnum) {
    Fslcs400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Fslcs400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Fslcs400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Fslcs400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Fslcs400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Fslcs400ApplicationJsonErrorEnum || (Fslcs400ApplicationJsonErrorEnum = {}));
export var Fslcs400ApplicationJsonErrorDescriptionEnum;
(function (Fslcs400ApplicationJsonErrorDescriptionEnum) {
    Fslcs400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Fslcs400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Fslcs400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Fslcs400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Fslcs400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Fslcs400ApplicationJsonErrorDescriptionEnum || (Fslcs400ApplicationJsonErrorDescriptionEnum = {}));
var Fslcs400ApplicationJson = /** @class */ (function (_super) {
    __extends(Fslcs400ApplicationJson, _super);
    function Fslcs400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fslcs400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fslcs400ApplicationJson.prototype, "errorDescription", void 0);
    return Fslcs400ApplicationJson;
}(SpeakeasyBase));
export { Fslcs400ApplicationJson };
export var Fslcs401ApplicationJsonErrorEnum;
(function (Fslcs401ApplicationJsonErrorEnum) {
    Fslcs401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Fslcs401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Fslcs401ApplicationJsonErrorEnum || (Fslcs401ApplicationJsonErrorEnum = {}));
export var Fslcs401ApplicationJsonErrorDescriptionEnum;
(function (Fslcs401ApplicationJsonErrorDescriptionEnum) {
    Fslcs401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Fslcs401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Fslcs401ApplicationJsonErrorDescriptionEnum || (Fslcs401ApplicationJsonErrorDescriptionEnum = {}));
var Fslcs401ApplicationJson = /** @class */ (function (_super) {
    __extends(Fslcs401ApplicationJson, _super);
    function Fslcs401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fslcs401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fslcs401ApplicationJson.prototype, "errorDescription", void 0);
    return Fslcs401ApplicationJson;
}(SpeakeasyBase));
export { Fslcs401ApplicationJson };
export var Fslcs404ApplicationJsonErrorEnum;
(function (Fslcs404ApplicationJsonErrorEnum) {
    Fslcs404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Fslcs404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Fslcs404ApplicationJsonErrorEnum || (Fslcs404ApplicationJsonErrorEnum = {}));
export var Fslcs404ApplicationJsonErrorDescriptionEnum;
(function (Fslcs404ApplicationJsonErrorDescriptionEnum) {
    Fslcs404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Fslcs404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Fslcs404ApplicationJsonErrorDescriptionEnum || (Fslcs404ApplicationJsonErrorDescriptionEnum = {}));
var Fslcs404ApplicationJson = /** @class */ (function (_super) {
    __extends(Fslcs404ApplicationJson, _super);
    function Fslcs404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fslcs404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fslcs404ApplicationJson.prototype, "errorDescription", void 0);
    return Fslcs404ApplicationJson;
}(SpeakeasyBase));
export { Fslcs404ApplicationJson };
export var Fslcs500ApplicationJsonErrorEnum;
(function (Fslcs500ApplicationJsonErrorEnum) {
    Fslcs500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Fslcs500ApplicationJsonErrorEnum || (Fslcs500ApplicationJsonErrorEnum = {}));
export var Fslcs500ApplicationJsonErrorDescriptionEnum;
(function (Fslcs500ApplicationJsonErrorDescriptionEnum) {
    Fslcs500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Fslcs500ApplicationJsonErrorDescriptionEnum || (Fslcs500ApplicationJsonErrorDescriptionEnum = {}));
var Fslcs500ApplicationJson = /** @class */ (function (_super) {
    __extends(Fslcs500ApplicationJson, _super);
    function Fslcs500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fslcs500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fslcs500ApplicationJson.prototype, "errorDescription", void 0);
    return Fslcs500ApplicationJson;
}(SpeakeasyBase));
export { Fslcs500ApplicationJson };
export var Fslcs502ApplicationJsonErrorEnum;
(function (Fslcs502ApplicationJsonErrorEnum) {
    Fslcs502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Fslcs502ApplicationJsonErrorEnum || (Fslcs502ApplicationJsonErrorEnum = {}));
export var Fslcs502ApplicationJsonErrorDescriptionEnum;
(function (Fslcs502ApplicationJsonErrorDescriptionEnum) {
    Fslcs502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Fslcs502ApplicationJsonErrorDescriptionEnum || (Fslcs502ApplicationJsonErrorDescriptionEnum = {}));
var Fslcs502ApplicationJson = /** @class */ (function (_super) {
    __extends(Fslcs502ApplicationJson, _super);
    function Fslcs502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fslcs502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fslcs502ApplicationJson.prototype, "errorDescription", void 0);
    return Fslcs502ApplicationJson;
}(SpeakeasyBase));
export { Fslcs502ApplicationJson };
export var Fslcs503ApplicationJsonErrorEnum;
(function (Fslcs503ApplicationJsonErrorEnum) {
    Fslcs503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Fslcs503ApplicationJsonErrorEnum || (Fslcs503ApplicationJsonErrorEnum = {}));
export var Fslcs503ApplicationJsonErrorDescriptionEnum;
(function (Fslcs503ApplicationJsonErrorDescriptionEnum) {
    Fslcs503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Fslcs503ApplicationJsonErrorDescriptionEnum || (Fslcs503ApplicationJsonErrorDescriptionEnum = {}));
var Fslcs503ApplicationJson = /** @class */ (function (_super) {
    __extends(Fslcs503ApplicationJson, _super);
    function Fslcs503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fslcs503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fslcs503ApplicationJson.prototype, "errorDescription", void 0);
    return Fslcs503ApplicationJson;
}(SpeakeasyBase));
export { Fslcs503ApplicationJson };
export var Fslcs504ApplicationJsonErrorEnum;
(function (Fslcs504ApplicationJsonErrorEnum) {
    Fslcs504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Fslcs504ApplicationJsonErrorEnum || (Fslcs504ApplicationJsonErrorEnum = {}));
export var Fslcs504ApplicationJsonErrorDescriptionEnum;
(function (Fslcs504ApplicationJsonErrorDescriptionEnum) {
    Fslcs504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Fslcs504ApplicationJsonErrorDescriptionEnum || (Fslcs504ApplicationJsonErrorDescriptionEnum = {}));
var Fslcs504ApplicationJson = /** @class */ (function (_super) {
    __extends(Fslcs504ApplicationJson, _super);
    function Fslcs504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fslcs504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fslcs504ApplicationJson.prototype, "errorDescription", void 0);
    return Fslcs504ApplicationJson;
}(SpeakeasyBase));
export { Fslcs504ApplicationJson };
var FslcsResponse = /** @class */ (function (_super) {
    __extends(FslcsResponse, _super);
    function FslcsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FslcsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FslcsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Fslcs400ApplicationJson)
    ], FslcsResponse.prototype, "fslcs400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Fslcs401ApplicationJson)
    ], FslcsResponse.prototype, "fslcs401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Fslcs404ApplicationJson)
    ], FslcsResponse.prototype, "fslcs404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Fslcs500ApplicationJson)
    ], FslcsResponse.prototype, "fslcs500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Fslcs502ApplicationJson)
    ], FslcsResponse.prototype, "fslcs502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Fslcs503ApplicationJson)
    ], FslcsResponse.prototype, "fslcs503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Fslcs504ApplicationJson)
    ], FslcsResponse.prototype, "fslcs504ApplicationJsonObject", void 0);
    return FslcsResponse;
}(SpeakeasyBase));
export { FslcsResponse };
