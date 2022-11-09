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
var MncerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(MncerRequestBodyCertificateParameters, _super);
    function MncerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], MncerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        Metadata({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], MncerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        Metadata({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], MncerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return MncerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { MncerRequestBodyCertificateParameters };
export var MncerRequestBodyFormatEnum;
(function (MncerRequestBodyFormatEnum) {
    MncerRequestBodyFormatEnum["Pdf"] = "pdf";
})(MncerRequestBodyFormatEnum || (MncerRequestBodyFormatEnum = {}));
var MncerRequestBody = /** @class */ (function (_super) {
    __extends(MncerRequestBody, _super);
    function MncerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", MncerRequestBodyCertificateParameters)
    ], MncerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], MncerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], MncerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], MncerRequestBody.prototype, "txnId", void 0);
    return MncerRequestBody;
}(SpeakeasyBase));
export { MncerRequestBody };
var MncerSecurity = /** @class */ (function (_super) {
    __extends(MncerSecurity, _super);
    function MncerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MncerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], MncerSecurity.prototype, "clientId", void 0);
    return MncerSecurity;
}(SpeakeasyBase));
export { MncerSecurity };
var MncerRequest = /** @class */ (function (_super) {
    __extends(MncerRequest, _super);
    function MncerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", MncerRequestBody)
    ], MncerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MncerSecurity)
    ], MncerRequest.prototype, "security", void 0);
    return MncerRequest;
}(SpeakeasyBase));
export { MncerRequest };
export var Mncer400ApplicationJsonErrorEnum;
(function (Mncer400ApplicationJsonErrorEnum) {
    Mncer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Mncer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Mncer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Mncer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Mncer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Mncer400ApplicationJsonErrorEnum || (Mncer400ApplicationJsonErrorEnum = {}));
export var Mncer400ApplicationJsonErrorDescriptionEnum;
(function (Mncer400ApplicationJsonErrorDescriptionEnum) {
    Mncer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Mncer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Mncer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Mncer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Mncer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Mncer400ApplicationJsonErrorDescriptionEnum || (Mncer400ApplicationJsonErrorDescriptionEnum = {}));
var Mncer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Mncer400ApplicationJson, _super);
    function Mncer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mncer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mncer400ApplicationJson.prototype, "errorDescription", void 0);
    return Mncer400ApplicationJson;
}(SpeakeasyBase));
export { Mncer400ApplicationJson };
export var Mncer401ApplicationJsonErrorEnum;
(function (Mncer401ApplicationJsonErrorEnum) {
    Mncer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Mncer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Mncer401ApplicationJsonErrorEnum || (Mncer401ApplicationJsonErrorEnum = {}));
export var Mncer401ApplicationJsonErrorDescriptionEnum;
(function (Mncer401ApplicationJsonErrorDescriptionEnum) {
    Mncer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Mncer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Mncer401ApplicationJsonErrorDescriptionEnum || (Mncer401ApplicationJsonErrorDescriptionEnum = {}));
var Mncer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Mncer401ApplicationJson, _super);
    function Mncer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mncer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mncer401ApplicationJson.prototype, "errorDescription", void 0);
    return Mncer401ApplicationJson;
}(SpeakeasyBase));
export { Mncer401ApplicationJson };
export var Mncer404ApplicationJsonErrorEnum;
(function (Mncer404ApplicationJsonErrorEnum) {
    Mncer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Mncer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Mncer404ApplicationJsonErrorEnum || (Mncer404ApplicationJsonErrorEnum = {}));
export var Mncer404ApplicationJsonErrorDescriptionEnum;
(function (Mncer404ApplicationJsonErrorDescriptionEnum) {
    Mncer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Mncer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Mncer404ApplicationJsonErrorDescriptionEnum || (Mncer404ApplicationJsonErrorDescriptionEnum = {}));
var Mncer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Mncer404ApplicationJson, _super);
    function Mncer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mncer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mncer404ApplicationJson.prototype, "errorDescription", void 0);
    return Mncer404ApplicationJson;
}(SpeakeasyBase));
export { Mncer404ApplicationJson };
export var Mncer500ApplicationJsonErrorEnum;
(function (Mncer500ApplicationJsonErrorEnum) {
    Mncer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Mncer500ApplicationJsonErrorEnum || (Mncer500ApplicationJsonErrorEnum = {}));
export var Mncer500ApplicationJsonErrorDescriptionEnum;
(function (Mncer500ApplicationJsonErrorDescriptionEnum) {
    Mncer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Mncer500ApplicationJsonErrorDescriptionEnum || (Mncer500ApplicationJsonErrorDescriptionEnum = {}));
var Mncer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Mncer500ApplicationJson, _super);
    function Mncer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mncer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mncer500ApplicationJson.prototype, "errorDescription", void 0);
    return Mncer500ApplicationJson;
}(SpeakeasyBase));
export { Mncer500ApplicationJson };
export var Mncer502ApplicationJsonErrorEnum;
(function (Mncer502ApplicationJsonErrorEnum) {
    Mncer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Mncer502ApplicationJsonErrorEnum || (Mncer502ApplicationJsonErrorEnum = {}));
export var Mncer502ApplicationJsonErrorDescriptionEnum;
(function (Mncer502ApplicationJsonErrorDescriptionEnum) {
    Mncer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Mncer502ApplicationJsonErrorDescriptionEnum || (Mncer502ApplicationJsonErrorDescriptionEnum = {}));
var Mncer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Mncer502ApplicationJson, _super);
    function Mncer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mncer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mncer502ApplicationJson.prototype, "errorDescription", void 0);
    return Mncer502ApplicationJson;
}(SpeakeasyBase));
export { Mncer502ApplicationJson };
export var Mncer503ApplicationJsonErrorEnum;
(function (Mncer503ApplicationJsonErrorEnum) {
    Mncer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Mncer503ApplicationJsonErrorEnum || (Mncer503ApplicationJsonErrorEnum = {}));
export var Mncer503ApplicationJsonErrorDescriptionEnum;
(function (Mncer503ApplicationJsonErrorDescriptionEnum) {
    Mncer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Mncer503ApplicationJsonErrorDescriptionEnum || (Mncer503ApplicationJsonErrorDescriptionEnum = {}));
var Mncer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Mncer503ApplicationJson, _super);
    function Mncer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mncer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mncer503ApplicationJson.prototype, "errorDescription", void 0);
    return Mncer503ApplicationJson;
}(SpeakeasyBase));
export { Mncer503ApplicationJson };
export var Mncer504ApplicationJsonErrorEnum;
(function (Mncer504ApplicationJsonErrorEnum) {
    Mncer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Mncer504ApplicationJsonErrorEnum || (Mncer504ApplicationJsonErrorEnum = {}));
export var Mncer504ApplicationJsonErrorDescriptionEnum;
(function (Mncer504ApplicationJsonErrorDescriptionEnum) {
    Mncer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Mncer504ApplicationJsonErrorDescriptionEnum || (Mncer504ApplicationJsonErrorDescriptionEnum = {}));
var Mncer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Mncer504ApplicationJson, _super);
    function Mncer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mncer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mncer504ApplicationJson.prototype, "errorDescription", void 0);
    return Mncer504ApplicationJson;
}(SpeakeasyBase));
export { Mncer504ApplicationJson };
var MncerResponse = /** @class */ (function (_super) {
    __extends(MncerResponse, _super);
    function MncerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MncerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MncerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mncer400ApplicationJson)
    ], MncerResponse.prototype, "mncer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mncer401ApplicationJson)
    ], MncerResponse.prototype, "mncer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mncer404ApplicationJson)
    ], MncerResponse.prototype, "mncer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mncer500ApplicationJson)
    ], MncerResponse.prototype, "mncer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mncer502ApplicationJson)
    ], MncerResponse.prototype, "mncer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mncer503ApplicationJson)
    ], MncerResponse.prototype, "mncer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mncer504ApplicationJson)
    ], MncerResponse.prototype, "mncer504ApplicationJsonObject", void 0);
    return MncerResponse;
}(SpeakeasyBase));
export { MncerResponse };
