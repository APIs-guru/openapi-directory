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
var TetmsRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(TetmsRequestBodyCertificateParameters, _super);
    function TetmsRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], TetmsRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], TetmsRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        Metadata({ data: "json, name=year_month" }),
        __metadata("design:type", String)
    ], TetmsRequestBodyCertificateParameters.prototype, "yearMonth", void 0);
    return TetmsRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { TetmsRequestBodyCertificateParameters };
export var TetmsRequestBodyFormatEnum;
(function (TetmsRequestBodyFormatEnum) {
    TetmsRequestBodyFormatEnum["Pdf"] = "pdf";
})(TetmsRequestBodyFormatEnum || (TetmsRequestBodyFormatEnum = {}));
var TetmsRequestBody = /** @class */ (function (_super) {
    __extends(TetmsRequestBody, _super);
    function TetmsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", TetmsRequestBodyCertificateParameters)
    ], TetmsRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], TetmsRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], TetmsRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], TetmsRequestBody.prototype, "txnId", void 0);
    return TetmsRequestBody;
}(SpeakeasyBase));
export { TetmsRequestBody };
var TetmsSecurity = /** @class */ (function (_super) {
    __extends(TetmsSecurity, _super);
    function TetmsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], TetmsSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], TetmsSecurity.prototype, "clientId", void 0);
    return TetmsSecurity;
}(SpeakeasyBase));
export { TetmsSecurity };
var TetmsRequest = /** @class */ (function (_super) {
    __extends(TetmsRequest, _super);
    function TetmsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TetmsRequestBody)
    ], TetmsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TetmsSecurity)
    ], TetmsRequest.prototype, "security", void 0);
    return TetmsRequest;
}(SpeakeasyBase));
export { TetmsRequest };
export var Tetms400ApplicationJsonErrorEnum;
(function (Tetms400ApplicationJsonErrorEnum) {
    Tetms400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Tetms400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Tetms400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Tetms400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Tetms400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Tetms400ApplicationJsonErrorEnum || (Tetms400ApplicationJsonErrorEnum = {}));
export var Tetms400ApplicationJsonErrorDescriptionEnum;
(function (Tetms400ApplicationJsonErrorDescriptionEnum) {
    Tetms400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Tetms400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Tetms400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Tetms400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Tetms400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Tetms400ApplicationJsonErrorDescriptionEnum || (Tetms400ApplicationJsonErrorDescriptionEnum = {}));
var Tetms400ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetms400ApplicationJson, _super);
    function Tetms400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetms400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetms400ApplicationJson.prototype, "errorDescription", void 0);
    return Tetms400ApplicationJson;
}(SpeakeasyBase));
export { Tetms400ApplicationJson };
export var Tetms401ApplicationJsonErrorEnum;
(function (Tetms401ApplicationJsonErrorEnum) {
    Tetms401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Tetms401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Tetms401ApplicationJsonErrorEnum || (Tetms401ApplicationJsonErrorEnum = {}));
export var Tetms401ApplicationJsonErrorDescriptionEnum;
(function (Tetms401ApplicationJsonErrorDescriptionEnum) {
    Tetms401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Tetms401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Tetms401ApplicationJsonErrorDescriptionEnum || (Tetms401ApplicationJsonErrorDescriptionEnum = {}));
var Tetms401ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetms401ApplicationJson, _super);
    function Tetms401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetms401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetms401ApplicationJson.prototype, "errorDescription", void 0);
    return Tetms401ApplicationJson;
}(SpeakeasyBase));
export { Tetms401ApplicationJson };
export var Tetms404ApplicationJsonErrorEnum;
(function (Tetms404ApplicationJsonErrorEnum) {
    Tetms404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Tetms404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Tetms404ApplicationJsonErrorEnum || (Tetms404ApplicationJsonErrorEnum = {}));
export var Tetms404ApplicationJsonErrorDescriptionEnum;
(function (Tetms404ApplicationJsonErrorDescriptionEnum) {
    Tetms404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Tetms404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Tetms404ApplicationJsonErrorDescriptionEnum || (Tetms404ApplicationJsonErrorDescriptionEnum = {}));
var Tetms404ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetms404ApplicationJson, _super);
    function Tetms404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetms404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetms404ApplicationJson.prototype, "errorDescription", void 0);
    return Tetms404ApplicationJson;
}(SpeakeasyBase));
export { Tetms404ApplicationJson };
export var Tetms500ApplicationJsonErrorEnum;
(function (Tetms500ApplicationJsonErrorEnum) {
    Tetms500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Tetms500ApplicationJsonErrorEnum || (Tetms500ApplicationJsonErrorEnum = {}));
export var Tetms500ApplicationJsonErrorDescriptionEnum;
(function (Tetms500ApplicationJsonErrorDescriptionEnum) {
    Tetms500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Tetms500ApplicationJsonErrorDescriptionEnum || (Tetms500ApplicationJsonErrorDescriptionEnum = {}));
var Tetms500ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetms500ApplicationJson, _super);
    function Tetms500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetms500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetms500ApplicationJson.prototype, "errorDescription", void 0);
    return Tetms500ApplicationJson;
}(SpeakeasyBase));
export { Tetms500ApplicationJson };
export var Tetms502ApplicationJsonErrorEnum;
(function (Tetms502ApplicationJsonErrorEnum) {
    Tetms502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Tetms502ApplicationJsonErrorEnum || (Tetms502ApplicationJsonErrorEnum = {}));
export var Tetms502ApplicationJsonErrorDescriptionEnum;
(function (Tetms502ApplicationJsonErrorDescriptionEnum) {
    Tetms502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Tetms502ApplicationJsonErrorDescriptionEnum || (Tetms502ApplicationJsonErrorDescriptionEnum = {}));
var Tetms502ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetms502ApplicationJson, _super);
    function Tetms502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetms502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetms502ApplicationJson.prototype, "errorDescription", void 0);
    return Tetms502ApplicationJson;
}(SpeakeasyBase));
export { Tetms502ApplicationJson };
export var Tetms503ApplicationJsonErrorEnum;
(function (Tetms503ApplicationJsonErrorEnum) {
    Tetms503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Tetms503ApplicationJsonErrorEnum || (Tetms503ApplicationJsonErrorEnum = {}));
export var Tetms503ApplicationJsonErrorDescriptionEnum;
(function (Tetms503ApplicationJsonErrorDescriptionEnum) {
    Tetms503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Tetms503ApplicationJsonErrorDescriptionEnum || (Tetms503ApplicationJsonErrorDescriptionEnum = {}));
var Tetms503ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetms503ApplicationJson, _super);
    function Tetms503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetms503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetms503ApplicationJson.prototype, "errorDescription", void 0);
    return Tetms503ApplicationJson;
}(SpeakeasyBase));
export { Tetms503ApplicationJson };
export var Tetms504ApplicationJsonErrorEnum;
(function (Tetms504ApplicationJsonErrorEnum) {
    Tetms504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Tetms504ApplicationJsonErrorEnum || (Tetms504ApplicationJsonErrorEnum = {}));
export var Tetms504ApplicationJsonErrorDescriptionEnum;
(function (Tetms504ApplicationJsonErrorDescriptionEnum) {
    Tetms504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Tetms504ApplicationJsonErrorDescriptionEnum || (Tetms504ApplicationJsonErrorDescriptionEnum = {}));
var Tetms504ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetms504ApplicationJson, _super);
    function Tetms504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetms504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetms504ApplicationJson.prototype, "errorDescription", void 0);
    return Tetms504ApplicationJson;
}(SpeakeasyBase));
export { Tetms504ApplicationJson };
var TetmsResponse = /** @class */ (function (_super) {
    __extends(TetmsResponse, _super);
    function TetmsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TetmsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TetmsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tetms400ApplicationJson)
    ], TetmsResponse.prototype, "tetms400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tetms401ApplicationJson)
    ], TetmsResponse.prototype, "tetms401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tetms404ApplicationJson)
    ], TetmsResponse.prototype, "tetms404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tetms500ApplicationJson)
    ], TetmsResponse.prototype, "tetms500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tetms502ApplicationJson)
    ], TetmsResponse.prototype, "tetms502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tetms503ApplicationJson)
    ], TetmsResponse.prototype, "tetms503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Tetms504ApplicationJson)
    ], TetmsResponse.prototype, "tetms504ApplicationJsonObject", void 0);
    return TetmsResponse;
}(SpeakeasyBase));
export { TetmsResponse };
