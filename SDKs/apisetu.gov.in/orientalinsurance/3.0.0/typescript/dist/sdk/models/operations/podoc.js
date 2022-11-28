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
var PodocRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PodocRequestBodyCertificateParameters, _super);
    function PodocRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=INSCODE" }),
        __metadata("design:type", String)
    ], PodocRequestBodyCertificateParameters.prototype, "inscode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=POLNO" }),
        __metadata("design:type", String)
    ], PodocRequestBodyCertificateParameters.prototype, "polno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=STARTDT" }),
        __metadata("design:type", String)
    ], PodocRequestBodyCertificateParameters.prototype, "startdt", void 0);
    return PodocRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { PodocRequestBodyCertificateParameters };
export var PodocRequestBodyFormatEnum;
(function (PodocRequestBodyFormatEnum) {
    PodocRequestBodyFormatEnum["Pdf"] = "pdf";
})(PodocRequestBodyFormatEnum || (PodocRequestBodyFormatEnum = {}));
var PodocRequestBody = /** @class */ (function (_super) {
    __extends(PodocRequestBody, _super);
    function PodocRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", PodocRequestBodyCertificateParameters)
    ], PodocRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], PodocRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PodocRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], PodocRequestBody.prototype, "txnId", void 0);
    return PodocRequestBody;
}(SpeakeasyBase));
export { PodocRequestBody };
var PodocSecurity = /** @class */ (function (_super) {
    __extends(PodocSecurity, _super);
    function PodocSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PodocSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PodocSecurity.prototype, "clientId", void 0);
    return PodocSecurity;
}(SpeakeasyBase));
export { PodocSecurity };
export var Podoc400ApplicationJsonErrorEnum;
(function (Podoc400ApplicationJsonErrorEnum) {
    Podoc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Podoc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Podoc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Podoc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Podoc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Podoc400ApplicationJsonErrorEnum || (Podoc400ApplicationJsonErrorEnum = {}));
export var Podoc400ApplicationJsonErrorDescriptionEnum;
(function (Podoc400ApplicationJsonErrorDescriptionEnum) {
    Podoc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Podoc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Podoc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Podoc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Podoc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Podoc400ApplicationJsonErrorDescriptionEnum || (Podoc400ApplicationJsonErrorDescriptionEnum = {}));
var Podoc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Podoc400ApplicationJson, _super);
    function Podoc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Podoc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Podoc400ApplicationJson.prototype, "errorDescription", void 0);
    return Podoc400ApplicationJson;
}(SpeakeasyBase));
export { Podoc400ApplicationJson };
export var Podoc401ApplicationJsonErrorEnum;
(function (Podoc401ApplicationJsonErrorEnum) {
    Podoc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Podoc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Podoc401ApplicationJsonErrorEnum || (Podoc401ApplicationJsonErrorEnum = {}));
export var Podoc401ApplicationJsonErrorDescriptionEnum;
(function (Podoc401ApplicationJsonErrorDescriptionEnum) {
    Podoc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Podoc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Podoc401ApplicationJsonErrorDescriptionEnum || (Podoc401ApplicationJsonErrorDescriptionEnum = {}));
var Podoc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Podoc401ApplicationJson, _super);
    function Podoc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Podoc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Podoc401ApplicationJson.prototype, "errorDescription", void 0);
    return Podoc401ApplicationJson;
}(SpeakeasyBase));
export { Podoc401ApplicationJson };
export var Podoc404ApplicationJsonErrorEnum;
(function (Podoc404ApplicationJsonErrorEnum) {
    Podoc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Podoc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Podoc404ApplicationJsonErrorEnum || (Podoc404ApplicationJsonErrorEnum = {}));
export var Podoc404ApplicationJsonErrorDescriptionEnum;
(function (Podoc404ApplicationJsonErrorDescriptionEnum) {
    Podoc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Podoc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Podoc404ApplicationJsonErrorDescriptionEnum || (Podoc404ApplicationJsonErrorDescriptionEnum = {}));
var Podoc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Podoc404ApplicationJson, _super);
    function Podoc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Podoc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Podoc404ApplicationJson.prototype, "errorDescription", void 0);
    return Podoc404ApplicationJson;
}(SpeakeasyBase));
export { Podoc404ApplicationJson };
export var Podoc500ApplicationJsonErrorEnum;
(function (Podoc500ApplicationJsonErrorEnum) {
    Podoc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Podoc500ApplicationJsonErrorEnum || (Podoc500ApplicationJsonErrorEnum = {}));
export var Podoc500ApplicationJsonErrorDescriptionEnum;
(function (Podoc500ApplicationJsonErrorDescriptionEnum) {
    Podoc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Podoc500ApplicationJsonErrorDescriptionEnum || (Podoc500ApplicationJsonErrorDescriptionEnum = {}));
var Podoc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Podoc500ApplicationJson, _super);
    function Podoc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Podoc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Podoc500ApplicationJson.prototype, "errorDescription", void 0);
    return Podoc500ApplicationJson;
}(SpeakeasyBase));
export { Podoc500ApplicationJson };
export var Podoc502ApplicationJsonErrorEnum;
(function (Podoc502ApplicationJsonErrorEnum) {
    Podoc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Podoc502ApplicationJsonErrorEnum || (Podoc502ApplicationJsonErrorEnum = {}));
export var Podoc502ApplicationJsonErrorDescriptionEnum;
(function (Podoc502ApplicationJsonErrorDescriptionEnum) {
    Podoc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Podoc502ApplicationJsonErrorDescriptionEnum || (Podoc502ApplicationJsonErrorDescriptionEnum = {}));
var Podoc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Podoc502ApplicationJson, _super);
    function Podoc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Podoc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Podoc502ApplicationJson.prototype, "errorDescription", void 0);
    return Podoc502ApplicationJson;
}(SpeakeasyBase));
export { Podoc502ApplicationJson };
export var Podoc503ApplicationJsonErrorEnum;
(function (Podoc503ApplicationJsonErrorEnum) {
    Podoc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Podoc503ApplicationJsonErrorEnum || (Podoc503ApplicationJsonErrorEnum = {}));
export var Podoc503ApplicationJsonErrorDescriptionEnum;
(function (Podoc503ApplicationJsonErrorDescriptionEnum) {
    Podoc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Podoc503ApplicationJsonErrorDescriptionEnum || (Podoc503ApplicationJsonErrorDescriptionEnum = {}));
var Podoc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Podoc503ApplicationJson, _super);
    function Podoc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Podoc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Podoc503ApplicationJson.prototype, "errorDescription", void 0);
    return Podoc503ApplicationJson;
}(SpeakeasyBase));
export { Podoc503ApplicationJson };
export var Podoc504ApplicationJsonErrorEnum;
(function (Podoc504ApplicationJsonErrorEnum) {
    Podoc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Podoc504ApplicationJsonErrorEnum || (Podoc504ApplicationJsonErrorEnum = {}));
export var Podoc504ApplicationJsonErrorDescriptionEnum;
(function (Podoc504ApplicationJsonErrorDescriptionEnum) {
    Podoc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Podoc504ApplicationJsonErrorDescriptionEnum || (Podoc504ApplicationJsonErrorDescriptionEnum = {}));
var Podoc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Podoc504ApplicationJson, _super);
    function Podoc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Podoc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Podoc504ApplicationJson.prototype, "errorDescription", void 0);
    return Podoc504ApplicationJson;
}(SpeakeasyBase));
export { Podoc504ApplicationJson };
var PodocRequest = /** @class */ (function (_super) {
    __extends(PodocRequest, _super);
    function PodocRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PodocRequestBody)
    ], PodocRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PodocSecurity)
    ], PodocRequest.prototype, "security", void 0);
    return PodocRequest;
}(SpeakeasyBase));
export { PodocRequest };
var PodocResponse = /** @class */ (function (_super) {
    __extends(PodocResponse, _super);
    function PodocResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PodocResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PodocResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Podoc400ApplicationJson)
    ], PodocResponse.prototype, "podoc400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Podoc401ApplicationJson)
    ], PodocResponse.prototype, "podoc401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Podoc404ApplicationJson)
    ], PodocResponse.prototype, "podoc404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Podoc500ApplicationJson)
    ], PodocResponse.prototype, "podoc500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Podoc502ApplicationJson)
    ], PodocResponse.prototype, "podoc502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Podoc503ApplicationJson)
    ], PodocResponse.prototype, "podoc503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Podoc504ApplicationJson)
    ], PodocResponse.prototype, "podoc504ApplicationJsonObject", void 0);
    return PodocResponse;
}(SpeakeasyBase));
export { PodocResponse };
