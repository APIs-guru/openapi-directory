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
var HlipcRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(HlipcRequestBodyCertificateParameters, _super);
    function HlipcRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneno" }),
        __metadata("design:type", String)
    ], HlipcRequestBodyCertificateParameters.prototype, "phoneno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyno" }),
        __metadata("design:type", String)
    ], HlipcRequestBodyCertificateParameters.prototype, "policyno", void 0);
    return HlipcRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { HlipcRequestBodyCertificateParameters };
export var HlipcRequestBodyFormatEnum;
(function (HlipcRequestBodyFormatEnum) {
    HlipcRequestBodyFormatEnum["Pdf"] = "pdf";
})(HlipcRequestBodyFormatEnum || (HlipcRequestBodyFormatEnum = {}));
var HlipcRequestBody = /** @class */ (function (_super) {
    __extends(HlipcRequestBody, _super);
    function HlipcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", HlipcRequestBodyCertificateParameters)
    ], HlipcRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], HlipcRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], HlipcRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], HlipcRequestBody.prototype, "txnId", void 0);
    return HlipcRequestBody;
}(SpeakeasyBase));
export { HlipcRequestBody };
var HlipcSecurity = /** @class */ (function (_super) {
    __extends(HlipcSecurity, _super);
    function HlipcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], HlipcSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], HlipcSecurity.prototype, "clientId", void 0);
    return HlipcSecurity;
}(SpeakeasyBase));
export { HlipcSecurity };
export var Hlipc400ApplicationJsonErrorEnum;
(function (Hlipc400ApplicationJsonErrorEnum) {
    Hlipc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Hlipc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Hlipc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Hlipc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Hlipc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Hlipc400ApplicationJsonErrorEnum || (Hlipc400ApplicationJsonErrorEnum = {}));
export var Hlipc400ApplicationJsonErrorDescriptionEnum;
(function (Hlipc400ApplicationJsonErrorDescriptionEnum) {
    Hlipc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Hlipc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Hlipc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Hlipc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Hlipc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Hlipc400ApplicationJsonErrorDescriptionEnum || (Hlipc400ApplicationJsonErrorDescriptionEnum = {}));
var Hlipc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Hlipc400ApplicationJson, _super);
    function Hlipc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hlipc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hlipc400ApplicationJson.prototype, "errorDescription", void 0);
    return Hlipc400ApplicationJson;
}(SpeakeasyBase));
export { Hlipc400ApplicationJson };
export var Hlipc401ApplicationJsonErrorEnum;
(function (Hlipc401ApplicationJsonErrorEnum) {
    Hlipc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Hlipc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Hlipc401ApplicationJsonErrorEnum || (Hlipc401ApplicationJsonErrorEnum = {}));
export var Hlipc401ApplicationJsonErrorDescriptionEnum;
(function (Hlipc401ApplicationJsonErrorDescriptionEnum) {
    Hlipc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Hlipc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Hlipc401ApplicationJsonErrorDescriptionEnum || (Hlipc401ApplicationJsonErrorDescriptionEnum = {}));
var Hlipc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Hlipc401ApplicationJson, _super);
    function Hlipc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hlipc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hlipc401ApplicationJson.prototype, "errorDescription", void 0);
    return Hlipc401ApplicationJson;
}(SpeakeasyBase));
export { Hlipc401ApplicationJson };
export var Hlipc404ApplicationJsonErrorEnum;
(function (Hlipc404ApplicationJsonErrorEnum) {
    Hlipc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Hlipc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Hlipc404ApplicationJsonErrorEnum || (Hlipc404ApplicationJsonErrorEnum = {}));
export var Hlipc404ApplicationJsonErrorDescriptionEnum;
(function (Hlipc404ApplicationJsonErrorDescriptionEnum) {
    Hlipc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Hlipc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Hlipc404ApplicationJsonErrorDescriptionEnum || (Hlipc404ApplicationJsonErrorDescriptionEnum = {}));
var Hlipc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Hlipc404ApplicationJson, _super);
    function Hlipc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hlipc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hlipc404ApplicationJson.prototype, "errorDescription", void 0);
    return Hlipc404ApplicationJson;
}(SpeakeasyBase));
export { Hlipc404ApplicationJson };
export var Hlipc500ApplicationJsonErrorEnum;
(function (Hlipc500ApplicationJsonErrorEnum) {
    Hlipc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Hlipc500ApplicationJsonErrorEnum || (Hlipc500ApplicationJsonErrorEnum = {}));
export var Hlipc500ApplicationJsonErrorDescriptionEnum;
(function (Hlipc500ApplicationJsonErrorDescriptionEnum) {
    Hlipc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Hlipc500ApplicationJsonErrorDescriptionEnum || (Hlipc500ApplicationJsonErrorDescriptionEnum = {}));
var Hlipc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Hlipc500ApplicationJson, _super);
    function Hlipc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hlipc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hlipc500ApplicationJson.prototype, "errorDescription", void 0);
    return Hlipc500ApplicationJson;
}(SpeakeasyBase));
export { Hlipc500ApplicationJson };
export var Hlipc502ApplicationJsonErrorEnum;
(function (Hlipc502ApplicationJsonErrorEnum) {
    Hlipc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Hlipc502ApplicationJsonErrorEnum || (Hlipc502ApplicationJsonErrorEnum = {}));
export var Hlipc502ApplicationJsonErrorDescriptionEnum;
(function (Hlipc502ApplicationJsonErrorDescriptionEnum) {
    Hlipc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Hlipc502ApplicationJsonErrorDescriptionEnum || (Hlipc502ApplicationJsonErrorDescriptionEnum = {}));
var Hlipc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Hlipc502ApplicationJson, _super);
    function Hlipc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hlipc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hlipc502ApplicationJson.prototype, "errorDescription", void 0);
    return Hlipc502ApplicationJson;
}(SpeakeasyBase));
export { Hlipc502ApplicationJson };
export var Hlipc503ApplicationJsonErrorEnum;
(function (Hlipc503ApplicationJsonErrorEnum) {
    Hlipc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Hlipc503ApplicationJsonErrorEnum || (Hlipc503ApplicationJsonErrorEnum = {}));
export var Hlipc503ApplicationJsonErrorDescriptionEnum;
(function (Hlipc503ApplicationJsonErrorDescriptionEnum) {
    Hlipc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Hlipc503ApplicationJsonErrorDescriptionEnum || (Hlipc503ApplicationJsonErrorDescriptionEnum = {}));
var Hlipc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Hlipc503ApplicationJson, _super);
    function Hlipc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hlipc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hlipc503ApplicationJson.prototype, "errorDescription", void 0);
    return Hlipc503ApplicationJson;
}(SpeakeasyBase));
export { Hlipc503ApplicationJson };
export var Hlipc504ApplicationJsonErrorEnum;
(function (Hlipc504ApplicationJsonErrorEnum) {
    Hlipc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Hlipc504ApplicationJsonErrorEnum || (Hlipc504ApplicationJsonErrorEnum = {}));
export var Hlipc504ApplicationJsonErrorDescriptionEnum;
(function (Hlipc504ApplicationJsonErrorDescriptionEnum) {
    Hlipc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Hlipc504ApplicationJsonErrorDescriptionEnum || (Hlipc504ApplicationJsonErrorDescriptionEnum = {}));
var Hlipc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Hlipc504ApplicationJson, _super);
    function Hlipc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hlipc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hlipc504ApplicationJson.prototype, "errorDescription", void 0);
    return Hlipc504ApplicationJson;
}(SpeakeasyBase));
export { Hlipc504ApplicationJson };
var HlipcRequest = /** @class */ (function (_super) {
    __extends(HlipcRequest, _super);
    function HlipcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", HlipcRequestBody)
    ], HlipcRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HlipcSecurity)
    ], HlipcRequest.prototype, "security", void 0);
    return HlipcRequest;
}(SpeakeasyBase));
export { HlipcRequest };
var HlipcResponse = /** @class */ (function (_super) {
    __extends(HlipcResponse, _super);
    function HlipcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HlipcResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HlipcResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hlipc400ApplicationJson)
    ], HlipcResponse.prototype, "hlipc400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hlipc401ApplicationJson)
    ], HlipcResponse.prototype, "hlipc401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hlipc404ApplicationJson)
    ], HlipcResponse.prototype, "hlipc404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hlipc500ApplicationJson)
    ], HlipcResponse.prototype, "hlipc500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hlipc502ApplicationJson)
    ], HlipcResponse.prototype, "hlipc502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hlipc503ApplicationJson)
    ], HlipcResponse.prototype, "hlipc503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hlipc504ApplicationJson)
    ], HlipcResponse.prototype, "hlipc504ApplicationJsonObject", void 0);
    return HlipcResponse;
}(SpeakeasyBase));
export { HlipcResponse };
