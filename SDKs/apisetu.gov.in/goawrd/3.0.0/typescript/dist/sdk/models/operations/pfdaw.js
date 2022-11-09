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
var PfdawRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PfdawRequestBodyCertificateParameters, _super);
    function PfdawRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], PfdawRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=Registration" }),
        __metadata("design:type", String)
    ], PfdawRequestBodyCertificateParameters.prototype, "registration", void 0);
    return PfdawRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { PfdawRequestBodyCertificateParameters };
export var PfdawRequestBodyFormatEnum;
(function (PfdawRequestBodyFormatEnum) {
    PfdawRequestBodyFormatEnum["Pdf"] = "pdf";
})(PfdawRequestBodyFormatEnum || (PfdawRequestBodyFormatEnum = {}));
var PfdawRequestBody = /** @class */ (function (_super) {
    __extends(PfdawRequestBody, _super);
    function PfdawRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", PfdawRequestBodyCertificateParameters)
    ], PfdawRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], PfdawRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PfdawRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], PfdawRequestBody.prototype, "txnId", void 0);
    return PfdawRequestBody;
}(SpeakeasyBase));
export { PfdawRequestBody };
var PfdawSecurity = /** @class */ (function (_super) {
    __extends(PfdawSecurity, _super);
    function PfdawSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PfdawSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PfdawSecurity.prototype, "clientId", void 0);
    return PfdawSecurity;
}(SpeakeasyBase));
export { PfdawSecurity };
var PfdawRequest = /** @class */ (function (_super) {
    __extends(PfdawRequest, _super);
    function PfdawRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PfdawRequestBody)
    ], PfdawRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PfdawSecurity)
    ], PfdawRequest.prototype, "security", void 0);
    return PfdawRequest;
}(SpeakeasyBase));
export { PfdawRequest };
export var Pfdaw400ApplicationJsonErrorEnum;
(function (Pfdaw400ApplicationJsonErrorEnum) {
    Pfdaw400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Pfdaw400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Pfdaw400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Pfdaw400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Pfdaw400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Pfdaw400ApplicationJsonErrorEnum || (Pfdaw400ApplicationJsonErrorEnum = {}));
export var Pfdaw400ApplicationJsonErrorDescriptionEnum;
(function (Pfdaw400ApplicationJsonErrorDescriptionEnum) {
    Pfdaw400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Pfdaw400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Pfdaw400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Pfdaw400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Pfdaw400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Pfdaw400ApplicationJsonErrorDescriptionEnum || (Pfdaw400ApplicationJsonErrorDescriptionEnum = {}));
var Pfdaw400ApplicationJson = /** @class */ (function (_super) {
    __extends(Pfdaw400ApplicationJson, _super);
    function Pfdaw400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pfdaw400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pfdaw400ApplicationJson.prototype, "errorDescription", void 0);
    return Pfdaw400ApplicationJson;
}(SpeakeasyBase));
export { Pfdaw400ApplicationJson };
export var Pfdaw401ApplicationJsonErrorEnum;
(function (Pfdaw401ApplicationJsonErrorEnum) {
    Pfdaw401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Pfdaw401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Pfdaw401ApplicationJsonErrorEnum || (Pfdaw401ApplicationJsonErrorEnum = {}));
export var Pfdaw401ApplicationJsonErrorDescriptionEnum;
(function (Pfdaw401ApplicationJsonErrorDescriptionEnum) {
    Pfdaw401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Pfdaw401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Pfdaw401ApplicationJsonErrorDescriptionEnum || (Pfdaw401ApplicationJsonErrorDescriptionEnum = {}));
var Pfdaw401ApplicationJson = /** @class */ (function (_super) {
    __extends(Pfdaw401ApplicationJson, _super);
    function Pfdaw401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pfdaw401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pfdaw401ApplicationJson.prototype, "errorDescription", void 0);
    return Pfdaw401ApplicationJson;
}(SpeakeasyBase));
export { Pfdaw401ApplicationJson };
export var Pfdaw404ApplicationJsonErrorEnum;
(function (Pfdaw404ApplicationJsonErrorEnum) {
    Pfdaw404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Pfdaw404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Pfdaw404ApplicationJsonErrorEnum || (Pfdaw404ApplicationJsonErrorEnum = {}));
export var Pfdaw404ApplicationJsonErrorDescriptionEnum;
(function (Pfdaw404ApplicationJsonErrorDescriptionEnum) {
    Pfdaw404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Pfdaw404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Pfdaw404ApplicationJsonErrorDescriptionEnum || (Pfdaw404ApplicationJsonErrorDescriptionEnum = {}));
var Pfdaw404ApplicationJson = /** @class */ (function (_super) {
    __extends(Pfdaw404ApplicationJson, _super);
    function Pfdaw404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pfdaw404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pfdaw404ApplicationJson.prototype, "errorDescription", void 0);
    return Pfdaw404ApplicationJson;
}(SpeakeasyBase));
export { Pfdaw404ApplicationJson };
export var Pfdaw500ApplicationJsonErrorEnum;
(function (Pfdaw500ApplicationJsonErrorEnum) {
    Pfdaw500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Pfdaw500ApplicationJsonErrorEnum || (Pfdaw500ApplicationJsonErrorEnum = {}));
export var Pfdaw500ApplicationJsonErrorDescriptionEnum;
(function (Pfdaw500ApplicationJsonErrorDescriptionEnum) {
    Pfdaw500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Pfdaw500ApplicationJsonErrorDescriptionEnum || (Pfdaw500ApplicationJsonErrorDescriptionEnum = {}));
var Pfdaw500ApplicationJson = /** @class */ (function (_super) {
    __extends(Pfdaw500ApplicationJson, _super);
    function Pfdaw500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pfdaw500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pfdaw500ApplicationJson.prototype, "errorDescription", void 0);
    return Pfdaw500ApplicationJson;
}(SpeakeasyBase));
export { Pfdaw500ApplicationJson };
export var Pfdaw502ApplicationJsonErrorEnum;
(function (Pfdaw502ApplicationJsonErrorEnum) {
    Pfdaw502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Pfdaw502ApplicationJsonErrorEnum || (Pfdaw502ApplicationJsonErrorEnum = {}));
export var Pfdaw502ApplicationJsonErrorDescriptionEnum;
(function (Pfdaw502ApplicationJsonErrorDescriptionEnum) {
    Pfdaw502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Pfdaw502ApplicationJsonErrorDescriptionEnum || (Pfdaw502ApplicationJsonErrorDescriptionEnum = {}));
var Pfdaw502ApplicationJson = /** @class */ (function (_super) {
    __extends(Pfdaw502ApplicationJson, _super);
    function Pfdaw502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pfdaw502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pfdaw502ApplicationJson.prototype, "errorDescription", void 0);
    return Pfdaw502ApplicationJson;
}(SpeakeasyBase));
export { Pfdaw502ApplicationJson };
export var Pfdaw503ApplicationJsonErrorEnum;
(function (Pfdaw503ApplicationJsonErrorEnum) {
    Pfdaw503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Pfdaw503ApplicationJsonErrorEnum || (Pfdaw503ApplicationJsonErrorEnum = {}));
export var Pfdaw503ApplicationJsonErrorDescriptionEnum;
(function (Pfdaw503ApplicationJsonErrorDescriptionEnum) {
    Pfdaw503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Pfdaw503ApplicationJsonErrorDescriptionEnum || (Pfdaw503ApplicationJsonErrorDescriptionEnum = {}));
var Pfdaw503ApplicationJson = /** @class */ (function (_super) {
    __extends(Pfdaw503ApplicationJson, _super);
    function Pfdaw503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pfdaw503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pfdaw503ApplicationJson.prototype, "errorDescription", void 0);
    return Pfdaw503ApplicationJson;
}(SpeakeasyBase));
export { Pfdaw503ApplicationJson };
export var Pfdaw504ApplicationJsonErrorEnum;
(function (Pfdaw504ApplicationJsonErrorEnum) {
    Pfdaw504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Pfdaw504ApplicationJsonErrorEnum || (Pfdaw504ApplicationJsonErrorEnum = {}));
export var Pfdaw504ApplicationJsonErrorDescriptionEnum;
(function (Pfdaw504ApplicationJsonErrorDescriptionEnum) {
    Pfdaw504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Pfdaw504ApplicationJsonErrorDescriptionEnum || (Pfdaw504ApplicationJsonErrorDescriptionEnum = {}));
var Pfdaw504ApplicationJson = /** @class */ (function (_super) {
    __extends(Pfdaw504ApplicationJson, _super);
    function Pfdaw504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pfdaw504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pfdaw504ApplicationJson.prototype, "errorDescription", void 0);
    return Pfdaw504ApplicationJson;
}(SpeakeasyBase));
export { Pfdaw504ApplicationJson };
var PfdawResponse = /** @class */ (function (_super) {
    __extends(PfdawResponse, _super);
    function PfdawResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PfdawResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PfdawResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pfdaw400ApplicationJson)
    ], PfdawResponse.prototype, "pfdaw400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pfdaw401ApplicationJson)
    ], PfdawResponse.prototype, "pfdaw401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pfdaw404ApplicationJson)
    ], PfdawResponse.prototype, "pfdaw404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pfdaw500ApplicationJson)
    ], PfdawResponse.prototype, "pfdaw500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pfdaw502ApplicationJson)
    ], PfdawResponse.prototype, "pfdaw502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pfdaw503ApplicationJson)
    ], PfdawResponse.prototype, "pfdaw503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pfdaw504ApplicationJson)
    ], PfdawResponse.prototype, "pfdaw504ApplicationJsonObject", void 0);
    return PfdawResponse;
}(SpeakeasyBase));
export { PfdawResponse };
