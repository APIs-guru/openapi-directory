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
var MutanRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(MutanRequestBodyCertificateParameters, _super);
    function MutanRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DocumentNumber" }),
        __metadata("design:type", String)
    ], MutanRequestBodyCertificateParameters.prototype, "documentNumber", void 0);
    return MutanRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { MutanRequestBodyCertificateParameters };
export var MutanRequestBodyFormatEnum;
(function (MutanRequestBodyFormatEnum) {
    MutanRequestBodyFormatEnum["Xml"] = "xml";
    MutanRequestBodyFormatEnum["Pdf"] = "pdf";
})(MutanRequestBodyFormatEnum || (MutanRequestBodyFormatEnum = {}));
var MutanRequestBody = /** @class */ (function (_super) {
    __extends(MutanRequestBody, _super);
    function MutanRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", MutanRequestBodyCertificateParameters)
    ], MutanRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], MutanRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], MutanRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], MutanRequestBody.prototype, "txnId", void 0);
    return MutanRequestBody;
}(SpeakeasyBase));
export { MutanRequestBody };
var MutanSecurity = /** @class */ (function (_super) {
    __extends(MutanSecurity, _super);
    function MutanSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MutanSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], MutanSecurity.prototype, "clientId", void 0);
    return MutanSecurity;
}(SpeakeasyBase));
export { MutanSecurity };
var MutanRequest = /** @class */ (function (_super) {
    __extends(MutanRequest, _super);
    function MutanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", MutanRequestBody)
    ], MutanRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MutanSecurity)
    ], MutanRequest.prototype, "security", void 0);
    return MutanRequest;
}(SpeakeasyBase));
export { MutanRequest };
export var Mutan400ApplicationJsonErrorEnum;
(function (Mutan400ApplicationJsonErrorEnum) {
    Mutan400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Mutan400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Mutan400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Mutan400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Mutan400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Mutan400ApplicationJsonErrorEnum || (Mutan400ApplicationJsonErrorEnum = {}));
export var Mutan400ApplicationJsonErrorDescriptionEnum;
(function (Mutan400ApplicationJsonErrorDescriptionEnum) {
    Mutan400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Mutan400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Mutan400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Mutan400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Mutan400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Mutan400ApplicationJsonErrorDescriptionEnum || (Mutan400ApplicationJsonErrorDescriptionEnum = {}));
var Mutan400ApplicationJson = /** @class */ (function (_super) {
    __extends(Mutan400ApplicationJson, _super);
    function Mutan400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mutan400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mutan400ApplicationJson.prototype, "errorDescription", void 0);
    return Mutan400ApplicationJson;
}(SpeakeasyBase));
export { Mutan400ApplicationJson };
export var Mutan401ApplicationJsonErrorEnum;
(function (Mutan401ApplicationJsonErrorEnum) {
    Mutan401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Mutan401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Mutan401ApplicationJsonErrorEnum || (Mutan401ApplicationJsonErrorEnum = {}));
export var Mutan401ApplicationJsonErrorDescriptionEnum;
(function (Mutan401ApplicationJsonErrorDescriptionEnum) {
    Mutan401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Mutan401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Mutan401ApplicationJsonErrorDescriptionEnum || (Mutan401ApplicationJsonErrorDescriptionEnum = {}));
var Mutan401ApplicationJson = /** @class */ (function (_super) {
    __extends(Mutan401ApplicationJson, _super);
    function Mutan401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mutan401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mutan401ApplicationJson.prototype, "errorDescription", void 0);
    return Mutan401ApplicationJson;
}(SpeakeasyBase));
export { Mutan401ApplicationJson };
export var Mutan404ApplicationJsonErrorEnum;
(function (Mutan404ApplicationJsonErrorEnum) {
    Mutan404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Mutan404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Mutan404ApplicationJsonErrorEnum || (Mutan404ApplicationJsonErrorEnum = {}));
export var Mutan404ApplicationJsonErrorDescriptionEnum;
(function (Mutan404ApplicationJsonErrorDescriptionEnum) {
    Mutan404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Mutan404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Mutan404ApplicationJsonErrorDescriptionEnum || (Mutan404ApplicationJsonErrorDescriptionEnum = {}));
var Mutan404ApplicationJson = /** @class */ (function (_super) {
    __extends(Mutan404ApplicationJson, _super);
    function Mutan404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mutan404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mutan404ApplicationJson.prototype, "errorDescription", void 0);
    return Mutan404ApplicationJson;
}(SpeakeasyBase));
export { Mutan404ApplicationJson };
export var Mutan500ApplicationJsonErrorEnum;
(function (Mutan500ApplicationJsonErrorEnum) {
    Mutan500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Mutan500ApplicationJsonErrorEnum || (Mutan500ApplicationJsonErrorEnum = {}));
export var Mutan500ApplicationJsonErrorDescriptionEnum;
(function (Mutan500ApplicationJsonErrorDescriptionEnum) {
    Mutan500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Mutan500ApplicationJsonErrorDescriptionEnum || (Mutan500ApplicationJsonErrorDescriptionEnum = {}));
var Mutan500ApplicationJson = /** @class */ (function (_super) {
    __extends(Mutan500ApplicationJson, _super);
    function Mutan500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mutan500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mutan500ApplicationJson.prototype, "errorDescription", void 0);
    return Mutan500ApplicationJson;
}(SpeakeasyBase));
export { Mutan500ApplicationJson };
export var Mutan502ApplicationJsonErrorEnum;
(function (Mutan502ApplicationJsonErrorEnum) {
    Mutan502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Mutan502ApplicationJsonErrorEnum || (Mutan502ApplicationJsonErrorEnum = {}));
export var Mutan502ApplicationJsonErrorDescriptionEnum;
(function (Mutan502ApplicationJsonErrorDescriptionEnum) {
    Mutan502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Mutan502ApplicationJsonErrorDescriptionEnum || (Mutan502ApplicationJsonErrorDescriptionEnum = {}));
var Mutan502ApplicationJson = /** @class */ (function (_super) {
    __extends(Mutan502ApplicationJson, _super);
    function Mutan502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mutan502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mutan502ApplicationJson.prototype, "errorDescription", void 0);
    return Mutan502ApplicationJson;
}(SpeakeasyBase));
export { Mutan502ApplicationJson };
export var Mutan503ApplicationJsonErrorEnum;
(function (Mutan503ApplicationJsonErrorEnum) {
    Mutan503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Mutan503ApplicationJsonErrorEnum || (Mutan503ApplicationJsonErrorEnum = {}));
export var Mutan503ApplicationJsonErrorDescriptionEnum;
(function (Mutan503ApplicationJsonErrorDescriptionEnum) {
    Mutan503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Mutan503ApplicationJsonErrorDescriptionEnum || (Mutan503ApplicationJsonErrorDescriptionEnum = {}));
var Mutan503ApplicationJson = /** @class */ (function (_super) {
    __extends(Mutan503ApplicationJson, _super);
    function Mutan503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mutan503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mutan503ApplicationJson.prototype, "errorDescription", void 0);
    return Mutan503ApplicationJson;
}(SpeakeasyBase));
export { Mutan503ApplicationJson };
export var Mutan504ApplicationJsonErrorEnum;
(function (Mutan504ApplicationJsonErrorEnum) {
    Mutan504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Mutan504ApplicationJsonErrorEnum || (Mutan504ApplicationJsonErrorEnum = {}));
export var Mutan504ApplicationJsonErrorDescriptionEnum;
(function (Mutan504ApplicationJsonErrorDescriptionEnum) {
    Mutan504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Mutan504ApplicationJsonErrorDescriptionEnum || (Mutan504ApplicationJsonErrorDescriptionEnum = {}));
var Mutan504ApplicationJson = /** @class */ (function (_super) {
    __extends(Mutan504ApplicationJson, _super);
    function Mutan504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mutan504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mutan504ApplicationJson.prototype, "errorDescription", void 0);
    return Mutan504ApplicationJson;
}(SpeakeasyBase));
export { Mutan504ApplicationJson };
var MutanResponse = /** @class */ (function (_super) {
    __extends(MutanResponse, _super);
    function MutanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], MutanResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MutanResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MutanResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mutan400ApplicationJson)
    ], MutanResponse.prototype, "mutan400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mutan401ApplicationJson)
    ], MutanResponse.prototype, "mutan401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mutan404ApplicationJson)
    ], MutanResponse.prototype, "mutan404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mutan500ApplicationJson)
    ], MutanResponse.prototype, "mutan500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mutan502ApplicationJson)
    ], MutanResponse.prototype, "mutan502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mutan503ApplicationJson)
    ], MutanResponse.prototype, "mutan503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mutan504ApplicationJson)
    ], MutanResponse.prototype, "mutan504ApplicationJsonObject", void 0);
    return MutanResponse;
}(SpeakeasyBase));
export { MutanResponse };
