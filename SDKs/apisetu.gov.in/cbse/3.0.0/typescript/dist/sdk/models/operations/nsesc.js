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
var NsescRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(NsescRequestBodyCertificateParameters, _super);
    function NsescRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], NsescRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], NsescRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        Metadata({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], NsescRequestBodyCertificateParameters.prototype, "year", void 0);
    return NsescRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { NsescRequestBodyCertificateParameters };
export var NsescRequestBodyFormatEnum;
(function (NsescRequestBodyFormatEnum) {
    NsescRequestBodyFormatEnum["Pdf"] = "pdf";
})(NsescRequestBodyFormatEnum || (NsescRequestBodyFormatEnum = {}));
var NsescRequestBody = /** @class */ (function (_super) {
    __extends(NsescRequestBody, _super);
    function NsescRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", NsescRequestBodyCertificateParameters)
    ], NsescRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], NsescRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], NsescRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], NsescRequestBody.prototype, "txnId", void 0);
    return NsescRequestBody;
}(SpeakeasyBase));
export { NsescRequestBody };
var NsescSecurity = /** @class */ (function (_super) {
    __extends(NsescSecurity, _super);
    function NsescSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], NsescSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], NsescSecurity.prototype, "clientId", void 0);
    return NsescSecurity;
}(SpeakeasyBase));
export { NsescSecurity };
var NsescRequest = /** @class */ (function (_super) {
    __extends(NsescRequest, _super);
    function NsescRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", NsescRequestBody)
    ], NsescRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NsescSecurity)
    ], NsescRequest.prototype, "security", void 0);
    return NsescRequest;
}(SpeakeasyBase));
export { NsescRequest };
export var Nsesc400ApplicationJsonErrorEnum;
(function (Nsesc400ApplicationJsonErrorEnum) {
    Nsesc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Nsesc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Nsesc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Nsesc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Nsesc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Nsesc400ApplicationJsonErrorEnum || (Nsesc400ApplicationJsonErrorEnum = {}));
export var Nsesc400ApplicationJsonErrorDescriptionEnum;
(function (Nsesc400ApplicationJsonErrorDescriptionEnum) {
    Nsesc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Nsesc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Nsesc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Nsesc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Nsesc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Nsesc400ApplicationJsonErrorDescriptionEnum || (Nsesc400ApplicationJsonErrorDescriptionEnum = {}));
var Nsesc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Nsesc400ApplicationJson, _super);
    function Nsesc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nsesc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nsesc400ApplicationJson.prototype, "errorDescription", void 0);
    return Nsesc400ApplicationJson;
}(SpeakeasyBase));
export { Nsesc400ApplicationJson };
export var Nsesc401ApplicationJsonErrorEnum;
(function (Nsesc401ApplicationJsonErrorEnum) {
    Nsesc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Nsesc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Nsesc401ApplicationJsonErrorEnum || (Nsesc401ApplicationJsonErrorEnum = {}));
export var Nsesc401ApplicationJsonErrorDescriptionEnum;
(function (Nsesc401ApplicationJsonErrorDescriptionEnum) {
    Nsesc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Nsesc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Nsesc401ApplicationJsonErrorDescriptionEnum || (Nsesc401ApplicationJsonErrorDescriptionEnum = {}));
var Nsesc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Nsesc401ApplicationJson, _super);
    function Nsesc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nsesc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nsesc401ApplicationJson.prototype, "errorDescription", void 0);
    return Nsesc401ApplicationJson;
}(SpeakeasyBase));
export { Nsesc401ApplicationJson };
export var Nsesc404ApplicationJsonErrorEnum;
(function (Nsesc404ApplicationJsonErrorEnum) {
    Nsesc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Nsesc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Nsesc404ApplicationJsonErrorEnum || (Nsesc404ApplicationJsonErrorEnum = {}));
export var Nsesc404ApplicationJsonErrorDescriptionEnum;
(function (Nsesc404ApplicationJsonErrorDescriptionEnum) {
    Nsesc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Nsesc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Nsesc404ApplicationJsonErrorDescriptionEnum || (Nsesc404ApplicationJsonErrorDescriptionEnum = {}));
var Nsesc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Nsesc404ApplicationJson, _super);
    function Nsesc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nsesc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nsesc404ApplicationJson.prototype, "errorDescription", void 0);
    return Nsesc404ApplicationJson;
}(SpeakeasyBase));
export { Nsesc404ApplicationJson };
export var Nsesc500ApplicationJsonErrorEnum;
(function (Nsesc500ApplicationJsonErrorEnum) {
    Nsesc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Nsesc500ApplicationJsonErrorEnum || (Nsesc500ApplicationJsonErrorEnum = {}));
export var Nsesc500ApplicationJsonErrorDescriptionEnum;
(function (Nsesc500ApplicationJsonErrorDescriptionEnum) {
    Nsesc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Nsesc500ApplicationJsonErrorDescriptionEnum || (Nsesc500ApplicationJsonErrorDescriptionEnum = {}));
var Nsesc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Nsesc500ApplicationJson, _super);
    function Nsesc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nsesc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nsesc500ApplicationJson.prototype, "errorDescription", void 0);
    return Nsesc500ApplicationJson;
}(SpeakeasyBase));
export { Nsesc500ApplicationJson };
export var Nsesc502ApplicationJsonErrorEnum;
(function (Nsesc502ApplicationJsonErrorEnum) {
    Nsesc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Nsesc502ApplicationJsonErrorEnum || (Nsesc502ApplicationJsonErrorEnum = {}));
export var Nsesc502ApplicationJsonErrorDescriptionEnum;
(function (Nsesc502ApplicationJsonErrorDescriptionEnum) {
    Nsesc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Nsesc502ApplicationJsonErrorDescriptionEnum || (Nsesc502ApplicationJsonErrorDescriptionEnum = {}));
var Nsesc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Nsesc502ApplicationJson, _super);
    function Nsesc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nsesc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nsesc502ApplicationJson.prototype, "errorDescription", void 0);
    return Nsesc502ApplicationJson;
}(SpeakeasyBase));
export { Nsesc502ApplicationJson };
export var Nsesc503ApplicationJsonErrorEnum;
(function (Nsesc503ApplicationJsonErrorEnum) {
    Nsesc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Nsesc503ApplicationJsonErrorEnum || (Nsesc503ApplicationJsonErrorEnum = {}));
export var Nsesc503ApplicationJsonErrorDescriptionEnum;
(function (Nsesc503ApplicationJsonErrorDescriptionEnum) {
    Nsesc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Nsesc503ApplicationJsonErrorDescriptionEnum || (Nsesc503ApplicationJsonErrorDescriptionEnum = {}));
var Nsesc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Nsesc503ApplicationJson, _super);
    function Nsesc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nsesc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nsesc503ApplicationJson.prototype, "errorDescription", void 0);
    return Nsesc503ApplicationJson;
}(SpeakeasyBase));
export { Nsesc503ApplicationJson };
export var Nsesc504ApplicationJsonErrorEnum;
(function (Nsesc504ApplicationJsonErrorEnum) {
    Nsesc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Nsesc504ApplicationJsonErrorEnum || (Nsesc504ApplicationJsonErrorEnum = {}));
export var Nsesc504ApplicationJsonErrorDescriptionEnum;
(function (Nsesc504ApplicationJsonErrorDescriptionEnum) {
    Nsesc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Nsesc504ApplicationJsonErrorDescriptionEnum || (Nsesc504ApplicationJsonErrorDescriptionEnum = {}));
var Nsesc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Nsesc504ApplicationJson, _super);
    function Nsesc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nsesc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nsesc504ApplicationJson.prototype, "errorDescription", void 0);
    return Nsesc504ApplicationJson;
}(SpeakeasyBase));
export { Nsesc504ApplicationJson };
var NsescResponse = /** @class */ (function (_super) {
    __extends(NsescResponse, _super);
    function NsescResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NsescResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NsescResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Nsesc400ApplicationJson)
    ], NsescResponse.prototype, "nsesc400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Nsesc401ApplicationJson)
    ], NsescResponse.prototype, "nsesc401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Nsesc404ApplicationJson)
    ], NsescResponse.prototype, "nsesc404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Nsesc500ApplicationJson)
    ], NsescResponse.prototype, "nsesc500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Nsesc502ApplicationJson)
    ], NsescResponse.prototype, "nsesc502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Nsesc503ApplicationJson)
    ], NsescResponse.prototype, "nsesc503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Nsesc504ApplicationJson)
    ], NsescResponse.prototype, "nsesc504ApplicationJsonObject", void 0);
    return NsescResponse;
}(SpeakeasyBase));
export { NsescResponse };
