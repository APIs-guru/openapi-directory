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
var SvcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SvcerRequestBodyCertificateParameters, _super);
    function SvcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], SvcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RROLL" }),
        __metadata("design:type", String)
    ], SvcerRequestBodyCertificateParameters.prototype, "rroll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=YEAR" }),
        __metadata("design:type", String)
    ], SvcerRequestBodyCertificateParameters.prototype, "year", void 0);
    return SvcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { SvcerRequestBodyCertificateParameters };
export var SvcerRequestBodyFormatEnum;
(function (SvcerRequestBodyFormatEnum) {
    SvcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(SvcerRequestBodyFormatEnum || (SvcerRequestBodyFormatEnum = {}));
var SvcerRequestBody = /** @class */ (function (_super) {
    __extends(SvcerRequestBody, _super);
    function SvcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SvcerRequestBodyCertificateParameters)
    ], SvcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SvcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SvcerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SvcerRequestBody.prototype, "txnId", void 0);
    return SvcerRequestBody;
}(SpeakeasyBase));
export { SvcerRequestBody };
var SvcerSecurity = /** @class */ (function (_super) {
    __extends(SvcerSecurity, _super);
    function SvcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SvcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SvcerSecurity.prototype, "clientId", void 0);
    return SvcerSecurity;
}(SpeakeasyBase));
export { SvcerSecurity };
export var Svcer400ApplicationJsonErrorEnum;
(function (Svcer400ApplicationJsonErrorEnum) {
    Svcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Svcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Svcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Svcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Svcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Svcer400ApplicationJsonErrorEnum || (Svcer400ApplicationJsonErrorEnum = {}));
export var Svcer400ApplicationJsonErrorDescriptionEnum;
(function (Svcer400ApplicationJsonErrorDescriptionEnum) {
    Svcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Svcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Svcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Svcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Svcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Svcer400ApplicationJsonErrorDescriptionEnum || (Svcer400ApplicationJsonErrorDescriptionEnum = {}));
var Svcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Svcer400ApplicationJson, _super);
    function Svcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Svcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Svcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Svcer400ApplicationJson;
}(SpeakeasyBase));
export { Svcer400ApplicationJson };
export var Svcer401ApplicationJsonErrorEnum;
(function (Svcer401ApplicationJsonErrorEnum) {
    Svcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Svcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Svcer401ApplicationJsonErrorEnum || (Svcer401ApplicationJsonErrorEnum = {}));
export var Svcer401ApplicationJsonErrorDescriptionEnum;
(function (Svcer401ApplicationJsonErrorDescriptionEnum) {
    Svcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Svcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Svcer401ApplicationJsonErrorDescriptionEnum || (Svcer401ApplicationJsonErrorDescriptionEnum = {}));
var Svcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Svcer401ApplicationJson, _super);
    function Svcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Svcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Svcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Svcer401ApplicationJson;
}(SpeakeasyBase));
export { Svcer401ApplicationJson };
export var Svcer404ApplicationJsonErrorEnum;
(function (Svcer404ApplicationJsonErrorEnum) {
    Svcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Svcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Svcer404ApplicationJsonErrorEnum || (Svcer404ApplicationJsonErrorEnum = {}));
export var Svcer404ApplicationJsonErrorDescriptionEnum;
(function (Svcer404ApplicationJsonErrorDescriptionEnum) {
    Svcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Svcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Svcer404ApplicationJsonErrorDescriptionEnum || (Svcer404ApplicationJsonErrorDescriptionEnum = {}));
var Svcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Svcer404ApplicationJson, _super);
    function Svcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Svcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Svcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Svcer404ApplicationJson;
}(SpeakeasyBase));
export { Svcer404ApplicationJson };
export var Svcer500ApplicationJsonErrorEnum;
(function (Svcer500ApplicationJsonErrorEnum) {
    Svcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Svcer500ApplicationJsonErrorEnum || (Svcer500ApplicationJsonErrorEnum = {}));
export var Svcer500ApplicationJsonErrorDescriptionEnum;
(function (Svcer500ApplicationJsonErrorDescriptionEnum) {
    Svcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Svcer500ApplicationJsonErrorDescriptionEnum || (Svcer500ApplicationJsonErrorDescriptionEnum = {}));
var Svcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Svcer500ApplicationJson, _super);
    function Svcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Svcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Svcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Svcer500ApplicationJson;
}(SpeakeasyBase));
export { Svcer500ApplicationJson };
export var Svcer502ApplicationJsonErrorEnum;
(function (Svcer502ApplicationJsonErrorEnum) {
    Svcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Svcer502ApplicationJsonErrorEnum || (Svcer502ApplicationJsonErrorEnum = {}));
export var Svcer502ApplicationJsonErrorDescriptionEnum;
(function (Svcer502ApplicationJsonErrorDescriptionEnum) {
    Svcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Svcer502ApplicationJsonErrorDescriptionEnum || (Svcer502ApplicationJsonErrorDescriptionEnum = {}));
var Svcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Svcer502ApplicationJson, _super);
    function Svcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Svcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Svcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Svcer502ApplicationJson;
}(SpeakeasyBase));
export { Svcer502ApplicationJson };
export var Svcer503ApplicationJsonErrorEnum;
(function (Svcer503ApplicationJsonErrorEnum) {
    Svcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Svcer503ApplicationJsonErrorEnum || (Svcer503ApplicationJsonErrorEnum = {}));
export var Svcer503ApplicationJsonErrorDescriptionEnum;
(function (Svcer503ApplicationJsonErrorDescriptionEnum) {
    Svcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Svcer503ApplicationJsonErrorDescriptionEnum || (Svcer503ApplicationJsonErrorDescriptionEnum = {}));
var Svcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Svcer503ApplicationJson, _super);
    function Svcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Svcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Svcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Svcer503ApplicationJson;
}(SpeakeasyBase));
export { Svcer503ApplicationJson };
export var Svcer504ApplicationJsonErrorEnum;
(function (Svcer504ApplicationJsonErrorEnum) {
    Svcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Svcer504ApplicationJsonErrorEnum || (Svcer504ApplicationJsonErrorEnum = {}));
export var Svcer504ApplicationJsonErrorDescriptionEnum;
(function (Svcer504ApplicationJsonErrorDescriptionEnum) {
    Svcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Svcer504ApplicationJsonErrorDescriptionEnum || (Svcer504ApplicationJsonErrorDescriptionEnum = {}));
var Svcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Svcer504ApplicationJson, _super);
    function Svcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Svcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Svcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Svcer504ApplicationJson;
}(SpeakeasyBase));
export { Svcer504ApplicationJson };
var SvcerRequest = /** @class */ (function (_super) {
    __extends(SvcerRequest, _super);
    function SvcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SvcerRequestBody)
    ], SvcerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SvcerSecurity)
    ], SvcerRequest.prototype, "security", void 0);
    return SvcerRequest;
}(SpeakeasyBase));
export { SvcerRequest };
var SvcerResponse = /** @class */ (function (_super) {
    __extends(SvcerResponse, _super);
    function SvcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SvcerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SvcerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Svcer400ApplicationJson)
    ], SvcerResponse.prototype, "svcer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Svcer401ApplicationJson)
    ], SvcerResponse.prototype, "svcer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Svcer404ApplicationJson)
    ], SvcerResponse.prototype, "svcer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Svcer500ApplicationJson)
    ], SvcerResponse.prototype, "svcer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Svcer502ApplicationJson)
    ], SvcerResponse.prototype, "svcer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Svcer503ApplicationJson)
    ], SvcerResponse.prototype, "svcer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Svcer504ApplicationJson)
    ], SvcerResponse.prototype, "svcer504ApplicationJsonObject", void 0);
    return SvcerResponse;
}(SpeakeasyBase));
export { SvcerResponse };
