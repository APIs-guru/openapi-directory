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
var HpcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(HpcerRequestBodyCertificateParameters, _super);
    function HpcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], HpcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=rollcode" }),
        __metadata("design:type", String)
    ], HpcerRequestBodyCertificateParameters.prototype, "rollcode", void 0);
    __decorate([
        Metadata({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], HpcerRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        Metadata({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], HpcerRequestBodyCertificateParameters.prototype, "year", void 0);
    return HpcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { HpcerRequestBodyCertificateParameters };
export var HpcerRequestBodyFormatEnum;
(function (HpcerRequestBodyFormatEnum) {
    HpcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(HpcerRequestBodyFormatEnum || (HpcerRequestBodyFormatEnum = {}));
var HpcerRequestBody = /** @class */ (function (_super) {
    __extends(HpcerRequestBody, _super);
    function HpcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", HpcerRequestBodyCertificateParameters)
    ], HpcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], HpcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], HpcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], HpcerRequestBody.prototype, "txnId", void 0);
    return HpcerRequestBody;
}(SpeakeasyBase));
export { HpcerRequestBody };
var HpcerSecurity = /** @class */ (function (_super) {
    __extends(HpcerSecurity, _super);
    function HpcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], HpcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], HpcerSecurity.prototype, "clientId", void 0);
    return HpcerSecurity;
}(SpeakeasyBase));
export { HpcerSecurity };
var HpcerRequest = /** @class */ (function (_super) {
    __extends(HpcerRequest, _super);
    function HpcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", HpcerRequestBody)
    ], HpcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", HpcerSecurity)
    ], HpcerRequest.prototype, "security", void 0);
    return HpcerRequest;
}(SpeakeasyBase));
export { HpcerRequest };
export var Hpcer400ApplicationJsonErrorEnum;
(function (Hpcer400ApplicationJsonErrorEnum) {
    Hpcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Hpcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Hpcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Hpcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Hpcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Hpcer400ApplicationJsonErrorEnum || (Hpcer400ApplicationJsonErrorEnum = {}));
export var Hpcer400ApplicationJsonErrorDescriptionEnum;
(function (Hpcer400ApplicationJsonErrorDescriptionEnum) {
    Hpcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Hpcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Hpcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Hpcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Hpcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Hpcer400ApplicationJsonErrorDescriptionEnum || (Hpcer400ApplicationJsonErrorDescriptionEnum = {}));
var Hpcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Hpcer400ApplicationJson, _super);
    function Hpcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hpcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hpcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Hpcer400ApplicationJson;
}(SpeakeasyBase));
export { Hpcer400ApplicationJson };
export var Hpcer401ApplicationJsonErrorEnum;
(function (Hpcer401ApplicationJsonErrorEnum) {
    Hpcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Hpcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Hpcer401ApplicationJsonErrorEnum || (Hpcer401ApplicationJsonErrorEnum = {}));
export var Hpcer401ApplicationJsonErrorDescriptionEnum;
(function (Hpcer401ApplicationJsonErrorDescriptionEnum) {
    Hpcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Hpcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Hpcer401ApplicationJsonErrorDescriptionEnum || (Hpcer401ApplicationJsonErrorDescriptionEnum = {}));
var Hpcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Hpcer401ApplicationJson, _super);
    function Hpcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hpcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hpcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Hpcer401ApplicationJson;
}(SpeakeasyBase));
export { Hpcer401ApplicationJson };
export var Hpcer404ApplicationJsonErrorEnum;
(function (Hpcer404ApplicationJsonErrorEnum) {
    Hpcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Hpcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Hpcer404ApplicationJsonErrorEnum || (Hpcer404ApplicationJsonErrorEnum = {}));
export var Hpcer404ApplicationJsonErrorDescriptionEnum;
(function (Hpcer404ApplicationJsonErrorDescriptionEnum) {
    Hpcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Hpcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Hpcer404ApplicationJsonErrorDescriptionEnum || (Hpcer404ApplicationJsonErrorDescriptionEnum = {}));
var Hpcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Hpcer404ApplicationJson, _super);
    function Hpcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hpcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hpcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Hpcer404ApplicationJson;
}(SpeakeasyBase));
export { Hpcer404ApplicationJson };
export var Hpcer500ApplicationJsonErrorEnum;
(function (Hpcer500ApplicationJsonErrorEnum) {
    Hpcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Hpcer500ApplicationJsonErrorEnum || (Hpcer500ApplicationJsonErrorEnum = {}));
export var Hpcer500ApplicationJsonErrorDescriptionEnum;
(function (Hpcer500ApplicationJsonErrorDescriptionEnum) {
    Hpcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Hpcer500ApplicationJsonErrorDescriptionEnum || (Hpcer500ApplicationJsonErrorDescriptionEnum = {}));
var Hpcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Hpcer500ApplicationJson, _super);
    function Hpcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hpcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hpcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Hpcer500ApplicationJson;
}(SpeakeasyBase));
export { Hpcer500ApplicationJson };
export var Hpcer502ApplicationJsonErrorEnum;
(function (Hpcer502ApplicationJsonErrorEnum) {
    Hpcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Hpcer502ApplicationJsonErrorEnum || (Hpcer502ApplicationJsonErrorEnum = {}));
export var Hpcer502ApplicationJsonErrorDescriptionEnum;
(function (Hpcer502ApplicationJsonErrorDescriptionEnum) {
    Hpcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Hpcer502ApplicationJsonErrorDescriptionEnum || (Hpcer502ApplicationJsonErrorDescriptionEnum = {}));
var Hpcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Hpcer502ApplicationJson, _super);
    function Hpcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hpcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hpcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Hpcer502ApplicationJson;
}(SpeakeasyBase));
export { Hpcer502ApplicationJson };
export var Hpcer503ApplicationJsonErrorEnum;
(function (Hpcer503ApplicationJsonErrorEnum) {
    Hpcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Hpcer503ApplicationJsonErrorEnum || (Hpcer503ApplicationJsonErrorEnum = {}));
export var Hpcer503ApplicationJsonErrorDescriptionEnum;
(function (Hpcer503ApplicationJsonErrorDescriptionEnum) {
    Hpcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Hpcer503ApplicationJsonErrorDescriptionEnum || (Hpcer503ApplicationJsonErrorDescriptionEnum = {}));
var Hpcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Hpcer503ApplicationJson, _super);
    function Hpcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hpcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hpcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Hpcer503ApplicationJson;
}(SpeakeasyBase));
export { Hpcer503ApplicationJson };
export var Hpcer504ApplicationJsonErrorEnum;
(function (Hpcer504ApplicationJsonErrorEnum) {
    Hpcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Hpcer504ApplicationJsonErrorEnum || (Hpcer504ApplicationJsonErrorEnum = {}));
export var Hpcer504ApplicationJsonErrorDescriptionEnum;
(function (Hpcer504ApplicationJsonErrorDescriptionEnum) {
    Hpcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Hpcer504ApplicationJsonErrorDescriptionEnum || (Hpcer504ApplicationJsonErrorDescriptionEnum = {}));
var Hpcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Hpcer504ApplicationJson, _super);
    function Hpcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hpcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hpcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Hpcer504ApplicationJson;
}(SpeakeasyBase));
export { Hpcer504ApplicationJson };
var HpcerResponse = /** @class */ (function (_super) {
    __extends(HpcerResponse, _super);
    function HpcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], HpcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], HpcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Hpcer400ApplicationJson)
    ], HpcerResponse.prototype, "hpcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Hpcer401ApplicationJson)
    ], HpcerResponse.prototype, "hpcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Hpcer404ApplicationJson)
    ], HpcerResponse.prototype, "hpcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Hpcer500ApplicationJson)
    ], HpcerResponse.prototype, "hpcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Hpcer502ApplicationJson)
    ], HpcerResponse.prototype, "hpcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Hpcer503ApplicationJson)
    ], HpcerResponse.prototype, "hpcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Hpcer504ApplicationJson)
    ], HpcerResponse.prototype, "hpcer504ApplicationJsonObject", void 0);
    return HpcerResponse;
}(SpeakeasyBase));
export { HpcerResponse };
