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
var VrwmiRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(VrwmiRequestBodyCertificateParameters, _super);
    function VrwmiRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], VrwmiRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        Metadata({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], VrwmiRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return VrwmiRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { VrwmiRequestBodyCertificateParameters };
export var VrwmiRequestBodyFormatEnum;
(function (VrwmiRequestBodyFormatEnum) {
    VrwmiRequestBodyFormatEnum["Pdf"] = "pdf";
})(VrwmiRequestBodyFormatEnum || (VrwmiRequestBodyFormatEnum = {}));
var VrwmiRequestBody = /** @class */ (function (_super) {
    __extends(VrwmiRequestBody, _super);
    function VrwmiRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", VrwmiRequestBodyCertificateParameters)
    ], VrwmiRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], VrwmiRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], VrwmiRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], VrwmiRequestBody.prototype, "txnId", void 0);
    return VrwmiRequestBody;
}(SpeakeasyBase));
export { VrwmiRequestBody };
var VrwmiSecurity = /** @class */ (function (_super) {
    __extends(VrwmiSecurity, _super);
    function VrwmiSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], VrwmiSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], VrwmiSecurity.prototype, "clientId", void 0);
    return VrwmiSecurity;
}(SpeakeasyBase));
export { VrwmiSecurity };
var VrwmiRequest = /** @class */ (function (_super) {
    __extends(VrwmiRequest, _super);
    function VrwmiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", VrwmiRequestBody)
    ], VrwmiRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", VrwmiSecurity)
    ], VrwmiRequest.prototype, "security", void 0);
    return VrwmiRequest;
}(SpeakeasyBase));
export { VrwmiRequest };
export var Vrwmi400ApplicationJsonErrorEnum;
(function (Vrwmi400ApplicationJsonErrorEnum) {
    Vrwmi400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Vrwmi400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Vrwmi400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Vrwmi400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Vrwmi400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Vrwmi400ApplicationJsonErrorEnum || (Vrwmi400ApplicationJsonErrorEnum = {}));
export var Vrwmi400ApplicationJsonErrorDescriptionEnum;
(function (Vrwmi400ApplicationJsonErrorDescriptionEnum) {
    Vrwmi400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Vrwmi400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Vrwmi400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Vrwmi400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Vrwmi400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Vrwmi400ApplicationJsonErrorDescriptionEnum || (Vrwmi400ApplicationJsonErrorDescriptionEnum = {}));
var Vrwmi400ApplicationJson = /** @class */ (function (_super) {
    __extends(Vrwmi400ApplicationJson, _super);
    function Vrwmi400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vrwmi400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vrwmi400ApplicationJson.prototype, "errorDescription", void 0);
    return Vrwmi400ApplicationJson;
}(SpeakeasyBase));
export { Vrwmi400ApplicationJson };
export var Vrwmi401ApplicationJsonErrorEnum;
(function (Vrwmi401ApplicationJsonErrorEnum) {
    Vrwmi401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Vrwmi401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Vrwmi401ApplicationJsonErrorEnum || (Vrwmi401ApplicationJsonErrorEnum = {}));
export var Vrwmi401ApplicationJsonErrorDescriptionEnum;
(function (Vrwmi401ApplicationJsonErrorDescriptionEnum) {
    Vrwmi401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Vrwmi401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Vrwmi401ApplicationJsonErrorDescriptionEnum || (Vrwmi401ApplicationJsonErrorDescriptionEnum = {}));
var Vrwmi401ApplicationJson = /** @class */ (function (_super) {
    __extends(Vrwmi401ApplicationJson, _super);
    function Vrwmi401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vrwmi401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vrwmi401ApplicationJson.prototype, "errorDescription", void 0);
    return Vrwmi401ApplicationJson;
}(SpeakeasyBase));
export { Vrwmi401ApplicationJson };
export var Vrwmi404ApplicationJsonErrorEnum;
(function (Vrwmi404ApplicationJsonErrorEnum) {
    Vrwmi404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Vrwmi404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Vrwmi404ApplicationJsonErrorEnum || (Vrwmi404ApplicationJsonErrorEnum = {}));
export var Vrwmi404ApplicationJsonErrorDescriptionEnum;
(function (Vrwmi404ApplicationJsonErrorDescriptionEnum) {
    Vrwmi404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Vrwmi404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Vrwmi404ApplicationJsonErrorDescriptionEnum || (Vrwmi404ApplicationJsonErrorDescriptionEnum = {}));
var Vrwmi404ApplicationJson = /** @class */ (function (_super) {
    __extends(Vrwmi404ApplicationJson, _super);
    function Vrwmi404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vrwmi404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vrwmi404ApplicationJson.prototype, "errorDescription", void 0);
    return Vrwmi404ApplicationJson;
}(SpeakeasyBase));
export { Vrwmi404ApplicationJson };
export var Vrwmi500ApplicationJsonErrorEnum;
(function (Vrwmi500ApplicationJsonErrorEnum) {
    Vrwmi500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Vrwmi500ApplicationJsonErrorEnum || (Vrwmi500ApplicationJsonErrorEnum = {}));
export var Vrwmi500ApplicationJsonErrorDescriptionEnum;
(function (Vrwmi500ApplicationJsonErrorDescriptionEnum) {
    Vrwmi500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Vrwmi500ApplicationJsonErrorDescriptionEnum || (Vrwmi500ApplicationJsonErrorDescriptionEnum = {}));
var Vrwmi500ApplicationJson = /** @class */ (function (_super) {
    __extends(Vrwmi500ApplicationJson, _super);
    function Vrwmi500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vrwmi500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vrwmi500ApplicationJson.prototype, "errorDescription", void 0);
    return Vrwmi500ApplicationJson;
}(SpeakeasyBase));
export { Vrwmi500ApplicationJson };
export var Vrwmi502ApplicationJsonErrorEnum;
(function (Vrwmi502ApplicationJsonErrorEnum) {
    Vrwmi502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Vrwmi502ApplicationJsonErrorEnum || (Vrwmi502ApplicationJsonErrorEnum = {}));
export var Vrwmi502ApplicationJsonErrorDescriptionEnum;
(function (Vrwmi502ApplicationJsonErrorDescriptionEnum) {
    Vrwmi502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Vrwmi502ApplicationJsonErrorDescriptionEnum || (Vrwmi502ApplicationJsonErrorDescriptionEnum = {}));
var Vrwmi502ApplicationJson = /** @class */ (function (_super) {
    __extends(Vrwmi502ApplicationJson, _super);
    function Vrwmi502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vrwmi502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vrwmi502ApplicationJson.prototype, "errorDescription", void 0);
    return Vrwmi502ApplicationJson;
}(SpeakeasyBase));
export { Vrwmi502ApplicationJson };
export var Vrwmi503ApplicationJsonErrorEnum;
(function (Vrwmi503ApplicationJsonErrorEnum) {
    Vrwmi503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Vrwmi503ApplicationJsonErrorEnum || (Vrwmi503ApplicationJsonErrorEnum = {}));
export var Vrwmi503ApplicationJsonErrorDescriptionEnum;
(function (Vrwmi503ApplicationJsonErrorDescriptionEnum) {
    Vrwmi503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Vrwmi503ApplicationJsonErrorDescriptionEnum || (Vrwmi503ApplicationJsonErrorDescriptionEnum = {}));
var Vrwmi503ApplicationJson = /** @class */ (function (_super) {
    __extends(Vrwmi503ApplicationJson, _super);
    function Vrwmi503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vrwmi503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vrwmi503ApplicationJson.prototype, "errorDescription", void 0);
    return Vrwmi503ApplicationJson;
}(SpeakeasyBase));
export { Vrwmi503ApplicationJson };
export var Vrwmi504ApplicationJsonErrorEnum;
(function (Vrwmi504ApplicationJsonErrorEnum) {
    Vrwmi504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Vrwmi504ApplicationJsonErrorEnum || (Vrwmi504ApplicationJsonErrorEnum = {}));
export var Vrwmi504ApplicationJsonErrorDescriptionEnum;
(function (Vrwmi504ApplicationJsonErrorDescriptionEnum) {
    Vrwmi504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Vrwmi504ApplicationJsonErrorDescriptionEnum || (Vrwmi504ApplicationJsonErrorDescriptionEnum = {}));
var Vrwmi504ApplicationJson = /** @class */ (function (_super) {
    __extends(Vrwmi504ApplicationJson, _super);
    function Vrwmi504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vrwmi504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vrwmi504ApplicationJson.prototype, "errorDescription", void 0);
    return Vrwmi504ApplicationJson;
}(SpeakeasyBase));
export { Vrwmi504ApplicationJson };
var VrwmiResponse = /** @class */ (function (_super) {
    __extends(VrwmiResponse, _super);
    function VrwmiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], VrwmiResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], VrwmiResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Vrwmi400ApplicationJson)
    ], VrwmiResponse.prototype, "vrwmi400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Vrwmi401ApplicationJson)
    ], VrwmiResponse.prototype, "vrwmi401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Vrwmi404ApplicationJson)
    ], VrwmiResponse.prototype, "vrwmi404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Vrwmi500ApplicationJson)
    ], VrwmiResponse.prototype, "vrwmi500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Vrwmi502ApplicationJson)
    ], VrwmiResponse.prototype, "vrwmi502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Vrwmi503ApplicationJson)
    ], VrwmiResponse.prototype, "vrwmi503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Vrwmi504ApplicationJson)
    ], VrwmiResponse.prototype, "vrwmi504ApplicationJsonObject", void 0);
    return VrwmiResponse;
}(SpeakeasyBase));
export { VrwmiResponse };
