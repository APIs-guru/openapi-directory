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
var HmipcRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(HmipcRequestBodyCertificateParameters, _super);
    function HmipcRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InsuredDob" }),
        __metadata("design:type", String)
    ], HmipcRequestBodyCertificateParameters.prototype, "insuredDob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyNo" }),
        __metadata("design:type", String)
    ], HmipcRequestBodyCertificateParameters.prototype, "policyNo", void 0);
    return HmipcRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { HmipcRequestBodyCertificateParameters };
export var HmipcRequestBodyFormatEnum;
(function (HmipcRequestBodyFormatEnum) {
    HmipcRequestBodyFormatEnum["Pdf"] = "pdf";
})(HmipcRequestBodyFormatEnum || (HmipcRequestBodyFormatEnum = {}));
var HmipcRequestBody = /** @class */ (function (_super) {
    __extends(HmipcRequestBody, _super);
    function HmipcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", HmipcRequestBodyCertificateParameters)
    ], HmipcRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], HmipcRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], HmipcRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], HmipcRequestBody.prototype, "txnId", void 0);
    return HmipcRequestBody;
}(SpeakeasyBase));
export { HmipcRequestBody };
var HmipcSecurity = /** @class */ (function (_super) {
    __extends(HmipcSecurity, _super);
    function HmipcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], HmipcSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], HmipcSecurity.prototype, "clientId", void 0);
    return HmipcSecurity;
}(SpeakeasyBase));
export { HmipcSecurity };
export var Hmipc400ApplicationJsonErrorEnum;
(function (Hmipc400ApplicationJsonErrorEnum) {
    Hmipc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Hmipc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Hmipc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Hmipc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Hmipc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Hmipc400ApplicationJsonErrorEnum || (Hmipc400ApplicationJsonErrorEnum = {}));
export var Hmipc400ApplicationJsonErrorDescriptionEnum;
(function (Hmipc400ApplicationJsonErrorDescriptionEnum) {
    Hmipc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Hmipc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Hmipc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Hmipc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Hmipc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Hmipc400ApplicationJsonErrorDescriptionEnum || (Hmipc400ApplicationJsonErrorDescriptionEnum = {}));
var Hmipc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Hmipc400ApplicationJson, _super);
    function Hmipc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hmipc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hmipc400ApplicationJson.prototype, "errorDescription", void 0);
    return Hmipc400ApplicationJson;
}(SpeakeasyBase));
export { Hmipc400ApplicationJson };
export var Hmipc401ApplicationJsonErrorEnum;
(function (Hmipc401ApplicationJsonErrorEnum) {
    Hmipc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Hmipc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Hmipc401ApplicationJsonErrorEnum || (Hmipc401ApplicationJsonErrorEnum = {}));
export var Hmipc401ApplicationJsonErrorDescriptionEnum;
(function (Hmipc401ApplicationJsonErrorDescriptionEnum) {
    Hmipc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Hmipc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Hmipc401ApplicationJsonErrorDescriptionEnum || (Hmipc401ApplicationJsonErrorDescriptionEnum = {}));
var Hmipc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Hmipc401ApplicationJson, _super);
    function Hmipc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hmipc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hmipc401ApplicationJson.prototype, "errorDescription", void 0);
    return Hmipc401ApplicationJson;
}(SpeakeasyBase));
export { Hmipc401ApplicationJson };
export var Hmipc404ApplicationJsonErrorEnum;
(function (Hmipc404ApplicationJsonErrorEnum) {
    Hmipc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Hmipc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Hmipc404ApplicationJsonErrorEnum || (Hmipc404ApplicationJsonErrorEnum = {}));
export var Hmipc404ApplicationJsonErrorDescriptionEnum;
(function (Hmipc404ApplicationJsonErrorDescriptionEnum) {
    Hmipc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Hmipc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Hmipc404ApplicationJsonErrorDescriptionEnum || (Hmipc404ApplicationJsonErrorDescriptionEnum = {}));
var Hmipc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Hmipc404ApplicationJson, _super);
    function Hmipc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hmipc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hmipc404ApplicationJson.prototype, "errorDescription", void 0);
    return Hmipc404ApplicationJson;
}(SpeakeasyBase));
export { Hmipc404ApplicationJson };
export var Hmipc500ApplicationJsonErrorEnum;
(function (Hmipc500ApplicationJsonErrorEnum) {
    Hmipc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Hmipc500ApplicationJsonErrorEnum || (Hmipc500ApplicationJsonErrorEnum = {}));
export var Hmipc500ApplicationJsonErrorDescriptionEnum;
(function (Hmipc500ApplicationJsonErrorDescriptionEnum) {
    Hmipc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Hmipc500ApplicationJsonErrorDescriptionEnum || (Hmipc500ApplicationJsonErrorDescriptionEnum = {}));
var Hmipc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Hmipc500ApplicationJson, _super);
    function Hmipc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hmipc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hmipc500ApplicationJson.prototype, "errorDescription", void 0);
    return Hmipc500ApplicationJson;
}(SpeakeasyBase));
export { Hmipc500ApplicationJson };
export var Hmipc502ApplicationJsonErrorEnum;
(function (Hmipc502ApplicationJsonErrorEnum) {
    Hmipc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Hmipc502ApplicationJsonErrorEnum || (Hmipc502ApplicationJsonErrorEnum = {}));
export var Hmipc502ApplicationJsonErrorDescriptionEnum;
(function (Hmipc502ApplicationJsonErrorDescriptionEnum) {
    Hmipc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Hmipc502ApplicationJsonErrorDescriptionEnum || (Hmipc502ApplicationJsonErrorDescriptionEnum = {}));
var Hmipc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Hmipc502ApplicationJson, _super);
    function Hmipc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hmipc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hmipc502ApplicationJson.prototype, "errorDescription", void 0);
    return Hmipc502ApplicationJson;
}(SpeakeasyBase));
export { Hmipc502ApplicationJson };
export var Hmipc503ApplicationJsonErrorEnum;
(function (Hmipc503ApplicationJsonErrorEnum) {
    Hmipc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Hmipc503ApplicationJsonErrorEnum || (Hmipc503ApplicationJsonErrorEnum = {}));
export var Hmipc503ApplicationJsonErrorDescriptionEnum;
(function (Hmipc503ApplicationJsonErrorDescriptionEnum) {
    Hmipc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Hmipc503ApplicationJsonErrorDescriptionEnum || (Hmipc503ApplicationJsonErrorDescriptionEnum = {}));
var Hmipc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Hmipc503ApplicationJson, _super);
    function Hmipc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hmipc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hmipc503ApplicationJson.prototype, "errorDescription", void 0);
    return Hmipc503ApplicationJson;
}(SpeakeasyBase));
export { Hmipc503ApplicationJson };
export var Hmipc504ApplicationJsonErrorEnum;
(function (Hmipc504ApplicationJsonErrorEnum) {
    Hmipc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Hmipc504ApplicationJsonErrorEnum || (Hmipc504ApplicationJsonErrorEnum = {}));
export var Hmipc504ApplicationJsonErrorDescriptionEnum;
(function (Hmipc504ApplicationJsonErrorDescriptionEnum) {
    Hmipc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Hmipc504ApplicationJsonErrorDescriptionEnum || (Hmipc504ApplicationJsonErrorDescriptionEnum = {}));
var Hmipc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Hmipc504ApplicationJson, _super);
    function Hmipc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hmipc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hmipc504ApplicationJson.prototype, "errorDescription", void 0);
    return Hmipc504ApplicationJson;
}(SpeakeasyBase));
export { Hmipc504ApplicationJson };
var HmipcRequest = /** @class */ (function (_super) {
    __extends(HmipcRequest, _super);
    function HmipcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", HmipcRequestBody)
    ], HmipcRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HmipcSecurity)
    ], HmipcRequest.prototype, "security", void 0);
    return HmipcRequest;
}(SpeakeasyBase));
export { HmipcRequest };
var HmipcResponse = /** @class */ (function (_super) {
    __extends(HmipcResponse, _super);
    function HmipcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HmipcResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HmipcResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hmipc400ApplicationJson)
    ], HmipcResponse.prototype, "hmipc400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hmipc401ApplicationJson)
    ], HmipcResponse.prototype, "hmipc401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hmipc404ApplicationJson)
    ], HmipcResponse.prototype, "hmipc404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hmipc500ApplicationJson)
    ], HmipcResponse.prototype, "hmipc500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hmipc502ApplicationJson)
    ], HmipcResponse.prototype, "hmipc502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hmipc503ApplicationJson)
    ], HmipcResponse.prototype, "hmipc503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hmipc504ApplicationJson)
    ], HmipcResponse.prototype, "hmipc504ApplicationJsonObject", void 0);
    return HmipcResponse;
}(SpeakeasyBase));
export { HmipcResponse };
