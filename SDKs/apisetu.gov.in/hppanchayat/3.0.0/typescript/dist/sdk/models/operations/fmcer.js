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
var FmcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(FmcerRequestBodyCertificateParameters, _super);
    function FmcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], FmcerRequestBodyCertificateParameters.prototype, "uid", void 0);
    return FmcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { FmcerRequestBodyCertificateParameters };
export var FmcerRequestBodyFormatEnum;
(function (FmcerRequestBodyFormatEnum) {
    FmcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(FmcerRequestBodyFormatEnum || (FmcerRequestBodyFormatEnum = {}));
var FmcerRequestBody = /** @class */ (function (_super) {
    __extends(FmcerRequestBody, _super);
    function FmcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", FmcerRequestBodyCertificateParameters)
    ], FmcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], FmcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], FmcerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], FmcerRequestBody.prototype, "txnId", void 0);
    return FmcerRequestBody;
}(SpeakeasyBase));
export { FmcerRequestBody };
var FmcerSecurity = /** @class */ (function (_super) {
    __extends(FmcerSecurity, _super);
    function FmcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], FmcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], FmcerSecurity.prototype, "clientId", void 0);
    return FmcerSecurity;
}(SpeakeasyBase));
export { FmcerSecurity };
export var Fmcer400ApplicationJsonErrorEnum;
(function (Fmcer400ApplicationJsonErrorEnum) {
    Fmcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Fmcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Fmcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Fmcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Fmcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Fmcer400ApplicationJsonErrorEnum || (Fmcer400ApplicationJsonErrorEnum = {}));
export var Fmcer400ApplicationJsonErrorDescriptionEnum;
(function (Fmcer400ApplicationJsonErrorDescriptionEnum) {
    Fmcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Fmcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Fmcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Fmcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Fmcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Fmcer400ApplicationJsonErrorDescriptionEnum || (Fmcer400ApplicationJsonErrorDescriptionEnum = {}));
var Fmcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Fmcer400ApplicationJson, _super);
    function Fmcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fmcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fmcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Fmcer400ApplicationJson;
}(SpeakeasyBase));
export { Fmcer400ApplicationJson };
export var Fmcer401ApplicationJsonErrorEnum;
(function (Fmcer401ApplicationJsonErrorEnum) {
    Fmcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Fmcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Fmcer401ApplicationJsonErrorEnum || (Fmcer401ApplicationJsonErrorEnum = {}));
export var Fmcer401ApplicationJsonErrorDescriptionEnum;
(function (Fmcer401ApplicationJsonErrorDescriptionEnum) {
    Fmcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Fmcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Fmcer401ApplicationJsonErrorDescriptionEnum || (Fmcer401ApplicationJsonErrorDescriptionEnum = {}));
var Fmcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Fmcer401ApplicationJson, _super);
    function Fmcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fmcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fmcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Fmcer401ApplicationJson;
}(SpeakeasyBase));
export { Fmcer401ApplicationJson };
export var Fmcer404ApplicationJsonErrorEnum;
(function (Fmcer404ApplicationJsonErrorEnum) {
    Fmcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Fmcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Fmcer404ApplicationJsonErrorEnum || (Fmcer404ApplicationJsonErrorEnum = {}));
export var Fmcer404ApplicationJsonErrorDescriptionEnum;
(function (Fmcer404ApplicationJsonErrorDescriptionEnum) {
    Fmcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Fmcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Fmcer404ApplicationJsonErrorDescriptionEnum || (Fmcer404ApplicationJsonErrorDescriptionEnum = {}));
var Fmcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Fmcer404ApplicationJson, _super);
    function Fmcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fmcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fmcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Fmcer404ApplicationJson;
}(SpeakeasyBase));
export { Fmcer404ApplicationJson };
export var Fmcer500ApplicationJsonErrorEnum;
(function (Fmcer500ApplicationJsonErrorEnum) {
    Fmcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Fmcer500ApplicationJsonErrorEnum || (Fmcer500ApplicationJsonErrorEnum = {}));
export var Fmcer500ApplicationJsonErrorDescriptionEnum;
(function (Fmcer500ApplicationJsonErrorDescriptionEnum) {
    Fmcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Fmcer500ApplicationJsonErrorDescriptionEnum || (Fmcer500ApplicationJsonErrorDescriptionEnum = {}));
var Fmcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Fmcer500ApplicationJson, _super);
    function Fmcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fmcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fmcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Fmcer500ApplicationJson;
}(SpeakeasyBase));
export { Fmcer500ApplicationJson };
export var Fmcer502ApplicationJsonErrorEnum;
(function (Fmcer502ApplicationJsonErrorEnum) {
    Fmcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Fmcer502ApplicationJsonErrorEnum || (Fmcer502ApplicationJsonErrorEnum = {}));
export var Fmcer502ApplicationJsonErrorDescriptionEnum;
(function (Fmcer502ApplicationJsonErrorDescriptionEnum) {
    Fmcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Fmcer502ApplicationJsonErrorDescriptionEnum || (Fmcer502ApplicationJsonErrorDescriptionEnum = {}));
var Fmcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Fmcer502ApplicationJson, _super);
    function Fmcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fmcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fmcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Fmcer502ApplicationJson;
}(SpeakeasyBase));
export { Fmcer502ApplicationJson };
export var Fmcer503ApplicationJsonErrorEnum;
(function (Fmcer503ApplicationJsonErrorEnum) {
    Fmcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Fmcer503ApplicationJsonErrorEnum || (Fmcer503ApplicationJsonErrorEnum = {}));
export var Fmcer503ApplicationJsonErrorDescriptionEnum;
(function (Fmcer503ApplicationJsonErrorDescriptionEnum) {
    Fmcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Fmcer503ApplicationJsonErrorDescriptionEnum || (Fmcer503ApplicationJsonErrorDescriptionEnum = {}));
var Fmcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Fmcer503ApplicationJson, _super);
    function Fmcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fmcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fmcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Fmcer503ApplicationJson;
}(SpeakeasyBase));
export { Fmcer503ApplicationJson };
export var Fmcer504ApplicationJsonErrorEnum;
(function (Fmcer504ApplicationJsonErrorEnum) {
    Fmcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Fmcer504ApplicationJsonErrorEnum || (Fmcer504ApplicationJsonErrorEnum = {}));
export var Fmcer504ApplicationJsonErrorDescriptionEnum;
(function (Fmcer504ApplicationJsonErrorDescriptionEnum) {
    Fmcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Fmcer504ApplicationJsonErrorDescriptionEnum || (Fmcer504ApplicationJsonErrorDescriptionEnum = {}));
var Fmcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Fmcer504ApplicationJson, _super);
    function Fmcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fmcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fmcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Fmcer504ApplicationJson;
}(SpeakeasyBase));
export { Fmcer504ApplicationJson };
var FmcerRequest = /** @class */ (function (_super) {
    __extends(FmcerRequest, _super);
    function FmcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", FmcerRequestBody)
    ], FmcerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FmcerSecurity)
    ], FmcerRequest.prototype, "security", void 0);
    return FmcerRequest;
}(SpeakeasyBase));
export { FmcerRequest };
var FmcerResponse = /** @class */ (function (_super) {
    __extends(FmcerResponse, _super);
    function FmcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FmcerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FmcerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Fmcer400ApplicationJson)
    ], FmcerResponse.prototype, "fmcer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Fmcer401ApplicationJson)
    ], FmcerResponse.prototype, "fmcer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Fmcer404ApplicationJson)
    ], FmcerResponse.prototype, "fmcer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Fmcer500ApplicationJson)
    ], FmcerResponse.prototype, "fmcer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Fmcer502ApplicationJson)
    ], FmcerResponse.prototype, "fmcer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Fmcer503ApplicationJson)
    ], FmcerResponse.prototype, "fmcer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Fmcer504ApplicationJson)
    ], FmcerResponse.prototype, "fmcer504ApplicationJsonObject", void 0);
    return FmcerResponse;
}(SpeakeasyBase));
export { FmcerResponse };
