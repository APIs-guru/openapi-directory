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
var RvcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RvcerRequestBodyCertificateParameters, _super);
    function RvcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], RvcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], RvcerRequestBodyCertificateParameters.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chasis_no" }),
        __metadata("design:type", String)
    ], RvcerRequestBodyCertificateParameters.prototype, "chasisNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reg_no" }),
        __metadata("design:type", String)
    ], RvcerRequestBodyCertificateParameters.prototype, "regNo", void 0);
    return RvcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { RvcerRequestBodyCertificateParameters };
export var RvcerRequestBodyFormatEnum;
(function (RvcerRequestBodyFormatEnum) {
    RvcerRequestBodyFormatEnum["Xml"] = "xml";
    RvcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(RvcerRequestBodyFormatEnum || (RvcerRequestBodyFormatEnum = {}));
var RvcerRequestBody = /** @class */ (function (_super) {
    __extends(RvcerRequestBody, _super);
    function RvcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RvcerRequestBodyCertificateParameters)
    ], RvcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RvcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RvcerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RvcerRequestBody.prototype, "txnId", void 0);
    return RvcerRequestBody;
}(SpeakeasyBase));
export { RvcerRequestBody };
var RvcerSecurity = /** @class */ (function (_super) {
    __extends(RvcerSecurity, _super);
    function RvcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RvcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RvcerSecurity.prototype, "clientId", void 0);
    return RvcerSecurity;
}(SpeakeasyBase));
export { RvcerSecurity };
export var Rvcer400ApplicationJsonErrorEnum;
(function (Rvcer400ApplicationJsonErrorEnum) {
    Rvcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Rvcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Rvcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Rvcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Rvcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Rvcer400ApplicationJsonErrorEnum || (Rvcer400ApplicationJsonErrorEnum = {}));
export var Rvcer400ApplicationJsonErrorDescriptionEnum;
(function (Rvcer400ApplicationJsonErrorDescriptionEnum) {
    Rvcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Rvcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Rvcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Rvcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Rvcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Rvcer400ApplicationJsonErrorDescriptionEnum || (Rvcer400ApplicationJsonErrorDescriptionEnum = {}));
var Rvcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Rvcer400ApplicationJson, _super);
    function Rvcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rvcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rvcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Rvcer400ApplicationJson;
}(SpeakeasyBase));
export { Rvcer400ApplicationJson };
export var Rvcer401ApplicationJsonErrorEnum;
(function (Rvcer401ApplicationJsonErrorEnum) {
    Rvcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Rvcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Rvcer401ApplicationJsonErrorEnum || (Rvcer401ApplicationJsonErrorEnum = {}));
export var Rvcer401ApplicationJsonErrorDescriptionEnum;
(function (Rvcer401ApplicationJsonErrorDescriptionEnum) {
    Rvcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Rvcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Rvcer401ApplicationJsonErrorDescriptionEnum || (Rvcer401ApplicationJsonErrorDescriptionEnum = {}));
var Rvcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Rvcer401ApplicationJson, _super);
    function Rvcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rvcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rvcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Rvcer401ApplicationJson;
}(SpeakeasyBase));
export { Rvcer401ApplicationJson };
export var Rvcer404ApplicationJsonErrorEnum;
(function (Rvcer404ApplicationJsonErrorEnum) {
    Rvcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Rvcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Rvcer404ApplicationJsonErrorEnum || (Rvcer404ApplicationJsonErrorEnum = {}));
export var Rvcer404ApplicationJsonErrorDescriptionEnum;
(function (Rvcer404ApplicationJsonErrorDescriptionEnum) {
    Rvcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Rvcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Rvcer404ApplicationJsonErrorDescriptionEnum || (Rvcer404ApplicationJsonErrorDescriptionEnum = {}));
var Rvcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Rvcer404ApplicationJson, _super);
    function Rvcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rvcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rvcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Rvcer404ApplicationJson;
}(SpeakeasyBase));
export { Rvcer404ApplicationJson };
export var Rvcer500ApplicationJsonErrorEnum;
(function (Rvcer500ApplicationJsonErrorEnum) {
    Rvcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Rvcer500ApplicationJsonErrorEnum || (Rvcer500ApplicationJsonErrorEnum = {}));
export var Rvcer500ApplicationJsonErrorDescriptionEnum;
(function (Rvcer500ApplicationJsonErrorDescriptionEnum) {
    Rvcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Rvcer500ApplicationJsonErrorDescriptionEnum || (Rvcer500ApplicationJsonErrorDescriptionEnum = {}));
var Rvcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Rvcer500ApplicationJson, _super);
    function Rvcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rvcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rvcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Rvcer500ApplicationJson;
}(SpeakeasyBase));
export { Rvcer500ApplicationJson };
export var Rvcer502ApplicationJsonErrorEnum;
(function (Rvcer502ApplicationJsonErrorEnum) {
    Rvcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Rvcer502ApplicationJsonErrorEnum || (Rvcer502ApplicationJsonErrorEnum = {}));
export var Rvcer502ApplicationJsonErrorDescriptionEnum;
(function (Rvcer502ApplicationJsonErrorDescriptionEnum) {
    Rvcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Rvcer502ApplicationJsonErrorDescriptionEnum || (Rvcer502ApplicationJsonErrorDescriptionEnum = {}));
var Rvcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Rvcer502ApplicationJson, _super);
    function Rvcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rvcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rvcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Rvcer502ApplicationJson;
}(SpeakeasyBase));
export { Rvcer502ApplicationJson };
export var Rvcer503ApplicationJsonErrorEnum;
(function (Rvcer503ApplicationJsonErrorEnum) {
    Rvcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Rvcer503ApplicationJsonErrorEnum || (Rvcer503ApplicationJsonErrorEnum = {}));
export var Rvcer503ApplicationJsonErrorDescriptionEnum;
(function (Rvcer503ApplicationJsonErrorDescriptionEnum) {
    Rvcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Rvcer503ApplicationJsonErrorDescriptionEnum || (Rvcer503ApplicationJsonErrorDescriptionEnum = {}));
var Rvcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Rvcer503ApplicationJson, _super);
    function Rvcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rvcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rvcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Rvcer503ApplicationJson;
}(SpeakeasyBase));
export { Rvcer503ApplicationJson };
export var Rvcer504ApplicationJsonErrorEnum;
(function (Rvcer504ApplicationJsonErrorEnum) {
    Rvcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Rvcer504ApplicationJsonErrorEnum || (Rvcer504ApplicationJsonErrorEnum = {}));
export var Rvcer504ApplicationJsonErrorDescriptionEnum;
(function (Rvcer504ApplicationJsonErrorDescriptionEnum) {
    Rvcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Rvcer504ApplicationJsonErrorDescriptionEnum || (Rvcer504ApplicationJsonErrorDescriptionEnum = {}));
var Rvcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Rvcer504ApplicationJson, _super);
    function Rvcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rvcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rvcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Rvcer504ApplicationJson;
}(SpeakeasyBase));
export { Rvcer504ApplicationJson };
var RvcerRequest = /** @class */ (function (_super) {
    __extends(RvcerRequest, _super);
    function RvcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RvcerRequestBody)
    ], RvcerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RvcerSecurity)
    ], RvcerRequest.prototype, "security", void 0);
    return RvcerRequest;
}(SpeakeasyBase));
export { RvcerRequest };
var RvcerResponse = /** @class */ (function (_super) {
    __extends(RvcerResponse, _super);
    function RvcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], RvcerResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RvcerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RvcerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rvcer400ApplicationJson)
    ], RvcerResponse.prototype, "rvcer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rvcer401ApplicationJson)
    ], RvcerResponse.prototype, "rvcer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rvcer404ApplicationJson)
    ], RvcerResponse.prototype, "rvcer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rvcer500ApplicationJson)
    ], RvcerResponse.prototype, "rvcer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rvcer502ApplicationJson)
    ], RvcerResponse.prototype, "rvcer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rvcer503ApplicationJson)
    ], RvcerResponse.prototype, "rvcer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Rvcer504ApplicationJson)
    ], RvcerResponse.prototype, "rvcer504ApplicationJsonObject", void 0);
    return RvcerResponse;
}(SpeakeasyBase));
export { RvcerResponse };
