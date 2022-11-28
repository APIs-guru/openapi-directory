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
var PripcRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PripcRequestBodyCertificateParameters, _super);
    function PripcRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=INSCODE" }),
        __metadata("design:type", String)
    ], PripcRequestBodyCertificateParameters.prototype, "inscode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=POLNO" }),
        __metadata("design:type", String)
    ], PripcRequestBodyCertificateParameters.prototype, "polno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=STARTDT" }),
        __metadata("design:type", String)
    ], PripcRequestBodyCertificateParameters.prototype, "startdt", void 0);
    return PripcRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { PripcRequestBodyCertificateParameters };
export var PripcRequestBodyFormatEnum;
(function (PripcRequestBodyFormatEnum) {
    PripcRequestBodyFormatEnum["Pdf"] = "pdf";
})(PripcRequestBodyFormatEnum || (PripcRequestBodyFormatEnum = {}));
var PripcRequestBody = /** @class */ (function (_super) {
    __extends(PripcRequestBody, _super);
    function PripcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", PripcRequestBodyCertificateParameters)
    ], PripcRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], PripcRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PripcRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], PripcRequestBody.prototype, "txnId", void 0);
    return PripcRequestBody;
}(SpeakeasyBase));
export { PripcRequestBody };
var PripcSecurity = /** @class */ (function (_super) {
    __extends(PripcSecurity, _super);
    function PripcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PripcSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PripcSecurity.prototype, "clientId", void 0);
    return PripcSecurity;
}(SpeakeasyBase));
export { PripcSecurity };
export var Pripc400ApplicationJsonErrorEnum;
(function (Pripc400ApplicationJsonErrorEnum) {
    Pripc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Pripc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Pripc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Pripc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Pripc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Pripc400ApplicationJsonErrorEnum || (Pripc400ApplicationJsonErrorEnum = {}));
export var Pripc400ApplicationJsonErrorDescriptionEnum;
(function (Pripc400ApplicationJsonErrorDescriptionEnum) {
    Pripc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Pripc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Pripc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Pripc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Pripc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Pripc400ApplicationJsonErrorDescriptionEnum || (Pripc400ApplicationJsonErrorDescriptionEnum = {}));
var Pripc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Pripc400ApplicationJson, _super);
    function Pripc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pripc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pripc400ApplicationJson.prototype, "errorDescription", void 0);
    return Pripc400ApplicationJson;
}(SpeakeasyBase));
export { Pripc400ApplicationJson };
export var Pripc401ApplicationJsonErrorEnum;
(function (Pripc401ApplicationJsonErrorEnum) {
    Pripc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Pripc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Pripc401ApplicationJsonErrorEnum || (Pripc401ApplicationJsonErrorEnum = {}));
export var Pripc401ApplicationJsonErrorDescriptionEnum;
(function (Pripc401ApplicationJsonErrorDescriptionEnum) {
    Pripc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Pripc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Pripc401ApplicationJsonErrorDescriptionEnum || (Pripc401ApplicationJsonErrorDescriptionEnum = {}));
var Pripc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Pripc401ApplicationJson, _super);
    function Pripc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pripc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pripc401ApplicationJson.prototype, "errorDescription", void 0);
    return Pripc401ApplicationJson;
}(SpeakeasyBase));
export { Pripc401ApplicationJson };
export var Pripc404ApplicationJsonErrorEnum;
(function (Pripc404ApplicationJsonErrorEnum) {
    Pripc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Pripc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Pripc404ApplicationJsonErrorEnum || (Pripc404ApplicationJsonErrorEnum = {}));
export var Pripc404ApplicationJsonErrorDescriptionEnum;
(function (Pripc404ApplicationJsonErrorDescriptionEnum) {
    Pripc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Pripc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Pripc404ApplicationJsonErrorDescriptionEnum || (Pripc404ApplicationJsonErrorDescriptionEnum = {}));
var Pripc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Pripc404ApplicationJson, _super);
    function Pripc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pripc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pripc404ApplicationJson.prototype, "errorDescription", void 0);
    return Pripc404ApplicationJson;
}(SpeakeasyBase));
export { Pripc404ApplicationJson };
export var Pripc500ApplicationJsonErrorEnum;
(function (Pripc500ApplicationJsonErrorEnum) {
    Pripc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Pripc500ApplicationJsonErrorEnum || (Pripc500ApplicationJsonErrorEnum = {}));
export var Pripc500ApplicationJsonErrorDescriptionEnum;
(function (Pripc500ApplicationJsonErrorDescriptionEnum) {
    Pripc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Pripc500ApplicationJsonErrorDescriptionEnum || (Pripc500ApplicationJsonErrorDescriptionEnum = {}));
var Pripc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Pripc500ApplicationJson, _super);
    function Pripc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pripc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pripc500ApplicationJson.prototype, "errorDescription", void 0);
    return Pripc500ApplicationJson;
}(SpeakeasyBase));
export { Pripc500ApplicationJson };
export var Pripc502ApplicationJsonErrorEnum;
(function (Pripc502ApplicationJsonErrorEnum) {
    Pripc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Pripc502ApplicationJsonErrorEnum || (Pripc502ApplicationJsonErrorEnum = {}));
export var Pripc502ApplicationJsonErrorDescriptionEnum;
(function (Pripc502ApplicationJsonErrorDescriptionEnum) {
    Pripc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Pripc502ApplicationJsonErrorDescriptionEnum || (Pripc502ApplicationJsonErrorDescriptionEnum = {}));
var Pripc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Pripc502ApplicationJson, _super);
    function Pripc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pripc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pripc502ApplicationJson.prototype, "errorDescription", void 0);
    return Pripc502ApplicationJson;
}(SpeakeasyBase));
export { Pripc502ApplicationJson };
export var Pripc503ApplicationJsonErrorEnum;
(function (Pripc503ApplicationJsonErrorEnum) {
    Pripc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Pripc503ApplicationJsonErrorEnum || (Pripc503ApplicationJsonErrorEnum = {}));
export var Pripc503ApplicationJsonErrorDescriptionEnum;
(function (Pripc503ApplicationJsonErrorDescriptionEnum) {
    Pripc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Pripc503ApplicationJsonErrorDescriptionEnum || (Pripc503ApplicationJsonErrorDescriptionEnum = {}));
var Pripc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Pripc503ApplicationJson, _super);
    function Pripc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pripc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pripc503ApplicationJson.prototype, "errorDescription", void 0);
    return Pripc503ApplicationJson;
}(SpeakeasyBase));
export { Pripc503ApplicationJson };
export var Pripc504ApplicationJsonErrorEnum;
(function (Pripc504ApplicationJsonErrorEnum) {
    Pripc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Pripc504ApplicationJsonErrorEnum || (Pripc504ApplicationJsonErrorEnum = {}));
export var Pripc504ApplicationJsonErrorDescriptionEnum;
(function (Pripc504ApplicationJsonErrorDescriptionEnum) {
    Pripc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Pripc504ApplicationJsonErrorDescriptionEnum || (Pripc504ApplicationJsonErrorDescriptionEnum = {}));
var Pripc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Pripc504ApplicationJson, _super);
    function Pripc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pripc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pripc504ApplicationJson.prototype, "errorDescription", void 0);
    return Pripc504ApplicationJson;
}(SpeakeasyBase));
export { Pripc504ApplicationJson };
var PripcRequest = /** @class */ (function (_super) {
    __extends(PripcRequest, _super);
    function PripcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PripcRequestBody)
    ], PripcRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PripcSecurity)
    ], PripcRequest.prototype, "security", void 0);
    return PripcRequest;
}(SpeakeasyBase));
export { PripcRequest };
var PripcResponse = /** @class */ (function (_super) {
    __extends(PripcResponse, _super);
    function PripcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PripcResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PripcResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Pripc400ApplicationJson)
    ], PripcResponse.prototype, "pripc400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Pripc401ApplicationJson)
    ], PripcResponse.prototype, "pripc401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Pripc404ApplicationJson)
    ], PripcResponse.prototype, "pripc404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Pripc500ApplicationJson)
    ], PripcResponse.prototype, "pripc500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Pripc502ApplicationJson)
    ], PripcResponse.prototype, "pripc502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Pripc503ApplicationJson)
    ], PripcResponse.prototype, "pripc503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Pripc504ApplicationJson)
    ], PripcResponse.prototype, "pripc504ApplicationJsonObject", void 0);
    return PripcResponse;
}(SpeakeasyBase));
export { PripcResponse };
