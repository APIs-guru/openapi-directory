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
var TripcRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(TripcRequestBodyCertificateParameters, _super);
    function TripcRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], TripcRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=policy_number" }),
        __metadata("design:type", String)
    ], TripcRequestBodyCertificateParameters.prototype, "policyNumber", void 0);
    return TripcRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { TripcRequestBodyCertificateParameters };
export var TripcRequestBodyFormatEnum;
(function (TripcRequestBodyFormatEnum) {
    TripcRequestBodyFormatEnum["Pdf"] = "pdf";
})(TripcRequestBodyFormatEnum || (TripcRequestBodyFormatEnum = {}));
var TripcRequestBody = /** @class */ (function (_super) {
    __extends(TripcRequestBody, _super);
    function TripcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", TripcRequestBodyCertificateParameters)
    ], TripcRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], TripcRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], TripcRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], TripcRequestBody.prototype, "txnId", void 0);
    return TripcRequestBody;
}(SpeakeasyBase));
export { TripcRequestBody };
var TripcSecurity = /** @class */ (function (_super) {
    __extends(TripcSecurity, _super);
    function TripcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], TripcSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], TripcSecurity.prototype, "clientId", void 0);
    return TripcSecurity;
}(SpeakeasyBase));
export { TripcSecurity };
var TripcRequest = /** @class */ (function (_super) {
    __extends(TripcRequest, _super);
    function TripcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TripcRequestBody)
    ], TripcRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TripcSecurity)
    ], TripcRequest.prototype, "security", void 0);
    return TripcRequest;
}(SpeakeasyBase));
export { TripcRequest };
export var Tripc400ApplicationJsonErrorEnum;
(function (Tripc400ApplicationJsonErrorEnum) {
    Tripc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Tripc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Tripc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Tripc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Tripc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Tripc400ApplicationJsonErrorEnum || (Tripc400ApplicationJsonErrorEnum = {}));
export var Tripc400ApplicationJsonErrorDescriptionEnum;
(function (Tripc400ApplicationJsonErrorDescriptionEnum) {
    Tripc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Tripc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Tripc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Tripc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Tripc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Tripc400ApplicationJsonErrorDescriptionEnum || (Tripc400ApplicationJsonErrorDescriptionEnum = {}));
var Tripc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Tripc400ApplicationJson, _super);
    function Tripc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tripc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tripc400ApplicationJson.prototype, "errorDescription", void 0);
    return Tripc400ApplicationJson;
}(SpeakeasyBase));
export { Tripc400ApplicationJson };
export var Tripc401ApplicationJsonErrorEnum;
(function (Tripc401ApplicationJsonErrorEnum) {
    Tripc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Tripc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Tripc401ApplicationJsonErrorEnum || (Tripc401ApplicationJsonErrorEnum = {}));
export var Tripc401ApplicationJsonErrorDescriptionEnum;
(function (Tripc401ApplicationJsonErrorDescriptionEnum) {
    Tripc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Tripc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Tripc401ApplicationJsonErrorDescriptionEnum || (Tripc401ApplicationJsonErrorDescriptionEnum = {}));
var Tripc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Tripc401ApplicationJson, _super);
    function Tripc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tripc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tripc401ApplicationJson.prototype, "errorDescription", void 0);
    return Tripc401ApplicationJson;
}(SpeakeasyBase));
export { Tripc401ApplicationJson };
export var Tripc404ApplicationJsonErrorEnum;
(function (Tripc404ApplicationJsonErrorEnum) {
    Tripc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Tripc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Tripc404ApplicationJsonErrorEnum || (Tripc404ApplicationJsonErrorEnum = {}));
export var Tripc404ApplicationJsonErrorDescriptionEnum;
(function (Tripc404ApplicationJsonErrorDescriptionEnum) {
    Tripc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Tripc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Tripc404ApplicationJsonErrorDescriptionEnum || (Tripc404ApplicationJsonErrorDescriptionEnum = {}));
var Tripc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Tripc404ApplicationJson, _super);
    function Tripc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tripc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tripc404ApplicationJson.prototype, "errorDescription", void 0);
    return Tripc404ApplicationJson;
}(SpeakeasyBase));
export { Tripc404ApplicationJson };
export var Tripc500ApplicationJsonErrorEnum;
(function (Tripc500ApplicationJsonErrorEnum) {
    Tripc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Tripc500ApplicationJsonErrorEnum || (Tripc500ApplicationJsonErrorEnum = {}));
export var Tripc500ApplicationJsonErrorDescriptionEnum;
(function (Tripc500ApplicationJsonErrorDescriptionEnum) {
    Tripc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Tripc500ApplicationJsonErrorDescriptionEnum || (Tripc500ApplicationJsonErrorDescriptionEnum = {}));
var Tripc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Tripc500ApplicationJson, _super);
    function Tripc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tripc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tripc500ApplicationJson.prototype, "errorDescription", void 0);
    return Tripc500ApplicationJson;
}(SpeakeasyBase));
export { Tripc500ApplicationJson };
export var Tripc502ApplicationJsonErrorEnum;
(function (Tripc502ApplicationJsonErrorEnum) {
    Tripc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Tripc502ApplicationJsonErrorEnum || (Tripc502ApplicationJsonErrorEnum = {}));
export var Tripc502ApplicationJsonErrorDescriptionEnum;
(function (Tripc502ApplicationJsonErrorDescriptionEnum) {
    Tripc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Tripc502ApplicationJsonErrorDescriptionEnum || (Tripc502ApplicationJsonErrorDescriptionEnum = {}));
var Tripc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Tripc502ApplicationJson, _super);
    function Tripc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tripc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tripc502ApplicationJson.prototype, "errorDescription", void 0);
    return Tripc502ApplicationJson;
}(SpeakeasyBase));
export { Tripc502ApplicationJson };
export var Tripc503ApplicationJsonErrorEnum;
(function (Tripc503ApplicationJsonErrorEnum) {
    Tripc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Tripc503ApplicationJsonErrorEnum || (Tripc503ApplicationJsonErrorEnum = {}));
export var Tripc503ApplicationJsonErrorDescriptionEnum;
(function (Tripc503ApplicationJsonErrorDescriptionEnum) {
    Tripc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Tripc503ApplicationJsonErrorDescriptionEnum || (Tripc503ApplicationJsonErrorDescriptionEnum = {}));
var Tripc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Tripc503ApplicationJson, _super);
    function Tripc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tripc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tripc503ApplicationJson.prototype, "errorDescription", void 0);
    return Tripc503ApplicationJson;
}(SpeakeasyBase));
export { Tripc503ApplicationJson };
export var Tripc504ApplicationJsonErrorEnum;
(function (Tripc504ApplicationJsonErrorEnum) {
    Tripc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Tripc504ApplicationJsonErrorEnum || (Tripc504ApplicationJsonErrorEnum = {}));
export var Tripc504ApplicationJsonErrorDescriptionEnum;
(function (Tripc504ApplicationJsonErrorDescriptionEnum) {
    Tripc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Tripc504ApplicationJsonErrorDescriptionEnum || (Tripc504ApplicationJsonErrorDescriptionEnum = {}));
var Tripc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Tripc504ApplicationJson, _super);
    function Tripc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tripc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tripc504ApplicationJson.prototype, "errorDescription", void 0);
    return Tripc504ApplicationJson;
}(SpeakeasyBase));
export { Tripc504ApplicationJson };
var TripcResponse = /** @class */ (function (_super) {
    __extends(TripcResponse, _super);
    function TripcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TripcResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TripcResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tripc400ApplicationJson)
    ], TripcResponse.prototype, "tripc400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tripc401ApplicationJson)
    ], TripcResponse.prototype, "tripc401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tripc404ApplicationJson)
    ], TripcResponse.prototype, "tripc404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tripc500ApplicationJson)
    ], TripcResponse.prototype, "tripc500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tripc502ApplicationJson)
    ], TripcResponse.prototype, "tripc502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tripc503ApplicationJson)
    ], TripcResponse.prototype, "tripc503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tripc504ApplicationJson)
    ], TripcResponse.prototype, "tripc504ApplicationJsonObject", void 0);
    return TripcResponse;
}(SpeakeasyBase));
export { TripcResponse };
