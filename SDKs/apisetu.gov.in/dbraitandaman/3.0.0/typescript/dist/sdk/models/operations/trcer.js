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
var TrcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(TrcerRequestBodyCertificateParameters, _super);
    function TrcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CERT_NO" }),
        __metadata("design:type", String)
    ], TrcerRequestBodyCertificateParameters.prototype, "certNo", void 0);
    __decorate([
        Metadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], TrcerRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], TrcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=Session" }),
        __metadata("design:type", String)
    ], TrcerRequestBodyCertificateParameters.prototype, "session", void 0);
    return TrcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { TrcerRequestBodyCertificateParameters };
export var TrcerRequestBodyFormatEnum;
(function (TrcerRequestBodyFormatEnum) {
    TrcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(TrcerRequestBodyFormatEnum || (TrcerRequestBodyFormatEnum = {}));
var TrcerRequestBody = /** @class */ (function (_super) {
    __extends(TrcerRequestBody, _super);
    function TrcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", TrcerRequestBodyCertificateParameters)
    ], TrcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], TrcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], TrcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], TrcerRequestBody.prototype, "txnId", void 0);
    return TrcerRequestBody;
}(SpeakeasyBase));
export { TrcerRequestBody };
var TrcerSecurity = /** @class */ (function (_super) {
    __extends(TrcerSecurity, _super);
    function TrcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], TrcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], TrcerSecurity.prototype, "clientId", void 0);
    return TrcerSecurity;
}(SpeakeasyBase));
export { TrcerSecurity };
var TrcerRequest = /** @class */ (function (_super) {
    __extends(TrcerRequest, _super);
    function TrcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TrcerRequestBody)
    ], TrcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TrcerSecurity)
    ], TrcerRequest.prototype, "security", void 0);
    return TrcerRequest;
}(SpeakeasyBase));
export { TrcerRequest };
export var Trcer400ApplicationJsonErrorEnum;
(function (Trcer400ApplicationJsonErrorEnum) {
    Trcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Trcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Trcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Trcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Trcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Trcer400ApplicationJsonErrorEnum || (Trcer400ApplicationJsonErrorEnum = {}));
export var Trcer400ApplicationJsonErrorDescriptionEnum;
(function (Trcer400ApplicationJsonErrorDescriptionEnum) {
    Trcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Trcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Trcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Trcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Trcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Trcer400ApplicationJsonErrorDescriptionEnum || (Trcer400ApplicationJsonErrorDescriptionEnum = {}));
var Trcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Trcer400ApplicationJson, _super);
    function Trcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Trcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Trcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Trcer400ApplicationJson;
}(SpeakeasyBase));
export { Trcer400ApplicationJson };
export var Trcer401ApplicationJsonErrorEnum;
(function (Trcer401ApplicationJsonErrorEnum) {
    Trcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Trcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Trcer401ApplicationJsonErrorEnum || (Trcer401ApplicationJsonErrorEnum = {}));
export var Trcer401ApplicationJsonErrorDescriptionEnum;
(function (Trcer401ApplicationJsonErrorDescriptionEnum) {
    Trcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Trcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Trcer401ApplicationJsonErrorDescriptionEnum || (Trcer401ApplicationJsonErrorDescriptionEnum = {}));
var Trcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Trcer401ApplicationJson, _super);
    function Trcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Trcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Trcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Trcer401ApplicationJson;
}(SpeakeasyBase));
export { Trcer401ApplicationJson };
export var Trcer404ApplicationJsonErrorEnum;
(function (Trcer404ApplicationJsonErrorEnum) {
    Trcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Trcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Trcer404ApplicationJsonErrorEnum || (Trcer404ApplicationJsonErrorEnum = {}));
export var Trcer404ApplicationJsonErrorDescriptionEnum;
(function (Trcer404ApplicationJsonErrorDescriptionEnum) {
    Trcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Trcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Trcer404ApplicationJsonErrorDescriptionEnum || (Trcer404ApplicationJsonErrorDescriptionEnum = {}));
var Trcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Trcer404ApplicationJson, _super);
    function Trcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Trcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Trcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Trcer404ApplicationJson;
}(SpeakeasyBase));
export { Trcer404ApplicationJson };
export var Trcer500ApplicationJsonErrorEnum;
(function (Trcer500ApplicationJsonErrorEnum) {
    Trcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Trcer500ApplicationJsonErrorEnum || (Trcer500ApplicationJsonErrorEnum = {}));
export var Trcer500ApplicationJsonErrorDescriptionEnum;
(function (Trcer500ApplicationJsonErrorDescriptionEnum) {
    Trcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Trcer500ApplicationJsonErrorDescriptionEnum || (Trcer500ApplicationJsonErrorDescriptionEnum = {}));
var Trcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Trcer500ApplicationJson, _super);
    function Trcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Trcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Trcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Trcer500ApplicationJson;
}(SpeakeasyBase));
export { Trcer500ApplicationJson };
export var Trcer502ApplicationJsonErrorEnum;
(function (Trcer502ApplicationJsonErrorEnum) {
    Trcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Trcer502ApplicationJsonErrorEnum || (Trcer502ApplicationJsonErrorEnum = {}));
export var Trcer502ApplicationJsonErrorDescriptionEnum;
(function (Trcer502ApplicationJsonErrorDescriptionEnum) {
    Trcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Trcer502ApplicationJsonErrorDescriptionEnum || (Trcer502ApplicationJsonErrorDescriptionEnum = {}));
var Trcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Trcer502ApplicationJson, _super);
    function Trcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Trcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Trcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Trcer502ApplicationJson;
}(SpeakeasyBase));
export { Trcer502ApplicationJson };
export var Trcer503ApplicationJsonErrorEnum;
(function (Trcer503ApplicationJsonErrorEnum) {
    Trcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Trcer503ApplicationJsonErrorEnum || (Trcer503ApplicationJsonErrorEnum = {}));
export var Trcer503ApplicationJsonErrorDescriptionEnum;
(function (Trcer503ApplicationJsonErrorDescriptionEnum) {
    Trcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Trcer503ApplicationJsonErrorDescriptionEnum || (Trcer503ApplicationJsonErrorDescriptionEnum = {}));
var Trcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Trcer503ApplicationJson, _super);
    function Trcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Trcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Trcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Trcer503ApplicationJson;
}(SpeakeasyBase));
export { Trcer503ApplicationJson };
export var Trcer504ApplicationJsonErrorEnum;
(function (Trcer504ApplicationJsonErrorEnum) {
    Trcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Trcer504ApplicationJsonErrorEnum || (Trcer504ApplicationJsonErrorEnum = {}));
export var Trcer504ApplicationJsonErrorDescriptionEnum;
(function (Trcer504ApplicationJsonErrorDescriptionEnum) {
    Trcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Trcer504ApplicationJsonErrorDescriptionEnum || (Trcer504ApplicationJsonErrorDescriptionEnum = {}));
var Trcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Trcer504ApplicationJson, _super);
    function Trcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Trcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Trcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Trcer504ApplicationJson;
}(SpeakeasyBase));
export { Trcer504ApplicationJson };
var TrcerResponse = /** @class */ (function (_super) {
    __extends(TrcerResponse, _super);
    function TrcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TrcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TrcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Trcer400ApplicationJson)
    ], TrcerResponse.prototype, "trcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Trcer401ApplicationJson)
    ], TrcerResponse.prototype, "trcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Trcer404ApplicationJson)
    ], TrcerResponse.prototype, "trcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Trcer500ApplicationJson)
    ], TrcerResponse.prototype, "trcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Trcer502ApplicationJson)
    ], TrcerResponse.prototype, "trcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Trcer503ApplicationJson)
    ], TrcerResponse.prototype, "trcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Trcer504ApplicationJson)
    ], TrcerResponse.prototype, "trcer504ApplicationJsonObject", void 0);
    return TrcerResponse;
}(SpeakeasyBase));
export { TrcerResponse };
