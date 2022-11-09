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
var IncerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(IncerRequestBodyCertificateParameters, _super);
    function IncerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ApplicationNo" }),
        __metadata("design:type", String)
    ], IncerRequestBodyCertificateParameters.prototype, "applicationNo", void 0);
    __decorate([
        Metadata({ data: "json, name=CertificateID" }),
        __metadata("design:type", String)
    ], IncerRequestBodyCertificateParameters.prototype, "certificateId", void 0);
    return IncerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { IncerRequestBodyCertificateParameters };
export var IncerRequestBodyFormatEnum;
(function (IncerRequestBodyFormatEnum) {
    IncerRequestBodyFormatEnum["Pdf"] = "pdf";
})(IncerRequestBodyFormatEnum || (IncerRequestBodyFormatEnum = {}));
var IncerRequestBody = /** @class */ (function (_super) {
    __extends(IncerRequestBody, _super);
    function IncerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", IncerRequestBodyCertificateParameters)
    ], IncerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], IncerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], IncerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], IncerRequestBody.prototype, "txnId", void 0);
    return IncerRequestBody;
}(SpeakeasyBase));
export { IncerRequestBody };
var IncerSecurity = /** @class */ (function (_super) {
    __extends(IncerSecurity, _super);
    function IncerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], IncerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], IncerSecurity.prototype, "clientId", void 0);
    return IncerSecurity;
}(SpeakeasyBase));
export { IncerSecurity };
var IncerRequest = /** @class */ (function (_super) {
    __extends(IncerRequest, _super);
    function IncerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", IncerRequestBody)
    ], IncerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IncerSecurity)
    ], IncerRequest.prototype, "security", void 0);
    return IncerRequest;
}(SpeakeasyBase));
export { IncerRequest };
export var Incer400ApplicationJsonErrorEnum;
(function (Incer400ApplicationJsonErrorEnum) {
    Incer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Incer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Incer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Incer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Incer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Incer400ApplicationJsonErrorEnum || (Incer400ApplicationJsonErrorEnum = {}));
export var Incer400ApplicationJsonErrorDescriptionEnum;
(function (Incer400ApplicationJsonErrorDescriptionEnum) {
    Incer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Incer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Incer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Incer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Incer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Incer400ApplicationJsonErrorDescriptionEnum || (Incer400ApplicationJsonErrorDescriptionEnum = {}));
var Incer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Incer400ApplicationJson, _super);
    function Incer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Incer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Incer400ApplicationJson.prototype, "errorDescription", void 0);
    return Incer400ApplicationJson;
}(SpeakeasyBase));
export { Incer400ApplicationJson };
export var Incer401ApplicationJsonErrorEnum;
(function (Incer401ApplicationJsonErrorEnum) {
    Incer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Incer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Incer401ApplicationJsonErrorEnum || (Incer401ApplicationJsonErrorEnum = {}));
export var Incer401ApplicationJsonErrorDescriptionEnum;
(function (Incer401ApplicationJsonErrorDescriptionEnum) {
    Incer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Incer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Incer401ApplicationJsonErrorDescriptionEnum || (Incer401ApplicationJsonErrorDescriptionEnum = {}));
var Incer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Incer401ApplicationJson, _super);
    function Incer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Incer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Incer401ApplicationJson.prototype, "errorDescription", void 0);
    return Incer401ApplicationJson;
}(SpeakeasyBase));
export { Incer401ApplicationJson };
export var Incer404ApplicationJsonErrorEnum;
(function (Incer404ApplicationJsonErrorEnum) {
    Incer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Incer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Incer404ApplicationJsonErrorEnum || (Incer404ApplicationJsonErrorEnum = {}));
export var Incer404ApplicationJsonErrorDescriptionEnum;
(function (Incer404ApplicationJsonErrorDescriptionEnum) {
    Incer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Incer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Incer404ApplicationJsonErrorDescriptionEnum || (Incer404ApplicationJsonErrorDescriptionEnum = {}));
var Incer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Incer404ApplicationJson, _super);
    function Incer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Incer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Incer404ApplicationJson.prototype, "errorDescription", void 0);
    return Incer404ApplicationJson;
}(SpeakeasyBase));
export { Incer404ApplicationJson };
export var Incer500ApplicationJsonErrorEnum;
(function (Incer500ApplicationJsonErrorEnum) {
    Incer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Incer500ApplicationJsonErrorEnum || (Incer500ApplicationJsonErrorEnum = {}));
export var Incer500ApplicationJsonErrorDescriptionEnum;
(function (Incer500ApplicationJsonErrorDescriptionEnum) {
    Incer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Incer500ApplicationJsonErrorDescriptionEnum || (Incer500ApplicationJsonErrorDescriptionEnum = {}));
var Incer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Incer500ApplicationJson, _super);
    function Incer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Incer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Incer500ApplicationJson.prototype, "errorDescription", void 0);
    return Incer500ApplicationJson;
}(SpeakeasyBase));
export { Incer500ApplicationJson };
export var Incer502ApplicationJsonErrorEnum;
(function (Incer502ApplicationJsonErrorEnum) {
    Incer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Incer502ApplicationJsonErrorEnum || (Incer502ApplicationJsonErrorEnum = {}));
export var Incer502ApplicationJsonErrorDescriptionEnum;
(function (Incer502ApplicationJsonErrorDescriptionEnum) {
    Incer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Incer502ApplicationJsonErrorDescriptionEnum || (Incer502ApplicationJsonErrorDescriptionEnum = {}));
var Incer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Incer502ApplicationJson, _super);
    function Incer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Incer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Incer502ApplicationJson.prototype, "errorDescription", void 0);
    return Incer502ApplicationJson;
}(SpeakeasyBase));
export { Incer502ApplicationJson };
export var Incer503ApplicationJsonErrorEnum;
(function (Incer503ApplicationJsonErrorEnum) {
    Incer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Incer503ApplicationJsonErrorEnum || (Incer503ApplicationJsonErrorEnum = {}));
export var Incer503ApplicationJsonErrorDescriptionEnum;
(function (Incer503ApplicationJsonErrorDescriptionEnum) {
    Incer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Incer503ApplicationJsonErrorDescriptionEnum || (Incer503ApplicationJsonErrorDescriptionEnum = {}));
var Incer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Incer503ApplicationJson, _super);
    function Incer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Incer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Incer503ApplicationJson.prototype, "errorDescription", void 0);
    return Incer503ApplicationJson;
}(SpeakeasyBase));
export { Incer503ApplicationJson };
export var Incer504ApplicationJsonErrorEnum;
(function (Incer504ApplicationJsonErrorEnum) {
    Incer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Incer504ApplicationJsonErrorEnum || (Incer504ApplicationJsonErrorEnum = {}));
export var Incer504ApplicationJsonErrorDescriptionEnum;
(function (Incer504ApplicationJsonErrorDescriptionEnum) {
    Incer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Incer504ApplicationJsonErrorDescriptionEnum || (Incer504ApplicationJsonErrorDescriptionEnum = {}));
var Incer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Incer504ApplicationJson, _super);
    function Incer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Incer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Incer504ApplicationJson.prototype, "errorDescription", void 0);
    return Incer504ApplicationJson;
}(SpeakeasyBase));
export { Incer504ApplicationJson };
var IncerResponse = /** @class */ (function (_super) {
    __extends(IncerResponse, _super);
    function IncerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IncerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IncerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Incer400ApplicationJson)
    ], IncerResponse.prototype, "incer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Incer401ApplicationJson)
    ], IncerResponse.prototype, "incer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Incer404ApplicationJson)
    ], IncerResponse.prototype, "incer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Incer500ApplicationJson)
    ], IncerResponse.prototype, "incer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Incer502ApplicationJson)
    ], IncerResponse.prototype, "incer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Incer503ApplicationJson)
    ], IncerResponse.prototype, "incer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Incer504ApplicationJson)
    ], IncerResponse.prototype, "incer504ApplicationJsonObject", void 0);
    return IncerResponse;
}(SpeakeasyBase));
export { IncerResponse };
