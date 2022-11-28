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
var SkmstRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SkmstRequestBodyCertificateParameters, _super);
    function SkmstRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txt10thRollNo" }),
        __metadata("design:type", String)
    ], SkmstRequestBodyCertificateParameters.prototype, "txt10thRollNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txtCandidateAppSeq" }),
        __metadata("design:type", String)
    ], SkmstRequestBodyCertificateParameters.prototype, "txtCandidateAppSeq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txtExamDate" }),
        __metadata("design:type", String)
    ], SkmstRequestBodyCertificateParameters.prototype, "txtExamDate", void 0);
    return SkmstRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { SkmstRequestBodyCertificateParameters };
export var SkmstRequestBodyFormatEnum;
(function (SkmstRequestBodyFormatEnum) {
    SkmstRequestBodyFormatEnum["Pdf"] = "pdf";
})(SkmstRequestBodyFormatEnum || (SkmstRequestBodyFormatEnum = {}));
var SkmstRequestBody = /** @class */ (function (_super) {
    __extends(SkmstRequestBody, _super);
    function SkmstRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SkmstRequestBodyCertificateParameters)
    ], SkmstRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SkmstRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SkmstRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SkmstRequestBody.prototype, "txnId", void 0);
    return SkmstRequestBody;
}(SpeakeasyBase));
export { SkmstRequestBody };
var SkmstSecurity = /** @class */ (function (_super) {
    __extends(SkmstSecurity, _super);
    function SkmstSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SkmstSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SkmstSecurity.prototype, "clientId", void 0);
    return SkmstSecurity;
}(SpeakeasyBase));
export { SkmstSecurity };
export var Skmst400ApplicationJsonErrorEnum;
(function (Skmst400ApplicationJsonErrorEnum) {
    Skmst400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Skmst400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Skmst400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Skmst400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Skmst400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Skmst400ApplicationJsonErrorEnum || (Skmst400ApplicationJsonErrorEnum = {}));
export var Skmst400ApplicationJsonErrorDescriptionEnum;
(function (Skmst400ApplicationJsonErrorDescriptionEnum) {
    Skmst400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Skmst400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Skmst400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Skmst400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Skmst400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Skmst400ApplicationJsonErrorDescriptionEnum || (Skmst400ApplicationJsonErrorDescriptionEnum = {}));
var Skmst400ApplicationJson = /** @class */ (function (_super) {
    __extends(Skmst400ApplicationJson, _super);
    function Skmst400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Skmst400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Skmst400ApplicationJson.prototype, "errorDescription", void 0);
    return Skmst400ApplicationJson;
}(SpeakeasyBase));
export { Skmst400ApplicationJson };
export var Skmst401ApplicationJsonErrorEnum;
(function (Skmst401ApplicationJsonErrorEnum) {
    Skmst401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Skmst401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Skmst401ApplicationJsonErrorEnum || (Skmst401ApplicationJsonErrorEnum = {}));
export var Skmst401ApplicationJsonErrorDescriptionEnum;
(function (Skmst401ApplicationJsonErrorDescriptionEnum) {
    Skmst401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Skmst401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Skmst401ApplicationJsonErrorDescriptionEnum || (Skmst401ApplicationJsonErrorDescriptionEnum = {}));
var Skmst401ApplicationJson = /** @class */ (function (_super) {
    __extends(Skmst401ApplicationJson, _super);
    function Skmst401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Skmst401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Skmst401ApplicationJson.prototype, "errorDescription", void 0);
    return Skmst401ApplicationJson;
}(SpeakeasyBase));
export { Skmst401ApplicationJson };
export var Skmst404ApplicationJsonErrorEnum;
(function (Skmst404ApplicationJsonErrorEnum) {
    Skmst404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Skmst404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Skmst404ApplicationJsonErrorEnum || (Skmst404ApplicationJsonErrorEnum = {}));
export var Skmst404ApplicationJsonErrorDescriptionEnum;
(function (Skmst404ApplicationJsonErrorDescriptionEnum) {
    Skmst404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Skmst404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Skmst404ApplicationJsonErrorDescriptionEnum || (Skmst404ApplicationJsonErrorDescriptionEnum = {}));
var Skmst404ApplicationJson = /** @class */ (function (_super) {
    __extends(Skmst404ApplicationJson, _super);
    function Skmst404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Skmst404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Skmst404ApplicationJson.prototype, "errorDescription", void 0);
    return Skmst404ApplicationJson;
}(SpeakeasyBase));
export { Skmst404ApplicationJson };
export var Skmst500ApplicationJsonErrorEnum;
(function (Skmst500ApplicationJsonErrorEnum) {
    Skmst500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Skmst500ApplicationJsonErrorEnum || (Skmst500ApplicationJsonErrorEnum = {}));
export var Skmst500ApplicationJsonErrorDescriptionEnum;
(function (Skmst500ApplicationJsonErrorDescriptionEnum) {
    Skmst500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Skmst500ApplicationJsonErrorDescriptionEnum || (Skmst500ApplicationJsonErrorDescriptionEnum = {}));
var Skmst500ApplicationJson = /** @class */ (function (_super) {
    __extends(Skmst500ApplicationJson, _super);
    function Skmst500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Skmst500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Skmst500ApplicationJson.prototype, "errorDescription", void 0);
    return Skmst500ApplicationJson;
}(SpeakeasyBase));
export { Skmst500ApplicationJson };
export var Skmst502ApplicationJsonErrorEnum;
(function (Skmst502ApplicationJsonErrorEnum) {
    Skmst502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Skmst502ApplicationJsonErrorEnum || (Skmst502ApplicationJsonErrorEnum = {}));
export var Skmst502ApplicationJsonErrorDescriptionEnum;
(function (Skmst502ApplicationJsonErrorDescriptionEnum) {
    Skmst502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Skmst502ApplicationJsonErrorDescriptionEnum || (Skmst502ApplicationJsonErrorDescriptionEnum = {}));
var Skmst502ApplicationJson = /** @class */ (function (_super) {
    __extends(Skmst502ApplicationJson, _super);
    function Skmst502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Skmst502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Skmst502ApplicationJson.prototype, "errorDescription", void 0);
    return Skmst502ApplicationJson;
}(SpeakeasyBase));
export { Skmst502ApplicationJson };
export var Skmst503ApplicationJsonErrorEnum;
(function (Skmst503ApplicationJsonErrorEnum) {
    Skmst503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Skmst503ApplicationJsonErrorEnum || (Skmst503ApplicationJsonErrorEnum = {}));
export var Skmst503ApplicationJsonErrorDescriptionEnum;
(function (Skmst503ApplicationJsonErrorDescriptionEnum) {
    Skmst503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Skmst503ApplicationJsonErrorDescriptionEnum || (Skmst503ApplicationJsonErrorDescriptionEnum = {}));
var Skmst503ApplicationJson = /** @class */ (function (_super) {
    __extends(Skmst503ApplicationJson, _super);
    function Skmst503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Skmst503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Skmst503ApplicationJson.prototype, "errorDescription", void 0);
    return Skmst503ApplicationJson;
}(SpeakeasyBase));
export { Skmst503ApplicationJson };
export var Skmst504ApplicationJsonErrorEnum;
(function (Skmst504ApplicationJsonErrorEnum) {
    Skmst504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Skmst504ApplicationJsonErrorEnum || (Skmst504ApplicationJsonErrorEnum = {}));
export var Skmst504ApplicationJsonErrorDescriptionEnum;
(function (Skmst504ApplicationJsonErrorDescriptionEnum) {
    Skmst504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Skmst504ApplicationJsonErrorDescriptionEnum || (Skmst504ApplicationJsonErrorDescriptionEnum = {}));
var Skmst504ApplicationJson = /** @class */ (function (_super) {
    __extends(Skmst504ApplicationJson, _super);
    function Skmst504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Skmst504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Skmst504ApplicationJson.prototype, "errorDescription", void 0);
    return Skmst504ApplicationJson;
}(SpeakeasyBase));
export { Skmst504ApplicationJson };
var SkmstRequest = /** @class */ (function (_super) {
    __extends(SkmstRequest, _super);
    function SkmstRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SkmstRequestBody)
    ], SkmstRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SkmstSecurity)
    ], SkmstRequest.prototype, "security", void 0);
    return SkmstRequest;
}(SpeakeasyBase));
export { SkmstRequest };
var SkmstResponse = /** @class */ (function (_super) {
    __extends(SkmstResponse, _super);
    function SkmstResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SkmstResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SkmstResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Skmst400ApplicationJson)
    ], SkmstResponse.prototype, "skmst400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Skmst401ApplicationJson)
    ], SkmstResponse.prototype, "skmst401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Skmst404ApplicationJson)
    ], SkmstResponse.prototype, "skmst404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Skmst500ApplicationJson)
    ], SkmstResponse.prototype, "skmst500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Skmst502ApplicationJson)
    ], SkmstResponse.prototype, "skmst502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Skmst503ApplicationJson)
    ], SkmstResponse.prototype, "skmst503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Skmst504ApplicationJson)
    ], SkmstResponse.prototype, "skmst504ApplicationJsonObject", void 0);
    return SkmstResponse;
}(SpeakeasyBase));
export { SkmstResponse };
