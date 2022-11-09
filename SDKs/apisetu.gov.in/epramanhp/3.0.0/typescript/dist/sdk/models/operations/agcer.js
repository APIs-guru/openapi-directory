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
var AgcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(AgcerRequestBodyCertificateParameters, _super);
    function AgcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], AgcerRequestBodyCertificateParameters.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], AgcerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    return AgcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { AgcerRequestBodyCertificateParameters };
export var AgcerRequestBodyFormatEnum;
(function (AgcerRequestBodyFormatEnum) {
    AgcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(AgcerRequestBodyFormatEnum || (AgcerRequestBodyFormatEnum = {}));
var AgcerRequestBody = /** @class */ (function (_super) {
    __extends(AgcerRequestBody, _super);
    function AgcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", AgcerRequestBodyCertificateParameters)
    ], AgcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], AgcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AgcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], AgcerRequestBody.prototype, "txnId", void 0);
    return AgcerRequestBody;
}(SpeakeasyBase));
export { AgcerRequestBody };
var AgcerSecurity = /** @class */ (function (_super) {
    __extends(AgcerSecurity, _super);
    function AgcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], AgcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], AgcerSecurity.prototype, "clientId", void 0);
    return AgcerSecurity;
}(SpeakeasyBase));
export { AgcerSecurity };
var AgcerRequest = /** @class */ (function (_super) {
    __extends(AgcerRequest, _super);
    function AgcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AgcerRequestBody)
    ], AgcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AgcerSecurity)
    ], AgcerRequest.prototype, "security", void 0);
    return AgcerRequest;
}(SpeakeasyBase));
export { AgcerRequest };
export var Agcer400ApplicationJsonErrorEnum;
(function (Agcer400ApplicationJsonErrorEnum) {
    Agcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Agcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Agcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Agcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Agcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Agcer400ApplicationJsonErrorEnum || (Agcer400ApplicationJsonErrorEnum = {}));
export var Agcer400ApplicationJsonErrorDescriptionEnum;
(function (Agcer400ApplicationJsonErrorDescriptionEnum) {
    Agcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Agcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Agcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Agcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Agcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Agcer400ApplicationJsonErrorDescriptionEnum || (Agcer400ApplicationJsonErrorDescriptionEnum = {}));
var Agcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Agcer400ApplicationJson, _super);
    function Agcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Agcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Agcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Agcer400ApplicationJson;
}(SpeakeasyBase));
export { Agcer400ApplicationJson };
export var Agcer401ApplicationJsonErrorEnum;
(function (Agcer401ApplicationJsonErrorEnum) {
    Agcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Agcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Agcer401ApplicationJsonErrorEnum || (Agcer401ApplicationJsonErrorEnum = {}));
export var Agcer401ApplicationJsonErrorDescriptionEnum;
(function (Agcer401ApplicationJsonErrorDescriptionEnum) {
    Agcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Agcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Agcer401ApplicationJsonErrorDescriptionEnum || (Agcer401ApplicationJsonErrorDescriptionEnum = {}));
var Agcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Agcer401ApplicationJson, _super);
    function Agcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Agcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Agcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Agcer401ApplicationJson;
}(SpeakeasyBase));
export { Agcer401ApplicationJson };
export var Agcer404ApplicationJsonErrorEnum;
(function (Agcer404ApplicationJsonErrorEnum) {
    Agcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Agcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Agcer404ApplicationJsonErrorEnum || (Agcer404ApplicationJsonErrorEnum = {}));
export var Agcer404ApplicationJsonErrorDescriptionEnum;
(function (Agcer404ApplicationJsonErrorDescriptionEnum) {
    Agcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Agcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Agcer404ApplicationJsonErrorDescriptionEnum || (Agcer404ApplicationJsonErrorDescriptionEnum = {}));
var Agcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Agcer404ApplicationJson, _super);
    function Agcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Agcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Agcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Agcer404ApplicationJson;
}(SpeakeasyBase));
export { Agcer404ApplicationJson };
export var Agcer500ApplicationJsonErrorEnum;
(function (Agcer500ApplicationJsonErrorEnum) {
    Agcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Agcer500ApplicationJsonErrorEnum || (Agcer500ApplicationJsonErrorEnum = {}));
export var Agcer500ApplicationJsonErrorDescriptionEnum;
(function (Agcer500ApplicationJsonErrorDescriptionEnum) {
    Agcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Agcer500ApplicationJsonErrorDescriptionEnum || (Agcer500ApplicationJsonErrorDescriptionEnum = {}));
var Agcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Agcer500ApplicationJson, _super);
    function Agcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Agcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Agcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Agcer500ApplicationJson;
}(SpeakeasyBase));
export { Agcer500ApplicationJson };
export var Agcer502ApplicationJsonErrorEnum;
(function (Agcer502ApplicationJsonErrorEnum) {
    Agcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Agcer502ApplicationJsonErrorEnum || (Agcer502ApplicationJsonErrorEnum = {}));
export var Agcer502ApplicationJsonErrorDescriptionEnum;
(function (Agcer502ApplicationJsonErrorDescriptionEnum) {
    Agcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Agcer502ApplicationJsonErrorDescriptionEnum || (Agcer502ApplicationJsonErrorDescriptionEnum = {}));
var Agcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Agcer502ApplicationJson, _super);
    function Agcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Agcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Agcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Agcer502ApplicationJson;
}(SpeakeasyBase));
export { Agcer502ApplicationJson };
export var Agcer503ApplicationJsonErrorEnum;
(function (Agcer503ApplicationJsonErrorEnum) {
    Agcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Agcer503ApplicationJsonErrorEnum || (Agcer503ApplicationJsonErrorEnum = {}));
export var Agcer503ApplicationJsonErrorDescriptionEnum;
(function (Agcer503ApplicationJsonErrorDescriptionEnum) {
    Agcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Agcer503ApplicationJsonErrorDescriptionEnum || (Agcer503ApplicationJsonErrorDescriptionEnum = {}));
var Agcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Agcer503ApplicationJson, _super);
    function Agcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Agcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Agcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Agcer503ApplicationJson;
}(SpeakeasyBase));
export { Agcer503ApplicationJson };
export var Agcer504ApplicationJsonErrorEnum;
(function (Agcer504ApplicationJsonErrorEnum) {
    Agcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Agcer504ApplicationJsonErrorEnum || (Agcer504ApplicationJsonErrorEnum = {}));
export var Agcer504ApplicationJsonErrorDescriptionEnum;
(function (Agcer504ApplicationJsonErrorDescriptionEnum) {
    Agcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Agcer504ApplicationJsonErrorDescriptionEnum || (Agcer504ApplicationJsonErrorDescriptionEnum = {}));
var Agcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Agcer504ApplicationJson, _super);
    function Agcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Agcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Agcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Agcer504ApplicationJson;
}(SpeakeasyBase));
export { Agcer504ApplicationJson };
var AgcerResponse = /** @class */ (function (_super) {
    __extends(AgcerResponse, _super);
    function AgcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AgcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AgcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Agcer400ApplicationJson)
    ], AgcerResponse.prototype, "agcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Agcer401ApplicationJson)
    ], AgcerResponse.prototype, "agcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Agcer404ApplicationJson)
    ], AgcerResponse.prototype, "agcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Agcer500ApplicationJson)
    ], AgcerResponse.prototype, "agcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Agcer502ApplicationJson)
    ], AgcerResponse.prototype, "agcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Agcer503ApplicationJson)
    ], AgcerResponse.prototype, "agcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Agcer504ApplicationJson)
    ], AgcerResponse.prototype, "agcer504ApplicationJsonObject", void 0);
    return AgcerResponse;
}(SpeakeasyBase));
export { AgcerResponse };
