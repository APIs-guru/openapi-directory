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
var EgcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(EgcerRequestBodyCertificateParameters, _super);
    function EgcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], EgcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], EgcerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], EgcerRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], EgcerRequestBodyCertificateParameters.prototype, "uid", void 0);
    return EgcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { EgcerRequestBodyCertificateParameters };
export var EgcerRequestBodyFormatEnum;
(function (EgcerRequestBodyFormatEnum) {
    EgcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(EgcerRequestBodyFormatEnum || (EgcerRequestBodyFormatEnum = {}));
var EgcerRequestBody = /** @class */ (function (_super) {
    __extends(EgcerRequestBody, _super);
    function EgcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", EgcerRequestBodyCertificateParameters)
    ], EgcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], EgcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], EgcerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], EgcerRequestBody.prototype, "txnId", void 0);
    return EgcerRequestBody;
}(SpeakeasyBase));
export { EgcerRequestBody };
var EgcerSecurity = /** @class */ (function (_super) {
    __extends(EgcerSecurity, _super);
    function EgcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], EgcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], EgcerSecurity.prototype, "clientId", void 0);
    return EgcerSecurity;
}(SpeakeasyBase));
export { EgcerSecurity };
export var Egcer400ApplicationJsonErrorEnum;
(function (Egcer400ApplicationJsonErrorEnum) {
    Egcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Egcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Egcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Egcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Egcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Egcer400ApplicationJsonErrorEnum || (Egcer400ApplicationJsonErrorEnum = {}));
export var Egcer400ApplicationJsonErrorDescriptionEnum;
(function (Egcer400ApplicationJsonErrorDescriptionEnum) {
    Egcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Egcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Egcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Egcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Egcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Egcer400ApplicationJsonErrorDescriptionEnum || (Egcer400ApplicationJsonErrorDescriptionEnum = {}));
var Egcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Egcer400ApplicationJson, _super);
    function Egcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Egcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Egcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Egcer400ApplicationJson;
}(SpeakeasyBase));
export { Egcer400ApplicationJson };
export var Egcer401ApplicationJsonErrorEnum;
(function (Egcer401ApplicationJsonErrorEnum) {
    Egcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Egcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Egcer401ApplicationJsonErrorEnum || (Egcer401ApplicationJsonErrorEnum = {}));
export var Egcer401ApplicationJsonErrorDescriptionEnum;
(function (Egcer401ApplicationJsonErrorDescriptionEnum) {
    Egcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Egcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Egcer401ApplicationJsonErrorDescriptionEnum || (Egcer401ApplicationJsonErrorDescriptionEnum = {}));
var Egcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Egcer401ApplicationJson, _super);
    function Egcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Egcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Egcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Egcer401ApplicationJson;
}(SpeakeasyBase));
export { Egcer401ApplicationJson };
export var Egcer404ApplicationJsonErrorEnum;
(function (Egcer404ApplicationJsonErrorEnum) {
    Egcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Egcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Egcer404ApplicationJsonErrorEnum || (Egcer404ApplicationJsonErrorEnum = {}));
export var Egcer404ApplicationJsonErrorDescriptionEnum;
(function (Egcer404ApplicationJsonErrorDescriptionEnum) {
    Egcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Egcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Egcer404ApplicationJsonErrorDescriptionEnum || (Egcer404ApplicationJsonErrorDescriptionEnum = {}));
var Egcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Egcer404ApplicationJson, _super);
    function Egcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Egcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Egcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Egcer404ApplicationJson;
}(SpeakeasyBase));
export { Egcer404ApplicationJson };
export var Egcer500ApplicationJsonErrorEnum;
(function (Egcer500ApplicationJsonErrorEnum) {
    Egcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Egcer500ApplicationJsonErrorEnum || (Egcer500ApplicationJsonErrorEnum = {}));
export var Egcer500ApplicationJsonErrorDescriptionEnum;
(function (Egcer500ApplicationJsonErrorDescriptionEnum) {
    Egcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Egcer500ApplicationJsonErrorDescriptionEnum || (Egcer500ApplicationJsonErrorDescriptionEnum = {}));
var Egcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Egcer500ApplicationJson, _super);
    function Egcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Egcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Egcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Egcer500ApplicationJson;
}(SpeakeasyBase));
export { Egcer500ApplicationJson };
export var Egcer502ApplicationJsonErrorEnum;
(function (Egcer502ApplicationJsonErrorEnum) {
    Egcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Egcer502ApplicationJsonErrorEnum || (Egcer502ApplicationJsonErrorEnum = {}));
export var Egcer502ApplicationJsonErrorDescriptionEnum;
(function (Egcer502ApplicationJsonErrorDescriptionEnum) {
    Egcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Egcer502ApplicationJsonErrorDescriptionEnum || (Egcer502ApplicationJsonErrorDescriptionEnum = {}));
var Egcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Egcer502ApplicationJson, _super);
    function Egcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Egcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Egcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Egcer502ApplicationJson;
}(SpeakeasyBase));
export { Egcer502ApplicationJson };
export var Egcer503ApplicationJsonErrorEnum;
(function (Egcer503ApplicationJsonErrorEnum) {
    Egcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Egcer503ApplicationJsonErrorEnum || (Egcer503ApplicationJsonErrorEnum = {}));
export var Egcer503ApplicationJsonErrorDescriptionEnum;
(function (Egcer503ApplicationJsonErrorDescriptionEnum) {
    Egcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Egcer503ApplicationJsonErrorDescriptionEnum || (Egcer503ApplicationJsonErrorDescriptionEnum = {}));
var Egcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Egcer503ApplicationJson, _super);
    function Egcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Egcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Egcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Egcer503ApplicationJson;
}(SpeakeasyBase));
export { Egcer503ApplicationJson };
export var Egcer504ApplicationJsonErrorEnum;
(function (Egcer504ApplicationJsonErrorEnum) {
    Egcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Egcer504ApplicationJsonErrorEnum || (Egcer504ApplicationJsonErrorEnum = {}));
export var Egcer504ApplicationJsonErrorDescriptionEnum;
(function (Egcer504ApplicationJsonErrorDescriptionEnum) {
    Egcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Egcer504ApplicationJsonErrorDescriptionEnum || (Egcer504ApplicationJsonErrorDescriptionEnum = {}));
var Egcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Egcer504ApplicationJson, _super);
    function Egcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Egcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Egcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Egcer504ApplicationJson;
}(SpeakeasyBase));
export { Egcer504ApplicationJson };
var EgcerRequest = /** @class */ (function (_super) {
    __extends(EgcerRequest, _super);
    function EgcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EgcerRequestBody)
    ], EgcerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EgcerSecurity)
    ], EgcerRequest.prototype, "security", void 0);
    return EgcerRequest;
}(SpeakeasyBase));
export { EgcerRequest };
var EgcerResponse = /** @class */ (function (_super) {
    __extends(EgcerResponse, _super);
    function EgcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EgcerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EgcerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Egcer400ApplicationJson)
    ], EgcerResponse.prototype, "egcer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Egcer401ApplicationJson)
    ], EgcerResponse.prototype, "egcer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Egcer404ApplicationJson)
    ], EgcerResponse.prototype, "egcer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Egcer500ApplicationJson)
    ], EgcerResponse.prototype, "egcer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Egcer502ApplicationJson)
    ], EgcerResponse.prototype, "egcer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Egcer503ApplicationJson)
    ], EgcerResponse.prototype, "egcer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Egcer504ApplicationJson)
    ], EgcerResponse.prototype, "egcer504ApplicationJsonObject", void 0);
    return EgcerResponse;
}(SpeakeasyBase));
export { EgcerResponse };
