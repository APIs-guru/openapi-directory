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
var EtcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(EtcerRequestBodyCertificateParameters, _super);
    function EtcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=_unique_code" }),
        __metadata("design:type", String)
    ], EtcerRequestBodyCertificateParameters.prototype, "uniqueCode", void 0);
    return EtcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { EtcerRequestBodyCertificateParameters };
export var EtcerRequestBodyFormatEnum;
(function (EtcerRequestBodyFormatEnum) {
    EtcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(EtcerRequestBodyFormatEnum || (EtcerRequestBodyFormatEnum = {}));
var EtcerRequestBody = /** @class */ (function (_super) {
    __extends(EtcerRequestBody, _super);
    function EtcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", EtcerRequestBodyCertificateParameters)
    ], EtcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], EtcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], EtcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], EtcerRequestBody.prototype, "txnId", void 0);
    return EtcerRequestBody;
}(SpeakeasyBase));
export { EtcerRequestBody };
var EtcerSecurity = /** @class */ (function (_super) {
    __extends(EtcerSecurity, _super);
    function EtcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], EtcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], EtcerSecurity.prototype, "clientId", void 0);
    return EtcerSecurity;
}(SpeakeasyBase));
export { EtcerSecurity };
var EtcerRequest = /** @class */ (function (_super) {
    __extends(EtcerRequest, _super);
    function EtcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EtcerRequestBody)
    ], EtcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", EtcerSecurity)
    ], EtcerRequest.prototype, "security", void 0);
    return EtcerRequest;
}(SpeakeasyBase));
export { EtcerRequest };
export var Etcer400ApplicationJsonErrorEnum;
(function (Etcer400ApplicationJsonErrorEnum) {
    Etcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Etcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Etcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Etcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Etcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Etcer400ApplicationJsonErrorEnum || (Etcer400ApplicationJsonErrorEnum = {}));
export var Etcer400ApplicationJsonErrorDescriptionEnum;
(function (Etcer400ApplicationJsonErrorDescriptionEnum) {
    Etcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Etcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Etcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Etcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Etcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Etcer400ApplicationJsonErrorDescriptionEnum || (Etcer400ApplicationJsonErrorDescriptionEnum = {}));
var Etcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Etcer400ApplicationJson, _super);
    function Etcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Etcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Etcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Etcer400ApplicationJson;
}(SpeakeasyBase));
export { Etcer400ApplicationJson };
export var Etcer401ApplicationJsonErrorEnum;
(function (Etcer401ApplicationJsonErrorEnum) {
    Etcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Etcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Etcer401ApplicationJsonErrorEnum || (Etcer401ApplicationJsonErrorEnum = {}));
export var Etcer401ApplicationJsonErrorDescriptionEnum;
(function (Etcer401ApplicationJsonErrorDescriptionEnum) {
    Etcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Etcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Etcer401ApplicationJsonErrorDescriptionEnum || (Etcer401ApplicationJsonErrorDescriptionEnum = {}));
var Etcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Etcer401ApplicationJson, _super);
    function Etcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Etcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Etcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Etcer401ApplicationJson;
}(SpeakeasyBase));
export { Etcer401ApplicationJson };
export var Etcer404ApplicationJsonErrorEnum;
(function (Etcer404ApplicationJsonErrorEnum) {
    Etcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Etcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Etcer404ApplicationJsonErrorEnum || (Etcer404ApplicationJsonErrorEnum = {}));
export var Etcer404ApplicationJsonErrorDescriptionEnum;
(function (Etcer404ApplicationJsonErrorDescriptionEnum) {
    Etcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Etcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Etcer404ApplicationJsonErrorDescriptionEnum || (Etcer404ApplicationJsonErrorDescriptionEnum = {}));
var Etcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Etcer404ApplicationJson, _super);
    function Etcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Etcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Etcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Etcer404ApplicationJson;
}(SpeakeasyBase));
export { Etcer404ApplicationJson };
export var Etcer500ApplicationJsonErrorEnum;
(function (Etcer500ApplicationJsonErrorEnum) {
    Etcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Etcer500ApplicationJsonErrorEnum || (Etcer500ApplicationJsonErrorEnum = {}));
export var Etcer500ApplicationJsonErrorDescriptionEnum;
(function (Etcer500ApplicationJsonErrorDescriptionEnum) {
    Etcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Etcer500ApplicationJsonErrorDescriptionEnum || (Etcer500ApplicationJsonErrorDescriptionEnum = {}));
var Etcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Etcer500ApplicationJson, _super);
    function Etcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Etcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Etcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Etcer500ApplicationJson;
}(SpeakeasyBase));
export { Etcer500ApplicationJson };
export var Etcer502ApplicationJsonErrorEnum;
(function (Etcer502ApplicationJsonErrorEnum) {
    Etcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Etcer502ApplicationJsonErrorEnum || (Etcer502ApplicationJsonErrorEnum = {}));
export var Etcer502ApplicationJsonErrorDescriptionEnum;
(function (Etcer502ApplicationJsonErrorDescriptionEnum) {
    Etcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Etcer502ApplicationJsonErrorDescriptionEnum || (Etcer502ApplicationJsonErrorDescriptionEnum = {}));
var Etcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Etcer502ApplicationJson, _super);
    function Etcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Etcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Etcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Etcer502ApplicationJson;
}(SpeakeasyBase));
export { Etcer502ApplicationJson };
export var Etcer503ApplicationJsonErrorEnum;
(function (Etcer503ApplicationJsonErrorEnum) {
    Etcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Etcer503ApplicationJsonErrorEnum || (Etcer503ApplicationJsonErrorEnum = {}));
export var Etcer503ApplicationJsonErrorDescriptionEnum;
(function (Etcer503ApplicationJsonErrorDescriptionEnum) {
    Etcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Etcer503ApplicationJsonErrorDescriptionEnum || (Etcer503ApplicationJsonErrorDescriptionEnum = {}));
var Etcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Etcer503ApplicationJson, _super);
    function Etcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Etcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Etcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Etcer503ApplicationJson;
}(SpeakeasyBase));
export { Etcer503ApplicationJson };
export var Etcer504ApplicationJsonErrorEnum;
(function (Etcer504ApplicationJsonErrorEnum) {
    Etcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Etcer504ApplicationJsonErrorEnum || (Etcer504ApplicationJsonErrorEnum = {}));
export var Etcer504ApplicationJsonErrorDescriptionEnum;
(function (Etcer504ApplicationJsonErrorDescriptionEnum) {
    Etcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Etcer504ApplicationJsonErrorDescriptionEnum || (Etcer504ApplicationJsonErrorDescriptionEnum = {}));
var Etcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Etcer504ApplicationJson, _super);
    function Etcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Etcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Etcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Etcer504ApplicationJson;
}(SpeakeasyBase));
export { Etcer504ApplicationJson };
var EtcerResponse = /** @class */ (function (_super) {
    __extends(EtcerResponse, _super);
    function EtcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], EtcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], EtcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Etcer400ApplicationJson)
    ], EtcerResponse.prototype, "etcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Etcer401ApplicationJson)
    ], EtcerResponse.prototype, "etcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Etcer404ApplicationJson)
    ], EtcerResponse.prototype, "etcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Etcer500ApplicationJson)
    ], EtcerResponse.prototype, "etcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Etcer502ApplicationJson)
    ], EtcerResponse.prototype, "etcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Etcer503ApplicationJson)
    ], EtcerResponse.prototype, "etcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Etcer504ApplicationJson)
    ], EtcerResponse.prototype, "etcer504ApplicationJsonObject", void 0);
    return EtcerResponse;
}(SpeakeasyBase));
export { EtcerResponse };
