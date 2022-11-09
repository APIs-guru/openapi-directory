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
var PscerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PscerRequestBodyCertificateParameters, _super);
    function PscerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], PscerRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], PscerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=RegNum" }),
        __metadata("design:type", String)
    ], PscerRequestBodyCertificateParameters.prototype, "regNum", void 0);
    __decorate([
        Metadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], PscerRequestBodyCertificateParameters.prototype, "uid", void 0);
    return PscerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { PscerRequestBodyCertificateParameters };
export var PscerRequestBodyFormatEnum;
(function (PscerRequestBodyFormatEnum) {
    PscerRequestBodyFormatEnum["Pdf"] = "pdf";
})(PscerRequestBodyFormatEnum || (PscerRequestBodyFormatEnum = {}));
var PscerRequestBody = /** @class */ (function (_super) {
    __extends(PscerRequestBody, _super);
    function PscerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", PscerRequestBodyCertificateParameters)
    ], PscerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], PscerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PscerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], PscerRequestBody.prototype, "txnId", void 0);
    return PscerRequestBody;
}(SpeakeasyBase));
export { PscerRequestBody };
var PscerSecurity = /** @class */ (function (_super) {
    __extends(PscerSecurity, _super);
    function PscerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PscerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PscerSecurity.prototype, "clientId", void 0);
    return PscerSecurity;
}(SpeakeasyBase));
export { PscerSecurity };
var PscerRequest = /** @class */ (function (_super) {
    __extends(PscerRequest, _super);
    function PscerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PscerRequestBody)
    ], PscerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PscerSecurity)
    ], PscerRequest.prototype, "security", void 0);
    return PscerRequest;
}(SpeakeasyBase));
export { PscerRequest };
export var Pscer400ApplicationJsonErrorEnum;
(function (Pscer400ApplicationJsonErrorEnum) {
    Pscer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Pscer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Pscer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Pscer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Pscer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Pscer400ApplicationJsonErrorEnum || (Pscer400ApplicationJsonErrorEnum = {}));
export var Pscer400ApplicationJsonErrorDescriptionEnum;
(function (Pscer400ApplicationJsonErrorDescriptionEnum) {
    Pscer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Pscer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Pscer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Pscer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Pscer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Pscer400ApplicationJsonErrorDescriptionEnum || (Pscer400ApplicationJsonErrorDescriptionEnum = {}));
var Pscer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Pscer400ApplicationJson, _super);
    function Pscer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pscer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pscer400ApplicationJson.prototype, "errorDescription", void 0);
    return Pscer400ApplicationJson;
}(SpeakeasyBase));
export { Pscer400ApplicationJson };
export var Pscer401ApplicationJsonErrorEnum;
(function (Pscer401ApplicationJsonErrorEnum) {
    Pscer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Pscer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Pscer401ApplicationJsonErrorEnum || (Pscer401ApplicationJsonErrorEnum = {}));
export var Pscer401ApplicationJsonErrorDescriptionEnum;
(function (Pscer401ApplicationJsonErrorDescriptionEnum) {
    Pscer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Pscer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Pscer401ApplicationJsonErrorDescriptionEnum || (Pscer401ApplicationJsonErrorDescriptionEnum = {}));
var Pscer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Pscer401ApplicationJson, _super);
    function Pscer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pscer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pscer401ApplicationJson.prototype, "errorDescription", void 0);
    return Pscer401ApplicationJson;
}(SpeakeasyBase));
export { Pscer401ApplicationJson };
export var Pscer404ApplicationJsonErrorEnum;
(function (Pscer404ApplicationJsonErrorEnum) {
    Pscer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Pscer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Pscer404ApplicationJsonErrorEnum || (Pscer404ApplicationJsonErrorEnum = {}));
export var Pscer404ApplicationJsonErrorDescriptionEnum;
(function (Pscer404ApplicationJsonErrorDescriptionEnum) {
    Pscer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Pscer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Pscer404ApplicationJsonErrorDescriptionEnum || (Pscer404ApplicationJsonErrorDescriptionEnum = {}));
var Pscer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Pscer404ApplicationJson, _super);
    function Pscer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pscer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pscer404ApplicationJson.prototype, "errorDescription", void 0);
    return Pscer404ApplicationJson;
}(SpeakeasyBase));
export { Pscer404ApplicationJson };
export var Pscer500ApplicationJsonErrorEnum;
(function (Pscer500ApplicationJsonErrorEnum) {
    Pscer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Pscer500ApplicationJsonErrorEnum || (Pscer500ApplicationJsonErrorEnum = {}));
export var Pscer500ApplicationJsonErrorDescriptionEnum;
(function (Pscer500ApplicationJsonErrorDescriptionEnum) {
    Pscer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Pscer500ApplicationJsonErrorDescriptionEnum || (Pscer500ApplicationJsonErrorDescriptionEnum = {}));
var Pscer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Pscer500ApplicationJson, _super);
    function Pscer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pscer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pscer500ApplicationJson.prototype, "errorDescription", void 0);
    return Pscer500ApplicationJson;
}(SpeakeasyBase));
export { Pscer500ApplicationJson };
export var Pscer502ApplicationJsonErrorEnum;
(function (Pscer502ApplicationJsonErrorEnum) {
    Pscer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Pscer502ApplicationJsonErrorEnum || (Pscer502ApplicationJsonErrorEnum = {}));
export var Pscer502ApplicationJsonErrorDescriptionEnum;
(function (Pscer502ApplicationJsonErrorDescriptionEnum) {
    Pscer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Pscer502ApplicationJsonErrorDescriptionEnum || (Pscer502ApplicationJsonErrorDescriptionEnum = {}));
var Pscer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Pscer502ApplicationJson, _super);
    function Pscer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pscer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pscer502ApplicationJson.prototype, "errorDescription", void 0);
    return Pscer502ApplicationJson;
}(SpeakeasyBase));
export { Pscer502ApplicationJson };
export var Pscer503ApplicationJsonErrorEnum;
(function (Pscer503ApplicationJsonErrorEnum) {
    Pscer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Pscer503ApplicationJsonErrorEnum || (Pscer503ApplicationJsonErrorEnum = {}));
export var Pscer503ApplicationJsonErrorDescriptionEnum;
(function (Pscer503ApplicationJsonErrorDescriptionEnum) {
    Pscer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Pscer503ApplicationJsonErrorDescriptionEnum || (Pscer503ApplicationJsonErrorDescriptionEnum = {}));
var Pscer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Pscer503ApplicationJson, _super);
    function Pscer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pscer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pscer503ApplicationJson.prototype, "errorDescription", void 0);
    return Pscer503ApplicationJson;
}(SpeakeasyBase));
export { Pscer503ApplicationJson };
export var Pscer504ApplicationJsonErrorEnum;
(function (Pscer504ApplicationJsonErrorEnum) {
    Pscer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Pscer504ApplicationJsonErrorEnum || (Pscer504ApplicationJsonErrorEnum = {}));
export var Pscer504ApplicationJsonErrorDescriptionEnum;
(function (Pscer504ApplicationJsonErrorDescriptionEnum) {
    Pscer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Pscer504ApplicationJsonErrorDescriptionEnum || (Pscer504ApplicationJsonErrorDescriptionEnum = {}));
var Pscer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Pscer504ApplicationJson, _super);
    function Pscer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pscer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pscer504ApplicationJson.prototype, "errorDescription", void 0);
    return Pscer504ApplicationJson;
}(SpeakeasyBase));
export { Pscer504ApplicationJson };
var PscerResponse = /** @class */ (function (_super) {
    __extends(PscerResponse, _super);
    function PscerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PscerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PscerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pscer400ApplicationJson)
    ], PscerResponse.prototype, "pscer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pscer401ApplicationJson)
    ], PscerResponse.prototype, "pscer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pscer404ApplicationJson)
    ], PscerResponse.prototype, "pscer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pscer500ApplicationJson)
    ], PscerResponse.prototype, "pscer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pscer502ApplicationJson)
    ], PscerResponse.prototype, "pscer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pscer503ApplicationJson)
    ], PscerResponse.prototype, "pscer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pscer504ApplicationJson)
    ], PscerResponse.prototype, "pscer504ApplicationJsonObject", void 0);
    return PscerResponse;
}(SpeakeasyBase));
export { PscerResponse };
