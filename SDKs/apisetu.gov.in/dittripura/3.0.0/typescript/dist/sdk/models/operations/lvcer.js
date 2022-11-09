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
var LvcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(LvcerRequestBodyCertificateParameters, _super);
    function LvcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], LvcerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        Metadata({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], LvcerRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return LvcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { LvcerRequestBodyCertificateParameters };
export var LvcerRequestBodyFormatEnum;
(function (LvcerRequestBodyFormatEnum) {
    LvcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(LvcerRequestBodyFormatEnum || (LvcerRequestBodyFormatEnum = {}));
var LvcerRequestBody = /** @class */ (function (_super) {
    __extends(LvcerRequestBody, _super);
    function LvcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", LvcerRequestBodyCertificateParameters)
    ], LvcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], LvcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], LvcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], LvcerRequestBody.prototype, "txnId", void 0);
    return LvcerRequestBody;
}(SpeakeasyBase));
export { LvcerRequestBody };
var LvcerSecurity = /** @class */ (function (_super) {
    __extends(LvcerSecurity, _super);
    function LvcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LvcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], LvcerSecurity.prototype, "clientId", void 0);
    return LvcerSecurity;
}(SpeakeasyBase));
export { LvcerSecurity };
var LvcerRequest = /** @class */ (function (_super) {
    __extends(LvcerRequest, _super);
    function LvcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", LvcerRequestBody)
    ], LvcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LvcerSecurity)
    ], LvcerRequest.prototype, "security", void 0);
    return LvcerRequest;
}(SpeakeasyBase));
export { LvcerRequest };
export var Lvcer400ApplicationJsonErrorEnum;
(function (Lvcer400ApplicationJsonErrorEnum) {
    Lvcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Lvcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Lvcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Lvcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Lvcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Lvcer400ApplicationJsonErrorEnum || (Lvcer400ApplicationJsonErrorEnum = {}));
export var Lvcer400ApplicationJsonErrorDescriptionEnum;
(function (Lvcer400ApplicationJsonErrorDescriptionEnum) {
    Lvcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Lvcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Lvcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Lvcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Lvcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Lvcer400ApplicationJsonErrorDescriptionEnum || (Lvcer400ApplicationJsonErrorDescriptionEnum = {}));
var Lvcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Lvcer400ApplicationJson, _super);
    function Lvcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lvcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lvcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Lvcer400ApplicationJson;
}(SpeakeasyBase));
export { Lvcer400ApplicationJson };
export var Lvcer401ApplicationJsonErrorEnum;
(function (Lvcer401ApplicationJsonErrorEnum) {
    Lvcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Lvcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Lvcer401ApplicationJsonErrorEnum || (Lvcer401ApplicationJsonErrorEnum = {}));
export var Lvcer401ApplicationJsonErrorDescriptionEnum;
(function (Lvcer401ApplicationJsonErrorDescriptionEnum) {
    Lvcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Lvcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Lvcer401ApplicationJsonErrorDescriptionEnum || (Lvcer401ApplicationJsonErrorDescriptionEnum = {}));
var Lvcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Lvcer401ApplicationJson, _super);
    function Lvcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lvcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lvcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Lvcer401ApplicationJson;
}(SpeakeasyBase));
export { Lvcer401ApplicationJson };
export var Lvcer404ApplicationJsonErrorEnum;
(function (Lvcer404ApplicationJsonErrorEnum) {
    Lvcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Lvcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Lvcer404ApplicationJsonErrorEnum || (Lvcer404ApplicationJsonErrorEnum = {}));
export var Lvcer404ApplicationJsonErrorDescriptionEnum;
(function (Lvcer404ApplicationJsonErrorDescriptionEnum) {
    Lvcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Lvcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Lvcer404ApplicationJsonErrorDescriptionEnum || (Lvcer404ApplicationJsonErrorDescriptionEnum = {}));
var Lvcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Lvcer404ApplicationJson, _super);
    function Lvcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lvcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lvcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Lvcer404ApplicationJson;
}(SpeakeasyBase));
export { Lvcer404ApplicationJson };
export var Lvcer500ApplicationJsonErrorEnum;
(function (Lvcer500ApplicationJsonErrorEnum) {
    Lvcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Lvcer500ApplicationJsonErrorEnum || (Lvcer500ApplicationJsonErrorEnum = {}));
export var Lvcer500ApplicationJsonErrorDescriptionEnum;
(function (Lvcer500ApplicationJsonErrorDescriptionEnum) {
    Lvcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Lvcer500ApplicationJsonErrorDescriptionEnum || (Lvcer500ApplicationJsonErrorDescriptionEnum = {}));
var Lvcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Lvcer500ApplicationJson, _super);
    function Lvcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lvcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lvcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Lvcer500ApplicationJson;
}(SpeakeasyBase));
export { Lvcer500ApplicationJson };
export var Lvcer502ApplicationJsonErrorEnum;
(function (Lvcer502ApplicationJsonErrorEnum) {
    Lvcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Lvcer502ApplicationJsonErrorEnum || (Lvcer502ApplicationJsonErrorEnum = {}));
export var Lvcer502ApplicationJsonErrorDescriptionEnum;
(function (Lvcer502ApplicationJsonErrorDescriptionEnum) {
    Lvcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Lvcer502ApplicationJsonErrorDescriptionEnum || (Lvcer502ApplicationJsonErrorDescriptionEnum = {}));
var Lvcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Lvcer502ApplicationJson, _super);
    function Lvcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lvcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lvcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Lvcer502ApplicationJson;
}(SpeakeasyBase));
export { Lvcer502ApplicationJson };
export var Lvcer503ApplicationJsonErrorEnum;
(function (Lvcer503ApplicationJsonErrorEnum) {
    Lvcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Lvcer503ApplicationJsonErrorEnum || (Lvcer503ApplicationJsonErrorEnum = {}));
export var Lvcer503ApplicationJsonErrorDescriptionEnum;
(function (Lvcer503ApplicationJsonErrorDescriptionEnum) {
    Lvcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Lvcer503ApplicationJsonErrorDescriptionEnum || (Lvcer503ApplicationJsonErrorDescriptionEnum = {}));
var Lvcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Lvcer503ApplicationJson, _super);
    function Lvcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lvcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lvcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Lvcer503ApplicationJson;
}(SpeakeasyBase));
export { Lvcer503ApplicationJson };
export var Lvcer504ApplicationJsonErrorEnum;
(function (Lvcer504ApplicationJsonErrorEnum) {
    Lvcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Lvcer504ApplicationJsonErrorEnum || (Lvcer504ApplicationJsonErrorEnum = {}));
export var Lvcer504ApplicationJsonErrorDescriptionEnum;
(function (Lvcer504ApplicationJsonErrorDescriptionEnum) {
    Lvcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Lvcer504ApplicationJsonErrorDescriptionEnum || (Lvcer504ApplicationJsonErrorDescriptionEnum = {}));
var Lvcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Lvcer504ApplicationJson, _super);
    function Lvcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lvcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lvcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Lvcer504ApplicationJson;
}(SpeakeasyBase));
export { Lvcer504ApplicationJson };
var LvcerResponse = /** @class */ (function (_super) {
    __extends(LvcerResponse, _super);
    function LvcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LvcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LvcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lvcer400ApplicationJson)
    ], LvcerResponse.prototype, "lvcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lvcer401ApplicationJson)
    ], LvcerResponse.prototype, "lvcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lvcer404ApplicationJson)
    ], LvcerResponse.prototype, "lvcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lvcer500ApplicationJson)
    ], LvcerResponse.prototype, "lvcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lvcer502ApplicationJson)
    ], LvcerResponse.prototype, "lvcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lvcer503ApplicationJson)
    ], LvcerResponse.prototype, "lvcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lvcer504ApplicationJson)
    ], LvcerResponse.prototype, "lvcer504ApplicationJsonObject", void 0);
    return LvcerResponse;
}(SpeakeasyBase));
export { LvcerResponse };
