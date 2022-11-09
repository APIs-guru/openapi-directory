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
var PecerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PecerRequestBodyCertificateParameters, _super);
    function PecerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AC_NO" }),
        __metadata("design:type", String)
    ], PecerRequestBodyCertificateParameters.prototype, "acNo", void 0);
    __decorate([
        Metadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], PecerRequestBodyCertificateParameters.prototype, "dob", void 0);
    return PecerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { PecerRequestBodyCertificateParameters };
export var PecerRequestBodyFormatEnum;
(function (PecerRequestBodyFormatEnum) {
    PecerRequestBodyFormatEnum["Pdf"] = "pdf";
})(PecerRequestBodyFormatEnum || (PecerRequestBodyFormatEnum = {}));
var PecerRequestBody = /** @class */ (function (_super) {
    __extends(PecerRequestBody, _super);
    function PecerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", PecerRequestBodyCertificateParameters)
    ], PecerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], PecerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PecerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], PecerRequestBody.prototype, "txnId", void 0);
    return PecerRequestBody;
}(SpeakeasyBase));
export { PecerRequestBody };
var PecerSecurity = /** @class */ (function (_super) {
    __extends(PecerSecurity, _super);
    function PecerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PecerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PecerSecurity.prototype, "clientId", void 0);
    return PecerSecurity;
}(SpeakeasyBase));
export { PecerSecurity };
var PecerRequest = /** @class */ (function (_super) {
    __extends(PecerRequest, _super);
    function PecerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PecerRequestBody)
    ], PecerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PecerSecurity)
    ], PecerRequest.prototype, "security", void 0);
    return PecerRequest;
}(SpeakeasyBase));
export { PecerRequest };
export var Pecer400ApplicationJsonErrorEnum;
(function (Pecer400ApplicationJsonErrorEnum) {
    Pecer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Pecer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Pecer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Pecer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Pecer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Pecer400ApplicationJsonErrorEnum || (Pecer400ApplicationJsonErrorEnum = {}));
export var Pecer400ApplicationJsonErrorDescriptionEnum;
(function (Pecer400ApplicationJsonErrorDescriptionEnum) {
    Pecer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Pecer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Pecer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Pecer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Pecer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Pecer400ApplicationJsonErrorDescriptionEnum || (Pecer400ApplicationJsonErrorDescriptionEnum = {}));
var Pecer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Pecer400ApplicationJson, _super);
    function Pecer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pecer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pecer400ApplicationJson.prototype, "errorDescription", void 0);
    return Pecer400ApplicationJson;
}(SpeakeasyBase));
export { Pecer400ApplicationJson };
export var Pecer401ApplicationJsonErrorEnum;
(function (Pecer401ApplicationJsonErrorEnum) {
    Pecer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Pecer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Pecer401ApplicationJsonErrorEnum || (Pecer401ApplicationJsonErrorEnum = {}));
export var Pecer401ApplicationJsonErrorDescriptionEnum;
(function (Pecer401ApplicationJsonErrorDescriptionEnum) {
    Pecer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Pecer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Pecer401ApplicationJsonErrorDescriptionEnum || (Pecer401ApplicationJsonErrorDescriptionEnum = {}));
var Pecer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Pecer401ApplicationJson, _super);
    function Pecer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pecer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pecer401ApplicationJson.prototype, "errorDescription", void 0);
    return Pecer401ApplicationJson;
}(SpeakeasyBase));
export { Pecer401ApplicationJson };
export var Pecer404ApplicationJsonErrorEnum;
(function (Pecer404ApplicationJsonErrorEnum) {
    Pecer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Pecer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Pecer404ApplicationJsonErrorEnum || (Pecer404ApplicationJsonErrorEnum = {}));
export var Pecer404ApplicationJsonErrorDescriptionEnum;
(function (Pecer404ApplicationJsonErrorDescriptionEnum) {
    Pecer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Pecer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Pecer404ApplicationJsonErrorDescriptionEnum || (Pecer404ApplicationJsonErrorDescriptionEnum = {}));
var Pecer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Pecer404ApplicationJson, _super);
    function Pecer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pecer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pecer404ApplicationJson.prototype, "errorDescription", void 0);
    return Pecer404ApplicationJson;
}(SpeakeasyBase));
export { Pecer404ApplicationJson };
export var Pecer500ApplicationJsonErrorEnum;
(function (Pecer500ApplicationJsonErrorEnum) {
    Pecer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Pecer500ApplicationJsonErrorEnum || (Pecer500ApplicationJsonErrorEnum = {}));
export var Pecer500ApplicationJsonErrorDescriptionEnum;
(function (Pecer500ApplicationJsonErrorDescriptionEnum) {
    Pecer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Pecer500ApplicationJsonErrorDescriptionEnum || (Pecer500ApplicationJsonErrorDescriptionEnum = {}));
var Pecer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Pecer500ApplicationJson, _super);
    function Pecer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pecer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pecer500ApplicationJson.prototype, "errorDescription", void 0);
    return Pecer500ApplicationJson;
}(SpeakeasyBase));
export { Pecer500ApplicationJson };
export var Pecer502ApplicationJsonErrorEnum;
(function (Pecer502ApplicationJsonErrorEnum) {
    Pecer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Pecer502ApplicationJsonErrorEnum || (Pecer502ApplicationJsonErrorEnum = {}));
export var Pecer502ApplicationJsonErrorDescriptionEnum;
(function (Pecer502ApplicationJsonErrorDescriptionEnum) {
    Pecer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Pecer502ApplicationJsonErrorDescriptionEnum || (Pecer502ApplicationJsonErrorDescriptionEnum = {}));
var Pecer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Pecer502ApplicationJson, _super);
    function Pecer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pecer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pecer502ApplicationJson.prototype, "errorDescription", void 0);
    return Pecer502ApplicationJson;
}(SpeakeasyBase));
export { Pecer502ApplicationJson };
export var Pecer503ApplicationJsonErrorEnum;
(function (Pecer503ApplicationJsonErrorEnum) {
    Pecer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Pecer503ApplicationJsonErrorEnum || (Pecer503ApplicationJsonErrorEnum = {}));
export var Pecer503ApplicationJsonErrorDescriptionEnum;
(function (Pecer503ApplicationJsonErrorDescriptionEnum) {
    Pecer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Pecer503ApplicationJsonErrorDescriptionEnum || (Pecer503ApplicationJsonErrorDescriptionEnum = {}));
var Pecer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Pecer503ApplicationJson, _super);
    function Pecer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pecer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pecer503ApplicationJson.prototype, "errorDescription", void 0);
    return Pecer503ApplicationJson;
}(SpeakeasyBase));
export { Pecer503ApplicationJson };
export var Pecer504ApplicationJsonErrorEnum;
(function (Pecer504ApplicationJsonErrorEnum) {
    Pecer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Pecer504ApplicationJsonErrorEnum || (Pecer504ApplicationJsonErrorEnum = {}));
export var Pecer504ApplicationJsonErrorDescriptionEnum;
(function (Pecer504ApplicationJsonErrorDescriptionEnum) {
    Pecer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Pecer504ApplicationJsonErrorDescriptionEnum || (Pecer504ApplicationJsonErrorDescriptionEnum = {}));
var Pecer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Pecer504ApplicationJson, _super);
    function Pecer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pecer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pecer504ApplicationJson.prototype, "errorDescription", void 0);
    return Pecer504ApplicationJson;
}(SpeakeasyBase));
export { Pecer504ApplicationJson };
var PecerResponse = /** @class */ (function (_super) {
    __extends(PecerResponse, _super);
    function PecerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PecerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PecerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pecer400ApplicationJson)
    ], PecerResponse.prototype, "pecer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pecer401ApplicationJson)
    ], PecerResponse.prototype, "pecer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pecer404ApplicationJson)
    ], PecerResponse.prototype, "pecer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pecer500ApplicationJson)
    ], PecerResponse.prototype, "pecer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pecer502ApplicationJson)
    ], PecerResponse.prototype, "pecer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pecer503ApplicationJson)
    ], PecerResponse.prototype, "pecer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pecer504ApplicationJson)
    ], PecerResponse.prototype, "pecer504ApplicationJsonObject", void 0);
    return PecerResponse;
}(SpeakeasyBase));
export { PecerResponse };
