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
var TdlcsRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(TdlcsRequestBodyCertificateParameters, _super);
    function TdlcsRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DocumentNumber" }),
        __metadata("design:type", String)
    ], TdlcsRequestBodyCertificateParameters.prototype, "documentNumber", void 0);
    return TdlcsRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { TdlcsRequestBodyCertificateParameters };
export var TdlcsRequestBodyFormatEnum;
(function (TdlcsRequestBodyFormatEnum) {
    TdlcsRequestBodyFormatEnum["Pdf"] = "pdf";
})(TdlcsRequestBodyFormatEnum || (TdlcsRequestBodyFormatEnum = {}));
var TdlcsRequestBody = /** @class */ (function (_super) {
    __extends(TdlcsRequestBody, _super);
    function TdlcsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", TdlcsRequestBodyCertificateParameters)
    ], TdlcsRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], TdlcsRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], TdlcsRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], TdlcsRequestBody.prototype, "txnId", void 0);
    return TdlcsRequestBody;
}(SpeakeasyBase));
export { TdlcsRequestBody };
var TdlcsSecurity = /** @class */ (function (_super) {
    __extends(TdlcsSecurity, _super);
    function TdlcsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], TdlcsSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], TdlcsSecurity.prototype, "clientId", void 0);
    return TdlcsSecurity;
}(SpeakeasyBase));
export { TdlcsSecurity };
var TdlcsRequest = /** @class */ (function (_super) {
    __extends(TdlcsRequest, _super);
    function TdlcsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TdlcsRequestBody)
    ], TdlcsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TdlcsSecurity)
    ], TdlcsRequest.prototype, "security", void 0);
    return TdlcsRequest;
}(SpeakeasyBase));
export { TdlcsRequest };
export var Tdlcs400ApplicationJsonErrorEnum;
(function (Tdlcs400ApplicationJsonErrorEnum) {
    Tdlcs400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Tdlcs400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Tdlcs400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Tdlcs400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Tdlcs400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Tdlcs400ApplicationJsonErrorEnum || (Tdlcs400ApplicationJsonErrorEnum = {}));
export var Tdlcs400ApplicationJsonErrorDescriptionEnum;
(function (Tdlcs400ApplicationJsonErrorDescriptionEnum) {
    Tdlcs400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Tdlcs400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Tdlcs400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Tdlcs400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Tdlcs400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Tdlcs400ApplicationJsonErrorDescriptionEnum || (Tdlcs400ApplicationJsonErrorDescriptionEnum = {}));
var Tdlcs400ApplicationJson = /** @class */ (function (_super) {
    __extends(Tdlcs400ApplicationJson, _super);
    function Tdlcs400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tdlcs400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tdlcs400ApplicationJson.prototype, "errorDescription", void 0);
    return Tdlcs400ApplicationJson;
}(SpeakeasyBase));
export { Tdlcs400ApplicationJson };
export var Tdlcs401ApplicationJsonErrorEnum;
(function (Tdlcs401ApplicationJsonErrorEnum) {
    Tdlcs401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Tdlcs401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Tdlcs401ApplicationJsonErrorEnum || (Tdlcs401ApplicationJsonErrorEnum = {}));
export var Tdlcs401ApplicationJsonErrorDescriptionEnum;
(function (Tdlcs401ApplicationJsonErrorDescriptionEnum) {
    Tdlcs401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Tdlcs401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Tdlcs401ApplicationJsonErrorDescriptionEnum || (Tdlcs401ApplicationJsonErrorDescriptionEnum = {}));
var Tdlcs401ApplicationJson = /** @class */ (function (_super) {
    __extends(Tdlcs401ApplicationJson, _super);
    function Tdlcs401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tdlcs401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tdlcs401ApplicationJson.prototype, "errorDescription", void 0);
    return Tdlcs401ApplicationJson;
}(SpeakeasyBase));
export { Tdlcs401ApplicationJson };
export var Tdlcs404ApplicationJsonErrorEnum;
(function (Tdlcs404ApplicationJsonErrorEnum) {
    Tdlcs404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Tdlcs404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Tdlcs404ApplicationJsonErrorEnum || (Tdlcs404ApplicationJsonErrorEnum = {}));
export var Tdlcs404ApplicationJsonErrorDescriptionEnum;
(function (Tdlcs404ApplicationJsonErrorDescriptionEnum) {
    Tdlcs404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Tdlcs404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Tdlcs404ApplicationJsonErrorDescriptionEnum || (Tdlcs404ApplicationJsonErrorDescriptionEnum = {}));
var Tdlcs404ApplicationJson = /** @class */ (function (_super) {
    __extends(Tdlcs404ApplicationJson, _super);
    function Tdlcs404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tdlcs404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tdlcs404ApplicationJson.prototype, "errorDescription", void 0);
    return Tdlcs404ApplicationJson;
}(SpeakeasyBase));
export { Tdlcs404ApplicationJson };
export var Tdlcs500ApplicationJsonErrorEnum;
(function (Tdlcs500ApplicationJsonErrorEnum) {
    Tdlcs500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Tdlcs500ApplicationJsonErrorEnum || (Tdlcs500ApplicationJsonErrorEnum = {}));
export var Tdlcs500ApplicationJsonErrorDescriptionEnum;
(function (Tdlcs500ApplicationJsonErrorDescriptionEnum) {
    Tdlcs500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Tdlcs500ApplicationJsonErrorDescriptionEnum || (Tdlcs500ApplicationJsonErrorDescriptionEnum = {}));
var Tdlcs500ApplicationJson = /** @class */ (function (_super) {
    __extends(Tdlcs500ApplicationJson, _super);
    function Tdlcs500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tdlcs500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tdlcs500ApplicationJson.prototype, "errorDescription", void 0);
    return Tdlcs500ApplicationJson;
}(SpeakeasyBase));
export { Tdlcs500ApplicationJson };
export var Tdlcs502ApplicationJsonErrorEnum;
(function (Tdlcs502ApplicationJsonErrorEnum) {
    Tdlcs502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Tdlcs502ApplicationJsonErrorEnum || (Tdlcs502ApplicationJsonErrorEnum = {}));
export var Tdlcs502ApplicationJsonErrorDescriptionEnum;
(function (Tdlcs502ApplicationJsonErrorDescriptionEnum) {
    Tdlcs502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Tdlcs502ApplicationJsonErrorDescriptionEnum || (Tdlcs502ApplicationJsonErrorDescriptionEnum = {}));
var Tdlcs502ApplicationJson = /** @class */ (function (_super) {
    __extends(Tdlcs502ApplicationJson, _super);
    function Tdlcs502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tdlcs502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tdlcs502ApplicationJson.prototype, "errorDescription", void 0);
    return Tdlcs502ApplicationJson;
}(SpeakeasyBase));
export { Tdlcs502ApplicationJson };
export var Tdlcs503ApplicationJsonErrorEnum;
(function (Tdlcs503ApplicationJsonErrorEnum) {
    Tdlcs503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Tdlcs503ApplicationJsonErrorEnum || (Tdlcs503ApplicationJsonErrorEnum = {}));
export var Tdlcs503ApplicationJsonErrorDescriptionEnum;
(function (Tdlcs503ApplicationJsonErrorDescriptionEnum) {
    Tdlcs503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Tdlcs503ApplicationJsonErrorDescriptionEnum || (Tdlcs503ApplicationJsonErrorDescriptionEnum = {}));
var Tdlcs503ApplicationJson = /** @class */ (function (_super) {
    __extends(Tdlcs503ApplicationJson, _super);
    function Tdlcs503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tdlcs503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tdlcs503ApplicationJson.prototype, "errorDescription", void 0);
    return Tdlcs503ApplicationJson;
}(SpeakeasyBase));
export { Tdlcs503ApplicationJson };
export var Tdlcs504ApplicationJsonErrorEnum;
(function (Tdlcs504ApplicationJsonErrorEnum) {
    Tdlcs504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Tdlcs504ApplicationJsonErrorEnum || (Tdlcs504ApplicationJsonErrorEnum = {}));
export var Tdlcs504ApplicationJsonErrorDescriptionEnum;
(function (Tdlcs504ApplicationJsonErrorDescriptionEnum) {
    Tdlcs504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Tdlcs504ApplicationJsonErrorDescriptionEnum || (Tdlcs504ApplicationJsonErrorDescriptionEnum = {}));
var Tdlcs504ApplicationJson = /** @class */ (function (_super) {
    __extends(Tdlcs504ApplicationJson, _super);
    function Tdlcs504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tdlcs504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tdlcs504ApplicationJson.prototype, "errorDescription", void 0);
    return Tdlcs504ApplicationJson;
}(SpeakeasyBase));
export { Tdlcs504ApplicationJson };
var TdlcsResponse = /** @class */ (function (_super) {
    __extends(TdlcsResponse, _super);
    function TdlcsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TdlcsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TdlcsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tdlcs400ApplicationJson)
    ], TdlcsResponse.prototype, "tdlcs400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tdlcs401ApplicationJson)
    ], TdlcsResponse.prototype, "tdlcs401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tdlcs404ApplicationJson)
    ], TdlcsResponse.prototype, "tdlcs404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tdlcs500ApplicationJson)
    ], TdlcsResponse.prototype, "tdlcs500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tdlcs502ApplicationJson)
    ], TdlcsResponse.prototype, "tdlcs502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tdlcs503ApplicationJson)
    ], TdlcsResponse.prototype, "tdlcs503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tdlcs504ApplicationJson)
    ], TdlcsResponse.prototype, "tdlcs504ApplicationJsonObject", void 0);
    return TdlcsResponse;
}(SpeakeasyBase));
export { TdlcsResponse };
