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
var TdcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(TdcerRequestBodyCertificateParameters, _super);
    function TdcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustID" }),
        __metadata("design:type", String)
    ], TdcerRequestBodyCertificateParameters.prototype, "custId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], TdcerRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finYr" }),
        __metadata("design:type", String)
    ], TdcerRequestBodyCertificateParameters.prototype, "finYr", void 0);
    return TdcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { TdcerRequestBodyCertificateParameters };
export var TdcerRequestBodyFormatEnum;
(function (TdcerRequestBodyFormatEnum) {
    TdcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(TdcerRequestBodyFormatEnum || (TdcerRequestBodyFormatEnum = {}));
var TdcerRequestBody = /** @class */ (function (_super) {
    __extends(TdcerRequestBody, _super);
    function TdcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", TdcerRequestBodyCertificateParameters)
    ], TdcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], TdcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], TdcerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], TdcerRequestBody.prototype, "txnId", void 0);
    return TdcerRequestBody;
}(SpeakeasyBase));
export { TdcerRequestBody };
var TdcerSecurity = /** @class */ (function (_super) {
    __extends(TdcerSecurity, _super);
    function TdcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], TdcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], TdcerSecurity.prototype, "clientId", void 0);
    return TdcerSecurity;
}(SpeakeasyBase));
export { TdcerSecurity };
export var Tdcer400ApplicationJsonErrorEnum;
(function (Tdcer400ApplicationJsonErrorEnum) {
    Tdcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Tdcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Tdcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Tdcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Tdcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Tdcer400ApplicationJsonErrorEnum || (Tdcer400ApplicationJsonErrorEnum = {}));
export var Tdcer400ApplicationJsonErrorDescriptionEnum;
(function (Tdcer400ApplicationJsonErrorDescriptionEnum) {
    Tdcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Tdcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Tdcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Tdcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Tdcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Tdcer400ApplicationJsonErrorDescriptionEnum || (Tdcer400ApplicationJsonErrorDescriptionEnum = {}));
var Tdcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Tdcer400ApplicationJson, _super);
    function Tdcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tdcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tdcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Tdcer400ApplicationJson;
}(SpeakeasyBase));
export { Tdcer400ApplicationJson };
export var Tdcer401ApplicationJsonErrorEnum;
(function (Tdcer401ApplicationJsonErrorEnum) {
    Tdcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Tdcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Tdcer401ApplicationJsonErrorEnum || (Tdcer401ApplicationJsonErrorEnum = {}));
export var Tdcer401ApplicationJsonErrorDescriptionEnum;
(function (Tdcer401ApplicationJsonErrorDescriptionEnum) {
    Tdcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Tdcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Tdcer401ApplicationJsonErrorDescriptionEnum || (Tdcer401ApplicationJsonErrorDescriptionEnum = {}));
var Tdcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Tdcer401ApplicationJson, _super);
    function Tdcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tdcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tdcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Tdcer401ApplicationJson;
}(SpeakeasyBase));
export { Tdcer401ApplicationJson };
export var Tdcer404ApplicationJsonErrorEnum;
(function (Tdcer404ApplicationJsonErrorEnum) {
    Tdcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Tdcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Tdcer404ApplicationJsonErrorEnum || (Tdcer404ApplicationJsonErrorEnum = {}));
export var Tdcer404ApplicationJsonErrorDescriptionEnum;
(function (Tdcer404ApplicationJsonErrorDescriptionEnum) {
    Tdcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Tdcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Tdcer404ApplicationJsonErrorDescriptionEnum || (Tdcer404ApplicationJsonErrorDescriptionEnum = {}));
var Tdcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Tdcer404ApplicationJson, _super);
    function Tdcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tdcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tdcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Tdcer404ApplicationJson;
}(SpeakeasyBase));
export { Tdcer404ApplicationJson };
export var Tdcer500ApplicationJsonErrorEnum;
(function (Tdcer500ApplicationJsonErrorEnum) {
    Tdcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Tdcer500ApplicationJsonErrorEnum || (Tdcer500ApplicationJsonErrorEnum = {}));
export var Tdcer500ApplicationJsonErrorDescriptionEnum;
(function (Tdcer500ApplicationJsonErrorDescriptionEnum) {
    Tdcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Tdcer500ApplicationJsonErrorDescriptionEnum || (Tdcer500ApplicationJsonErrorDescriptionEnum = {}));
var Tdcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Tdcer500ApplicationJson, _super);
    function Tdcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tdcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tdcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Tdcer500ApplicationJson;
}(SpeakeasyBase));
export { Tdcer500ApplicationJson };
export var Tdcer502ApplicationJsonErrorEnum;
(function (Tdcer502ApplicationJsonErrorEnum) {
    Tdcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Tdcer502ApplicationJsonErrorEnum || (Tdcer502ApplicationJsonErrorEnum = {}));
export var Tdcer502ApplicationJsonErrorDescriptionEnum;
(function (Tdcer502ApplicationJsonErrorDescriptionEnum) {
    Tdcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Tdcer502ApplicationJsonErrorDescriptionEnum || (Tdcer502ApplicationJsonErrorDescriptionEnum = {}));
var Tdcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Tdcer502ApplicationJson, _super);
    function Tdcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tdcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tdcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Tdcer502ApplicationJson;
}(SpeakeasyBase));
export { Tdcer502ApplicationJson };
export var Tdcer503ApplicationJsonErrorEnum;
(function (Tdcer503ApplicationJsonErrorEnum) {
    Tdcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Tdcer503ApplicationJsonErrorEnum || (Tdcer503ApplicationJsonErrorEnum = {}));
export var Tdcer503ApplicationJsonErrorDescriptionEnum;
(function (Tdcer503ApplicationJsonErrorDescriptionEnum) {
    Tdcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Tdcer503ApplicationJsonErrorDescriptionEnum || (Tdcer503ApplicationJsonErrorDescriptionEnum = {}));
var Tdcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Tdcer503ApplicationJson, _super);
    function Tdcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tdcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tdcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Tdcer503ApplicationJson;
}(SpeakeasyBase));
export { Tdcer503ApplicationJson };
export var Tdcer504ApplicationJsonErrorEnum;
(function (Tdcer504ApplicationJsonErrorEnum) {
    Tdcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Tdcer504ApplicationJsonErrorEnum || (Tdcer504ApplicationJsonErrorEnum = {}));
export var Tdcer504ApplicationJsonErrorDescriptionEnum;
(function (Tdcer504ApplicationJsonErrorDescriptionEnum) {
    Tdcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Tdcer504ApplicationJsonErrorDescriptionEnum || (Tdcer504ApplicationJsonErrorDescriptionEnum = {}));
var Tdcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Tdcer504ApplicationJson, _super);
    function Tdcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tdcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tdcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Tdcer504ApplicationJson;
}(SpeakeasyBase));
export { Tdcer504ApplicationJson };
var TdcerRequest = /** @class */ (function (_super) {
    __extends(TdcerRequest, _super);
    function TdcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TdcerRequestBody)
    ], TdcerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TdcerSecurity)
    ], TdcerRequest.prototype, "security", void 0);
    return TdcerRequest;
}(SpeakeasyBase));
export { TdcerRequest };
var TdcerResponse = /** @class */ (function (_super) {
    __extends(TdcerResponse, _super);
    function TdcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TdcerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TdcerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Tdcer400ApplicationJson)
    ], TdcerResponse.prototype, "tdcer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Tdcer401ApplicationJson)
    ], TdcerResponse.prototype, "tdcer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Tdcer404ApplicationJson)
    ], TdcerResponse.prototype, "tdcer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Tdcer500ApplicationJson)
    ], TdcerResponse.prototype, "tdcer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Tdcer502ApplicationJson)
    ], TdcerResponse.prototype, "tdcer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Tdcer503ApplicationJson)
    ], TdcerResponse.prototype, "tdcer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Tdcer504ApplicationJson)
    ], TdcerResponse.prototype, "tdcer504ApplicationJsonObject", void 0);
    return TdcerResponse;
}(SpeakeasyBase));
export { TdcerResponse };
