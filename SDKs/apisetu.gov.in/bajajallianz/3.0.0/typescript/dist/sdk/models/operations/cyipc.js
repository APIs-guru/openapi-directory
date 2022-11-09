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
var CyipcRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(CyipcRequestBodyCertificateParameters, _super);
    function CyipcRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], CyipcRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=policy_number" }),
        __metadata("design:type", String)
    ], CyipcRequestBodyCertificateParameters.prototype, "policyNumber", void 0);
    return CyipcRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { CyipcRequestBodyCertificateParameters };
export var CyipcRequestBodyFormatEnum;
(function (CyipcRequestBodyFormatEnum) {
    CyipcRequestBodyFormatEnum["Pdf"] = "pdf";
})(CyipcRequestBodyFormatEnum || (CyipcRequestBodyFormatEnum = {}));
var CyipcRequestBody = /** @class */ (function (_super) {
    __extends(CyipcRequestBody, _super);
    function CyipcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", CyipcRequestBodyCertificateParameters)
    ], CyipcRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], CyipcRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CyipcRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], CyipcRequestBody.prototype, "txnId", void 0);
    return CyipcRequestBody;
}(SpeakeasyBase));
export { CyipcRequestBody };
var CyipcSecurity = /** @class */ (function (_super) {
    __extends(CyipcSecurity, _super);
    function CyipcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CyipcSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], CyipcSecurity.prototype, "clientId", void 0);
    return CyipcSecurity;
}(SpeakeasyBase));
export { CyipcSecurity };
var CyipcRequest = /** @class */ (function (_super) {
    __extends(CyipcRequest, _super);
    function CyipcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CyipcRequestBody)
    ], CyipcRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CyipcSecurity)
    ], CyipcRequest.prototype, "security", void 0);
    return CyipcRequest;
}(SpeakeasyBase));
export { CyipcRequest };
export var Cyipc400ApplicationJsonErrorEnum;
(function (Cyipc400ApplicationJsonErrorEnum) {
    Cyipc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Cyipc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Cyipc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Cyipc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Cyipc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Cyipc400ApplicationJsonErrorEnum || (Cyipc400ApplicationJsonErrorEnum = {}));
export var Cyipc400ApplicationJsonErrorDescriptionEnum;
(function (Cyipc400ApplicationJsonErrorDescriptionEnum) {
    Cyipc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Cyipc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Cyipc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Cyipc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Cyipc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Cyipc400ApplicationJsonErrorDescriptionEnum || (Cyipc400ApplicationJsonErrorDescriptionEnum = {}));
var Cyipc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Cyipc400ApplicationJson, _super);
    function Cyipc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cyipc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cyipc400ApplicationJson.prototype, "errorDescription", void 0);
    return Cyipc400ApplicationJson;
}(SpeakeasyBase));
export { Cyipc400ApplicationJson };
export var Cyipc401ApplicationJsonErrorEnum;
(function (Cyipc401ApplicationJsonErrorEnum) {
    Cyipc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Cyipc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Cyipc401ApplicationJsonErrorEnum || (Cyipc401ApplicationJsonErrorEnum = {}));
export var Cyipc401ApplicationJsonErrorDescriptionEnum;
(function (Cyipc401ApplicationJsonErrorDescriptionEnum) {
    Cyipc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Cyipc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Cyipc401ApplicationJsonErrorDescriptionEnum || (Cyipc401ApplicationJsonErrorDescriptionEnum = {}));
var Cyipc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Cyipc401ApplicationJson, _super);
    function Cyipc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cyipc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cyipc401ApplicationJson.prototype, "errorDescription", void 0);
    return Cyipc401ApplicationJson;
}(SpeakeasyBase));
export { Cyipc401ApplicationJson };
export var Cyipc404ApplicationJsonErrorEnum;
(function (Cyipc404ApplicationJsonErrorEnum) {
    Cyipc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Cyipc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Cyipc404ApplicationJsonErrorEnum || (Cyipc404ApplicationJsonErrorEnum = {}));
export var Cyipc404ApplicationJsonErrorDescriptionEnum;
(function (Cyipc404ApplicationJsonErrorDescriptionEnum) {
    Cyipc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Cyipc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Cyipc404ApplicationJsonErrorDescriptionEnum || (Cyipc404ApplicationJsonErrorDescriptionEnum = {}));
var Cyipc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Cyipc404ApplicationJson, _super);
    function Cyipc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cyipc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cyipc404ApplicationJson.prototype, "errorDescription", void 0);
    return Cyipc404ApplicationJson;
}(SpeakeasyBase));
export { Cyipc404ApplicationJson };
export var Cyipc500ApplicationJsonErrorEnum;
(function (Cyipc500ApplicationJsonErrorEnum) {
    Cyipc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Cyipc500ApplicationJsonErrorEnum || (Cyipc500ApplicationJsonErrorEnum = {}));
export var Cyipc500ApplicationJsonErrorDescriptionEnum;
(function (Cyipc500ApplicationJsonErrorDescriptionEnum) {
    Cyipc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Cyipc500ApplicationJsonErrorDescriptionEnum || (Cyipc500ApplicationJsonErrorDescriptionEnum = {}));
var Cyipc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Cyipc500ApplicationJson, _super);
    function Cyipc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cyipc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cyipc500ApplicationJson.prototype, "errorDescription", void 0);
    return Cyipc500ApplicationJson;
}(SpeakeasyBase));
export { Cyipc500ApplicationJson };
export var Cyipc502ApplicationJsonErrorEnum;
(function (Cyipc502ApplicationJsonErrorEnum) {
    Cyipc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Cyipc502ApplicationJsonErrorEnum || (Cyipc502ApplicationJsonErrorEnum = {}));
export var Cyipc502ApplicationJsonErrorDescriptionEnum;
(function (Cyipc502ApplicationJsonErrorDescriptionEnum) {
    Cyipc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Cyipc502ApplicationJsonErrorDescriptionEnum || (Cyipc502ApplicationJsonErrorDescriptionEnum = {}));
var Cyipc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Cyipc502ApplicationJson, _super);
    function Cyipc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cyipc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cyipc502ApplicationJson.prototype, "errorDescription", void 0);
    return Cyipc502ApplicationJson;
}(SpeakeasyBase));
export { Cyipc502ApplicationJson };
export var Cyipc503ApplicationJsonErrorEnum;
(function (Cyipc503ApplicationJsonErrorEnum) {
    Cyipc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Cyipc503ApplicationJsonErrorEnum || (Cyipc503ApplicationJsonErrorEnum = {}));
export var Cyipc503ApplicationJsonErrorDescriptionEnum;
(function (Cyipc503ApplicationJsonErrorDescriptionEnum) {
    Cyipc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Cyipc503ApplicationJsonErrorDescriptionEnum || (Cyipc503ApplicationJsonErrorDescriptionEnum = {}));
var Cyipc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Cyipc503ApplicationJson, _super);
    function Cyipc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cyipc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cyipc503ApplicationJson.prototype, "errorDescription", void 0);
    return Cyipc503ApplicationJson;
}(SpeakeasyBase));
export { Cyipc503ApplicationJson };
export var Cyipc504ApplicationJsonErrorEnum;
(function (Cyipc504ApplicationJsonErrorEnum) {
    Cyipc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Cyipc504ApplicationJsonErrorEnum || (Cyipc504ApplicationJsonErrorEnum = {}));
export var Cyipc504ApplicationJsonErrorDescriptionEnum;
(function (Cyipc504ApplicationJsonErrorDescriptionEnum) {
    Cyipc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Cyipc504ApplicationJsonErrorDescriptionEnum || (Cyipc504ApplicationJsonErrorDescriptionEnum = {}));
var Cyipc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Cyipc504ApplicationJson, _super);
    function Cyipc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cyipc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cyipc504ApplicationJson.prototype, "errorDescription", void 0);
    return Cyipc504ApplicationJson;
}(SpeakeasyBase));
export { Cyipc504ApplicationJson };
var CyipcResponse = /** @class */ (function (_super) {
    __extends(CyipcResponse, _super);
    function CyipcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CyipcResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CyipcResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Cyipc400ApplicationJson)
    ], CyipcResponse.prototype, "cyipc400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Cyipc401ApplicationJson)
    ], CyipcResponse.prototype, "cyipc401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Cyipc404ApplicationJson)
    ], CyipcResponse.prototype, "cyipc404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Cyipc500ApplicationJson)
    ], CyipcResponse.prototype, "cyipc500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Cyipc502ApplicationJson)
    ], CyipcResponse.prototype, "cyipc502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Cyipc503ApplicationJson)
    ], CyipcResponse.prototype, "cyipc503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Cyipc504ApplicationJson)
    ], CyipcResponse.prototype, "cyipc504ApplicationJsonObject", void 0);
    return CyipcResponse;
}(SpeakeasyBase));
export { CyipcResponse };
