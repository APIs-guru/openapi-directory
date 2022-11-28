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
var HscerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(HscerRequestBodyCertificateParameters, _super);
    function HscerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], HscerRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], HscerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PASSYR" }),
        __metadata("design:type", String)
    ], HscerRequestBodyCertificateParameters.prototype, "passyr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=REGNO" }),
        __metadata("design:type", String)
    ], HscerRequestBodyCertificateParameters.prototype, "regno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], HscerRequestBodyCertificateParameters.prototype, "uid", void 0);
    return HscerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { HscerRequestBodyCertificateParameters };
export var HscerRequestBodyFormatEnum;
(function (HscerRequestBodyFormatEnum) {
    HscerRequestBodyFormatEnum["Pdf"] = "pdf";
})(HscerRequestBodyFormatEnum || (HscerRequestBodyFormatEnum = {}));
var HscerRequestBody = /** @class */ (function (_super) {
    __extends(HscerRequestBody, _super);
    function HscerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", HscerRequestBodyCertificateParameters)
    ], HscerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], HscerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], HscerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], HscerRequestBody.prototype, "txnId", void 0);
    return HscerRequestBody;
}(SpeakeasyBase));
export { HscerRequestBody };
var HscerSecurity = /** @class */ (function (_super) {
    __extends(HscerSecurity, _super);
    function HscerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], HscerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], HscerSecurity.prototype, "clientId", void 0);
    return HscerSecurity;
}(SpeakeasyBase));
export { HscerSecurity };
export var Hscer400ApplicationJsonErrorEnum;
(function (Hscer400ApplicationJsonErrorEnum) {
    Hscer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Hscer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Hscer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Hscer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Hscer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Hscer400ApplicationJsonErrorEnum || (Hscer400ApplicationJsonErrorEnum = {}));
export var Hscer400ApplicationJsonErrorDescriptionEnum;
(function (Hscer400ApplicationJsonErrorDescriptionEnum) {
    Hscer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Hscer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Hscer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Hscer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Hscer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Hscer400ApplicationJsonErrorDescriptionEnum || (Hscer400ApplicationJsonErrorDescriptionEnum = {}));
var Hscer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Hscer400ApplicationJson, _super);
    function Hscer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hscer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hscer400ApplicationJson.prototype, "errorDescription", void 0);
    return Hscer400ApplicationJson;
}(SpeakeasyBase));
export { Hscer400ApplicationJson };
export var Hscer401ApplicationJsonErrorEnum;
(function (Hscer401ApplicationJsonErrorEnum) {
    Hscer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Hscer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Hscer401ApplicationJsonErrorEnum || (Hscer401ApplicationJsonErrorEnum = {}));
export var Hscer401ApplicationJsonErrorDescriptionEnum;
(function (Hscer401ApplicationJsonErrorDescriptionEnum) {
    Hscer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Hscer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Hscer401ApplicationJsonErrorDescriptionEnum || (Hscer401ApplicationJsonErrorDescriptionEnum = {}));
var Hscer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Hscer401ApplicationJson, _super);
    function Hscer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hscer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hscer401ApplicationJson.prototype, "errorDescription", void 0);
    return Hscer401ApplicationJson;
}(SpeakeasyBase));
export { Hscer401ApplicationJson };
export var Hscer404ApplicationJsonErrorEnum;
(function (Hscer404ApplicationJsonErrorEnum) {
    Hscer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Hscer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Hscer404ApplicationJsonErrorEnum || (Hscer404ApplicationJsonErrorEnum = {}));
export var Hscer404ApplicationJsonErrorDescriptionEnum;
(function (Hscer404ApplicationJsonErrorDescriptionEnum) {
    Hscer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Hscer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Hscer404ApplicationJsonErrorDescriptionEnum || (Hscer404ApplicationJsonErrorDescriptionEnum = {}));
var Hscer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Hscer404ApplicationJson, _super);
    function Hscer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hscer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hscer404ApplicationJson.prototype, "errorDescription", void 0);
    return Hscer404ApplicationJson;
}(SpeakeasyBase));
export { Hscer404ApplicationJson };
export var Hscer500ApplicationJsonErrorEnum;
(function (Hscer500ApplicationJsonErrorEnum) {
    Hscer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Hscer500ApplicationJsonErrorEnum || (Hscer500ApplicationJsonErrorEnum = {}));
export var Hscer500ApplicationJsonErrorDescriptionEnum;
(function (Hscer500ApplicationJsonErrorDescriptionEnum) {
    Hscer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Hscer500ApplicationJsonErrorDescriptionEnum || (Hscer500ApplicationJsonErrorDescriptionEnum = {}));
var Hscer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Hscer500ApplicationJson, _super);
    function Hscer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hscer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hscer500ApplicationJson.prototype, "errorDescription", void 0);
    return Hscer500ApplicationJson;
}(SpeakeasyBase));
export { Hscer500ApplicationJson };
export var Hscer502ApplicationJsonErrorEnum;
(function (Hscer502ApplicationJsonErrorEnum) {
    Hscer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Hscer502ApplicationJsonErrorEnum || (Hscer502ApplicationJsonErrorEnum = {}));
export var Hscer502ApplicationJsonErrorDescriptionEnum;
(function (Hscer502ApplicationJsonErrorDescriptionEnum) {
    Hscer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Hscer502ApplicationJsonErrorDescriptionEnum || (Hscer502ApplicationJsonErrorDescriptionEnum = {}));
var Hscer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Hscer502ApplicationJson, _super);
    function Hscer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hscer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hscer502ApplicationJson.prototype, "errorDescription", void 0);
    return Hscer502ApplicationJson;
}(SpeakeasyBase));
export { Hscer502ApplicationJson };
export var Hscer503ApplicationJsonErrorEnum;
(function (Hscer503ApplicationJsonErrorEnum) {
    Hscer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Hscer503ApplicationJsonErrorEnum || (Hscer503ApplicationJsonErrorEnum = {}));
export var Hscer503ApplicationJsonErrorDescriptionEnum;
(function (Hscer503ApplicationJsonErrorDescriptionEnum) {
    Hscer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Hscer503ApplicationJsonErrorDescriptionEnum || (Hscer503ApplicationJsonErrorDescriptionEnum = {}));
var Hscer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Hscer503ApplicationJson, _super);
    function Hscer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hscer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hscer503ApplicationJson.prototype, "errorDescription", void 0);
    return Hscer503ApplicationJson;
}(SpeakeasyBase));
export { Hscer503ApplicationJson };
export var Hscer504ApplicationJsonErrorEnum;
(function (Hscer504ApplicationJsonErrorEnum) {
    Hscer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Hscer504ApplicationJsonErrorEnum || (Hscer504ApplicationJsonErrorEnum = {}));
export var Hscer504ApplicationJsonErrorDescriptionEnum;
(function (Hscer504ApplicationJsonErrorDescriptionEnum) {
    Hscer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Hscer504ApplicationJsonErrorDescriptionEnum || (Hscer504ApplicationJsonErrorDescriptionEnum = {}));
var Hscer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Hscer504ApplicationJson, _super);
    function Hscer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hscer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hscer504ApplicationJson.prototype, "errorDescription", void 0);
    return Hscer504ApplicationJson;
}(SpeakeasyBase));
export { Hscer504ApplicationJson };
var HscerRequest = /** @class */ (function (_super) {
    __extends(HscerRequest, _super);
    function HscerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", HscerRequestBody)
    ], HscerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HscerSecurity)
    ], HscerRequest.prototype, "security", void 0);
    return HscerRequest;
}(SpeakeasyBase));
export { HscerRequest };
var HscerResponse = /** @class */ (function (_super) {
    __extends(HscerResponse, _super);
    function HscerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HscerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HscerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hscer400ApplicationJson)
    ], HscerResponse.prototype, "hscer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hscer401ApplicationJson)
    ], HscerResponse.prototype, "hscer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hscer404ApplicationJson)
    ], HscerResponse.prototype, "hscer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hscer500ApplicationJson)
    ], HscerResponse.prototype, "hscer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hscer502ApplicationJson)
    ], HscerResponse.prototype, "hscer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hscer503ApplicationJson)
    ], HscerResponse.prototype, "hscer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hscer504ApplicationJson)
    ], HscerResponse.prototype, "hscer504ApplicationJsonObject", void 0);
    return HscerResponse;
}(SpeakeasyBase));
export { HscerResponse };
