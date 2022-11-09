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
var PncerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PncerRequestBodyCertificateParameters, _super);
    function PncerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], PncerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        Metadata({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], PncerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        Metadata({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], PncerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return PncerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { PncerRequestBodyCertificateParameters };
export var PncerRequestBodyFormatEnum;
(function (PncerRequestBodyFormatEnum) {
    PncerRequestBodyFormatEnum["Pdf"] = "pdf";
})(PncerRequestBodyFormatEnum || (PncerRequestBodyFormatEnum = {}));
var PncerRequestBody = /** @class */ (function (_super) {
    __extends(PncerRequestBody, _super);
    function PncerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", PncerRequestBodyCertificateParameters)
    ], PncerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], PncerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PncerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], PncerRequestBody.prototype, "txnId", void 0);
    return PncerRequestBody;
}(SpeakeasyBase));
export { PncerRequestBody };
var PncerSecurity = /** @class */ (function (_super) {
    __extends(PncerSecurity, _super);
    function PncerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PncerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PncerSecurity.prototype, "clientId", void 0);
    return PncerSecurity;
}(SpeakeasyBase));
export { PncerSecurity };
var PncerRequest = /** @class */ (function (_super) {
    __extends(PncerRequest, _super);
    function PncerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PncerRequestBody)
    ], PncerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PncerSecurity)
    ], PncerRequest.prototype, "security", void 0);
    return PncerRequest;
}(SpeakeasyBase));
export { PncerRequest };
export var Pncer400ApplicationJsonErrorEnum;
(function (Pncer400ApplicationJsonErrorEnum) {
    Pncer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Pncer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Pncer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Pncer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Pncer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Pncer400ApplicationJsonErrorEnum || (Pncer400ApplicationJsonErrorEnum = {}));
export var Pncer400ApplicationJsonErrorDescriptionEnum;
(function (Pncer400ApplicationJsonErrorDescriptionEnum) {
    Pncer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Pncer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Pncer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Pncer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Pncer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Pncer400ApplicationJsonErrorDescriptionEnum || (Pncer400ApplicationJsonErrorDescriptionEnum = {}));
var Pncer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Pncer400ApplicationJson, _super);
    function Pncer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pncer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pncer400ApplicationJson.prototype, "errorDescription", void 0);
    return Pncer400ApplicationJson;
}(SpeakeasyBase));
export { Pncer400ApplicationJson };
export var Pncer401ApplicationJsonErrorEnum;
(function (Pncer401ApplicationJsonErrorEnum) {
    Pncer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Pncer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Pncer401ApplicationJsonErrorEnum || (Pncer401ApplicationJsonErrorEnum = {}));
export var Pncer401ApplicationJsonErrorDescriptionEnum;
(function (Pncer401ApplicationJsonErrorDescriptionEnum) {
    Pncer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Pncer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Pncer401ApplicationJsonErrorDescriptionEnum || (Pncer401ApplicationJsonErrorDescriptionEnum = {}));
var Pncer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Pncer401ApplicationJson, _super);
    function Pncer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pncer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pncer401ApplicationJson.prototype, "errorDescription", void 0);
    return Pncer401ApplicationJson;
}(SpeakeasyBase));
export { Pncer401ApplicationJson };
export var Pncer404ApplicationJsonErrorEnum;
(function (Pncer404ApplicationJsonErrorEnum) {
    Pncer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Pncer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Pncer404ApplicationJsonErrorEnum || (Pncer404ApplicationJsonErrorEnum = {}));
export var Pncer404ApplicationJsonErrorDescriptionEnum;
(function (Pncer404ApplicationJsonErrorDescriptionEnum) {
    Pncer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Pncer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Pncer404ApplicationJsonErrorDescriptionEnum || (Pncer404ApplicationJsonErrorDescriptionEnum = {}));
var Pncer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Pncer404ApplicationJson, _super);
    function Pncer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pncer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pncer404ApplicationJson.prototype, "errorDescription", void 0);
    return Pncer404ApplicationJson;
}(SpeakeasyBase));
export { Pncer404ApplicationJson };
export var Pncer500ApplicationJsonErrorEnum;
(function (Pncer500ApplicationJsonErrorEnum) {
    Pncer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Pncer500ApplicationJsonErrorEnum || (Pncer500ApplicationJsonErrorEnum = {}));
export var Pncer500ApplicationJsonErrorDescriptionEnum;
(function (Pncer500ApplicationJsonErrorDescriptionEnum) {
    Pncer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Pncer500ApplicationJsonErrorDescriptionEnum || (Pncer500ApplicationJsonErrorDescriptionEnum = {}));
var Pncer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Pncer500ApplicationJson, _super);
    function Pncer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pncer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pncer500ApplicationJson.prototype, "errorDescription", void 0);
    return Pncer500ApplicationJson;
}(SpeakeasyBase));
export { Pncer500ApplicationJson };
export var Pncer502ApplicationJsonErrorEnum;
(function (Pncer502ApplicationJsonErrorEnum) {
    Pncer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Pncer502ApplicationJsonErrorEnum || (Pncer502ApplicationJsonErrorEnum = {}));
export var Pncer502ApplicationJsonErrorDescriptionEnum;
(function (Pncer502ApplicationJsonErrorDescriptionEnum) {
    Pncer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Pncer502ApplicationJsonErrorDescriptionEnum || (Pncer502ApplicationJsonErrorDescriptionEnum = {}));
var Pncer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Pncer502ApplicationJson, _super);
    function Pncer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pncer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pncer502ApplicationJson.prototype, "errorDescription", void 0);
    return Pncer502ApplicationJson;
}(SpeakeasyBase));
export { Pncer502ApplicationJson };
export var Pncer503ApplicationJsonErrorEnum;
(function (Pncer503ApplicationJsonErrorEnum) {
    Pncer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Pncer503ApplicationJsonErrorEnum || (Pncer503ApplicationJsonErrorEnum = {}));
export var Pncer503ApplicationJsonErrorDescriptionEnum;
(function (Pncer503ApplicationJsonErrorDescriptionEnum) {
    Pncer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Pncer503ApplicationJsonErrorDescriptionEnum || (Pncer503ApplicationJsonErrorDescriptionEnum = {}));
var Pncer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Pncer503ApplicationJson, _super);
    function Pncer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pncer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pncer503ApplicationJson.prototype, "errorDescription", void 0);
    return Pncer503ApplicationJson;
}(SpeakeasyBase));
export { Pncer503ApplicationJson };
export var Pncer504ApplicationJsonErrorEnum;
(function (Pncer504ApplicationJsonErrorEnum) {
    Pncer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Pncer504ApplicationJsonErrorEnum || (Pncer504ApplicationJsonErrorEnum = {}));
export var Pncer504ApplicationJsonErrorDescriptionEnum;
(function (Pncer504ApplicationJsonErrorDescriptionEnum) {
    Pncer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Pncer504ApplicationJsonErrorDescriptionEnum || (Pncer504ApplicationJsonErrorDescriptionEnum = {}));
var Pncer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Pncer504ApplicationJson, _super);
    function Pncer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pncer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pncer504ApplicationJson.prototype, "errorDescription", void 0);
    return Pncer504ApplicationJson;
}(SpeakeasyBase));
export { Pncer504ApplicationJson };
var PncerResponse = /** @class */ (function (_super) {
    __extends(PncerResponse, _super);
    function PncerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PncerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PncerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pncer400ApplicationJson)
    ], PncerResponse.prototype, "pncer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pncer401ApplicationJson)
    ], PncerResponse.prototype, "pncer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pncer404ApplicationJson)
    ], PncerResponse.prototype, "pncer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pncer500ApplicationJson)
    ], PncerResponse.prototype, "pncer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pncer502ApplicationJson)
    ], PncerResponse.prototype, "pncer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pncer503ApplicationJson)
    ], PncerResponse.prototype, "pncer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Pncer504ApplicationJson)
    ], PncerResponse.prototype, "pncer504ApplicationJsonObject", void 0);
    return PncerResponse;
}(SpeakeasyBase));
export { PncerResponse };
