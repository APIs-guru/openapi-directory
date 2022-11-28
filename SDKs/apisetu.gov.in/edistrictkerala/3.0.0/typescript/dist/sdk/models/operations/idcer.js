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
var IdcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(IdcerRequestBodyCertificateParameters, _super);
    function IdcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], IdcerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], IdcerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], IdcerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return IdcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { IdcerRequestBodyCertificateParameters };
export var IdcerRequestBodyFormatEnum;
(function (IdcerRequestBodyFormatEnum) {
    IdcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(IdcerRequestBodyFormatEnum || (IdcerRequestBodyFormatEnum = {}));
var IdcerRequestBody = /** @class */ (function (_super) {
    __extends(IdcerRequestBody, _super);
    function IdcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", IdcerRequestBodyCertificateParameters)
    ], IdcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], IdcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], IdcerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], IdcerRequestBody.prototype, "txnId", void 0);
    return IdcerRequestBody;
}(SpeakeasyBase));
export { IdcerRequestBody };
var IdcerSecurity = /** @class */ (function (_super) {
    __extends(IdcerSecurity, _super);
    function IdcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], IdcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], IdcerSecurity.prototype, "clientId", void 0);
    return IdcerSecurity;
}(SpeakeasyBase));
export { IdcerSecurity };
export var Idcer400ApplicationJsonErrorEnum;
(function (Idcer400ApplicationJsonErrorEnum) {
    Idcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Idcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Idcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Idcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Idcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Idcer400ApplicationJsonErrorEnum || (Idcer400ApplicationJsonErrorEnum = {}));
export var Idcer400ApplicationJsonErrorDescriptionEnum;
(function (Idcer400ApplicationJsonErrorDescriptionEnum) {
    Idcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Idcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Idcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Idcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Idcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Idcer400ApplicationJsonErrorDescriptionEnum || (Idcer400ApplicationJsonErrorDescriptionEnum = {}));
var Idcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Idcer400ApplicationJson, _super);
    function Idcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Idcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Idcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Idcer400ApplicationJson;
}(SpeakeasyBase));
export { Idcer400ApplicationJson };
export var Idcer401ApplicationJsonErrorEnum;
(function (Idcer401ApplicationJsonErrorEnum) {
    Idcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Idcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Idcer401ApplicationJsonErrorEnum || (Idcer401ApplicationJsonErrorEnum = {}));
export var Idcer401ApplicationJsonErrorDescriptionEnum;
(function (Idcer401ApplicationJsonErrorDescriptionEnum) {
    Idcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Idcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Idcer401ApplicationJsonErrorDescriptionEnum || (Idcer401ApplicationJsonErrorDescriptionEnum = {}));
var Idcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Idcer401ApplicationJson, _super);
    function Idcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Idcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Idcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Idcer401ApplicationJson;
}(SpeakeasyBase));
export { Idcer401ApplicationJson };
export var Idcer404ApplicationJsonErrorEnum;
(function (Idcer404ApplicationJsonErrorEnum) {
    Idcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Idcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Idcer404ApplicationJsonErrorEnum || (Idcer404ApplicationJsonErrorEnum = {}));
export var Idcer404ApplicationJsonErrorDescriptionEnum;
(function (Idcer404ApplicationJsonErrorDescriptionEnum) {
    Idcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Idcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Idcer404ApplicationJsonErrorDescriptionEnum || (Idcer404ApplicationJsonErrorDescriptionEnum = {}));
var Idcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Idcer404ApplicationJson, _super);
    function Idcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Idcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Idcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Idcer404ApplicationJson;
}(SpeakeasyBase));
export { Idcer404ApplicationJson };
export var Idcer500ApplicationJsonErrorEnum;
(function (Idcer500ApplicationJsonErrorEnum) {
    Idcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Idcer500ApplicationJsonErrorEnum || (Idcer500ApplicationJsonErrorEnum = {}));
export var Idcer500ApplicationJsonErrorDescriptionEnum;
(function (Idcer500ApplicationJsonErrorDescriptionEnum) {
    Idcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Idcer500ApplicationJsonErrorDescriptionEnum || (Idcer500ApplicationJsonErrorDescriptionEnum = {}));
var Idcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Idcer500ApplicationJson, _super);
    function Idcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Idcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Idcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Idcer500ApplicationJson;
}(SpeakeasyBase));
export { Idcer500ApplicationJson };
export var Idcer502ApplicationJsonErrorEnum;
(function (Idcer502ApplicationJsonErrorEnum) {
    Idcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Idcer502ApplicationJsonErrorEnum || (Idcer502ApplicationJsonErrorEnum = {}));
export var Idcer502ApplicationJsonErrorDescriptionEnum;
(function (Idcer502ApplicationJsonErrorDescriptionEnum) {
    Idcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Idcer502ApplicationJsonErrorDescriptionEnum || (Idcer502ApplicationJsonErrorDescriptionEnum = {}));
var Idcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Idcer502ApplicationJson, _super);
    function Idcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Idcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Idcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Idcer502ApplicationJson;
}(SpeakeasyBase));
export { Idcer502ApplicationJson };
export var Idcer503ApplicationJsonErrorEnum;
(function (Idcer503ApplicationJsonErrorEnum) {
    Idcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Idcer503ApplicationJsonErrorEnum || (Idcer503ApplicationJsonErrorEnum = {}));
export var Idcer503ApplicationJsonErrorDescriptionEnum;
(function (Idcer503ApplicationJsonErrorDescriptionEnum) {
    Idcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Idcer503ApplicationJsonErrorDescriptionEnum || (Idcer503ApplicationJsonErrorDescriptionEnum = {}));
var Idcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Idcer503ApplicationJson, _super);
    function Idcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Idcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Idcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Idcer503ApplicationJson;
}(SpeakeasyBase));
export { Idcer503ApplicationJson };
export var Idcer504ApplicationJsonErrorEnum;
(function (Idcer504ApplicationJsonErrorEnum) {
    Idcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Idcer504ApplicationJsonErrorEnum || (Idcer504ApplicationJsonErrorEnum = {}));
export var Idcer504ApplicationJsonErrorDescriptionEnum;
(function (Idcer504ApplicationJsonErrorDescriptionEnum) {
    Idcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Idcer504ApplicationJsonErrorDescriptionEnum || (Idcer504ApplicationJsonErrorDescriptionEnum = {}));
var Idcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Idcer504ApplicationJson, _super);
    function Idcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Idcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Idcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Idcer504ApplicationJson;
}(SpeakeasyBase));
export { Idcer504ApplicationJson };
var IdcerRequest = /** @class */ (function (_super) {
    __extends(IdcerRequest, _super);
    function IdcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", IdcerRequestBody)
    ], IdcerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdcerSecurity)
    ], IdcerRequest.prototype, "security", void 0);
    return IdcerRequest;
}(SpeakeasyBase));
export { IdcerRequest };
var IdcerResponse = /** @class */ (function (_super) {
    __extends(IdcerResponse, _super);
    function IdcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdcerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdcerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Idcer400ApplicationJson)
    ], IdcerResponse.prototype, "idcer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Idcer401ApplicationJson)
    ], IdcerResponse.prototype, "idcer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Idcer404ApplicationJson)
    ], IdcerResponse.prototype, "idcer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Idcer500ApplicationJson)
    ], IdcerResponse.prototype, "idcer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Idcer502ApplicationJson)
    ], IdcerResponse.prototype, "idcer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Idcer503ApplicationJson)
    ], IdcerResponse.prototype, "idcer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Idcer504ApplicationJson)
    ], IdcerResponse.prototype, "idcer504ApplicationJsonObject", void 0);
    return IdcerResponse;
}(SpeakeasyBase));
export { IdcerResponse };
