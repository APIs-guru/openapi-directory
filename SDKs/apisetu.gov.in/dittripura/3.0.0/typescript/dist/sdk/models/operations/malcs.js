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
var MalcsRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(MalcsRequestBodyCertificateParameters, _super);
    function MalcsRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], MalcsRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        Metadata({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], MalcsRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return MalcsRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { MalcsRequestBodyCertificateParameters };
export var MalcsRequestBodyFormatEnum;
(function (MalcsRequestBodyFormatEnum) {
    MalcsRequestBodyFormatEnum["Pdf"] = "pdf";
})(MalcsRequestBodyFormatEnum || (MalcsRequestBodyFormatEnum = {}));
var MalcsRequestBody = /** @class */ (function (_super) {
    __extends(MalcsRequestBody, _super);
    function MalcsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", MalcsRequestBodyCertificateParameters)
    ], MalcsRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], MalcsRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], MalcsRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], MalcsRequestBody.prototype, "txnId", void 0);
    return MalcsRequestBody;
}(SpeakeasyBase));
export { MalcsRequestBody };
var MalcsSecurity = /** @class */ (function (_super) {
    __extends(MalcsSecurity, _super);
    function MalcsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MalcsSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], MalcsSecurity.prototype, "clientId", void 0);
    return MalcsSecurity;
}(SpeakeasyBase));
export { MalcsSecurity };
var MalcsRequest = /** @class */ (function (_super) {
    __extends(MalcsRequest, _super);
    function MalcsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", MalcsRequestBody)
    ], MalcsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MalcsSecurity)
    ], MalcsRequest.prototype, "security", void 0);
    return MalcsRequest;
}(SpeakeasyBase));
export { MalcsRequest };
export var Malcs400ApplicationJsonErrorEnum;
(function (Malcs400ApplicationJsonErrorEnum) {
    Malcs400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Malcs400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Malcs400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Malcs400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Malcs400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Malcs400ApplicationJsonErrorEnum || (Malcs400ApplicationJsonErrorEnum = {}));
export var Malcs400ApplicationJsonErrorDescriptionEnum;
(function (Malcs400ApplicationJsonErrorDescriptionEnum) {
    Malcs400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Malcs400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Malcs400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Malcs400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Malcs400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Malcs400ApplicationJsonErrorDescriptionEnum || (Malcs400ApplicationJsonErrorDescriptionEnum = {}));
var Malcs400ApplicationJson = /** @class */ (function (_super) {
    __extends(Malcs400ApplicationJson, _super);
    function Malcs400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Malcs400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Malcs400ApplicationJson.prototype, "errorDescription", void 0);
    return Malcs400ApplicationJson;
}(SpeakeasyBase));
export { Malcs400ApplicationJson };
export var Malcs401ApplicationJsonErrorEnum;
(function (Malcs401ApplicationJsonErrorEnum) {
    Malcs401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Malcs401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Malcs401ApplicationJsonErrorEnum || (Malcs401ApplicationJsonErrorEnum = {}));
export var Malcs401ApplicationJsonErrorDescriptionEnum;
(function (Malcs401ApplicationJsonErrorDescriptionEnum) {
    Malcs401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Malcs401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Malcs401ApplicationJsonErrorDescriptionEnum || (Malcs401ApplicationJsonErrorDescriptionEnum = {}));
var Malcs401ApplicationJson = /** @class */ (function (_super) {
    __extends(Malcs401ApplicationJson, _super);
    function Malcs401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Malcs401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Malcs401ApplicationJson.prototype, "errorDescription", void 0);
    return Malcs401ApplicationJson;
}(SpeakeasyBase));
export { Malcs401ApplicationJson };
export var Malcs404ApplicationJsonErrorEnum;
(function (Malcs404ApplicationJsonErrorEnum) {
    Malcs404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Malcs404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Malcs404ApplicationJsonErrorEnum || (Malcs404ApplicationJsonErrorEnum = {}));
export var Malcs404ApplicationJsonErrorDescriptionEnum;
(function (Malcs404ApplicationJsonErrorDescriptionEnum) {
    Malcs404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Malcs404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Malcs404ApplicationJsonErrorDescriptionEnum || (Malcs404ApplicationJsonErrorDescriptionEnum = {}));
var Malcs404ApplicationJson = /** @class */ (function (_super) {
    __extends(Malcs404ApplicationJson, _super);
    function Malcs404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Malcs404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Malcs404ApplicationJson.prototype, "errorDescription", void 0);
    return Malcs404ApplicationJson;
}(SpeakeasyBase));
export { Malcs404ApplicationJson };
export var Malcs500ApplicationJsonErrorEnum;
(function (Malcs500ApplicationJsonErrorEnum) {
    Malcs500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Malcs500ApplicationJsonErrorEnum || (Malcs500ApplicationJsonErrorEnum = {}));
export var Malcs500ApplicationJsonErrorDescriptionEnum;
(function (Malcs500ApplicationJsonErrorDescriptionEnum) {
    Malcs500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Malcs500ApplicationJsonErrorDescriptionEnum || (Malcs500ApplicationJsonErrorDescriptionEnum = {}));
var Malcs500ApplicationJson = /** @class */ (function (_super) {
    __extends(Malcs500ApplicationJson, _super);
    function Malcs500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Malcs500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Malcs500ApplicationJson.prototype, "errorDescription", void 0);
    return Malcs500ApplicationJson;
}(SpeakeasyBase));
export { Malcs500ApplicationJson };
export var Malcs502ApplicationJsonErrorEnum;
(function (Malcs502ApplicationJsonErrorEnum) {
    Malcs502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Malcs502ApplicationJsonErrorEnum || (Malcs502ApplicationJsonErrorEnum = {}));
export var Malcs502ApplicationJsonErrorDescriptionEnum;
(function (Malcs502ApplicationJsonErrorDescriptionEnum) {
    Malcs502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Malcs502ApplicationJsonErrorDescriptionEnum || (Malcs502ApplicationJsonErrorDescriptionEnum = {}));
var Malcs502ApplicationJson = /** @class */ (function (_super) {
    __extends(Malcs502ApplicationJson, _super);
    function Malcs502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Malcs502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Malcs502ApplicationJson.prototype, "errorDescription", void 0);
    return Malcs502ApplicationJson;
}(SpeakeasyBase));
export { Malcs502ApplicationJson };
export var Malcs503ApplicationJsonErrorEnum;
(function (Malcs503ApplicationJsonErrorEnum) {
    Malcs503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Malcs503ApplicationJsonErrorEnum || (Malcs503ApplicationJsonErrorEnum = {}));
export var Malcs503ApplicationJsonErrorDescriptionEnum;
(function (Malcs503ApplicationJsonErrorDescriptionEnum) {
    Malcs503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Malcs503ApplicationJsonErrorDescriptionEnum || (Malcs503ApplicationJsonErrorDescriptionEnum = {}));
var Malcs503ApplicationJson = /** @class */ (function (_super) {
    __extends(Malcs503ApplicationJson, _super);
    function Malcs503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Malcs503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Malcs503ApplicationJson.prototype, "errorDescription", void 0);
    return Malcs503ApplicationJson;
}(SpeakeasyBase));
export { Malcs503ApplicationJson };
export var Malcs504ApplicationJsonErrorEnum;
(function (Malcs504ApplicationJsonErrorEnum) {
    Malcs504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Malcs504ApplicationJsonErrorEnum || (Malcs504ApplicationJsonErrorEnum = {}));
export var Malcs504ApplicationJsonErrorDescriptionEnum;
(function (Malcs504ApplicationJsonErrorDescriptionEnum) {
    Malcs504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Malcs504ApplicationJsonErrorDescriptionEnum || (Malcs504ApplicationJsonErrorDescriptionEnum = {}));
var Malcs504ApplicationJson = /** @class */ (function (_super) {
    __extends(Malcs504ApplicationJson, _super);
    function Malcs504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Malcs504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Malcs504ApplicationJson.prototype, "errorDescription", void 0);
    return Malcs504ApplicationJson;
}(SpeakeasyBase));
export { Malcs504ApplicationJson };
var MalcsResponse = /** @class */ (function (_super) {
    __extends(MalcsResponse, _super);
    function MalcsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MalcsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MalcsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Malcs400ApplicationJson)
    ], MalcsResponse.prototype, "malcs400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Malcs401ApplicationJson)
    ], MalcsResponse.prototype, "malcs401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Malcs404ApplicationJson)
    ], MalcsResponse.prototype, "malcs404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Malcs500ApplicationJson)
    ], MalcsResponse.prototype, "malcs500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Malcs502ApplicationJson)
    ], MalcsResponse.prototype, "malcs502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Malcs503ApplicationJson)
    ], MalcsResponse.prototype, "malcs503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Malcs504ApplicationJson)
    ], MalcsResponse.prototype, "malcs504ApplicationJsonObject", void 0);
    return MalcsResponse;
}(SpeakeasyBase));
export { MalcsResponse };
