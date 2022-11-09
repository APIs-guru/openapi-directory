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
var DmcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(DmcerRequestBodyCertificateParameters, _super);
    function DmcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], DmcerRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return DmcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { DmcerRequestBodyCertificateParameters };
export var DmcerRequestBodyFormatEnum;
(function (DmcerRequestBodyFormatEnum) {
    DmcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(DmcerRequestBodyFormatEnum || (DmcerRequestBodyFormatEnum = {}));
var DmcerRequestBody = /** @class */ (function (_super) {
    __extends(DmcerRequestBody, _super);
    function DmcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", DmcerRequestBodyCertificateParameters)
    ], DmcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], DmcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], DmcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], DmcerRequestBody.prototype, "txnId", void 0);
    return DmcerRequestBody;
}(SpeakeasyBase));
export { DmcerRequestBody };
var DmcerSecurity = /** @class */ (function (_super) {
    __extends(DmcerSecurity, _super);
    function DmcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DmcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], DmcerSecurity.prototype, "clientId", void 0);
    return DmcerSecurity;
}(SpeakeasyBase));
export { DmcerSecurity };
var DmcerRequest = /** @class */ (function (_super) {
    __extends(DmcerRequest, _super);
    function DmcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DmcerRequestBody)
    ], DmcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DmcerSecurity)
    ], DmcerRequest.prototype, "security", void 0);
    return DmcerRequest;
}(SpeakeasyBase));
export { DmcerRequest };
export var Dmcer400ApplicationJsonErrorEnum;
(function (Dmcer400ApplicationJsonErrorEnum) {
    Dmcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Dmcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Dmcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Dmcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Dmcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Dmcer400ApplicationJsonErrorEnum || (Dmcer400ApplicationJsonErrorEnum = {}));
export var Dmcer400ApplicationJsonErrorDescriptionEnum;
(function (Dmcer400ApplicationJsonErrorDescriptionEnum) {
    Dmcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Dmcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Dmcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Dmcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Dmcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Dmcer400ApplicationJsonErrorDescriptionEnum || (Dmcer400ApplicationJsonErrorDescriptionEnum = {}));
var Dmcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Dmcer400ApplicationJson, _super);
    function Dmcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dmcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dmcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Dmcer400ApplicationJson;
}(SpeakeasyBase));
export { Dmcer400ApplicationJson };
export var Dmcer401ApplicationJsonErrorEnum;
(function (Dmcer401ApplicationJsonErrorEnum) {
    Dmcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Dmcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Dmcer401ApplicationJsonErrorEnum || (Dmcer401ApplicationJsonErrorEnum = {}));
export var Dmcer401ApplicationJsonErrorDescriptionEnum;
(function (Dmcer401ApplicationJsonErrorDescriptionEnum) {
    Dmcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Dmcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Dmcer401ApplicationJsonErrorDescriptionEnum || (Dmcer401ApplicationJsonErrorDescriptionEnum = {}));
var Dmcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Dmcer401ApplicationJson, _super);
    function Dmcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dmcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dmcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Dmcer401ApplicationJson;
}(SpeakeasyBase));
export { Dmcer401ApplicationJson };
export var Dmcer404ApplicationJsonErrorEnum;
(function (Dmcer404ApplicationJsonErrorEnum) {
    Dmcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Dmcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Dmcer404ApplicationJsonErrorEnum || (Dmcer404ApplicationJsonErrorEnum = {}));
export var Dmcer404ApplicationJsonErrorDescriptionEnum;
(function (Dmcer404ApplicationJsonErrorDescriptionEnum) {
    Dmcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Dmcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Dmcer404ApplicationJsonErrorDescriptionEnum || (Dmcer404ApplicationJsonErrorDescriptionEnum = {}));
var Dmcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Dmcer404ApplicationJson, _super);
    function Dmcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dmcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dmcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Dmcer404ApplicationJson;
}(SpeakeasyBase));
export { Dmcer404ApplicationJson };
export var Dmcer500ApplicationJsonErrorEnum;
(function (Dmcer500ApplicationJsonErrorEnum) {
    Dmcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Dmcer500ApplicationJsonErrorEnum || (Dmcer500ApplicationJsonErrorEnum = {}));
export var Dmcer500ApplicationJsonErrorDescriptionEnum;
(function (Dmcer500ApplicationJsonErrorDescriptionEnum) {
    Dmcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Dmcer500ApplicationJsonErrorDescriptionEnum || (Dmcer500ApplicationJsonErrorDescriptionEnum = {}));
var Dmcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Dmcer500ApplicationJson, _super);
    function Dmcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dmcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dmcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Dmcer500ApplicationJson;
}(SpeakeasyBase));
export { Dmcer500ApplicationJson };
export var Dmcer502ApplicationJsonErrorEnum;
(function (Dmcer502ApplicationJsonErrorEnum) {
    Dmcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Dmcer502ApplicationJsonErrorEnum || (Dmcer502ApplicationJsonErrorEnum = {}));
export var Dmcer502ApplicationJsonErrorDescriptionEnum;
(function (Dmcer502ApplicationJsonErrorDescriptionEnum) {
    Dmcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Dmcer502ApplicationJsonErrorDescriptionEnum || (Dmcer502ApplicationJsonErrorDescriptionEnum = {}));
var Dmcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Dmcer502ApplicationJson, _super);
    function Dmcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dmcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dmcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Dmcer502ApplicationJson;
}(SpeakeasyBase));
export { Dmcer502ApplicationJson };
export var Dmcer503ApplicationJsonErrorEnum;
(function (Dmcer503ApplicationJsonErrorEnum) {
    Dmcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Dmcer503ApplicationJsonErrorEnum || (Dmcer503ApplicationJsonErrorEnum = {}));
export var Dmcer503ApplicationJsonErrorDescriptionEnum;
(function (Dmcer503ApplicationJsonErrorDescriptionEnum) {
    Dmcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Dmcer503ApplicationJsonErrorDescriptionEnum || (Dmcer503ApplicationJsonErrorDescriptionEnum = {}));
var Dmcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Dmcer503ApplicationJson, _super);
    function Dmcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dmcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dmcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Dmcer503ApplicationJson;
}(SpeakeasyBase));
export { Dmcer503ApplicationJson };
export var Dmcer504ApplicationJsonErrorEnum;
(function (Dmcer504ApplicationJsonErrorEnum) {
    Dmcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Dmcer504ApplicationJsonErrorEnum || (Dmcer504ApplicationJsonErrorEnum = {}));
export var Dmcer504ApplicationJsonErrorDescriptionEnum;
(function (Dmcer504ApplicationJsonErrorDescriptionEnum) {
    Dmcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Dmcer504ApplicationJsonErrorDescriptionEnum || (Dmcer504ApplicationJsonErrorDescriptionEnum = {}));
var Dmcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Dmcer504ApplicationJson, _super);
    function Dmcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dmcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dmcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Dmcer504ApplicationJson;
}(SpeakeasyBase));
export { Dmcer504ApplicationJson };
var DmcerResponse = /** @class */ (function (_super) {
    __extends(DmcerResponse, _super);
    function DmcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DmcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DmcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Dmcer400ApplicationJson)
    ], DmcerResponse.prototype, "dmcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Dmcer401ApplicationJson)
    ], DmcerResponse.prototype, "dmcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Dmcer404ApplicationJson)
    ], DmcerResponse.prototype, "dmcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Dmcer500ApplicationJson)
    ], DmcerResponse.prototype, "dmcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Dmcer502ApplicationJson)
    ], DmcerResponse.prototype, "dmcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Dmcer503ApplicationJson)
    ], DmcerResponse.prototype, "dmcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Dmcer504ApplicationJson)
    ], DmcerResponse.prototype, "dmcer504ApplicationJsonObject", void 0);
    return DmcerResponse;
}(SpeakeasyBase));
export { DmcerResponse };
