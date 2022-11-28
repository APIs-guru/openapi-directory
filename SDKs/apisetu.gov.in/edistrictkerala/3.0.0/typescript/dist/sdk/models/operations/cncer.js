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
var CncerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(CncerRequestBodyCertificateParameters, _super);
    function CncerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], CncerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], CncerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], CncerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return CncerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { CncerRequestBodyCertificateParameters };
export var CncerRequestBodyFormatEnum;
(function (CncerRequestBodyFormatEnum) {
    CncerRequestBodyFormatEnum["Pdf"] = "pdf";
})(CncerRequestBodyFormatEnum || (CncerRequestBodyFormatEnum = {}));
var CncerRequestBody = /** @class */ (function (_super) {
    __extends(CncerRequestBody, _super);
    function CncerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", CncerRequestBodyCertificateParameters)
    ], CncerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], CncerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CncerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], CncerRequestBody.prototype, "txnId", void 0);
    return CncerRequestBody;
}(SpeakeasyBase));
export { CncerRequestBody };
var CncerSecurity = /** @class */ (function (_super) {
    __extends(CncerSecurity, _super);
    function CncerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CncerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], CncerSecurity.prototype, "clientId", void 0);
    return CncerSecurity;
}(SpeakeasyBase));
export { CncerSecurity };
export var Cncer400ApplicationJsonErrorEnum;
(function (Cncer400ApplicationJsonErrorEnum) {
    Cncer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Cncer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Cncer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Cncer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Cncer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Cncer400ApplicationJsonErrorEnum || (Cncer400ApplicationJsonErrorEnum = {}));
export var Cncer400ApplicationJsonErrorDescriptionEnum;
(function (Cncer400ApplicationJsonErrorDescriptionEnum) {
    Cncer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Cncer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Cncer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Cncer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Cncer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Cncer400ApplicationJsonErrorDescriptionEnum || (Cncer400ApplicationJsonErrorDescriptionEnum = {}));
var Cncer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Cncer400ApplicationJson, _super);
    function Cncer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cncer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cncer400ApplicationJson.prototype, "errorDescription", void 0);
    return Cncer400ApplicationJson;
}(SpeakeasyBase));
export { Cncer400ApplicationJson };
export var Cncer401ApplicationJsonErrorEnum;
(function (Cncer401ApplicationJsonErrorEnum) {
    Cncer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Cncer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Cncer401ApplicationJsonErrorEnum || (Cncer401ApplicationJsonErrorEnum = {}));
export var Cncer401ApplicationJsonErrorDescriptionEnum;
(function (Cncer401ApplicationJsonErrorDescriptionEnum) {
    Cncer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Cncer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Cncer401ApplicationJsonErrorDescriptionEnum || (Cncer401ApplicationJsonErrorDescriptionEnum = {}));
var Cncer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Cncer401ApplicationJson, _super);
    function Cncer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cncer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cncer401ApplicationJson.prototype, "errorDescription", void 0);
    return Cncer401ApplicationJson;
}(SpeakeasyBase));
export { Cncer401ApplicationJson };
export var Cncer404ApplicationJsonErrorEnum;
(function (Cncer404ApplicationJsonErrorEnum) {
    Cncer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Cncer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Cncer404ApplicationJsonErrorEnum || (Cncer404ApplicationJsonErrorEnum = {}));
export var Cncer404ApplicationJsonErrorDescriptionEnum;
(function (Cncer404ApplicationJsonErrorDescriptionEnum) {
    Cncer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Cncer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Cncer404ApplicationJsonErrorDescriptionEnum || (Cncer404ApplicationJsonErrorDescriptionEnum = {}));
var Cncer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Cncer404ApplicationJson, _super);
    function Cncer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cncer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cncer404ApplicationJson.prototype, "errorDescription", void 0);
    return Cncer404ApplicationJson;
}(SpeakeasyBase));
export { Cncer404ApplicationJson };
export var Cncer500ApplicationJsonErrorEnum;
(function (Cncer500ApplicationJsonErrorEnum) {
    Cncer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Cncer500ApplicationJsonErrorEnum || (Cncer500ApplicationJsonErrorEnum = {}));
export var Cncer500ApplicationJsonErrorDescriptionEnum;
(function (Cncer500ApplicationJsonErrorDescriptionEnum) {
    Cncer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Cncer500ApplicationJsonErrorDescriptionEnum || (Cncer500ApplicationJsonErrorDescriptionEnum = {}));
var Cncer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Cncer500ApplicationJson, _super);
    function Cncer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cncer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cncer500ApplicationJson.prototype, "errorDescription", void 0);
    return Cncer500ApplicationJson;
}(SpeakeasyBase));
export { Cncer500ApplicationJson };
export var Cncer502ApplicationJsonErrorEnum;
(function (Cncer502ApplicationJsonErrorEnum) {
    Cncer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Cncer502ApplicationJsonErrorEnum || (Cncer502ApplicationJsonErrorEnum = {}));
export var Cncer502ApplicationJsonErrorDescriptionEnum;
(function (Cncer502ApplicationJsonErrorDescriptionEnum) {
    Cncer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Cncer502ApplicationJsonErrorDescriptionEnum || (Cncer502ApplicationJsonErrorDescriptionEnum = {}));
var Cncer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Cncer502ApplicationJson, _super);
    function Cncer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cncer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cncer502ApplicationJson.prototype, "errorDescription", void 0);
    return Cncer502ApplicationJson;
}(SpeakeasyBase));
export { Cncer502ApplicationJson };
export var Cncer503ApplicationJsonErrorEnum;
(function (Cncer503ApplicationJsonErrorEnum) {
    Cncer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Cncer503ApplicationJsonErrorEnum || (Cncer503ApplicationJsonErrorEnum = {}));
export var Cncer503ApplicationJsonErrorDescriptionEnum;
(function (Cncer503ApplicationJsonErrorDescriptionEnum) {
    Cncer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Cncer503ApplicationJsonErrorDescriptionEnum || (Cncer503ApplicationJsonErrorDescriptionEnum = {}));
var Cncer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Cncer503ApplicationJson, _super);
    function Cncer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cncer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cncer503ApplicationJson.prototype, "errorDescription", void 0);
    return Cncer503ApplicationJson;
}(SpeakeasyBase));
export { Cncer503ApplicationJson };
export var Cncer504ApplicationJsonErrorEnum;
(function (Cncer504ApplicationJsonErrorEnum) {
    Cncer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Cncer504ApplicationJsonErrorEnum || (Cncer504ApplicationJsonErrorEnum = {}));
export var Cncer504ApplicationJsonErrorDescriptionEnum;
(function (Cncer504ApplicationJsonErrorDescriptionEnum) {
    Cncer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Cncer504ApplicationJsonErrorDescriptionEnum || (Cncer504ApplicationJsonErrorDescriptionEnum = {}));
var Cncer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Cncer504ApplicationJson, _super);
    function Cncer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cncer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cncer504ApplicationJson.prototype, "errorDescription", void 0);
    return Cncer504ApplicationJson;
}(SpeakeasyBase));
export { Cncer504ApplicationJson };
var CncerRequest = /** @class */ (function (_super) {
    __extends(CncerRequest, _super);
    function CncerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CncerRequestBody)
    ], CncerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CncerSecurity)
    ], CncerRequest.prototype, "security", void 0);
    return CncerRequest;
}(SpeakeasyBase));
export { CncerRequest };
var CncerResponse = /** @class */ (function (_super) {
    __extends(CncerResponse, _super);
    function CncerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CncerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CncerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cncer400ApplicationJson)
    ], CncerResponse.prototype, "cncer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cncer401ApplicationJson)
    ], CncerResponse.prototype, "cncer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cncer404ApplicationJson)
    ], CncerResponse.prototype, "cncer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cncer500ApplicationJson)
    ], CncerResponse.prototype, "cncer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cncer502ApplicationJson)
    ], CncerResponse.prototype, "cncer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cncer503ApplicationJson)
    ], CncerResponse.prototype, "cncer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cncer504ApplicationJson)
    ], CncerResponse.prototype, "cncer504ApplicationJsonObject", void 0);
    return CncerResponse;
}(SpeakeasyBase));
export { CncerResponse };
