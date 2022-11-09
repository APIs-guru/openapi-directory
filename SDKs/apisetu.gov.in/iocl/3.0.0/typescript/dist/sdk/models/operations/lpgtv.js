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
var LpgtvRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(LpgtvRequestBodyCertificateParameters, _super);
    function LpgtvRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], LpgtvRequestBodyCertificateParameters.prototype, "uid", void 0);
    return LpgtvRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { LpgtvRequestBodyCertificateParameters };
export var LpgtvRequestBodyFormatEnum;
(function (LpgtvRequestBodyFormatEnum) {
    LpgtvRequestBodyFormatEnum["Pdf"] = "pdf";
})(LpgtvRequestBodyFormatEnum || (LpgtvRequestBodyFormatEnum = {}));
var LpgtvRequestBody = /** @class */ (function (_super) {
    __extends(LpgtvRequestBody, _super);
    function LpgtvRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", LpgtvRequestBodyCertificateParameters)
    ], LpgtvRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], LpgtvRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], LpgtvRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], LpgtvRequestBody.prototype, "txnId", void 0);
    return LpgtvRequestBody;
}(SpeakeasyBase));
export { LpgtvRequestBody };
var LpgtvSecurity = /** @class */ (function (_super) {
    __extends(LpgtvSecurity, _super);
    function LpgtvSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LpgtvSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], LpgtvSecurity.prototype, "clientId", void 0);
    return LpgtvSecurity;
}(SpeakeasyBase));
export { LpgtvSecurity };
var LpgtvRequest = /** @class */ (function (_super) {
    __extends(LpgtvRequest, _super);
    function LpgtvRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", LpgtvRequestBody)
    ], LpgtvRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LpgtvSecurity)
    ], LpgtvRequest.prototype, "security", void 0);
    return LpgtvRequest;
}(SpeakeasyBase));
export { LpgtvRequest };
export var Lpgtv400ApplicationJsonErrorEnum;
(function (Lpgtv400ApplicationJsonErrorEnum) {
    Lpgtv400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Lpgtv400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Lpgtv400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Lpgtv400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Lpgtv400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Lpgtv400ApplicationJsonErrorEnum || (Lpgtv400ApplicationJsonErrorEnum = {}));
export var Lpgtv400ApplicationJsonErrorDescriptionEnum;
(function (Lpgtv400ApplicationJsonErrorDescriptionEnum) {
    Lpgtv400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Lpgtv400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Lpgtv400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Lpgtv400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Lpgtv400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Lpgtv400ApplicationJsonErrorDescriptionEnum || (Lpgtv400ApplicationJsonErrorDescriptionEnum = {}));
var Lpgtv400ApplicationJson = /** @class */ (function (_super) {
    __extends(Lpgtv400ApplicationJson, _super);
    function Lpgtv400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lpgtv400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lpgtv400ApplicationJson.prototype, "errorDescription", void 0);
    return Lpgtv400ApplicationJson;
}(SpeakeasyBase));
export { Lpgtv400ApplicationJson };
export var Lpgtv401ApplicationJsonErrorEnum;
(function (Lpgtv401ApplicationJsonErrorEnum) {
    Lpgtv401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Lpgtv401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Lpgtv401ApplicationJsonErrorEnum || (Lpgtv401ApplicationJsonErrorEnum = {}));
export var Lpgtv401ApplicationJsonErrorDescriptionEnum;
(function (Lpgtv401ApplicationJsonErrorDescriptionEnum) {
    Lpgtv401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Lpgtv401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Lpgtv401ApplicationJsonErrorDescriptionEnum || (Lpgtv401ApplicationJsonErrorDescriptionEnum = {}));
var Lpgtv401ApplicationJson = /** @class */ (function (_super) {
    __extends(Lpgtv401ApplicationJson, _super);
    function Lpgtv401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lpgtv401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lpgtv401ApplicationJson.prototype, "errorDescription", void 0);
    return Lpgtv401ApplicationJson;
}(SpeakeasyBase));
export { Lpgtv401ApplicationJson };
export var Lpgtv404ApplicationJsonErrorEnum;
(function (Lpgtv404ApplicationJsonErrorEnum) {
    Lpgtv404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Lpgtv404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Lpgtv404ApplicationJsonErrorEnum || (Lpgtv404ApplicationJsonErrorEnum = {}));
export var Lpgtv404ApplicationJsonErrorDescriptionEnum;
(function (Lpgtv404ApplicationJsonErrorDescriptionEnum) {
    Lpgtv404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Lpgtv404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Lpgtv404ApplicationJsonErrorDescriptionEnum || (Lpgtv404ApplicationJsonErrorDescriptionEnum = {}));
var Lpgtv404ApplicationJson = /** @class */ (function (_super) {
    __extends(Lpgtv404ApplicationJson, _super);
    function Lpgtv404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lpgtv404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lpgtv404ApplicationJson.prototype, "errorDescription", void 0);
    return Lpgtv404ApplicationJson;
}(SpeakeasyBase));
export { Lpgtv404ApplicationJson };
export var Lpgtv500ApplicationJsonErrorEnum;
(function (Lpgtv500ApplicationJsonErrorEnum) {
    Lpgtv500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Lpgtv500ApplicationJsonErrorEnum || (Lpgtv500ApplicationJsonErrorEnum = {}));
export var Lpgtv500ApplicationJsonErrorDescriptionEnum;
(function (Lpgtv500ApplicationJsonErrorDescriptionEnum) {
    Lpgtv500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Lpgtv500ApplicationJsonErrorDescriptionEnum || (Lpgtv500ApplicationJsonErrorDescriptionEnum = {}));
var Lpgtv500ApplicationJson = /** @class */ (function (_super) {
    __extends(Lpgtv500ApplicationJson, _super);
    function Lpgtv500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lpgtv500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lpgtv500ApplicationJson.prototype, "errorDescription", void 0);
    return Lpgtv500ApplicationJson;
}(SpeakeasyBase));
export { Lpgtv500ApplicationJson };
export var Lpgtv502ApplicationJsonErrorEnum;
(function (Lpgtv502ApplicationJsonErrorEnum) {
    Lpgtv502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Lpgtv502ApplicationJsonErrorEnum || (Lpgtv502ApplicationJsonErrorEnum = {}));
export var Lpgtv502ApplicationJsonErrorDescriptionEnum;
(function (Lpgtv502ApplicationJsonErrorDescriptionEnum) {
    Lpgtv502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Lpgtv502ApplicationJsonErrorDescriptionEnum || (Lpgtv502ApplicationJsonErrorDescriptionEnum = {}));
var Lpgtv502ApplicationJson = /** @class */ (function (_super) {
    __extends(Lpgtv502ApplicationJson, _super);
    function Lpgtv502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lpgtv502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lpgtv502ApplicationJson.prototype, "errorDescription", void 0);
    return Lpgtv502ApplicationJson;
}(SpeakeasyBase));
export { Lpgtv502ApplicationJson };
export var Lpgtv503ApplicationJsonErrorEnum;
(function (Lpgtv503ApplicationJsonErrorEnum) {
    Lpgtv503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Lpgtv503ApplicationJsonErrorEnum || (Lpgtv503ApplicationJsonErrorEnum = {}));
export var Lpgtv503ApplicationJsonErrorDescriptionEnum;
(function (Lpgtv503ApplicationJsonErrorDescriptionEnum) {
    Lpgtv503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Lpgtv503ApplicationJsonErrorDescriptionEnum || (Lpgtv503ApplicationJsonErrorDescriptionEnum = {}));
var Lpgtv503ApplicationJson = /** @class */ (function (_super) {
    __extends(Lpgtv503ApplicationJson, _super);
    function Lpgtv503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lpgtv503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lpgtv503ApplicationJson.prototype, "errorDescription", void 0);
    return Lpgtv503ApplicationJson;
}(SpeakeasyBase));
export { Lpgtv503ApplicationJson };
export var Lpgtv504ApplicationJsonErrorEnum;
(function (Lpgtv504ApplicationJsonErrorEnum) {
    Lpgtv504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Lpgtv504ApplicationJsonErrorEnum || (Lpgtv504ApplicationJsonErrorEnum = {}));
export var Lpgtv504ApplicationJsonErrorDescriptionEnum;
(function (Lpgtv504ApplicationJsonErrorDescriptionEnum) {
    Lpgtv504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Lpgtv504ApplicationJsonErrorDescriptionEnum || (Lpgtv504ApplicationJsonErrorDescriptionEnum = {}));
var Lpgtv504ApplicationJson = /** @class */ (function (_super) {
    __extends(Lpgtv504ApplicationJson, _super);
    function Lpgtv504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lpgtv504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lpgtv504ApplicationJson.prototype, "errorDescription", void 0);
    return Lpgtv504ApplicationJson;
}(SpeakeasyBase));
export { Lpgtv504ApplicationJson };
var LpgtvResponse = /** @class */ (function (_super) {
    __extends(LpgtvResponse, _super);
    function LpgtvResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LpgtvResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LpgtvResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lpgtv400ApplicationJson)
    ], LpgtvResponse.prototype, "lpgtv400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lpgtv401ApplicationJson)
    ], LpgtvResponse.prototype, "lpgtv401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lpgtv404ApplicationJson)
    ], LpgtvResponse.prototype, "lpgtv404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lpgtv500ApplicationJson)
    ], LpgtvResponse.prototype, "lpgtv500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lpgtv502ApplicationJson)
    ], LpgtvResponse.prototype, "lpgtv502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lpgtv503ApplicationJson)
    ], LpgtvResponse.prototype, "lpgtv503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Lpgtv504ApplicationJson)
    ], LpgtvResponse.prototype, "lpgtv504ApplicationJsonObject", void 0);
    return LpgtvResponse;
}(SpeakeasyBase));
export { LpgtvResponse };
