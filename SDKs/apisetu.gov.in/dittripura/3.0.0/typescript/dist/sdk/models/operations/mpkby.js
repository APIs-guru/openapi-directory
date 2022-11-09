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
var MpkbyRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(MpkbyRequestBodyCertificateParameters, _super);
    function MpkbyRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], MpkbyRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        Metadata({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], MpkbyRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return MpkbyRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { MpkbyRequestBodyCertificateParameters };
export var MpkbyRequestBodyFormatEnum;
(function (MpkbyRequestBodyFormatEnum) {
    MpkbyRequestBodyFormatEnum["Pdf"] = "pdf";
})(MpkbyRequestBodyFormatEnum || (MpkbyRequestBodyFormatEnum = {}));
var MpkbyRequestBody = /** @class */ (function (_super) {
    __extends(MpkbyRequestBody, _super);
    function MpkbyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", MpkbyRequestBodyCertificateParameters)
    ], MpkbyRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], MpkbyRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], MpkbyRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], MpkbyRequestBody.prototype, "txnId", void 0);
    return MpkbyRequestBody;
}(SpeakeasyBase));
export { MpkbyRequestBody };
var MpkbySecurity = /** @class */ (function (_super) {
    __extends(MpkbySecurity, _super);
    function MpkbySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MpkbySecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], MpkbySecurity.prototype, "clientId", void 0);
    return MpkbySecurity;
}(SpeakeasyBase));
export { MpkbySecurity };
var MpkbyRequest = /** @class */ (function (_super) {
    __extends(MpkbyRequest, _super);
    function MpkbyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", MpkbyRequestBody)
    ], MpkbyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MpkbySecurity)
    ], MpkbyRequest.prototype, "security", void 0);
    return MpkbyRequest;
}(SpeakeasyBase));
export { MpkbyRequest };
export var Mpkby400ApplicationJsonErrorEnum;
(function (Mpkby400ApplicationJsonErrorEnum) {
    Mpkby400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Mpkby400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Mpkby400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Mpkby400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Mpkby400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Mpkby400ApplicationJsonErrorEnum || (Mpkby400ApplicationJsonErrorEnum = {}));
export var Mpkby400ApplicationJsonErrorDescriptionEnum;
(function (Mpkby400ApplicationJsonErrorDescriptionEnum) {
    Mpkby400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Mpkby400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Mpkby400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Mpkby400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Mpkby400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Mpkby400ApplicationJsonErrorDescriptionEnum || (Mpkby400ApplicationJsonErrorDescriptionEnum = {}));
var Mpkby400ApplicationJson = /** @class */ (function (_super) {
    __extends(Mpkby400ApplicationJson, _super);
    function Mpkby400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mpkby400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mpkby400ApplicationJson.prototype, "errorDescription", void 0);
    return Mpkby400ApplicationJson;
}(SpeakeasyBase));
export { Mpkby400ApplicationJson };
export var Mpkby401ApplicationJsonErrorEnum;
(function (Mpkby401ApplicationJsonErrorEnum) {
    Mpkby401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Mpkby401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Mpkby401ApplicationJsonErrorEnum || (Mpkby401ApplicationJsonErrorEnum = {}));
export var Mpkby401ApplicationJsonErrorDescriptionEnum;
(function (Mpkby401ApplicationJsonErrorDescriptionEnum) {
    Mpkby401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Mpkby401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Mpkby401ApplicationJsonErrorDescriptionEnum || (Mpkby401ApplicationJsonErrorDescriptionEnum = {}));
var Mpkby401ApplicationJson = /** @class */ (function (_super) {
    __extends(Mpkby401ApplicationJson, _super);
    function Mpkby401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mpkby401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mpkby401ApplicationJson.prototype, "errorDescription", void 0);
    return Mpkby401ApplicationJson;
}(SpeakeasyBase));
export { Mpkby401ApplicationJson };
export var Mpkby404ApplicationJsonErrorEnum;
(function (Mpkby404ApplicationJsonErrorEnum) {
    Mpkby404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Mpkby404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Mpkby404ApplicationJsonErrorEnum || (Mpkby404ApplicationJsonErrorEnum = {}));
export var Mpkby404ApplicationJsonErrorDescriptionEnum;
(function (Mpkby404ApplicationJsonErrorDescriptionEnum) {
    Mpkby404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Mpkby404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Mpkby404ApplicationJsonErrorDescriptionEnum || (Mpkby404ApplicationJsonErrorDescriptionEnum = {}));
var Mpkby404ApplicationJson = /** @class */ (function (_super) {
    __extends(Mpkby404ApplicationJson, _super);
    function Mpkby404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mpkby404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mpkby404ApplicationJson.prototype, "errorDescription", void 0);
    return Mpkby404ApplicationJson;
}(SpeakeasyBase));
export { Mpkby404ApplicationJson };
export var Mpkby500ApplicationJsonErrorEnum;
(function (Mpkby500ApplicationJsonErrorEnum) {
    Mpkby500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Mpkby500ApplicationJsonErrorEnum || (Mpkby500ApplicationJsonErrorEnum = {}));
export var Mpkby500ApplicationJsonErrorDescriptionEnum;
(function (Mpkby500ApplicationJsonErrorDescriptionEnum) {
    Mpkby500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Mpkby500ApplicationJsonErrorDescriptionEnum || (Mpkby500ApplicationJsonErrorDescriptionEnum = {}));
var Mpkby500ApplicationJson = /** @class */ (function (_super) {
    __extends(Mpkby500ApplicationJson, _super);
    function Mpkby500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mpkby500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mpkby500ApplicationJson.prototype, "errorDescription", void 0);
    return Mpkby500ApplicationJson;
}(SpeakeasyBase));
export { Mpkby500ApplicationJson };
export var Mpkby502ApplicationJsonErrorEnum;
(function (Mpkby502ApplicationJsonErrorEnum) {
    Mpkby502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Mpkby502ApplicationJsonErrorEnum || (Mpkby502ApplicationJsonErrorEnum = {}));
export var Mpkby502ApplicationJsonErrorDescriptionEnum;
(function (Mpkby502ApplicationJsonErrorDescriptionEnum) {
    Mpkby502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Mpkby502ApplicationJsonErrorDescriptionEnum || (Mpkby502ApplicationJsonErrorDescriptionEnum = {}));
var Mpkby502ApplicationJson = /** @class */ (function (_super) {
    __extends(Mpkby502ApplicationJson, _super);
    function Mpkby502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mpkby502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mpkby502ApplicationJson.prototype, "errorDescription", void 0);
    return Mpkby502ApplicationJson;
}(SpeakeasyBase));
export { Mpkby502ApplicationJson };
export var Mpkby503ApplicationJsonErrorEnum;
(function (Mpkby503ApplicationJsonErrorEnum) {
    Mpkby503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Mpkby503ApplicationJsonErrorEnum || (Mpkby503ApplicationJsonErrorEnum = {}));
export var Mpkby503ApplicationJsonErrorDescriptionEnum;
(function (Mpkby503ApplicationJsonErrorDescriptionEnum) {
    Mpkby503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Mpkby503ApplicationJsonErrorDescriptionEnum || (Mpkby503ApplicationJsonErrorDescriptionEnum = {}));
var Mpkby503ApplicationJson = /** @class */ (function (_super) {
    __extends(Mpkby503ApplicationJson, _super);
    function Mpkby503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mpkby503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mpkby503ApplicationJson.prototype, "errorDescription", void 0);
    return Mpkby503ApplicationJson;
}(SpeakeasyBase));
export { Mpkby503ApplicationJson };
export var Mpkby504ApplicationJsonErrorEnum;
(function (Mpkby504ApplicationJsonErrorEnum) {
    Mpkby504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Mpkby504ApplicationJsonErrorEnum || (Mpkby504ApplicationJsonErrorEnum = {}));
export var Mpkby504ApplicationJsonErrorDescriptionEnum;
(function (Mpkby504ApplicationJsonErrorDescriptionEnum) {
    Mpkby504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Mpkby504ApplicationJsonErrorDescriptionEnum || (Mpkby504ApplicationJsonErrorDescriptionEnum = {}));
var Mpkby504ApplicationJson = /** @class */ (function (_super) {
    __extends(Mpkby504ApplicationJson, _super);
    function Mpkby504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mpkby504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mpkby504ApplicationJson.prototype, "errorDescription", void 0);
    return Mpkby504ApplicationJson;
}(SpeakeasyBase));
export { Mpkby504ApplicationJson };
var MpkbyResponse = /** @class */ (function (_super) {
    __extends(MpkbyResponse, _super);
    function MpkbyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MpkbyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MpkbyResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mpkby400ApplicationJson)
    ], MpkbyResponse.prototype, "mpkby400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mpkby401ApplicationJson)
    ], MpkbyResponse.prototype, "mpkby401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mpkby404ApplicationJson)
    ], MpkbyResponse.prototype, "mpkby404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mpkby500ApplicationJson)
    ], MpkbyResponse.prototype, "mpkby500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mpkby502ApplicationJson)
    ], MpkbyResponse.prototype, "mpkby502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mpkby503ApplicationJson)
    ], MpkbyResponse.prototype, "mpkby503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Mpkby504ApplicationJson)
    ], MpkbyResponse.prototype, "mpkby504ApplicationJsonObject", void 0);
    return MpkbyResponse;
}(SpeakeasyBase));
export { MpkbyResponse };
