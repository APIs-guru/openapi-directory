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
var LocerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(LocerRequestBodyCertificateParameters, _super);
    function LocerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], LocerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        Metadata({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], LocerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        Metadata({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], LocerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return LocerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { LocerRequestBodyCertificateParameters };
export var LocerRequestBodyFormatEnum;
(function (LocerRequestBodyFormatEnum) {
    LocerRequestBodyFormatEnum["Pdf"] = "pdf";
})(LocerRequestBodyFormatEnum || (LocerRequestBodyFormatEnum = {}));
var LocerRequestBody = /** @class */ (function (_super) {
    __extends(LocerRequestBody, _super);
    function LocerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", LocerRequestBodyCertificateParameters)
    ], LocerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], LocerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], LocerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], LocerRequestBody.prototype, "txnId", void 0);
    return LocerRequestBody;
}(SpeakeasyBase));
export { LocerRequestBody };
var LocerSecurity = /** @class */ (function (_super) {
    __extends(LocerSecurity, _super);
    function LocerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LocerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], LocerSecurity.prototype, "clientId", void 0);
    return LocerSecurity;
}(SpeakeasyBase));
export { LocerSecurity };
var LocerRequest = /** @class */ (function (_super) {
    __extends(LocerRequest, _super);
    function LocerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", LocerRequestBody)
    ], LocerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LocerSecurity)
    ], LocerRequest.prototype, "security", void 0);
    return LocerRequest;
}(SpeakeasyBase));
export { LocerRequest };
export var Locer400ApplicationJsonErrorEnum;
(function (Locer400ApplicationJsonErrorEnum) {
    Locer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Locer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Locer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Locer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Locer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Locer400ApplicationJsonErrorEnum || (Locer400ApplicationJsonErrorEnum = {}));
export var Locer400ApplicationJsonErrorDescriptionEnum;
(function (Locer400ApplicationJsonErrorDescriptionEnum) {
    Locer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Locer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Locer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Locer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Locer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Locer400ApplicationJsonErrorDescriptionEnum || (Locer400ApplicationJsonErrorDescriptionEnum = {}));
var Locer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Locer400ApplicationJson, _super);
    function Locer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Locer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Locer400ApplicationJson.prototype, "errorDescription", void 0);
    return Locer400ApplicationJson;
}(SpeakeasyBase));
export { Locer400ApplicationJson };
export var Locer401ApplicationJsonErrorEnum;
(function (Locer401ApplicationJsonErrorEnum) {
    Locer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Locer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Locer401ApplicationJsonErrorEnum || (Locer401ApplicationJsonErrorEnum = {}));
export var Locer401ApplicationJsonErrorDescriptionEnum;
(function (Locer401ApplicationJsonErrorDescriptionEnum) {
    Locer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Locer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Locer401ApplicationJsonErrorDescriptionEnum || (Locer401ApplicationJsonErrorDescriptionEnum = {}));
var Locer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Locer401ApplicationJson, _super);
    function Locer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Locer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Locer401ApplicationJson.prototype, "errorDescription", void 0);
    return Locer401ApplicationJson;
}(SpeakeasyBase));
export { Locer401ApplicationJson };
export var Locer404ApplicationJsonErrorEnum;
(function (Locer404ApplicationJsonErrorEnum) {
    Locer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Locer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Locer404ApplicationJsonErrorEnum || (Locer404ApplicationJsonErrorEnum = {}));
export var Locer404ApplicationJsonErrorDescriptionEnum;
(function (Locer404ApplicationJsonErrorDescriptionEnum) {
    Locer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Locer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Locer404ApplicationJsonErrorDescriptionEnum || (Locer404ApplicationJsonErrorDescriptionEnum = {}));
var Locer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Locer404ApplicationJson, _super);
    function Locer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Locer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Locer404ApplicationJson.prototype, "errorDescription", void 0);
    return Locer404ApplicationJson;
}(SpeakeasyBase));
export { Locer404ApplicationJson };
export var Locer500ApplicationJsonErrorEnum;
(function (Locer500ApplicationJsonErrorEnum) {
    Locer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Locer500ApplicationJsonErrorEnum || (Locer500ApplicationJsonErrorEnum = {}));
export var Locer500ApplicationJsonErrorDescriptionEnum;
(function (Locer500ApplicationJsonErrorDescriptionEnum) {
    Locer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Locer500ApplicationJsonErrorDescriptionEnum || (Locer500ApplicationJsonErrorDescriptionEnum = {}));
var Locer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Locer500ApplicationJson, _super);
    function Locer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Locer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Locer500ApplicationJson.prototype, "errorDescription", void 0);
    return Locer500ApplicationJson;
}(SpeakeasyBase));
export { Locer500ApplicationJson };
export var Locer502ApplicationJsonErrorEnum;
(function (Locer502ApplicationJsonErrorEnum) {
    Locer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Locer502ApplicationJsonErrorEnum || (Locer502ApplicationJsonErrorEnum = {}));
export var Locer502ApplicationJsonErrorDescriptionEnum;
(function (Locer502ApplicationJsonErrorDescriptionEnum) {
    Locer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Locer502ApplicationJsonErrorDescriptionEnum || (Locer502ApplicationJsonErrorDescriptionEnum = {}));
var Locer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Locer502ApplicationJson, _super);
    function Locer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Locer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Locer502ApplicationJson.prototype, "errorDescription", void 0);
    return Locer502ApplicationJson;
}(SpeakeasyBase));
export { Locer502ApplicationJson };
export var Locer503ApplicationJsonErrorEnum;
(function (Locer503ApplicationJsonErrorEnum) {
    Locer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Locer503ApplicationJsonErrorEnum || (Locer503ApplicationJsonErrorEnum = {}));
export var Locer503ApplicationJsonErrorDescriptionEnum;
(function (Locer503ApplicationJsonErrorDescriptionEnum) {
    Locer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Locer503ApplicationJsonErrorDescriptionEnum || (Locer503ApplicationJsonErrorDescriptionEnum = {}));
var Locer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Locer503ApplicationJson, _super);
    function Locer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Locer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Locer503ApplicationJson.prototype, "errorDescription", void 0);
    return Locer503ApplicationJson;
}(SpeakeasyBase));
export { Locer503ApplicationJson };
export var Locer504ApplicationJsonErrorEnum;
(function (Locer504ApplicationJsonErrorEnum) {
    Locer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Locer504ApplicationJsonErrorEnum || (Locer504ApplicationJsonErrorEnum = {}));
export var Locer504ApplicationJsonErrorDescriptionEnum;
(function (Locer504ApplicationJsonErrorDescriptionEnum) {
    Locer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Locer504ApplicationJsonErrorDescriptionEnum || (Locer504ApplicationJsonErrorDescriptionEnum = {}));
var Locer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Locer504ApplicationJson, _super);
    function Locer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Locer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Locer504ApplicationJson.prototype, "errorDescription", void 0);
    return Locer504ApplicationJson;
}(SpeakeasyBase));
export { Locer504ApplicationJson };
var LocerResponse = /** @class */ (function (_super) {
    __extends(LocerResponse, _super);
    function LocerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LocerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LocerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Locer400ApplicationJson)
    ], LocerResponse.prototype, "locer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Locer401ApplicationJson)
    ], LocerResponse.prototype, "locer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Locer404ApplicationJson)
    ], LocerResponse.prototype, "locer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Locer500ApplicationJson)
    ], LocerResponse.prototype, "locer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Locer502ApplicationJson)
    ], LocerResponse.prototype, "locer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Locer503ApplicationJson)
    ], LocerResponse.prototype, "locer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Locer504ApplicationJson)
    ], LocerResponse.prototype, "locer504ApplicationJsonObject", void 0);
    return LocerResponse;
}(SpeakeasyBase));
export { LocerResponse };
