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
var VhinscRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(VhinscRequestBodyCertificateParameters, _super);
    function VhinscRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], VhinscRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], VhinscRequestBodyCertificateParameters.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chasis_no" }),
        __metadata("design:type", String)
    ], VhinscRequestBodyCertificateParameters.prototype, "chasisNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reg_no" }),
        __metadata("design:type", String)
    ], VhinscRequestBodyCertificateParameters.prototype, "regNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=swd_name" }),
        __metadata("design:type", String)
    ], VhinscRequestBodyCertificateParameters.prototype, "swdName", void 0);
    return VhinscRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { VhinscRequestBodyCertificateParameters };
export var VhinscRequestBodyFormatEnum;
(function (VhinscRequestBodyFormatEnum) {
    VhinscRequestBodyFormatEnum["Pdf"] = "pdf";
})(VhinscRequestBodyFormatEnum || (VhinscRequestBodyFormatEnum = {}));
var VhinscRequestBody = /** @class */ (function (_super) {
    __extends(VhinscRequestBody, _super);
    function VhinscRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", VhinscRequestBodyCertificateParameters)
    ], VhinscRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], VhinscRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], VhinscRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], VhinscRequestBody.prototype, "txnId", void 0);
    return VhinscRequestBody;
}(SpeakeasyBase));
export { VhinscRequestBody };
var VhinscSecurity = /** @class */ (function (_super) {
    __extends(VhinscSecurity, _super);
    function VhinscSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], VhinscSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], VhinscSecurity.prototype, "clientId", void 0);
    return VhinscSecurity;
}(SpeakeasyBase));
export { VhinscSecurity };
export var Vhinsc400ApplicationJsonErrorEnum;
(function (Vhinsc400ApplicationJsonErrorEnum) {
    Vhinsc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Vhinsc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Vhinsc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Vhinsc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Vhinsc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Vhinsc400ApplicationJsonErrorEnum || (Vhinsc400ApplicationJsonErrorEnum = {}));
export var Vhinsc400ApplicationJsonErrorDescriptionEnum;
(function (Vhinsc400ApplicationJsonErrorDescriptionEnum) {
    Vhinsc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Vhinsc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Vhinsc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Vhinsc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Vhinsc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Vhinsc400ApplicationJsonErrorDescriptionEnum || (Vhinsc400ApplicationJsonErrorDescriptionEnum = {}));
var Vhinsc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhinsc400ApplicationJson, _super);
    function Vhinsc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhinsc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhinsc400ApplicationJson.prototype, "errorDescription", void 0);
    return Vhinsc400ApplicationJson;
}(SpeakeasyBase));
export { Vhinsc400ApplicationJson };
export var Vhinsc401ApplicationJsonErrorEnum;
(function (Vhinsc401ApplicationJsonErrorEnum) {
    Vhinsc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Vhinsc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Vhinsc401ApplicationJsonErrorEnum || (Vhinsc401ApplicationJsonErrorEnum = {}));
export var Vhinsc401ApplicationJsonErrorDescriptionEnum;
(function (Vhinsc401ApplicationJsonErrorDescriptionEnum) {
    Vhinsc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Vhinsc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Vhinsc401ApplicationJsonErrorDescriptionEnum || (Vhinsc401ApplicationJsonErrorDescriptionEnum = {}));
var Vhinsc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhinsc401ApplicationJson, _super);
    function Vhinsc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhinsc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhinsc401ApplicationJson.prototype, "errorDescription", void 0);
    return Vhinsc401ApplicationJson;
}(SpeakeasyBase));
export { Vhinsc401ApplicationJson };
export var Vhinsc404ApplicationJsonErrorEnum;
(function (Vhinsc404ApplicationJsonErrorEnum) {
    Vhinsc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Vhinsc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Vhinsc404ApplicationJsonErrorEnum || (Vhinsc404ApplicationJsonErrorEnum = {}));
export var Vhinsc404ApplicationJsonErrorDescriptionEnum;
(function (Vhinsc404ApplicationJsonErrorDescriptionEnum) {
    Vhinsc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Vhinsc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Vhinsc404ApplicationJsonErrorDescriptionEnum || (Vhinsc404ApplicationJsonErrorDescriptionEnum = {}));
var Vhinsc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhinsc404ApplicationJson, _super);
    function Vhinsc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhinsc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhinsc404ApplicationJson.prototype, "errorDescription", void 0);
    return Vhinsc404ApplicationJson;
}(SpeakeasyBase));
export { Vhinsc404ApplicationJson };
export var Vhinsc500ApplicationJsonErrorEnum;
(function (Vhinsc500ApplicationJsonErrorEnum) {
    Vhinsc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Vhinsc500ApplicationJsonErrorEnum || (Vhinsc500ApplicationJsonErrorEnum = {}));
export var Vhinsc500ApplicationJsonErrorDescriptionEnum;
(function (Vhinsc500ApplicationJsonErrorDescriptionEnum) {
    Vhinsc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Vhinsc500ApplicationJsonErrorDescriptionEnum || (Vhinsc500ApplicationJsonErrorDescriptionEnum = {}));
var Vhinsc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhinsc500ApplicationJson, _super);
    function Vhinsc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhinsc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhinsc500ApplicationJson.prototype, "errorDescription", void 0);
    return Vhinsc500ApplicationJson;
}(SpeakeasyBase));
export { Vhinsc500ApplicationJson };
export var Vhinsc502ApplicationJsonErrorEnum;
(function (Vhinsc502ApplicationJsonErrorEnum) {
    Vhinsc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Vhinsc502ApplicationJsonErrorEnum || (Vhinsc502ApplicationJsonErrorEnum = {}));
export var Vhinsc502ApplicationJsonErrorDescriptionEnum;
(function (Vhinsc502ApplicationJsonErrorDescriptionEnum) {
    Vhinsc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Vhinsc502ApplicationJsonErrorDescriptionEnum || (Vhinsc502ApplicationJsonErrorDescriptionEnum = {}));
var Vhinsc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhinsc502ApplicationJson, _super);
    function Vhinsc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhinsc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhinsc502ApplicationJson.prototype, "errorDescription", void 0);
    return Vhinsc502ApplicationJson;
}(SpeakeasyBase));
export { Vhinsc502ApplicationJson };
export var Vhinsc503ApplicationJsonErrorEnum;
(function (Vhinsc503ApplicationJsonErrorEnum) {
    Vhinsc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Vhinsc503ApplicationJsonErrorEnum || (Vhinsc503ApplicationJsonErrorEnum = {}));
export var Vhinsc503ApplicationJsonErrorDescriptionEnum;
(function (Vhinsc503ApplicationJsonErrorDescriptionEnum) {
    Vhinsc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Vhinsc503ApplicationJsonErrorDescriptionEnum || (Vhinsc503ApplicationJsonErrorDescriptionEnum = {}));
var Vhinsc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhinsc503ApplicationJson, _super);
    function Vhinsc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhinsc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhinsc503ApplicationJson.prototype, "errorDescription", void 0);
    return Vhinsc503ApplicationJson;
}(SpeakeasyBase));
export { Vhinsc503ApplicationJson };
export var Vhinsc504ApplicationJsonErrorEnum;
(function (Vhinsc504ApplicationJsonErrorEnum) {
    Vhinsc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Vhinsc504ApplicationJsonErrorEnum || (Vhinsc504ApplicationJsonErrorEnum = {}));
export var Vhinsc504ApplicationJsonErrorDescriptionEnum;
(function (Vhinsc504ApplicationJsonErrorDescriptionEnum) {
    Vhinsc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Vhinsc504ApplicationJsonErrorDescriptionEnum || (Vhinsc504ApplicationJsonErrorDescriptionEnum = {}));
var Vhinsc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhinsc504ApplicationJson, _super);
    function Vhinsc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhinsc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhinsc504ApplicationJson.prototype, "errorDescription", void 0);
    return Vhinsc504ApplicationJson;
}(SpeakeasyBase));
export { Vhinsc504ApplicationJson };
var VhinscRequest = /** @class */ (function (_super) {
    __extends(VhinscRequest, _super);
    function VhinscRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", VhinscRequestBody)
    ], VhinscRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VhinscSecurity)
    ], VhinscRequest.prototype, "security", void 0);
    return VhinscRequest;
}(SpeakeasyBase));
export { VhinscRequest };
var VhinscResponse = /** @class */ (function (_super) {
    __extends(VhinscResponse, _super);
    function VhinscResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VhinscResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VhinscResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Vhinsc400ApplicationJson)
    ], VhinscResponse.prototype, "vhinsc400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Vhinsc401ApplicationJson)
    ], VhinscResponse.prototype, "vhinsc401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Vhinsc404ApplicationJson)
    ], VhinscResponse.prototype, "vhinsc404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Vhinsc500ApplicationJson)
    ], VhinscResponse.prototype, "vhinsc500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Vhinsc502ApplicationJson)
    ], VhinscResponse.prototype, "vhinsc502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Vhinsc503ApplicationJson)
    ], VhinscResponse.prototype, "vhinsc503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Vhinsc504ApplicationJson)
    ], VhinscResponse.prototype, "vhinsc504ApplicationJsonObject", void 0);
    return VhinscResponse;
}(SpeakeasyBase));
export { VhinscResponse };
