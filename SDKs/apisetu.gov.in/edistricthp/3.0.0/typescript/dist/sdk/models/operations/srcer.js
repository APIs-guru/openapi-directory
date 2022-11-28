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
var SrcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SrcerRequestBodyCertificateParameters, _super);
    function SrcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], SrcerRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return SrcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { SrcerRequestBodyCertificateParameters };
export var SrcerRequestBodyFormatEnum;
(function (SrcerRequestBodyFormatEnum) {
    SrcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(SrcerRequestBodyFormatEnum || (SrcerRequestBodyFormatEnum = {}));
var SrcerRequestBody = /** @class */ (function (_super) {
    __extends(SrcerRequestBody, _super);
    function SrcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SrcerRequestBodyCertificateParameters)
    ], SrcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SrcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SrcerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SrcerRequestBody.prototype, "txnId", void 0);
    return SrcerRequestBody;
}(SpeakeasyBase));
export { SrcerRequestBody };
var SrcerSecurity = /** @class */ (function (_super) {
    __extends(SrcerSecurity, _super);
    function SrcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SrcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SrcerSecurity.prototype, "clientId", void 0);
    return SrcerSecurity;
}(SpeakeasyBase));
export { SrcerSecurity };
export var Srcer400ApplicationJsonErrorEnum;
(function (Srcer400ApplicationJsonErrorEnum) {
    Srcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Srcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Srcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Srcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Srcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Srcer400ApplicationJsonErrorEnum || (Srcer400ApplicationJsonErrorEnum = {}));
export var Srcer400ApplicationJsonErrorDescriptionEnum;
(function (Srcer400ApplicationJsonErrorDescriptionEnum) {
    Srcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Srcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Srcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Srcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Srcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Srcer400ApplicationJsonErrorDescriptionEnum || (Srcer400ApplicationJsonErrorDescriptionEnum = {}));
var Srcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Srcer400ApplicationJson, _super);
    function Srcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Srcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Srcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Srcer400ApplicationJson;
}(SpeakeasyBase));
export { Srcer400ApplicationJson };
export var Srcer401ApplicationJsonErrorEnum;
(function (Srcer401ApplicationJsonErrorEnum) {
    Srcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Srcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Srcer401ApplicationJsonErrorEnum || (Srcer401ApplicationJsonErrorEnum = {}));
export var Srcer401ApplicationJsonErrorDescriptionEnum;
(function (Srcer401ApplicationJsonErrorDescriptionEnum) {
    Srcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Srcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Srcer401ApplicationJsonErrorDescriptionEnum || (Srcer401ApplicationJsonErrorDescriptionEnum = {}));
var Srcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Srcer401ApplicationJson, _super);
    function Srcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Srcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Srcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Srcer401ApplicationJson;
}(SpeakeasyBase));
export { Srcer401ApplicationJson };
export var Srcer404ApplicationJsonErrorEnum;
(function (Srcer404ApplicationJsonErrorEnum) {
    Srcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Srcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Srcer404ApplicationJsonErrorEnum || (Srcer404ApplicationJsonErrorEnum = {}));
export var Srcer404ApplicationJsonErrorDescriptionEnum;
(function (Srcer404ApplicationJsonErrorDescriptionEnum) {
    Srcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Srcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Srcer404ApplicationJsonErrorDescriptionEnum || (Srcer404ApplicationJsonErrorDescriptionEnum = {}));
var Srcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Srcer404ApplicationJson, _super);
    function Srcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Srcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Srcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Srcer404ApplicationJson;
}(SpeakeasyBase));
export { Srcer404ApplicationJson };
export var Srcer500ApplicationJsonErrorEnum;
(function (Srcer500ApplicationJsonErrorEnum) {
    Srcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Srcer500ApplicationJsonErrorEnum || (Srcer500ApplicationJsonErrorEnum = {}));
export var Srcer500ApplicationJsonErrorDescriptionEnum;
(function (Srcer500ApplicationJsonErrorDescriptionEnum) {
    Srcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Srcer500ApplicationJsonErrorDescriptionEnum || (Srcer500ApplicationJsonErrorDescriptionEnum = {}));
var Srcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Srcer500ApplicationJson, _super);
    function Srcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Srcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Srcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Srcer500ApplicationJson;
}(SpeakeasyBase));
export { Srcer500ApplicationJson };
export var Srcer502ApplicationJsonErrorEnum;
(function (Srcer502ApplicationJsonErrorEnum) {
    Srcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Srcer502ApplicationJsonErrorEnum || (Srcer502ApplicationJsonErrorEnum = {}));
export var Srcer502ApplicationJsonErrorDescriptionEnum;
(function (Srcer502ApplicationJsonErrorDescriptionEnum) {
    Srcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Srcer502ApplicationJsonErrorDescriptionEnum || (Srcer502ApplicationJsonErrorDescriptionEnum = {}));
var Srcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Srcer502ApplicationJson, _super);
    function Srcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Srcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Srcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Srcer502ApplicationJson;
}(SpeakeasyBase));
export { Srcer502ApplicationJson };
export var Srcer503ApplicationJsonErrorEnum;
(function (Srcer503ApplicationJsonErrorEnum) {
    Srcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Srcer503ApplicationJsonErrorEnum || (Srcer503ApplicationJsonErrorEnum = {}));
export var Srcer503ApplicationJsonErrorDescriptionEnum;
(function (Srcer503ApplicationJsonErrorDescriptionEnum) {
    Srcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Srcer503ApplicationJsonErrorDescriptionEnum || (Srcer503ApplicationJsonErrorDescriptionEnum = {}));
var Srcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Srcer503ApplicationJson, _super);
    function Srcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Srcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Srcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Srcer503ApplicationJson;
}(SpeakeasyBase));
export { Srcer503ApplicationJson };
export var Srcer504ApplicationJsonErrorEnum;
(function (Srcer504ApplicationJsonErrorEnum) {
    Srcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Srcer504ApplicationJsonErrorEnum || (Srcer504ApplicationJsonErrorEnum = {}));
export var Srcer504ApplicationJsonErrorDescriptionEnum;
(function (Srcer504ApplicationJsonErrorDescriptionEnum) {
    Srcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Srcer504ApplicationJsonErrorDescriptionEnum || (Srcer504ApplicationJsonErrorDescriptionEnum = {}));
var Srcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Srcer504ApplicationJson, _super);
    function Srcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Srcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Srcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Srcer504ApplicationJson;
}(SpeakeasyBase));
export { Srcer504ApplicationJson };
var SrcerRequest = /** @class */ (function (_super) {
    __extends(SrcerRequest, _super);
    function SrcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SrcerRequestBody)
    ], SrcerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SrcerSecurity)
    ], SrcerRequest.prototype, "security", void 0);
    return SrcerRequest;
}(SpeakeasyBase));
export { SrcerRequest };
var SrcerResponse = /** @class */ (function (_super) {
    __extends(SrcerResponse, _super);
    function SrcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SrcerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SrcerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Srcer400ApplicationJson)
    ], SrcerResponse.prototype, "srcer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Srcer401ApplicationJson)
    ], SrcerResponse.prototype, "srcer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Srcer404ApplicationJson)
    ], SrcerResponse.prototype, "srcer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Srcer500ApplicationJson)
    ], SrcerResponse.prototype, "srcer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Srcer502ApplicationJson)
    ], SrcerResponse.prototype, "srcer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Srcer503ApplicationJson)
    ], SrcerResponse.prototype, "srcer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Srcer504ApplicationJson)
    ], SrcerResponse.prototype, "srcer504ApplicationJsonObject", void 0);
    return SrcerResponse;
}(SpeakeasyBase));
export { SrcerResponse };
