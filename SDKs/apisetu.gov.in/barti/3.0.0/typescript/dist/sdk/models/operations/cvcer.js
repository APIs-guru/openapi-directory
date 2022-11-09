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
var CvcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(CvcerRequestBodyCertificateParameters, _super);
    function CvcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], CvcerRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        Metadata({ data: "json, name=VCNo" }),
        __metadata("design:type", String)
    ], CvcerRequestBodyCertificateParameters.prototype, "vcNo", void 0);
    return CvcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { CvcerRequestBodyCertificateParameters };
export var CvcerRequestBodyFormatEnum;
(function (CvcerRequestBodyFormatEnum) {
    CvcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(CvcerRequestBodyFormatEnum || (CvcerRequestBodyFormatEnum = {}));
var CvcerRequestBody = /** @class */ (function (_super) {
    __extends(CvcerRequestBody, _super);
    function CvcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", CvcerRequestBodyCertificateParameters)
    ], CvcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], CvcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CvcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], CvcerRequestBody.prototype, "txnId", void 0);
    return CvcerRequestBody;
}(SpeakeasyBase));
export { CvcerRequestBody };
var CvcerSecurity = /** @class */ (function (_super) {
    __extends(CvcerSecurity, _super);
    function CvcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CvcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], CvcerSecurity.prototype, "clientId", void 0);
    return CvcerSecurity;
}(SpeakeasyBase));
export { CvcerSecurity };
var CvcerRequest = /** @class */ (function (_super) {
    __extends(CvcerRequest, _super);
    function CvcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CvcerRequestBody)
    ], CvcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CvcerSecurity)
    ], CvcerRequest.prototype, "security", void 0);
    return CvcerRequest;
}(SpeakeasyBase));
export { CvcerRequest };
export var Cvcer400ApplicationJsonErrorEnum;
(function (Cvcer400ApplicationJsonErrorEnum) {
    Cvcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Cvcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Cvcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Cvcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Cvcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Cvcer400ApplicationJsonErrorEnum || (Cvcer400ApplicationJsonErrorEnum = {}));
export var Cvcer400ApplicationJsonErrorDescriptionEnum;
(function (Cvcer400ApplicationJsonErrorDescriptionEnum) {
    Cvcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Cvcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Cvcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Cvcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Cvcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Cvcer400ApplicationJsonErrorDescriptionEnum || (Cvcer400ApplicationJsonErrorDescriptionEnum = {}));
var Cvcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Cvcer400ApplicationJson, _super);
    function Cvcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cvcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cvcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Cvcer400ApplicationJson;
}(SpeakeasyBase));
export { Cvcer400ApplicationJson };
export var Cvcer401ApplicationJsonErrorEnum;
(function (Cvcer401ApplicationJsonErrorEnum) {
    Cvcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Cvcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Cvcer401ApplicationJsonErrorEnum || (Cvcer401ApplicationJsonErrorEnum = {}));
export var Cvcer401ApplicationJsonErrorDescriptionEnum;
(function (Cvcer401ApplicationJsonErrorDescriptionEnum) {
    Cvcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Cvcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Cvcer401ApplicationJsonErrorDescriptionEnum || (Cvcer401ApplicationJsonErrorDescriptionEnum = {}));
var Cvcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Cvcer401ApplicationJson, _super);
    function Cvcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cvcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cvcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Cvcer401ApplicationJson;
}(SpeakeasyBase));
export { Cvcer401ApplicationJson };
export var Cvcer404ApplicationJsonErrorEnum;
(function (Cvcer404ApplicationJsonErrorEnum) {
    Cvcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Cvcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Cvcer404ApplicationJsonErrorEnum || (Cvcer404ApplicationJsonErrorEnum = {}));
export var Cvcer404ApplicationJsonErrorDescriptionEnum;
(function (Cvcer404ApplicationJsonErrorDescriptionEnum) {
    Cvcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Cvcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Cvcer404ApplicationJsonErrorDescriptionEnum || (Cvcer404ApplicationJsonErrorDescriptionEnum = {}));
var Cvcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Cvcer404ApplicationJson, _super);
    function Cvcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cvcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cvcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Cvcer404ApplicationJson;
}(SpeakeasyBase));
export { Cvcer404ApplicationJson };
export var Cvcer500ApplicationJsonErrorEnum;
(function (Cvcer500ApplicationJsonErrorEnum) {
    Cvcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Cvcer500ApplicationJsonErrorEnum || (Cvcer500ApplicationJsonErrorEnum = {}));
export var Cvcer500ApplicationJsonErrorDescriptionEnum;
(function (Cvcer500ApplicationJsonErrorDescriptionEnum) {
    Cvcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Cvcer500ApplicationJsonErrorDescriptionEnum || (Cvcer500ApplicationJsonErrorDescriptionEnum = {}));
var Cvcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Cvcer500ApplicationJson, _super);
    function Cvcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cvcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cvcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Cvcer500ApplicationJson;
}(SpeakeasyBase));
export { Cvcer500ApplicationJson };
export var Cvcer502ApplicationJsonErrorEnum;
(function (Cvcer502ApplicationJsonErrorEnum) {
    Cvcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Cvcer502ApplicationJsonErrorEnum || (Cvcer502ApplicationJsonErrorEnum = {}));
export var Cvcer502ApplicationJsonErrorDescriptionEnum;
(function (Cvcer502ApplicationJsonErrorDescriptionEnum) {
    Cvcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Cvcer502ApplicationJsonErrorDescriptionEnum || (Cvcer502ApplicationJsonErrorDescriptionEnum = {}));
var Cvcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Cvcer502ApplicationJson, _super);
    function Cvcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cvcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cvcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Cvcer502ApplicationJson;
}(SpeakeasyBase));
export { Cvcer502ApplicationJson };
export var Cvcer503ApplicationJsonErrorEnum;
(function (Cvcer503ApplicationJsonErrorEnum) {
    Cvcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Cvcer503ApplicationJsonErrorEnum || (Cvcer503ApplicationJsonErrorEnum = {}));
export var Cvcer503ApplicationJsonErrorDescriptionEnum;
(function (Cvcer503ApplicationJsonErrorDescriptionEnum) {
    Cvcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Cvcer503ApplicationJsonErrorDescriptionEnum || (Cvcer503ApplicationJsonErrorDescriptionEnum = {}));
var Cvcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Cvcer503ApplicationJson, _super);
    function Cvcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cvcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cvcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Cvcer503ApplicationJson;
}(SpeakeasyBase));
export { Cvcer503ApplicationJson };
export var Cvcer504ApplicationJsonErrorEnum;
(function (Cvcer504ApplicationJsonErrorEnum) {
    Cvcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Cvcer504ApplicationJsonErrorEnum || (Cvcer504ApplicationJsonErrorEnum = {}));
export var Cvcer504ApplicationJsonErrorDescriptionEnum;
(function (Cvcer504ApplicationJsonErrorDescriptionEnum) {
    Cvcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Cvcer504ApplicationJsonErrorDescriptionEnum || (Cvcer504ApplicationJsonErrorDescriptionEnum = {}));
var Cvcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Cvcer504ApplicationJson, _super);
    function Cvcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cvcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cvcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Cvcer504ApplicationJson;
}(SpeakeasyBase));
export { Cvcer504ApplicationJson };
var CvcerResponse = /** @class */ (function (_super) {
    __extends(CvcerResponse, _super);
    function CvcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CvcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CvcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Cvcer400ApplicationJson)
    ], CvcerResponse.prototype, "cvcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Cvcer401ApplicationJson)
    ], CvcerResponse.prototype, "cvcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Cvcer404ApplicationJson)
    ], CvcerResponse.prototype, "cvcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Cvcer500ApplicationJson)
    ], CvcerResponse.prototype, "cvcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Cvcer502ApplicationJson)
    ], CvcerResponse.prototype, "cvcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Cvcer503ApplicationJson)
    ], CvcerResponse.prototype, "cvcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Cvcer504ApplicationJson)
    ], CvcerResponse.prototype, "cvcer504ApplicationJsonObject", void 0);
    return CvcerResponse;
}(SpeakeasyBase));
export { CvcerResponse };
