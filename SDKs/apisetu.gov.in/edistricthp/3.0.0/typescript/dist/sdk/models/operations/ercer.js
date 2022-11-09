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
var ErcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(ErcerRequestBodyCertificateParameters, _super);
    function ErcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], ErcerRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return ErcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { ErcerRequestBodyCertificateParameters };
export var ErcerRequestBodyFormatEnum;
(function (ErcerRequestBodyFormatEnum) {
    ErcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(ErcerRequestBodyFormatEnum || (ErcerRequestBodyFormatEnum = {}));
var ErcerRequestBody = /** @class */ (function (_super) {
    __extends(ErcerRequestBody, _super);
    function ErcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", ErcerRequestBodyCertificateParameters)
    ], ErcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], ErcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], ErcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], ErcerRequestBody.prototype, "txnId", void 0);
    return ErcerRequestBody;
}(SpeakeasyBase));
export { ErcerRequestBody };
var ErcerSecurity = /** @class */ (function (_super) {
    __extends(ErcerSecurity, _super);
    function ErcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ErcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], ErcerSecurity.prototype, "clientId", void 0);
    return ErcerSecurity;
}(SpeakeasyBase));
export { ErcerSecurity };
var ErcerRequest = /** @class */ (function (_super) {
    __extends(ErcerRequest, _super);
    function ErcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ErcerRequestBody)
    ], ErcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ErcerSecurity)
    ], ErcerRequest.prototype, "security", void 0);
    return ErcerRequest;
}(SpeakeasyBase));
export { ErcerRequest };
export var Ercer400ApplicationJsonErrorEnum;
(function (Ercer400ApplicationJsonErrorEnum) {
    Ercer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Ercer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Ercer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Ercer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Ercer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Ercer400ApplicationJsonErrorEnum || (Ercer400ApplicationJsonErrorEnum = {}));
export var Ercer400ApplicationJsonErrorDescriptionEnum;
(function (Ercer400ApplicationJsonErrorDescriptionEnum) {
    Ercer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Ercer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Ercer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Ercer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Ercer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Ercer400ApplicationJsonErrorDescriptionEnum || (Ercer400ApplicationJsonErrorDescriptionEnum = {}));
var Ercer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Ercer400ApplicationJson, _super);
    function Ercer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ercer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ercer400ApplicationJson.prototype, "errorDescription", void 0);
    return Ercer400ApplicationJson;
}(SpeakeasyBase));
export { Ercer400ApplicationJson };
export var Ercer401ApplicationJsonErrorEnum;
(function (Ercer401ApplicationJsonErrorEnum) {
    Ercer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Ercer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Ercer401ApplicationJsonErrorEnum || (Ercer401ApplicationJsonErrorEnum = {}));
export var Ercer401ApplicationJsonErrorDescriptionEnum;
(function (Ercer401ApplicationJsonErrorDescriptionEnum) {
    Ercer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Ercer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Ercer401ApplicationJsonErrorDescriptionEnum || (Ercer401ApplicationJsonErrorDescriptionEnum = {}));
var Ercer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Ercer401ApplicationJson, _super);
    function Ercer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ercer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ercer401ApplicationJson.prototype, "errorDescription", void 0);
    return Ercer401ApplicationJson;
}(SpeakeasyBase));
export { Ercer401ApplicationJson };
export var Ercer404ApplicationJsonErrorEnum;
(function (Ercer404ApplicationJsonErrorEnum) {
    Ercer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Ercer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Ercer404ApplicationJsonErrorEnum || (Ercer404ApplicationJsonErrorEnum = {}));
export var Ercer404ApplicationJsonErrorDescriptionEnum;
(function (Ercer404ApplicationJsonErrorDescriptionEnum) {
    Ercer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Ercer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Ercer404ApplicationJsonErrorDescriptionEnum || (Ercer404ApplicationJsonErrorDescriptionEnum = {}));
var Ercer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Ercer404ApplicationJson, _super);
    function Ercer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ercer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ercer404ApplicationJson.prototype, "errorDescription", void 0);
    return Ercer404ApplicationJson;
}(SpeakeasyBase));
export { Ercer404ApplicationJson };
export var Ercer500ApplicationJsonErrorEnum;
(function (Ercer500ApplicationJsonErrorEnum) {
    Ercer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Ercer500ApplicationJsonErrorEnum || (Ercer500ApplicationJsonErrorEnum = {}));
export var Ercer500ApplicationJsonErrorDescriptionEnum;
(function (Ercer500ApplicationJsonErrorDescriptionEnum) {
    Ercer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Ercer500ApplicationJsonErrorDescriptionEnum || (Ercer500ApplicationJsonErrorDescriptionEnum = {}));
var Ercer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Ercer500ApplicationJson, _super);
    function Ercer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ercer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ercer500ApplicationJson.prototype, "errorDescription", void 0);
    return Ercer500ApplicationJson;
}(SpeakeasyBase));
export { Ercer500ApplicationJson };
export var Ercer502ApplicationJsonErrorEnum;
(function (Ercer502ApplicationJsonErrorEnum) {
    Ercer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Ercer502ApplicationJsonErrorEnum || (Ercer502ApplicationJsonErrorEnum = {}));
export var Ercer502ApplicationJsonErrorDescriptionEnum;
(function (Ercer502ApplicationJsonErrorDescriptionEnum) {
    Ercer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Ercer502ApplicationJsonErrorDescriptionEnum || (Ercer502ApplicationJsonErrorDescriptionEnum = {}));
var Ercer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Ercer502ApplicationJson, _super);
    function Ercer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ercer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ercer502ApplicationJson.prototype, "errorDescription", void 0);
    return Ercer502ApplicationJson;
}(SpeakeasyBase));
export { Ercer502ApplicationJson };
export var Ercer503ApplicationJsonErrorEnum;
(function (Ercer503ApplicationJsonErrorEnum) {
    Ercer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Ercer503ApplicationJsonErrorEnum || (Ercer503ApplicationJsonErrorEnum = {}));
export var Ercer503ApplicationJsonErrorDescriptionEnum;
(function (Ercer503ApplicationJsonErrorDescriptionEnum) {
    Ercer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Ercer503ApplicationJsonErrorDescriptionEnum || (Ercer503ApplicationJsonErrorDescriptionEnum = {}));
var Ercer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Ercer503ApplicationJson, _super);
    function Ercer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ercer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ercer503ApplicationJson.prototype, "errorDescription", void 0);
    return Ercer503ApplicationJson;
}(SpeakeasyBase));
export { Ercer503ApplicationJson };
export var Ercer504ApplicationJsonErrorEnum;
(function (Ercer504ApplicationJsonErrorEnum) {
    Ercer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Ercer504ApplicationJsonErrorEnum || (Ercer504ApplicationJsonErrorEnum = {}));
export var Ercer504ApplicationJsonErrorDescriptionEnum;
(function (Ercer504ApplicationJsonErrorDescriptionEnum) {
    Ercer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Ercer504ApplicationJsonErrorDescriptionEnum || (Ercer504ApplicationJsonErrorDescriptionEnum = {}));
var Ercer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Ercer504ApplicationJson, _super);
    function Ercer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ercer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ercer504ApplicationJson.prototype, "errorDescription", void 0);
    return Ercer504ApplicationJson;
}(SpeakeasyBase));
export { Ercer504ApplicationJson };
var ErcerResponse = /** @class */ (function (_super) {
    __extends(ErcerResponse, _super);
    function ErcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ErcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ErcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ercer400ApplicationJson)
    ], ErcerResponse.prototype, "ercer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ercer401ApplicationJson)
    ], ErcerResponse.prototype, "ercer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ercer404ApplicationJson)
    ], ErcerResponse.prototype, "ercer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ercer500ApplicationJson)
    ], ErcerResponse.prototype, "ercer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ercer502ApplicationJson)
    ], ErcerResponse.prototype, "ercer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ercer503ApplicationJson)
    ], ErcerResponse.prototype, "ercer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ercer504ApplicationJson)
    ], ErcerResponse.prototype, "ercer504ApplicationJsonObject", void 0);
    return ErcerResponse;
}(SpeakeasyBase));
export { ErcerResponse };
