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
var NdcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(NdcerRequestBodyCertificateParameters, _super);
    function NdcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=appid" }),
        __metadata("design:type", String)
    ], NdcerRequestBodyCertificateParameters.prototype, "appid", void 0);
    return NdcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { NdcerRequestBodyCertificateParameters };
export var NdcerRequestBodyFormatEnum;
(function (NdcerRequestBodyFormatEnum) {
    NdcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(NdcerRequestBodyFormatEnum || (NdcerRequestBodyFormatEnum = {}));
var NdcerRequestBody = /** @class */ (function (_super) {
    __extends(NdcerRequestBody, _super);
    function NdcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", NdcerRequestBodyCertificateParameters)
    ], NdcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], NdcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], NdcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], NdcerRequestBody.prototype, "txnId", void 0);
    return NdcerRequestBody;
}(SpeakeasyBase));
export { NdcerRequestBody };
var NdcerSecurity = /** @class */ (function (_super) {
    __extends(NdcerSecurity, _super);
    function NdcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], NdcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], NdcerSecurity.prototype, "clientId", void 0);
    return NdcerSecurity;
}(SpeakeasyBase));
export { NdcerSecurity };
var NdcerRequest = /** @class */ (function (_super) {
    __extends(NdcerRequest, _super);
    function NdcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", NdcerRequestBody)
    ], NdcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NdcerSecurity)
    ], NdcerRequest.prototype, "security", void 0);
    return NdcerRequest;
}(SpeakeasyBase));
export { NdcerRequest };
export var Ndcer400ApplicationJsonErrorEnum;
(function (Ndcer400ApplicationJsonErrorEnum) {
    Ndcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Ndcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Ndcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Ndcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Ndcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Ndcer400ApplicationJsonErrorEnum || (Ndcer400ApplicationJsonErrorEnum = {}));
export var Ndcer400ApplicationJsonErrorDescriptionEnum;
(function (Ndcer400ApplicationJsonErrorDescriptionEnum) {
    Ndcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Ndcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Ndcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Ndcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Ndcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Ndcer400ApplicationJsonErrorDescriptionEnum || (Ndcer400ApplicationJsonErrorDescriptionEnum = {}));
var Ndcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Ndcer400ApplicationJson, _super);
    function Ndcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ndcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ndcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Ndcer400ApplicationJson;
}(SpeakeasyBase));
export { Ndcer400ApplicationJson };
export var Ndcer401ApplicationJsonErrorEnum;
(function (Ndcer401ApplicationJsonErrorEnum) {
    Ndcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Ndcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Ndcer401ApplicationJsonErrorEnum || (Ndcer401ApplicationJsonErrorEnum = {}));
export var Ndcer401ApplicationJsonErrorDescriptionEnum;
(function (Ndcer401ApplicationJsonErrorDescriptionEnum) {
    Ndcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Ndcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Ndcer401ApplicationJsonErrorDescriptionEnum || (Ndcer401ApplicationJsonErrorDescriptionEnum = {}));
var Ndcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Ndcer401ApplicationJson, _super);
    function Ndcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ndcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ndcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Ndcer401ApplicationJson;
}(SpeakeasyBase));
export { Ndcer401ApplicationJson };
export var Ndcer404ApplicationJsonErrorEnum;
(function (Ndcer404ApplicationJsonErrorEnum) {
    Ndcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Ndcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Ndcer404ApplicationJsonErrorEnum || (Ndcer404ApplicationJsonErrorEnum = {}));
export var Ndcer404ApplicationJsonErrorDescriptionEnum;
(function (Ndcer404ApplicationJsonErrorDescriptionEnum) {
    Ndcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Ndcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Ndcer404ApplicationJsonErrorDescriptionEnum || (Ndcer404ApplicationJsonErrorDescriptionEnum = {}));
var Ndcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Ndcer404ApplicationJson, _super);
    function Ndcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ndcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ndcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Ndcer404ApplicationJson;
}(SpeakeasyBase));
export { Ndcer404ApplicationJson };
export var Ndcer500ApplicationJsonErrorEnum;
(function (Ndcer500ApplicationJsonErrorEnum) {
    Ndcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Ndcer500ApplicationJsonErrorEnum || (Ndcer500ApplicationJsonErrorEnum = {}));
export var Ndcer500ApplicationJsonErrorDescriptionEnum;
(function (Ndcer500ApplicationJsonErrorDescriptionEnum) {
    Ndcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Ndcer500ApplicationJsonErrorDescriptionEnum || (Ndcer500ApplicationJsonErrorDescriptionEnum = {}));
var Ndcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Ndcer500ApplicationJson, _super);
    function Ndcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ndcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ndcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Ndcer500ApplicationJson;
}(SpeakeasyBase));
export { Ndcer500ApplicationJson };
export var Ndcer502ApplicationJsonErrorEnum;
(function (Ndcer502ApplicationJsonErrorEnum) {
    Ndcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Ndcer502ApplicationJsonErrorEnum || (Ndcer502ApplicationJsonErrorEnum = {}));
export var Ndcer502ApplicationJsonErrorDescriptionEnum;
(function (Ndcer502ApplicationJsonErrorDescriptionEnum) {
    Ndcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Ndcer502ApplicationJsonErrorDescriptionEnum || (Ndcer502ApplicationJsonErrorDescriptionEnum = {}));
var Ndcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Ndcer502ApplicationJson, _super);
    function Ndcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ndcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ndcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Ndcer502ApplicationJson;
}(SpeakeasyBase));
export { Ndcer502ApplicationJson };
export var Ndcer503ApplicationJsonErrorEnum;
(function (Ndcer503ApplicationJsonErrorEnum) {
    Ndcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Ndcer503ApplicationJsonErrorEnum || (Ndcer503ApplicationJsonErrorEnum = {}));
export var Ndcer503ApplicationJsonErrorDescriptionEnum;
(function (Ndcer503ApplicationJsonErrorDescriptionEnum) {
    Ndcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Ndcer503ApplicationJsonErrorDescriptionEnum || (Ndcer503ApplicationJsonErrorDescriptionEnum = {}));
var Ndcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Ndcer503ApplicationJson, _super);
    function Ndcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ndcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ndcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Ndcer503ApplicationJson;
}(SpeakeasyBase));
export { Ndcer503ApplicationJson };
export var Ndcer504ApplicationJsonErrorEnum;
(function (Ndcer504ApplicationJsonErrorEnum) {
    Ndcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Ndcer504ApplicationJsonErrorEnum || (Ndcer504ApplicationJsonErrorEnum = {}));
export var Ndcer504ApplicationJsonErrorDescriptionEnum;
(function (Ndcer504ApplicationJsonErrorDescriptionEnum) {
    Ndcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Ndcer504ApplicationJsonErrorDescriptionEnum || (Ndcer504ApplicationJsonErrorDescriptionEnum = {}));
var Ndcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Ndcer504ApplicationJson, _super);
    function Ndcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ndcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ndcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Ndcer504ApplicationJson;
}(SpeakeasyBase));
export { Ndcer504ApplicationJson };
var NdcerResponse = /** @class */ (function (_super) {
    __extends(NdcerResponse, _super);
    function NdcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NdcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NdcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ndcer400ApplicationJson)
    ], NdcerResponse.prototype, "ndcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ndcer401ApplicationJson)
    ], NdcerResponse.prototype, "ndcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ndcer404ApplicationJson)
    ], NdcerResponse.prototype, "ndcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ndcer500ApplicationJson)
    ], NdcerResponse.prototype, "ndcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ndcer502ApplicationJson)
    ], NdcerResponse.prototype, "ndcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ndcer503ApplicationJson)
    ], NdcerResponse.prototype, "ndcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ndcer504ApplicationJson)
    ], NdcerResponse.prototype, "ndcer504ApplicationJsonObject", void 0);
    return NdcerResponse;
}(SpeakeasyBase));
export { NdcerResponse };
