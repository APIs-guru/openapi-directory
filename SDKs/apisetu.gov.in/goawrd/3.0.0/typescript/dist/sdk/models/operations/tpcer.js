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
var TpcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(TpcerRequestBodyCertificateParameters, _super);
    function TpcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], TpcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=Registration" }),
        __metadata("design:type", String)
    ], TpcerRequestBodyCertificateParameters.prototype, "registration", void 0);
    return TpcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { TpcerRequestBodyCertificateParameters };
export var TpcerRequestBodyFormatEnum;
(function (TpcerRequestBodyFormatEnum) {
    TpcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(TpcerRequestBodyFormatEnum || (TpcerRequestBodyFormatEnum = {}));
var TpcerRequestBody = /** @class */ (function (_super) {
    __extends(TpcerRequestBody, _super);
    function TpcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", TpcerRequestBodyCertificateParameters)
    ], TpcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], TpcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], TpcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], TpcerRequestBody.prototype, "txnId", void 0);
    return TpcerRequestBody;
}(SpeakeasyBase));
export { TpcerRequestBody };
var TpcerSecurity = /** @class */ (function (_super) {
    __extends(TpcerSecurity, _super);
    function TpcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], TpcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], TpcerSecurity.prototype, "clientId", void 0);
    return TpcerSecurity;
}(SpeakeasyBase));
export { TpcerSecurity };
var TpcerRequest = /** @class */ (function (_super) {
    __extends(TpcerRequest, _super);
    function TpcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TpcerRequestBody)
    ], TpcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TpcerSecurity)
    ], TpcerRequest.prototype, "security", void 0);
    return TpcerRequest;
}(SpeakeasyBase));
export { TpcerRequest };
export var Tpcer400ApplicationJsonErrorEnum;
(function (Tpcer400ApplicationJsonErrorEnum) {
    Tpcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Tpcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Tpcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Tpcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Tpcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Tpcer400ApplicationJsonErrorEnum || (Tpcer400ApplicationJsonErrorEnum = {}));
export var Tpcer400ApplicationJsonErrorDescriptionEnum;
(function (Tpcer400ApplicationJsonErrorDescriptionEnum) {
    Tpcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Tpcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Tpcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Tpcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Tpcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Tpcer400ApplicationJsonErrorDescriptionEnum || (Tpcer400ApplicationJsonErrorDescriptionEnum = {}));
var Tpcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Tpcer400ApplicationJson, _super);
    function Tpcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tpcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tpcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Tpcer400ApplicationJson;
}(SpeakeasyBase));
export { Tpcer400ApplicationJson };
export var Tpcer401ApplicationJsonErrorEnum;
(function (Tpcer401ApplicationJsonErrorEnum) {
    Tpcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Tpcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Tpcer401ApplicationJsonErrorEnum || (Tpcer401ApplicationJsonErrorEnum = {}));
export var Tpcer401ApplicationJsonErrorDescriptionEnum;
(function (Tpcer401ApplicationJsonErrorDescriptionEnum) {
    Tpcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Tpcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Tpcer401ApplicationJsonErrorDescriptionEnum || (Tpcer401ApplicationJsonErrorDescriptionEnum = {}));
var Tpcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Tpcer401ApplicationJson, _super);
    function Tpcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tpcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tpcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Tpcer401ApplicationJson;
}(SpeakeasyBase));
export { Tpcer401ApplicationJson };
export var Tpcer404ApplicationJsonErrorEnum;
(function (Tpcer404ApplicationJsonErrorEnum) {
    Tpcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Tpcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Tpcer404ApplicationJsonErrorEnum || (Tpcer404ApplicationJsonErrorEnum = {}));
export var Tpcer404ApplicationJsonErrorDescriptionEnum;
(function (Tpcer404ApplicationJsonErrorDescriptionEnum) {
    Tpcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Tpcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Tpcer404ApplicationJsonErrorDescriptionEnum || (Tpcer404ApplicationJsonErrorDescriptionEnum = {}));
var Tpcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Tpcer404ApplicationJson, _super);
    function Tpcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tpcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tpcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Tpcer404ApplicationJson;
}(SpeakeasyBase));
export { Tpcer404ApplicationJson };
export var Tpcer500ApplicationJsonErrorEnum;
(function (Tpcer500ApplicationJsonErrorEnum) {
    Tpcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Tpcer500ApplicationJsonErrorEnum || (Tpcer500ApplicationJsonErrorEnum = {}));
export var Tpcer500ApplicationJsonErrorDescriptionEnum;
(function (Tpcer500ApplicationJsonErrorDescriptionEnum) {
    Tpcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Tpcer500ApplicationJsonErrorDescriptionEnum || (Tpcer500ApplicationJsonErrorDescriptionEnum = {}));
var Tpcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Tpcer500ApplicationJson, _super);
    function Tpcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tpcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tpcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Tpcer500ApplicationJson;
}(SpeakeasyBase));
export { Tpcer500ApplicationJson };
export var Tpcer502ApplicationJsonErrorEnum;
(function (Tpcer502ApplicationJsonErrorEnum) {
    Tpcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Tpcer502ApplicationJsonErrorEnum || (Tpcer502ApplicationJsonErrorEnum = {}));
export var Tpcer502ApplicationJsonErrorDescriptionEnum;
(function (Tpcer502ApplicationJsonErrorDescriptionEnum) {
    Tpcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Tpcer502ApplicationJsonErrorDescriptionEnum || (Tpcer502ApplicationJsonErrorDescriptionEnum = {}));
var Tpcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Tpcer502ApplicationJson, _super);
    function Tpcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tpcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tpcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Tpcer502ApplicationJson;
}(SpeakeasyBase));
export { Tpcer502ApplicationJson };
export var Tpcer503ApplicationJsonErrorEnum;
(function (Tpcer503ApplicationJsonErrorEnum) {
    Tpcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Tpcer503ApplicationJsonErrorEnum || (Tpcer503ApplicationJsonErrorEnum = {}));
export var Tpcer503ApplicationJsonErrorDescriptionEnum;
(function (Tpcer503ApplicationJsonErrorDescriptionEnum) {
    Tpcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Tpcer503ApplicationJsonErrorDescriptionEnum || (Tpcer503ApplicationJsonErrorDescriptionEnum = {}));
var Tpcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Tpcer503ApplicationJson, _super);
    function Tpcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tpcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tpcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Tpcer503ApplicationJson;
}(SpeakeasyBase));
export { Tpcer503ApplicationJson };
export var Tpcer504ApplicationJsonErrorEnum;
(function (Tpcer504ApplicationJsonErrorEnum) {
    Tpcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Tpcer504ApplicationJsonErrorEnum || (Tpcer504ApplicationJsonErrorEnum = {}));
export var Tpcer504ApplicationJsonErrorDescriptionEnum;
(function (Tpcer504ApplicationJsonErrorDescriptionEnum) {
    Tpcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Tpcer504ApplicationJsonErrorDescriptionEnum || (Tpcer504ApplicationJsonErrorDescriptionEnum = {}));
var Tpcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Tpcer504ApplicationJson, _super);
    function Tpcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tpcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tpcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Tpcer504ApplicationJson;
}(SpeakeasyBase));
export { Tpcer504ApplicationJson };
var TpcerResponse = /** @class */ (function (_super) {
    __extends(TpcerResponse, _super);
    function TpcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TpcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TpcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tpcer400ApplicationJson)
    ], TpcerResponse.prototype, "tpcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tpcer401ApplicationJson)
    ], TpcerResponse.prototype, "tpcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tpcer404ApplicationJson)
    ], TpcerResponse.prototype, "tpcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tpcer500ApplicationJson)
    ], TpcerResponse.prototype, "tpcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tpcer502ApplicationJson)
    ], TpcerResponse.prototype, "tpcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tpcer503ApplicationJson)
    ], TpcerResponse.prototype, "tpcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tpcer504ApplicationJson)
    ], TpcerResponse.prototype, "tpcer504ApplicationJsonObject", void 0);
    return TpcerResponse;
}(SpeakeasyBase));
export { TpcerResponse };
