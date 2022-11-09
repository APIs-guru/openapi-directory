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
var MicerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(MicerRequestBodyCertificateParameters, _super);
    function MicerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=APPNO" }),
        __metadata("design:type", String)
    ], MicerRequestBodyCertificateParameters.prototype, "appno", void 0);
    __decorate([
        Metadata({ data: "json, name=Date_Of_Birth" }),
        __metadata("design:type", String)
    ], MicerRequestBodyCertificateParameters.prototype, "dateOfBirth", void 0);
    __decorate([
        Metadata({ data: "json, name=ENROLNO" }),
        __metadata("design:type", String)
    ], MicerRequestBodyCertificateParameters.prototype, "enrolno", void 0);
    __decorate([
        Metadata({ data: "json, name=ROLLNO" }),
        __metadata("design:type", String)
    ], MicerRequestBodyCertificateParameters.prototype, "rollno", void 0);
    return MicerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { MicerRequestBodyCertificateParameters };
export var MicerRequestBodyFormatEnum;
(function (MicerRequestBodyFormatEnum) {
    MicerRequestBodyFormatEnum["Pdf"] = "pdf";
})(MicerRequestBodyFormatEnum || (MicerRequestBodyFormatEnum = {}));
var MicerRequestBody = /** @class */ (function (_super) {
    __extends(MicerRequestBody, _super);
    function MicerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", MicerRequestBodyCertificateParameters)
    ], MicerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], MicerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], MicerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], MicerRequestBody.prototype, "txnId", void 0);
    return MicerRequestBody;
}(SpeakeasyBase));
export { MicerRequestBody };
var MicerSecurity = /** @class */ (function (_super) {
    __extends(MicerSecurity, _super);
    function MicerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MicerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], MicerSecurity.prototype, "clientId", void 0);
    return MicerSecurity;
}(SpeakeasyBase));
export { MicerSecurity };
var MicerRequest = /** @class */ (function (_super) {
    __extends(MicerRequest, _super);
    function MicerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", MicerRequestBody)
    ], MicerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MicerSecurity)
    ], MicerRequest.prototype, "security", void 0);
    return MicerRequest;
}(SpeakeasyBase));
export { MicerRequest };
export var Micer400ApplicationJsonErrorEnum;
(function (Micer400ApplicationJsonErrorEnum) {
    Micer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Micer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Micer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Micer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Micer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Micer400ApplicationJsonErrorEnum || (Micer400ApplicationJsonErrorEnum = {}));
export var Micer400ApplicationJsonErrorDescriptionEnum;
(function (Micer400ApplicationJsonErrorDescriptionEnum) {
    Micer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Micer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Micer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Micer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Micer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Micer400ApplicationJsonErrorDescriptionEnum || (Micer400ApplicationJsonErrorDescriptionEnum = {}));
var Micer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Micer400ApplicationJson, _super);
    function Micer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Micer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Micer400ApplicationJson.prototype, "errorDescription", void 0);
    return Micer400ApplicationJson;
}(SpeakeasyBase));
export { Micer400ApplicationJson };
export var Micer401ApplicationJsonErrorEnum;
(function (Micer401ApplicationJsonErrorEnum) {
    Micer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Micer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Micer401ApplicationJsonErrorEnum || (Micer401ApplicationJsonErrorEnum = {}));
export var Micer401ApplicationJsonErrorDescriptionEnum;
(function (Micer401ApplicationJsonErrorDescriptionEnum) {
    Micer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Micer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Micer401ApplicationJsonErrorDescriptionEnum || (Micer401ApplicationJsonErrorDescriptionEnum = {}));
var Micer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Micer401ApplicationJson, _super);
    function Micer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Micer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Micer401ApplicationJson.prototype, "errorDescription", void 0);
    return Micer401ApplicationJson;
}(SpeakeasyBase));
export { Micer401ApplicationJson };
export var Micer404ApplicationJsonErrorEnum;
(function (Micer404ApplicationJsonErrorEnum) {
    Micer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Micer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Micer404ApplicationJsonErrorEnum || (Micer404ApplicationJsonErrorEnum = {}));
export var Micer404ApplicationJsonErrorDescriptionEnum;
(function (Micer404ApplicationJsonErrorDescriptionEnum) {
    Micer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Micer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Micer404ApplicationJsonErrorDescriptionEnum || (Micer404ApplicationJsonErrorDescriptionEnum = {}));
var Micer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Micer404ApplicationJson, _super);
    function Micer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Micer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Micer404ApplicationJson.prototype, "errorDescription", void 0);
    return Micer404ApplicationJson;
}(SpeakeasyBase));
export { Micer404ApplicationJson };
export var Micer500ApplicationJsonErrorEnum;
(function (Micer500ApplicationJsonErrorEnum) {
    Micer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Micer500ApplicationJsonErrorEnum || (Micer500ApplicationJsonErrorEnum = {}));
export var Micer500ApplicationJsonErrorDescriptionEnum;
(function (Micer500ApplicationJsonErrorDescriptionEnum) {
    Micer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Micer500ApplicationJsonErrorDescriptionEnum || (Micer500ApplicationJsonErrorDescriptionEnum = {}));
var Micer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Micer500ApplicationJson, _super);
    function Micer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Micer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Micer500ApplicationJson.prototype, "errorDescription", void 0);
    return Micer500ApplicationJson;
}(SpeakeasyBase));
export { Micer500ApplicationJson };
export var Micer502ApplicationJsonErrorEnum;
(function (Micer502ApplicationJsonErrorEnum) {
    Micer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Micer502ApplicationJsonErrorEnum || (Micer502ApplicationJsonErrorEnum = {}));
export var Micer502ApplicationJsonErrorDescriptionEnum;
(function (Micer502ApplicationJsonErrorDescriptionEnum) {
    Micer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Micer502ApplicationJsonErrorDescriptionEnum || (Micer502ApplicationJsonErrorDescriptionEnum = {}));
var Micer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Micer502ApplicationJson, _super);
    function Micer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Micer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Micer502ApplicationJson.prototype, "errorDescription", void 0);
    return Micer502ApplicationJson;
}(SpeakeasyBase));
export { Micer502ApplicationJson };
export var Micer503ApplicationJsonErrorEnum;
(function (Micer503ApplicationJsonErrorEnum) {
    Micer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Micer503ApplicationJsonErrorEnum || (Micer503ApplicationJsonErrorEnum = {}));
export var Micer503ApplicationJsonErrorDescriptionEnum;
(function (Micer503ApplicationJsonErrorDescriptionEnum) {
    Micer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Micer503ApplicationJsonErrorDescriptionEnum || (Micer503ApplicationJsonErrorDescriptionEnum = {}));
var Micer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Micer503ApplicationJson, _super);
    function Micer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Micer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Micer503ApplicationJson.prototype, "errorDescription", void 0);
    return Micer503ApplicationJson;
}(SpeakeasyBase));
export { Micer503ApplicationJson };
export var Micer504ApplicationJsonErrorEnum;
(function (Micer504ApplicationJsonErrorEnum) {
    Micer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Micer504ApplicationJsonErrorEnum || (Micer504ApplicationJsonErrorEnum = {}));
export var Micer504ApplicationJsonErrorDescriptionEnum;
(function (Micer504ApplicationJsonErrorDescriptionEnum) {
    Micer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Micer504ApplicationJsonErrorDescriptionEnum || (Micer504ApplicationJsonErrorDescriptionEnum = {}));
var Micer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Micer504ApplicationJson, _super);
    function Micer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Micer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Micer504ApplicationJson.prototype, "errorDescription", void 0);
    return Micer504ApplicationJson;
}(SpeakeasyBase));
export { Micer504ApplicationJson };
var MicerResponse = /** @class */ (function (_super) {
    __extends(MicerResponse, _super);
    function MicerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MicerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MicerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Micer400ApplicationJson)
    ], MicerResponse.prototype, "micer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Micer401ApplicationJson)
    ], MicerResponse.prototype, "micer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Micer404ApplicationJson)
    ], MicerResponse.prototype, "micer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Micer500ApplicationJson)
    ], MicerResponse.prototype, "micer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Micer502ApplicationJson)
    ], MicerResponse.prototype, "micer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Micer503ApplicationJson)
    ], MicerResponse.prototype, "micer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Micer504ApplicationJson)
    ], MicerResponse.prototype, "micer504ApplicationJsonObject", void 0);
    return MicerResponse;
}(SpeakeasyBase));
export { MicerResponse };
