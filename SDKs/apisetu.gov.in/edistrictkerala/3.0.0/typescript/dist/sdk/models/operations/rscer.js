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
var RscerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RscerRequestBodyCertificateParameters, _super);
    function RscerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], RscerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], RscerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], RscerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return RscerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { RscerRequestBodyCertificateParameters };
export var RscerRequestBodyFormatEnum;
(function (RscerRequestBodyFormatEnum) {
    RscerRequestBodyFormatEnum["Pdf"] = "pdf";
})(RscerRequestBodyFormatEnum || (RscerRequestBodyFormatEnum = {}));
var RscerRequestBody = /** @class */ (function (_super) {
    __extends(RscerRequestBody, _super);
    function RscerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RscerRequestBodyCertificateParameters)
    ], RscerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RscerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RscerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RscerRequestBody.prototype, "txnId", void 0);
    return RscerRequestBody;
}(SpeakeasyBase));
export { RscerRequestBody };
var RscerSecurity = /** @class */ (function (_super) {
    __extends(RscerSecurity, _super);
    function RscerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RscerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RscerSecurity.prototype, "clientId", void 0);
    return RscerSecurity;
}(SpeakeasyBase));
export { RscerSecurity };
export var Rscer400ApplicationJsonErrorEnum;
(function (Rscer400ApplicationJsonErrorEnum) {
    Rscer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Rscer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Rscer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Rscer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Rscer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Rscer400ApplicationJsonErrorEnum || (Rscer400ApplicationJsonErrorEnum = {}));
export var Rscer400ApplicationJsonErrorDescriptionEnum;
(function (Rscer400ApplicationJsonErrorDescriptionEnum) {
    Rscer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Rscer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Rscer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Rscer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Rscer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Rscer400ApplicationJsonErrorDescriptionEnum || (Rscer400ApplicationJsonErrorDescriptionEnum = {}));
var Rscer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Rscer400ApplicationJson, _super);
    function Rscer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rscer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rscer400ApplicationJson.prototype, "errorDescription", void 0);
    return Rscer400ApplicationJson;
}(SpeakeasyBase));
export { Rscer400ApplicationJson };
export var Rscer401ApplicationJsonErrorEnum;
(function (Rscer401ApplicationJsonErrorEnum) {
    Rscer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Rscer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Rscer401ApplicationJsonErrorEnum || (Rscer401ApplicationJsonErrorEnum = {}));
export var Rscer401ApplicationJsonErrorDescriptionEnum;
(function (Rscer401ApplicationJsonErrorDescriptionEnum) {
    Rscer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Rscer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Rscer401ApplicationJsonErrorDescriptionEnum || (Rscer401ApplicationJsonErrorDescriptionEnum = {}));
var Rscer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Rscer401ApplicationJson, _super);
    function Rscer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rscer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rscer401ApplicationJson.prototype, "errorDescription", void 0);
    return Rscer401ApplicationJson;
}(SpeakeasyBase));
export { Rscer401ApplicationJson };
export var Rscer404ApplicationJsonErrorEnum;
(function (Rscer404ApplicationJsonErrorEnum) {
    Rscer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Rscer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Rscer404ApplicationJsonErrorEnum || (Rscer404ApplicationJsonErrorEnum = {}));
export var Rscer404ApplicationJsonErrorDescriptionEnum;
(function (Rscer404ApplicationJsonErrorDescriptionEnum) {
    Rscer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Rscer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Rscer404ApplicationJsonErrorDescriptionEnum || (Rscer404ApplicationJsonErrorDescriptionEnum = {}));
var Rscer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Rscer404ApplicationJson, _super);
    function Rscer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rscer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rscer404ApplicationJson.prototype, "errorDescription", void 0);
    return Rscer404ApplicationJson;
}(SpeakeasyBase));
export { Rscer404ApplicationJson };
export var Rscer500ApplicationJsonErrorEnum;
(function (Rscer500ApplicationJsonErrorEnum) {
    Rscer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Rscer500ApplicationJsonErrorEnum || (Rscer500ApplicationJsonErrorEnum = {}));
export var Rscer500ApplicationJsonErrorDescriptionEnum;
(function (Rscer500ApplicationJsonErrorDescriptionEnum) {
    Rscer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Rscer500ApplicationJsonErrorDescriptionEnum || (Rscer500ApplicationJsonErrorDescriptionEnum = {}));
var Rscer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Rscer500ApplicationJson, _super);
    function Rscer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rscer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rscer500ApplicationJson.prototype, "errorDescription", void 0);
    return Rscer500ApplicationJson;
}(SpeakeasyBase));
export { Rscer500ApplicationJson };
export var Rscer502ApplicationJsonErrorEnum;
(function (Rscer502ApplicationJsonErrorEnum) {
    Rscer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Rscer502ApplicationJsonErrorEnum || (Rscer502ApplicationJsonErrorEnum = {}));
export var Rscer502ApplicationJsonErrorDescriptionEnum;
(function (Rscer502ApplicationJsonErrorDescriptionEnum) {
    Rscer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Rscer502ApplicationJsonErrorDescriptionEnum || (Rscer502ApplicationJsonErrorDescriptionEnum = {}));
var Rscer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Rscer502ApplicationJson, _super);
    function Rscer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rscer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rscer502ApplicationJson.prototype, "errorDescription", void 0);
    return Rscer502ApplicationJson;
}(SpeakeasyBase));
export { Rscer502ApplicationJson };
export var Rscer503ApplicationJsonErrorEnum;
(function (Rscer503ApplicationJsonErrorEnum) {
    Rscer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Rscer503ApplicationJsonErrorEnum || (Rscer503ApplicationJsonErrorEnum = {}));
export var Rscer503ApplicationJsonErrorDescriptionEnum;
(function (Rscer503ApplicationJsonErrorDescriptionEnum) {
    Rscer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Rscer503ApplicationJsonErrorDescriptionEnum || (Rscer503ApplicationJsonErrorDescriptionEnum = {}));
var Rscer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Rscer503ApplicationJson, _super);
    function Rscer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rscer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rscer503ApplicationJson.prototype, "errorDescription", void 0);
    return Rscer503ApplicationJson;
}(SpeakeasyBase));
export { Rscer503ApplicationJson };
export var Rscer504ApplicationJsonErrorEnum;
(function (Rscer504ApplicationJsonErrorEnum) {
    Rscer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Rscer504ApplicationJsonErrorEnum || (Rscer504ApplicationJsonErrorEnum = {}));
export var Rscer504ApplicationJsonErrorDescriptionEnum;
(function (Rscer504ApplicationJsonErrorDescriptionEnum) {
    Rscer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Rscer504ApplicationJsonErrorDescriptionEnum || (Rscer504ApplicationJsonErrorDescriptionEnum = {}));
var Rscer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Rscer504ApplicationJson, _super);
    function Rscer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rscer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rscer504ApplicationJson.prototype, "errorDescription", void 0);
    return Rscer504ApplicationJson;
}(SpeakeasyBase));
export { Rscer504ApplicationJson };
var RscerRequest = /** @class */ (function (_super) {
    __extends(RscerRequest, _super);
    function RscerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RscerRequestBody)
    ], RscerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RscerSecurity)
    ], RscerRequest.prototype, "security", void 0);
    return RscerRequest;
}(SpeakeasyBase));
export { RscerRequest };
var RscerResponse = /** @class */ (function (_super) {
    __extends(RscerResponse, _super);
    function RscerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RscerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RscerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rscer400ApplicationJson)
    ], RscerResponse.prototype, "rscer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rscer401ApplicationJson)
    ], RscerResponse.prototype, "rscer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rscer404ApplicationJson)
    ], RscerResponse.prototype, "rscer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rscer500ApplicationJson)
    ], RscerResponse.prototype, "rscer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rscer502ApplicationJson)
    ], RscerResponse.prototype, "rscer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rscer503ApplicationJson)
    ], RscerResponse.prototype, "rscer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rscer504ApplicationJson)
    ], RscerResponse.prototype, "rscer504ApplicationJsonObject", void 0);
    return RscerResponse;
}(SpeakeasyBase));
export { RscerResponse };
