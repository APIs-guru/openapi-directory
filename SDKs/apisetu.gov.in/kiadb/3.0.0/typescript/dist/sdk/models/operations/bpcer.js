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
var BpcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(BpcerRequestBodyCertificateParameters, _super);
    function BpcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], BpcerRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], BpcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegNum" }),
        __metadata("design:type", String)
    ], BpcerRequestBodyCertificateParameters.prototype, "regNum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], BpcerRequestBodyCertificateParameters.prototype, "uid", void 0);
    return BpcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { BpcerRequestBodyCertificateParameters };
export var BpcerRequestBodyFormatEnum;
(function (BpcerRequestBodyFormatEnum) {
    BpcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(BpcerRequestBodyFormatEnum || (BpcerRequestBodyFormatEnum = {}));
var BpcerRequestBody = /** @class */ (function (_super) {
    __extends(BpcerRequestBody, _super);
    function BpcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", BpcerRequestBodyCertificateParameters)
    ], BpcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], BpcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], BpcerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], BpcerRequestBody.prototype, "txnId", void 0);
    return BpcerRequestBody;
}(SpeakeasyBase));
export { BpcerRequestBody };
var BpcerSecurity = /** @class */ (function (_super) {
    __extends(BpcerSecurity, _super);
    function BpcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], BpcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], BpcerSecurity.prototype, "clientId", void 0);
    return BpcerSecurity;
}(SpeakeasyBase));
export { BpcerSecurity };
export var Bpcer400ApplicationJsonErrorEnum;
(function (Bpcer400ApplicationJsonErrorEnum) {
    Bpcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Bpcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Bpcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Bpcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Bpcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Bpcer400ApplicationJsonErrorEnum || (Bpcer400ApplicationJsonErrorEnum = {}));
export var Bpcer400ApplicationJsonErrorDescriptionEnum;
(function (Bpcer400ApplicationJsonErrorDescriptionEnum) {
    Bpcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Bpcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Bpcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Bpcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Bpcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Bpcer400ApplicationJsonErrorDescriptionEnum || (Bpcer400ApplicationJsonErrorDescriptionEnum = {}));
var Bpcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Bpcer400ApplicationJson, _super);
    function Bpcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bpcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bpcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Bpcer400ApplicationJson;
}(SpeakeasyBase));
export { Bpcer400ApplicationJson };
export var Bpcer401ApplicationJsonErrorEnum;
(function (Bpcer401ApplicationJsonErrorEnum) {
    Bpcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Bpcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Bpcer401ApplicationJsonErrorEnum || (Bpcer401ApplicationJsonErrorEnum = {}));
export var Bpcer401ApplicationJsonErrorDescriptionEnum;
(function (Bpcer401ApplicationJsonErrorDescriptionEnum) {
    Bpcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Bpcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Bpcer401ApplicationJsonErrorDescriptionEnum || (Bpcer401ApplicationJsonErrorDescriptionEnum = {}));
var Bpcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Bpcer401ApplicationJson, _super);
    function Bpcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bpcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bpcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Bpcer401ApplicationJson;
}(SpeakeasyBase));
export { Bpcer401ApplicationJson };
export var Bpcer404ApplicationJsonErrorEnum;
(function (Bpcer404ApplicationJsonErrorEnum) {
    Bpcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Bpcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Bpcer404ApplicationJsonErrorEnum || (Bpcer404ApplicationJsonErrorEnum = {}));
export var Bpcer404ApplicationJsonErrorDescriptionEnum;
(function (Bpcer404ApplicationJsonErrorDescriptionEnum) {
    Bpcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Bpcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Bpcer404ApplicationJsonErrorDescriptionEnum || (Bpcer404ApplicationJsonErrorDescriptionEnum = {}));
var Bpcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Bpcer404ApplicationJson, _super);
    function Bpcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bpcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bpcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Bpcer404ApplicationJson;
}(SpeakeasyBase));
export { Bpcer404ApplicationJson };
export var Bpcer500ApplicationJsonErrorEnum;
(function (Bpcer500ApplicationJsonErrorEnum) {
    Bpcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Bpcer500ApplicationJsonErrorEnum || (Bpcer500ApplicationJsonErrorEnum = {}));
export var Bpcer500ApplicationJsonErrorDescriptionEnum;
(function (Bpcer500ApplicationJsonErrorDescriptionEnum) {
    Bpcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Bpcer500ApplicationJsonErrorDescriptionEnum || (Bpcer500ApplicationJsonErrorDescriptionEnum = {}));
var Bpcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Bpcer500ApplicationJson, _super);
    function Bpcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bpcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bpcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Bpcer500ApplicationJson;
}(SpeakeasyBase));
export { Bpcer500ApplicationJson };
export var Bpcer502ApplicationJsonErrorEnum;
(function (Bpcer502ApplicationJsonErrorEnum) {
    Bpcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Bpcer502ApplicationJsonErrorEnum || (Bpcer502ApplicationJsonErrorEnum = {}));
export var Bpcer502ApplicationJsonErrorDescriptionEnum;
(function (Bpcer502ApplicationJsonErrorDescriptionEnum) {
    Bpcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Bpcer502ApplicationJsonErrorDescriptionEnum || (Bpcer502ApplicationJsonErrorDescriptionEnum = {}));
var Bpcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Bpcer502ApplicationJson, _super);
    function Bpcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bpcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bpcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Bpcer502ApplicationJson;
}(SpeakeasyBase));
export { Bpcer502ApplicationJson };
export var Bpcer503ApplicationJsonErrorEnum;
(function (Bpcer503ApplicationJsonErrorEnum) {
    Bpcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Bpcer503ApplicationJsonErrorEnum || (Bpcer503ApplicationJsonErrorEnum = {}));
export var Bpcer503ApplicationJsonErrorDescriptionEnum;
(function (Bpcer503ApplicationJsonErrorDescriptionEnum) {
    Bpcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Bpcer503ApplicationJsonErrorDescriptionEnum || (Bpcer503ApplicationJsonErrorDescriptionEnum = {}));
var Bpcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Bpcer503ApplicationJson, _super);
    function Bpcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bpcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bpcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Bpcer503ApplicationJson;
}(SpeakeasyBase));
export { Bpcer503ApplicationJson };
export var Bpcer504ApplicationJsonErrorEnum;
(function (Bpcer504ApplicationJsonErrorEnum) {
    Bpcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Bpcer504ApplicationJsonErrorEnum || (Bpcer504ApplicationJsonErrorEnum = {}));
export var Bpcer504ApplicationJsonErrorDescriptionEnum;
(function (Bpcer504ApplicationJsonErrorDescriptionEnum) {
    Bpcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Bpcer504ApplicationJsonErrorDescriptionEnum || (Bpcer504ApplicationJsonErrorDescriptionEnum = {}));
var Bpcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Bpcer504ApplicationJson, _super);
    function Bpcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bpcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bpcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Bpcer504ApplicationJson;
}(SpeakeasyBase));
export { Bpcer504ApplicationJson };
var BpcerRequest = /** @class */ (function (_super) {
    __extends(BpcerRequest, _super);
    function BpcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BpcerRequestBody)
    ], BpcerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BpcerSecurity)
    ], BpcerRequest.prototype, "security", void 0);
    return BpcerRequest;
}(SpeakeasyBase));
export { BpcerRequest };
var BpcerResponse = /** @class */ (function (_super) {
    __extends(BpcerResponse, _super);
    function BpcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BpcerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BpcerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Bpcer400ApplicationJson)
    ], BpcerResponse.prototype, "bpcer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Bpcer401ApplicationJson)
    ], BpcerResponse.prototype, "bpcer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Bpcer404ApplicationJson)
    ], BpcerResponse.prototype, "bpcer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Bpcer500ApplicationJson)
    ], BpcerResponse.prototype, "bpcer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Bpcer502ApplicationJson)
    ], BpcerResponse.prototype, "bpcer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Bpcer503ApplicationJson)
    ], BpcerResponse.prototype, "bpcer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Bpcer504ApplicationJson)
    ], BpcerResponse.prototype, "bpcer504ApplicationJsonObject", void 0);
    return BpcerResponse;
}(SpeakeasyBase));
export { BpcerResponse };
