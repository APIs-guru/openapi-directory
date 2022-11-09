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
var UncrdRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(UncrdRequestBodyCertificateParameters, _super);
    function UncrdRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], UncrdRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        Metadata({ data: "json, name=UAN" }),
        __metadata("design:type", String)
    ], UncrdRequestBodyCertificateParameters.prototype, "uan", void 0);
    return UncrdRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { UncrdRequestBodyCertificateParameters };
export var UncrdRequestBodyFormatEnum;
(function (UncrdRequestBodyFormatEnum) {
    UncrdRequestBodyFormatEnum["Pdf"] = "pdf";
})(UncrdRequestBodyFormatEnum || (UncrdRequestBodyFormatEnum = {}));
var UncrdRequestBody = /** @class */ (function (_super) {
    __extends(UncrdRequestBody, _super);
    function UncrdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", UncrdRequestBodyCertificateParameters)
    ], UncrdRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], UncrdRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], UncrdRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], UncrdRequestBody.prototype, "txnId", void 0);
    return UncrdRequestBody;
}(SpeakeasyBase));
export { UncrdRequestBody };
var UncrdSecurity = /** @class */ (function (_super) {
    __extends(UncrdSecurity, _super);
    function UncrdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], UncrdSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], UncrdSecurity.prototype, "clientId", void 0);
    return UncrdSecurity;
}(SpeakeasyBase));
export { UncrdSecurity };
var UncrdRequest = /** @class */ (function (_super) {
    __extends(UncrdRequest, _super);
    function UncrdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UncrdRequestBody)
    ], UncrdRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UncrdSecurity)
    ], UncrdRequest.prototype, "security", void 0);
    return UncrdRequest;
}(SpeakeasyBase));
export { UncrdRequest };
export var Uncrd400ApplicationJsonErrorEnum;
(function (Uncrd400ApplicationJsonErrorEnum) {
    Uncrd400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Uncrd400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Uncrd400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Uncrd400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Uncrd400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Uncrd400ApplicationJsonErrorEnum || (Uncrd400ApplicationJsonErrorEnum = {}));
export var Uncrd400ApplicationJsonErrorDescriptionEnum;
(function (Uncrd400ApplicationJsonErrorDescriptionEnum) {
    Uncrd400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Uncrd400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Uncrd400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Uncrd400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Uncrd400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Uncrd400ApplicationJsonErrorDescriptionEnum || (Uncrd400ApplicationJsonErrorDescriptionEnum = {}));
var Uncrd400ApplicationJson = /** @class */ (function (_super) {
    __extends(Uncrd400ApplicationJson, _super);
    function Uncrd400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Uncrd400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Uncrd400ApplicationJson.prototype, "errorDescription", void 0);
    return Uncrd400ApplicationJson;
}(SpeakeasyBase));
export { Uncrd400ApplicationJson };
export var Uncrd401ApplicationJsonErrorEnum;
(function (Uncrd401ApplicationJsonErrorEnum) {
    Uncrd401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Uncrd401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Uncrd401ApplicationJsonErrorEnum || (Uncrd401ApplicationJsonErrorEnum = {}));
export var Uncrd401ApplicationJsonErrorDescriptionEnum;
(function (Uncrd401ApplicationJsonErrorDescriptionEnum) {
    Uncrd401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Uncrd401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Uncrd401ApplicationJsonErrorDescriptionEnum || (Uncrd401ApplicationJsonErrorDescriptionEnum = {}));
var Uncrd401ApplicationJson = /** @class */ (function (_super) {
    __extends(Uncrd401ApplicationJson, _super);
    function Uncrd401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Uncrd401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Uncrd401ApplicationJson.prototype, "errorDescription", void 0);
    return Uncrd401ApplicationJson;
}(SpeakeasyBase));
export { Uncrd401ApplicationJson };
export var Uncrd404ApplicationJsonErrorEnum;
(function (Uncrd404ApplicationJsonErrorEnum) {
    Uncrd404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Uncrd404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Uncrd404ApplicationJsonErrorEnum || (Uncrd404ApplicationJsonErrorEnum = {}));
export var Uncrd404ApplicationJsonErrorDescriptionEnum;
(function (Uncrd404ApplicationJsonErrorDescriptionEnum) {
    Uncrd404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Uncrd404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Uncrd404ApplicationJsonErrorDescriptionEnum || (Uncrd404ApplicationJsonErrorDescriptionEnum = {}));
var Uncrd404ApplicationJson = /** @class */ (function (_super) {
    __extends(Uncrd404ApplicationJson, _super);
    function Uncrd404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Uncrd404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Uncrd404ApplicationJson.prototype, "errorDescription", void 0);
    return Uncrd404ApplicationJson;
}(SpeakeasyBase));
export { Uncrd404ApplicationJson };
export var Uncrd500ApplicationJsonErrorEnum;
(function (Uncrd500ApplicationJsonErrorEnum) {
    Uncrd500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Uncrd500ApplicationJsonErrorEnum || (Uncrd500ApplicationJsonErrorEnum = {}));
export var Uncrd500ApplicationJsonErrorDescriptionEnum;
(function (Uncrd500ApplicationJsonErrorDescriptionEnum) {
    Uncrd500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Uncrd500ApplicationJsonErrorDescriptionEnum || (Uncrd500ApplicationJsonErrorDescriptionEnum = {}));
var Uncrd500ApplicationJson = /** @class */ (function (_super) {
    __extends(Uncrd500ApplicationJson, _super);
    function Uncrd500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Uncrd500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Uncrd500ApplicationJson.prototype, "errorDescription", void 0);
    return Uncrd500ApplicationJson;
}(SpeakeasyBase));
export { Uncrd500ApplicationJson };
export var Uncrd502ApplicationJsonErrorEnum;
(function (Uncrd502ApplicationJsonErrorEnum) {
    Uncrd502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Uncrd502ApplicationJsonErrorEnum || (Uncrd502ApplicationJsonErrorEnum = {}));
export var Uncrd502ApplicationJsonErrorDescriptionEnum;
(function (Uncrd502ApplicationJsonErrorDescriptionEnum) {
    Uncrd502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Uncrd502ApplicationJsonErrorDescriptionEnum || (Uncrd502ApplicationJsonErrorDescriptionEnum = {}));
var Uncrd502ApplicationJson = /** @class */ (function (_super) {
    __extends(Uncrd502ApplicationJson, _super);
    function Uncrd502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Uncrd502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Uncrd502ApplicationJson.prototype, "errorDescription", void 0);
    return Uncrd502ApplicationJson;
}(SpeakeasyBase));
export { Uncrd502ApplicationJson };
export var Uncrd503ApplicationJsonErrorEnum;
(function (Uncrd503ApplicationJsonErrorEnum) {
    Uncrd503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Uncrd503ApplicationJsonErrorEnum || (Uncrd503ApplicationJsonErrorEnum = {}));
export var Uncrd503ApplicationJsonErrorDescriptionEnum;
(function (Uncrd503ApplicationJsonErrorDescriptionEnum) {
    Uncrd503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Uncrd503ApplicationJsonErrorDescriptionEnum || (Uncrd503ApplicationJsonErrorDescriptionEnum = {}));
var Uncrd503ApplicationJson = /** @class */ (function (_super) {
    __extends(Uncrd503ApplicationJson, _super);
    function Uncrd503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Uncrd503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Uncrd503ApplicationJson.prototype, "errorDescription", void 0);
    return Uncrd503ApplicationJson;
}(SpeakeasyBase));
export { Uncrd503ApplicationJson };
export var Uncrd504ApplicationJsonErrorEnum;
(function (Uncrd504ApplicationJsonErrorEnum) {
    Uncrd504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Uncrd504ApplicationJsonErrorEnum || (Uncrd504ApplicationJsonErrorEnum = {}));
export var Uncrd504ApplicationJsonErrorDescriptionEnum;
(function (Uncrd504ApplicationJsonErrorDescriptionEnum) {
    Uncrd504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Uncrd504ApplicationJsonErrorDescriptionEnum || (Uncrd504ApplicationJsonErrorDescriptionEnum = {}));
var Uncrd504ApplicationJson = /** @class */ (function (_super) {
    __extends(Uncrd504ApplicationJson, _super);
    function Uncrd504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Uncrd504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Uncrd504ApplicationJson.prototype, "errorDescription", void 0);
    return Uncrd504ApplicationJson;
}(SpeakeasyBase));
export { Uncrd504ApplicationJson };
var UncrdResponse = /** @class */ (function (_super) {
    __extends(UncrdResponse, _super);
    function UncrdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UncrdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UncrdResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uncrd400ApplicationJson)
    ], UncrdResponse.prototype, "uncrd400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uncrd401ApplicationJson)
    ], UncrdResponse.prototype, "uncrd401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uncrd404ApplicationJson)
    ], UncrdResponse.prototype, "uncrd404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uncrd500ApplicationJson)
    ], UncrdResponse.prototype, "uncrd500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uncrd502ApplicationJson)
    ], UncrdResponse.prototype, "uncrd502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uncrd503ApplicationJson)
    ], UncrdResponse.prototype, "uncrd503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uncrd504ApplicationJson)
    ], UncrdResponse.prototype, "uncrd504ApplicationJsonObject", void 0);
    return UncrdResponse;
}(SpeakeasyBase));
export { UncrdResponse };
