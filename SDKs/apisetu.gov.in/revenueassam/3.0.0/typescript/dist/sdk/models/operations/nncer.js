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
var NncerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(NncerRequestBodyCertificateParameters, _super);
    function NncerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], NncerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    return NncerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { NncerRequestBodyCertificateParameters };
export var NncerRequestBodyFormatEnum;
(function (NncerRequestBodyFormatEnum) {
    NncerRequestBodyFormatEnum["Pdf"] = "pdf";
})(NncerRequestBodyFormatEnum || (NncerRequestBodyFormatEnum = {}));
var NncerRequestBody = /** @class */ (function (_super) {
    __extends(NncerRequestBody, _super);
    function NncerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", NncerRequestBodyCertificateParameters)
    ], NncerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], NncerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], NncerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], NncerRequestBody.prototype, "txnId", void 0);
    return NncerRequestBody;
}(SpeakeasyBase));
export { NncerRequestBody };
var NncerSecurity = /** @class */ (function (_super) {
    __extends(NncerSecurity, _super);
    function NncerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], NncerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], NncerSecurity.prototype, "clientId", void 0);
    return NncerSecurity;
}(SpeakeasyBase));
export { NncerSecurity };
export var Nncer400ApplicationJsonErrorEnum;
(function (Nncer400ApplicationJsonErrorEnum) {
    Nncer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Nncer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Nncer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Nncer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Nncer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Nncer400ApplicationJsonErrorEnum || (Nncer400ApplicationJsonErrorEnum = {}));
export var Nncer400ApplicationJsonErrorDescriptionEnum;
(function (Nncer400ApplicationJsonErrorDescriptionEnum) {
    Nncer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Nncer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Nncer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Nncer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Nncer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Nncer400ApplicationJsonErrorDescriptionEnum || (Nncer400ApplicationJsonErrorDescriptionEnum = {}));
var Nncer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Nncer400ApplicationJson, _super);
    function Nncer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nncer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nncer400ApplicationJson.prototype, "errorDescription", void 0);
    return Nncer400ApplicationJson;
}(SpeakeasyBase));
export { Nncer400ApplicationJson };
export var Nncer401ApplicationJsonErrorEnum;
(function (Nncer401ApplicationJsonErrorEnum) {
    Nncer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Nncer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Nncer401ApplicationJsonErrorEnum || (Nncer401ApplicationJsonErrorEnum = {}));
export var Nncer401ApplicationJsonErrorDescriptionEnum;
(function (Nncer401ApplicationJsonErrorDescriptionEnum) {
    Nncer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Nncer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Nncer401ApplicationJsonErrorDescriptionEnum || (Nncer401ApplicationJsonErrorDescriptionEnum = {}));
var Nncer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Nncer401ApplicationJson, _super);
    function Nncer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nncer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nncer401ApplicationJson.prototype, "errorDescription", void 0);
    return Nncer401ApplicationJson;
}(SpeakeasyBase));
export { Nncer401ApplicationJson };
export var Nncer404ApplicationJsonErrorEnum;
(function (Nncer404ApplicationJsonErrorEnum) {
    Nncer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Nncer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Nncer404ApplicationJsonErrorEnum || (Nncer404ApplicationJsonErrorEnum = {}));
export var Nncer404ApplicationJsonErrorDescriptionEnum;
(function (Nncer404ApplicationJsonErrorDescriptionEnum) {
    Nncer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Nncer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Nncer404ApplicationJsonErrorDescriptionEnum || (Nncer404ApplicationJsonErrorDescriptionEnum = {}));
var Nncer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Nncer404ApplicationJson, _super);
    function Nncer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nncer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nncer404ApplicationJson.prototype, "errorDescription", void 0);
    return Nncer404ApplicationJson;
}(SpeakeasyBase));
export { Nncer404ApplicationJson };
export var Nncer500ApplicationJsonErrorEnum;
(function (Nncer500ApplicationJsonErrorEnum) {
    Nncer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Nncer500ApplicationJsonErrorEnum || (Nncer500ApplicationJsonErrorEnum = {}));
export var Nncer500ApplicationJsonErrorDescriptionEnum;
(function (Nncer500ApplicationJsonErrorDescriptionEnum) {
    Nncer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Nncer500ApplicationJsonErrorDescriptionEnum || (Nncer500ApplicationJsonErrorDescriptionEnum = {}));
var Nncer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Nncer500ApplicationJson, _super);
    function Nncer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nncer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nncer500ApplicationJson.prototype, "errorDescription", void 0);
    return Nncer500ApplicationJson;
}(SpeakeasyBase));
export { Nncer500ApplicationJson };
export var Nncer502ApplicationJsonErrorEnum;
(function (Nncer502ApplicationJsonErrorEnum) {
    Nncer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Nncer502ApplicationJsonErrorEnum || (Nncer502ApplicationJsonErrorEnum = {}));
export var Nncer502ApplicationJsonErrorDescriptionEnum;
(function (Nncer502ApplicationJsonErrorDescriptionEnum) {
    Nncer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Nncer502ApplicationJsonErrorDescriptionEnum || (Nncer502ApplicationJsonErrorDescriptionEnum = {}));
var Nncer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Nncer502ApplicationJson, _super);
    function Nncer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nncer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nncer502ApplicationJson.prototype, "errorDescription", void 0);
    return Nncer502ApplicationJson;
}(SpeakeasyBase));
export { Nncer502ApplicationJson };
export var Nncer503ApplicationJsonErrorEnum;
(function (Nncer503ApplicationJsonErrorEnum) {
    Nncer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Nncer503ApplicationJsonErrorEnum || (Nncer503ApplicationJsonErrorEnum = {}));
export var Nncer503ApplicationJsonErrorDescriptionEnum;
(function (Nncer503ApplicationJsonErrorDescriptionEnum) {
    Nncer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Nncer503ApplicationJsonErrorDescriptionEnum || (Nncer503ApplicationJsonErrorDescriptionEnum = {}));
var Nncer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Nncer503ApplicationJson, _super);
    function Nncer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nncer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nncer503ApplicationJson.prototype, "errorDescription", void 0);
    return Nncer503ApplicationJson;
}(SpeakeasyBase));
export { Nncer503ApplicationJson };
export var Nncer504ApplicationJsonErrorEnum;
(function (Nncer504ApplicationJsonErrorEnum) {
    Nncer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Nncer504ApplicationJsonErrorEnum || (Nncer504ApplicationJsonErrorEnum = {}));
export var Nncer504ApplicationJsonErrorDescriptionEnum;
(function (Nncer504ApplicationJsonErrorDescriptionEnum) {
    Nncer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Nncer504ApplicationJsonErrorDescriptionEnum || (Nncer504ApplicationJsonErrorDescriptionEnum = {}));
var Nncer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Nncer504ApplicationJson, _super);
    function Nncer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nncer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nncer504ApplicationJson.prototype, "errorDescription", void 0);
    return Nncer504ApplicationJson;
}(SpeakeasyBase));
export { Nncer504ApplicationJson };
var NncerRequest = /** @class */ (function (_super) {
    __extends(NncerRequest, _super);
    function NncerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", NncerRequestBody)
    ], NncerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NncerSecurity)
    ], NncerRequest.prototype, "security", void 0);
    return NncerRequest;
}(SpeakeasyBase));
export { NncerRequest };
var NncerResponse = /** @class */ (function (_super) {
    __extends(NncerResponse, _super);
    function NncerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NncerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NncerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Nncer400ApplicationJson)
    ], NncerResponse.prototype, "nncer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Nncer401ApplicationJson)
    ], NncerResponse.prototype, "nncer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Nncer404ApplicationJson)
    ], NncerResponse.prototype, "nncer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Nncer500ApplicationJson)
    ], NncerResponse.prototype, "nncer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Nncer502ApplicationJson)
    ], NncerResponse.prototype, "nncer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Nncer503ApplicationJson)
    ], NncerResponse.prototype, "nncer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Nncer504ApplicationJson)
    ], NncerResponse.prototype, "nncer504ApplicationJsonObject", void 0);
    return NncerResponse;
}(SpeakeasyBase));
export { NncerResponse };
