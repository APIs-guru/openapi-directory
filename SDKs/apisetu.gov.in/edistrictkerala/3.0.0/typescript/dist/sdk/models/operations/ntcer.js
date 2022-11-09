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
var NtcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(NtcerRequestBodyCertificateParameters, _super);
    function NtcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], NtcerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        Metadata({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], NtcerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        Metadata({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], NtcerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return NtcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { NtcerRequestBodyCertificateParameters };
export var NtcerRequestBodyFormatEnum;
(function (NtcerRequestBodyFormatEnum) {
    NtcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(NtcerRequestBodyFormatEnum || (NtcerRequestBodyFormatEnum = {}));
var NtcerRequestBody = /** @class */ (function (_super) {
    __extends(NtcerRequestBody, _super);
    function NtcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", NtcerRequestBodyCertificateParameters)
    ], NtcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], NtcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], NtcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], NtcerRequestBody.prototype, "txnId", void 0);
    return NtcerRequestBody;
}(SpeakeasyBase));
export { NtcerRequestBody };
var NtcerSecurity = /** @class */ (function (_super) {
    __extends(NtcerSecurity, _super);
    function NtcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], NtcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], NtcerSecurity.prototype, "clientId", void 0);
    return NtcerSecurity;
}(SpeakeasyBase));
export { NtcerSecurity };
var NtcerRequest = /** @class */ (function (_super) {
    __extends(NtcerRequest, _super);
    function NtcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", NtcerRequestBody)
    ], NtcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NtcerSecurity)
    ], NtcerRequest.prototype, "security", void 0);
    return NtcerRequest;
}(SpeakeasyBase));
export { NtcerRequest };
export var Ntcer400ApplicationJsonErrorEnum;
(function (Ntcer400ApplicationJsonErrorEnum) {
    Ntcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Ntcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Ntcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Ntcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Ntcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Ntcer400ApplicationJsonErrorEnum || (Ntcer400ApplicationJsonErrorEnum = {}));
export var Ntcer400ApplicationJsonErrorDescriptionEnum;
(function (Ntcer400ApplicationJsonErrorDescriptionEnum) {
    Ntcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Ntcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Ntcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Ntcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Ntcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Ntcer400ApplicationJsonErrorDescriptionEnum || (Ntcer400ApplicationJsonErrorDescriptionEnum = {}));
var Ntcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntcer400ApplicationJson, _super);
    function Ntcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Ntcer400ApplicationJson;
}(SpeakeasyBase));
export { Ntcer400ApplicationJson };
export var Ntcer401ApplicationJsonErrorEnum;
(function (Ntcer401ApplicationJsonErrorEnum) {
    Ntcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Ntcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Ntcer401ApplicationJsonErrorEnum || (Ntcer401ApplicationJsonErrorEnum = {}));
export var Ntcer401ApplicationJsonErrorDescriptionEnum;
(function (Ntcer401ApplicationJsonErrorDescriptionEnum) {
    Ntcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Ntcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Ntcer401ApplicationJsonErrorDescriptionEnum || (Ntcer401ApplicationJsonErrorDescriptionEnum = {}));
var Ntcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntcer401ApplicationJson, _super);
    function Ntcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Ntcer401ApplicationJson;
}(SpeakeasyBase));
export { Ntcer401ApplicationJson };
export var Ntcer404ApplicationJsonErrorEnum;
(function (Ntcer404ApplicationJsonErrorEnum) {
    Ntcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Ntcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Ntcer404ApplicationJsonErrorEnum || (Ntcer404ApplicationJsonErrorEnum = {}));
export var Ntcer404ApplicationJsonErrorDescriptionEnum;
(function (Ntcer404ApplicationJsonErrorDescriptionEnum) {
    Ntcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Ntcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Ntcer404ApplicationJsonErrorDescriptionEnum || (Ntcer404ApplicationJsonErrorDescriptionEnum = {}));
var Ntcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntcer404ApplicationJson, _super);
    function Ntcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Ntcer404ApplicationJson;
}(SpeakeasyBase));
export { Ntcer404ApplicationJson };
export var Ntcer500ApplicationJsonErrorEnum;
(function (Ntcer500ApplicationJsonErrorEnum) {
    Ntcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Ntcer500ApplicationJsonErrorEnum || (Ntcer500ApplicationJsonErrorEnum = {}));
export var Ntcer500ApplicationJsonErrorDescriptionEnum;
(function (Ntcer500ApplicationJsonErrorDescriptionEnum) {
    Ntcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Ntcer500ApplicationJsonErrorDescriptionEnum || (Ntcer500ApplicationJsonErrorDescriptionEnum = {}));
var Ntcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntcer500ApplicationJson, _super);
    function Ntcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Ntcer500ApplicationJson;
}(SpeakeasyBase));
export { Ntcer500ApplicationJson };
export var Ntcer502ApplicationJsonErrorEnum;
(function (Ntcer502ApplicationJsonErrorEnum) {
    Ntcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Ntcer502ApplicationJsonErrorEnum || (Ntcer502ApplicationJsonErrorEnum = {}));
export var Ntcer502ApplicationJsonErrorDescriptionEnum;
(function (Ntcer502ApplicationJsonErrorDescriptionEnum) {
    Ntcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Ntcer502ApplicationJsonErrorDescriptionEnum || (Ntcer502ApplicationJsonErrorDescriptionEnum = {}));
var Ntcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntcer502ApplicationJson, _super);
    function Ntcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Ntcer502ApplicationJson;
}(SpeakeasyBase));
export { Ntcer502ApplicationJson };
export var Ntcer503ApplicationJsonErrorEnum;
(function (Ntcer503ApplicationJsonErrorEnum) {
    Ntcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Ntcer503ApplicationJsonErrorEnum || (Ntcer503ApplicationJsonErrorEnum = {}));
export var Ntcer503ApplicationJsonErrorDescriptionEnum;
(function (Ntcer503ApplicationJsonErrorDescriptionEnum) {
    Ntcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Ntcer503ApplicationJsonErrorDescriptionEnum || (Ntcer503ApplicationJsonErrorDescriptionEnum = {}));
var Ntcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntcer503ApplicationJson, _super);
    function Ntcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Ntcer503ApplicationJson;
}(SpeakeasyBase));
export { Ntcer503ApplicationJson };
export var Ntcer504ApplicationJsonErrorEnum;
(function (Ntcer504ApplicationJsonErrorEnum) {
    Ntcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Ntcer504ApplicationJsonErrorEnum || (Ntcer504ApplicationJsonErrorEnum = {}));
export var Ntcer504ApplicationJsonErrorDescriptionEnum;
(function (Ntcer504ApplicationJsonErrorDescriptionEnum) {
    Ntcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Ntcer504ApplicationJsonErrorDescriptionEnum || (Ntcer504ApplicationJsonErrorDescriptionEnum = {}));
var Ntcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntcer504ApplicationJson, _super);
    function Ntcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Ntcer504ApplicationJson;
}(SpeakeasyBase));
export { Ntcer504ApplicationJson };
var NtcerResponse = /** @class */ (function (_super) {
    __extends(NtcerResponse, _super);
    function NtcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NtcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NtcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ntcer400ApplicationJson)
    ], NtcerResponse.prototype, "ntcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ntcer401ApplicationJson)
    ], NtcerResponse.prototype, "ntcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ntcer404ApplicationJson)
    ], NtcerResponse.prototype, "ntcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ntcer500ApplicationJson)
    ], NtcerResponse.prototype, "ntcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ntcer502ApplicationJson)
    ], NtcerResponse.prototype, "ntcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ntcer503ApplicationJson)
    ], NtcerResponse.prototype, "ntcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ntcer504ApplicationJson)
    ], NtcerResponse.prototype, "ntcer504ApplicationJsonObject", void 0);
    return NtcerResponse;
}(SpeakeasyBase));
export { NtcerResponse };
