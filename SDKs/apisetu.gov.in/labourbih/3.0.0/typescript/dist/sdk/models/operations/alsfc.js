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
var AlsfcRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(AlsfcRequestBodyCertificateParameters, _super);
    function AlsfcRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], AlsfcRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        Metadata({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], AlsfcRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return AlsfcRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { AlsfcRequestBodyCertificateParameters };
export var AlsfcRequestBodyFormatEnum;
(function (AlsfcRequestBodyFormatEnum) {
    AlsfcRequestBodyFormatEnum["Pdf"] = "pdf";
})(AlsfcRequestBodyFormatEnum || (AlsfcRequestBodyFormatEnum = {}));
var AlsfcRequestBody = /** @class */ (function (_super) {
    __extends(AlsfcRequestBody, _super);
    function AlsfcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", AlsfcRequestBodyCertificateParameters)
    ], AlsfcRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], AlsfcRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AlsfcRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], AlsfcRequestBody.prototype, "txnId", void 0);
    return AlsfcRequestBody;
}(SpeakeasyBase));
export { AlsfcRequestBody };
var AlsfcSecurity = /** @class */ (function (_super) {
    __extends(AlsfcSecurity, _super);
    function AlsfcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], AlsfcSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], AlsfcSecurity.prototype, "clientId", void 0);
    return AlsfcSecurity;
}(SpeakeasyBase));
export { AlsfcSecurity };
var AlsfcRequest = /** @class */ (function (_super) {
    __extends(AlsfcRequest, _super);
    function AlsfcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AlsfcRequestBody)
    ], AlsfcRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AlsfcSecurity)
    ], AlsfcRequest.prototype, "security", void 0);
    return AlsfcRequest;
}(SpeakeasyBase));
export { AlsfcRequest };
export var Alsfc400ApplicationJsonErrorEnum;
(function (Alsfc400ApplicationJsonErrorEnum) {
    Alsfc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Alsfc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Alsfc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Alsfc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Alsfc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Alsfc400ApplicationJsonErrorEnum || (Alsfc400ApplicationJsonErrorEnum = {}));
export var Alsfc400ApplicationJsonErrorDescriptionEnum;
(function (Alsfc400ApplicationJsonErrorDescriptionEnum) {
    Alsfc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Alsfc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Alsfc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Alsfc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Alsfc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Alsfc400ApplicationJsonErrorDescriptionEnum || (Alsfc400ApplicationJsonErrorDescriptionEnum = {}));
var Alsfc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Alsfc400ApplicationJson, _super);
    function Alsfc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alsfc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alsfc400ApplicationJson.prototype, "errorDescription", void 0);
    return Alsfc400ApplicationJson;
}(SpeakeasyBase));
export { Alsfc400ApplicationJson };
export var Alsfc401ApplicationJsonErrorEnum;
(function (Alsfc401ApplicationJsonErrorEnum) {
    Alsfc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Alsfc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Alsfc401ApplicationJsonErrorEnum || (Alsfc401ApplicationJsonErrorEnum = {}));
export var Alsfc401ApplicationJsonErrorDescriptionEnum;
(function (Alsfc401ApplicationJsonErrorDescriptionEnum) {
    Alsfc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Alsfc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Alsfc401ApplicationJsonErrorDescriptionEnum || (Alsfc401ApplicationJsonErrorDescriptionEnum = {}));
var Alsfc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Alsfc401ApplicationJson, _super);
    function Alsfc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alsfc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alsfc401ApplicationJson.prototype, "errorDescription", void 0);
    return Alsfc401ApplicationJson;
}(SpeakeasyBase));
export { Alsfc401ApplicationJson };
export var Alsfc404ApplicationJsonErrorEnum;
(function (Alsfc404ApplicationJsonErrorEnum) {
    Alsfc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Alsfc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Alsfc404ApplicationJsonErrorEnum || (Alsfc404ApplicationJsonErrorEnum = {}));
export var Alsfc404ApplicationJsonErrorDescriptionEnum;
(function (Alsfc404ApplicationJsonErrorDescriptionEnum) {
    Alsfc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Alsfc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Alsfc404ApplicationJsonErrorDescriptionEnum || (Alsfc404ApplicationJsonErrorDescriptionEnum = {}));
var Alsfc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Alsfc404ApplicationJson, _super);
    function Alsfc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alsfc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alsfc404ApplicationJson.prototype, "errorDescription", void 0);
    return Alsfc404ApplicationJson;
}(SpeakeasyBase));
export { Alsfc404ApplicationJson };
export var Alsfc500ApplicationJsonErrorEnum;
(function (Alsfc500ApplicationJsonErrorEnum) {
    Alsfc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Alsfc500ApplicationJsonErrorEnum || (Alsfc500ApplicationJsonErrorEnum = {}));
export var Alsfc500ApplicationJsonErrorDescriptionEnum;
(function (Alsfc500ApplicationJsonErrorDescriptionEnum) {
    Alsfc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Alsfc500ApplicationJsonErrorDescriptionEnum || (Alsfc500ApplicationJsonErrorDescriptionEnum = {}));
var Alsfc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Alsfc500ApplicationJson, _super);
    function Alsfc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alsfc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alsfc500ApplicationJson.prototype, "errorDescription", void 0);
    return Alsfc500ApplicationJson;
}(SpeakeasyBase));
export { Alsfc500ApplicationJson };
export var Alsfc502ApplicationJsonErrorEnum;
(function (Alsfc502ApplicationJsonErrorEnum) {
    Alsfc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Alsfc502ApplicationJsonErrorEnum || (Alsfc502ApplicationJsonErrorEnum = {}));
export var Alsfc502ApplicationJsonErrorDescriptionEnum;
(function (Alsfc502ApplicationJsonErrorDescriptionEnum) {
    Alsfc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Alsfc502ApplicationJsonErrorDescriptionEnum || (Alsfc502ApplicationJsonErrorDescriptionEnum = {}));
var Alsfc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Alsfc502ApplicationJson, _super);
    function Alsfc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alsfc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alsfc502ApplicationJson.prototype, "errorDescription", void 0);
    return Alsfc502ApplicationJson;
}(SpeakeasyBase));
export { Alsfc502ApplicationJson };
export var Alsfc503ApplicationJsonErrorEnum;
(function (Alsfc503ApplicationJsonErrorEnum) {
    Alsfc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Alsfc503ApplicationJsonErrorEnum || (Alsfc503ApplicationJsonErrorEnum = {}));
export var Alsfc503ApplicationJsonErrorDescriptionEnum;
(function (Alsfc503ApplicationJsonErrorDescriptionEnum) {
    Alsfc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Alsfc503ApplicationJsonErrorDescriptionEnum || (Alsfc503ApplicationJsonErrorDescriptionEnum = {}));
var Alsfc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Alsfc503ApplicationJson, _super);
    function Alsfc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alsfc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alsfc503ApplicationJson.prototype, "errorDescription", void 0);
    return Alsfc503ApplicationJson;
}(SpeakeasyBase));
export { Alsfc503ApplicationJson };
export var Alsfc504ApplicationJsonErrorEnum;
(function (Alsfc504ApplicationJsonErrorEnum) {
    Alsfc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Alsfc504ApplicationJsonErrorEnum || (Alsfc504ApplicationJsonErrorEnum = {}));
export var Alsfc504ApplicationJsonErrorDescriptionEnum;
(function (Alsfc504ApplicationJsonErrorDescriptionEnum) {
    Alsfc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Alsfc504ApplicationJsonErrorDescriptionEnum || (Alsfc504ApplicationJsonErrorDescriptionEnum = {}));
var Alsfc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Alsfc504ApplicationJson, _super);
    function Alsfc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alsfc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alsfc504ApplicationJson.prototype, "errorDescription", void 0);
    return Alsfc504ApplicationJson;
}(SpeakeasyBase));
export { Alsfc504ApplicationJson };
var AlsfcResponse = /** @class */ (function (_super) {
    __extends(AlsfcResponse, _super);
    function AlsfcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AlsfcResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AlsfcResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Alsfc400ApplicationJson)
    ], AlsfcResponse.prototype, "alsfc400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Alsfc401ApplicationJson)
    ], AlsfcResponse.prototype, "alsfc401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Alsfc404ApplicationJson)
    ], AlsfcResponse.prototype, "alsfc404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Alsfc500ApplicationJson)
    ], AlsfcResponse.prototype, "alsfc500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Alsfc502ApplicationJson)
    ], AlsfcResponse.prototype, "alsfc502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Alsfc503ApplicationJson)
    ], AlsfcResponse.prototype, "alsfc503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Alsfc504ApplicationJson)
    ], AlsfcResponse.prototype, "alsfc504ApplicationJsonObject", void 0);
    return AlsfcResponse;
}(SpeakeasyBase));
export { AlsfcResponse };
