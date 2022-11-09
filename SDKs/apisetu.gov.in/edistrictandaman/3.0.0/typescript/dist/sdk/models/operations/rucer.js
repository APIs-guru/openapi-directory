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
var RucerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RucerRequestBodyCertificateParameters, _super);
    function RucerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CertificateNumber" }),
        __metadata("design:type", String)
    ], RucerRequestBodyCertificateParameters.prototype, "certificateNumber", void 0);
    return RucerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { RucerRequestBodyCertificateParameters };
export var RucerRequestBodyFormatEnum;
(function (RucerRequestBodyFormatEnum) {
    RucerRequestBodyFormatEnum["Pdf"] = "pdf";
})(RucerRequestBodyFormatEnum || (RucerRequestBodyFormatEnum = {}));
var RucerRequestBody = /** @class */ (function (_super) {
    __extends(RucerRequestBody, _super);
    function RucerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RucerRequestBodyCertificateParameters)
    ], RucerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RucerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RucerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RucerRequestBody.prototype, "txnId", void 0);
    return RucerRequestBody;
}(SpeakeasyBase));
export { RucerRequestBody };
var RucerSecurity = /** @class */ (function (_super) {
    __extends(RucerSecurity, _super);
    function RucerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RucerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RucerSecurity.prototype, "clientId", void 0);
    return RucerSecurity;
}(SpeakeasyBase));
export { RucerSecurity };
var RucerRequest = /** @class */ (function (_super) {
    __extends(RucerRequest, _super);
    function RucerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RucerRequestBody)
    ], RucerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RucerSecurity)
    ], RucerRequest.prototype, "security", void 0);
    return RucerRequest;
}(SpeakeasyBase));
export { RucerRequest };
export var Rucer400ApplicationJsonErrorEnum;
(function (Rucer400ApplicationJsonErrorEnum) {
    Rucer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Rucer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Rucer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Rucer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Rucer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Rucer400ApplicationJsonErrorEnum || (Rucer400ApplicationJsonErrorEnum = {}));
export var Rucer400ApplicationJsonErrorDescriptionEnum;
(function (Rucer400ApplicationJsonErrorDescriptionEnum) {
    Rucer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Rucer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Rucer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Rucer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Rucer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Rucer400ApplicationJsonErrorDescriptionEnum || (Rucer400ApplicationJsonErrorDescriptionEnum = {}));
var Rucer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Rucer400ApplicationJson, _super);
    function Rucer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rucer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rucer400ApplicationJson.prototype, "errorDescription", void 0);
    return Rucer400ApplicationJson;
}(SpeakeasyBase));
export { Rucer400ApplicationJson };
export var Rucer401ApplicationJsonErrorEnum;
(function (Rucer401ApplicationJsonErrorEnum) {
    Rucer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Rucer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Rucer401ApplicationJsonErrorEnum || (Rucer401ApplicationJsonErrorEnum = {}));
export var Rucer401ApplicationJsonErrorDescriptionEnum;
(function (Rucer401ApplicationJsonErrorDescriptionEnum) {
    Rucer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Rucer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Rucer401ApplicationJsonErrorDescriptionEnum || (Rucer401ApplicationJsonErrorDescriptionEnum = {}));
var Rucer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Rucer401ApplicationJson, _super);
    function Rucer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rucer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rucer401ApplicationJson.prototype, "errorDescription", void 0);
    return Rucer401ApplicationJson;
}(SpeakeasyBase));
export { Rucer401ApplicationJson };
export var Rucer404ApplicationJsonErrorEnum;
(function (Rucer404ApplicationJsonErrorEnum) {
    Rucer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Rucer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Rucer404ApplicationJsonErrorEnum || (Rucer404ApplicationJsonErrorEnum = {}));
export var Rucer404ApplicationJsonErrorDescriptionEnum;
(function (Rucer404ApplicationJsonErrorDescriptionEnum) {
    Rucer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Rucer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Rucer404ApplicationJsonErrorDescriptionEnum || (Rucer404ApplicationJsonErrorDescriptionEnum = {}));
var Rucer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Rucer404ApplicationJson, _super);
    function Rucer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rucer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rucer404ApplicationJson.prototype, "errorDescription", void 0);
    return Rucer404ApplicationJson;
}(SpeakeasyBase));
export { Rucer404ApplicationJson };
export var Rucer500ApplicationJsonErrorEnum;
(function (Rucer500ApplicationJsonErrorEnum) {
    Rucer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Rucer500ApplicationJsonErrorEnum || (Rucer500ApplicationJsonErrorEnum = {}));
export var Rucer500ApplicationJsonErrorDescriptionEnum;
(function (Rucer500ApplicationJsonErrorDescriptionEnum) {
    Rucer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Rucer500ApplicationJsonErrorDescriptionEnum || (Rucer500ApplicationJsonErrorDescriptionEnum = {}));
var Rucer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Rucer500ApplicationJson, _super);
    function Rucer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rucer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rucer500ApplicationJson.prototype, "errorDescription", void 0);
    return Rucer500ApplicationJson;
}(SpeakeasyBase));
export { Rucer500ApplicationJson };
export var Rucer502ApplicationJsonErrorEnum;
(function (Rucer502ApplicationJsonErrorEnum) {
    Rucer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Rucer502ApplicationJsonErrorEnum || (Rucer502ApplicationJsonErrorEnum = {}));
export var Rucer502ApplicationJsonErrorDescriptionEnum;
(function (Rucer502ApplicationJsonErrorDescriptionEnum) {
    Rucer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Rucer502ApplicationJsonErrorDescriptionEnum || (Rucer502ApplicationJsonErrorDescriptionEnum = {}));
var Rucer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Rucer502ApplicationJson, _super);
    function Rucer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rucer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rucer502ApplicationJson.prototype, "errorDescription", void 0);
    return Rucer502ApplicationJson;
}(SpeakeasyBase));
export { Rucer502ApplicationJson };
export var Rucer503ApplicationJsonErrorEnum;
(function (Rucer503ApplicationJsonErrorEnum) {
    Rucer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Rucer503ApplicationJsonErrorEnum || (Rucer503ApplicationJsonErrorEnum = {}));
export var Rucer503ApplicationJsonErrorDescriptionEnum;
(function (Rucer503ApplicationJsonErrorDescriptionEnum) {
    Rucer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Rucer503ApplicationJsonErrorDescriptionEnum || (Rucer503ApplicationJsonErrorDescriptionEnum = {}));
var Rucer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Rucer503ApplicationJson, _super);
    function Rucer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rucer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rucer503ApplicationJson.prototype, "errorDescription", void 0);
    return Rucer503ApplicationJson;
}(SpeakeasyBase));
export { Rucer503ApplicationJson };
export var Rucer504ApplicationJsonErrorEnum;
(function (Rucer504ApplicationJsonErrorEnum) {
    Rucer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Rucer504ApplicationJsonErrorEnum || (Rucer504ApplicationJsonErrorEnum = {}));
export var Rucer504ApplicationJsonErrorDescriptionEnum;
(function (Rucer504ApplicationJsonErrorDescriptionEnum) {
    Rucer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Rucer504ApplicationJsonErrorDescriptionEnum || (Rucer504ApplicationJsonErrorDescriptionEnum = {}));
var Rucer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Rucer504ApplicationJson, _super);
    function Rucer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rucer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rucer504ApplicationJson.prototype, "errorDescription", void 0);
    return Rucer504ApplicationJson;
}(SpeakeasyBase));
export { Rucer504ApplicationJson };
var RucerResponse = /** @class */ (function (_super) {
    __extends(RucerResponse, _super);
    function RucerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RucerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RucerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Rucer400ApplicationJson)
    ], RucerResponse.prototype, "rucer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Rucer401ApplicationJson)
    ], RucerResponse.prototype, "rucer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Rucer404ApplicationJson)
    ], RucerResponse.prototype, "rucer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Rucer500ApplicationJson)
    ], RucerResponse.prototype, "rucer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Rucer502ApplicationJson)
    ], RucerResponse.prototype, "rucer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Rucer503ApplicationJson)
    ], RucerResponse.prototype, "rucer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Rucer504ApplicationJson)
    ], RucerResponse.prototype, "rucer504ApplicationJsonObject", void 0);
    return RucerResponse;
}(SpeakeasyBase));
export { RucerResponse };
