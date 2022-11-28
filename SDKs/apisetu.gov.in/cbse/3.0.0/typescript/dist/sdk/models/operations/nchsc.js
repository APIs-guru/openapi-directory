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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var NchscRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(NchscRequestBodyCertificateParameters, _super);
    function NchscRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], NchscRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], NchscRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], NchscRequestBodyCertificateParameters.prototype, "year", void 0);
    return NchscRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { NchscRequestBodyCertificateParameters };
export var NchscRequestBodyFormatEnum;
(function (NchscRequestBodyFormatEnum) {
    NchscRequestBodyFormatEnum["Pdf"] = "pdf";
})(NchscRequestBodyFormatEnum || (NchscRequestBodyFormatEnum = {}));
var NchscRequestBody = /** @class */ (function (_super) {
    __extends(NchscRequestBody, _super);
    function NchscRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", NchscRequestBodyCertificateParameters)
    ], NchscRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], NchscRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], NchscRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], NchscRequestBody.prototype, "txnId", void 0);
    return NchscRequestBody;
}(SpeakeasyBase));
export { NchscRequestBody };
var NchscSecurity = /** @class */ (function (_super) {
    __extends(NchscSecurity, _super);
    function NchscSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], NchscSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], NchscSecurity.prototype, "clientId", void 0);
    return NchscSecurity;
}(SpeakeasyBase));
export { NchscSecurity };
export var Nchsc400ApplicationJsonErrorEnum;
(function (Nchsc400ApplicationJsonErrorEnum) {
    Nchsc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Nchsc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Nchsc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Nchsc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Nchsc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Nchsc400ApplicationJsonErrorEnum || (Nchsc400ApplicationJsonErrorEnum = {}));
export var Nchsc400ApplicationJsonErrorDescriptionEnum;
(function (Nchsc400ApplicationJsonErrorDescriptionEnum) {
    Nchsc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Nchsc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Nchsc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Nchsc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Nchsc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Nchsc400ApplicationJsonErrorDescriptionEnum || (Nchsc400ApplicationJsonErrorDescriptionEnum = {}));
var Nchsc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Nchsc400ApplicationJson, _super);
    function Nchsc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nchsc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nchsc400ApplicationJson.prototype, "errorDescription", void 0);
    return Nchsc400ApplicationJson;
}(SpeakeasyBase));
export { Nchsc400ApplicationJson };
export var Nchsc401ApplicationJsonErrorEnum;
(function (Nchsc401ApplicationJsonErrorEnum) {
    Nchsc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Nchsc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Nchsc401ApplicationJsonErrorEnum || (Nchsc401ApplicationJsonErrorEnum = {}));
export var Nchsc401ApplicationJsonErrorDescriptionEnum;
(function (Nchsc401ApplicationJsonErrorDescriptionEnum) {
    Nchsc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Nchsc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Nchsc401ApplicationJsonErrorDescriptionEnum || (Nchsc401ApplicationJsonErrorDescriptionEnum = {}));
var Nchsc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Nchsc401ApplicationJson, _super);
    function Nchsc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nchsc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nchsc401ApplicationJson.prototype, "errorDescription", void 0);
    return Nchsc401ApplicationJson;
}(SpeakeasyBase));
export { Nchsc401ApplicationJson };
export var Nchsc404ApplicationJsonErrorEnum;
(function (Nchsc404ApplicationJsonErrorEnum) {
    Nchsc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Nchsc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Nchsc404ApplicationJsonErrorEnum || (Nchsc404ApplicationJsonErrorEnum = {}));
export var Nchsc404ApplicationJsonErrorDescriptionEnum;
(function (Nchsc404ApplicationJsonErrorDescriptionEnum) {
    Nchsc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Nchsc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Nchsc404ApplicationJsonErrorDescriptionEnum || (Nchsc404ApplicationJsonErrorDescriptionEnum = {}));
var Nchsc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Nchsc404ApplicationJson, _super);
    function Nchsc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nchsc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nchsc404ApplicationJson.prototype, "errorDescription", void 0);
    return Nchsc404ApplicationJson;
}(SpeakeasyBase));
export { Nchsc404ApplicationJson };
export var Nchsc500ApplicationJsonErrorEnum;
(function (Nchsc500ApplicationJsonErrorEnum) {
    Nchsc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Nchsc500ApplicationJsonErrorEnum || (Nchsc500ApplicationJsonErrorEnum = {}));
export var Nchsc500ApplicationJsonErrorDescriptionEnum;
(function (Nchsc500ApplicationJsonErrorDescriptionEnum) {
    Nchsc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Nchsc500ApplicationJsonErrorDescriptionEnum || (Nchsc500ApplicationJsonErrorDescriptionEnum = {}));
var Nchsc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Nchsc500ApplicationJson, _super);
    function Nchsc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nchsc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nchsc500ApplicationJson.prototype, "errorDescription", void 0);
    return Nchsc500ApplicationJson;
}(SpeakeasyBase));
export { Nchsc500ApplicationJson };
export var Nchsc502ApplicationJsonErrorEnum;
(function (Nchsc502ApplicationJsonErrorEnum) {
    Nchsc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Nchsc502ApplicationJsonErrorEnum || (Nchsc502ApplicationJsonErrorEnum = {}));
export var Nchsc502ApplicationJsonErrorDescriptionEnum;
(function (Nchsc502ApplicationJsonErrorDescriptionEnum) {
    Nchsc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Nchsc502ApplicationJsonErrorDescriptionEnum || (Nchsc502ApplicationJsonErrorDescriptionEnum = {}));
var Nchsc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Nchsc502ApplicationJson, _super);
    function Nchsc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nchsc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nchsc502ApplicationJson.prototype, "errorDescription", void 0);
    return Nchsc502ApplicationJson;
}(SpeakeasyBase));
export { Nchsc502ApplicationJson };
export var Nchsc503ApplicationJsonErrorEnum;
(function (Nchsc503ApplicationJsonErrorEnum) {
    Nchsc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Nchsc503ApplicationJsonErrorEnum || (Nchsc503ApplicationJsonErrorEnum = {}));
export var Nchsc503ApplicationJsonErrorDescriptionEnum;
(function (Nchsc503ApplicationJsonErrorDescriptionEnum) {
    Nchsc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Nchsc503ApplicationJsonErrorDescriptionEnum || (Nchsc503ApplicationJsonErrorDescriptionEnum = {}));
var Nchsc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Nchsc503ApplicationJson, _super);
    function Nchsc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nchsc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nchsc503ApplicationJson.prototype, "errorDescription", void 0);
    return Nchsc503ApplicationJson;
}(SpeakeasyBase));
export { Nchsc503ApplicationJson };
export var Nchsc504ApplicationJsonErrorEnum;
(function (Nchsc504ApplicationJsonErrorEnum) {
    Nchsc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Nchsc504ApplicationJsonErrorEnum || (Nchsc504ApplicationJsonErrorEnum = {}));
export var Nchsc504ApplicationJsonErrorDescriptionEnum;
(function (Nchsc504ApplicationJsonErrorDescriptionEnum) {
    Nchsc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Nchsc504ApplicationJsonErrorDescriptionEnum || (Nchsc504ApplicationJsonErrorDescriptionEnum = {}));
var Nchsc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Nchsc504ApplicationJson, _super);
    function Nchsc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nchsc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nchsc504ApplicationJson.prototype, "errorDescription", void 0);
    return Nchsc504ApplicationJson;
}(SpeakeasyBase));
export { Nchsc504ApplicationJson };
var NchscRequest = /** @class */ (function (_super) {
    __extends(NchscRequest, _super);
    function NchscRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", NchscRequestBody)
    ], NchscRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NchscSecurity)
    ], NchscRequest.prototype, "security", void 0);
    return NchscRequest;
}(SpeakeasyBase));
export { NchscRequest };
var NchscResponse = /** @class */ (function (_super) {
    __extends(NchscResponse, _super);
    function NchscResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NchscResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NchscResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Nchsc400ApplicationJson)
    ], NchscResponse.prototype, "nchsc400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Nchsc401ApplicationJson)
    ], NchscResponse.prototype, "nchsc401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Nchsc404ApplicationJson)
    ], NchscResponse.prototype, "nchsc404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Nchsc500ApplicationJson)
    ], NchscResponse.prototype, "nchsc500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Nchsc502ApplicationJson)
    ], NchscResponse.prototype, "nchsc502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Nchsc503ApplicationJson)
    ], NchscResponse.prototype, "nchsc503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Nchsc504ApplicationJson)
    ], NchscResponse.prototype, "nchsc504ApplicationJsonObject", void 0);
    return NchscResponse;
}(SpeakeasyBase));
export { NchscResponse };
