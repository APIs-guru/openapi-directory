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
var RlcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RlcerRequestBodyCertificateParameters, _super);
    function RlcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], RlcerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], RlcerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], RlcerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return RlcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { RlcerRequestBodyCertificateParameters };
export var RlcerRequestBodyFormatEnum;
(function (RlcerRequestBodyFormatEnum) {
    RlcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(RlcerRequestBodyFormatEnum || (RlcerRequestBodyFormatEnum = {}));
var RlcerRequestBody = /** @class */ (function (_super) {
    __extends(RlcerRequestBody, _super);
    function RlcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RlcerRequestBodyCertificateParameters)
    ], RlcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RlcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RlcerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RlcerRequestBody.prototype, "txnId", void 0);
    return RlcerRequestBody;
}(SpeakeasyBase));
export { RlcerRequestBody };
var RlcerSecurity = /** @class */ (function (_super) {
    __extends(RlcerSecurity, _super);
    function RlcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RlcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RlcerSecurity.prototype, "clientId", void 0);
    return RlcerSecurity;
}(SpeakeasyBase));
export { RlcerSecurity };
export var Rlcer400ApplicationJsonErrorEnum;
(function (Rlcer400ApplicationJsonErrorEnum) {
    Rlcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Rlcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Rlcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Rlcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Rlcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Rlcer400ApplicationJsonErrorEnum || (Rlcer400ApplicationJsonErrorEnum = {}));
export var Rlcer400ApplicationJsonErrorDescriptionEnum;
(function (Rlcer400ApplicationJsonErrorDescriptionEnum) {
    Rlcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Rlcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Rlcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Rlcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Rlcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Rlcer400ApplicationJsonErrorDescriptionEnum || (Rlcer400ApplicationJsonErrorDescriptionEnum = {}));
var Rlcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Rlcer400ApplicationJson, _super);
    function Rlcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rlcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rlcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Rlcer400ApplicationJson;
}(SpeakeasyBase));
export { Rlcer400ApplicationJson };
export var Rlcer401ApplicationJsonErrorEnum;
(function (Rlcer401ApplicationJsonErrorEnum) {
    Rlcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Rlcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Rlcer401ApplicationJsonErrorEnum || (Rlcer401ApplicationJsonErrorEnum = {}));
export var Rlcer401ApplicationJsonErrorDescriptionEnum;
(function (Rlcer401ApplicationJsonErrorDescriptionEnum) {
    Rlcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Rlcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Rlcer401ApplicationJsonErrorDescriptionEnum || (Rlcer401ApplicationJsonErrorDescriptionEnum = {}));
var Rlcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Rlcer401ApplicationJson, _super);
    function Rlcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rlcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rlcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Rlcer401ApplicationJson;
}(SpeakeasyBase));
export { Rlcer401ApplicationJson };
export var Rlcer404ApplicationJsonErrorEnum;
(function (Rlcer404ApplicationJsonErrorEnum) {
    Rlcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Rlcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Rlcer404ApplicationJsonErrorEnum || (Rlcer404ApplicationJsonErrorEnum = {}));
export var Rlcer404ApplicationJsonErrorDescriptionEnum;
(function (Rlcer404ApplicationJsonErrorDescriptionEnum) {
    Rlcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Rlcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Rlcer404ApplicationJsonErrorDescriptionEnum || (Rlcer404ApplicationJsonErrorDescriptionEnum = {}));
var Rlcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Rlcer404ApplicationJson, _super);
    function Rlcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rlcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rlcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Rlcer404ApplicationJson;
}(SpeakeasyBase));
export { Rlcer404ApplicationJson };
export var Rlcer500ApplicationJsonErrorEnum;
(function (Rlcer500ApplicationJsonErrorEnum) {
    Rlcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Rlcer500ApplicationJsonErrorEnum || (Rlcer500ApplicationJsonErrorEnum = {}));
export var Rlcer500ApplicationJsonErrorDescriptionEnum;
(function (Rlcer500ApplicationJsonErrorDescriptionEnum) {
    Rlcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Rlcer500ApplicationJsonErrorDescriptionEnum || (Rlcer500ApplicationJsonErrorDescriptionEnum = {}));
var Rlcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Rlcer500ApplicationJson, _super);
    function Rlcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rlcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rlcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Rlcer500ApplicationJson;
}(SpeakeasyBase));
export { Rlcer500ApplicationJson };
export var Rlcer502ApplicationJsonErrorEnum;
(function (Rlcer502ApplicationJsonErrorEnum) {
    Rlcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Rlcer502ApplicationJsonErrorEnum || (Rlcer502ApplicationJsonErrorEnum = {}));
export var Rlcer502ApplicationJsonErrorDescriptionEnum;
(function (Rlcer502ApplicationJsonErrorDescriptionEnum) {
    Rlcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Rlcer502ApplicationJsonErrorDescriptionEnum || (Rlcer502ApplicationJsonErrorDescriptionEnum = {}));
var Rlcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Rlcer502ApplicationJson, _super);
    function Rlcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rlcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rlcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Rlcer502ApplicationJson;
}(SpeakeasyBase));
export { Rlcer502ApplicationJson };
export var Rlcer503ApplicationJsonErrorEnum;
(function (Rlcer503ApplicationJsonErrorEnum) {
    Rlcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Rlcer503ApplicationJsonErrorEnum || (Rlcer503ApplicationJsonErrorEnum = {}));
export var Rlcer503ApplicationJsonErrorDescriptionEnum;
(function (Rlcer503ApplicationJsonErrorDescriptionEnum) {
    Rlcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Rlcer503ApplicationJsonErrorDescriptionEnum || (Rlcer503ApplicationJsonErrorDescriptionEnum = {}));
var Rlcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Rlcer503ApplicationJson, _super);
    function Rlcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rlcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rlcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Rlcer503ApplicationJson;
}(SpeakeasyBase));
export { Rlcer503ApplicationJson };
export var Rlcer504ApplicationJsonErrorEnum;
(function (Rlcer504ApplicationJsonErrorEnum) {
    Rlcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Rlcer504ApplicationJsonErrorEnum || (Rlcer504ApplicationJsonErrorEnum = {}));
export var Rlcer504ApplicationJsonErrorDescriptionEnum;
(function (Rlcer504ApplicationJsonErrorDescriptionEnum) {
    Rlcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Rlcer504ApplicationJsonErrorDescriptionEnum || (Rlcer504ApplicationJsonErrorDescriptionEnum = {}));
var Rlcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Rlcer504ApplicationJson, _super);
    function Rlcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rlcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rlcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Rlcer504ApplicationJson;
}(SpeakeasyBase));
export { Rlcer504ApplicationJson };
var RlcerRequest = /** @class */ (function (_super) {
    __extends(RlcerRequest, _super);
    function RlcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RlcerRequestBody)
    ], RlcerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RlcerSecurity)
    ], RlcerRequest.prototype, "security", void 0);
    return RlcerRequest;
}(SpeakeasyBase));
export { RlcerRequest };
var RlcerResponse = /** @class */ (function (_super) {
    __extends(RlcerResponse, _super);
    function RlcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RlcerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RlcerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rlcer400ApplicationJson)
    ], RlcerResponse.prototype, "rlcer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rlcer401ApplicationJson)
    ], RlcerResponse.prototype, "rlcer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rlcer404ApplicationJson)
    ], RlcerResponse.prototype, "rlcer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rlcer500ApplicationJson)
    ], RlcerResponse.prototype, "rlcer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rlcer502ApplicationJson)
    ], RlcerResponse.prototype, "rlcer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rlcer503ApplicationJson)
    ], RlcerResponse.prototype, "rlcer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rlcer504ApplicationJson)
    ], RlcerResponse.prototype, "rlcer504ApplicationJsonObject", void 0);
    return RlcerResponse;
}(SpeakeasyBase));
export { RlcerResponse };
