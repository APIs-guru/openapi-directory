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
var NtltrRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(NtltrRequestBodyCertificateParameters, _super);
    function NtltrRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], NtltrRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], NtltrRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], NtltrRequestBodyCertificateParameters.prototype, "year", void 0);
    return NtltrRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { NtltrRequestBodyCertificateParameters };
export var NtltrRequestBodyFormatEnum;
(function (NtltrRequestBodyFormatEnum) {
    NtltrRequestBodyFormatEnum["Pdf"] = "pdf";
})(NtltrRequestBodyFormatEnum || (NtltrRequestBodyFormatEnum = {}));
var NtltrRequestBody = /** @class */ (function (_super) {
    __extends(NtltrRequestBody, _super);
    function NtltrRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", NtltrRequestBodyCertificateParameters)
    ], NtltrRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], NtltrRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], NtltrRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], NtltrRequestBody.prototype, "txnId", void 0);
    return NtltrRequestBody;
}(SpeakeasyBase));
export { NtltrRequestBody };
var NtltrSecurity = /** @class */ (function (_super) {
    __extends(NtltrSecurity, _super);
    function NtltrSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], NtltrSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], NtltrSecurity.prototype, "clientId", void 0);
    return NtltrSecurity;
}(SpeakeasyBase));
export { NtltrSecurity };
export var Ntltr400ApplicationJsonErrorEnum;
(function (Ntltr400ApplicationJsonErrorEnum) {
    Ntltr400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Ntltr400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Ntltr400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Ntltr400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Ntltr400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Ntltr400ApplicationJsonErrorEnum || (Ntltr400ApplicationJsonErrorEnum = {}));
export var Ntltr400ApplicationJsonErrorDescriptionEnum;
(function (Ntltr400ApplicationJsonErrorDescriptionEnum) {
    Ntltr400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Ntltr400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Ntltr400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Ntltr400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Ntltr400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Ntltr400ApplicationJsonErrorDescriptionEnum || (Ntltr400ApplicationJsonErrorDescriptionEnum = {}));
var Ntltr400ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntltr400ApplicationJson, _super);
    function Ntltr400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntltr400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntltr400ApplicationJson.prototype, "errorDescription", void 0);
    return Ntltr400ApplicationJson;
}(SpeakeasyBase));
export { Ntltr400ApplicationJson };
export var Ntltr401ApplicationJsonErrorEnum;
(function (Ntltr401ApplicationJsonErrorEnum) {
    Ntltr401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Ntltr401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Ntltr401ApplicationJsonErrorEnum || (Ntltr401ApplicationJsonErrorEnum = {}));
export var Ntltr401ApplicationJsonErrorDescriptionEnum;
(function (Ntltr401ApplicationJsonErrorDescriptionEnum) {
    Ntltr401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Ntltr401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Ntltr401ApplicationJsonErrorDescriptionEnum || (Ntltr401ApplicationJsonErrorDescriptionEnum = {}));
var Ntltr401ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntltr401ApplicationJson, _super);
    function Ntltr401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntltr401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntltr401ApplicationJson.prototype, "errorDescription", void 0);
    return Ntltr401ApplicationJson;
}(SpeakeasyBase));
export { Ntltr401ApplicationJson };
export var Ntltr404ApplicationJsonErrorEnum;
(function (Ntltr404ApplicationJsonErrorEnum) {
    Ntltr404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Ntltr404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Ntltr404ApplicationJsonErrorEnum || (Ntltr404ApplicationJsonErrorEnum = {}));
export var Ntltr404ApplicationJsonErrorDescriptionEnum;
(function (Ntltr404ApplicationJsonErrorDescriptionEnum) {
    Ntltr404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Ntltr404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Ntltr404ApplicationJsonErrorDescriptionEnum || (Ntltr404ApplicationJsonErrorDescriptionEnum = {}));
var Ntltr404ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntltr404ApplicationJson, _super);
    function Ntltr404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntltr404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntltr404ApplicationJson.prototype, "errorDescription", void 0);
    return Ntltr404ApplicationJson;
}(SpeakeasyBase));
export { Ntltr404ApplicationJson };
export var Ntltr500ApplicationJsonErrorEnum;
(function (Ntltr500ApplicationJsonErrorEnum) {
    Ntltr500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Ntltr500ApplicationJsonErrorEnum || (Ntltr500ApplicationJsonErrorEnum = {}));
export var Ntltr500ApplicationJsonErrorDescriptionEnum;
(function (Ntltr500ApplicationJsonErrorDescriptionEnum) {
    Ntltr500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Ntltr500ApplicationJsonErrorDescriptionEnum || (Ntltr500ApplicationJsonErrorDescriptionEnum = {}));
var Ntltr500ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntltr500ApplicationJson, _super);
    function Ntltr500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntltr500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntltr500ApplicationJson.prototype, "errorDescription", void 0);
    return Ntltr500ApplicationJson;
}(SpeakeasyBase));
export { Ntltr500ApplicationJson };
export var Ntltr502ApplicationJsonErrorEnum;
(function (Ntltr502ApplicationJsonErrorEnum) {
    Ntltr502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Ntltr502ApplicationJsonErrorEnum || (Ntltr502ApplicationJsonErrorEnum = {}));
export var Ntltr502ApplicationJsonErrorDescriptionEnum;
(function (Ntltr502ApplicationJsonErrorDescriptionEnum) {
    Ntltr502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Ntltr502ApplicationJsonErrorDescriptionEnum || (Ntltr502ApplicationJsonErrorDescriptionEnum = {}));
var Ntltr502ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntltr502ApplicationJson, _super);
    function Ntltr502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntltr502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntltr502ApplicationJson.prototype, "errorDescription", void 0);
    return Ntltr502ApplicationJson;
}(SpeakeasyBase));
export { Ntltr502ApplicationJson };
export var Ntltr503ApplicationJsonErrorEnum;
(function (Ntltr503ApplicationJsonErrorEnum) {
    Ntltr503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Ntltr503ApplicationJsonErrorEnum || (Ntltr503ApplicationJsonErrorEnum = {}));
export var Ntltr503ApplicationJsonErrorDescriptionEnum;
(function (Ntltr503ApplicationJsonErrorDescriptionEnum) {
    Ntltr503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Ntltr503ApplicationJsonErrorDescriptionEnum || (Ntltr503ApplicationJsonErrorDescriptionEnum = {}));
var Ntltr503ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntltr503ApplicationJson, _super);
    function Ntltr503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntltr503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntltr503ApplicationJson.prototype, "errorDescription", void 0);
    return Ntltr503ApplicationJson;
}(SpeakeasyBase));
export { Ntltr503ApplicationJson };
export var Ntltr504ApplicationJsonErrorEnum;
(function (Ntltr504ApplicationJsonErrorEnum) {
    Ntltr504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Ntltr504ApplicationJsonErrorEnum || (Ntltr504ApplicationJsonErrorEnum = {}));
export var Ntltr504ApplicationJsonErrorDescriptionEnum;
(function (Ntltr504ApplicationJsonErrorDescriptionEnum) {
    Ntltr504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Ntltr504ApplicationJsonErrorDescriptionEnum || (Ntltr504ApplicationJsonErrorDescriptionEnum = {}));
var Ntltr504ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntltr504ApplicationJson, _super);
    function Ntltr504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntltr504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntltr504ApplicationJson.prototype, "errorDescription", void 0);
    return Ntltr504ApplicationJson;
}(SpeakeasyBase));
export { Ntltr504ApplicationJson };
var NtltrRequest = /** @class */ (function (_super) {
    __extends(NtltrRequest, _super);
    function NtltrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", NtltrRequestBody)
    ], NtltrRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NtltrSecurity)
    ], NtltrRequest.prototype, "security", void 0);
    return NtltrRequest;
}(SpeakeasyBase));
export { NtltrRequest };
var NtltrResponse = /** @class */ (function (_super) {
    __extends(NtltrResponse, _super);
    function NtltrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NtltrResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NtltrResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ntltr400ApplicationJson)
    ], NtltrResponse.prototype, "ntltr400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ntltr401ApplicationJson)
    ], NtltrResponse.prototype, "ntltr401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ntltr404ApplicationJson)
    ], NtltrResponse.prototype, "ntltr404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ntltr500ApplicationJson)
    ], NtltrResponse.prototype, "ntltr500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ntltr502ApplicationJson)
    ], NtltrResponse.prototype, "ntltr502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ntltr503ApplicationJson)
    ], NtltrResponse.prototype, "ntltr503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ntltr504ApplicationJson)
    ], NtltrResponse.prototype, "ntltr504ApplicationJsonObject", void 0);
    return NtltrResponse;
}(SpeakeasyBase));
export { NtltrResponse };
