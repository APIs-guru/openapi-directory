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
var Ror1bRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(Ror1bRequestBodyCertificateParameters, _super);
    function Ror1bRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], Ror1bRequestBodyCertificateParameters.prototype, "uid", void 0);
    __decorate([
        Metadata({ data: "json, name=refno" }),
        __metadata("design:type", String)
    ], Ror1bRequestBodyCertificateParameters.prototype, "refno", void 0);
    return Ror1bRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { Ror1bRequestBodyCertificateParameters };
export var Ror1bRequestBodyFormatEnum;
(function (Ror1bRequestBodyFormatEnum) {
    Ror1bRequestBodyFormatEnum["Pdf"] = "pdf";
})(Ror1bRequestBodyFormatEnum || (Ror1bRequestBodyFormatEnum = {}));
var Ror1bRequestBody = /** @class */ (function (_super) {
    __extends(Ror1bRequestBody, _super);
    function Ror1bRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", Ror1bRequestBodyCertificateParameters)
    ], Ror1bRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], Ror1bRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], Ror1bRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], Ror1bRequestBody.prototype, "txnId", void 0);
    return Ror1bRequestBody;
}(SpeakeasyBase));
export { Ror1bRequestBody };
var Ror1bSecurity = /** @class */ (function (_super) {
    __extends(Ror1bSecurity, _super);
    function Ror1bSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], Ror1bSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], Ror1bSecurity.prototype, "clientId", void 0);
    return Ror1bSecurity;
}(SpeakeasyBase));
export { Ror1bSecurity };
var Ror1bRequest = /** @class */ (function (_super) {
    __extends(Ror1bRequest, _super);
    function Ror1bRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Ror1bRequestBody)
    ], Ror1bRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ror1bSecurity)
    ], Ror1bRequest.prototype, "security", void 0);
    return Ror1bRequest;
}(SpeakeasyBase));
export { Ror1bRequest };
export var Ror1b400ApplicationJsonErrorEnum;
(function (Ror1b400ApplicationJsonErrorEnum) {
    Ror1b400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Ror1b400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Ror1b400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Ror1b400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Ror1b400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Ror1b400ApplicationJsonErrorEnum || (Ror1b400ApplicationJsonErrorEnum = {}));
export var Ror1b400ApplicationJsonErrorDescriptionEnum;
(function (Ror1b400ApplicationJsonErrorDescriptionEnum) {
    Ror1b400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Ror1b400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Ror1b400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Ror1b400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Ror1b400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Ror1b400ApplicationJsonErrorDescriptionEnum || (Ror1b400ApplicationJsonErrorDescriptionEnum = {}));
var Ror1b400ApplicationJson = /** @class */ (function (_super) {
    __extends(Ror1b400ApplicationJson, _super);
    function Ror1b400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ror1b400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ror1b400ApplicationJson.prototype, "errorDescription", void 0);
    return Ror1b400ApplicationJson;
}(SpeakeasyBase));
export { Ror1b400ApplicationJson };
export var Ror1b401ApplicationJsonErrorEnum;
(function (Ror1b401ApplicationJsonErrorEnum) {
    Ror1b401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Ror1b401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Ror1b401ApplicationJsonErrorEnum || (Ror1b401ApplicationJsonErrorEnum = {}));
export var Ror1b401ApplicationJsonErrorDescriptionEnum;
(function (Ror1b401ApplicationJsonErrorDescriptionEnum) {
    Ror1b401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Ror1b401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Ror1b401ApplicationJsonErrorDescriptionEnum || (Ror1b401ApplicationJsonErrorDescriptionEnum = {}));
var Ror1b401ApplicationJson = /** @class */ (function (_super) {
    __extends(Ror1b401ApplicationJson, _super);
    function Ror1b401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ror1b401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ror1b401ApplicationJson.prototype, "errorDescription", void 0);
    return Ror1b401ApplicationJson;
}(SpeakeasyBase));
export { Ror1b401ApplicationJson };
export var Ror1b404ApplicationJsonErrorEnum;
(function (Ror1b404ApplicationJsonErrorEnum) {
    Ror1b404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Ror1b404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Ror1b404ApplicationJsonErrorEnum || (Ror1b404ApplicationJsonErrorEnum = {}));
export var Ror1b404ApplicationJsonErrorDescriptionEnum;
(function (Ror1b404ApplicationJsonErrorDescriptionEnum) {
    Ror1b404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Ror1b404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Ror1b404ApplicationJsonErrorDescriptionEnum || (Ror1b404ApplicationJsonErrorDescriptionEnum = {}));
var Ror1b404ApplicationJson = /** @class */ (function (_super) {
    __extends(Ror1b404ApplicationJson, _super);
    function Ror1b404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ror1b404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ror1b404ApplicationJson.prototype, "errorDescription", void 0);
    return Ror1b404ApplicationJson;
}(SpeakeasyBase));
export { Ror1b404ApplicationJson };
export var Ror1b500ApplicationJsonErrorEnum;
(function (Ror1b500ApplicationJsonErrorEnum) {
    Ror1b500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Ror1b500ApplicationJsonErrorEnum || (Ror1b500ApplicationJsonErrorEnum = {}));
export var Ror1b500ApplicationJsonErrorDescriptionEnum;
(function (Ror1b500ApplicationJsonErrorDescriptionEnum) {
    Ror1b500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Ror1b500ApplicationJsonErrorDescriptionEnum || (Ror1b500ApplicationJsonErrorDescriptionEnum = {}));
var Ror1b500ApplicationJson = /** @class */ (function (_super) {
    __extends(Ror1b500ApplicationJson, _super);
    function Ror1b500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ror1b500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ror1b500ApplicationJson.prototype, "errorDescription", void 0);
    return Ror1b500ApplicationJson;
}(SpeakeasyBase));
export { Ror1b500ApplicationJson };
export var Ror1b502ApplicationJsonErrorEnum;
(function (Ror1b502ApplicationJsonErrorEnum) {
    Ror1b502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Ror1b502ApplicationJsonErrorEnum || (Ror1b502ApplicationJsonErrorEnum = {}));
export var Ror1b502ApplicationJsonErrorDescriptionEnum;
(function (Ror1b502ApplicationJsonErrorDescriptionEnum) {
    Ror1b502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Ror1b502ApplicationJsonErrorDescriptionEnum || (Ror1b502ApplicationJsonErrorDescriptionEnum = {}));
var Ror1b502ApplicationJson = /** @class */ (function (_super) {
    __extends(Ror1b502ApplicationJson, _super);
    function Ror1b502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ror1b502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ror1b502ApplicationJson.prototype, "errorDescription", void 0);
    return Ror1b502ApplicationJson;
}(SpeakeasyBase));
export { Ror1b502ApplicationJson };
export var Ror1b503ApplicationJsonErrorEnum;
(function (Ror1b503ApplicationJsonErrorEnum) {
    Ror1b503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Ror1b503ApplicationJsonErrorEnum || (Ror1b503ApplicationJsonErrorEnum = {}));
export var Ror1b503ApplicationJsonErrorDescriptionEnum;
(function (Ror1b503ApplicationJsonErrorDescriptionEnum) {
    Ror1b503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Ror1b503ApplicationJsonErrorDescriptionEnum || (Ror1b503ApplicationJsonErrorDescriptionEnum = {}));
var Ror1b503ApplicationJson = /** @class */ (function (_super) {
    __extends(Ror1b503ApplicationJson, _super);
    function Ror1b503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ror1b503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ror1b503ApplicationJson.prototype, "errorDescription", void 0);
    return Ror1b503ApplicationJson;
}(SpeakeasyBase));
export { Ror1b503ApplicationJson };
export var Ror1b504ApplicationJsonErrorEnum;
(function (Ror1b504ApplicationJsonErrorEnum) {
    Ror1b504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Ror1b504ApplicationJsonErrorEnum || (Ror1b504ApplicationJsonErrorEnum = {}));
export var Ror1b504ApplicationJsonErrorDescriptionEnum;
(function (Ror1b504ApplicationJsonErrorDescriptionEnum) {
    Ror1b504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Ror1b504ApplicationJsonErrorDescriptionEnum || (Ror1b504ApplicationJsonErrorDescriptionEnum = {}));
var Ror1b504ApplicationJson = /** @class */ (function (_super) {
    __extends(Ror1b504ApplicationJson, _super);
    function Ror1b504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ror1b504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ror1b504ApplicationJson.prototype, "errorDescription", void 0);
    return Ror1b504ApplicationJson;
}(SpeakeasyBase));
export { Ror1b504ApplicationJson };
var Ror1bResponse = /** @class */ (function (_super) {
    __extends(Ror1bResponse, _super);
    function Ror1bResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], Ror1bResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], Ror1bResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ror1b400ApplicationJson)
    ], Ror1bResponse.prototype, "ror1b400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ror1b401ApplicationJson)
    ], Ror1bResponse.prototype, "ror1b401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ror1b404ApplicationJson)
    ], Ror1bResponse.prototype, "ror1b404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ror1b500ApplicationJson)
    ], Ror1bResponse.prototype, "ror1b500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ror1b502ApplicationJson)
    ], Ror1bResponse.prototype, "ror1b502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ror1b503ApplicationJson)
    ], Ror1bResponse.prototype, "ror1b503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Ror1b504ApplicationJson)
    ], Ror1bResponse.prototype, "ror1b504ApplicationJsonObject", void 0);
    return Ror1bResponse;
}(SpeakeasyBase));
export { Ror1bResponse };
