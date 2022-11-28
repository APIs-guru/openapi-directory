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
var CfltrRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(CfltrRequestBodyCertificateParameters, _super);
    function CfltrRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], CfltrRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], CfltrRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegNum" }),
        __metadata("design:type", String)
    ], CfltrRequestBodyCertificateParameters.prototype, "regNum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], CfltrRequestBodyCertificateParameters.prototype, "uid", void 0);
    return CfltrRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { CfltrRequestBodyCertificateParameters };
export var CfltrRequestBodyFormatEnum;
(function (CfltrRequestBodyFormatEnum) {
    CfltrRequestBodyFormatEnum["Pdf"] = "pdf";
})(CfltrRequestBodyFormatEnum || (CfltrRequestBodyFormatEnum = {}));
var CfltrRequestBody = /** @class */ (function (_super) {
    __extends(CfltrRequestBody, _super);
    function CfltrRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", CfltrRequestBodyCertificateParameters)
    ], CfltrRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], CfltrRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CfltrRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], CfltrRequestBody.prototype, "txnId", void 0);
    return CfltrRequestBody;
}(SpeakeasyBase));
export { CfltrRequestBody };
var CfltrSecurity = /** @class */ (function (_super) {
    __extends(CfltrSecurity, _super);
    function CfltrSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CfltrSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], CfltrSecurity.prototype, "clientId", void 0);
    return CfltrSecurity;
}(SpeakeasyBase));
export { CfltrSecurity };
export var Cfltr400ApplicationJsonErrorEnum;
(function (Cfltr400ApplicationJsonErrorEnum) {
    Cfltr400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Cfltr400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Cfltr400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Cfltr400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Cfltr400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Cfltr400ApplicationJsonErrorEnum || (Cfltr400ApplicationJsonErrorEnum = {}));
export var Cfltr400ApplicationJsonErrorDescriptionEnum;
(function (Cfltr400ApplicationJsonErrorDescriptionEnum) {
    Cfltr400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Cfltr400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Cfltr400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Cfltr400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Cfltr400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Cfltr400ApplicationJsonErrorDescriptionEnum || (Cfltr400ApplicationJsonErrorDescriptionEnum = {}));
var Cfltr400ApplicationJson = /** @class */ (function (_super) {
    __extends(Cfltr400ApplicationJson, _super);
    function Cfltr400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cfltr400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cfltr400ApplicationJson.prototype, "errorDescription", void 0);
    return Cfltr400ApplicationJson;
}(SpeakeasyBase));
export { Cfltr400ApplicationJson };
export var Cfltr401ApplicationJsonErrorEnum;
(function (Cfltr401ApplicationJsonErrorEnum) {
    Cfltr401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Cfltr401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Cfltr401ApplicationJsonErrorEnum || (Cfltr401ApplicationJsonErrorEnum = {}));
export var Cfltr401ApplicationJsonErrorDescriptionEnum;
(function (Cfltr401ApplicationJsonErrorDescriptionEnum) {
    Cfltr401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Cfltr401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Cfltr401ApplicationJsonErrorDescriptionEnum || (Cfltr401ApplicationJsonErrorDescriptionEnum = {}));
var Cfltr401ApplicationJson = /** @class */ (function (_super) {
    __extends(Cfltr401ApplicationJson, _super);
    function Cfltr401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cfltr401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cfltr401ApplicationJson.prototype, "errorDescription", void 0);
    return Cfltr401ApplicationJson;
}(SpeakeasyBase));
export { Cfltr401ApplicationJson };
export var Cfltr404ApplicationJsonErrorEnum;
(function (Cfltr404ApplicationJsonErrorEnum) {
    Cfltr404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Cfltr404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Cfltr404ApplicationJsonErrorEnum || (Cfltr404ApplicationJsonErrorEnum = {}));
export var Cfltr404ApplicationJsonErrorDescriptionEnum;
(function (Cfltr404ApplicationJsonErrorDescriptionEnum) {
    Cfltr404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Cfltr404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Cfltr404ApplicationJsonErrorDescriptionEnum || (Cfltr404ApplicationJsonErrorDescriptionEnum = {}));
var Cfltr404ApplicationJson = /** @class */ (function (_super) {
    __extends(Cfltr404ApplicationJson, _super);
    function Cfltr404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cfltr404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cfltr404ApplicationJson.prototype, "errorDescription", void 0);
    return Cfltr404ApplicationJson;
}(SpeakeasyBase));
export { Cfltr404ApplicationJson };
export var Cfltr500ApplicationJsonErrorEnum;
(function (Cfltr500ApplicationJsonErrorEnum) {
    Cfltr500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Cfltr500ApplicationJsonErrorEnum || (Cfltr500ApplicationJsonErrorEnum = {}));
export var Cfltr500ApplicationJsonErrorDescriptionEnum;
(function (Cfltr500ApplicationJsonErrorDescriptionEnum) {
    Cfltr500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Cfltr500ApplicationJsonErrorDescriptionEnum || (Cfltr500ApplicationJsonErrorDescriptionEnum = {}));
var Cfltr500ApplicationJson = /** @class */ (function (_super) {
    __extends(Cfltr500ApplicationJson, _super);
    function Cfltr500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cfltr500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cfltr500ApplicationJson.prototype, "errorDescription", void 0);
    return Cfltr500ApplicationJson;
}(SpeakeasyBase));
export { Cfltr500ApplicationJson };
export var Cfltr502ApplicationJsonErrorEnum;
(function (Cfltr502ApplicationJsonErrorEnum) {
    Cfltr502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Cfltr502ApplicationJsonErrorEnum || (Cfltr502ApplicationJsonErrorEnum = {}));
export var Cfltr502ApplicationJsonErrorDescriptionEnum;
(function (Cfltr502ApplicationJsonErrorDescriptionEnum) {
    Cfltr502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Cfltr502ApplicationJsonErrorDescriptionEnum || (Cfltr502ApplicationJsonErrorDescriptionEnum = {}));
var Cfltr502ApplicationJson = /** @class */ (function (_super) {
    __extends(Cfltr502ApplicationJson, _super);
    function Cfltr502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cfltr502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cfltr502ApplicationJson.prototype, "errorDescription", void 0);
    return Cfltr502ApplicationJson;
}(SpeakeasyBase));
export { Cfltr502ApplicationJson };
export var Cfltr503ApplicationJsonErrorEnum;
(function (Cfltr503ApplicationJsonErrorEnum) {
    Cfltr503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Cfltr503ApplicationJsonErrorEnum || (Cfltr503ApplicationJsonErrorEnum = {}));
export var Cfltr503ApplicationJsonErrorDescriptionEnum;
(function (Cfltr503ApplicationJsonErrorDescriptionEnum) {
    Cfltr503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Cfltr503ApplicationJsonErrorDescriptionEnum || (Cfltr503ApplicationJsonErrorDescriptionEnum = {}));
var Cfltr503ApplicationJson = /** @class */ (function (_super) {
    __extends(Cfltr503ApplicationJson, _super);
    function Cfltr503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cfltr503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cfltr503ApplicationJson.prototype, "errorDescription", void 0);
    return Cfltr503ApplicationJson;
}(SpeakeasyBase));
export { Cfltr503ApplicationJson };
export var Cfltr504ApplicationJsonErrorEnum;
(function (Cfltr504ApplicationJsonErrorEnum) {
    Cfltr504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Cfltr504ApplicationJsonErrorEnum || (Cfltr504ApplicationJsonErrorEnum = {}));
export var Cfltr504ApplicationJsonErrorDescriptionEnum;
(function (Cfltr504ApplicationJsonErrorDescriptionEnum) {
    Cfltr504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Cfltr504ApplicationJsonErrorDescriptionEnum || (Cfltr504ApplicationJsonErrorDescriptionEnum = {}));
var Cfltr504ApplicationJson = /** @class */ (function (_super) {
    __extends(Cfltr504ApplicationJson, _super);
    function Cfltr504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cfltr504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cfltr504ApplicationJson.prototype, "errorDescription", void 0);
    return Cfltr504ApplicationJson;
}(SpeakeasyBase));
export { Cfltr504ApplicationJson };
var CfltrRequest = /** @class */ (function (_super) {
    __extends(CfltrRequest, _super);
    function CfltrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CfltrRequestBody)
    ], CfltrRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CfltrSecurity)
    ], CfltrRequest.prototype, "security", void 0);
    return CfltrRequest;
}(SpeakeasyBase));
export { CfltrRequest };
var CfltrResponse = /** @class */ (function (_super) {
    __extends(CfltrResponse, _super);
    function CfltrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CfltrResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CfltrResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cfltr400ApplicationJson)
    ], CfltrResponse.prototype, "cfltr400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cfltr401ApplicationJson)
    ], CfltrResponse.prototype, "cfltr401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cfltr404ApplicationJson)
    ], CfltrResponse.prototype, "cfltr404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cfltr500ApplicationJson)
    ], CfltrResponse.prototype, "cfltr500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cfltr502ApplicationJson)
    ], CfltrResponse.prototype, "cfltr502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cfltr503ApplicationJson)
    ], CfltrResponse.prototype, "cfltr503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cfltr504ApplicationJson)
    ], CfltrResponse.prototype, "cfltr504ApplicationJsonObject", void 0);
    return CfltrResponse;
}(SpeakeasyBase));
export { CfltrResponse };
