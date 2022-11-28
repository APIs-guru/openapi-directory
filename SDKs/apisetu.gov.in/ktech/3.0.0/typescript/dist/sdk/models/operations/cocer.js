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
var CocerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(CocerRequestBodyCertificateParameters, _super);
    function CocerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cert_type" }),
        __metadata("design:type", String)
    ], CocerRequestBodyCertificateParameters.prototype, "certType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], CocerRequestBodyCertificateParameters.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reg_no" }),
        __metadata("design:type", String)
    ], CocerRequestBodyCertificateParameters.prototype, "regNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sector" }),
        __metadata("design:type", String)
    ], CocerRequestBodyCertificateParameters.prototype, "sector", void 0);
    return CocerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { CocerRequestBodyCertificateParameters };
export var CocerRequestBodyFormatEnum;
(function (CocerRequestBodyFormatEnum) {
    CocerRequestBodyFormatEnum["Pdf"] = "pdf";
})(CocerRequestBodyFormatEnum || (CocerRequestBodyFormatEnum = {}));
var CocerRequestBody = /** @class */ (function (_super) {
    __extends(CocerRequestBody, _super);
    function CocerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", CocerRequestBodyCertificateParameters)
    ], CocerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], CocerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CocerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], CocerRequestBody.prototype, "txnId", void 0);
    return CocerRequestBody;
}(SpeakeasyBase));
export { CocerRequestBody };
var CocerSecurity = /** @class */ (function (_super) {
    __extends(CocerSecurity, _super);
    function CocerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CocerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], CocerSecurity.prototype, "clientId", void 0);
    return CocerSecurity;
}(SpeakeasyBase));
export { CocerSecurity };
export var Cocer400ApplicationJsonErrorEnum;
(function (Cocer400ApplicationJsonErrorEnum) {
    Cocer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Cocer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Cocer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Cocer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Cocer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Cocer400ApplicationJsonErrorEnum || (Cocer400ApplicationJsonErrorEnum = {}));
export var Cocer400ApplicationJsonErrorDescriptionEnum;
(function (Cocer400ApplicationJsonErrorDescriptionEnum) {
    Cocer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Cocer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Cocer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Cocer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Cocer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Cocer400ApplicationJsonErrorDescriptionEnum || (Cocer400ApplicationJsonErrorDescriptionEnum = {}));
var Cocer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Cocer400ApplicationJson, _super);
    function Cocer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cocer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cocer400ApplicationJson.prototype, "errorDescription", void 0);
    return Cocer400ApplicationJson;
}(SpeakeasyBase));
export { Cocer400ApplicationJson };
export var Cocer401ApplicationJsonErrorEnum;
(function (Cocer401ApplicationJsonErrorEnum) {
    Cocer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Cocer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Cocer401ApplicationJsonErrorEnum || (Cocer401ApplicationJsonErrorEnum = {}));
export var Cocer401ApplicationJsonErrorDescriptionEnum;
(function (Cocer401ApplicationJsonErrorDescriptionEnum) {
    Cocer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Cocer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Cocer401ApplicationJsonErrorDescriptionEnum || (Cocer401ApplicationJsonErrorDescriptionEnum = {}));
var Cocer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Cocer401ApplicationJson, _super);
    function Cocer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cocer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cocer401ApplicationJson.prototype, "errorDescription", void 0);
    return Cocer401ApplicationJson;
}(SpeakeasyBase));
export { Cocer401ApplicationJson };
export var Cocer404ApplicationJsonErrorEnum;
(function (Cocer404ApplicationJsonErrorEnum) {
    Cocer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Cocer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Cocer404ApplicationJsonErrorEnum || (Cocer404ApplicationJsonErrorEnum = {}));
export var Cocer404ApplicationJsonErrorDescriptionEnum;
(function (Cocer404ApplicationJsonErrorDescriptionEnum) {
    Cocer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Cocer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Cocer404ApplicationJsonErrorDescriptionEnum || (Cocer404ApplicationJsonErrorDescriptionEnum = {}));
var Cocer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Cocer404ApplicationJson, _super);
    function Cocer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cocer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cocer404ApplicationJson.prototype, "errorDescription", void 0);
    return Cocer404ApplicationJson;
}(SpeakeasyBase));
export { Cocer404ApplicationJson };
export var Cocer500ApplicationJsonErrorEnum;
(function (Cocer500ApplicationJsonErrorEnum) {
    Cocer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Cocer500ApplicationJsonErrorEnum || (Cocer500ApplicationJsonErrorEnum = {}));
export var Cocer500ApplicationJsonErrorDescriptionEnum;
(function (Cocer500ApplicationJsonErrorDescriptionEnum) {
    Cocer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Cocer500ApplicationJsonErrorDescriptionEnum || (Cocer500ApplicationJsonErrorDescriptionEnum = {}));
var Cocer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Cocer500ApplicationJson, _super);
    function Cocer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cocer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cocer500ApplicationJson.prototype, "errorDescription", void 0);
    return Cocer500ApplicationJson;
}(SpeakeasyBase));
export { Cocer500ApplicationJson };
export var Cocer502ApplicationJsonErrorEnum;
(function (Cocer502ApplicationJsonErrorEnum) {
    Cocer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Cocer502ApplicationJsonErrorEnum || (Cocer502ApplicationJsonErrorEnum = {}));
export var Cocer502ApplicationJsonErrorDescriptionEnum;
(function (Cocer502ApplicationJsonErrorDescriptionEnum) {
    Cocer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Cocer502ApplicationJsonErrorDescriptionEnum || (Cocer502ApplicationJsonErrorDescriptionEnum = {}));
var Cocer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Cocer502ApplicationJson, _super);
    function Cocer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cocer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cocer502ApplicationJson.prototype, "errorDescription", void 0);
    return Cocer502ApplicationJson;
}(SpeakeasyBase));
export { Cocer502ApplicationJson };
export var Cocer503ApplicationJsonErrorEnum;
(function (Cocer503ApplicationJsonErrorEnum) {
    Cocer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Cocer503ApplicationJsonErrorEnum || (Cocer503ApplicationJsonErrorEnum = {}));
export var Cocer503ApplicationJsonErrorDescriptionEnum;
(function (Cocer503ApplicationJsonErrorDescriptionEnum) {
    Cocer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Cocer503ApplicationJsonErrorDescriptionEnum || (Cocer503ApplicationJsonErrorDescriptionEnum = {}));
var Cocer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Cocer503ApplicationJson, _super);
    function Cocer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cocer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cocer503ApplicationJson.prototype, "errorDescription", void 0);
    return Cocer503ApplicationJson;
}(SpeakeasyBase));
export { Cocer503ApplicationJson };
export var Cocer504ApplicationJsonErrorEnum;
(function (Cocer504ApplicationJsonErrorEnum) {
    Cocer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Cocer504ApplicationJsonErrorEnum || (Cocer504ApplicationJsonErrorEnum = {}));
export var Cocer504ApplicationJsonErrorDescriptionEnum;
(function (Cocer504ApplicationJsonErrorDescriptionEnum) {
    Cocer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Cocer504ApplicationJsonErrorDescriptionEnum || (Cocer504ApplicationJsonErrorDescriptionEnum = {}));
var Cocer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Cocer504ApplicationJson, _super);
    function Cocer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cocer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cocer504ApplicationJson.prototype, "errorDescription", void 0);
    return Cocer504ApplicationJson;
}(SpeakeasyBase));
export { Cocer504ApplicationJson };
var CocerRequest = /** @class */ (function (_super) {
    __extends(CocerRequest, _super);
    function CocerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CocerRequestBody)
    ], CocerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CocerSecurity)
    ], CocerRequest.prototype, "security", void 0);
    return CocerRequest;
}(SpeakeasyBase));
export { CocerRequest };
var CocerResponse = /** @class */ (function (_super) {
    __extends(CocerResponse, _super);
    function CocerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CocerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CocerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cocer400ApplicationJson)
    ], CocerResponse.prototype, "cocer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cocer401ApplicationJson)
    ], CocerResponse.prototype, "cocer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cocer404ApplicationJson)
    ], CocerResponse.prototype, "cocer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cocer500ApplicationJson)
    ], CocerResponse.prototype, "cocer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cocer502ApplicationJson)
    ], CocerResponse.prototype, "cocer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cocer503ApplicationJson)
    ], CocerResponse.prototype, "cocer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cocer504ApplicationJson)
    ], CocerResponse.prototype, "cocer504ApplicationJsonObject", void 0);
    return CocerResponse;
}(SpeakeasyBase));
export { CocerResponse };
