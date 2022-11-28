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
var RsbycRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RsbycRequestBodyCertificateParameters, _super);
    function RsbycRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], RsbycRequestBodyCertificateParameters.prototype, "uid", void 0);
    return RsbycRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { RsbycRequestBodyCertificateParameters };
export var RsbycRequestBodyFormatEnum;
(function (RsbycRequestBodyFormatEnum) {
    RsbycRequestBodyFormatEnum["Pdf"] = "pdf";
})(RsbycRequestBodyFormatEnum || (RsbycRequestBodyFormatEnum = {}));
var RsbycRequestBody = /** @class */ (function (_super) {
    __extends(RsbycRequestBody, _super);
    function RsbycRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RsbycRequestBodyCertificateParameters)
    ], RsbycRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RsbycRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RsbycRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RsbycRequestBody.prototype, "txnId", void 0);
    return RsbycRequestBody;
}(SpeakeasyBase));
export { RsbycRequestBody };
var RsbycSecurity = /** @class */ (function (_super) {
    __extends(RsbycSecurity, _super);
    function RsbycSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RsbycSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RsbycSecurity.prototype, "clientId", void 0);
    return RsbycSecurity;
}(SpeakeasyBase));
export { RsbycSecurity };
export var Rsbyc400ApplicationJsonErrorEnum;
(function (Rsbyc400ApplicationJsonErrorEnum) {
    Rsbyc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Rsbyc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Rsbyc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Rsbyc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Rsbyc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Rsbyc400ApplicationJsonErrorEnum || (Rsbyc400ApplicationJsonErrorEnum = {}));
export var Rsbyc400ApplicationJsonErrorDescriptionEnum;
(function (Rsbyc400ApplicationJsonErrorDescriptionEnum) {
    Rsbyc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Rsbyc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Rsbyc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Rsbyc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Rsbyc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Rsbyc400ApplicationJsonErrorDescriptionEnum || (Rsbyc400ApplicationJsonErrorDescriptionEnum = {}));
var Rsbyc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Rsbyc400ApplicationJson, _super);
    function Rsbyc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rsbyc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rsbyc400ApplicationJson.prototype, "errorDescription", void 0);
    return Rsbyc400ApplicationJson;
}(SpeakeasyBase));
export { Rsbyc400ApplicationJson };
export var Rsbyc401ApplicationJsonErrorEnum;
(function (Rsbyc401ApplicationJsonErrorEnum) {
    Rsbyc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Rsbyc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Rsbyc401ApplicationJsonErrorEnum || (Rsbyc401ApplicationJsonErrorEnum = {}));
export var Rsbyc401ApplicationJsonErrorDescriptionEnum;
(function (Rsbyc401ApplicationJsonErrorDescriptionEnum) {
    Rsbyc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Rsbyc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Rsbyc401ApplicationJsonErrorDescriptionEnum || (Rsbyc401ApplicationJsonErrorDescriptionEnum = {}));
var Rsbyc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Rsbyc401ApplicationJson, _super);
    function Rsbyc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rsbyc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rsbyc401ApplicationJson.prototype, "errorDescription", void 0);
    return Rsbyc401ApplicationJson;
}(SpeakeasyBase));
export { Rsbyc401ApplicationJson };
export var Rsbyc404ApplicationJsonErrorEnum;
(function (Rsbyc404ApplicationJsonErrorEnum) {
    Rsbyc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Rsbyc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Rsbyc404ApplicationJsonErrorEnum || (Rsbyc404ApplicationJsonErrorEnum = {}));
export var Rsbyc404ApplicationJsonErrorDescriptionEnum;
(function (Rsbyc404ApplicationJsonErrorDescriptionEnum) {
    Rsbyc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Rsbyc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Rsbyc404ApplicationJsonErrorDescriptionEnum || (Rsbyc404ApplicationJsonErrorDescriptionEnum = {}));
var Rsbyc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Rsbyc404ApplicationJson, _super);
    function Rsbyc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rsbyc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rsbyc404ApplicationJson.prototype, "errorDescription", void 0);
    return Rsbyc404ApplicationJson;
}(SpeakeasyBase));
export { Rsbyc404ApplicationJson };
export var Rsbyc500ApplicationJsonErrorEnum;
(function (Rsbyc500ApplicationJsonErrorEnum) {
    Rsbyc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Rsbyc500ApplicationJsonErrorEnum || (Rsbyc500ApplicationJsonErrorEnum = {}));
export var Rsbyc500ApplicationJsonErrorDescriptionEnum;
(function (Rsbyc500ApplicationJsonErrorDescriptionEnum) {
    Rsbyc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Rsbyc500ApplicationJsonErrorDescriptionEnum || (Rsbyc500ApplicationJsonErrorDescriptionEnum = {}));
var Rsbyc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Rsbyc500ApplicationJson, _super);
    function Rsbyc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rsbyc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rsbyc500ApplicationJson.prototype, "errorDescription", void 0);
    return Rsbyc500ApplicationJson;
}(SpeakeasyBase));
export { Rsbyc500ApplicationJson };
export var Rsbyc502ApplicationJsonErrorEnum;
(function (Rsbyc502ApplicationJsonErrorEnum) {
    Rsbyc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Rsbyc502ApplicationJsonErrorEnum || (Rsbyc502ApplicationJsonErrorEnum = {}));
export var Rsbyc502ApplicationJsonErrorDescriptionEnum;
(function (Rsbyc502ApplicationJsonErrorDescriptionEnum) {
    Rsbyc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Rsbyc502ApplicationJsonErrorDescriptionEnum || (Rsbyc502ApplicationJsonErrorDescriptionEnum = {}));
var Rsbyc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Rsbyc502ApplicationJson, _super);
    function Rsbyc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rsbyc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rsbyc502ApplicationJson.prototype, "errorDescription", void 0);
    return Rsbyc502ApplicationJson;
}(SpeakeasyBase));
export { Rsbyc502ApplicationJson };
export var Rsbyc503ApplicationJsonErrorEnum;
(function (Rsbyc503ApplicationJsonErrorEnum) {
    Rsbyc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Rsbyc503ApplicationJsonErrorEnum || (Rsbyc503ApplicationJsonErrorEnum = {}));
export var Rsbyc503ApplicationJsonErrorDescriptionEnum;
(function (Rsbyc503ApplicationJsonErrorDescriptionEnum) {
    Rsbyc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Rsbyc503ApplicationJsonErrorDescriptionEnum || (Rsbyc503ApplicationJsonErrorDescriptionEnum = {}));
var Rsbyc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Rsbyc503ApplicationJson, _super);
    function Rsbyc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rsbyc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rsbyc503ApplicationJson.prototype, "errorDescription", void 0);
    return Rsbyc503ApplicationJson;
}(SpeakeasyBase));
export { Rsbyc503ApplicationJson };
export var Rsbyc504ApplicationJsonErrorEnum;
(function (Rsbyc504ApplicationJsonErrorEnum) {
    Rsbyc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Rsbyc504ApplicationJsonErrorEnum || (Rsbyc504ApplicationJsonErrorEnum = {}));
export var Rsbyc504ApplicationJsonErrorDescriptionEnum;
(function (Rsbyc504ApplicationJsonErrorDescriptionEnum) {
    Rsbyc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Rsbyc504ApplicationJsonErrorDescriptionEnum || (Rsbyc504ApplicationJsonErrorDescriptionEnum = {}));
var Rsbyc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Rsbyc504ApplicationJson, _super);
    function Rsbyc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rsbyc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rsbyc504ApplicationJson.prototype, "errorDescription", void 0);
    return Rsbyc504ApplicationJson;
}(SpeakeasyBase));
export { Rsbyc504ApplicationJson };
var RsbycRequest = /** @class */ (function (_super) {
    __extends(RsbycRequest, _super);
    function RsbycRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RsbycRequestBody)
    ], RsbycRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RsbycSecurity)
    ], RsbycRequest.prototype, "security", void 0);
    return RsbycRequest;
}(SpeakeasyBase));
export { RsbycRequest };
var RsbycResponse = /** @class */ (function (_super) {
    __extends(RsbycResponse, _super);
    function RsbycResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RsbycResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RsbycResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rsbyc400ApplicationJson)
    ], RsbycResponse.prototype, "rsbyc400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rsbyc401ApplicationJson)
    ], RsbycResponse.prototype, "rsbyc401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rsbyc404ApplicationJson)
    ], RsbycResponse.prototype, "rsbyc404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rsbyc500ApplicationJson)
    ], RsbycResponse.prototype, "rsbyc500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rsbyc502ApplicationJson)
    ], RsbycResponse.prototype, "rsbyc502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rsbyc503ApplicationJson)
    ], RsbycResponse.prototype, "rsbyc503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rsbyc504ApplicationJson)
    ], RsbycResponse.prototype, "rsbyc504ApplicationJsonObject", void 0);
    return RsbycResponse;
}(SpeakeasyBase));
export { RsbycResponse };
