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
var VhtaxRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(VhtaxRequestBodyCertificateParameters, _super);
    function VhtaxRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], VhtaxRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], VhtaxRequestBodyCertificateParameters.prototype, "uid", void 0);
    __decorate([
        Metadata({ data: "json, name=chasis_no" }),
        __metadata("design:type", String)
    ], VhtaxRequestBodyCertificateParameters.prototype, "chasisNo", void 0);
    __decorate([
        Metadata({ data: "json, name=reg_no" }),
        __metadata("design:type", String)
    ], VhtaxRequestBodyCertificateParameters.prototype, "regNo", void 0);
    __decorate([
        Metadata({ data: "json, name=swd_name" }),
        __metadata("design:type", String)
    ], VhtaxRequestBodyCertificateParameters.prototype, "swdName", void 0);
    return VhtaxRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { VhtaxRequestBodyCertificateParameters };
export var VhtaxRequestBodyFormatEnum;
(function (VhtaxRequestBodyFormatEnum) {
    VhtaxRequestBodyFormatEnum["Pdf"] = "pdf";
})(VhtaxRequestBodyFormatEnum || (VhtaxRequestBodyFormatEnum = {}));
var VhtaxRequestBody = /** @class */ (function (_super) {
    __extends(VhtaxRequestBody, _super);
    function VhtaxRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", VhtaxRequestBodyCertificateParameters)
    ], VhtaxRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], VhtaxRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], VhtaxRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], VhtaxRequestBody.prototype, "txnId", void 0);
    return VhtaxRequestBody;
}(SpeakeasyBase));
export { VhtaxRequestBody };
var VhtaxSecurity = /** @class */ (function (_super) {
    __extends(VhtaxSecurity, _super);
    function VhtaxSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], VhtaxSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], VhtaxSecurity.prototype, "clientId", void 0);
    return VhtaxSecurity;
}(SpeakeasyBase));
export { VhtaxSecurity };
var VhtaxRequest = /** @class */ (function (_super) {
    __extends(VhtaxRequest, _super);
    function VhtaxRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", VhtaxRequestBody)
    ], VhtaxRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", VhtaxSecurity)
    ], VhtaxRequest.prototype, "security", void 0);
    return VhtaxRequest;
}(SpeakeasyBase));
export { VhtaxRequest };
export var Vhtax400ApplicationJsonErrorEnum;
(function (Vhtax400ApplicationJsonErrorEnum) {
    Vhtax400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Vhtax400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Vhtax400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Vhtax400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Vhtax400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Vhtax400ApplicationJsonErrorEnum || (Vhtax400ApplicationJsonErrorEnum = {}));
export var Vhtax400ApplicationJsonErrorDescriptionEnum;
(function (Vhtax400ApplicationJsonErrorDescriptionEnum) {
    Vhtax400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Vhtax400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Vhtax400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Vhtax400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Vhtax400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Vhtax400ApplicationJsonErrorDescriptionEnum || (Vhtax400ApplicationJsonErrorDescriptionEnum = {}));
var Vhtax400ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhtax400ApplicationJson, _super);
    function Vhtax400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhtax400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhtax400ApplicationJson.prototype, "errorDescription", void 0);
    return Vhtax400ApplicationJson;
}(SpeakeasyBase));
export { Vhtax400ApplicationJson };
export var Vhtax401ApplicationJsonErrorEnum;
(function (Vhtax401ApplicationJsonErrorEnum) {
    Vhtax401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Vhtax401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Vhtax401ApplicationJsonErrorEnum || (Vhtax401ApplicationJsonErrorEnum = {}));
export var Vhtax401ApplicationJsonErrorDescriptionEnum;
(function (Vhtax401ApplicationJsonErrorDescriptionEnum) {
    Vhtax401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Vhtax401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Vhtax401ApplicationJsonErrorDescriptionEnum || (Vhtax401ApplicationJsonErrorDescriptionEnum = {}));
var Vhtax401ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhtax401ApplicationJson, _super);
    function Vhtax401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhtax401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhtax401ApplicationJson.prototype, "errorDescription", void 0);
    return Vhtax401ApplicationJson;
}(SpeakeasyBase));
export { Vhtax401ApplicationJson };
export var Vhtax404ApplicationJsonErrorEnum;
(function (Vhtax404ApplicationJsonErrorEnum) {
    Vhtax404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Vhtax404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Vhtax404ApplicationJsonErrorEnum || (Vhtax404ApplicationJsonErrorEnum = {}));
export var Vhtax404ApplicationJsonErrorDescriptionEnum;
(function (Vhtax404ApplicationJsonErrorDescriptionEnum) {
    Vhtax404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Vhtax404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Vhtax404ApplicationJsonErrorDescriptionEnum || (Vhtax404ApplicationJsonErrorDescriptionEnum = {}));
var Vhtax404ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhtax404ApplicationJson, _super);
    function Vhtax404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhtax404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhtax404ApplicationJson.prototype, "errorDescription", void 0);
    return Vhtax404ApplicationJson;
}(SpeakeasyBase));
export { Vhtax404ApplicationJson };
export var Vhtax500ApplicationJsonErrorEnum;
(function (Vhtax500ApplicationJsonErrorEnum) {
    Vhtax500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Vhtax500ApplicationJsonErrorEnum || (Vhtax500ApplicationJsonErrorEnum = {}));
export var Vhtax500ApplicationJsonErrorDescriptionEnum;
(function (Vhtax500ApplicationJsonErrorDescriptionEnum) {
    Vhtax500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Vhtax500ApplicationJsonErrorDescriptionEnum || (Vhtax500ApplicationJsonErrorDescriptionEnum = {}));
var Vhtax500ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhtax500ApplicationJson, _super);
    function Vhtax500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhtax500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhtax500ApplicationJson.prototype, "errorDescription", void 0);
    return Vhtax500ApplicationJson;
}(SpeakeasyBase));
export { Vhtax500ApplicationJson };
export var Vhtax502ApplicationJsonErrorEnum;
(function (Vhtax502ApplicationJsonErrorEnum) {
    Vhtax502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Vhtax502ApplicationJsonErrorEnum || (Vhtax502ApplicationJsonErrorEnum = {}));
export var Vhtax502ApplicationJsonErrorDescriptionEnum;
(function (Vhtax502ApplicationJsonErrorDescriptionEnum) {
    Vhtax502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Vhtax502ApplicationJsonErrorDescriptionEnum || (Vhtax502ApplicationJsonErrorDescriptionEnum = {}));
var Vhtax502ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhtax502ApplicationJson, _super);
    function Vhtax502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhtax502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhtax502ApplicationJson.prototype, "errorDescription", void 0);
    return Vhtax502ApplicationJson;
}(SpeakeasyBase));
export { Vhtax502ApplicationJson };
export var Vhtax503ApplicationJsonErrorEnum;
(function (Vhtax503ApplicationJsonErrorEnum) {
    Vhtax503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Vhtax503ApplicationJsonErrorEnum || (Vhtax503ApplicationJsonErrorEnum = {}));
export var Vhtax503ApplicationJsonErrorDescriptionEnum;
(function (Vhtax503ApplicationJsonErrorDescriptionEnum) {
    Vhtax503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Vhtax503ApplicationJsonErrorDescriptionEnum || (Vhtax503ApplicationJsonErrorDescriptionEnum = {}));
var Vhtax503ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhtax503ApplicationJson, _super);
    function Vhtax503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhtax503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhtax503ApplicationJson.prototype, "errorDescription", void 0);
    return Vhtax503ApplicationJson;
}(SpeakeasyBase));
export { Vhtax503ApplicationJson };
export var Vhtax504ApplicationJsonErrorEnum;
(function (Vhtax504ApplicationJsonErrorEnum) {
    Vhtax504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Vhtax504ApplicationJsonErrorEnum || (Vhtax504ApplicationJsonErrorEnum = {}));
export var Vhtax504ApplicationJsonErrorDescriptionEnum;
(function (Vhtax504ApplicationJsonErrorDescriptionEnum) {
    Vhtax504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Vhtax504ApplicationJsonErrorDescriptionEnum || (Vhtax504ApplicationJsonErrorDescriptionEnum = {}));
var Vhtax504ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhtax504ApplicationJson, _super);
    function Vhtax504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhtax504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhtax504ApplicationJson.prototype, "errorDescription", void 0);
    return Vhtax504ApplicationJson;
}(SpeakeasyBase));
export { Vhtax504ApplicationJson };
var VhtaxResponse = /** @class */ (function (_super) {
    __extends(VhtaxResponse, _super);
    function VhtaxResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], VhtaxResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], VhtaxResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Vhtax400ApplicationJson)
    ], VhtaxResponse.prototype, "vhtax400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Vhtax401ApplicationJson)
    ], VhtaxResponse.prototype, "vhtax401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Vhtax404ApplicationJson)
    ], VhtaxResponse.prototype, "vhtax404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Vhtax500ApplicationJson)
    ], VhtaxResponse.prototype, "vhtax500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Vhtax502ApplicationJson)
    ], VhtaxResponse.prototype, "vhtax502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Vhtax503ApplicationJson)
    ], VhtaxResponse.prototype, "vhtax503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Vhtax504ApplicationJson)
    ], VhtaxResponse.prototype, "vhtax504ApplicationJsonObject", void 0);
    return VhtaxResponse;
}(SpeakeasyBase));
export { VhtaxResponse };
