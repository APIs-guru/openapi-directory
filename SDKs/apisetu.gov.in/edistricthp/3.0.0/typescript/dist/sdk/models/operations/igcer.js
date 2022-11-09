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
var IgcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(IgcerRequestBodyCertificateParameters, _super);
    function IgcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], IgcerRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return IgcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { IgcerRequestBodyCertificateParameters };
export var IgcerRequestBodyFormatEnum;
(function (IgcerRequestBodyFormatEnum) {
    IgcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(IgcerRequestBodyFormatEnum || (IgcerRequestBodyFormatEnum = {}));
var IgcerRequestBody = /** @class */ (function (_super) {
    __extends(IgcerRequestBody, _super);
    function IgcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", IgcerRequestBodyCertificateParameters)
    ], IgcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], IgcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], IgcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], IgcerRequestBody.prototype, "txnId", void 0);
    return IgcerRequestBody;
}(SpeakeasyBase));
export { IgcerRequestBody };
var IgcerSecurity = /** @class */ (function (_super) {
    __extends(IgcerSecurity, _super);
    function IgcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], IgcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], IgcerSecurity.prototype, "clientId", void 0);
    return IgcerSecurity;
}(SpeakeasyBase));
export { IgcerSecurity };
var IgcerRequest = /** @class */ (function (_super) {
    __extends(IgcerRequest, _super);
    function IgcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", IgcerRequestBody)
    ], IgcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IgcerSecurity)
    ], IgcerRequest.prototype, "security", void 0);
    return IgcerRequest;
}(SpeakeasyBase));
export { IgcerRequest };
export var Igcer400ApplicationJsonErrorEnum;
(function (Igcer400ApplicationJsonErrorEnum) {
    Igcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Igcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Igcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Igcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Igcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Igcer400ApplicationJsonErrorEnum || (Igcer400ApplicationJsonErrorEnum = {}));
export var Igcer400ApplicationJsonErrorDescriptionEnum;
(function (Igcer400ApplicationJsonErrorDescriptionEnum) {
    Igcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Igcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Igcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Igcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Igcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Igcer400ApplicationJsonErrorDescriptionEnum || (Igcer400ApplicationJsonErrorDescriptionEnum = {}));
var Igcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Igcer400ApplicationJson, _super);
    function Igcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Igcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Igcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Igcer400ApplicationJson;
}(SpeakeasyBase));
export { Igcer400ApplicationJson };
export var Igcer401ApplicationJsonErrorEnum;
(function (Igcer401ApplicationJsonErrorEnum) {
    Igcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Igcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Igcer401ApplicationJsonErrorEnum || (Igcer401ApplicationJsonErrorEnum = {}));
export var Igcer401ApplicationJsonErrorDescriptionEnum;
(function (Igcer401ApplicationJsonErrorDescriptionEnum) {
    Igcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Igcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Igcer401ApplicationJsonErrorDescriptionEnum || (Igcer401ApplicationJsonErrorDescriptionEnum = {}));
var Igcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Igcer401ApplicationJson, _super);
    function Igcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Igcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Igcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Igcer401ApplicationJson;
}(SpeakeasyBase));
export { Igcer401ApplicationJson };
export var Igcer404ApplicationJsonErrorEnum;
(function (Igcer404ApplicationJsonErrorEnum) {
    Igcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Igcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Igcer404ApplicationJsonErrorEnum || (Igcer404ApplicationJsonErrorEnum = {}));
export var Igcer404ApplicationJsonErrorDescriptionEnum;
(function (Igcer404ApplicationJsonErrorDescriptionEnum) {
    Igcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Igcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Igcer404ApplicationJsonErrorDescriptionEnum || (Igcer404ApplicationJsonErrorDescriptionEnum = {}));
var Igcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Igcer404ApplicationJson, _super);
    function Igcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Igcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Igcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Igcer404ApplicationJson;
}(SpeakeasyBase));
export { Igcer404ApplicationJson };
export var Igcer500ApplicationJsonErrorEnum;
(function (Igcer500ApplicationJsonErrorEnum) {
    Igcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Igcer500ApplicationJsonErrorEnum || (Igcer500ApplicationJsonErrorEnum = {}));
export var Igcer500ApplicationJsonErrorDescriptionEnum;
(function (Igcer500ApplicationJsonErrorDescriptionEnum) {
    Igcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Igcer500ApplicationJsonErrorDescriptionEnum || (Igcer500ApplicationJsonErrorDescriptionEnum = {}));
var Igcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Igcer500ApplicationJson, _super);
    function Igcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Igcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Igcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Igcer500ApplicationJson;
}(SpeakeasyBase));
export { Igcer500ApplicationJson };
export var Igcer502ApplicationJsonErrorEnum;
(function (Igcer502ApplicationJsonErrorEnum) {
    Igcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Igcer502ApplicationJsonErrorEnum || (Igcer502ApplicationJsonErrorEnum = {}));
export var Igcer502ApplicationJsonErrorDescriptionEnum;
(function (Igcer502ApplicationJsonErrorDescriptionEnum) {
    Igcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Igcer502ApplicationJsonErrorDescriptionEnum || (Igcer502ApplicationJsonErrorDescriptionEnum = {}));
var Igcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Igcer502ApplicationJson, _super);
    function Igcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Igcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Igcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Igcer502ApplicationJson;
}(SpeakeasyBase));
export { Igcer502ApplicationJson };
export var Igcer503ApplicationJsonErrorEnum;
(function (Igcer503ApplicationJsonErrorEnum) {
    Igcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Igcer503ApplicationJsonErrorEnum || (Igcer503ApplicationJsonErrorEnum = {}));
export var Igcer503ApplicationJsonErrorDescriptionEnum;
(function (Igcer503ApplicationJsonErrorDescriptionEnum) {
    Igcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Igcer503ApplicationJsonErrorDescriptionEnum || (Igcer503ApplicationJsonErrorDescriptionEnum = {}));
var Igcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Igcer503ApplicationJson, _super);
    function Igcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Igcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Igcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Igcer503ApplicationJson;
}(SpeakeasyBase));
export { Igcer503ApplicationJson };
export var Igcer504ApplicationJsonErrorEnum;
(function (Igcer504ApplicationJsonErrorEnum) {
    Igcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Igcer504ApplicationJsonErrorEnum || (Igcer504ApplicationJsonErrorEnum = {}));
export var Igcer504ApplicationJsonErrorDescriptionEnum;
(function (Igcer504ApplicationJsonErrorDescriptionEnum) {
    Igcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Igcer504ApplicationJsonErrorDescriptionEnum || (Igcer504ApplicationJsonErrorDescriptionEnum = {}));
var Igcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Igcer504ApplicationJson, _super);
    function Igcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Igcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Igcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Igcer504ApplicationJson;
}(SpeakeasyBase));
export { Igcer504ApplicationJson };
var IgcerResponse = /** @class */ (function (_super) {
    __extends(IgcerResponse, _super);
    function IgcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IgcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IgcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Igcer400ApplicationJson)
    ], IgcerResponse.prototype, "igcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Igcer401ApplicationJson)
    ], IgcerResponse.prototype, "igcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Igcer404ApplicationJson)
    ], IgcerResponse.prototype, "igcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Igcer500ApplicationJson)
    ], IgcerResponse.prototype, "igcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Igcer502ApplicationJson)
    ], IgcerResponse.prototype, "igcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Igcer503ApplicationJson)
    ], IgcerResponse.prototype, "igcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Igcer504ApplicationJson)
    ], IgcerResponse.prototype, "igcer504ApplicationJsonObject", void 0);
    return IgcerResponse;
}(SpeakeasyBase));
export { IgcerResponse };
