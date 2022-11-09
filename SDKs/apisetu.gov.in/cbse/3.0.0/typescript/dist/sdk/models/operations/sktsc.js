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
var SktscRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SktscRequestBodyCertificateParameters, _super);
    function SktscRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], SktscRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], SktscRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        Metadata({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], SktscRequestBodyCertificateParameters.prototype, "year", void 0);
    return SktscRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { SktscRequestBodyCertificateParameters };
export var SktscRequestBodyFormatEnum;
(function (SktscRequestBodyFormatEnum) {
    SktscRequestBodyFormatEnum["Pdf"] = "pdf";
})(SktscRequestBodyFormatEnum || (SktscRequestBodyFormatEnum = {}));
var SktscRequestBody = /** @class */ (function (_super) {
    __extends(SktscRequestBody, _super);
    function SktscRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SktscRequestBodyCertificateParameters)
    ], SktscRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SktscRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SktscRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SktscRequestBody.prototype, "txnId", void 0);
    return SktscRequestBody;
}(SpeakeasyBase));
export { SktscRequestBody };
var SktscSecurity = /** @class */ (function (_super) {
    __extends(SktscSecurity, _super);
    function SktscSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SktscSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SktscSecurity.prototype, "clientId", void 0);
    return SktscSecurity;
}(SpeakeasyBase));
export { SktscSecurity };
var SktscRequest = /** @class */ (function (_super) {
    __extends(SktscRequest, _super);
    function SktscRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SktscRequestBody)
    ], SktscRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SktscSecurity)
    ], SktscRequest.prototype, "security", void 0);
    return SktscRequest;
}(SpeakeasyBase));
export { SktscRequest };
export var Sktsc400ApplicationJsonErrorEnum;
(function (Sktsc400ApplicationJsonErrorEnum) {
    Sktsc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Sktsc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Sktsc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Sktsc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Sktsc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Sktsc400ApplicationJsonErrorEnum || (Sktsc400ApplicationJsonErrorEnum = {}));
export var Sktsc400ApplicationJsonErrorDescriptionEnum;
(function (Sktsc400ApplicationJsonErrorDescriptionEnum) {
    Sktsc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Sktsc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Sktsc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Sktsc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Sktsc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Sktsc400ApplicationJsonErrorDescriptionEnum || (Sktsc400ApplicationJsonErrorDescriptionEnum = {}));
var Sktsc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Sktsc400ApplicationJson, _super);
    function Sktsc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sktsc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sktsc400ApplicationJson.prototype, "errorDescription", void 0);
    return Sktsc400ApplicationJson;
}(SpeakeasyBase));
export { Sktsc400ApplicationJson };
export var Sktsc401ApplicationJsonErrorEnum;
(function (Sktsc401ApplicationJsonErrorEnum) {
    Sktsc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Sktsc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Sktsc401ApplicationJsonErrorEnum || (Sktsc401ApplicationJsonErrorEnum = {}));
export var Sktsc401ApplicationJsonErrorDescriptionEnum;
(function (Sktsc401ApplicationJsonErrorDescriptionEnum) {
    Sktsc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Sktsc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Sktsc401ApplicationJsonErrorDescriptionEnum || (Sktsc401ApplicationJsonErrorDescriptionEnum = {}));
var Sktsc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Sktsc401ApplicationJson, _super);
    function Sktsc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sktsc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sktsc401ApplicationJson.prototype, "errorDescription", void 0);
    return Sktsc401ApplicationJson;
}(SpeakeasyBase));
export { Sktsc401ApplicationJson };
export var Sktsc404ApplicationJsonErrorEnum;
(function (Sktsc404ApplicationJsonErrorEnum) {
    Sktsc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Sktsc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Sktsc404ApplicationJsonErrorEnum || (Sktsc404ApplicationJsonErrorEnum = {}));
export var Sktsc404ApplicationJsonErrorDescriptionEnum;
(function (Sktsc404ApplicationJsonErrorDescriptionEnum) {
    Sktsc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Sktsc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Sktsc404ApplicationJsonErrorDescriptionEnum || (Sktsc404ApplicationJsonErrorDescriptionEnum = {}));
var Sktsc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Sktsc404ApplicationJson, _super);
    function Sktsc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sktsc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sktsc404ApplicationJson.prototype, "errorDescription", void 0);
    return Sktsc404ApplicationJson;
}(SpeakeasyBase));
export { Sktsc404ApplicationJson };
export var Sktsc500ApplicationJsonErrorEnum;
(function (Sktsc500ApplicationJsonErrorEnum) {
    Sktsc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Sktsc500ApplicationJsonErrorEnum || (Sktsc500ApplicationJsonErrorEnum = {}));
export var Sktsc500ApplicationJsonErrorDescriptionEnum;
(function (Sktsc500ApplicationJsonErrorDescriptionEnum) {
    Sktsc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Sktsc500ApplicationJsonErrorDescriptionEnum || (Sktsc500ApplicationJsonErrorDescriptionEnum = {}));
var Sktsc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Sktsc500ApplicationJson, _super);
    function Sktsc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sktsc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sktsc500ApplicationJson.prototype, "errorDescription", void 0);
    return Sktsc500ApplicationJson;
}(SpeakeasyBase));
export { Sktsc500ApplicationJson };
export var Sktsc502ApplicationJsonErrorEnum;
(function (Sktsc502ApplicationJsonErrorEnum) {
    Sktsc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Sktsc502ApplicationJsonErrorEnum || (Sktsc502ApplicationJsonErrorEnum = {}));
export var Sktsc502ApplicationJsonErrorDescriptionEnum;
(function (Sktsc502ApplicationJsonErrorDescriptionEnum) {
    Sktsc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Sktsc502ApplicationJsonErrorDescriptionEnum || (Sktsc502ApplicationJsonErrorDescriptionEnum = {}));
var Sktsc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Sktsc502ApplicationJson, _super);
    function Sktsc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sktsc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sktsc502ApplicationJson.prototype, "errorDescription", void 0);
    return Sktsc502ApplicationJson;
}(SpeakeasyBase));
export { Sktsc502ApplicationJson };
export var Sktsc503ApplicationJsonErrorEnum;
(function (Sktsc503ApplicationJsonErrorEnum) {
    Sktsc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Sktsc503ApplicationJsonErrorEnum || (Sktsc503ApplicationJsonErrorEnum = {}));
export var Sktsc503ApplicationJsonErrorDescriptionEnum;
(function (Sktsc503ApplicationJsonErrorDescriptionEnum) {
    Sktsc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Sktsc503ApplicationJsonErrorDescriptionEnum || (Sktsc503ApplicationJsonErrorDescriptionEnum = {}));
var Sktsc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Sktsc503ApplicationJson, _super);
    function Sktsc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sktsc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sktsc503ApplicationJson.prototype, "errorDescription", void 0);
    return Sktsc503ApplicationJson;
}(SpeakeasyBase));
export { Sktsc503ApplicationJson };
export var Sktsc504ApplicationJsonErrorEnum;
(function (Sktsc504ApplicationJsonErrorEnum) {
    Sktsc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Sktsc504ApplicationJsonErrorEnum || (Sktsc504ApplicationJsonErrorEnum = {}));
export var Sktsc504ApplicationJsonErrorDescriptionEnum;
(function (Sktsc504ApplicationJsonErrorDescriptionEnum) {
    Sktsc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Sktsc504ApplicationJsonErrorDescriptionEnum || (Sktsc504ApplicationJsonErrorDescriptionEnum = {}));
var Sktsc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Sktsc504ApplicationJson, _super);
    function Sktsc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sktsc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sktsc504ApplicationJson.prototype, "errorDescription", void 0);
    return Sktsc504ApplicationJson;
}(SpeakeasyBase));
export { Sktsc504ApplicationJson };
var SktscResponse = /** @class */ (function (_super) {
    __extends(SktscResponse, _super);
    function SktscResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SktscResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SktscResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Sktsc400ApplicationJson)
    ], SktscResponse.prototype, "sktsc400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Sktsc401ApplicationJson)
    ], SktscResponse.prototype, "sktsc401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Sktsc404ApplicationJson)
    ], SktscResponse.prototype, "sktsc404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Sktsc500ApplicationJson)
    ], SktscResponse.prototype, "sktsc500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Sktsc502ApplicationJson)
    ], SktscResponse.prototype, "sktsc502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Sktsc503ApplicationJson)
    ], SktscResponse.prototype, "sktsc503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Sktsc504ApplicationJson)
    ], SktscResponse.prototype, "sktsc504ApplicationJsonObject", void 0);
    return SktscResponse;
}(SpeakeasyBase));
export { SktscResponse };
