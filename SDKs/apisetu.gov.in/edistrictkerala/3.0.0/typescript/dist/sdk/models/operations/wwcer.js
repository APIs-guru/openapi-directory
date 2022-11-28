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
var WwcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(WwcerRequestBodyCertificateParameters, _super);
    function WwcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], WwcerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], WwcerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], WwcerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return WwcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { WwcerRequestBodyCertificateParameters };
export var WwcerRequestBodyFormatEnum;
(function (WwcerRequestBodyFormatEnum) {
    WwcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(WwcerRequestBodyFormatEnum || (WwcerRequestBodyFormatEnum = {}));
var WwcerRequestBody = /** @class */ (function (_super) {
    __extends(WwcerRequestBody, _super);
    function WwcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", WwcerRequestBodyCertificateParameters)
    ], WwcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], WwcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], WwcerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], WwcerRequestBody.prototype, "txnId", void 0);
    return WwcerRequestBody;
}(SpeakeasyBase));
export { WwcerRequestBody };
var WwcerSecurity = /** @class */ (function (_super) {
    __extends(WwcerSecurity, _super);
    function WwcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], WwcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], WwcerSecurity.prototype, "clientId", void 0);
    return WwcerSecurity;
}(SpeakeasyBase));
export { WwcerSecurity };
export var Wwcer400ApplicationJsonErrorEnum;
(function (Wwcer400ApplicationJsonErrorEnum) {
    Wwcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Wwcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Wwcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Wwcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Wwcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Wwcer400ApplicationJsonErrorEnum || (Wwcer400ApplicationJsonErrorEnum = {}));
export var Wwcer400ApplicationJsonErrorDescriptionEnum;
(function (Wwcer400ApplicationJsonErrorDescriptionEnum) {
    Wwcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Wwcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Wwcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Wwcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Wwcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Wwcer400ApplicationJsonErrorDescriptionEnum || (Wwcer400ApplicationJsonErrorDescriptionEnum = {}));
var Wwcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Wwcer400ApplicationJson, _super);
    function Wwcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wwcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wwcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Wwcer400ApplicationJson;
}(SpeakeasyBase));
export { Wwcer400ApplicationJson };
export var Wwcer401ApplicationJsonErrorEnum;
(function (Wwcer401ApplicationJsonErrorEnum) {
    Wwcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Wwcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Wwcer401ApplicationJsonErrorEnum || (Wwcer401ApplicationJsonErrorEnum = {}));
export var Wwcer401ApplicationJsonErrorDescriptionEnum;
(function (Wwcer401ApplicationJsonErrorDescriptionEnum) {
    Wwcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Wwcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Wwcer401ApplicationJsonErrorDescriptionEnum || (Wwcer401ApplicationJsonErrorDescriptionEnum = {}));
var Wwcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Wwcer401ApplicationJson, _super);
    function Wwcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wwcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wwcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Wwcer401ApplicationJson;
}(SpeakeasyBase));
export { Wwcer401ApplicationJson };
export var Wwcer404ApplicationJsonErrorEnum;
(function (Wwcer404ApplicationJsonErrorEnum) {
    Wwcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Wwcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Wwcer404ApplicationJsonErrorEnum || (Wwcer404ApplicationJsonErrorEnum = {}));
export var Wwcer404ApplicationJsonErrorDescriptionEnum;
(function (Wwcer404ApplicationJsonErrorDescriptionEnum) {
    Wwcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Wwcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Wwcer404ApplicationJsonErrorDescriptionEnum || (Wwcer404ApplicationJsonErrorDescriptionEnum = {}));
var Wwcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Wwcer404ApplicationJson, _super);
    function Wwcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wwcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wwcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Wwcer404ApplicationJson;
}(SpeakeasyBase));
export { Wwcer404ApplicationJson };
export var Wwcer500ApplicationJsonErrorEnum;
(function (Wwcer500ApplicationJsonErrorEnum) {
    Wwcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Wwcer500ApplicationJsonErrorEnum || (Wwcer500ApplicationJsonErrorEnum = {}));
export var Wwcer500ApplicationJsonErrorDescriptionEnum;
(function (Wwcer500ApplicationJsonErrorDescriptionEnum) {
    Wwcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Wwcer500ApplicationJsonErrorDescriptionEnum || (Wwcer500ApplicationJsonErrorDescriptionEnum = {}));
var Wwcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Wwcer500ApplicationJson, _super);
    function Wwcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wwcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wwcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Wwcer500ApplicationJson;
}(SpeakeasyBase));
export { Wwcer500ApplicationJson };
export var Wwcer502ApplicationJsonErrorEnum;
(function (Wwcer502ApplicationJsonErrorEnum) {
    Wwcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Wwcer502ApplicationJsonErrorEnum || (Wwcer502ApplicationJsonErrorEnum = {}));
export var Wwcer502ApplicationJsonErrorDescriptionEnum;
(function (Wwcer502ApplicationJsonErrorDescriptionEnum) {
    Wwcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Wwcer502ApplicationJsonErrorDescriptionEnum || (Wwcer502ApplicationJsonErrorDescriptionEnum = {}));
var Wwcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Wwcer502ApplicationJson, _super);
    function Wwcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wwcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wwcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Wwcer502ApplicationJson;
}(SpeakeasyBase));
export { Wwcer502ApplicationJson };
export var Wwcer503ApplicationJsonErrorEnum;
(function (Wwcer503ApplicationJsonErrorEnum) {
    Wwcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Wwcer503ApplicationJsonErrorEnum || (Wwcer503ApplicationJsonErrorEnum = {}));
export var Wwcer503ApplicationJsonErrorDescriptionEnum;
(function (Wwcer503ApplicationJsonErrorDescriptionEnum) {
    Wwcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Wwcer503ApplicationJsonErrorDescriptionEnum || (Wwcer503ApplicationJsonErrorDescriptionEnum = {}));
var Wwcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Wwcer503ApplicationJson, _super);
    function Wwcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wwcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wwcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Wwcer503ApplicationJson;
}(SpeakeasyBase));
export { Wwcer503ApplicationJson };
export var Wwcer504ApplicationJsonErrorEnum;
(function (Wwcer504ApplicationJsonErrorEnum) {
    Wwcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Wwcer504ApplicationJsonErrorEnum || (Wwcer504ApplicationJsonErrorEnum = {}));
export var Wwcer504ApplicationJsonErrorDescriptionEnum;
(function (Wwcer504ApplicationJsonErrorDescriptionEnum) {
    Wwcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Wwcer504ApplicationJsonErrorDescriptionEnum || (Wwcer504ApplicationJsonErrorDescriptionEnum = {}));
var Wwcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Wwcer504ApplicationJson, _super);
    function Wwcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wwcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wwcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Wwcer504ApplicationJson;
}(SpeakeasyBase));
export { Wwcer504ApplicationJson };
var WwcerRequest = /** @class */ (function (_super) {
    __extends(WwcerRequest, _super);
    function WwcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", WwcerRequestBody)
    ], WwcerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WwcerSecurity)
    ], WwcerRequest.prototype, "security", void 0);
    return WwcerRequest;
}(SpeakeasyBase));
export { WwcerRequest };
var WwcerResponse = /** @class */ (function (_super) {
    __extends(WwcerResponse, _super);
    function WwcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], WwcerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WwcerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Wwcer400ApplicationJson)
    ], WwcerResponse.prototype, "wwcer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Wwcer401ApplicationJson)
    ], WwcerResponse.prototype, "wwcer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Wwcer404ApplicationJson)
    ], WwcerResponse.prototype, "wwcer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Wwcer500ApplicationJson)
    ], WwcerResponse.prototype, "wwcer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Wwcer502ApplicationJson)
    ], WwcerResponse.prototype, "wwcer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Wwcer503ApplicationJson)
    ], WwcerResponse.prototype, "wwcer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Wwcer504ApplicationJson)
    ], WwcerResponse.prototype, "wwcer504ApplicationJsonObject", void 0);
    return WwcerResponse;
}(SpeakeasyBase));
export { WwcerResponse };
