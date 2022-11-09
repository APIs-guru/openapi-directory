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
var PsprtRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PsprtRequestBodyCertificateParameters, _super);
    function PsprtRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], PsprtRequestBodyCertificateParameters.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], PsprtRequestBodyCertificateParameters.prototype, "refNo", void 0);
    return PsprtRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { PsprtRequestBodyCertificateParameters };
export var PsprtRequestBodyFormatEnum;
(function (PsprtRequestBodyFormatEnum) {
    PsprtRequestBodyFormatEnum["Pdf"] = "pdf";
})(PsprtRequestBodyFormatEnum || (PsprtRequestBodyFormatEnum = {}));
var PsprtRequestBody = /** @class */ (function (_super) {
    __extends(PsprtRequestBody, _super);
    function PsprtRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", PsprtRequestBodyCertificateParameters)
    ], PsprtRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], PsprtRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PsprtRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], PsprtRequestBody.prototype, "txnId", void 0);
    return PsprtRequestBody;
}(SpeakeasyBase));
export { PsprtRequestBody };
var PsprtSecurity = /** @class */ (function (_super) {
    __extends(PsprtSecurity, _super);
    function PsprtSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PsprtSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PsprtSecurity.prototype, "clientId", void 0);
    return PsprtSecurity;
}(SpeakeasyBase));
export { PsprtSecurity };
var PsprtRequest = /** @class */ (function (_super) {
    __extends(PsprtRequest, _super);
    function PsprtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PsprtRequestBody)
    ], PsprtRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PsprtSecurity)
    ], PsprtRequest.prototype, "security", void 0);
    return PsprtRequest;
}(SpeakeasyBase));
export { PsprtRequest };
export var Psprt400ApplicationJsonErrorEnum;
(function (Psprt400ApplicationJsonErrorEnum) {
    Psprt400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Psprt400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Psprt400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Psprt400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Psprt400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Psprt400ApplicationJsonErrorEnum || (Psprt400ApplicationJsonErrorEnum = {}));
export var Psprt400ApplicationJsonErrorDescriptionEnum;
(function (Psprt400ApplicationJsonErrorDescriptionEnum) {
    Psprt400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Psprt400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Psprt400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Psprt400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Psprt400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Psprt400ApplicationJsonErrorDescriptionEnum || (Psprt400ApplicationJsonErrorDescriptionEnum = {}));
var Psprt400ApplicationJson = /** @class */ (function (_super) {
    __extends(Psprt400ApplicationJson, _super);
    function Psprt400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Psprt400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Psprt400ApplicationJson.prototype, "errorDescription", void 0);
    return Psprt400ApplicationJson;
}(SpeakeasyBase));
export { Psprt400ApplicationJson };
export var Psprt401ApplicationJsonErrorEnum;
(function (Psprt401ApplicationJsonErrorEnum) {
    Psprt401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Psprt401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Psprt401ApplicationJsonErrorEnum || (Psprt401ApplicationJsonErrorEnum = {}));
export var Psprt401ApplicationJsonErrorDescriptionEnum;
(function (Psprt401ApplicationJsonErrorDescriptionEnum) {
    Psprt401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Psprt401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Psprt401ApplicationJsonErrorDescriptionEnum || (Psprt401ApplicationJsonErrorDescriptionEnum = {}));
var Psprt401ApplicationJson = /** @class */ (function (_super) {
    __extends(Psprt401ApplicationJson, _super);
    function Psprt401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Psprt401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Psprt401ApplicationJson.prototype, "errorDescription", void 0);
    return Psprt401ApplicationJson;
}(SpeakeasyBase));
export { Psprt401ApplicationJson };
export var Psprt404ApplicationJsonErrorEnum;
(function (Psprt404ApplicationJsonErrorEnum) {
    Psprt404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Psprt404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Psprt404ApplicationJsonErrorEnum || (Psprt404ApplicationJsonErrorEnum = {}));
export var Psprt404ApplicationJsonErrorDescriptionEnum;
(function (Psprt404ApplicationJsonErrorDescriptionEnum) {
    Psprt404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Psprt404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Psprt404ApplicationJsonErrorDescriptionEnum || (Psprt404ApplicationJsonErrorDescriptionEnum = {}));
var Psprt404ApplicationJson = /** @class */ (function (_super) {
    __extends(Psprt404ApplicationJson, _super);
    function Psprt404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Psprt404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Psprt404ApplicationJson.prototype, "errorDescription", void 0);
    return Psprt404ApplicationJson;
}(SpeakeasyBase));
export { Psprt404ApplicationJson };
export var Psprt500ApplicationJsonErrorEnum;
(function (Psprt500ApplicationJsonErrorEnum) {
    Psprt500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Psprt500ApplicationJsonErrorEnum || (Psprt500ApplicationJsonErrorEnum = {}));
export var Psprt500ApplicationJsonErrorDescriptionEnum;
(function (Psprt500ApplicationJsonErrorDescriptionEnum) {
    Psprt500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Psprt500ApplicationJsonErrorDescriptionEnum || (Psprt500ApplicationJsonErrorDescriptionEnum = {}));
var Psprt500ApplicationJson = /** @class */ (function (_super) {
    __extends(Psprt500ApplicationJson, _super);
    function Psprt500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Psprt500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Psprt500ApplicationJson.prototype, "errorDescription", void 0);
    return Psprt500ApplicationJson;
}(SpeakeasyBase));
export { Psprt500ApplicationJson };
export var Psprt502ApplicationJsonErrorEnum;
(function (Psprt502ApplicationJsonErrorEnum) {
    Psprt502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Psprt502ApplicationJsonErrorEnum || (Psprt502ApplicationJsonErrorEnum = {}));
export var Psprt502ApplicationJsonErrorDescriptionEnum;
(function (Psprt502ApplicationJsonErrorDescriptionEnum) {
    Psprt502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Psprt502ApplicationJsonErrorDescriptionEnum || (Psprt502ApplicationJsonErrorDescriptionEnum = {}));
var Psprt502ApplicationJson = /** @class */ (function (_super) {
    __extends(Psprt502ApplicationJson, _super);
    function Psprt502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Psprt502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Psprt502ApplicationJson.prototype, "errorDescription", void 0);
    return Psprt502ApplicationJson;
}(SpeakeasyBase));
export { Psprt502ApplicationJson };
export var Psprt503ApplicationJsonErrorEnum;
(function (Psprt503ApplicationJsonErrorEnum) {
    Psprt503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Psprt503ApplicationJsonErrorEnum || (Psprt503ApplicationJsonErrorEnum = {}));
export var Psprt503ApplicationJsonErrorDescriptionEnum;
(function (Psprt503ApplicationJsonErrorDescriptionEnum) {
    Psprt503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Psprt503ApplicationJsonErrorDescriptionEnum || (Psprt503ApplicationJsonErrorDescriptionEnum = {}));
var Psprt503ApplicationJson = /** @class */ (function (_super) {
    __extends(Psprt503ApplicationJson, _super);
    function Psprt503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Psprt503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Psprt503ApplicationJson.prototype, "errorDescription", void 0);
    return Psprt503ApplicationJson;
}(SpeakeasyBase));
export { Psprt503ApplicationJson };
export var Psprt504ApplicationJsonErrorEnum;
(function (Psprt504ApplicationJsonErrorEnum) {
    Psprt504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Psprt504ApplicationJsonErrorEnum || (Psprt504ApplicationJsonErrorEnum = {}));
export var Psprt504ApplicationJsonErrorDescriptionEnum;
(function (Psprt504ApplicationJsonErrorDescriptionEnum) {
    Psprt504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Psprt504ApplicationJsonErrorDescriptionEnum || (Psprt504ApplicationJsonErrorDescriptionEnum = {}));
var Psprt504ApplicationJson = /** @class */ (function (_super) {
    __extends(Psprt504ApplicationJson, _super);
    function Psprt504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Psprt504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Psprt504ApplicationJson.prototype, "errorDescription", void 0);
    return Psprt504ApplicationJson;
}(SpeakeasyBase));
export { Psprt504ApplicationJson };
var PsprtResponse = /** @class */ (function (_super) {
    __extends(PsprtResponse, _super);
    function PsprtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PsprtResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PsprtResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Psprt400ApplicationJson)
    ], PsprtResponse.prototype, "psprt400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Psprt401ApplicationJson)
    ], PsprtResponse.prototype, "psprt401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Psprt404ApplicationJson)
    ], PsprtResponse.prototype, "psprt404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Psprt500ApplicationJson)
    ], PsprtResponse.prototype, "psprt500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Psprt502ApplicationJson)
    ], PsprtResponse.prototype, "psprt502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Psprt503ApplicationJson)
    ], PsprtResponse.prototype, "psprt503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Psprt504ApplicationJson)
    ], PsprtResponse.prototype, "psprt504ApplicationJsonObject", void 0);
    return PsprtResponse;
}(SpeakeasyBase));
export { PsprtResponse };
