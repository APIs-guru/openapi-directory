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
var EpfscRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(EpfscRequestBodyCertificateParameters, _super);
    function EpfscRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], EpfscRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], EpfscRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=SCNO" }),
        __metadata("design:type", String)
    ], EpfscRequestBodyCertificateParameters.prototype, "scno", void 0);
    return EpfscRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { EpfscRequestBodyCertificateParameters };
export var EpfscRequestBodyFormatEnum;
(function (EpfscRequestBodyFormatEnum) {
    EpfscRequestBodyFormatEnum["Pdf"] = "pdf";
})(EpfscRequestBodyFormatEnum || (EpfscRequestBodyFormatEnum = {}));
var EpfscRequestBody = /** @class */ (function (_super) {
    __extends(EpfscRequestBody, _super);
    function EpfscRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", EpfscRequestBodyCertificateParameters)
    ], EpfscRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], EpfscRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], EpfscRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], EpfscRequestBody.prototype, "txnId", void 0);
    return EpfscRequestBody;
}(SpeakeasyBase));
export { EpfscRequestBody };
var EpfscSecurity = /** @class */ (function (_super) {
    __extends(EpfscSecurity, _super);
    function EpfscSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], EpfscSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], EpfscSecurity.prototype, "clientId", void 0);
    return EpfscSecurity;
}(SpeakeasyBase));
export { EpfscSecurity };
var EpfscRequest = /** @class */ (function (_super) {
    __extends(EpfscRequest, _super);
    function EpfscRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EpfscRequestBody)
    ], EpfscRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", EpfscSecurity)
    ], EpfscRequest.prototype, "security", void 0);
    return EpfscRequest;
}(SpeakeasyBase));
export { EpfscRequest };
export var Epfsc400ApplicationJsonErrorEnum;
(function (Epfsc400ApplicationJsonErrorEnum) {
    Epfsc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Epfsc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Epfsc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Epfsc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Epfsc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Epfsc400ApplicationJsonErrorEnum || (Epfsc400ApplicationJsonErrorEnum = {}));
export var Epfsc400ApplicationJsonErrorDescriptionEnum;
(function (Epfsc400ApplicationJsonErrorDescriptionEnum) {
    Epfsc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Epfsc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Epfsc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Epfsc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Epfsc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Epfsc400ApplicationJsonErrorDescriptionEnum || (Epfsc400ApplicationJsonErrorDescriptionEnum = {}));
var Epfsc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Epfsc400ApplicationJson, _super);
    function Epfsc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Epfsc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Epfsc400ApplicationJson.prototype, "errorDescription", void 0);
    return Epfsc400ApplicationJson;
}(SpeakeasyBase));
export { Epfsc400ApplicationJson };
export var Epfsc401ApplicationJsonErrorEnum;
(function (Epfsc401ApplicationJsonErrorEnum) {
    Epfsc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Epfsc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Epfsc401ApplicationJsonErrorEnum || (Epfsc401ApplicationJsonErrorEnum = {}));
export var Epfsc401ApplicationJsonErrorDescriptionEnum;
(function (Epfsc401ApplicationJsonErrorDescriptionEnum) {
    Epfsc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Epfsc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Epfsc401ApplicationJsonErrorDescriptionEnum || (Epfsc401ApplicationJsonErrorDescriptionEnum = {}));
var Epfsc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Epfsc401ApplicationJson, _super);
    function Epfsc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Epfsc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Epfsc401ApplicationJson.prototype, "errorDescription", void 0);
    return Epfsc401ApplicationJson;
}(SpeakeasyBase));
export { Epfsc401ApplicationJson };
export var Epfsc404ApplicationJsonErrorEnum;
(function (Epfsc404ApplicationJsonErrorEnum) {
    Epfsc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Epfsc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Epfsc404ApplicationJsonErrorEnum || (Epfsc404ApplicationJsonErrorEnum = {}));
export var Epfsc404ApplicationJsonErrorDescriptionEnum;
(function (Epfsc404ApplicationJsonErrorDescriptionEnum) {
    Epfsc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Epfsc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Epfsc404ApplicationJsonErrorDescriptionEnum || (Epfsc404ApplicationJsonErrorDescriptionEnum = {}));
var Epfsc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Epfsc404ApplicationJson, _super);
    function Epfsc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Epfsc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Epfsc404ApplicationJson.prototype, "errorDescription", void 0);
    return Epfsc404ApplicationJson;
}(SpeakeasyBase));
export { Epfsc404ApplicationJson };
export var Epfsc500ApplicationJsonErrorEnum;
(function (Epfsc500ApplicationJsonErrorEnum) {
    Epfsc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Epfsc500ApplicationJsonErrorEnum || (Epfsc500ApplicationJsonErrorEnum = {}));
export var Epfsc500ApplicationJsonErrorDescriptionEnum;
(function (Epfsc500ApplicationJsonErrorDescriptionEnum) {
    Epfsc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Epfsc500ApplicationJsonErrorDescriptionEnum || (Epfsc500ApplicationJsonErrorDescriptionEnum = {}));
var Epfsc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Epfsc500ApplicationJson, _super);
    function Epfsc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Epfsc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Epfsc500ApplicationJson.prototype, "errorDescription", void 0);
    return Epfsc500ApplicationJson;
}(SpeakeasyBase));
export { Epfsc500ApplicationJson };
export var Epfsc502ApplicationJsonErrorEnum;
(function (Epfsc502ApplicationJsonErrorEnum) {
    Epfsc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Epfsc502ApplicationJsonErrorEnum || (Epfsc502ApplicationJsonErrorEnum = {}));
export var Epfsc502ApplicationJsonErrorDescriptionEnum;
(function (Epfsc502ApplicationJsonErrorDescriptionEnum) {
    Epfsc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Epfsc502ApplicationJsonErrorDescriptionEnum || (Epfsc502ApplicationJsonErrorDescriptionEnum = {}));
var Epfsc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Epfsc502ApplicationJson, _super);
    function Epfsc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Epfsc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Epfsc502ApplicationJson.prototype, "errorDescription", void 0);
    return Epfsc502ApplicationJson;
}(SpeakeasyBase));
export { Epfsc502ApplicationJson };
export var Epfsc503ApplicationJsonErrorEnum;
(function (Epfsc503ApplicationJsonErrorEnum) {
    Epfsc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Epfsc503ApplicationJsonErrorEnum || (Epfsc503ApplicationJsonErrorEnum = {}));
export var Epfsc503ApplicationJsonErrorDescriptionEnum;
(function (Epfsc503ApplicationJsonErrorDescriptionEnum) {
    Epfsc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Epfsc503ApplicationJsonErrorDescriptionEnum || (Epfsc503ApplicationJsonErrorDescriptionEnum = {}));
var Epfsc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Epfsc503ApplicationJson, _super);
    function Epfsc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Epfsc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Epfsc503ApplicationJson.prototype, "errorDescription", void 0);
    return Epfsc503ApplicationJson;
}(SpeakeasyBase));
export { Epfsc503ApplicationJson };
export var Epfsc504ApplicationJsonErrorEnum;
(function (Epfsc504ApplicationJsonErrorEnum) {
    Epfsc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Epfsc504ApplicationJsonErrorEnum || (Epfsc504ApplicationJsonErrorEnum = {}));
export var Epfsc504ApplicationJsonErrorDescriptionEnum;
(function (Epfsc504ApplicationJsonErrorDescriptionEnum) {
    Epfsc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Epfsc504ApplicationJsonErrorDescriptionEnum || (Epfsc504ApplicationJsonErrorDescriptionEnum = {}));
var Epfsc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Epfsc504ApplicationJson, _super);
    function Epfsc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Epfsc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Epfsc504ApplicationJson.prototype, "errorDescription", void 0);
    return Epfsc504ApplicationJson;
}(SpeakeasyBase));
export { Epfsc504ApplicationJson };
var EpfscResponse = /** @class */ (function (_super) {
    __extends(EpfscResponse, _super);
    function EpfscResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], EpfscResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], EpfscResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Epfsc400ApplicationJson)
    ], EpfscResponse.prototype, "epfsc400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Epfsc401ApplicationJson)
    ], EpfscResponse.prototype, "epfsc401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Epfsc404ApplicationJson)
    ], EpfscResponse.prototype, "epfsc404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Epfsc500ApplicationJson)
    ], EpfscResponse.prototype, "epfsc500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Epfsc502ApplicationJson)
    ], EpfscResponse.prototype, "epfsc502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Epfsc503ApplicationJson)
    ], EpfscResponse.prototype, "epfsc503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Epfsc504ApplicationJson)
    ], EpfscResponse.prototype, "epfsc504ApplicationJsonObject", void 0);
    return EpfscResponse;
}(SpeakeasyBase));
export { EpfscResponse };
