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
var FfcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(FfcerRequestBodyCertificateParameters, _super);
    function FfcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], FfcerRequestBodyCertificateParameters.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], FfcerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    return FfcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { FfcerRequestBodyCertificateParameters };
export var FfcerRequestBodyFormatEnum;
(function (FfcerRequestBodyFormatEnum) {
    FfcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(FfcerRequestBodyFormatEnum || (FfcerRequestBodyFormatEnum = {}));
var FfcerRequestBody = /** @class */ (function (_super) {
    __extends(FfcerRequestBody, _super);
    function FfcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", FfcerRequestBodyCertificateParameters)
    ], FfcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], FfcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], FfcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], FfcerRequestBody.prototype, "txnId", void 0);
    return FfcerRequestBody;
}(SpeakeasyBase));
export { FfcerRequestBody };
var FfcerSecurity = /** @class */ (function (_super) {
    __extends(FfcerSecurity, _super);
    function FfcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], FfcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], FfcerSecurity.prototype, "clientId", void 0);
    return FfcerSecurity;
}(SpeakeasyBase));
export { FfcerSecurity };
var FfcerRequest = /** @class */ (function (_super) {
    __extends(FfcerRequest, _super);
    function FfcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", FfcerRequestBody)
    ], FfcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FfcerSecurity)
    ], FfcerRequest.prototype, "security", void 0);
    return FfcerRequest;
}(SpeakeasyBase));
export { FfcerRequest };
export var Ffcer400ApplicationJsonErrorEnum;
(function (Ffcer400ApplicationJsonErrorEnum) {
    Ffcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Ffcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Ffcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Ffcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Ffcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Ffcer400ApplicationJsonErrorEnum || (Ffcer400ApplicationJsonErrorEnum = {}));
export var Ffcer400ApplicationJsonErrorDescriptionEnum;
(function (Ffcer400ApplicationJsonErrorDescriptionEnum) {
    Ffcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Ffcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Ffcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Ffcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Ffcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Ffcer400ApplicationJsonErrorDescriptionEnum || (Ffcer400ApplicationJsonErrorDescriptionEnum = {}));
var Ffcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Ffcer400ApplicationJson, _super);
    function Ffcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ffcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ffcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Ffcer400ApplicationJson;
}(SpeakeasyBase));
export { Ffcer400ApplicationJson };
export var Ffcer401ApplicationJsonErrorEnum;
(function (Ffcer401ApplicationJsonErrorEnum) {
    Ffcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Ffcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Ffcer401ApplicationJsonErrorEnum || (Ffcer401ApplicationJsonErrorEnum = {}));
export var Ffcer401ApplicationJsonErrorDescriptionEnum;
(function (Ffcer401ApplicationJsonErrorDescriptionEnum) {
    Ffcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Ffcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Ffcer401ApplicationJsonErrorDescriptionEnum || (Ffcer401ApplicationJsonErrorDescriptionEnum = {}));
var Ffcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Ffcer401ApplicationJson, _super);
    function Ffcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ffcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ffcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Ffcer401ApplicationJson;
}(SpeakeasyBase));
export { Ffcer401ApplicationJson };
export var Ffcer404ApplicationJsonErrorEnum;
(function (Ffcer404ApplicationJsonErrorEnum) {
    Ffcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Ffcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Ffcer404ApplicationJsonErrorEnum || (Ffcer404ApplicationJsonErrorEnum = {}));
export var Ffcer404ApplicationJsonErrorDescriptionEnum;
(function (Ffcer404ApplicationJsonErrorDescriptionEnum) {
    Ffcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Ffcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Ffcer404ApplicationJsonErrorDescriptionEnum || (Ffcer404ApplicationJsonErrorDescriptionEnum = {}));
var Ffcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Ffcer404ApplicationJson, _super);
    function Ffcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ffcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ffcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Ffcer404ApplicationJson;
}(SpeakeasyBase));
export { Ffcer404ApplicationJson };
export var Ffcer500ApplicationJsonErrorEnum;
(function (Ffcer500ApplicationJsonErrorEnum) {
    Ffcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Ffcer500ApplicationJsonErrorEnum || (Ffcer500ApplicationJsonErrorEnum = {}));
export var Ffcer500ApplicationJsonErrorDescriptionEnum;
(function (Ffcer500ApplicationJsonErrorDescriptionEnum) {
    Ffcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Ffcer500ApplicationJsonErrorDescriptionEnum || (Ffcer500ApplicationJsonErrorDescriptionEnum = {}));
var Ffcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Ffcer500ApplicationJson, _super);
    function Ffcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ffcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ffcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Ffcer500ApplicationJson;
}(SpeakeasyBase));
export { Ffcer500ApplicationJson };
export var Ffcer502ApplicationJsonErrorEnum;
(function (Ffcer502ApplicationJsonErrorEnum) {
    Ffcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Ffcer502ApplicationJsonErrorEnum || (Ffcer502ApplicationJsonErrorEnum = {}));
export var Ffcer502ApplicationJsonErrorDescriptionEnum;
(function (Ffcer502ApplicationJsonErrorDescriptionEnum) {
    Ffcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Ffcer502ApplicationJsonErrorDescriptionEnum || (Ffcer502ApplicationJsonErrorDescriptionEnum = {}));
var Ffcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Ffcer502ApplicationJson, _super);
    function Ffcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ffcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ffcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Ffcer502ApplicationJson;
}(SpeakeasyBase));
export { Ffcer502ApplicationJson };
export var Ffcer503ApplicationJsonErrorEnum;
(function (Ffcer503ApplicationJsonErrorEnum) {
    Ffcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Ffcer503ApplicationJsonErrorEnum || (Ffcer503ApplicationJsonErrorEnum = {}));
export var Ffcer503ApplicationJsonErrorDescriptionEnum;
(function (Ffcer503ApplicationJsonErrorDescriptionEnum) {
    Ffcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Ffcer503ApplicationJsonErrorDescriptionEnum || (Ffcer503ApplicationJsonErrorDescriptionEnum = {}));
var Ffcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Ffcer503ApplicationJson, _super);
    function Ffcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ffcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ffcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Ffcer503ApplicationJson;
}(SpeakeasyBase));
export { Ffcer503ApplicationJson };
export var Ffcer504ApplicationJsonErrorEnum;
(function (Ffcer504ApplicationJsonErrorEnum) {
    Ffcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Ffcer504ApplicationJsonErrorEnum || (Ffcer504ApplicationJsonErrorEnum = {}));
export var Ffcer504ApplicationJsonErrorDescriptionEnum;
(function (Ffcer504ApplicationJsonErrorDescriptionEnum) {
    Ffcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Ffcer504ApplicationJsonErrorDescriptionEnum || (Ffcer504ApplicationJsonErrorDescriptionEnum = {}));
var Ffcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Ffcer504ApplicationJson, _super);
    function Ffcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ffcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ffcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Ffcer504ApplicationJson;
}(SpeakeasyBase));
export { Ffcer504ApplicationJson };
var FfcerResponse = /** @class */ (function (_super) {
    __extends(FfcerResponse, _super);
    function FfcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FfcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FfcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ffcer400ApplicationJson)
    ], FfcerResponse.prototype, "ffcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ffcer401ApplicationJson)
    ], FfcerResponse.prototype, "ffcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ffcer404ApplicationJson)
    ], FfcerResponse.prototype, "ffcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ffcer500ApplicationJson)
    ], FfcerResponse.prototype, "ffcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ffcer502ApplicationJson)
    ], FfcerResponse.prototype, "ffcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ffcer503ApplicationJson)
    ], FfcerResponse.prototype, "ffcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ffcer504ApplicationJson)
    ], FfcerResponse.prototype, "ffcer504ApplicationJsonObject", void 0);
    return FfcerResponse;
}(SpeakeasyBase));
export { FfcerResponse };
