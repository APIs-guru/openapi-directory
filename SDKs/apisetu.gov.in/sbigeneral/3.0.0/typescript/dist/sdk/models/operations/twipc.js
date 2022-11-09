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
var TwipcRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(TwipcRequestBodyCertificateParameters, _super);
    function TwipcRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], TwipcRequestBodyCertificateParameters.prototype, "udf1", void 0);
    __decorate([
        Metadata({ data: "json, name=UDF2" }),
        __metadata("design:type", String)
    ], TwipcRequestBodyCertificateParameters.prototype, "udf2", void 0);
    return TwipcRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { TwipcRequestBodyCertificateParameters };
export var TwipcRequestBodyFormatEnum;
(function (TwipcRequestBodyFormatEnum) {
    TwipcRequestBodyFormatEnum["Pdf"] = "pdf";
})(TwipcRequestBodyFormatEnum || (TwipcRequestBodyFormatEnum = {}));
var TwipcRequestBody = /** @class */ (function (_super) {
    __extends(TwipcRequestBody, _super);
    function TwipcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", TwipcRequestBodyCertificateParameters)
    ], TwipcRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], TwipcRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], TwipcRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], TwipcRequestBody.prototype, "txnId", void 0);
    return TwipcRequestBody;
}(SpeakeasyBase));
export { TwipcRequestBody };
var TwipcSecurity = /** @class */ (function (_super) {
    __extends(TwipcSecurity, _super);
    function TwipcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], TwipcSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], TwipcSecurity.prototype, "clientId", void 0);
    return TwipcSecurity;
}(SpeakeasyBase));
export { TwipcSecurity };
var TwipcRequest = /** @class */ (function (_super) {
    __extends(TwipcRequest, _super);
    function TwipcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TwipcRequestBody)
    ], TwipcRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TwipcSecurity)
    ], TwipcRequest.prototype, "security", void 0);
    return TwipcRequest;
}(SpeakeasyBase));
export { TwipcRequest };
export var Twipc400ApplicationJsonErrorEnum;
(function (Twipc400ApplicationJsonErrorEnum) {
    Twipc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Twipc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Twipc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Twipc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Twipc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Twipc400ApplicationJsonErrorEnum || (Twipc400ApplicationJsonErrorEnum = {}));
export var Twipc400ApplicationJsonErrorDescriptionEnum;
(function (Twipc400ApplicationJsonErrorDescriptionEnum) {
    Twipc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Twipc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Twipc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Twipc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Twipc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Twipc400ApplicationJsonErrorDescriptionEnum || (Twipc400ApplicationJsonErrorDescriptionEnum = {}));
var Twipc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Twipc400ApplicationJson, _super);
    function Twipc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Twipc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Twipc400ApplicationJson.prototype, "errorDescription", void 0);
    return Twipc400ApplicationJson;
}(SpeakeasyBase));
export { Twipc400ApplicationJson };
export var Twipc401ApplicationJsonErrorEnum;
(function (Twipc401ApplicationJsonErrorEnum) {
    Twipc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Twipc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Twipc401ApplicationJsonErrorEnum || (Twipc401ApplicationJsonErrorEnum = {}));
export var Twipc401ApplicationJsonErrorDescriptionEnum;
(function (Twipc401ApplicationJsonErrorDescriptionEnum) {
    Twipc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Twipc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Twipc401ApplicationJsonErrorDescriptionEnum || (Twipc401ApplicationJsonErrorDescriptionEnum = {}));
var Twipc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Twipc401ApplicationJson, _super);
    function Twipc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Twipc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Twipc401ApplicationJson.prototype, "errorDescription", void 0);
    return Twipc401ApplicationJson;
}(SpeakeasyBase));
export { Twipc401ApplicationJson };
export var Twipc404ApplicationJsonErrorEnum;
(function (Twipc404ApplicationJsonErrorEnum) {
    Twipc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Twipc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Twipc404ApplicationJsonErrorEnum || (Twipc404ApplicationJsonErrorEnum = {}));
export var Twipc404ApplicationJsonErrorDescriptionEnum;
(function (Twipc404ApplicationJsonErrorDescriptionEnum) {
    Twipc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Twipc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Twipc404ApplicationJsonErrorDescriptionEnum || (Twipc404ApplicationJsonErrorDescriptionEnum = {}));
var Twipc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Twipc404ApplicationJson, _super);
    function Twipc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Twipc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Twipc404ApplicationJson.prototype, "errorDescription", void 0);
    return Twipc404ApplicationJson;
}(SpeakeasyBase));
export { Twipc404ApplicationJson };
export var Twipc500ApplicationJsonErrorEnum;
(function (Twipc500ApplicationJsonErrorEnum) {
    Twipc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Twipc500ApplicationJsonErrorEnum || (Twipc500ApplicationJsonErrorEnum = {}));
export var Twipc500ApplicationJsonErrorDescriptionEnum;
(function (Twipc500ApplicationJsonErrorDescriptionEnum) {
    Twipc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Twipc500ApplicationJsonErrorDescriptionEnum || (Twipc500ApplicationJsonErrorDescriptionEnum = {}));
var Twipc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Twipc500ApplicationJson, _super);
    function Twipc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Twipc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Twipc500ApplicationJson.prototype, "errorDescription", void 0);
    return Twipc500ApplicationJson;
}(SpeakeasyBase));
export { Twipc500ApplicationJson };
export var Twipc502ApplicationJsonErrorEnum;
(function (Twipc502ApplicationJsonErrorEnum) {
    Twipc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Twipc502ApplicationJsonErrorEnum || (Twipc502ApplicationJsonErrorEnum = {}));
export var Twipc502ApplicationJsonErrorDescriptionEnum;
(function (Twipc502ApplicationJsonErrorDescriptionEnum) {
    Twipc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Twipc502ApplicationJsonErrorDescriptionEnum || (Twipc502ApplicationJsonErrorDescriptionEnum = {}));
var Twipc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Twipc502ApplicationJson, _super);
    function Twipc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Twipc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Twipc502ApplicationJson.prototype, "errorDescription", void 0);
    return Twipc502ApplicationJson;
}(SpeakeasyBase));
export { Twipc502ApplicationJson };
export var Twipc503ApplicationJsonErrorEnum;
(function (Twipc503ApplicationJsonErrorEnum) {
    Twipc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Twipc503ApplicationJsonErrorEnum || (Twipc503ApplicationJsonErrorEnum = {}));
export var Twipc503ApplicationJsonErrorDescriptionEnum;
(function (Twipc503ApplicationJsonErrorDescriptionEnum) {
    Twipc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Twipc503ApplicationJsonErrorDescriptionEnum || (Twipc503ApplicationJsonErrorDescriptionEnum = {}));
var Twipc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Twipc503ApplicationJson, _super);
    function Twipc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Twipc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Twipc503ApplicationJson.prototype, "errorDescription", void 0);
    return Twipc503ApplicationJson;
}(SpeakeasyBase));
export { Twipc503ApplicationJson };
export var Twipc504ApplicationJsonErrorEnum;
(function (Twipc504ApplicationJsonErrorEnum) {
    Twipc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Twipc504ApplicationJsonErrorEnum || (Twipc504ApplicationJsonErrorEnum = {}));
export var Twipc504ApplicationJsonErrorDescriptionEnum;
(function (Twipc504ApplicationJsonErrorDescriptionEnum) {
    Twipc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Twipc504ApplicationJsonErrorDescriptionEnum || (Twipc504ApplicationJsonErrorDescriptionEnum = {}));
var Twipc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Twipc504ApplicationJson, _super);
    function Twipc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Twipc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Twipc504ApplicationJson.prototype, "errorDescription", void 0);
    return Twipc504ApplicationJson;
}(SpeakeasyBase));
export { Twipc504ApplicationJson };
var TwipcResponse = /** @class */ (function (_super) {
    __extends(TwipcResponse, _super);
    function TwipcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TwipcResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TwipcResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Twipc400ApplicationJson)
    ], TwipcResponse.prototype, "twipc400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Twipc401ApplicationJson)
    ], TwipcResponse.prototype, "twipc401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Twipc404ApplicationJson)
    ], TwipcResponse.prototype, "twipc404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Twipc500ApplicationJson)
    ], TwipcResponse.prototype, "twipc500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Twipc502ApplicationJson)
    ], TwipcResponse.prototype, "twipc502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Twipc503ApplicationJson)
    ], TwipcResponse.prototype, "twipc503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Twipc504ApplicationJson)
    ], TwipcResponse.prototype, "twipc504ApplicationJsonObject", void 0);
    return TwipcResponse;
}(SpeakeasyBase));
export { TwipcResponse };
