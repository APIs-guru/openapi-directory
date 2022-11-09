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
var LccepRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(LccepRequestBodyCertificateParameters, _super);
    function LccepRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CertificateNumber" }),
        __metadata("design:type", String)
    ], LccepRequestBodyCertificateParameters.prototype, "certificateNumber", void 0);
    return LccepRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { LccepRequestBodyCertificateParameters };
export var LccepRequestBodyFormatEnum;
(function (LccepRequestBodyFormatEnum) {
    LccepRequestBodyFormatEnum["Pdf"] = "pdf";
})(LccepRequestBodyFormatEnum || (LccepRequestBodyFormatEnum = {}));
var LccepRequestBody = /** @class */ (function (_super) {
    __extends(LccepRequestBody, _super);
    function LccepRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", LccepRequestBodyCertificateParameters)
    ], LccepRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], LccepRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], LccepRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], LccepRequestBody.prototype, "txnId", void 0);
    return LccepRequestBody;
}(SpeakeasyBase));
export { LccepRequestBody };
var LccepSecurity = /** @class */ (function (_super) {
    __extends(LccepSecurity, _super);
    function LccepSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LccepSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], LccepSecurity.prototype, "clientId", void 0);
    return LccepSecurity;
}(SpeakeasyBase));
export { LccepSecurity };
var LccepRequest = /** @class */ (function (_super) {
    __extends(LccepRequest, _super);
    function LccepRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", LccepRequestBody)
    ], LccepRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LccepSecurity)
    ], LccepRequest.prototype, "security", void 0);
    return LccepRequest;
}(SpeakeasyBase));
export { LccepRequest };
export var Lccep400ApplicationJsonErrorEnum;
(function (Lccep400ApplicationJsonErrorEnum) {
    Lccep400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Lccep400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Lccep400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Lccep400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Lccep400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Lccep400ApplicationJsonErrorEnum || (Lccep400ApplicationJsonErrorEnum = {}));
export var Lccep400ApplicationJsonErrorDescriptionEnum;
(function (Lccep400ApplicationJsonErrorDescriptionEnum) {
    Lccep400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Lccep400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Lccep400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Lccep400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Lccep400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Lccep400ApplicationJsonErrorDescriptionEnum || (Lccep400ApplicationJsonErrorDescriptionEnum = {}));
var Lccep400ApplicationJson = /** @class */ (function (_super) {
    __extends(Lccep400ApplicationJson, _super);
    function Lccep400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lccep400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lccep400ApplicationJson.prototype, "errorDescription", void 0);
    return Lccep400ApplicationJson;
}(SpeakeasyBase));
export { Lccep400ApplicationJson };
export var Lccep401ApplicationJsonErrorEnum;
(function (Lccep401ApplicationJsonErrorEnum) {
    Lccep401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Lccep401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Lccep401ApplicationJsonErrorEnum || (Lccep401ApplicationJsonErrorEnum = {}));
export var Lccep401ApplicationJsonErrorDescriptionEnum;
(function (Lccep401ApplicationJsonErrorDescriptionEnum) {
    Lccep401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Lccep401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Lccep401ApplicationJsonErrorDescriptionEnum || (Lccep401ApplicationJsonErrorDescriptionEnum = {}));
var Lccep401ApplicationJson = /** @class */ (function (_super) {
    __extends(Lccep401ApplicationJson, _super);
    function Lccep401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lccep401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lccep401ApplicationJson.prototype, "errorDescription", void 0);
    return Lccep401ApplicationJson;
}(SpeakeasyBase));
export { Lccep401ApplicationJson };
export var Lccep404ApplicationJsonErrorEnum;
(function (Lccep404ApplicationJsonErrorEnum) {
    Lccep404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Lccep404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Lccep404ApplicationJsonErrorEnum || (Lccep404ApplicationJsonErrorEnum = {}));
export var Lccep404ApplicationJsonErrorDescriptionEnum;
(function (Lccep404ApplicationJsonErrorDescriptionEnum) {
    Lccep404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Lccep404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Lccep404ApplicationJsonErrorDescriptionEnum || (Lccep404ApplicationJsonErrorDescriptionEnum = {}));
var Lccep404ApplicationJson = /** @class */ (function (_super) {
    __extends(Lccep404ApplicationJson, _super);
    function Lccep404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lccep404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lccep404ApplicationJson.prototype, "errorDescription", void 0);
    return Lccep404ApplicationJson;
}(SpeakeasyBase));
export { Lccep404ApplicationJson };
export var Lccep500ApplicationJsonErrorEnum;
(function (Lccep500ApplicationJsonErrorEnum) {
    Lccep500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Lccep500ApplicationJsonErrorEnum || (Lccep500ApplicationJsonErrorEnum = {}));
export var Lccep500ApplicationJsonErrorDescriptionEnum;
(function (Lccep500ApplicationJsonErrorDescriptionEnum) {
    Lccep500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Lccep500ApplicationJsonErrorDescriptionEnum || (Lccep500ApplicationJsonErrorDescriptionEnum = {}));
var Lccep500ApplicationJson = /** @class */ (function (_super) {
    __extends(Lccep500ApplicationJson, _super);
    function Lccep500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lccep500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lccep500ApplicationJson.prototype, "errorDescription", void 0);
    return Lccep500ApplicationJson;
}(SpeakeasyBase));
export { Lccep500ApplicationJson };
export var Lccep502ApplicationJsonErrorEnum;
(function (Lccep502ApplicationJsonErrorEnum) {
    Lccep502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Lccep502ApplicationJsonErrorEnum || (Lccep502ApplicationJsonErrorEnum = {}));
export var Lccep502ApplicationJsonErrorDescriptionEnum;
(function (Lccep502ApplicationJsonErrorDescriptionEnum) {
    Lccep502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Lccep502ApplicationJsonErrorDescriptionEnum || (Lccep502ApplicationJsonErrorDescriptionEnum = {}));
var Lccep502ApplicationJson = /** @class */ (function (_super) {
    __extends(Lccep502ApplicationJson, _super);
    function Lccep502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lccep502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lccep502ApplicationJson.prototype, "errorDescription", void 0);
    return Lccep502ApplicationJson;
}(SpeakeasyBase));
export { Lccep502ApplicationJson };
export var Lccep503ApplicationJsonErrorEnum;
(function (Lccep503ApplicationJsonErrorEnum) {
    Lccep503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Lccep503ApplicationJsonErrorEnum || (Lccep503ApplicationJsonErrorEnum = {}));
export var Lccep503ApplicationJsonErrorDescriptionEnum;
(function (Lccep503ApplicationJsonErrorDescriptionEnum) {
    Lccep503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Lccep503ApplicationJsonErrorDescriptionEnum || (Lccep503ApplicationJsonErrorDescriptionEnum = {}));
var Lccep503ApplicationJson = /** @class */ (function (_super) {
    __extends(Lccep503ApplicationJson, _super);
    function Lccep503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lccep503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lccep503ApplicationJson.prototype, "errorDescription", void 0);
    return Lccep503ApplicationJson;
}(SpeakeasyBase));
export { Lccep503ApplicationJson };
export var Lccep504ApplicationJsonErrorEnum;
(function (Lccep504ApplicationJsonErrorEnum) {
    Lccep504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Lccep504ApplicationJsonErrorEnum || (Lccep504ApplicationJsonErrorEnum = {}));
export var Lccep504ApplicationJsonErrorDescriptionEnum;
(function (Lccep504ApplicationJsonErrorDescriptionEnum) {
    Lccep504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Lccep504ApplicationJsonErrorDescriptionEnum || (Lccep504ApplicationJsonErrorDescriptionEnum = {}));
var Lccep504ApplicationJson = /** @class */ (function (_super) {
    __extends(Lccep504ApplicationJson, _super);
    function Lccep504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lccep504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lccep504ApplicationJson.prototype, "errorDescription", void 0);
    return Lccep504ApplicationJson;
}(SpeakeasyBase));
export { Lccep504ApplicationJson };
var LccepResponse = /** @class */ (function (_super) {
    __extends(LccepResponse, _super);
    function LccepResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LccepResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LccepResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lccep400ApplicationJson)
    ], LccepResponse.prototype, "lccep400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lccep401ApplicationJson)
    ], LccepResponse.prototype, "lccep401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lccep404ApplicationJson)
    ], LccepResponse.prototype, "lccep404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lccep500ApplicationJson)
    ], LccepResponse.prototype, "lccep500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lccep502ApplicationJson)
    ], LccepResponse.prototype, "lccep502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lccep503ApplicationJson)
    ], LccepResponse.prototype, "lccep503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lccep504ApplicationJson)
    ], LccepResponse.prototype, "lccep504ApplicationJsonObject", void 0);
    return LccepResponse;
}(SpeakeasyBase));
export { LccepResponse };
