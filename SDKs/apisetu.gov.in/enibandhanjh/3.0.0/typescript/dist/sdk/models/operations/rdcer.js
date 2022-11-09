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
var RdcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RdcerRequestBodyCertificateParameters, _super);
    function RdcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], RdcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], RdcerRequestBodyCertificateParameters.prototype, "uid", void 0);
    __decorate([
        Metadata({ data: "json, name=final_doc_reg_no" }),
        __metadata("design:type", String)
    ], RdcerRequestBodyCertificateParameters.prototype, "finalDocRegNo", void 0);
    return RdcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { RdcerRequestBodyCertificateParameters };
export var RdcerRequestBodyFormatEnum;
(function (RdcerRequestBodyFormatEnum) {
    RdcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(RdcerRequestBodyFormatEnum || (RdcerRequestBodyFormatEnum = {}));
var RdcerRequestBody = /** @class */ (function (_super) {
    __extends(RdcerRequestBody, _super);
    function RdcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RdcerRequestBodyCertificateParameters)
    ], RdcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RdcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RdcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RdcerRequestBody.prototype, "txnId", void 0);
    return RdcerRequestBody;
}(SpeakeasyBase));
export { RdcerRequestBody };
var RdcerSecurity = /** @class */ (function (_super) {
    __extends(RdcerSecurity, _super);
    function RdcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RdcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RdcerSecurity.prototype, "clientId", void 0);
    return RdcerSecurity;
}(SpeakeasyBase));
export { RdcerSecurity };
var RdcerRequest = /** @class */ (function (_super) {
    __extends(RdcerRequest, _super);
    function RdcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RdcerRequestBody)
    ], RdcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RdcerSecurity)
    ], RdcerRequest.prototype, "security", void 0);
    return RdcerRequest;
}(SpeakeasyBase));
export { RdcerRequest };
export var Rdcer400ApplicationJsonErrorEnum;
(function (Rdcer400ApplicationJsonErrorEnum) {
    Rdcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Rdcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Rdcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Rdcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Rdcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Rdcer400ApplicationJsonErrorEnum || (Rdcer400ApplicationJsonErrorEnum = {}));
export var Rdcer400ApplicationJsonErrorDescriptionEnum;
(function (Rdcer400ApplicationJsonErrorDescriptionEnum) {
    Rdcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Rdcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Rdcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Rdcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Rdcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Rdcer400ApplicationJsonErrorDescriptionEnum || (Rdcer400ApplicationJsonErrorDescriptionEnum = {}));
var Rdcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Rdcer400ApplicationJson, _super);
    function Rdcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rdcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rdcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Rdcer400ApplicationJson;
}(SpeakeasyBase));
export { Rdcer400ApplicationJson };
export var Rdcer401ApplicationJsonErrorEnum;
(function (Rdcer401ApplicationJsonErrorEnum) {
    Rdcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Rdcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Rdcer401ApplicationJsonErrorEnum || (Rdcer401ApplicationJsonErrorEnum = {}));
export var Rdcer401ApplicationJsonErrorDescriptionEnum;
(function (Rdcer401ApplicationJsonErrorDescriptionEnum) {
    Rdcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Rdcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Rdcer401ApplicationJsonErrorDescriptionEnum || (Rdcer401ApplicationJsonErrorDescriptionEnum = {}));
var Rdcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Rdcer401ApplicationJson, _super);
    function Rdcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rdcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rdcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Rdcer401ApplicationJson;
}(SpeakeasyBase));
export { Rdcer401ApplicationJson };
export var Rdcer404ApplicationJsonErrorEnum;
(function (Rdcer404ApplicationJsonErrorEnum) {
    Rdcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Rdcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Rdcer404ApplicationJsonErrorEnum || (Rdcer404ApplicationJsonErrorEnum = {}));
export var Rdcer404ApplicationJsonErrorDescriptionEnum;
(function (Rdcer404ApplicationJsonErrorDescriptionEnum) {
    Rdcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Rdcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Rdcer404ApplicationJsonErrorDescriptionEnum || (Rdcer404ApplicationJsonErrorDescriptionEnum = {}));
var Rdcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Rdcer404ApplicationJson, _super);
    function Rdcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rdcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rdcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Rdcer404ApplicationJson;
}(SpeakeasyBase));
export { Rdcer404ApplicationJson };
export var Rdcer500ApplicationJsonErrorEnum;
(function (Rdcer500ApplicationJsonErrorEnum) {
    Rdcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Rdcer500ApplicationJsonErrorEnum || (Rdcer500ApplicationJsonErrorEnum = {}));
export var Rdcer500ApplicationJsonErrorDescriptionEnum;
(function (Rdcer500ApplicationJsonErrorDescriptionEnum) {
    Rdcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Rdcer500ApplicationJsonErrorDescriptionEnum || (Rdcer500ApplicationJsonErrorDescriptionEnum = {}));
var Rdcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Rdcer500ApplicationJson, _super);
    function Rdcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rdcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rdcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Rdcer500ApplicationJson;
}(SpeakeasyBase));
export { Rdcer500ApplicationJson };
export var Rdcer502ApplicationJsonErrorEnum;
(function (Rdcer502ApplicationJsonErrorEnum) {
    Rdcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Rdcer502ApplicationJsonErrorEnum || (Rdcer502ApplicationJsonErrorEnum = {}));
export var Rdcer502ApplicationJsonErrorDescriptionEnum;
(function (Rdcer502ApplicationJsonErrorDescriptionEnum) {
    Rdcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Rdcer502ApplicationJsonErrorDescriptionEnum || (Rdcer502ApplicationJsonErrorDescriptionEnum = {}));
var Rdcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Rdcer502ApplicationJson, _super);
    function Rdcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rdcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rdcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Rdcer502ApplicationJson;
}(SpeakeasyBase));
export { Rdcer502ApplicationJson };
export var Rdcer503ApplicationJsonErrorEnum;
(function (Rdcer503ApplicationJsonErrorEnum) {
    Rdcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Rdcer503ApplicationJsonErrorEnum || (Rdcer503ApplicationJsonErrorEnum = {}));
export var Rdcer503ApplicationJsonErrorDescriptionEnum;
(function (Rdcer503ApplicationJsonErrorDescriptionEnum) {
    Rdcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Rdcer503ApplicationJsonErrorDescriptionEnum || (Rdcer503ApplicationJsonErrorDescriptionEnum = {}));
var Rdcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Rdcer503ApplicationJson, _super);
    function Rdcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rdcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rdcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Rdcer503ApplicationJson;
}(SpeakeasyBase));
export { Rdcer503ApplicationJson };
export var Rdcer504ApplicationJsonErrorEnum;
(function (Rdcer504ApplicationJsonErrorEnum) {
    Rdcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Rdcer504ApplicationJsonErrorEnum || (Rdcer504ApplicationJsonErrorEnum = {}));
export var Rdcer504ApplicationJsonErrorDescriptionEnum;
(function (Rdcer504ApplicationJsonErrorDescriptionEnum) {
    Rdcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Rdcer504ApplicationJsonErrorDescriptionEnum || (Rdcer504ApplicationJsonErrorDescriptionEnum = {}));
var Rdcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Rdcer504ApplicationJson, _super);
    function Rdcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rdcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rdcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Rdcer504ApplicationJson;
}(SpeakeasyBase));
export { Rdcer504ApplicationJson };
var RdcerResponse = /** @class */ (function (_super) {
    __extends(RdcerResponse, _super);
    function RdcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RdcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RdcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Rdcer400ApplicationJson)
    ], RdcerResponse.prototype, "rdcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Rdcer401ApplicationJson)
    ], RdcerResponse.prototype, "rdcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Rdcer404ApplicationJson)
    ], RdcerResponse.prototype, "rdcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Rdcer500ApplicationJson)
    ], RdcerResponse.prototype, "rdcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Rdcer502ApplicationJson)
    ], RdcerResponse.prototype, "rdcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Rdcer503ApplicationJson)
    ], RdcerResponse.prototype, "rdcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Rdcer504ApplicationJson)
    ], RdcerResponse.prototype, "rdcer504ApplicationJsonObject", void 0);
    return RdcerResponse;
}(SpeakeasyBase));
export { RdcerResponse };
