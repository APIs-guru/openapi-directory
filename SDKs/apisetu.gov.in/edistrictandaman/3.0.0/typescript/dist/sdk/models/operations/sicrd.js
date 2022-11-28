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
var SicrdRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SicrdRequestBodyCertificateParameters, _super);
    function SicrdRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificateNumber" }),
        __metadata("design:type", String)
    ], SicrdRequestBodyCertificateParameters.prototype, "certificateNumber", void 0);
    return SicrdRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { SicrdRequestBodyCertificateParameters };
export var SicrdRequestBodyFormatEnum;
(function (SicrdRequestBodyFormatEnum) {
    SicrdRequestBodyFormatEnum["Pdf"] = "pdf";
})(SicrdRequestBodyFormatEnum || (SicrdRequestBodyFormatEnum = {}));
var SicrdRequestBody = /** @class */ (function (_super) {
    __extends(SicrdRequestBody, _super);
    function SicrdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SicrdRequestBodyCertificateParameters)
    ], SicrdRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SicrdRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SicrdRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SicrdRequestBody.prototype, "txnId", void 0);
    return SicrdRequestBody;
}(SpeakeasyBase));
export { SicrdRequestBody };
var SicrdSecurity = /** @class */ (function (_super) {
    __extends(SicrdSecurity, _super);
    function SicrdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SicrdSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SicrdSecurity.prototype, "clientId", void 0);
    return SicrdSecurity;
}(SpeakeasyBase));
export { SicrdSecurity };
export var Sicrd400ApplicationJsonErrorEnum;
(function (Sicrd400ApplicationJsonErrorEnum) {
    Sicrd400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Sicrd400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Sicrd400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Sicrd400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Sicrd400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Sicrd400ApplicationJsonErrorEnum || (Sicrd400ApplicationJsonErrorEnum = {}));
export var Sicrd400ApplicationJsonErrorDescriptionEnum;
(function (Sicrd400ApplicationJsonErrorDescriptionEnum) {
    Sicrd400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Sicrd400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Sicrd400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Sicrd400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Sicrd400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Sicrd400ApplicationJsonErrorDescriptionEnum || (Sicrd400ApplicationJsonErrorDescriptionEnum = {}));
var Sicrd400ApplicationJson = /** @class */ (function (_super) {
    __extends(Sicrd400ApplicationJson, _super);
    function Sicrd400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sicrd400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sicrd400ApplicationJson.prototype, "errorDescription", void 0);
    return Sicrd400ApplicationJson;
}(SpeakeasyBase));
export { Sicrd400ApplicationJson };
export var Sicrd401ApplicationJsonErrorEnum;
(function (Sicrd401ApplicationJsonErrorEnum) {
    Sicrd401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Sicrd401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Sicrd401ApplicationJsonErrorEnum || (Sicrd401ApplicationJsonErrorEnum = {}));
export var Sicrd401ApplicationJsonErrorDescriptionEnum;
(function (Sicrd401ApplicationJsonErrorDescriptionEnum) {
    Sicrd401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Sicrd401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Sicrd401ApplicationJsonErrorDescriptionEnum || (Sicrd401ApplicationJsonErrorDescriptionEnum = {}));
var Sicrd401ApplicationJson = /** @class */ (function (_super) {
    __extends(Sicrd401ApplicationJson, _super);
    function Sicrd401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sicrd401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sicrd401ApplicationJson.prototype, "errorDescription", void 0);
    return Sicrd401ApplicationJson;
}(SpeakeasyBase));
export { Sicrd401ApplicationJson };
export var Sicrd404ApplicationJsonErrorEnum;
(function (Sicrd404ApplicationJsonErrorEnum) {
    Sicrd404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Sicrd404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Sicrd404ApplicationJsonErrorEnum || (Sicrd404ApplicationJsonErrorEnum = {}));
export var Sicrd404ApplicationJsonErrorDescriptionEnum;
(function (Sicrd404ApplicationJsonErrorDescriptionEnum) {
    Sicrd404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Sicrd404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Sicrd404ApplicationJsonErrorDescriptionEnum || (Sicrd404ApplicationJsonErrorDescriptionEnum = {}));
var Sicrd404ApplicationJson = /** @class */ (function (_super) {
    __extends(Sicrd404ApplicationJson, _super);
    function Sicrd404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sicrd404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sicrd404ApplicationJson.prototype, "errorDescription", void 0);
    return Sicrd404ApplicationJson;
}(SpeakeasyBase));
export { Sicrd404ApplicationJson };
export var Sicrd500ApplicationJsonErrorEnum;
(function (Sicrd500ApplicationJsonErrorEnum) {
    Sicrd500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Sicrd500ApplicationJsonErrorEnum || (Sicrd500ApplicationJsonErrorEnum = {}));
export var Sicrd500ApplicationJsonErrorDescriptionEnum;
(function (Sicrd500ApplicationJsonErrorDescriptionEnum) {
    Sicrd500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Sicrd500ApplicationJsonErrorDescriptionEnum || (Sicrd500ApplicationJsonErrorDescriptionEnum = {}));
var Sicrd500ApplicationJson = /** @class */ (function (_super) {
    __extends(Sicrd500ApplicationJson, _super);
    function Sicrd500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sicrd500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sicrd500ApplicationJson.prototype, "errorDescription", void 0);
    return Sicrd500ApplicationJson;
}(SpeakeasyBase));
export { Sicrd500ApplicationJson };
export var Sicrd502ApplicationJsonErrorEnum;
(function (Sicrd502ApplicationJsonErrorEnum) {
    Sicrd502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Sicrd502ApplicationJsonErrorEnum || (Sicrd502ApplicationJsonErrorEnum = {}));
export var Sicrd502ApplicationJsonErrorDescriptionEnum;
(function (Sicrd502ApplicationJsonErrorDescriptionEnum) {
    Sicrd502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Sicrd502ApplicationJsonErrorDescriptionEnum || (Sicrd502ApplicationJsonErrorDescriptionEnum = {}));
var Sicrd502ApplicationJson = /** @class */ (function (_super) {
    __extends(Sicrd502ApplicationJson, _super);
    function Sicrd502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sicrd502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sicrd502ApplicationJson.prototype, "errorDescription", void 0);
    return Sicrd502ApplicationJson;
}(SpeakeasyBase));
export { Sicrd502ApplicationJson };
export var Sicrd503ApplicationJsonErrorEnum;
(function (Sicrd503ApplicationJsonErrorEnum) {
    Sicrd503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Sicrd503ApplicationJsonErrorEnum || (Sicrd503ApplicationJsonErrorEnum = {}));
export var Sicrd503ApplicationJsonErrorDescriptionEnum;
(function (Sicrd503ApplicationJsonErrorDescriptionEnum) {
    Sicrd503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Sicrd503ApplicationJsonErrorDescriptionEnum || (Sicrd503ApplicationJsonErrorDescriptionEnum = {}));
var Sicrd503ApplicationJson = /** @class */ (function (_super) {
    __extends(Sicrd503ApplicationJson, _super);
    function Sicrd503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sicrd503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sicrd503ApplicationJson.prototype, "errorDescription", void 0);
    return Sicrd503ApplicationJson;
}(SpeakeasyBase));
export { Sicrd503ApplicationJson };
export var Sicrd504ApplicationJsonErrorEnum;
(function (Sicrd504ApplicationJsonErrorEnum) {
    Sicrd504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Sicrd504ApplicationJsonErrorEnum || (Sicrd504ApplicationJsonErrorEnum = {}));
export var Sicrd504ApplicationJsonErrorDescriptionEnum;
(function (Sicrd504ApplicationJsonErrorDescriptionEnum) {
    Sicrd504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Sicrd504ApplicationJsonErrorDescriptionEnum || (Sicrd504ApplicationJsonErrorDescriptionEnum = {}));
var Sicrd504ApplicationJson = /** @class */ (function (_super) {
    __extends(Sicrd504ApplicationJson, _super);
    function Sicrd504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sicrd504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sicrd504ApplicationJson.prototype, "errorDescription", void 0);
    return Sicrd504ApplicationJson;
}(SpeakeasyBase));
export { Sicrd504ApplicationJson };
var SicrdRequest = /** @class */ (function (_super) {
    __extends(SicrdRequest, _super);
    function SicrdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SicrdRequestBody)
    ], SicrdRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SicrdSecurity)
    ], SicrdRequest.prototype, "security", void 0);
    return SicrdRequest;
}(SpeakeasyBase));
export { SicrdRequest };
var SicrdResponse = /** @class */ (function (_super) {
    __extends(SicrdResponse, _super);
    function SicrdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SicrdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SicrdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sicrd400ApplicationJson)
    ], SicrdResponse.prototype, "sicrd400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sicrd401ApplicationJson)
    ], SicrdResponse.prototype, "sicrd401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sicrd404ApplicationJson)
    ], SicrdResponse.prototype, "sicrd404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sicrd500ApplicationJson)
    ], SicrdResponse.prototype, "sicrd500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sicrd502ApplicationJson)
    ], SicrdResponse.prototype, "sicrd502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sicrd503ApplicationJson)
    ], SicrdResponse.prototype, "sicrd503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sicrd504ApplicationJson)
    ], SicrdResponse.prototype, "sicrd504ApplicationJsonObject", void 0);
    return SicrdResponse;
}(SpeakeasyBase));
export { SicrdResponse };
