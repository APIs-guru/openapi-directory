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
var ObcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(ObcerRequestBodyCertificateParameters, _super);
    function ObcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObcerRequestBodyCertificateParameters.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], ObcerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    return ObcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { ObcerRequestBodyCertificateParameters };
export var ObcerRequestBodyFormatEnum;
(function (ObcerRequestBodyFormatEnum) {
    ObcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(ObcerRequestBodyFormatEnum || (ObcerRequestBodyFormatEnum = {}));
var ObcerRequestBody = /** @class */ (function (_super) {
    __extends(ObcerRequestBody, _super);
    function ObcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", ObcerRequestBodyCertificateParameters)
    ], ObcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], ObcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], ObcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], ObcerRequestBody.prototype, "txnId", void 0);
    return ObcerRequestBody;
}(SpeakeasyBase));
export { ObcerRequestBody };
var ObcerSecurity = /** @class */ (function (_super) {
    __extends(ObcerSecurity, _super);
    function ObcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ObcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], ObcerSecurity.prototype, "clientId", void 0);
    return ObcerSecurity;
}(SpeakeasyBase));
export { ObcerSecurity };
var ObcerRequest = /** @class */ (function (_super) {
    __extends(ObcerRequest, _super);
    function ObcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ObcerRequestBody)
    ], ObcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ObcerSecurity)
    ], ObcerRequest.prototype, "security", void 0);
    return ObcerRequest;
}(SpeakeasyBase));
export { ObcerRequest };
export var Obcer400ApplicationJsonErrorEnum;
(function (Obcer400ApplicationJsonErrorEnum) {
    Obcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Obcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Obcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Obcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Obcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Obcer400ApplicationJsonErrorEnum || (Obcer400ApplicationJsonErrorEnum = {}));
export var Obcer400ApplicationJsonErrorDescriptionEnum;
(function (Obcer400ApplicationJsonErrorDescriptionEnum) {
    Obcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Obcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Obcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Obcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Obcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Obcer400ApplicationJsonErrorDescriptionEnum || (Obcer400ApplicationJsonErrorDescriptionEnum = {}));
var Obcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Obcer400ApplicationJson, _super);
    function Obcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Obcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Obcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Obcer400ApplicationJson;
}(SpeakeasyBase));
export { Obcer400ApplicationJson };
export var Obcer401ApplicationJsonErrorEnum;
(function (Obcer401ApplicationJsonErrorEnum) {
    Obcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Obcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Obcer401ApplicationJsonErrorEnum || (Obcer401ApplicationJsonErrorEnum = {}));
export var Obcer401ApplicationJsonErrorDescriptionEnum;
(function (Obcer401ApplicationJsonErrorDescriptionEnum) {
    Obcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Obcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Obcer401ApplicationJsonErrorDescriptionEnum || (Obcer401ApplicationJsonErrorDescriptionEnum = {}));
var Obcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Obcer401ApplicationJson, _super);
    function Obcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Obcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Obcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Obcer401ApplicationJson;
}(SpeakeasyBase));
export { Obcer401ApplicationJson };
export var Obcer404ApplicationJsonErrorEnum;
(function (Obcer404ApplicationJsonErrorEnum) {
    Obcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Obcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Obcer404ApplicationJsonErrorEnum || (Obcer404ApplicationJsonErrorEnum = {}));
export var Obcer404ApplicationJsonErrorDescriptionEnum;
(function (Obcer404ApplicationJsonErrorDescriptionEnum) {
    Obcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Obcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Obcer404ApplicationJsonErrorDescriptionEnum || (Obcer404ApplicationJsonErrorDescriptionEnum = {}));
var Obcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Obcer404ApplicationJson, _super);
    function Obcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Obcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Obcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Obcer404ApplicationJson;
}(SpeakeasyBase));
export { Obcer404ApplicationJson };
export var Obcer500ApplicationJsonErrorEnum;
(function (Obcer500ApplicationJsonErrorEnum) {
    Obcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Obcer500ApplicationJsonErrorEnum || (Obcer500ApplicationJsonErrorEnum = {}));
export var Obcer500ApplicationJsonErrorDescriptionEnum;
(function (Obcer500ApplicationJsonErrorDescriptionEnum) {
    Obcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Obcer500ApplicationJsonErrorDescriptionEnum || (Obcer500ApplicationJsonErrorDescriptionEnum = {}));
var Obcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Obcer500ApplicationJson, _super);
    function Obcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Obcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Obcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Obcer500ApplicationJson;
}(SpeakeasyBase));
export { Obcer500ApplicationJson };
export var Obcer502ApplicationJsonErrorEnum;
(function (Obcer502ApplicationJsonErrorEnum) {
    Obcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Obcer502ApplicationJsonErrorEnum || (Obcer502ApplicationJsonErrorEnum = {}));
export var Obcer502ApplicationJsonErrorDescriptionEnum;
(function (Obcer502ApplicationJsonErrorDescriptionEnum) {
    Obcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Obcer502ApplicationJsonErrorDescriptionEnum || (Obcer502ApplicationJsonErrorDescriptionEnum = {}));
var Obcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Obcer502ApplicationJson, _super);
    function Obcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Obcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Obcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Obcer502ApplicationJson;
}(SpeakeasyBase));
export { Obcer502ApplicationJson };
export var Obcer503ApplicationJsonErrorEnum;
(function (Obcer503ApplicationJsonErrorEnum) {
    Obcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Obcer503ApplicationJsonErrorEnum || (Obcer503ApplicationJsonErrorEnum = {}));
export var Obcer503ApplicationJsonErrorDescriptionEnum;
(function (Obcer503ApplicationJsonErrorDescriptionEnum) {
    Obcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Obcer503ApplicationJsonErrorDescriptionEnum || (Obcer503ApplicationJsonErrorDescriptionEnum = {}));
var Obcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Obcer503ApplicationJson, _super);
    function Obcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Obcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Obcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Obcer503ApplicationJson;
}(SpeakeasyBase));
export { Obcer503ApplicationJson };
export var Obcer504ApplicationJsonErrorEnum;
(function (Obcer504ApplicationJsonErrorEnum) {
    Obcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Obcer504ApplicationJsonErrorEnum || (Obcer504ApplicationJsonErrorEnum = {}));
export var Obcer504ApplicationJsonErrorDescriptionEnum;
(function (Obcer504ApplicationJsonErrorDescriptionEnum) {
    Obcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Obcer504ApplicationJsonErrorDescriptionEnum || (Obcer504ApplicationJsonErrorDescriptionEnum = {}));
var Obcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Obcer504ApplicationJson, _super);
    function Obcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Obcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Obcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Obcer504ApplicationJson;
}(SpeakeasyBase));
export { Obcer504ApplicationJson };
var ObcerResponse = /** @class */ (function (_super) {
    __extends(ObcerResponse, _super);
    function ObcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ObcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ObcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Obcer400ApplicationJson)
    ], ObcerResponse.prototype, "obcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Obcer401ApplicationJson)
    ], ObcerResponse.prototype, "obcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Obcer404ApplicationJson)
    ], ObcerResponse.prototype, "obcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Obcer500ApplicationJson)
    ], ObcerResponse.prototype, "obcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Obcer502ApplicationJson)
    ], ObcerResponse.prototype, "obcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Obcer503ApplicationJson)
    ], ObcerResponse.prototype, "obcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Obcer504ApplicationJson)
    ], ObcerResponse.prototype, "obcer504ApplicationJsonObject", void 0);
    return ObcerResponse;
}(SpeakeasyBase));
export { ObcerResponse };
