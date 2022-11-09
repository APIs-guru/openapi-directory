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
var MrcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(MrcerRequestBodyCertificateParameters, _super);
    function MrcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CERT_TYPE" }),
        __metadata("design:type", String)
    ], MrcerRequestBodyCertificateParameters.prototype, "certType", void 0);
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], MrcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=RROLL" }),
        __metadata("design:type", String)
    ], MrcerRequestBodyCertificateParameters.prototype, "rroll", void 0);
    return MrcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { MrcerRequestBodyCertificateParameters };
export var MrcerRequestBodyFormatEnum;
(function (MrcerRequestBodyFormatEnum) {
    MrcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(MrcerRequestBodyFormatEnum || (MrcerRequestBodyFormatEnum = {}));
var MrcerRequestBody = /** @class */ (function (_super) {
    __extends(MrcerRequestBody, _super);
    function MrcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", MrcerRequestBodyCertificateParameters)
    ], MrcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], MrcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], MrcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], MrcerRequestBody.prototype, "txnId", void 0);
    return MrcerRequestBody;
}(SpeakeasyBase));
export { MrcerRequestBody };
var MrcerSecurity = /** @class */ (function (_super) {
    __extends(MrcerSecurity, _super);
    function MrcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MrcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], MrcerSecurity.prototype, "clientId", void 0);
    return MrcerSecurity;
}(SpeakeasyBase));
export { MrcerSecurity };
var MrcerRequest = /** @class */ (function (_super) {
    __extends(MrcerRequest, _super);
    function MrcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", MrcerRequestBody)
    ], MrcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MrcerSecurity)
    ], MrcerRequest.prototype, "security", void 0);
    return MrcerRequest;
}(SpeakeasyBase));
export { MrcerRequest };
export var Mrcer400ApplicationJsonErrorEnum;
(function (Mrcer400ApplicationJsonErrorEnum) {
    Mrcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Mrcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Mrcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Mrcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Mrcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Mrcer400ApplicationJsonErrorEnum || (Mrcer400ApplicationJsonErrorEnum = {}));
export var Mrcer400ApplicationJsonErrorDescriptionEnum;
(function (Mrcer400ApplicationJsonErrorDescriptionEnum) {
    Mrcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Mrcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Mrcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Mrcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Mrcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Mrcer400ApplicationJsonErrorDescriptionEnum || (Mrcer400ApplicationJsonErrorDescriptionEnum = {}));
var Mrcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Mrcer400ApplicationJson, _super);
    function Mrcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mrcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mrcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Mrcer400ApplicationJson;
}(SpeakeasyBase));
export { Mrcer400ApplicationJson };
export var Mrcer401ApplicationJsonErrorEnum;
(function (Mrcer401ApplicationJsonErrorEnum) {
    Mrcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Mrcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Mrcer401ApplicationJsonErrorEnum || (Mrcer401ApplicationJsonErrorEnum = {}));
export var Mrcer401ApplicationJsonErrorDescriptionEnum;
(function (Mrcer401ApplicationJsonErrorDescriptionEnum) {
    Mrcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Mrcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Mrcer401ApplicationJsonErrorDescriptionEnum || (Mrcer401ApplicationJsonErrorDescriptionEnum = {}));
var Mrcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Mrcer401ApplicationJson, _super);
    function Mrcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mrcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mrcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Mrcer401ApplicationJson;
}(SpeakeasyBase));
export { Mrcer401ApplicationJson };
export var Mrcer404ApplicationJsonErrorEnum;
(function (Mrcer404ApplicationJsonErrorEnum) {
    Mrcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Mrcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Mrcer404ApplicationJsonErrorEnum || (Mrcer404ApplicationJsonErrorEnum = {}));
export var Mrcer404ApplicationJsonErrorDescriptionEnum;
(function (Mrcer404ApplicationJsonErrorDescriptionEnum) {
    Mrcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Mrcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Mrcer404ApplicationJsonErrorDescriptionEnum || (Mrcer404ApplicationJsonErrorDescriptionEnum = {}));
var Mrcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Mrcer404ApplicationJson, _super);
    function Mrcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mrcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mrcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Mrcer404ApplicationJson;
}(SpeakeasyBase));
export { Mrcer404ApplicationJson };
export var Mrcer500ApplicationJsonErrorEnum;
(function (Mrcer500ApplicationJsonErrorEnum) {
    Mrcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Mrcer500ApplicationJsonErrorEnum || (Mrcer500ApplicationJsonErrorEnum = {}));
export var Mrcer500ApplicationJsonErrorDescriptionEnum;
(function (Mrcer500ApplicationJsonErrorDescriptionEnum) {
    Mrcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Mrcer500ApplicationJsonErrorDescriptionEnum || (Mrcer500ApplicationJsonErrorDescriptionEnum = {}));
var Mrcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Mrcer500ApplicationJson, _super);
    function Mrcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mrcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mrcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Mrcer500ApplicationJson;
}(SpeakeasyBase));
export { Mrcer500ApplicationJson };
export var Mrcer502ApplicationJsonErrorEnum;
(function (Mrcer502ApplicationJsonErrorEnum) {
    Mrcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Mrcer502ApplicationJsonErrorEnum || (Mrcer502ApplicationJsonErrorEnum = {}));
export var Mrcer502ApplicationJsonErrorDescriptionEnum;
(function (Mrcer502ApplicationJsonErrorDescriptionEnum) {
    Mrcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Mrcer502ApplicationJsonErrorDescriptionEnum || (Mrcer502ApplicationJsonErrorDescriptionEnum = {}));
var Mrcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Mrcer502ApplicationJson, _super);
    function Mrcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mrcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mrcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Mrcer502ApplicationJson;
}(SpeakeasyBase));
export { Mrcer502ApplicationJson };
export var Mrcer503ApplicationJsonErrorEnum;
(function (Mrcer503ApplicationJsonErrorEnum) {
    Mrcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Mrcer503ApplicationJsonErrorEnum || (Mrcer503ApplicationJsonErrorEnum = {}));
export var Mrcer503ApplicationJsonErrorDescriptionEnum;
(function (Mrcer503ApplicationJsonErrorDescriptionEnum) {
    Mrcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Mrcer503ApplicationJsonErrorDescriptionEnum || (Mrcer503ApplicationJsonErrorDescriptionEnum = {}));
var Mrcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Mrcer503ApplicationJson, _super);
    function Mrcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mrcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mrcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Mrcer503ApplicationJson;
}(SpeakeasyBase));
export { Mrcer503ApplicationJson };
export var Mrcer504ApplicationJsonErrorEnum;
(function (Mrcer504ApplicationJsonErrorEnum) {
    Mrcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Mrcer504ApplicationJsonErrorEnum || (Mrcer504ApplicationJsonErrorEnum = {}));
export var Mrcer504ApplicationJsonErrorDescriptionEnum;
(function (Mrcer504ApplicationJsonErrorDescriptionEnum) {
    Mrcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Mrcer504ApplicationJsonErrorDescriptionEnum || (Mrcer504ApplicationJsonErrorDescriptionEnum = {}));
var Mrcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Mrcer504ApplicationJson, _super);
    function Mrcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mrcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mrcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Mrcer504ApplicationJson;
}(SpeakeasyBase));
export { Mrcer504ApplicationJson };
var MrcerResponse = /** @class */ (function (_super) {
    __extends(MrcerResponse, _super);
    function MrcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MrcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MrcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mrcer400ApplicationJson)
    ], MrcerResponse.prototype, "mrcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mrcer401ApplicationJson)
    ], MrcerResponse.prototype, "mrcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mrcer404ApplicationJson)
    ], MrcerResponse.prototype, "mrcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mrcer500ApplicationJson)
    ], MrcerResponse.prototype, "mrcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mrcer502ApplicationJson)
    ], MrcerResponse.prototype, "mrcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mrcer503ApplicationJson)
    ], MrcerResponse.prototype, "mrcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mrcer504ApplicationJson)
    ], MrcerResponse.prototype, "mrcer504ApplicationJsonObject", void 0);
    return MrcerResponse;
}(SpeakeasyBase));
export { MrcerResponse };
