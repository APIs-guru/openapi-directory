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
var LhcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(LhcerRequestBodyCertificateParameters, _super);
    function LhcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], LhcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], LhcerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], LhcerRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], LhcerRequestBodyCertificateParameters.prototype, "uid", void 0);
    return LhcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { LhcerRequestBodyCertificateParameters };
export var LhcerRequestBodyFormatEnum;
(function (LhcerRequestBodyFormatEnum) {
    LhcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(LhcerRequestBodyFormatEnum || (LhcerRequestBodyFormatEnum = {}));
var LhcerRequestBody = /** @class */ (function (_super) {
    __extends(LhcerRequestBody, _super);
    function LhcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", LhcerRequestBodyCertificateParameters)
    ], LhcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], LhcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], LhcerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], LhcerRequestBody.prototype, "txnId", void 0);
    return LhcerRequestBody;
}(SpeakeasyBase));
export { LhcerRequestBody };
var LhcerSecurity = /** @class */ (function (_super) {
    __extends(LhcerSecurity, _super);
    function LhcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LhcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], LhcerSecurity.prototype, "clientId", void 0);
    return LhcerSecurity;
}(SpeakeasyBase));
export { LhcerSecurity };
export var Lhcer400ApplicationJsonErrorEnum;
(function (Lhcer400ApplicationJsonErrorEnum) {
    Lhcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Lhcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Lhcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Lhcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Lhcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Lhcer400ApplicationJsonErrorEnum || (Lhcer400ApplicationJsonErrorEnum = {}));
export var Lhcer400ApplicationJsonErrorDescriptionEnum;
(function (Lhcer400ApplicationJsonErrorDescriptionEnum) {
    Lhcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Lhcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Lhcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Lhcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Lhcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Lhcer400ApplicationJsonErrorDescriptionEnum || (Lhcer400ApplicationJsonErrorDescriptionEnum = {}));
var Lhcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Lhcer400ApplicationJson, _super);
    function Lhcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lhcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lhcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Lhcer400ApplicationJson;
}(SpeakeasyBase));
export { Lhcer400ApplicationJson };
export var Lhcer401ApplicationJsonErrorEnum;
(function (Lhcer401ApplicationJsonErrorEnum) {
    Lhcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Lhcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Lhcer401ApplicationJsonErrorEnum || (Lhcer401ApplicationJsonErrorEnum = {}));
export var Lhcer401ApplicationJsonErrorDescriptionEnum;
(function (Lhcer401ApplicationJsonErrorDescriptionEnum) {
    Lhcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Lhcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Lhcer401ApplicationJsonErrorDescriptionEnum || (Lhcer401ApplicationJsonErrorDescriptionEnum = {}));
var Lhcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Lhcer401ApplicationJson, _super);
    function Lhcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lhcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lhcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Lhcer401ApplicationJson;
}(SpeakeasyBase));
export { Lhcer401ApplicationJson };
export var Lhcer404ApplicationJsonErrorEnum;
(function (Lhcer404ApplicationJsonErrorEnum) {
    Lhcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Lhcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Lhcer404ApplicationJsonErrorEnum || (Lhcer404ApplicationJsonErrorEnum = {}));
export var Lhcer404ApplicationJsonErrorDescriptionEnum;
(function (Lhcer404ApplicationJsonErrorDescriptionEnum) {
    Lhcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Lhcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Lhcer404ApplicationJsonErrorDescriptionEnum || (Lhcer404ApplicationJsonErrorDescriptionEnum = {}));
var Lhcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Lhcer404ApplicationJson, _super);
    function Lhcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lhcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lhcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Lhcer404ApplicationJson;
}(SpeakeasyBase));
export { Lhcer404ApplicationJson };
export var Lhcer500ApplicationJsonErrorEnum;
(function (Lhcer500ApplicationJsonErrorEnum) {
    Lhcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Lhcer500ApplicationJsonErrorEnum || (Lhcer500ApplicationJsonErrorEnum = {}));
export var Lhcer500ApplicationJsonErrorDescriptionEnum;
(function (Lhcer500ApplicationJsonErrorDescriptionEnum) {
    Lhcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Lhcer500ApplicationJsonErrorDescriptionEnum || (Lhcer500ApplicationJsonErrorDescriptionEnum = {}));
var Lhcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Lhcer500ApplicationJson, _super);
    function Lhcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lhcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lhcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Lhcer500ApplicationJson;
}(SpeakeasyBase));
export { Lhcer500ApplicationJson };
export var Lhcer502ApplicationJsonErrorEnum;
(function (Lhcer502ApplicationJsonErrorEnum) {
    Lhcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Lhcer502ApplicationJsonErrorEnum || (Lhcer502ApplicationJsonErrorEnum = {}));
export var Lhcer502ApplicationJsonErrorDescriptionEnum;
(function (Lhcer502ApplicationJsonErrorDescriptionEnum) {
    Lhcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Lhcer502ApplicationJsonErrorDescriptionEnum || (Lhcer502ApplicationJsonErrorDescriptionEnum = {}));
var Lhcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Lhcer502ApplicationJson, _super);
    function Lhcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lhcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lhcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Lhcer502ApplicationJson;
}(SpeakeasyBase));
export { Lhcer502ApplicationJson };
export var Lhcer503ApplicationJsonErrorEnum;
(function (Lhcer503ApplicationJsonErrorEnum) {
    Lhcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Lhcer503ApplicationJsonErrorEnum || (Lhcer503ApplicationJsonErrorEnum = {}));
export var Lhcer503ApplicationJsonErrorDescriptionEnum;
(function (Lhcer503ApplicationJsonErrorDescriptionEnum) {
    Lhcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Lhcer503ApplicationJsonErrorDescriptionEnum || (Lhcer503ApplicationJsonErrorDescriptionEnum = {}));
var Lhcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Lhcer503ApplicationJson, _super);
    function Lhcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lhcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lhcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Lhcer503ApplicationJson;
}(SpeakeasyBase));
export { Lhcer503ApplicationJson };
export var Lhcer504ApplicationJsonErrorEnum;
(function (Lhcer504ApplicationJsonErrorEnum) {
    Lhcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Lhcer504ApplicationJsonErrorEnum || (Lhcer504ApplicationJsonErrorEnum = {}));
export var Lhcer504ApplicationJsonErrorDescriptionEnum;
(function (Lhcer504ApplicationJsonErrorDescriptionEnum) {
    Lhcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Lhcer504ApplicationJsonErrorDescriptionEnum || (Lhcer504ApplicationJsonErrorDescriptionEnum = {}));
var Lhcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Lhcer504ApplicationJson, _super);
    function Lhcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lhcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lhcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Lhcer504ApplicationJson;
}(SpeakeasyBase));
export { Lhcer504ApplicationJson };
var LhcerRequest = /** @class */ (function (_super) {
    __extends(LhcerRequest, _super);
    function LhcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", LhcerRequestBody)
    ], LhcerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LhcerSecurity)
    ], LhcerRequest.prototype, "security", void 0);
    return LhcerRequest;
}(SpeakeasyBase));
export { LhcerRequest };
var LhcerResponse = /** @class */ (function (_super) {
    __extends(LhcerResponse, _super);
    function LhcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LhcerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LhcerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Lhcer400ApplicationJson)
    ], LhcerResponse.prototype, "lhcer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Lhcer401ApplicationJson)
    ], LhcerResponse.prototype, "lhcer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Lhcer404ApplicationJson)
    ], LhcerResponse.prototype, "lhcer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Lhcer500ApplicationJson)
    ], LhcerResponse.prototype, "lhcer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Lhcer502ApplicationJson)
    ], LhcerResponse.prototype, "lhcer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Lhcer503ApplicationJson)
    ], LhcerResponse.prototype, "lhcer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Lhcer504ApplicationJson)
    ], LhcerResponse.prototype, "lhcer504ApplicationJsonObject", void 0);
    return LhcerResponse;
}(SpeakeasyBase));
export { LhcerResponse };
