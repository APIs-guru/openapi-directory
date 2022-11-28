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
var OscerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(OscerRequestBodyCertificateParameters, _super);
    function OscerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], OscerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], OscerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], OscerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return OscerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { OscerRequestBodyCertificateParameters };
export var OscerRequestBodyFormatEnum;
(function (OscerRequestBodyFormatEnum) {
    OscerRequestBodyFormatEnum["Pdf"] = "pdf";
})(OscerRequestBodyFormatEnum || (OscerRequestBodyFormatEnum = {}));
var OscerRequestBody = /** @class */ (function (_super) {
    __extends(OscerRequestBody, _super);
    function OscerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", OscerRequestBodyCertificateParameters)
    ], OscerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], OscerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], OscerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], OscerRequestBody.prototype, "txnId", void 0);
    return OscerRequestBody;
}(SpeakeasyBase));
export { OscerRequestBody };
var OscerSecurity = /** @class */ (function (_super) {
    __extends(OscerSecurity, _super);
    function OscerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], OscerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], OscerSecurity.prototype, "clientId", void 0);
    return OscerSecurity;
}(SpeakeasyBase));
export { OscerSecurity };
export var Oscer400ApplicationJsonErrorEnum;
(function (Oscer400ApplicationJsonErrorEnum) {
    Oscer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Oscer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Oscer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Oscer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Oscer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Oscer400ApplicationJsonErrorEnum || (Oscer400ApplicationJsonErrorEnum = {}));
export var Oscer400ApplicationJsonErrorDescriptionEnum;
(function (Oscer400ApplicationJsonErrorDescriptionEnum) {
    Oscer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Oscer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Oscer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Oscer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Oscer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Oscer400ApplicationJsonErrorDescriptionEnum || (Oscer400ApplicationJsonErrorDescriptionEnum = {}));
var Oscer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Oscer400ApplicationJson, _super);
    function Oscer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Oscer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Oscer400ApplicationJson.prototype, "errorDescription", void 0);
    return Oscer400ApplicationJson;
}(SpeakeasyBase));
export { Oscer400ApplicationJson };
export var Oscer401ApplicationJsonErrorEnum;
(function (Oscer401ApplicationJsonErrorEnum) {
    Oscer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Oscer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Oscer401ApplicationJsonErrorEnum || (Oscer401ApplicationJsonErrorEnum = {}));
export var Oscer401ApplicationJsonErrorDescriptionEnum;
(function (Oscer401ApplicationJsonErrorDescriptionEnum) {
    Oscer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Oscer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Oscer401ApplicationJsonErrorDescriptionEnum || (Oscer401ApplicationJsonErrorDescriptionEnum = {}));
var Oscer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Oscer401ApplicationJson, _super);
    function Oscer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Oscer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Oscer401ApplicationJson.prototype, "errorDescription", void 0);
    return Oscer401ApplicationJson;
}(SpeakeasyBase));
export { Oscer401ApplicationJson };
export var Oscer404ApplicationJsonErrorEnum;
(function (Oscer404ApplicationJsonErrorEnum) {
    Oscer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Oscer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Oscer404ApplicationJsonErrorEnum || (Oscer404ApplicationJsonErrorEnum = {}));
export var Oscer404ApplicationJsonErrorDescriptionEnum;
(function (Oscer404ApplicationJsonErrorDescriptionEnum) {
    Oscer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Oscer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Oscer404ApplicationJsonErrorDescriptionEnum || (Oscer404ApplicationJsonErrorDescriptionEnum = {}));
var Oscer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Oscer404ApplicationJson, _super);
    function Oscer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Oscer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Oscer404ApplicationJson.prototype, "errorDescription", void 0);
    return Oscer404ApplicationJson;
}(SpeakeasyBase));
export { Oscer404ApplicationJson };
export var Oscer500ApplicationJsonErrorEnum;
(function (Oscer500ApplicationJsonErrorEnum) {
    Oscer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Oscer500ApplicationJsonErrorEnum || (Oscer500ApplicationJsonErrorEnum = {}));
export var Oscer500ApplicationJsonErrorDescriptionEnum;
(function (Oscer500ApplicationJsonErrorDescriptionEnum) {
    Oscer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Oscer500ApplicationJsonErrorDescriptionEnum || (Oscer500ApplicationJsonErrorDescriptionEnum = {}));
var Oscer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Oscer500ApplicationJson, _super);
    function Oscer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Oscer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Oscer500ApplicationJson.prototype, "errorDescription", void 0);
    return Oscer500ApplicationJson;
}(SpeakeasyBase));
export { Oscer500ApplicationJson };
export var Oscer502ApplicationJsonErrorEnum;
(function (Oscer502ApplicationJsonErrorEnum) {
    Oscer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Oscer502ApplicationJsonErrorEnum || (Oscer502ApplicationJsonErrorEnum = {}));
export var Oscer502ApplicationJsonErrorDescriptionEnum;
(function (Oscer502ApplicationJsonErrorDescriptionEnum) {
    Oscer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Oscer502ApplicationJsonErrorDescriptionEnum || (Oscer502ApplicationJsonErrorDescriptionEnum = {}));
var Oscer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Oscer502ApplicationJson, _super);
    function Oscer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Oscer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Oscer502ApplicationJson.prototype, "errorDescription", void 0);
    return Oscer502ApplicationJson;
}(SpeakeasyBase));
export { Oscer502ApplicationJson };
export var Oscer503ApplicationJsonErrorEnum;
(function (Oscer503ApplicationJsonErrorEnum) {
    Oscer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Oscer503ApplicationJsonErrorEnum || (Oscer503ApplicationJsonErrorEnum = {}));
export var Oscer503ApplicationJsonErrorDescriptionEnum;
(function (Oscer503ApplicationJsonErrorDescriptionEnum) {
    Oscer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Oscer503ApplicationJsonErrorDescriptionEnum || (Oscer503ApplicationJsonErrorDescriptionEnum = {}));
var Oscer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Oscer503ApplicationJson, _super);
    function Oscer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Oscer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Oscer503ApplicationJson.prototype, "errorDescription", void 0);
    return Oscer503ApplicationJson;
}(SpeakeasyBase));
export { Oscer503ApplicationJson };
export var Oscer504ApplicationJsonErrorEnum;
(function (Oscer504ApplicationJsonErrorEnum) {
    Oscer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Oscer504ApplicationJsonErrorEnum || (Oscer504ApplicationJsonErrorEnum = {}));
export var Oscer504ApplicationJsonErrorDescriptionEnum;
(function (Oscer504ApplicationJsonErrorDescriptionEnum) {
    Oscer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Oscer504ApplicationJsonErrorDescriptionEnum || (Oscer504ApplicationJsonErrorDescriptionEnum = {}));
var Oscer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Oscer504ApplicationJson, _super);
    function Oscer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Oscer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Oscer504ApplicationJson.prototype, "errorDescription", void 0);
    return Oscer504ApplicationJson;
}(SpeakeasyBase));
export { Oscer504ApplicationJson };
var OscerRequest = /** @class */ (function (_super) {
    __extends(OscerRequest, _super);
    function OscerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", OscerRequestBody)
    ], OscerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OscerSecurity)
    ], OscerRequest.prototype, "security", void 0);
    return OscerRequest;
}(SpeakeasyBase));
export { OscerRequest };
var OscerResponse = /** @class */ (function (_super) {
    __extends(OscerResponse, _super);
    function OscerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OscerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OscerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Oscer400ApplicationJson)
    ], OscerResponse.prototype, "oscer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Oscer401ApplicationJson)
    ], OscerResponse.prototype, "oscer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Oscer404ApplicationJson)
    ], OscerResponse.prototype, "oscer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Oscer500ApplicationJson)
    ], OscerResponse.prototype, "oscer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Oscer502ApplicationJson)
    ], OscerResponse.prototype, "oscer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Oscer503ApplicationJson)
    ], OscerResponse.prototype, "oscer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Oscer504ApplicationJson)
    ], OscerResponse.prototype, "oscer504ApplicationJsonObject", void 0);
    return OscerResponse;
}(SpeakeasyBase));
export { OscerResponse };
