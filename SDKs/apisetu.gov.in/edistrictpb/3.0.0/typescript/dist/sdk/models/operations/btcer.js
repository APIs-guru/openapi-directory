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
var BtcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(BtcerRequestBodyCertificateParameters, _super);
    function BtcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], BtcerRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        Metadata({ data: "json, name=RegistrationID" }),
        __metadata("design:type", String)
    ], BtcerRequestBodyCertificateParameters.prototype, "registrationId", void 0);
    return BtcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { BtcerRequestBodyCertificateParameters };
export var BtcerRequestBodyFormatEnum;
(function (BtcerRequestBodyFormatEnum) {
    BtcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(BtcerRequestBodyFormatEnum || (BtcerRequestBodyFormatEnum = {}));
var BtcerRequestBody = /** @class */ (function (_super) {
    __extends(BtcerRequestBody, _super);
    function BtcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", BtcerRequestBodyCertificateParameters)
    ], BtcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], BtcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], BtcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], BtcerRequestBody.prototype, "txnId", void 0);
    return BtcerRequestBody;
}(SpeakeasyBase));
export { BtcerRequestBody };
var BtcerSecurity = /** @class */ (function (_super) {
    __extends(BtcerSecurity, _super);
    function BtcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], BtcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], BtcerSecurity.prototype, "clientId", void 0);
    return BtcerSecurity;
}(SpeakeasyBase));
export { BtcerSecurity };
var BtcerRequest = /** @class */ (function (_super) {
    __extends(BtcerRequest, _super);
    function BtcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BtcerRequestBody)
    ], BtcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BtcerSecurity)
    ], BtcerRequest.prototype, "security", void 0);
    return BtcerRequest;
}(SpeakeasyBase));
export { BtcerRequest };
export var Btcer400ApplicationJsonErrorEnum;
(function (Btcer400ApplicationJsonErrorEnum) {
    Btcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Btcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Btcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Btcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Btcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Btcer400ApplicationJsonErrorEnum || (Btcer400ApplicationJsonErrorEnum = {}));
export var Btcer400ApplicationJsonErrorDescriptionEnum;
(function (Btcer400ApplicationJsonErrorDescriptionEnum) {
    Btcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Btcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Btcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Btcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Btcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Btcer400ApplicationJsonErrorDescriptionEnum || (Btcer400ApplicationJsonErrorDescriptionEnum = {}));
var Btcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Btcer400ApplicationJson, _super);
    function Btcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Btcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Btcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Btcer400ApplicationJson;
}(SpeakeasyBase));
export { Btcer400ApplicationJson };
export var Btcer401ApplicationJsonErrorEnum;
(function (Btcer401ApplicationJsonErrorEnum) {
    Btcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Btcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Btcer401ApplicationJsonErrorEnum || (Btcer401ApplicationJsonErrorEnum = {}));
export var Btcer401ApplicationJsonErrorDescriptionEnum;
(function (Btcer401ApplicationJsonErrorDescriptionEnum) {
    Btcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Btcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Btcer401ApplicationJsonErrorDescriptionEnum || (Btcer401ApplicationJsonErrorDescriptionEnum = {}));
var Btcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Btcer401ApplicationJson, _super);
    function Btcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Btcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Btcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Btcer401ApplicationJson;
}(SpeakeasyBase));
export { Btcer401ApplicationJson };
export var Btcer404ApplicationJsonErrorEnum;
(function (Btcer404ApplicationJsonErrorEnum) {
    Btcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Btcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Btcer404ApplicationJsonErrorEnum || (Btcer404ApplicationJsonErrorEnum = {}));
export var Btcer404ApplicationJsonErrorDescriptionEnum;
(function (Btcer404ApplicationJsonErrorDescriptionEnum) {
    Btcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Btcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Btcer404ApplicationJsonErrorDescriptionEnum || (Btcer404ApplicationJsonErrorDescriptionEnum = {}));
var Btcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Btcer404ApplicationJson, _super);
    function Btcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Btcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Btcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Btcer404ApplicationJson;
}(SpeakeasyBase));
export { Btcer404ApplicationJson };
export var Btcer500ApplicationJsonErrorEnum;
(function (Btcer500ApplicationJsonErrorEnum) {
    Btcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Btcer500ApplicationJsonErrorEnum || (Btcer500ApplicationJsonErrorEnum = {}));
export var Btcer500ApplicationJsonErrorDescriptionEnum;
(function (Btcer500ApplicationJsonErrorDescriptionEnum) {
    Btcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Btcer500ApplicationJsonErrorDescriptionEnum || (Btcer500ApplicationJsonErrorDescriptionEnum = {}));
var Btcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Btcer500ApplicationJson, _super);
    function Btcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Btcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Btcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Btcer500ApplicationJson;
}(SpeakeasyBase));
export { Btcer500ApplicationJson };
export var Btcer502ApplicationJsonErrorEnum;
(function (Btcer502ApplicationJsonErrorEnum) {
    Btcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Btcer502ApplicationJsonErrorEnum || (Btcer502ApplicationJsonErrorEnum = {}));
export var Btcer502ApplicationJsonErrorDescriptionEnum;
(function (Btcer502ApplicationJsonErrorDescriptionEnum) {
    Btcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Btcer502ApplicationJsonErrorDescriptionEnum || (Btcer502ApplicationJsonErrorDescriptionEnum = {}));
var Btcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Btcer502ApplicationJson, _super);
    function Btcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Btcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Btcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Btcer502ApplicationJson;
}(SpeakeasyBase));
export { Btcer502ApplicationJson };
export var Btcer503ApplicationJsonErrorEnum;
(function (Btcer503ApplicationJsonErrorEnum) {
    Btcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Btcer503ApplicationJsonErrorEnum || (Btcer503ApplicationJsonErrorEnum = {}));
export var Btcer503ApplicationJsonErrorDescriptionEnum;
(function (Btcer503ApplicationJsonErrorDescriptionEnum) {
    Btcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Btcer503ApplicationJsonErrorDescriptionEnum || (Btcer503ApplicationJsonErrorDescriptionEnum = {}));
var Btcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Btcer503ApplicationJson, _super);
    function Btcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Btcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Btcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Btcer503ApplicationJson;
}(SpeakeasyBase));
export { Btcer503ApplicationJson };
export var Btcer504ApplicationJsonErrorEnum;
(function (Btcer504ApplicationJsonErrorEnum) {
    Btcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Btcer504ApplicationJsonErrorEnum || (Btcer504ApplicationJsonErrorEnum = {}));
export var Btcer504ApplicationJsonErrorDescriptionEnum;
(function (Btcer504ApplicationJsonErrorDescriptionEnum) {
    Btcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Btcer504ApplicationJsonErrorDescriptionEnum || (Btcer504ApplicationJsonErrorDescriptionEnum = {}));
var Btcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Btcer504ApplicationJson, _super);
    function Btcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Btcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Btcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Btcer504ApplicationJson;
}(SpeakeasyBase));
export { Btcer504ApplicationJson };
var BtcerResponse = /** @class */ (function (_super) {
    __extends(BtcerResponse, _super);
    function BtcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BtcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BtcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Btcer400ApplicationJson)
    ], BtcerResponse.prototype, "btcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Btcer401ApplicationJson)
    ], BtcerResponse.prototype, "btcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Btcer404ApplicationJson)
    ], BtcerResponse.prototype, "btcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Btcer500ApplicationJson)
    ], BtcerResponse.prototype, "btcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Btcer502ApplicationJson)
    ], BtcerResponse.prototype, "btcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Btcer503ApplicationJson)
    ], BtcerResponse.prototype, "btcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Btcer504ApplicationJson)
    ], BtcerResponse.prototype, "btcer504ApplicationJsonObject", void 0);
    return BtcerResponse;
}(SpeakeasyBase));
export { BtcerResponse };
