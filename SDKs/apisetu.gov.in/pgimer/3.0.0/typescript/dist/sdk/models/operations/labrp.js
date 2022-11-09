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
var LabrpRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(LabrpRequestBodyCertificateParameters, _super);
    function LabrpRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], LabrpRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], LabrpRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=GENDER" }),
        __metadata("design:type", String)
    ], LabrpRequestBodyCertificateParameters.prototype, "gender", void 0);
    __decorate([
        Metadata({ data: "json, name=MobileNoRQ" }),
        __metadata("design:type", String)
    ], LabrpRequestBodyCertificateParameters.prototype, "mobileNoRq", void 0);
    return LabrpRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { LabrpRequestBodyCertificateParameters };
export var LabrpRequestBodyFormatEnum;
(function (LabrpRequestBodyFormatEnum) {
    LabrpRequestBodyFormatEnum["Pdf"] = "pdf";
})(LabrpRequestBodyFormatEnum || (LabrpRequestBodyFormatEnum = {}));
var LabrpRequestBody = /** @class */ (function (_super) {
    __extends(LabrpRequestBody, _super);
    function LabrpRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", LabrpRequestBodyCertificateParameters)
    ], LabrpRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], LabrpRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], LabrpRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], LabrpRequestBody.prototype, "txnId", void 0);
    return LabrpRequestBody;
}(SpeakeasyBase));
export { LabrpRequestBody };
var LabrpSecurity = /** @class */ (function (_super) {
    __extends(LabrpSecurity, _super);
    function LabrpSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LabrpSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], LabrpSecurity.prototype, "clientId", void 0);
    return LabrpSecurity;
}(SpeakeasyBase));
export { LabrpSecurity };
var LabrpRequest = /** @class */ (function (_super) {
    __extends(LabrpRequest, _super);
    function LabrpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", LabrpRequestBody)
    ], LabrpRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LabrpSecurity)
    ], LabrpRequest.prototype, "security", void 0);
    return LabrpRequest;
}(SpeakeasyBase));
export { LabrpRequest };
export var Labrp400ApplicationJsonErrorEnum;
(function (Labrp400ApplicationJsonErrorEnum) {
    Labrp400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Labrp400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Labrp400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Labrp400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Labrp400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Labrp400ApplicationJsonErrorEnum || (Labrp400ApplicationJsonErrorEnum = {}));
export var Labrp400ApplicationJsonErrorDescriptionEnum;
(function (Labrp400ApplicationJsonErrorDescriptionEnum) {
    Labrp400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Labrp400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Labrp400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Labrp400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Labrp400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Labrp400ApplicationJsonErrorDescriptionEnum || (Labrp400ApplicationJsonErrorDescriptionEnum = {}));
var Labrp400ApplicationJson = /** @class */ (function (_super) {
    __extends(Labrp400ApplicationJson, _super);
    function Labrp400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Labrp400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Labrp400ApplicationJson.prototype, "errorDescription", void 0);
    return Labrp400ApplicationJson;
}(SpeakeasyBase));
export { Labrp400ApplicationJson };
export var Labrp401ApplicationJsonErrorEnum;
(function (Labrp401ApplicationJsonErrorEnum) {
    Labrp401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Labrp401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Labrp401ApplicationJsonErrorEnum || (Labrp401ApplicationJsonErrorEnum = {}));
export var Labrp401ApplicationJsonErrorDescriptionEnum;
(function (Labrp401ApplicationJsonErrorDescriptionEnum) {
    Labrp401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Labrp401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Labrp401ApplicationJsonErrorDescriptionEnum || (Labrp401ApplicationJsonErrorDescriptionEnum = {}));
var Labrp401ApplicationJson = /** @class */ (function (_super) {
    __extends(Labrp401ApplicationJson, _super);
    function Labrp401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Labrp401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Labrp401ApplicationJson.prototype, "errorDescription", void 0);
    return Labrp401ApplicationJson;
}(SpeakeasyBase));
export { Labrp401ApplicationJson };
export var Labrp404ApplicationJsonErrorEnum;
(function (Labrp404ApplicationJsonErrorEnum) {
    Labrp404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Labrp404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Labrp404ApplicationJsonErrorEnum || (Labrp404ApplicationJsonErrorEnum = {}));
export var Labrp404ApplicationJsonErrorDescriptionEnum;
(function (Labrp404ApplicationJsonErrorDescriptionEnum) {
    Labrp404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Labrp404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Labrp404ApplicationJsonErrorDescriptionEnum || (Labrp404ApplicationJsonErrorDescriptionEnum = {}));
var Labrp404ApplicationJson = /** @class */ (function (_super) {
    __extends(Labrp404ApplicationJson, _super);
    function Labrp404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Labrp404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Labrp404ApplicationJson.prototype, "errorDescription", void 0);
    return Labrp404ApplicationJson;
}(SpeakeasyBase));
export { Labrp404ApplicationJson };
export var Labrp500ApplicationJsonErrorEnum;
(function (Labrp500ApplicationJsonErrorEnum) {
    Labrp500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Labrp500ApplicationJsonErrorEnum || (Labrp500ApplicationJsonErrorEnum = {}));
export var Labrp500ApplicationJsonErrorDescriptionEnum;
(function (Labrp500ApplicationJsonErrorDescriptionEnum) {
    Labrp500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Labrp500ApplicationJsonErrorDescriptionEnum || (Labrp500ApplicationJsonErrorDescriptionEnum = {}));
var Labrp500ApplicationJson = /** @class */ (function (_super) {
    __extends(Labrp500ApplicationJson, _super);
    function Labrp500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Labrp500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Labrp500ApplicationJson.prototype, "errorDescription", void 0);
    return Labrp500ApplicationJson;
}(SpeakeasyBase));
export { Labrp500ApplicationJson };
export var Labrp502ApplicationJsonErrorEnum;
(function (Labrp502ApplicationJsonErrorEnum) {
    Labrp502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Labrp502ApplicationJsonErrorEnum || (Labrp502ApplicationJsonErrorEnum = {}));
export var Labrp502ApplicationJsonErrorDescriptionEnum;
(function (Labrp502ApplicationJsonErrorDescriptionEnum) {
    Labrp502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Labrp502ApplicationJsonErrorDescriptionEnum || (Labrp502ApplicationJsonErrorDescriptionEnum = {}));
var Labrp502ApplicationJson = /** @class */ (function (_super) {
    __extends(Labrp502ApplicationJson, _super);
    function Labrp502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Labrp502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Labrp502ApplicationJson.prototype, "errorDescription", void 0);
    return Labrp502ApplicationJson;
}(SpeakeasyBase));
export { Labrp502ApplicationJson };
export var Labrp503ApplicationJsonErrorEnum;
(function (Labrp503ApplicationJsonErrorEnum) {
    Labrp503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Labrp503ApplicationJsonErrorEnum || (Labrp503ApplicationJsonErrorEnum = {}));
export var Labrp503ApplicationJsonErrorDescriptionEnum;
(function (Labrp503ApplicationJsonErrorDescriptionEnum) {
    Labrp503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Labrp503ApplicationJsonErrorDescriptionEnum || (Labrp503ApplicationJsonErrorDescriptionEnum = {}));
var Labrp503ApplicationJson = /** @class */ (function (_super) {
    __extends(Labrp503ApplicationJson, _super);
    function Labrp503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Labrp503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Labrp503ApplicationJson.prototype, "errorDescription", void 0);
    return Labrp503ApplicationJson;
}(SpeakeasyBase));
export { Labrp503ApplicationJson };
export var Labrp504ApplicationJsonErrorEnum;
(function (Labrp504ApplicationJsonErrorEnum) {
    Labrp504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Labrp504ApplicationJsonErrorEnum || (Labrp504ApplicationJsonErrorEnum = {}));
export var Labrp504ApplicationJsonErrorDescriptionEnum;
(function (Labrp504ApplicationJsonErrorDescriptionEnum) {
    Labrp504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Labrp504ApplicationJsonErrorDescriptionEnum || (Labrp504ApplicationJsonErrorDescriptionEnum = {}));
var Labrp504ApplicationJson = /** @class */ (function (_super) {
    __extends(Labrp504ApplicationJson, _super);
    function Labrp504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Labrp504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Labrp504ApplicationJson.prototype, "errorDescription", void 0);
    return Labrp504ApplicationJson;
}(SpeakeasyBase));
export { Labrp504ApplicationJson };
var LabrpResponse = /** @class */ (function (_super) {
    __extends(LabrpResponse, _super);
    function LabrpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LabrpResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LabrpResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Labrp400ApplicationJson)
    ], LabrpResponse.prototype, "labrp400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Labrp401ApplicationJson)
    ], LabrpResponse.prototype, "labrp401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Labrp404ApplicationJson)
    ], LabrpResponse.prototype, "labrp404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Labrp500ApplicationJson)
    ], LabrpResponse.prototype, "labrp500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Labrp502ApplicationJson)
    ], LabrpResponse.prototype, "labrp502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Labrp503ApplicationJson)
    ], LabrpResponse.prototype, "labrp503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Labrp504ApplicationJson)
    ], LabrpResponse.prototype, "labrp504ApplicationJsonObject", void 0);
    return LabrpResponse;
}(SpeakeasyBase));
export { LabrpResponse };
