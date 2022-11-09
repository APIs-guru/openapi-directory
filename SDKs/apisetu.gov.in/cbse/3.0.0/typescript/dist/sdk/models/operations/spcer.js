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
var SpcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SpcerRequestBodyCertificateParameters, _super);
    function SpcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], SpcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], SpcerRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        Metadata({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], SpcerRequestBodyCertificateParameters.prototype, "year", void 0);
    return SpcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { SpcerRequestBodyCertificateParameters };
export var SpcerRequestBodyFormatEnum;
(function (SpcerRequestBodyFormatEnum) {
    SpcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(SpcerRequestBodyFormatEnum || (SpcerRequestBodyFormatEnum = {}));
var SpcerRequestBody = /** @class */ (function (_super) {
    __extends(SpcerRequestBody, _super);
    function SpcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SpcerRequestBodyCertificateParameters)
    ], SpcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SpcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SpcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SpcerRequestBody.prototype, "txnId", void 0);
    return SpcerRequestBody;
}(SpeakeasyBase));
export { SpcerRequestBody };
var SpcerSecurity = /** @class */ (function (_super) {
    __extends(SpcerSecurity, _super);
    function SpcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SpcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SpcerSecurity.prototype, "clientId", void 0);
    return SpcerSecurity;
}(SpeakeasyBase));
export { SpcerSecurity };
var SpcerRequest = /** @class */ (function (_super) {
    __extends(SpcerRequest, _super);
    function SpcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SpcerRequestBody)
    ], SpcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SpcerSecurity)
    ], SpcerRequest.prototype, "security", void 0);
    return SpcerRequest;
}(SpeakeasyBase));
export { SpcerRequest };
export var Spcer400ApplicationJsonErrorEnum;
(function (Spcer400ApplicationJsonErrorEnum) {
    Spcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Spcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Spcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Spcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Spcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Spcer400ApplicationJsonErrorEnum || (Spcer400ApplicationJsonErrorEnum = {}));
export var Spcer400ApplicationJsonErrorDescriptionEnum;
(function (Spcer400ApplicationJsonErrorDescriptionEnum) {
    Spcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Spcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Spcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Spcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Spcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Spcer400ApplicationJsonErrorDescriptionEnum || (Spcer400ApplicationJsonErrorDescriptionEnum = {}));
var Spcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Spcer400ApplicationJson, _super);
    function Spcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Spcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Spcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Spcer400ApplicationJson;
}(SpeakeasyBase));
export { Spcer400ApplicationJson };
export var Spcer401ApplicationJsonErrorEnum;
(function (Spcer401ApplicationJsonErrorEnum) {
    Spcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Spcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Spcer401ApplicationJsonErrorEnum || (Spcer401ApplicationJsonErrorEnum = {}));
export var Spcer401ApplicationJsonErrorDescriptionEnum;
(function (Spcer401ApplicationJsonErrorDescriptionEnum) {
    Spcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Spcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Spcer401ApplicationJsonErrorDescriptionEnum || (Spcer401ApplicationJsonErrorDescriptionEnum = {}));
var Spcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Spcer401ApplicationJson, _super);
    function Spcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Spcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Spcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Spcer401ApplicationJson;
}(SpeakeasyBase));
export { Spcer401ApplicationJson };
export var Spcer404ApplicationJsonErrorEnum;
(function (Spcer404ApplicationJsonErrorEnum) {
    Spcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Spcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Spcer404ApplicationJsonErrorEnum || (Spcer404ApplicationJsonErrorEnum = {}));
export var Spcer404ApplicationJsonErrorDescriptionEnum;
(function (Spcer404ApplicationJsonErrorDescriptionEnum) {
    Spcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Spcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Spcer404ApplicationJsonErrorDescriptionEnum || (Spcer404ApplicationJsonErrorDescriptionEnum = {}));
var Spcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Spcer404ApplicationJson, _super);
    function Spcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Spcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Spcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Spcer404ApplicationJson;
}(SpeakeasyBase));
export { Spcer404ApplicationJson };
export var Spcer500ApplicationJsonErrorEnum;
(function (Spcer500ApplicationJsonErrorEnum) {
    Spcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Spcer500ApplicationJsonErrorEnum || (Spcer500ApplicationJsonErrorEnum = {}));
export var Spcer500ApplicationJsonErrorDescriptionEnum;
(function (Spcer500ApplicationJsonErrorDescriptionEnum) {
    Spcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Spcer500ApplicationJsonErrorDescriptionEnum || (Spcer500ApplicationJsonErrorDescriptionEnum = {}));
var Spcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Spcer500ApplicationJson, _super);
    function Spcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Spcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Spcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Spcer500ApplicationJson;
}(SpeakeasyBase));
export { Spcer500ApplicationJson };
export var Spcer502ApplicationJsonErrorEnum;
(function (Spcer502ApplicationJsonErrorEnum) {
    Spcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Spcer502ApplicationJsonErrorEnum || (Spcer502ApplicationJsonErrorEnum = {}));
export var Spcer502ApplicationJsonErrorDescriptionEnum;
(function (Spcer502ApplicationJsonErrorDescriptionEnum) {
    Spcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Spcer502ApplicationJsonErrorDescriptionEnum || (Spcer502ApplicationJsonErrorDescriptionEnum = {}));
var Spcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Spcer502ApplicationJson, _super);
    function Spcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Spcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Spcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Spcer502ApplicationJson;
}(SpeakeasyBase));
export { Spcer502ApplicationJson };
export var Spcer503ApplicationJsonErrorEnum;
(function (Spcer503ApplicationJsonErrorEnum) {
    Spcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Spcer503ApplicationJsonErrorEnum || (Spcer503ApplicationJsonErrorEnum = {}));
export var Spcer503ApplicationJsonErrorDescriptionEnum;
(function (Spcer503ApplicationJsonErrorDescriptionEnum) {
    Spcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Spcer503ApplicationJsonErrorDescriptionEnum || (Spcer503ApplicationJsonErrorDescriptionEnum = {}));
var Spcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Spcer503ApplicationJson, _super);
    function Spcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Spcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Spcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Spcer503ApplicationJson;
}(SpeakeasyBase));
export { Spcer503ApplicationJson };
export var Spcer504ApplicationJsonErrorEnum;
(function (Spcer504ApplicationJsonErrorEnum) {
    Spcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Spcer504ApplicationJsonErrorEnum || (Spcer504ApplicationJsonErrorEnum = {}));
export var Spcer504ApplicationJsonErrorDescriptionEnum;
(function (Spcer504ApplicationJsonErrorDescriptionEnum) {
    Spcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Spcer504ApplicationJsonErrorDescriptionEnum || (Spcer504ApplicationJsonErrorDescriptionEnum = {}));
var Spcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Spcer504ApplicationJson, _super);
    function Spcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Spcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Spcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Spcer504ApplicationJson;
}(SpeakeasyBase));
export { Spcer504ApplicationJson };
var SpcerResponse = /** @class */ (function (_super) {
    __extends(SpcerResponse, _super);
    function SpcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SpcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SpcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Spcer400ApplicationJson)
    ], SpcerResponse.prototype, "spcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Spcer401ApplicationJson)
    ], SpcerResponse.prototype, "spcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Spcer404ApplicationJson)
    ], SpcerResponse.prototype, "spcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Spcer500ApplicationJson)
    ], SpcerResponse.prototype, "spcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Spcer502ApplicationJson)
    ], SpcerResponse.prototype, "spcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Spcer503ApplicationJson)
    ], SpcerResponse.prototype, "spcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Spcer504ApplicationJson)
    ], SpcerResponse.prototype, "spcer504ApplicationJsonObject", void 0);
    return SpcerResponse;
}(SpeakeasyBase));
export { SpcerResponse };
