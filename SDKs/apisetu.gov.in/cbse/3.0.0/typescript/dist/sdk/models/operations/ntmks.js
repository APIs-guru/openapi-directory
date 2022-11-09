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
var NtmksRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(NtmksRequestBodyCertificateParameters, _super);
    function NtmksRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], NtmksRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], NtmksRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        Metadata({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], NtmksRequestBodyCertificateParameters.prototype, "year", void 0);
    return NtmksRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { NtmksRequestBodyCertificateParameters };
export var NtmksRequestBodyFormatEnum;
(function (NtmksRequestBodyFormatEnum) {
    NtmksRequestBodyFormatEnum["Pdf"] = "pdf";
})(NtmksRequestBodyFormatEnum || (NtmksRequestBodyFormatEnum = {}));
var NtmksRequestBody = /** @class */ (function (_super) {
    __extends(NtmksRequestBody, _super);
    function NtmksRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", NtmksRequestBodyCertificateParameters)
    ], NtmksRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], NtmksRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], NtmksRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], NtmksRequestBody.prototype, "txnId", void 0);
    return NtmksRequestBody;
}(SpeakeasyBase));
export { NtmksRequestBody };
var NtmksSecurity = /** @class */ (function (_super) {
    __extends(NtmksSecurity, _super);
    function NtmksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], NtmksSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], NtmksSecurity.prototype, "clientId", void 0);
    return NtmksSecurity;
}(SpeakeasyBase));
export { NtmksSecurity };
var NtmksRequest = /** @class */ (function (_super) {
    __extends(NtmksRequest, _super);
    function NtmksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", NtmksRequestBody)
    ], NtmksRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NtmksSecurity)
    ], NtmksRequest.prototype, "security", void 0);
    return NtmksRequest;
}(SpeakeasyBase));
export { NtmksRequest };
export var Ntmks400ApplicationJsonErrorEnum;
(function (Ntmks400ApplicationJsonErrorEnum) {
    Ntmks400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Ntmks400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Ntmks400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Ntmks400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Ntmks400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Ntmks400ApplicationJsonErrorEnum || (Ntmks400ApplicationJsonErrorEnum = {}));
export var Ntmks400ApplicationJsonErrorDescriptionEnum;
(function (Ntmks400ApplicationJsonErrorDescriptionEnum) {
    Ntmks400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Ntmks400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Ntmks400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Ntmks400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Ntmks400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Ntmks400ApplicationJsonErrorDescriptionEnum || (Ntmks400ApplicationJsonErrorDescriptionEnum = {}));
var Ntmks400ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntmks400ApplicationJson, _super);
    function Ntmks400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntmks400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntmks400ApplicationJson.prototype, "errorDescription", void 0);
    return Ntmks400ApplicationJson;
}(SpeakeasyBase));
export { Ntmks400ApplicationJson };
export var Ntmks401ApplicationJsonErrorEnum;
(function (Ntmks401ApplicationJsonErrorEnum) {
    Ntmks401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Ntmks401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Ntmks401ApplicationJsonErrorEnum || (Ntmks401ApplicationJsonErrorEnum = {}));
export var Ntmks401ApplicationJsonErrorDescriptionEnum;
(function (Ntmks401ApplicationJsonErrorDescriptionEnum) {
    Ntmks401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Ntmks401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Ntmks401ApplicationJsonErrorDescriptionEnum || (Ntmks401ApplicationJsonErrorDescriptionEnum = {}));
var Ntmks401ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntmks401ApplicationJson, _super);
    function Ntmks401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntmks401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntmks401ApplicationJson.prototype, "errorDescription", void 0);
    return Ntmks401ApplicationJson;
}(SpeakeasyBase));
export { Ntmks401ApplicationJson };
export var Ntmks404ApplicationJsonErrorEnum;
(function (Ntmks404ApplicationJsonErrorEnum) {
    Ntmks404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Ntmks404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Ntmks404ApplicationJsonErrorEnum || (Ntmks404ApplicationJsonErrorEnum = {}));
export var Ntmks404ApplicationJsonErrorDescriptionEnum;
(function (Ntmks404ApplicationJsonErrorDescriptionEnum) {
    Ntmks404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Ntmks404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Ntmks404ApplicationJsonErrorDescriptionEnum || (Ntmks404ApplicationJsonErrorDescriptionEnum = {}));
var Ntmks404ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntmks404ApplicationJson, _super);
    function Ntmks404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntmks404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntmks404ApplicationJson.prototype, "errorDescription", void 0);
    return Ntmks404ApplicationJson;
}(SpeakeasyBase));
export { Ntmks404ApplicationJson };
export var Ntmks500ApplicationJsonErrorEnum;
(function (Ntmks500ApplicationJsonErrorEnum) {
    Ntmks500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Ntmks500ApplicationJsonErrorEnum || (Ntmks500ApplicationJsonErrorEnum = {}));
export var Ntmks500ApplicationJsonErrorDescriptionEnum;
(function (Ntmks500ApplicationJsonErrorDescriptionEnum) {
    Ntmks500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Ntmks500ApplicationJsonErrorDescriptionEnum || (Ntmks500ApplicationJsonErrorDescriptionEnum = {}));
var Ntmks500ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntmks500ApplicationJson, _super);
    function Ntmks500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntmks500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntmks500ApplicationJson.prototype, "errorDescription", void 0);
    return Ntmks500ApplicationJson;
}(SpeakeasyBase));
export { Ntmks500ApplicationJson };
export var Ntmks502ApplicationJsonErrorEnum;
(function (Ntmks502ApplicationJsonErrorEnum) {
    Ntmks502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Ntmks502ApplicationJsonErrorEnum || (Ntmks502ApplicationJsonErrorEnum = {}));
export var Ntmks502ApplicationJsonErrorDescriptionEnum;
(function (Ntmks502ApplicationJsonErrorDescriptionEnum) {
    Ntmks502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Ntmks502ApplicationJsonErrorDescriptionEnum || (Ntmks502ApplicationJsonErrorDescriptionEnum = {}));
var Ntmks502ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntmks502ApplicationJson, _super);
    function Ntmks502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntmks502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntmks502ApplicationJson.prototype, "errorDescription", void 0);
    return Ntmks502ApplicationJson;
}(SpeakeasyBase));
export { Ntmks502ApplicationJson };
export var Ntmks503ApplicationJsonErrorEnum;
(function (Ntmks503ApplicationJsonErrorEnum) {
    Ntmks503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Ntmks503ApplicationJsonErrorEnum || (Ntmks503ApplicationJsonErrorEnum = {}));
export var Ntmks503ApplicationJsonErrorDescriptionEnum;
(function (Ntmks503ApplicationJsonErrorDescriptionEnum) {
    Ntmks503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Ntmks503ApplicationJsonErrorDescriptionEnum || (Ntmks503ApplicationJsonErrorDescriptionEnum = {}));
var Ntmks503ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntmks503ApplicationJson, _super);
    function Ntmks503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntmks503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntmks503ApplicationJson.prototype, "errorDescription", void 0);
    return Ntmks503ApplicationJson;
}(SpeakeasyBase));
export { Ntmks503ApplicationJson };
export var Ntmks504ApplicationJsonErrorEnum;
(function (Ntmks504ApplicationJsonErrorEnum) {
    Ntmks504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Ntmks504ApplicationJsonErrorEnum || (Ntmks504ApplicationJsonErrorEnum = {}));
export var Ntmks504ApplicationJsonErrorDescriptionEnum;
(function (Ntmks504ApplicationJsonErrorDescriptionEnum) {
    Ntmks504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Ntmks504ApplicationJsonErrorDescriptionEnum || (Ntmks504ApplicationJsonErrorDescriptionEnum = {}));
var Ntmks504ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntmks504ApplicationJson, _super);
    function Ntmks504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntmks504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntmks504ApplicationJson.prototype, "errorDescription", void 0);
    return Ntmks504ApplicationJson;
}(SpeakeasyBase));
export { Ntmks504ApplicationJson };
var NtmksResponse = /** @class */ (function (_super) {
    __extends(NtmksResponse, _super);
    function NtmksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NtmksResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NtmksResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ntmks400ApplicationJson)
    ], NtmksResponse.prototype, "ntmks400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ntmks401ApplicationJson)
    ], NtmksResponse.prototype, "ntmks401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ntmks404ApplicationJson)
    ], NtmksResponse.prototype, "ntmks404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ntmks500ApplicationJson)
    ], NtmksResponse.prototype, "ntmks500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ntmks502ApplicationJson)
    ], NtmksResponse.prototype, "ntmks502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ntmks503ApplicationJson)
    ], NtmksResponse.prototype, "ntmks503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ntmks504ApplicationJson)
    ], NtmksResponse.prototype, "ntmks504ApplicationJsonObject", void 0);
    return NtmksResponse;
}(SpeakeasyBase));
export { NtmksResponse };
