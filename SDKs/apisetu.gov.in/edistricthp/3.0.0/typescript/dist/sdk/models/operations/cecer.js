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
var CecerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(CecerRequestBodyCertificateParameters, _super);
    function CecerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], CecerRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return CecerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { CecerRequestBodyCertificateParameters };
export var CecerRequestBodyFormatEnum;
(function (CecerRequestBodyFormatEnum) {
    CecerRequestBodyFormatEnum["Pdf"] = "pdf";
})(CecerRequestBodyFormatEnum || (CecerRequestBodyFormatEnum = {}));
var CecerRequestBody = /** @class */ (function (_super) {
    __extends(CecerRequestBody, _super);
    function CecerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", CecerRequestBodyCertificateParameters)
    ], CecerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], CecerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CecerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], CecerRequestBody.prototype, "txnId", void 0);
    return CecerRequestBody;
}(SpeakeasyBase));
export { CecerRequestBody };
var CecerSecurity = /** @class */ (function (_super) {
    __extends(CecerSecurity, _super);
    function CecerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CecerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], CecerSecurity.prototype, "clientId", void 0);
    return CecerSecurity;
}(SpeakeasyBase));
export { CecerSecurity };
var CecerRequest = /** @class */ (function (_super) {
    __extends(CecerRequest, _super);
    function CecerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CecerRequestBody)
    ], CecerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CecerSecurity)
    ], CecerRequest.prototype, "security", void 0);
    return CecerRequest;
}(SpeakeasyBase));
export { CecerRequest };
export var Cecer400ApplicationJsonErrorEnum;
(function (Cecer400ApplicationJsonErrorEnum) {
    Cecer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Cecer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Cecer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Cecer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Cecer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Cecer400ApplicationJsonErrorEnum || (Cecer400ApplicationJsonErrorEnum = {}));
export var Cecer400ApplicationJsonErrorDescriptionEnum;
(function (Cecer400ApplicationJsonErrorDescriptionEnum) {
    Cecer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Cecer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Cecer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Cecer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Cecer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Cecer400ApplicationJsonErrorDescriptionEnum || (Cecer400ApplicationJsonErrorDescriptionEnum = {}));
var Cecer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Cecer400ApplicationJson, _super);
    function Cecer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cecer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cecer400ApplicationJson.prototype, "errorDescription", void 0);
    return Cecer400ApplicationJson;
}(SpeakeasyBase));
export { Cecer400ApplicationJson };
export var Cecer401ApplicationJsonErrorEnum;
(function (Cecer401ApplicationJsonErrorEnum) {
    Cecer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Cecer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Cecer401ApplicationJsonErrorEnum || (Cecer401ApplicationJsonErrorEnum = {}));
export var Cecer401ApplicationJsonErrorDescriptionEnum;
(function (Cecer401ApplicationJsonErrorDescriptionEnum) {
    Cecer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Cecer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Cecer401ApplicationJsonErrorDescriptionEnum || (Cecer401ApplicationJsonErrorDescriptionEnum = {}));
var Cecer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Cecer401ApplicationJson, _super);
    function Cecer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cecer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cecer401ApplicationJson.prototype, "errorDescription", void 0);
    return Cecer401ApplicationJson;
}(SpeakeasyBase));
export { Cecer401ApplicationJson };
export var Cecer404ApplicationJsonErrorEnum;
(function (Cecer404ApplicationJsonErrorEnum) {
    Cecer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Cecer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Cecer404ApplicationJsonErrorEnum || (Cecer404ApplicationJsonErrorEnum = {}));
export var Cecer404ApplicationJsonErrorDescriptionEnum;
(function (Cecer404ApplicationJsonErrorDescriptionEnum) {
    Cecer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Cecer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Cecer404ApplicationJsonErrorDescriptionEnum || (Cecer404ApplicationJsonErrorDescriptionEnum = {}));
var Cecer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Cecer404ApplicationJson, _super);
    function Cecer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cecer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cecer404ApplicationJson.prototype, "errorDescription", void 0);
    return Cecer404ApplicationJson;
}(SpeakeasyBase));
export { Cecer404ApplicationJson };
export var Cecer500ApplicationJsonErrorEnum;
(function (Cecer500ApplicationJsonErrorEnum) {
    Cecer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Cecer500ApplicationJsonErrorEnum || (Cecer500ApplicationJsonErrorEnum = {}));
export var Cecer500ApplicationJsonErrorDescriptionEnum;
(function (Cecer500ApplicationJsonErrorDescriptionEnum) {
    Cecer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Cecer500ApplicationJsonErrorDescriptionEnum || (Cecer500ApplicationJsonErrorDescriptionEnum = {}));
var Cecer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Cecer500ApplicationJson, _super);
    function Cecer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cecer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cecer500ApplicationJson.prototype, "errorDescription", void 0);
    return Cecer500ApplicationJson;
}(SpeakeasyBase));
export { Cecer500ApplicationJson };
export var Cecer502ApplicationJsonErrorEnum;
(function (Cecer502ApplicationJsonErrorEnum) {
    Cecer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Cecer502ApplicationJsonErrorEnum || (Cecer502ApplicationJsonErrorEnum = {}));
export var Cecer502ApplicationJsonErrorDescriptionEnum;
(function (Cecer502ApplicationJsonErrorDescriptionEnum) {
    Cecer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Cecer502ApplicationJsonErrorDescriptionEnum || (Cecer502ApplicationJsonErrorDescriptionEnum = {}));
var Cecer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Cecer502ApplicationJson, _super);
    function Cecer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cecer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cecer502ApplicationJson.prototype, "errorDescription", void 0);
    return Cecer502ApplicationJson;
}(SpeakeasyBase));
export { Cecer502ApplicationJson };
export var Cecer503ApplicationJsonErrorEnum;
(function (Cecer503ApplicationJsonErrorEnum) {
    Cecer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Cecer503ApplicationJsonErrorEnum || (Cecer503ApplicationJsonErrorEnum = {}));
export var Cecer503ApplicationJsonErrorDescriptionEnum;
(function (Cecer503ApplicationJsonErrorDescriptionEnum) {
    Cecer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Cecer503ApplicationJsonErrorDescriptionEnum || (Cecer503ApplicationJsonErrorDescriptionEnum = {}));
var Cecer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Cecer503ApplicationJson, _super);
    function Cecer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cecer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cecer503ApplicationJson.prototype, "errorDescription", void 0);
    return Cecer503ApplicationJson;
}(SpeakeasyBase));
export { Cecer503ApplicationJson };
export var Cecer504ApplicationJsonErrorEnum;
(function (Cecer504ApplicationJsonErrorEnum) {
    Cecer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Cecer504ApplicationJsonErrorEnum || (Cecer504ApplicationJsonErrorEnum = {}));
export var Cecer504ApplicationJsonErrorDescriptionEnum;
(function (Cecer504ApplicationJsonErrorDescriptionEnum) {
    Cecer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Cecer504ApplicationJsonErrorDescriptionEnum || (Cecer504ApplicationJsonErrorDescriptionEnum = {}));
var Cecer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Cecer504ApplicationJson, _super);
    function Cecer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cecer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cecer504ApplicationJson.prototype, "errorDescription", void 0);
    return Cecer504ApplicationJson;
}(SpeakeasyBase));
export { Cecer504ApplicationJson };
var CecerResponse = /** @class */ (function (_super) {
    __extends(CecerResponse, _super);
    function CecerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CecerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CecerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Cecer400ApplicationJson)
    ], CecerResponse.prototype, "cecer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Cecer401ApplicationJson)
    ], CecerResponse.prototype, "cecer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Cecer404ApplicationJson)
    ], CecerResponse.prototype, "cecer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Cecer500ApplicationJson)
    ], CecerResponse.prototype, "cecer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Cecer502ApplicationJson)
    ], CecerResponse.prototype, "cecer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Cecer503ApplicationJson)
    ], CecerResponse.prototype, "cecer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Cecer504ApplicationJson)
    ], CecerResponse.prototype, "cecer504ApplicationJsonObject", void 0);
    return CecerResponse;
}(SpeakeasyBase));
export { CecerResponse };
