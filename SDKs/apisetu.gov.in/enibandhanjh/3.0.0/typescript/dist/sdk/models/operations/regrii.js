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
var RegriiRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RegriiRequestBodyCertificateParameters, _super);
    function RegriiRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], RegriiRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=regno" }),
        __metadata("design:type", String)
    ], RegriiRequestBodyCertificateParameters.prototype, "regno", void 0);
    __decorate([
        Metadata({ data: "json, name=sro_id" }),
        __metadata("design:type", String)
    ], RegriiRequestBodyCertificateParameters.prototype, "sroId", void 0);
    __decorate([
        Metadata({ data: "json, name=yr" }),
        __metadata("design:type", String)
    ], RegriiRequestBodyCertificateParameters.prototype, "yr", void 0);
    return RegriiRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { RegriiRequestBodyCertificateParameters };
export var RegriiRequestBodyFormatEnum;
(function (RegriiRequestBodyFormatEnum) {
    RegriiRequestBodyFormatEnum["Pdf"] = "pdf";
})(RegriiRequestBodyFormatEnum || (RegriiRequestBodyFormatEnum = {}));
var RegriiRequestBody = /** @class */ (function (_super) {
    __extends(RegriiRequestBody, _super);
    function RegriiRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RegriiRequestBodyCertificateParameters)
    ], RegriiRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RegriiRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RegriiRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RegriiRequestBody.prototype, "txnId", void 0);
    return RegriiRequestBody;
}(SpeakeasyBase));
export { RegriiRequestBody };
var RegriiSecurity = /** @class */ (function (_super) {
    __extends(RegriiSecurity, _super);
    function RegriiSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RegriiSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RegriiSecurity.prototype, "clientId", void 0);
    return RegriiSecurity;
}(SpeakeasyBase));
export { RegriiSecurity };
var RegriiRequest = /** @class */ (function (_super) {
    __extends(RegriiRequest, _super);
    function RegriiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RegriiRequestBody)
    ], RegriiRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RegriiSecurity)
    ], RegriiRequest.prototype, "security", void 0);
    return RegriiRequest;
}(SpeakeasyBase));
export { RegriiRequest };
export var Regrii400ApplicationJsonErrorEnum;
(function (Regrii400ApplicationJsonErrorEnum) {
    Regrii400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Regrii400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Regrii400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Regrii400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Regrii400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Regrii400ApplicationJsonErrorEnum || (Regrii400ApplicationJsonErrorEnum = {}));
export var Regrii400ApplicationJsonErrorDescriptionEnum;
(function (Regrii400ApplicationJsonErrorDescriptionEnum) {
    Regrii400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Regrii400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Regrii400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Regrii400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Regrii400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Regrii400ApplicationJsonErrorDescriptionEnum || (Regrii400ApplicationJsonErrorDescriptionEnum = {}));
var Regrii400ApplicationJson = /** @class */ (function (_super) {
    __extends(Regrii400ApplicationJson, _super);
    function Regrii400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Regrii400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Regrii400ApplicationJson.prototype, "errorDescription", void 0);
    return Regrii400ApplicationJson;
}(SpeakeasyBase));
export { Regrii400ApplicationJson };
export var Regrii401ApplicationJsonErrorEnum;
(function (Regrii401ApplicationJsonErrorEnum) {
    Regrii401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Regrii401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Regrii401ApplicationJsonErrorEnum || (Regrii401ApplicationJsonErrorEnum = {}));
export var Regrii401ApplicationJsonErrorDescriptionEnum;
(function (Regrii401ApplicationJsonErrorDescriptionEnum) {
    Regrii401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Regrii401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Regrii401ApplicationJsonErrorDescriptionEnum || (Regrii401ApplicationJsonErrorDescriptionEnum = {}));
var Regrii401ApplicationJson = /** @class */ (function (_super) {
    __extends(Regrii401ApplicationJson, _super);
    function Regrii401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Regrii401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Regrii401ApplicationJson.prototype, "errorDescription", void 0);
    return Regrii401ApplicationJson;
}(SpeakeasyBase));
export { Regrii401ApplicationJson };
export var Regrii404ApplicationJsonErrorEnum;
(function (Regrii404ApplicationJsonErrorEnum) {
    Regrii404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Regrii404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Regrii404ApplicationJsonErrorEnum || (Regrii404ApplicationJsonErrorEnum = {}));
export var Regrii404ApplicationJsonErrorDescriptionEnum;
(function (Regrii404ApplicationJsonErrorDescriptionEnum) {
    Regrii404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Regrii404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Regrii404ApplicationJsonErrorDescriptionEnum || (Regrii404ApplicationJsonErrorDescriptionEnum = {}));
var Regrii404ApplicationJson = /** @class */ (function (_super) {
    __extends(Regrii404ApplicationJson, _super);
    function Regrii404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Regrii404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Regrii404ApplicationJson.prototype, "errorDescription", void 0);
    return Regrii404ApplicationJson;
}(SpeakeasyBase));
export { Regrii404ApplicationJson };
export var Regrii500ApplicationJsonErrorEnum;
(function (Regrii500ApplicationJsonErrorEnum) {
    Regrii500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Regrii500ApplicationJsonErrorEnum || (Regrii500ApplicationJsonErrorEnum = {}));
export var Regrii500ApplicationJsonErrorDescriptionEnum;
(function (Regrii500ApplicationJsonErrorDescriptionEnum) {
    Regrii500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Regrii500ApplicationJsonErrorDescriptionEnum || (Regrii500ApplicationJsonErrorDescriptionEnum = {}));
var Regrii500ApplicationJson = /** @class */ (function (_super) {
    __extends(Regrii500ApplicationJson, _super);
    function Regrii500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Regrii500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Regrii500ApplicationJson.prototype, "errorDescription", void 0);
    return Regrii500ApplicationJson;
}(SpeakeasyBase));
export { Regrii500ApplicationJson };
export var Regrii502ApplicationJsonErrorEnum;
(function (Regrii502ApplicationJsonErrorEnum) {
    Regrii502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Regrii502ApplicationJsonErrorEnum || (Regrii502ApplicationJsonErrorEnum = {}));
export var Regrii502ApplicationJsonErrorDescriptionEnum;
(function (Regrii502ApplicationJsonErrorDescriptionEnum) {
    Regrii502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Regrii502ApplicationJsonErrorDescriptionEnum || (Regrii502ApplicationJsonErrorDescriptionEnum = {}));
var Regrii502ApplicationJson = /** @class */ (function (_super) {
    __extends(Regrii502ApplicationJson, _super);
    function Regrii502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Regrii502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Regrii502ApplicationJson.prototype, "errorDescription", void 0);
    return Regrii502ApplicationJson;
}(SpeakeasyBase));
export { Regrii502ApplicationJson };
export var Regrii503ApplicationJsonErrorEnum;
(function (Regrii503ApplicationJsonErrorEnum) {
    Regrii503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Regrii503ApplicationJsonErrorEnum || (Regrii503ApplicationJsonErrorEnum = {}));
export var Regrii503ApplicationJsonErrorDescriptionEnum;
(function (Regrii503ApplicationJsonErrorDescriptionEnum) {
    Regrii503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Regrii503ApplicationJsonErrorDescriptionEnum || (Regrii503ApplicationJsonErrorDescriptionEnum = {}));
var Regrii503ApplicationJson = /** @class */ (function (_super) {
    __extends(Regrii503ApplicationJson, _super);
    function Regrii503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Regrii503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Regrii503ApplicationJson.prototype, "errorDescription", void 0);
    return Regrii503ApplicationJson;
}(SpeakeasyBase));
export { Regrii503ApplicationJson };
export var Regrii504ApplicationJsonErrorEnum;
(function (Regrii504ApplicationJsonErrorEnum) {
    Regrii504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Regrii504ApplicationJsonErrorEnum || (Regrii504ApplicationJsonErrorEnum = {}));
export var Regrii504ApplicationJsonErrorDescriptionEnum;
(function (Regrii504ApplicationJsonErrorDescriptionEnum) {
    Regrii504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Regrii504ApplicationJsonErrorDescriptionEnum || (Regrii504ApplicationJsonErrorDescriptionEnum = {}));
var Regrii504ApplicationJson = /** @class */ (function (_super) {
    __extends(Regrii504ApplicationJson, _super);
    function Regrii504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Regrii504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Regrii504ApplicationJson.prototype, "errorDescription", void 0);
    return Regrii504ApplicationJson;
}(SpeakeasyBase));
export { Regrii504ApplicationJson };
var RegriiResponse = /** @class */ (function (_super) {
    __extends(RegriiResponse, _super);
    function RegriiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RegriiResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RegriiResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Regrii400ApplicationJson)
    ], RegriiResponse.prototype, "regrii400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Regrii401ApplicationJson)
    ], RegriiResponse.prototype, "regrii401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Regrii404ApplicationJson)
    ], RegriiResponse.prototype, "regrii404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Regrii500ApplicationJson)
    ], RegriiResponse.prototype, "regrii500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Regrii502ApplicationJson)
    ], RegriiResponse.prototype, "regrii502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Regrii503ApplicationJson)
    ], RegriiResponse.prototype, "regrii503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Regrii504ApplicationJson)
    ], RegriiResponse.prototype, "regrii504ApplicationJsonObject", void 0);
    return RegriiResponse;
}(SpeakeasyBase));
export { RegriiResponse };
