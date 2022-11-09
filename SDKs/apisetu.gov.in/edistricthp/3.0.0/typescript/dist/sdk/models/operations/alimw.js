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
var AlimwRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(AlimwRequestBodyCertificateParameters, _super);
    function AlimwRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], AlimwRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return AlimwRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { AlimwRequestBodyCertificateParameters };
export var AlimwRequestBodyFormatEnum;
(function (AlimwRequestBodyFormatEnum) {
    AlimwRequestBodyFormatEnum["Pdf"] = "pdf";
})(AlimwRequestBodyFormatEnum || (AlimwRequestBodyFormatEnum = {}));
var AlimwRequestBody = /** @class */ (function (_super) {
    __extends(AlimwRequestBody, _super);
    function AlimwRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", AlimwRequestBodyCertificateParameters)
    ], AlimwRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], AlimwRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AlimwRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], AlimwRequestBody.prototype, "txnId", void 0);
    return AlimwRequestBody;
}(SpeakeasyBase));
export { AlimwRequestBody };
var AlimwSecurity = /** @class */ (function (_super) {
    __extends(AlimwSecurity, _super);
    function AlimwSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], AlimwSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], AlimwSecurity.prototype, "clientId", void 0);
    return AlimwSecurity;
}(SpeakeasyBase));
export { AlimwSecurity };
var AlimwRequest = /** @class */ (function (_super) {
    __extends(AlimwRequest, _super);
    function AlimwRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AlimwRequestBody)
    ], AlimwRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AlimwSecurity)
    ], AlimwRequest.prototype, "security", void 0);
    return AlimwRequest;
}(SpeakeasyBase));
export { AlimwRequest };
export var Alimw400ApplicationJsonErrorEnum;
(function (Alimw400ApplicationJsonErrorEnum) {
    Alimw400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Alimw400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Alimw400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Alimw400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Alimw400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Alimw400ApplicationJsonErrorEnum || (Alimw400ApplicationJsonErrorEnum = {}));
export var Alimw400ApplicationJsonErrorDescriptionEnum;
(function (Alimw400ApplicationJsonErrorDescriptionEnum) {
    Alimw400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Alimw400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Alimw400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Alimw400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Alimw400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Alimw400ApplicationJsonErrorDescriptionEnum || (Alimw400ApplicationJsonErrorDescriptionEnum = {}));
var Alimw400ApplicationJson = /** @class */ (function (_super) {
    __extends(Alimw400ApplicationJson, _super);
    function Alimw400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alimw400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alimw400ApplicationJson.prototype, "errorDescription", void 0);
    return Alimw400ApplicationJson;
}(SpeakeasyBase));
export { Alimw400ApplicationJson };
export var Alimw401ApplicationJsonErrorEnum;
(function (Alimw401ApplicationJsonErrorEnum) {
    Alimw401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Alimw401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Alimw401ApplicationJsonErrorEnum || (Alimw401ApplicationJsonErrorEnum = {}));
export var Alimw401ApplicationJsonErrorDescriptionEnum;
(function (Alimw401ApplicationJsonErrorDescriptionEnum) {
    Alimw401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Alimw401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Alimw401ApplicationJsonErrorDescriptionEnum || (Alimw401ApplicationJsonErrorDescriptionEnum = {}));
var Alimw401ApplicationJson = /** @class */ (function (_super) {
    __extends(Alimw401ApplicationJson, _super);
    function Alimw401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alimw401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alimw401ApplicationJson.prototype, "errorDescription", void 0);
    return Alimw401ApplicationJson;
}(SpeakeasyBase));
export { Alimw401ApplicationJson };
export var Alimw404ApplicationJsonErrorEnum;
(function (Alimw404ApplicationJsonErrorEnum) {
    Alimw404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Alimw404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Alimw404ApplicationJsonErrorEnum || (Alimw404ApplicationJsonErrorEnum = {}));
export var Alimw404ApplicationJsonErrorDescriptionEnum;
(function (Alimw404ApplicationJsonErrorDescriptionEnum) {
    Alimw404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Alimw404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Alimw404ApplicationJsonErrorDescriptionEnum || (Alimw404ApplicationJsonErrorDescriptionEnum = {}));
var Alimw404ApplicationJson = /** @class */ (function (_super) {
    __extends(Alimw404ApplicationJson, _super);
    function Alimw404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alimw404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alimw404ApplicationJson.prototype, "errorDescription", void 0);
    return Alimw404ApplicationJson;
}(SpeakeasyBase));
export { Alimw404ApplicationJson };
export var Alimw500ApplicationJsonErrorEnum;
(function (Alimw500ApplicationJsonErrorEnum) {
    Alimw500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Alimw500ApplicationJsonErrorEnum || (Alimw500ApplicationJsonErrorEnum = {}));
export var Alimw500ApplicationJsonErrorDescriptionEnum;
(function (Alimw500ApplicationJsonErrorDescriptionEnum) {
    Alimw500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Alimw500ApplicationJsonErrorDescriptionEnum || (Alimw500ApplicationJsonErrorDescriptionEnum = {}));
var Alimw500ApplicationJson = /** @class */ (function (_super) {
    __extends(Alimw500ApplicationJson, _super);
    function Alimw500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alimw500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alimw500ApplicationJson.prototype, "errorDescription", void 0);
    return Alimw500ApplicationJson;
}(SpeakeasyBase));
export { Alimw500ApplicationJson };
export var Alimw502ApplicationJsonErrorEnum;
(function (Alimw502ApplicationJsonErrorEnum) {
    Alimw502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Alimw502ApplicationJsonErrorEnum || (Alimw502ApplicationJsonErrorEnum = {}));
export var Alimw502ApplicationJsonErrorDescriptionEnum;
(function (Alimw502ApplicationJsonErrorDescriptionEnum) {
    Alimw502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Alimw502ApplicationJsonErrorDescriptionEnum || (Alimw502ApplicationJsonErrorDescriptionEnum = {}));
var Alimw502ApplicationJson = /** @class */ (function (_super) {
    __extends(Alimw502ApplicationJson, _super);
    function Alimw502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alimw502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alimw502ApplicationJson.prototype, "errorDescription", void 0);
    return Alimw502ApplicationJson;
}(SpeakeasyBase));
export { Alimw502ApplicationJson };
export var Alimw503ApplicationJsonErrorEnum;
(function (Alimw503ApplicationJsonErrorEnum) {
    Alimw503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Alimw503ApplicationJsonErrorEnum || (Alimw503ApplicationJsonErrorEnum = {}));
export var Alimw503ApplicationJsonErrorDescriptionEnum;
(function (Alimw503ApplicationJsonErrorDescriptionEnum) {
    Alimw503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Alimw503ApplicationJsonErrorDescriptionEnum || (Alimw503ApplicationJsonErrorDescriptionEnum = {}));
var Alimw503ApplicationJson = /** @class */ (function (_super) {
    __extends(Alimw503ApplicationJson, _super);
    function Alimw503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alimw503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alimw503ApplicationJson.prototype, "errorDescription", void 0);
    return Alimw503ApplicationJson;
}(SpeakeasyBase));
export { Alimw503ApplicationJson };
export var Alimw504ApplicationJsonErrorEnum;
(function (Alimw504ApplicationJsonErrorEnum) {
    Alimw504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Alimw504ApplicationJsonErrorEnum || (Alimw504ApplicationJsonErrorEnum = {}));
export var Alimw504ApplicationJsonErrorDescriptionEnum;
(function (Alimw504ApplicationJsonErrorDescriptionEnum) {
    Alimw504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Alimw504ApplicationJsonErrorDescriptionEnum || (Alimw504ApplicationJsonErrorDescriptionEnum = {}));
var Alimw504ApplicationJson = /** @class */ (function (_super) {
    __extends(Alimw504ApplicationJson, _super);
    function Alimw504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alimw504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alimw504ApplicationJson.prototype, "errorDescription", void 0);
    return Alimw504ApplicationJson;
}(SpeakeasyBase));
export { Alimw504ApplicationJson };
var AlimwResponse = /** @class */ (function (_super) {
    __extends(AlimwResponse, _super);
    function AlimwResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AlimwResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AlimwResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Alimw400ApplicationJson)
    ], AlimwResponse.prototype, "alimw400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Alimw401ApplicationJson)
    ], AlimwResponse.prototype, "alimw401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Alimw404ApplicationJson)
    ], AlimwResponse.prototype, "alimw404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Alimw500ApplicationJson)
    ], AlimwResponse.prototype, "alimw500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Alimw502ApplicationJson)
    ], AlimwResponse.prototype, "alimw502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Alimw503ApplicationJson)
    ], AlimwResponse.prototype, "alimw503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Alimw504ApplicationJson)
    ], AlimwResponse.prototype, "alimw504ApplicationJsonObject", void 0);
    return AlimwResponse;
}(SpeakeasyBase));
export { AlimwResponse };
