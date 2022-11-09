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
var PsnocRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PsnocRequestBodyCertificateParameters, _super);
    function PsnocRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], PsnocRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], PsnocRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=RegNum" }),
        __metadata("design:type", String)
    ], PsnocRequestBodyCertificateParameters.prototype, "regNum", void 0);
    __decorate([
        Metadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], PsnocRequestBodyCertificateParameters.prototype, "uid", void 0);
    return PsnocRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { PsnocRequestBodyCertificateParameters };
export var PsnocRequestBodyFormatEnum;
(function (PsnocRequestBodyFormatEnum) {
    PsnocRequestBodyFormatEnum["Pdf"] = "pdf";
})(PsnocRequestBodyFormatEnum || (PsnocRequestBodyFormatEnum = {}));
var PsnocRequestBody = /** @class */ (function (_super) {
    __extends(PsnocRequestBody, _super);
    function PsnocRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", PsnocRequestBodyCertificateParameters)
    ], PsnocRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], PsnocRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PsnocRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], PsnocRequestBody.prototype, "txnId", void 0);
    return PsnocRequestBody;
}(SpeakeasyBase));
export { PsnocRequestBody };
var PsnocSecurity = /** @class */ (function (_super) {
    __extends(PsnocSecurity, _super);
    function PsnocSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PsnocSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PsnocSecurity.prototype, "clientId", void 0);
    return PsnocSecurity;
}(SpeakeasyBase));
export { PsnocSecurity };
var PsnocRequest = /** @class */ (function (_super) {
    __extends(PsnocRequest, _super);
    function PsnocRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PsnocRequestBody)
    ], PsnocRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PsnocSecurity)
    ], PsnocRequest.prototype, "security", void 0);
    return PsnocRequest;
}(SpeakeasyBase));
export { PsnocRequest };
export var Psnoc400ApplicationJsonErrorEnum;
(function (Psnoc400ApplicationJsonErrorEnum) {
    Psnoc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Psnoc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Psnoc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Psnoc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Psnoc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Psnoc400ApplicationJsonErrorEnum || (Psnoc400ApplicationJsonErrorEnum = {}));
export var Psnoc400ApplicationJsonErrorDescriptionEnum;
(function (Psnoc400ApplicationJsonErrorDescriptionEnum) {
    Psnoc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Psnoc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Psnoc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Psnoc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Psnoc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Psnoc400ApplicationJsonErrorDescriptionEnum || (Psnoc400ApplicationJsonErrorDescriptionEnum = {}));
var Psnoc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Psnoc400ApplicationJson, _super);
    function Psnoc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Psnoc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Psnoc400ApplicationJson.prototype, "errorDescription", void 0);
    return Psnoc400ApplicationJson;
}(SpeakeasyBase));
export { Psnoc400ApplicationJson };
export var Psnoc401ApplicationJsonErrorEnum;
(function (Psnoc401ApplicationJsonErrorEnum) {
    Psnoc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Psnoc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Psnoc401ApplicationJsonErrorEnum || (Psnoc401ApplicationJsonErrorEnum = {}));
export var Psnoc401ApplicationJsonErrorDescriptionEnum;
(function (Psnoc401ApplicationJsonErrorDescriptionEnum) {
    Psnoc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Psnoc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Psnoc401ApplicationJsonErrorDescriptionEnum || (Psnoc401ApplicationJsonErrorDescriptionEnum = {}));
var Psnoc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Psnoc401ApplicationJson, _super);
    function Psnoc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Psnoc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Psnoc401ApplicationJson.prototype, "errorDescription", void 0);
    return Psnoc401ApplicationJson;
}(SpeakeasyBase));
export { Psnoc401ApplicationJson };
export var Psnoc404ApplicationJsonErrorEnum;
(function (Psnoc404ApplicationJsonErrorEnum) {
    Psnoc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Psnoc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Psnoc404ApplicationJsonErrorEnum || (Psnoc404ApplicationJsonErrorEnum = {}));
export var Psnoc404ApplicationJsonErrorDescriptionEnum;
(function (Psnoc404ApplicationJsonErrorDescriptionEnum) {
    Psnoc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Psnoc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Psnoc404ApplicationJsonErrorDescriptionEnum || (Psnoc404ApplicationJsonErrorDescriptionEnum = {}));
var Psnoc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Psnoc404ApplicationJson, _super);
    function Psnoc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Psnoc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Psnoc404ApplicationJson.prototype, "errorDescription", void 0);
    return Psnoc404ApplicationJson;
}(SpeakeasyBase));
export { Psnoc404ApplicationJson };
export var Psnoc500ApplicationJsonErrorEnum;
(function (Psnoc500ApplicationJsonErrorEnum) {
    Psnoc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Psnoc500ApplicationJsonErrorEnum || (Psnoc500ApplicationJsonErrorEnum = {}));
export var Psnoc500ApplicationJsonErrorDescriptionEnum;
(function (Psnoc500ApplicationJsonErrorDescriptionEnum) {
    Psnoc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Psnoc500ApplicationJsonErrorDescriptionEnum || (Psnoc500ApplicationJsonErrorDescriptionEnum = {}));
var Psnoc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Psnoc500ApplicationJson, _super);
    function Psnoc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Psnoc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Psnoc500ApplicationJson.prototype, "errorDescription", void 0);
    return Psnoc500ApplicationJson;
}(SpeakeasyBase));
export { Psnoc500ApplicationJson };
export var Psnoc502ApplicationJsonErrorEnum;
(function (Psnoc502ApplicationJsonErrorEnum) {
    Psnoc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Psnoc502ApplicationJsonErrorEnum || (Psnoc502ApplicationJsonErrorEnum = {}));
export var Psnoc502ApplicationJsonErrorDescriptionEnum;
(function (Psnoc502ApplicationJsonErrorDescriptionEnum) {
    Psnoc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Psnoc502ApplicationJsonErrorDescriptionEnum || (Psnoc502ApplicationJsonErrorDescriptionEnum = {}));
var Psnoc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Psnoc502ApplicationJson, _super);
    function Psnoc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Psnoc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Psnoc502ApplicationJson.prototype, "errorDescription", void 0);
    return Psnoc502ApplicationJson;
}(SpeakeasyBase));
export { Psnoc502ApplicationJson };
export var Psnoc503ApplicationJsonErrorEnum;
(function (Psnoc503ApplicationJsonErrorEnum) {
    Psnoc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Psnoc503ApplicationJsonErrorEnum || (Psnoc503ApplicationJsonErrorEnum = {}));
export var Psnoc503ApplicationJsonErrorDescriptionEnum;
(function (Psnoc503ApplicationJsonErrorDescriptionEnum) {
    Psnoc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Psnoc503ApplicationJsonErrorDescriptionEnum || (Psnoc503ApplicationJsonErrorDescriptionEnum = {}));
var Psnoc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Psnoc503ApplicationJson, _super);
    function Psnoc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Psnoc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Psnoc503ApplicationJson.prototype, "errorDescription", void 0);
    return Psnoc503ApplicationJson;
}(SpeakeasyBase));
export { Psnoc503ApplicationJson };
export var Psnoc504ApplicationJsonErrorEnum;
(function (Psnoc504ApplicationJsonErrorEnum) {
    Psnoc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Psnoc504ApplicationJsonErrorEnum || (Psnoc504ApplicationJsonErrorEnum = {}));
export var Psnoc504ApplicationJsonErrorDescriptionEnum;
(function (Psnoc504ApplicationJsonErrorDescriptionEnum) {
    Psnoc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Psnoc504ApplicationJsonErrorDescriptionEnum || (Psnoc504ApplicationJsonErrorDescriptionEnum = {}));
var Psnoc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Psnoc504ApplicationJson, _super);
    function Psnoc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Psnoc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Psnoc504ApplicationJson.prototype, "errorDescription", void 0);
    return Psnoc504ApplicationJson;
}(SpeakeasyBase));
export { Psnoc504ApplicationJson };
var PsnocResponse = /** @class */ (function (_super) {
    __extends(PsnocResponse, _super);
    function PsnocResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PsnocResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PsnocResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Psnoc400ApplicationJson)
    ], PsnocResponse.prototype, "psnoc400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Psnoc401ApplicationJson)
    ], PsnocResponse.prototype, "psnoc401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Psnoc404ApplicationJson)
    ], PsnocResponse.prototype, "psnoc404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Psnoc500ApplicationJson)
    ], PsnocResponse.prototype, "psnoc500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Psnoc502ApplicationJson)
    ], PsnocResponse.prototype, "psnoc502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Psnoc503ApplicationJson)
    ], PsnocResponse.prototype, "psnoc503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Psnoc504ApplicationJson)
    ], PsnocResponse.prototype, "psnoc504ApplicationJsonObject", void 0);
    return PsnocResponse;
}(SpeakeasyBase));
export { PsnocResponse };
