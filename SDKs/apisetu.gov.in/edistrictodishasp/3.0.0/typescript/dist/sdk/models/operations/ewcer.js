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
var EwcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(EwcerRequestBodyCertificateParameters, _super);
    function EwcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], EwcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], EwcerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], EwcerRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], EwcerRequestBodyCertificateParameters.prototype, "uid", void 0);
    return EwcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { EwcerRequestBodyCertificateParameters };
export var EwcerRequestBodyFormatEnum;
(function (EwcerRequestBodyFormatEnum) {
    EwcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(EwcerRequestBodyFormatEnum || (EwcerRequestBodyFormatEnum = {}));
var EwcerRequestBody = /** @class */ (function (_super) {
    __extends(EwcerRequestBody, _super);
    function EwcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", EwcerRequestBodyCertificateParameters)
    ], EwcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], EwcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], EwcerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], EwcerRequestBody.prototype, "txnId", void 0);
    return EwcerRequestBody;
}(SpeakeasyBase));
export { EwcerRequestBody };
var EwcerSecurity = /** @class */ (function (_super) {
    __extends(EwcerSecurity, _super);
    function EwcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], EwcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], EwcerSecurity.prototype, "clientId", void 0);
    return EwcerSecurity;
}(SpeakeasyBase));
export { EwcerSecurity };
export var Ewcer400ApplicationJsonErrorEnum;
(function (Ewcer400ApplicationJsonErrorEnum) {
    Ewcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Ewcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Ewcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Ewcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Ewcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Ewcer400ApplicationJsonErrorEnum || (Ewcer400ApplicationJsonErrorEnum = {}));
export var Ewcer400ApplicationJsonErrorDescriptionEnum;
(function (Ewcer400ApplicationJsonErrorDescriptionEnum) {
    Ewcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Ewcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Ewcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Ewcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Ewcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Ewcer400ApplicationJsonErrorDescriptionEnum || (Ewcer400ApplicationJsonErrorDescriptionEnum = {}));
var Ewcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Ewcer400ApplicationJson, _super);
    function Ewcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ewcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ewcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Ewcer400ApplicationJson;
}(SpeakeasyBase));
export { Ewcer400ApplicationJson };
export var Ewcer401ApplicationJsonErrorEnum;
(function (Ewcer401ApplicationJsonErrorEnum) {
    Ewcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Ewcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Ewcer401ApplicationJsonErrorEnum || (Ewcer401ApplicationJsonErrorEnum = {}));
export var Ewcer401ApplicationJsonErrorDescriptionEnum;
(function (Ewcer401ApplicationJsonErrorDescriptionEnum) {
    Ewcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Ewcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Ewcer401ApplicationJsonErrorDescriptionEnum || (Ewcer401ApplicationJsonErrorDescriptionEnum = {}));
var Ewcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Ewcer401ApplicationJson, _super);
    function Ewcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ewcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ewcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Ewcer401ApplicationJson;
}(SpeakeasyBase));
export { Ewcer401ApplicationJson };
export var Ewcer404ApplicationJsonErrorEnum;
(function (Ewcer404ApplicationJsonErrorEnum) {
    Ewcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Ewcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Ewcer404ApplicationJsonErrorEnum || (Ewcer404ApplicationJsonErrorEnum = {}));
export var Ewcer404ApplicationJsonErrorDescriptionEnum;
(function (Ewcer404ApplicationJsonErrorDescriptionEnum) {
    Ewcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Ewcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Ewcer404ApplicationJsonErrorDescriptionEnum || (Ewcer404ApplicationJsonErrorDescriptionEnum = {}));
var Ewcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Ewcer404ApplicationJson, _super);
    function Ewcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ewcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ewcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Ewcer404ApplicationJson;
}(SpeakeasyBase));
export { Ewcer404ApplicationJson };
export var Ewcer500ApplicationJsonErrorEnum;
(function (Ewcer500ApplicationJsonErrorEnum) {
    Ewcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Ewcer500ApplicationJsonErrorEnum || (Ewcer500ApplicationJsonErrorEnum = {}));
export var Ewcer500ApplicationJsonErrorDescriptionEnum;
(function (Ewcer500ApplicationJsonErrorDescriptionEnum) {
    Ewcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Ewcer500ApplicationJsonErrorDescriptionEnum || (Ewcer500ApplicationJsonErrorDescriptionEnum = {}));
var Ewcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Ewcer500ApplicationJson, _super);
    function Ewcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ewcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ewcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Ewcer500ApplicationJson;
}(SpeakeasyBase));
export { Ewcer500ApplicationJson };
export var Ewcer502ApplicationJsonErrorEnum;
(function (Ewcer502ApplicationJsonErrorEnum) {
    Ewcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Ewcer502ApplicationJsonErrorEnum || (Ewcer502ApplicationJsonErrorEnum = {}));
export var Ewcer502ApplicationJsonErrorDescriptionEnum;
(function (Ewcer502ApplicationJsonErrorDescriptionEnum) {
    Ewcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Ewcer502ApplicationJsonErrorDescriptionEnum || (Ewcer502ApplicationJsonErrorDescriptionEnum = {}));
var Ewcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Ewcer502ApplicationJson, _super);
    function Ewcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ewcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ewcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Ewcer502ApplicationJson;
}(SpeakeasyBase));
export { Ewcer502ApplicationJson };
export var Ewcer503ApplicationJsonErrorEnum;
(function (Ewcer503ApplicationJsonErrorEnum) {
    Ewcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Ewcer503ApplicationJsonErrorEnum || (Ewcer503ApplicationJsonErrorEnum = {}));
export var Ewcer503ApplicationJsonErrorDescriptionEnum;
(function (Ewcer503ApplicationJsonErrorDescriptionEnum) {
    Ewcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Ewcer503ApplicationJsonErrorDescriptionEnum || (Ewcer503ApplicationJsonErrorDescriptionEnum = {}));
var Ewcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Ewcer503ApplicationJson, _super);
    function Ewcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ewcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ewcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Ewcer503ApplicationJson;
}(SpeakeasyBase));
export { Ewcer503ApplicationJson };
export var Ewcer504ApplicationJsonErrorEnum;
(function (Ewcer504ApplicationJsonErrorEnum) {
    Ewcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Ewcer504ApplicationJsonErrorEnum || (Ewcer504ApplicationJsonErrorEnum = {}));
export var Ewcer504ApplicationJsonErrorDescriptionEnum;
(function (Ewcer504ApplicationJsonErrorDescriptionEnum) {
    Ewcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Ewcer504ApplicationJsonErrorDescriptionEnum || (Ewcer504ApplicationJsonErrorDescriptionEnum = {}));
var Ewcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Ewcer504ApplicationJson, _super);
    function Ewcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ewcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ewcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Ewcer504ApplicationJson;
}(SpeakeasyBase));
export { Ewcer504ApplicationJson };
var EwcerRequest = /** @class */ (function (_super) {
    __extends(EwcerRequest, _super);
    function EwcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EwcerRequestBody)
    ], EwcerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EwcerSecurity)
    ], EwcerRequest.prototype, "security", void 0);
    return EwcerRequest;
}(SpeakeasyBase));
export { EwcerRequest };
var EwcerResponse = /** @class */ (function (_super) {
    __extends(EwcerResponse, _super);
    function EwcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EwcerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EwcerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ewcer400ApplicationJson)
    ], EwcerResponse.prototype, "ewcer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ewcer401ApplicationJson)
    ], EwcerResponse.prototype, "ewcer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ewcer404ApplicationJson)
    ], EwcerResponse.prototype, "ewcer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ewcer500ApplicationJson)
    ], EwcerResponse.prototype, "ewcer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ewcer502ApplicationJson)
    ], EwcerResponse.prototype, "ewcer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ewcer503ApplicationJson)
    ], EwcerResponse.prototype, "ewcer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ewcer504ApplicationJson)
    ], EwcerResponse.prototype, "ewcer504ApplicationJsonObject", void 0);
    return EwcerResponse;
}(SpeakeasyBase));
export { EwcerResponse };
