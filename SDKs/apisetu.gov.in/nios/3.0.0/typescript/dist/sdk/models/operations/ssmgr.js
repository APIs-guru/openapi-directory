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
var SsmgrRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SsmgrRequestBodyCertificateParameters, _super);
    function SsmgrRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], SsmgrRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=RROLL" }),
        __metadata("design:type", String)
    ], SsmgrRequestBodyCertificateParameters.prototype, "rroll", void 0);
    __decorate([
        Metadata({ data: "json, name=YEAR" }),
        __metadata("design:type", String)
    ], SsmgrRequestBodyCertificateParameters.prototype, "year", void 0);
    return SsmgrRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { SsmgrRequestBodyCertificateParameters };
export var SsmgrRequestBodyFormatEnum;
(function (SsmgrRequestBodyFormatEnum) {
    SsmgrRequestBodyFormatEnum["Pdf"] = "pdf";
})(SsmgrRequestBodyFormatEnum || (SsmgrRequestBodyFormatEnum = {}));
var SsmgrRequestBody = /** @class */ (function (_super) {
    __extends(SsmgrRequestBody, _super);
    function SsmgrRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SsmgrRequestBodyCertificateParameters)
    ], SsmgrRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SsmgrRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SsmgrRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SsmgrRequestBody.prototype, "txnId", void 0);
    return SsmgrRequestBody;
}(SpeakeasyBase));
export { SsmgrRequestBody };
var SsmgrSecurity = /** @class */ (function (_super) {
    __extends(SsmgrSecurity, _super);
    function SsmgrSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SsmgrSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SsmgrSecurity.prototype, "clientId", void 0);
    return SsmgrSecurity;
}(SpeakeasyBase));
export { SsmgrSecurity };
var SsmgrRequest = /** @class */ (function (_super) {
    __extends(SsmgrRequest, _super);
    function SsmgrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SsmgrRequestBody)
    ], SsmgrRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SsmgrSecurity)
    ], SsmgrRequest.prototype, "security", void 0);
    return SsmgrRequest;
}(SpeakeasyBase));
export { SsmgrRequest };
export var Ssmgr400ApplicationJsonErrorEnum;
(function (Ssmgr400ApplicationJsonErrorEnum) {
    Ssmgr400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Ssmgr400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Ssmgr400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Ssmgr400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Ssmgr400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Ssmgr400ApplicationJsonErrorEnum || (Ssmgr400ApplicationJsonErrorEnum = {}));
export var Ssmgr400ApplicationJsonErrorDescriptionEnum;
(function (Ssmgr400ApplicationJsonErrorDescriptionEnum) {
    Ssmgr400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Ssmgr400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Ssmgr400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Ssmgr400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Ssmgr400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Ssmgr400ApplicationJsonErrorDescriptionEnum || (Ssmgr400ApplicationJsonErrorDescriptionEnum = {}));
var Ssmgr400ApplicationJson = /** @class */ (function (_super) {
    __extends(Ssmgr400ApplicationJson, _super);
    function Ssmgr400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ssmgr400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ssmgr400ApplicationJson.prototype, "errorDescription", void 0);
    return Ssmgr400ApplicationJson;
}(SpeakeasyBase));
export { Ssmgr400ApplicationJson };
export var Ssmgr401ApplicationJsonErrorEnum;
(function (Ssmgr401ApplicationJsonErrorEnum) {
    Ssmgr401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Ssmgr401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Ssmgr401ApplicationJsonErrorEnum || (Ssmgr401ApplicationJsonErrorEnum = {}));
export var Ssmgr401ApplicationJsonErrorDescriptionEnum;
(function (Ssmgr401ApplicationJsonErrorDescriptionEnum) {
    Ssmgr401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Ssmgr401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Ssmgr401ApplicationJsonErrorDescriptionEnum || (Ssmgr401ApplicationJsonErrorDescriptionEnum = {}));
var Ssmgr401ApplicationJson = /** @class */ (function (_super) {
    __extends(Ssmgr401ApplicationJson, _super);
    function Ssmgr401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ssmgr401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ssmgr401ApplicationJson.prototype, "errorDescription", void 0);
    return Ssmgr401ApplicationJson;
}(SpeakeasyBase));
export { Ssmgr401ApplicationJson };
export var Ssmgr404ApplicationJsonErrorEnum;
(function (Ssmgr404ApplicationJsonErrorEnum) {
    Ssmgr404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Ssmgr404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Ssmgr404ApplicationJsonErrorEnum || (Ssmgr404ApplicationJsonErrorEnum = {}));
export var Ssmgr404ApplicationJsonErrorDescriptionEnum;
(function (Ssmgr404ApplicationJsonErrorDescriptionEnum) {
    Ssmgr404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Ssmgr404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Ssmgr404ApplicationJsonErrorDescriptionEnum || (Ssmgr404ApplicationJsonErrorDescriptionEnum = {}));
var Ssmgr404ApplicationJson = /** @class */ (function (_super) {
    __extends(Ssmgr404ApplicationJson, _super);
    function Ssmgr404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ssmgr404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ssmgr404ApplicationJson.prototype, "errorDescription", void 0);
    return Ssmgr404ApplicationJson;
}(SpeakeasyBase));
export { Ssmgr404ApplicationJson };
export var Ssmgr500ApplicationJsonErrorEnum;
(function (Ssmgr500ApplicationJsonErrorEnum) {
    Ssmgr500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Ssmgr500ApplicationJsonErrorEnum || (Ssmgr500ApplicationJsonErrorEnum = {}));
export var Ssmgr500ApplicationJsonErrorDescriptionEnum;
(function (Ssmgr500ApplicationJsonErrorDescriptionEnum) {
    Ssmgr500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Ssmgr500ApplicationJsonErrorDescriptionEnum || (Ssmgr500ApplicationJsonErrorDescriptionEnum = {}));
var Ssmgr500ApplicationJson = /** @class */ (function (_super) {
    __extends(Ssmgr500ApplicationJson, _super);
    function Ssmgr500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ssmgr500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ssmgr500ApplicationJson.prototype, "errorDescription", void 0);
    return Ssmgr500ApplicationJson;
}(SpeakeasyBase));
export { Ssmgr500ApplicationJson };
export var Ssmgr502ApplicationJsonErrorEnum;
(function (Ssmgr502ApplicationJsonErrorEnum) {
    Ssmgr502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Ssmgr502ApplicationJsonErrorEnum || (Ssmgr502ApplicationJsonErrorEnum = {}));
export var Ssmgr502ApplicationJsonErrorDescriptionEnum;
(function (Ssmgr502ApplicationJsonErrorDescriptionEnum) {
    Ssmgr502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Ssmgr502ApplicationJsonErrorDescriptionEnum || (Ssmgr502ApplicationJsonErrorDescriptionEnum = {}));
var Ssmgr502ApplicationJson = /** @class */ (function (_super) {
    __extends(Ssmgr502ApplicationJson, _super);
    function Ssmgr502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ssmgr502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ssmgr502ApplicationJson.prototype, "errorDescription", void 0);
    return Ssmgr502ApplicationJson;
}(SpeakeasyBase));
export { Ssmgr502ApplicationJson };
export var Ssmgr503ApplicationJsonErrorEnum;
(function (Ssmgr503ApplicationJsonErrorEnum) {
    Ssmgr503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Ssmgr503ApplicationJsonErrorEnum || (Ssmgr503ApplicationJsonErrorEnum = {}));
export var Ssmgr503ApplicationJsonErrorDescriptionEnum;
(function (Ssmgr503ApplicationJsonErrorDescriptionEnum) {
    Ssmgr503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Ssmgr503ApplicationJsonErrorDescriptionEnum || (Ssmgr503ApplicationJsonErrorDescriptionEnum = {}));
var Ssmgr503ApplicationJson = /** @class */ (function (_super) {
    __extends(Ssmgr503ApplicationJson, _super);
    function Ssmgr503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ssmgr503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ssmgr503ApplicationJson.prototype, "errorDescription", void 0);
    return Ssmgr503ApplicationJson;
}(SpeakeasyBase));
export { Ssmgr503ApplicationJson };
export var Ssmgr504ApplicationJsonErrorEnum;
(function (Ssmgr504ApplicationJsonErrorEnum) {
    Ssmgr504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Ssmgr504ApplicationJsonErrorEnum || (Ssmgr504ApplicationJsonErrorEnum = {}));
export var Ssmgr504ApplicationJsonErrorDescriptionEnum;
(function (Ssmgr504ApplicationJsonErrorDescriptionEnum) {
    Ssmgr504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Ssmgr504ApplicationJsonErrorDescriptionEnum || (Ssmgr504ApplicationJsonErrorDescriptionEnum = {}));
var Ssmgr504ApplicationJson = /** @class */ (function (_super) {
    __extends(Ssmgr504ApplicationJson, _super);
    function Ssmgr504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ssmgr504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ssmgr504ApplicationJson.prototype, "errorDescription", void 0);
    return Ssmgr504ApplicationJson;
}(SpeakeasyBase));
export { Ssmgr504ApplicationJson };
var SsmgrResponse = /** @class */ (function (_super) {
    __extends(SsmgrResponse, _super);
    function SsmgrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SsmgrResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SsmgrResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ssmgr400ApplicationJson)
    ], SsmgrResponse.prototype, "ssmgr400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ssmgr401ApplicationJson)
    ], SsmgrResponse.prototype, "ssmgr401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ssmgr404ApplicationJson)
    ], SsmgrResponse.prototype, "ssmgr404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ssmgr500ApplicationJson)
    ], SsmgrResponse.prototype, "ssmgr500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ssmgr502ApplicationJson)
    ], SsmgrResponse.prototype, "ssmgr502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ssmgr503ApplicationJson)
    ], SsmgrResponse.prototype, "ssmgr503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ssmgr504ApplicationJson)
    ], SsmgrResponse.prototype, "ssmgr504ApplicationJsonObject", void 0);
    return SsmgrResponse;
}(SpeakeasyBase));
export { SsmgrResponse };
