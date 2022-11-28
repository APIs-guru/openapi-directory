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
var AdcrdRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(AdcrdRequestBodyCertificateParameters, _super);
    function AdcrdRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationNo" }),
        __metadata("design:type", String)
    ], AdcrdRequestBodyCertificateParameters.prototype, "applicationNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], AdcrdRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExamYear" }),
        __metadata("design:type", String)
    ], AdcrdRequestBodyCertificateParameters.prototype, "examYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], AdcrdRequestBodyCertificateParameters.prototype, "fullName", void 0);
    return AdcrdRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { AdcrdRequestBodyCertificateParameters };
export var AdcrdRequestBodyFormatEnum;
(function (AdcrdRequestBodyFormatEnum) {
    AdcrdRequestBodyFormatEnum["Pdf"] = "pdf";
})(AdcrdRequestBodyFormatEnum || (AdcrdRequestBodyFormatEnum = {}));
var AdcrdRequestBody = /** @class */ (function (_super) {
    __extends(AdcrdRequestBody, _super);
    function AdcrdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", AdcrdRequestBodyCertificateParameters)
    ], AdcrdRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], AdcrdRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AdcrdRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], AdcrdRequestBody.prototype, "txnId", void 0);
    return AdcrdRequestBody;
}(SpeakeasyBase));
export { AdcrdRequestBody };
var AdcrdSecurity = /** @class */ (function (_super) {
    __extends(AdcrdSecurity, _super);
    function AdcrdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], AdcrdSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], AdcrdSecurity.prototype, "clientId", void 0);
    return AdcrdSecurity;
}(SpeakeasyBase));
export { AdcrdSecurity };
export var Adcrd400ApplicationJsonErrorEnum;
(function (Adcrd400ApplicationJsonErrorEnum) {
    Adcrd400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Adcrd400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Adcrd400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Adcrd400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Adcrd400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Adcrd400ApplicationJsonErrorEnum || (Adcrd400ApplicationJsonErrorEnum = {}));
export var Adcrd400ApplicationJsonErrorDescriptionEnum;
(function (Adcrd400ApplicationJsonErrorDescriptionEnum) {
    Adcrd400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Adcrd400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Adcrd400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Adcrd400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Adcrd400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Adcrd400ApplicationJsonErrorDescriptionEnum || (Adcrd400ApplicationJsonErrorDescriptionEnum = {}));
var Adcrd400ApplicationJson = /** @class */ (function (_super) {
    __extends(Adcrd400ApplicationJson, _super);
    function Adcrd400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Adcrd400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Adcrd400ApplicationJson.prototype, "errorDescription", void 0);
    return Adcrd400ApplicationJson;
}(SpeakeasyBase));
export { Adcrd400ApplicationJson };
export var Adcrd401ApplicationJsonErrorEnum;
(function (Adcrd401ApplicationJsonErrorEnum) {
    Adcrd401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Adcrd401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Adcrd401ApplicationJsonErrorEnum || (Adcrd401ApplicationJsonErrorEnum = {}));
export var Adcrd401ApplicationJsonErrorDescriptionEnum;
(function (Adcrd401ApplicationJsonErrorDescriptionEnum) {
    Adcrd401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Adcrd401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Adcrd401ApplicationJsonErrorDescriptionEnum || (Adcrd401ApplicationJsonErrorDescriptionEnum = {}));
var Adcrd401ApplicationJson = /** @class */ (function (_super) {
    __extends(Adcrd401ApplicationJson, _super);
    function Adcrd401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Adcrd401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Adcrd401ApplicationJson.prototype, "errorDescription", void 0);
    return Adcrd401ApplicationJson;
}(SpeakeasyBase));
export { Adcrd401ApplicationJson };
export var Adcrd404ApplicationJsonErrorEnum;
(function (Adcrd404ApplicationJsonErrorEnum) {
    Adcrd404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Adcrd404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Adcrd404ApplicationJsonErrorEnum || (Adcrd404ApplicationJsonErrorEnum = {}));
export var Adcrd404ApplicationJsonErrorDescriptionEnum;
(function (Adcrd404ApplicationJsonErrorDescriptionEnum) {
    Adcrd404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Adcrd404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Adcrd404ApplicationJsonErrorDescriptionEnum || (Adcrd404ApplicationJsonErrorDescriptionEnum = {}));
var Adcrd404ApplicationJson = /** @class */ (function (_super) {
    __extends(Adcrd404ApplicationJson, _super);
    function Adcrd404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Adcrd404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Adcrd404ApplicationJson.prototype, "errorDescription", void 0);
    return Adcrd404ApplicationJson;
}(SpeakeasyBase));
export { Adcrd404ApplicationJson };
export var Adcrd500ApplicationJsonErrorEnum;
(function (Adcrd500ApplicationJsonErrorEnum) {
    Adcrd500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Adcrd500ApplicationJsonErrorEnum || (Adcrd500ApplicationJsonErrorEnum = {}));
export var Adcrd500ApplicationJsonErrorDescriptionEnum;
(function (Adcrd500ApplicationJsonErrorDescriptionEnum) {
    Adcrd500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Adcrd500ApplicationJsonErrorDescriptionEnum || (Adcrd500ApplicationJsonErrorDescriptionEnum = {}));
var Adcrd500ApplicationJson = /** @class */ (function (_super) {
    __extends(Adcrd500ApplicationJson, _super);
    function Adcrd500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Adcrd500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Adcrd500ApplicationJson.prototype, "errorDescription", void 0);
    return Adcrd500ApplicationJson;
}(SpeakeasyBase));
export { Adcrd500ApplicationJson };
export var Adcrd502ApplicationJsonErrorEnum;
(function (Adcrd502ApplicationJsonErrorEnum) {
    Adcrd502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Adcrd502ApplicationJsonErrorEnum || (Adcrd502ApplicationJsonErrorEnum = {}));
export var Adcrd502ApplicationJsonErrorDescriptionEnum;
(function (Adcrd502ApplicationJsonErrorDescriptionEnum) {
    Adcrd502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Adcrd502ApplicationJsonErrorDescriptionEnum || (Adcrd502ApplicationJsonErrorDescriptionEnum = {}));
var Adcrd502ApplicationJson = /** @class */ (function (_super) {
    __extends(Adcrd502ApplicationJson, _super);
    function Adcrd502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Adcrd502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Adcrd502ApplicationJson.prototype, "errorDescription", void 0);
    return Adcrd502ApplicationJson;
}(SpeakeasyBase));
export { Adcrd502ApplicationJson };
export var Adcrd503ApplicationJsonErrorEnum;
(function (Adcrd503ApplicationJsonErrorEnum) {
    Adcrd503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Adcrd503ApplicationJsonErrorEnum || (Adcrd503ApplicationJsonErrorEnum = {}));
export var Adcrd503ApplicationJsonErrorDescriptionEnum;
(function (Adcrd503ApplicationJsonErrorDescriptionEnum) {
    Adcrd503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Adcrd503ApplicationJsonErrorDescriptionEnum || (Adcrd503ApplicationJsonErrorDescriptionEnum = {}));
var Adcrd503ApplicationJson = /** @class */ (function (_super) {
    __extends(Adcrd503ApplicationJson, _super);
    function Adcrd503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Adcrd503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Adcrd503ApplicationJson.prototype, "errorDescription", void 0);
    return Adcrd503ApplicationJson;
}(SpeakeasyBase));
export { Adcrd503ApplicationJson };
export var Adcrd504ApplicationJsonErrorEnum;
(function (Adcrd504ApplicationJsonErrorEnum) {
    Adcrd504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Adcrd504ApplicationJsonErrorEnum || (Adcrd504ApplicationJsonErrorEnum = {}));
export var Adcrd504ApplicationJsonErrorDescriptionEnum;
(function (Adcrd504ApplicationJsonErrorDescriptionEnum) {
    Adcrd504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Adcrd504ApplicationJsonErrorDescriptionEnum || (Adcrd504ApplicationJsonErrorDescriptionEnum = {}));
var Adcrd504ApplicationJson = /** @class */ (function (_super) {
    __extends(Adcrd504ApplicationJson, _super);
    function Adcrd504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Adcrd504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Adcrd504ApplicationJson.prototype, "errorDescription", void 0);
    return Adcrd504ApplicationJson;
}(SpeakeasyBase));
export { Adcrd504ApplicationJson };
var AdcrdRequest = /** @class */ (function (_super) {
    __extends(AdcrdRequest, _super);
    function AdcrdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AdcrdRequestBody)
    ], AdcrdRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdcrdSecurity)
    ], AdcrdRequest.prototype, "security", void 0);
    return AdcrdRequest;
}(SpeakeasyBase));
export { AdcrdRequest };
var AdcrdResponse = /** @class */ (function (_super) {
    __extends(AdcrdResponse, _super);
    function AdcrdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdcrdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdcrdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adcrd400ApplicationJson)
    ], AdcrdResponse.prototype, "adcrd400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adcrd401ApplicationJson)
    ], AdcrdResponse.prototype, "adcrd401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adcrd404ApplicationJson)
    ], AdcrdResponse.prototype, "adcrd404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adcrd500ApplicationJson)
    ], AdcrdResponse.prototype, "adcrd500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adcrd502ApplicationJson)
    ], AdcrdResponse.prototype, "adcrd502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adcrd503ApplicationJson)
    ], AdcrdResponse.prototype, "adcrd503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adcrd504ApplicationJson)
    ], AdcrdResponse.prototype, "adcrd504ApplicationJsonObject", void 0);
    return AdcrdResponse;
}(SpeakeasyBase));
export { AdcrdResponse };
