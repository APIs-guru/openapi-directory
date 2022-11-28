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
var ClcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(ClcerRequestBodyCertificateParameters, _super);
    function ClcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], ClcerRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return ClcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { ClcerRequestBodyCertificateParameters };
export var ClcerRequestBodyFormatEnum;
(function (ClcerRequestBodyFormatEnum) {
    ClcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(ClcerRequestBodyFormatEnum || (ClcerRequestBodyFormatEnum = {}));
var ClcerRequestBody = /** @class */ (function (_super) {
    __extends(ClcerRequestBody, _super);
    function ClcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", ClcerRequestBodyCertificateParameters)
    ], ClcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], ClcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], ClcerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], ClcerRequestBody.prototype, "txnId", void 0);
    return ClcerRequestBody;
}(SpeakeasyBase));
export { ClcerRequestBody };
var ClcerSecurity = /** @class */ (function (_super) {
    __extends(ClcerSecurity, _super);
    function ClcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ClcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], ClcerSecurity.prototype, "clientId", void 0);
    return ClcerSecurity;
}(SpeakeasyBase));
export { ClcerSecurity };
export var Clcer400ApplicationJsonErrorEnum;
(function (Clcer400ApplicationJsonErrorEnum) {
    Clcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Clcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Clcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Clcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Clcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Clcer400ApplicationJsonErrorEnum || (Clcer400ApplicationJsonErrorEnum = {}));
export var Clcer400ApplicationJsonErrorDescriptionEnum;
(function (Clcer400ApplicationJsonErrorDescriptionEnum) {
    Clcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Clcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Clcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Clcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Clcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Clcer400ApplicationJsonErrorDescriptionEnum || (Clcer400ApplicationJsonErrorDescriptionEnum = {}));
var Clcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Clcer400ApplicationJson, _super);
    function Clcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Clcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Clcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Clcer400ApplicationJson;
}(SpeakeasyBase));
export { Clcer400ApplicationJson };
export var Clcer401ApplicationJsonErrorEnum;
(function (Clcer401ApplicationJsonErrorEnum) {
    Clcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Clcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Clcer401ApplicationJsonErrorEnum || (Clcer401ApplicationJsonErrorEnum = {}));
export var Clcer401ApplicationJsonErrorDescriptionEnum;
(function (Clcer401ApplicationJsonErrorDescriptionEnum) {
    Clcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Clcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Clcer401ApplicationJsonErrorDescriptionEnum || (Clcer401ApplicationJsonErrorDescriptionEnum = {}));
var Clcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Clcer401ApplicationJson, _super);
    function Clcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Clcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Clcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Clcer401ApplicationJson;
}(SpeakeasyBase));
export { Clcer401ApplicationJson };
export var Clcer404ApplicationJsonErrorEnum;
(function (Clcer404ApplicationJsonErrorEnum) {
    Clcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Clcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Clcer404ApplicationJsonErrorEnum || (Clcer404ApplicationJsonErrorEnum = {}));
export var Clcer404ApplicationJsonErrorDescriptionEnum;
(function (Clcer404ApplicationJsonErrorDescriptionEnum) {
    Clcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Clcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Clcer404ApplicationJsonErrorDescriptionEnum || (Clcer404ApplicationJsonErrorDescriptionEnum = {}));
var Clcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Clcer404ApplicationJson, _super);
    function Clcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Clcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Clcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Clcer404ApplicationJson;
}(SpeakeasyBase));
export { Clcer404ApplicationJson };
export var Clcer500ApplicationJsonErrorEnum;
(function (Clcer500ApplicationJsonErrorEnum) {
    Clcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Clcer500ApplicationJsonErrorEnum || (Clcer500ApplicationJsonErrorEnum = {}));
export var Clcer500ApplicationJsonErrorDescriptionEnum;
(function (Clcer500ApplicationJsonErrorDescriptionEnum) {
    Clcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Clcer500ApplicationJsonErrorDescriptionEnum || (Clcer500ApplicationJsonErrorDescriptionEnum = {}));
var Clcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Clcer500ApplicationJson, _super);
    function Clcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Clcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Clcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Clcer500ApplicationJson;
}(SpeakeasyBase));
export { Clcer500ApplicationJson };
export var Clcer502ApplicationJsonErrorEnum;
(function (Clcer502ApplicationJsonErrorEnum) {
    Clcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Clcer502ApplicationJsonErrorEnum || (Clcer502ApplicationJsonErrorEnum = {}));
export var Clcer502ApplicationJsonErrorDescriptionEnum;
(function (Clcer502ApplicationJsonErrorDescriptionEnum) {
    Clcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Clcer502ApplicationJsonErrorDescriptionEnum || (Clcer502ApplicationJsonErrorDescriptionEnum = {}));
var Clcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Clcer502ApplicationJson, _super);
    function Clcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Clcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Clcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Clcer502ApplicationJson;
}(SpeakeasyBase));
export { Clcer502ApplicationJson };
export var Clcer503ApplicationJsonErrorEnum;
(function (Clcer503ApplicationJsonErrorEnum) {
    Clcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Clcer503ApplicationJsonErrorEnum || (Clcer503ApplicationJsonErrorEnum = {}));
export var Clcer503ApplicationJsonErrorDescriptionEnum;
(function (Clcer503ApplicationJsonErrorDescriptionEnum) {
    Clcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Clcer503ApplicationJsonErrorDescriptionEnum || (Clcer503ApplicationJsonErrorDescriptionEnum = {}));
var Clcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Clcer503ApplicationJson, _super);
    function Clcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Clcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Clcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Clcer503ApplicationJson;
}(SpeakeasyBase));
export { Clcer503ApplicationJson };
export var Clcer504ApplicationJsonErrorEnum;
(function (Clcer504ApplicationJsonErrorEnum) {
    Clcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Clcer504ApplicationJsonErrorEnum || (Clcer504ApplicationJsonErrorEnum = {}));
export var Clcer504ApplicationJsonErrorDescriptionEnum;
(function (Clcer504ApplicationJsonErrorDescriptionEnum) {
    Clcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Clcer504ApplicationJsonErrorDescriptionEnum || (Clcer504ApplicationJsonErrorDescriptionEnum = {}));
var Clcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Clcer504ApplicationJson, _super);
    function Clcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Clcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Clcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Clcer504ApplicationJson;
}(SpeakeasyBase));
export { Clcer504ApplicationJson };
var ClcerRequest = /** @class */ (function (_super) {
    __extends(ClcerRequest, _super);
    function ClcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ClcerRequestBody)
    ], ClcerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClcerSecurity)
    ], ClcerRequest.prototype, "security", void 0);
    return ClcerRequest;
}(SpeakeasyBase));
export { ClcerRequest };
var ClcerResponse = /** @class */ (function (_super) {
    __extends(ClcerResponse, _super);
    function ClcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClcerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClcerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Clcer400ApplicationJson)
    ], ClcerResponse.prototype, "clcer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Clcer401ApplicationJson)
    ], ClcerResponse.prototype, "clcer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Clcer404ApplicationJson)
    ], ClcerResponse.prototype, "clcer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Clcer500ApplicationJson)
    ], ClcerResponse.prototype, "clcer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Clcer502ApplicationJson)
    ], ClcerResponse.prototype, "clcer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Clcer503ApplicationJson)
    ], ClcerResponse.prototype, "clcer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Clcer504ApplicationJson)
    ], ClcerResponse.prototype, "clcer504ApplicationJsonObject", void 0);
    return ClcerResponse;
}(SpeakeasyBase));
export { ClcerResponse };
