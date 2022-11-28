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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var NstscRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(NstscRequestBodyCertificateParameters, _super);
    function NstscRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], NstscRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], NstscRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], NstscRequestBodyCertificateParameters.prototype, "year", void 0);
    return NstscRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { NstscRequestBodyCertificateParameters };
export var NstscRequestBodyFormatEnum;
(function (NstscRequestBodyFormatEnum) {
    NstscRequestBodyFormatEnum["Pdf"] = "pdf";
})(NstscRequestBodyFormatEnum || (NstscRequestBodyFormatEnum = {}));
var NstscRequestBody = /** @class */ (function (_super) {
    __extends(NstscRequestBody, _super);
    function NstscRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", NstscRequestBodyCertificateParameters)
    ], NstscRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], NstscRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], NstscRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], NstscRequestBody.prototype, "txnId", void 0);
    return NstscRequestBody;
}(SpeakeasyBase));
export { NstscRequestBody };
var NstscSecurity = /** @class */ (function (_super) {
    __extends(NstscSecurity, _super);
    function NstscSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], NstscSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], NstscSecurity.prototype, "clientId", void 0);
    return NstscSecurity;
}(SpeakeasyBase));
export { NstscSecurity };
export var Nstsc400ApplicationJsonErrorEnum;
(function (Nstsc400ApplicationJsonErrorEnum) {
    Nstsc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Nstsc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Nstsc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Nstsc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Nstsc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Nstsc400ApplicationJsonErrorEnum || (Nstsc400ApplicationJsonErrorEnum = {}));
export var Nstsc400ApplicationJsonErrorDescriptionEnum;
(function (Nstsc400ApplicationJsonErrorDescriptionEnum) {
    Nstsc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Nstsc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Nstsc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Nstsc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Nstsc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Nstsc400ApplicationJsonErrorDescriptionEnum || (Nstsc400ApplicationJsonErrorDescriptionEnum = {}));
var Nstsc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Nstsc400ApplicationJson, _super);
    function Nstsc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nstsc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nstsc400ApplicationJson.prototype, "errorDescription", void 0);
    return Nstsc400ApplicationJson;
}(SpeakeasyBase));
export { Nstsc400ApplicationJson };
export var Nstsc401ApplicationJsonErrorEnum;
(function (Nstsc401ApplicationJsonErrorEnum) {
    Nstsc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Nstsc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Nstsc401ApplicationJsonErrorEnum || (Nstsc401ApplicationJsonErrorEnum = {}));
export var Nstsc401ApplicationJsonErrorDescriptionEnum;
(function (Nstsc401ApplicationJsonErrorDescriptionEnum) {
    Nstsc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Nstsc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Nstsc401ApplicationJsonErrorDescriptionEnum || (Nstsc401ApplicationJsonErrorDescriptionEnum = {}));
var Nstsc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Nstsc401ApplicationJson, _super);
    function Nstsc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nstsc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nstsc401ApplicationJson.prototype, "errorDescription", void 0);
    return Nstsc401ApplicationJson;
}(SpeakeasyBase));
export { Nstsc401ApplicationJson };
export var Nstsc404ApplicationJsonErrorEnum;
(function (Nstsc404ApplicationJsonErrorEnum) {
    Nstsc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Nstsc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Nstsc404ApplicationJsonErrorEnum || (Nstsc404ApplicationJsonErrorEnum = {}));
export var Nstsc404ApplicationJsonErrorDescriptionEnum;
(function (Nstsc404ApplicationJsonErrorDescriptionEnum) {
    Nstsc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Nstsc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Nstsc404ApplicationJsonErrorDescriptionEnum || (Nstsc404ApplicationJsonErrorDescriptionEnum = {}));
var Nstsc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Nstsc404ApplicationJson, _super);
    function Nstsc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nstsc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nstsc404ApplicationJson.prototype, "errorDescription", void 0);
    return Nstsc404ApplicationJson;
}(SpeakeasyBase));
export { Nstsc404ApplicationJson };
export var Nstsc500ApplicationJsonErrorEnum;
(function (Nstsc500ApplicationJsonErrorEnum) {
    Nstsc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Nstsc500ApplicationJsonErrorEnum || (Nstsc500ApplicationJsonErrorEnum = {}));
export var Nstsc500ApplicationJsonErrorDescriptionEnum;
(function (Nstsc500ApplicationJsonErrorDescriptionEnum) {
    Nstsc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Nstsc500ApplicationJsonErrorDescriptionEnum || (Nstsc500ApplicationJsonErrorDescriptionEnum = {}));
var Nstsc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Nstsc500ApplicationJson, _super);
    function Nstsc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nstsc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nstsc500ApplicationJson.prototype, "errorDescription", void 0);
    return Nstsc500ApplicationJson;
}(SpeakeasyBase));
export { Nstsc500ApplicationJson };
export var Nstsc502ApplicationJsonErrorEnum;
(function (Nstsc502ApplicationJsonErrorEnum) {
    Nstsc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Nstsc502ApplicationJsonErrorEnum || (Nstsc502ApplicationJsonErrorEnum = {}));
export var Nstsc502ApplicationJsonErrorDescriptionEnum;
(function (Nstsc502ApplicationJsonErrorDescriptionEnum) {
    Nstsc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Nstsc502ApplicationJsonErrorDescriptionEnum || (Nstsc502ApplicationJsonErrorDescriptionEnum = {}));
var Nstsc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Nstsc502ApplicationJson, _super);
    function Nstsc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nstsc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nstsc502ApplicationJson.prototype, "errorDescription", void 0);
    return Nstsc502ApplicationJson;
}(SpeakeasyBase));
export { Nstsc502ApplicationJson };
export var Nstsc503ApplicationJsonErrorEnum;
(function (Nstsc503ApplicationJsonErrorEnum) {
    Nstsc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Nstsc503ApplicationJsonErrorEnum || (Nstsc503ApplicationJsonErrorEnum = {}));
export var Nstsc503ApplicationJsonErrorDescriptionEnum;
(function (Nstsc503ApplicationJsonErrorDescriptionEnum) {
    Nstsc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Nstsc503ApplicationJsonErrorDescriptionEnum || (Nstsc503ApplicationJsonErrorDescriptionEnum = {}));
var Nstsc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Nstsc503ApplicationJson, _super);
    function Nstsc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nstsc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nstsc503ApplicationJson.prototype, "errorDescription", void 0);
    return Nstsc503ApplicationJson;
}(SpeakeasyBase));
export { Nstsc503ApplicationJson };
export var Nstsc504ApplicationJsonErrorEnum;
(function (Nstsc504ApplicationJsonErrorEnum) {
    Nstsc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Nstsc504ApplicationJsonErrorEnum || (Nstsc504ApplicationJsonErrorEnum = {}));
export var Nstsc504ApplicationJsonErrorDescriptionEnum;
(function (Nstsc504ApplicationJsonErrorDescriptionEnum) {
    Nstsc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Nstsc504ApplicationJsonErrorDescriptionEnum || (Nstsc504ApplicationJsonErrorDescriptionEnum = {}));
var Nstsc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Nstsc504ApplicationJson, _super);
    function Nstsc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nstsc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nstsc504ApplicationJson.prototype, "errorDescription", void 0);
    return Nstsc504ApplicationJson;
}(SpeakeasyBase));
export { Nstsc504ApplicationJson };
var NstscRequest = /** @class */ (function (_super) {
    __extends(NstscRequest, _super);
    function NstscRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", NstscRequestBody)
    ], NstscRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NstscSecurity)
    ], NstscRequest.prototype, "security", void 0);
    return NstscRequest;
}(SpeakeasyBase));
export { NstscRequest };
var NstscResponse = /** @class */ (function (_super) {
    __extends(NstscResponse, _super);
    function NstscResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NstscResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NstscResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Nstsc400ApplicationJson)
    ], NstscResponse.prototype, "nstsc400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Nstsc401ApplicationJson)
    ], NstscResponse.prototype, "nstsc401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Nstsc404ApplicationJson)
    ], NstscResponse.prototype, "nstsc404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Nstsc500ApplicationJson)
    ], NstscResponse.prototype, "nstsc500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Nstsc502ApplicationJson)
    ], NstscResponse.prototype, "nstsc502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Nstsc503ApplicationJson)
    ], NstscResponse.prototype, "nstsc503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Nstsc504ApplicationJson)
    ], NstscResponse.prototype, "nstsc504ApplicationJsonObject", void 0);
    return NstscResponse;
}(SpeakeasyBase));
export { NstscResponse };
