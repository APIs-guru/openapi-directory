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
var NooclRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(NooclRequestBodyCertificateParameters, _super);
    function NooclRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], NooclRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], NooclRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return NooclRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { NooclRequestBodyCertificateParameters };
export var NooclRequestBodyFormatEnum;
(function (NooclRequestBodyFormatEnum) {
    NooclRequestBodyFormatEnum["Pdf"] = "pdf";
})(NooclRequestBodyFormatEnum || (NooclRequestBodyFormatEnum = {}));
var NooclRequestBody = /** @class */ (function (_super) {
    __extends(NooclRequestBody, _super);
    function NooclRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", NooclRequestBodyCertificateParameters)
    ], NooclRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], NooclRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], NooclRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], NooclRequestBody.prototype, "txnId", void 0);
    return NooclRequestBody;
}(SpeakeasyBase));
export { NooclRequestBody };
var NooclSecurity = /** @class */ (function (_super) {
    __extends(NooclSecurity, _super);
    function NooclSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], NooclSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], NooclSecurity.prototype, "clientId", void 0);
    return NooclSecurity;
}(SpeakeasyBase));
export { NooclSecurity };
export var Noocl400ApplicationJsonErrorEnum;
(function (Noocl400ApplicationJsonErrorEnum) {
    Noocl400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Noocl400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Noocl400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Noocl400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Noocl400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Noocl400ApplicationJsonErrorEnum || (Noocl400ApplicationJsonErrorEnum = {}));
export var Noocl400ApplicationJsonErrorDescriptionEnum;
(function (Noocl400ApplicationJsonErrorDescriptionEnum) {
    Noocl400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Noocl400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Noocl400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Noocl400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Noocl400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Noocl400ApplicationJsonErrorDescriptionEnum || (Noocl400ApplicationJsonErrorDescriptionEnum = {}));
var Noocl400ApplicationJson = /** @class */ (function (_super) {
    __extends(Noocl400ApplicationJson, _super);
    function Noocl400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Noocl400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Noocl400ApplicationJson.prototype, "errorDescription", void 0);
    return Noocl400ApplicationJson;
}(SpeakeasyBase));
export { Noocl400ApplicationJson };
export var Noocl401ApplicationJsonErrorEnum;
(function (Noocl401ApplicationJsonErrorEnum) {
    Noocl401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Noocl401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Noocl401ApplicationJsonErrorEnum || (Noocl401ApplicationJsonErrorEnum = {}));
export var Noocl401ApplicationJsonErrorDescriptionEnum;
(function (Noocl401ApplicationJsonErrorDescriptionEnum) {
    Noocl401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Noocl401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Noocl401ApplicationJsonErrorDescriptionEnum || (Noocl401ApplicationJsonErrorDescriptionEnum = {}));
var Noocl401ApplicationJson = /** @class */ (function (_super) {
    __extends(Noocl401ApplicationJson, _super);
    function Noocl401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Noocl401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Noocl401ApplicationJson.prototype, "errorDescription", void 0);
    return Noocl401ApplicationJson;
}(SpeakeasyBase));
export { Noocl401ApplicationJson };
export var Noocl404ApplicationJsonErrorEnum;
(function (Noocl404ApplicationJsonErrorEnum) {
    Noocl404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Noocl404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Noocl404ApplicationJsonErrorEnum || (Noocl404ApplicationJsonErrorEnum = {}));
export var Noocl404ApplicationJsonErrorDescriptionEnum;
(function (Noocl404ApplicationJsonErrorDescriptionEnum) {
    Noocl404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Noocl404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Noocl404ApplicationJsonErrorDescriptionEnum || (Noocl404ApplicationJsonErrorDescriptionEnum = {}));
var Noocl404ApplicationJson = /** @class */ (function (_super) {
    __extends(Noocl404ApplicationJson, _super);
    function Noocl404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Noocl404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Noocl404ApplicationJson.prototype, "errorDescription", void 0);
    return Noocl404ApplicationJson;
}(SpeakeasyBase));
export { Noocl404ApplicationJson };
export var Noocl500ApplicationJsonErrorEnum;
(function (Noocl500ApplicationJsonErrorEnum) {
    Noocl500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Noocl500ApplicationJsonErrorEnum || (Noocl500ApplicationJsonErrorEnum = {}));
export var Noocl500ApplicationJsonErrorDescriptionEnum;
(function (Noocl500ApplicationJsonErrorDescriptionEnum) {
    Noocl500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Noocl500ApplicationJsonErrorDescriptionEnum || (Noocl500ApplicationJsonErrorDescriptionEnum = {}));
var Noocl500ApplicationJson = /** @class */ (function (_super) {
    __extends(Noocl500ApplicationJson, _super);
    function Noocl500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Noocl500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Noocl500ApplicationJson.prototype, "errorDescription", void 0);
    return Noocl500ApplicationJson;
}(SpeakeasyBase));
export { Noocl500ApplicationJson };
export var Noocl502ApplicationJsonErrorEnum;
(function (Noocl502ApplicationJsonErrorEnum) {
    Noocl502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Noocl502ApplicationJsonErrorEnum || (Noocl502ApplicationJsonErrorEnum = {}));
export var Noocl502ApplicationJsonErrorDescriptionEnum;
(function (Noocl502ApplicationJsonErrorDescriptionEnum) {
    Noocl502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Noocl502ApplicationJsonErrorDescriptionEnum || (Noocl502ApplicationJsonErrorDescriptionEnum = {}));
var Noocl502ApplicationJson = /** @class */ (function (_super) {
    __extends(Noocl502ApplicationJson, _super);
    function Noocl502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Noocl502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Noocl502ApplicationJson.prototype, "errorDescription", void 0);
    return Noocl502ApplicationJson;
}(SpeakeasyBase));
export { Noocl502ApplicationJson };
export var Noocl503ApplicationJsonErrorEnum;
(function (Noocl503ApplicationJsonErrorEnum) {
    Noocl503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Noocl503ApplicationJsonErrorEnum || (Noocl503ApplicationJsonErrorEnum = {}));
export var Noocl503ApplicationJsonErrorDescriptionEnum;
(function (Noocl503ApplicationJsonErrorDescriptionEnum) {
    Noocl503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Noocl503ApplicationJsonErrorDescriptionEnum || (Noocl503ApplicationJsonErrorDescriptionEnum = {}));
var Noocl503ApplicationJson = /** @class */ (function (_super) {
    __extends(Noocl503ApplicationJson, _super);
    function Noocl503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Noocl503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Noocl503ApplicationJson.prototype, "errorDescription", void 0);
    return Noocl503ApplicationJson;
}(SpeakeasyBase));
export { Noocl503ApplicationJson };
export var Noocl504ApplicationJsonErrorEnum;
(function (Noocl504ApplicationJsonErrorEnum) {
    Noocl504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Noocl504ApplicationJsonErrorEnum || (Noocl504ApplicationJsonErrorEnum = {}));
export var Noocl504ApplicationJsonErrorDescriptionEnum;
(function (Noocl504ApplicationJsonErrorDescriptionEnum) {
    Noocl504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Noocl504ApplicationJsonErrorDescriptionEnum || (Noocl504ApplicationJsonErrorDescriptionEnum = {}));
var Noocl504ApplicationJson = /** @class */ (function (_super) {
    __extends(Noocl504ApplicationJson, _super);
    function Noocl504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Noocl504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Noocl504ApplicationJson.prototype, "errorDescription", void 0);
    return Noocl504ApplicationJson;
}(SpeakeasyBase));
export { Noocl504ApplicationJson };
var NooclRequest = /** @class */ (function (_super) {
    __extends(NooclRequest, _super);
    function NooclRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", NooclRequestBody)
    ], NooclRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NooclSecurity)
    ], NooclRequest.prototype, "security", void 0);
    return NooclRequest;
}(SpeakeasyBase));
export { NooclRequest };
var NooclResponse = /** @class */ (function (_super) {
    __extends(NooclResponse, _super);
    function NooclResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NooclResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NooclResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Noocl400ApplicationJson)
    ], NooclResponse.prototype, "noocl400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Noocl401ApplicationJson)
    ], NooclResponse.prototype, "noocl401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Noocl404ApplicationJson)
    ], NooclResponse.prototype, "noocl404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Noocl500ApplicationJson)
    ], NooclResponse.prototype, "noocl500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Noocl502ApplicationJson)
    ], NooclResponse.prototype, "noocl502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Noocl503ApplicationJson)
    ], NooclResponse.prototype, "noocl503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Noocl504ApplicationJson)
    ], NooclResponse.prototype, "noocl504ApplicationJsonObject", void 0);
    return NooclResponse;
}(SpeakeasyBase));
export { NooclResponse };
