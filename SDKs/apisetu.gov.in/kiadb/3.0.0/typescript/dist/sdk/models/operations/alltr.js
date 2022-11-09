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
var AlltrRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(AlltrRequestBodyCertificateParameters, _super);
    function AlltrRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], AlltrRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], AlltrRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=RegNum" }),
        __metadata("design:type", String)
    ], AlltrRequestBodyCertificateParameters.prototype, "regNum", void 0);
    __decorate([
        Metadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], AlltrRequestBodyCertificateParameters.prototype, "uid", void 0);
    return AlltrRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { AlltrRequestBodyCertificateParameters };
export var AlltrRequestBodyFormatEnum;
(function (AlltrRequestBodyFormatEnum) {
    AlltrRequestBodyFormatEnum["Pdf"] = "pdf";
})(AlltrRequestBodyFormatEnum || (AlltrRequestBodyFormatEnum = {}));
var AlltrRequestBody = /** @class */ (function (_super) {
    __extends(AlltrRequestBody, _super);
    function AlltrRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", AlltrRequestBodyCertificateParameters)
    ], AlltrRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], AlltrRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AlltrRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], AlltrRequestBody.prototype, "txnId", void 0);
    return AlltrRequestBody;
}(SpeakeasyBase));
export { AlltrRequestBody };
var AlltrSecurity = /** @class */ (function (_super) {
    __extends(AlltrSecurity, _super);
    function AlltrSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], AlltrSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], AlltrSecurity.prototype, "clientId", void 0);
    return AlltrSecurity;
}(SpeakeasyBase));
export { AlltrSecurity };
var AlltrRequest = /** @class */ (function (_super) {
    __extends(AlltrRequest, _super);
    function AlltrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AlltrRequestBody)
    ], AlltrRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AlltrSecurity)
    ], AlltrRequest.prototype, "security", void 0);
    return AlltrRequest;
}(SpeakeasyBase));
export { AlltrRequest };
export var Alltr400ApplicationJsonErrorEnum;
(function (Alltr400ApplicationJsonErrorEnum) {
    Alltr400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Alltr400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Alltr400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Alltr400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Alltr400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Alltr400ApplicationJsonErrorEnum || (Alltr400ApplicationJsonErrorEnum = {}));
export var Alltr400ApplicationJsonErrorDescriptionEnum;
(function (Alltr400ApplicationJsonErrorDescriptionEnum) {
    Alltr400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Alltr400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Alltr400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Alltr400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Alltr400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Alltr400ApplicationJsonErrorDescriptionEnum || (Alltr400ApplicationJsonErrorDescriptionEnum = {}));
var Alltr400ApplicationJson = /** @class */ (function (_super) {
    __extends(Alltr400ApplicationJson, _super);
    function Alltr400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alltr400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alltr400ApplicationJson.prototype, "errorDescription", void 0);
    return Alltr400ApplicationJson;
}(SpeakeasyBase));
export { Alltr400ApplicationJson };
export var Alltr401ApplicationJsonErrorEnum;
(function (Alltr401ApplicationJsonErrorEnum) {
    Alltr401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Alltr401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Alltr401ApplicationJsonErrorEnum || (Alltr401ApplicationJsonErrorEnum = {}));
export var Alltr401ApplicationJsonErrorDescriptionEnum;
(function (Alltr401ApplicationJsonErrorDescriptionEnum) {
    Alltr401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Alltr401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Alltr401ApplicationJsonErrorDescriptionEnum || (Alltr401ApplicationJsonErrorDescriptionEnum = {}));
var Alltr401ApplicationJson = /** @class */ (function (_super) {
    __extends(Alltr401ApplicationJson, _super);
    function Alltr401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alltr401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alltr401ApplicationJson.prototype, "errorDescription", void 0);
    return Alltr401ApplicationJson;
}(SpeakeasyBase));
export { Alltr401ApplicationJson };
export var Alltr404ApplicationJsonErrorEnum;
(function (Alltr404ApplicationJsonErrorEnum) {
    Alltr404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Alltr404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Alltr404ApplicationJsonErrorEnum || (Alltr404ApplicationJsonErrorEnum = {}));
export var Alltr404ApplicationJsonErrorDescriptionEnum;
(function (Alltr404ApplicationJsonErrorDescriptionEnum) {
    Alltr404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Alltr404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Alltr404ApplicationJsonErrorDescriptionEnum || (Alltr404ApplicationJsonErrorDescriptionEnum = {}));
var Alltr404ApplicationJson = /** @class */ (function (_super) {
    __extends(Alltr404ApplicationJson, _super);
    function Alltr404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alltr404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alltr404ApplicationJson.prototype, "errorDescription", void 0);
    return Alltr404ApplicationJson;
}(SpeakeasyBase));
export { Alltr404ApplicationJson };
export var Alltr500ApplicationJsonErrorEnum;
(function (Alltr500ApplicationJsonErrorEnum) {
    Alltr500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Alltr500ApplicationJsonErrorEnum || (Alltr500ApplicationJsonErrorEnum = {}));
export var Alltr500ApplicationJsonErrorDescriptionEnum;
(function (Alltr500ApplicationJsonErrorDescriptionEnum) {
    Alltr500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Alltr500ApplicationJsonErrorDescriptionEnum || (Alltr500ApplicationJsonErrorDescriptionEnum = {}));
var Alltr500ApplicationJson = /** @class */ (function (_super) {
    __extends(Alltr500ApplicationJson, _super);
    function Alltr500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alltr500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alltr500ApplicationJson.prototype, "errorDescription", void 0);
    return Alltr500ApplicationJson;
}(SpeakeasyBase));
export { Alltr500ApplicationJson };
export var Alltr502ApplicationJsonErrorEnum;
(function (Alltr502ApplicationJsonErrorEnum) {
    Alltr502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Alltr502ApplicationJsonErrorEnum || (Alltr502ApplicationJsonErrorEnum = {}));
export var Alltr502ApplicationJsonErrorDescriptionEnum;
(function (Alltr502ApplicationJsonErrorDescriptionEnum) {
    Alltr502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Alltr502ApplicationJsonErrorDescriptionEnum || (Alltr502ApplicationJsonErrorDescriptionEnum = {}));
var Alltr502ApplicationJson = /** @class */ (function (_super) {
    __extends(Alltr502ApplicationJson, _super);
    function Alltr502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alltr502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alltr502ApplicationJson.prototype, "errorDescription", void 0);
    return Alltr502ApplicationJson;
}(SpeakeasyBase));
export { Alltr502ApplicationJson };
export var Alltr503ApplicationJsonErrorEnum;
(function (Alltr503ApplicationJsonErrorEnum) {
    Alltr503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Alltr503ApplicationJsonErrorEnum || (Alltr503ApplicationJsonErrorEnum = {}));
export var Alltr503ApplicationJsonErrorDescriptionEnum;
(function (Alltr503ApplicationJsonErrorDescriptionEnum) {
    Alltr503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Alltr503ApplicationJsonErrorDescriptionEnum || (Alltr503ApplicationJsonErrorDescriptionEnum = {}));
var Alltr503ApplicationJson = /** @class */ (function (_super) {
    __extends(Alltr503ApplicationJson, _super);
    function Alltr503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alltr503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alltr503ApplicationJson.prototype, "errorDescription", void 0);
    return Alltr503ApplicationJson;
}(SpeakeasyBase));
export { Alltr503ApplicationJson };
export var Alltr504ApplicationJsonErrorEnum;
(function (Alltr504ApplicationJsonErrorEnum) {
    Alltr504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Alltr504ApplicationJsonErrorEnum || (Alltr504ApplicationJsonErrorEnum = {}));
export var Alltr504ApplicationJsonErrorDescriptionEnum;
(function (Alltr504ApplicationJsonErrorDescriptionEnum) {
    Alltr504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Alltr504ApplicationJsonErrorDescriptionEnum || (Alltr504ApplicationJsonErrorDescriptionEnum = {}));
var Alltr504ApplicationJson = /** @class */ (function (_super) {
    __extends(Alltr504ApplicationJson, _super);
    function Alltr504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alltr504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alltr504ApplicationJson.prototype, "errorDescription", void 0);
    return Alltr504ApplicationJson;
}(SpeakeasyBase));
export { Alltr504ApplicationJson };
var AlltrResponse = /** @class */ (function (_super) {
    __extends(AlltrResponse, _super);
    function AlltrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AlltrResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AlltrResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Alltr400ApplicationJson)
    ], AlltrResponse.prototype, "alltr400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Alltr401ApplicationJson)
    ], AlltrResponse.prototype, "alltr401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Alltr404ApplicationJson)
    ], AlltrResponse.prototype, "alltr404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Alltr500ApplicationJson)
    ], AlltrResponse.prototype, "alltr500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Alltr502ApplicationJson)
    ], AlltrResponse.prototype, "alltr502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Alltr503ApplicationJson)
    ], AlltrResponse.prototype, "alltr503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Alltr504ApplicationJson)
    ], AlltrResponse.prototype, "alltr504ApplicationJsonObject", void 0);
    return AlltrResponse;
}(SpeakeasyBase));
export { AlltrResponse };
