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
var MripcRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(MripcRequestBodyCertificateParameters, _super);
    function MripcRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=INSCODE" }),
        __metadata("design:type", String)
    ], MripcRequestBodyCertificateParameters.prototype, "inscode", void 0);
    __decorate([
        Metadata({ data: "json, name=POLNO" }),
        __metadata("design:type", String)
    ], MripcRequestBodyCertificateParameters.prototype, "polno", void 0);
    __decorate([
        Metadata({ data: "json, name=STARTDT" }),
        __metadata("design:type", String)
    ], MripcRequestBodyCertificateParameters.prototype, "startdt", void 0);
    return MripcRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { MripcRequestBodyCertificateParameters };
export var MripcRequestBodyFormatEnum;
(function (MripcRequestBodyFormatEnum) {
    MripcRequestBodyFormatEnum["Pdf"] = "pdf";
})(MripcRequestBodyFormatEnum || (MripcRequestBodyFormatEnum = {}));
var MripcRequestBody = /** @class */ (function (_super) {
    __extends(MripcRequestBody, _super);
    function MripcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", MripcRequestBodyCertificateParameters)
    ], MripcRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], MripcRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], MripcRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], MripcRequestBody.prototype, "txnId", void 0);
    return MripcRequestBody;
}(SpeakeasyBase));
export { MripcRequestBody };
var MripcSecurity = /** @class */ (function (_super) {
    __extends(MripcSecurity, _super);
    function MripcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MripcSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], MripcSecurity.prototype, "clientId", void 0);
    return MripcSecurity;
}(SpeakeasyBase));
export { MripcSecurity };
var MripcRequest = /** @class */ (function (_super) {
    __extends(MripcRequest, _super);
    function MripcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", MripcRequestBody)
    ], MripcRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MripcSecurity)
    ], MripcRequest.prototype, "security", void 0);
    return MripcRequest;
}(SpeakeasyBase));
export { MripcRequest };
export var Mripc400ApplicationJsonErrorEnum;
(function (Mripc400ApplicationJsonErrorEnum) {
    Mripc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Mripc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Mripc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Mripc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Mripc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Mripc400ApplicationJsonErrorEnum || (Mripc400ApplicationJsonErrorEnum = {}));
export var Mripc400ApplicationJsonErrorDescriptionEnum;
(function (Mripc400ApplicationJsonErrorDescriptionEnum) {
    Mripc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Mripc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Mripc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Mripc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Mripc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Mripc400ApplicationJsonErrorDescriptionEnum || (Mripc400ApplicationJsonErrorDescriptionEnum = {}));
var Mripc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Mripc400ApplicationJson, _super);
    function Mripc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mripc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mripc400ApplicationJson.prototype, "errorDescription", void 0);
    return Mripc400ApplicationJson;
}(SpeakeasyBase));
export { Mripc400ApplicationJson };
export var Mripc401ApplicationJsonErrorEnum;
(function (Mripc401ApplicationJsonErrorEnum) {
    Mripc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Mripc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Mripc401ApplicationJsonErrorEnum || (Mripc401ApplicationJsonErrorEnum = {}));
export var Mripc401ApplicationJsonErrorDescriptionEnum;
(function (Mripc401ApplicationJsonErrorDescriptionEnum) {
    Mripc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Mripc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Mripc401ApplicationJsonErrorDescriptionEnum || (Mripc401ApplicationJsonErrorDescriptionEnum = {}));
var Mripc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Mripc401ApplicationJson, _super);
    function Mripc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mripc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mripc401ApplicationJson.prototype, "errorDescription", void 0);
    return Mripc401ApplicationJson;
}(SpeakeasyBase));
export { Mripc401ApplicationJson };
export var Mripc404ApplicationJsonErrorEnum;
(function (Mripc404ApplicationJsonErrorEnum) {
    Mripc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Mripc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Mripc404ApplicationJsonErrorEnum || (Mripc404ApplicationJsonErrorEnum = {}));
export var Mripc404ApplicationJsonErrorDescriptionEnum;
(function (Mripc404ApplicationJsonErrorDescriptionEnum) {
    Mripc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Mripc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Mripc404ApplicationJsonErrorDescriptionEnum || (Mripc404ApplicationJsonErrorDescriptionEnum = {}));
var Mripc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Mripc404ApplicationJson, _super);
    function Mripc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mripc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mripc404ApplicationJson.prototype, "errorDescription", void 0);
    return Mripc404ApplicationJson;
}(SpeakeasyBase));
export { Mripc404ApplicationJson };
export var Mripc500ApplicationJsonErrorEnum;
(function (Mripc500ApplicationJsonErrorEnum) {
    Mripc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Mripc500ApplicationJsonErrorEnum || (Mripc500ApplicationJsonErrorEnum = {}));
export var Mripc500ApplicationJsonErrorDescriptionEnum;
(function (Mripc500ApplicationJsonErrorDescriptionEnum) {
    Mripc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Mripc500ApplicationJsonErrorDescriptionEnum || (Mripc500ApplicationJsonErrorDescriptionEnum = {}));
var Mripc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Mripc500ApplicationJson, _super);
    function Mripc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mripc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mripc500ApplicationJson.prototype, "errorDescription", void 0);
    return Mripc500ApplicationJson;
}(SpeakeasyBase));
export { Mripc500ApplicationJson };
export var Mripc502ApplicationJsonErrorEnum;
(function (Mripc502ApplicationJsonErrorEnum) {
    Mripc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Mripc502ApplicationJsonErrorEnum || (Mripc502ApplicationJsonErrorEnum = {}));
export var Mripc502ApplicationJsonErrorDescriptionEnum;
(function (Mripc502ApplicationJsonErrorDescriptionEnum) {
    Mripc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Mripc502ApplicationJsonErrorDescriptionEnum || (Mripc502ApplicationJsonErrorDescriptionEnum = {}));
var Mripc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Mripc502ApplicationJson, _super);
    function Mripc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mripc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mripc502ApplicationJson.prototype, "errorDescription", void 0);
    return Mripc502ApplicationJson;
}(SpeakeasyBase));
export { Mripc502ApplicationJson };
export var Mripc503ApplicationJsonErrorEnum;
(function (Mripc503ApplicationJsonErrorEnum) {
    Mripc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Mripc503ApplicationJsonErrorEnum || (Mripc503ApplicationJsonErrorEnum = {}));
export var Mripc503ApplicationJsonErrorDescriptionEnum;
(function (Mripc503ApplicationJsonErrorDescriptionEnum) {
    Mripc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Mripc503ApplicationJsonErrorDescriptionEnum || (Mripc503ApplicationJsonErrorDescriptionEnum = {}));
var Mripc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Mripc503ApplicationJson, _super);
    function Mripc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mripc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mripc503ApplicationJson.prototype, "errorDescription", void 0);
    return Mripc503ApplicationJson;
}(SpeakeasyBase));
export { Mripc503ApplicationJson };
export var Mripc504ApplicationJsonErrorEnum;
(function (Mripc504ApplicationJsonErrorEnum) {
    Mripc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Mripc504ApplicationJsonErrorEnum || (Mripc504ApplicationJsonErrorEnum = {}));
export var Mripc504ApplicationJsonErrorDescriptionEnum;
(function (Mripc504ApplicationJsonErrorDescriptionEnum) {
    Mripc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Mripc504ApplicationJsonErrorDescriptionEnum || (Mripc504ApplicationJsonErrorDescriptionEnum = {}));
var Mripc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Mripc504ApplicationJson, _super);
    function Mripc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mripc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mripc504ApplicationJson.prototype, "errorDescription", void 0);
    return Mripc504ApplicationJson;
}(SpeakeasyBase));
export { Mripc504ApplicationJson };
var MripcResponse = /** @class */ (function (_super) {
    __extends(MripcResponse, _super);
    function MripcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MripcResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MripcResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mripc400ApplicationJson)
    ], MripcResponse.prototype, "mripc400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mripc401ApplicationJson)
    ], MripcResponse.prototype, "mripc401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mripc404ApplicationJson)
    ], MripcResponse.prototype, "mripc404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mripc500ApplicationJson)
    ], MripcResponse.prototype, "mripc500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mripc502ApplicationJson)
    ], MripcResponse.prototype, "mripc502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mripc503ApplicationJson)
    ], MripcResponse.prototype, "mripc503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mripc504ApplicationJson)
    ], MripcResponse.prototype, "mripc504ApplicationJsonObject", void 0);
    return MripcResponse;
}(SpeakeasyBase));
export { MripcResponse };
