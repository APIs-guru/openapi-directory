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
var VochseRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(VochseRequestBodyCertificateParameters, _super);
    function VochseRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], VochseRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], VochseRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=Regno" }),
        __metadata("design:type", String)
    ], VochseRequestBodyCertificateParameters.prototype, "regno", void 0);
    __decorate([
        Metadata({ data: "json, name=Year" }),
        __metadata("design:type", String)
    ], VochseRequestBodyCertificateParameters.prototype, "year", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], VochseRequestBodyCertificateParameters.prototype, "type", void 0);
    return VochseRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { VochseRequestBodyCertificateParameters };
export var VochseRequestBodyFormatEnum;
(function (VochseRequestBodyFormatEnum) {
    VochseRequestBodyFormatEnum["Pdf"] = "pdf";
})(VochseRequestBodyFormatEnum || (VochseRequestBodyFormatEnum = {}));
var VochseRequestBody = /** @class */ (function (_super) {
    __extends(VochseRequestBody, _super);
    function VochseRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", VochseRequestBodyCertificateParameters)
    ], VochseRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], VochseRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], VochseRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], VochseRequestBody.prototype, "txnId", void 0);
    return VochseRequestBody;
}(SpeakeasyBase));
export { VochseRequestBody };
var VochseSecurity = /** @class */ (function (_super) {
    __extends(VochseSecurity, _super);
    function VochseSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], VochseSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], VochseSecurity.prototype, "clientId", void 0);
    return VochseSecurity;
}(SpeakeasyBase));
export { VochseSecurity };
var VochseRequest = /** @class */ (function (_super) {
    __extends(VochseRequest, _super);
    function VochseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", VochseRequestBody)
    ], VochseRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", VochseSecurity)
    ], VochseRequest.prototype, "security", void 0);
    return VochseRequest;
}(SpeakeasyBase));
export { VochseRequest };
export var Vochse400ApplicationJsonErrorEnum;
(function (Vochse400ApplicationJsonErrorEnum) {
    Vochse400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Vochse400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Vochse400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Vochse400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Vochse400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Vochse400ApplicationJsonErrorEnum || (Vochse400ApplicationJsonErrorEnum = {}));
export var Vochse400ApplicationJsonErrorDescriptionEnum;
(function (Vochse400ApplicationJsonErrorDescriptionEnum) {
    Vochse400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Vochse400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Vochse400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Vochse400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Vochse400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Vochse400ApplicationJsonErrorDescriptionEnum || (Vochse400ApplicationJsonErrorDescriptionEnum = {}));
var Vochse400ApplicationJson = /** @class */ (function (_super) {
    __extends(Vochse400ApplicationJson, _super);
    function Vochse400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vochse400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vochse400ApplicationJson.prototype, "errorDescription", void 0);
    return Vochse400ApplicationJson;
}(SpeakeasyBase));
export { Vochse400ApplicationJson };
export var Vochse401ApplicationJsonErrorEnum;
(function (Vochse401ApplicationJsonErrorEnum) {
    Vochse401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Vochse401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Vochse401ApplicationJsonErrorEnum || (Vochse401ApplicationJsonErrorEnum = {}));
export var Vochse401ApplicationJsonErrorDescriptionEnum;
(function (Vochse401ApplicationJsonErrorDescriptionEnum) {
    Vochse401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Vochse401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Vochse401ApplicationJsonErrorDescriptionEnum || (Vochse401ApplicationJsonErrorDescriptionEnum = {}));
var Vochse401ApplicationJson = /** @class */ (function (_super) {
    __extends(Vochse401ApplicationJson, _super);
    function Vochse401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vochse401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vochse401ApplicationJson.prototype, "errorDescription", void 0);
    return Vochse401ApplicationJson;
}(SpeakeasyBase));
export { Vochse401ApplicationJson };
export var Vochse404ApplicationJsonErrorEnum;
(function (Vochse404ApplicationJsonErrorEnum) {
    Vochse404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Vochse404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Vochse404ApplicationJsonErrorEnum || (Vochse404ApplicationJsonErrorEnum = {}));
export var Vochse404ApplicationJsonErrorDescriptionEnum;
(function (Vochse404ApplicationJsonErrorDescriptionEnum) {
    Vochse404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Vochse404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Vochse404ApplicationJsonErrorDescriptionEnum || (Vochse404ApplicationJsonErrorDescriptionEnum = {}));
var Vochse404ApplicationJson = /** @class */ (function (_super) {
    __extends(Vochse404ApplicationJson, _super);
    function Vochse404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vochse404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vochse404ApplicationJson.prototype, "errorDescription", void 0);
    return Vochse404ApplicationJson;
}(SpeakeasyBase));
export { Vochse404ApplicationJson };
export var Vochse500ApplicationJsonErrorEnum;
(function (Vochse500ApplicationJsonErrorEnum) {
    Vochse500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Vochse500ApplicationJsonErrorEnum || (Vochse500ApplicationJsonErrorEnum = {}));
export var Vochse500ApplicationJsonErrorDescriptionEnum;
(function (Vochse500ApplicationJsonErrorDescriptionEnum) {
    Vochse500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Vochse500ApplicationJsonErrorDescriptionEnum || (Vochse500ApplicationJsonErrorDescriptionEnum = {}));
var Vochse500ApplicationJson = /** @class */ (function (_super) {
    __extends(Vochse500ApplicationJson, _super);
    function Vochse500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vochse500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vochse500ApplicationJson.prototype, "errorDescription", void 0);
    return Vochse500ApplicationJson;
}(SpeakeasyBase));
export { Vochse500ApplicationJson };
export var Vochse502ApplicationJsonErrorEnum;
(function (Vochse502ApplicationJsonErrorEnum) {
    Vochse502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Vochse502ApplicationJsonErrorEnum || (Vochse502ApplicationJsonErrorEnum = {}));
export var Vochse502ApplicationJsonErrorDescriptionEnum;
(function (Vochse502ApplicationJsonErrorDescriptionEnum) {
    Vochse502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Vochse502ApplicationJsonErrorDescriptionEnum || (Vochse502ApplicationJsonErrorDescriptionEnum = {}));
var Vochse502ApplicationJson = /** @class */ (function (_super) {
    __extends(Vochse502ApplicationJson, _super);
    function Vochse502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vochse502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vochse502ApplicationJson.prototype, "errorDescription", void 0);
    return Vochse502ApplicationJson;
}(SpeakeasyBase));
export { Vochse502ApplicationJson };
export var Vochse503ApplicationJsonErrorEnum;
(function (Vochse503ApplicationJsonErrorEnum) {
    Vochse503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Vochse503ApplicationJsonErrorEnum || (Vochse503ApplicationJsonErrorEnum = {}));
export var Vochse503ApplicationJsonErrorDescriptionEnum;
(function (Vochse503ApplicationJsonErrorDescriptionEnum) {
    Vochse503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Vochse503ApplicationJsonErrorDescriptionEnum || (Vochse503ApplicationJsonErrorDescriptionEnum = {}));
var Vochse503ApplicationJson = /** @class */ (function (_super) {
    __extends(Vochse503ApplicationJson, _super);
    function Vochse503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vochse503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vochse503ApplicationJson.prototype, "errorDescription", void 0);
    return Vochse503ApplicationJson;
}(SpeakeasyBase));
export { Vochse503ApplicationJson };
export var Vochse504ApplicationJsonErrorEnum;
(function (Vochse504ApplicationJsonErrorEnum) {
    Vochse504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Vochse504ApplicationJsonErrorEnum || (Vochse504ApplicationJsonErrorEnum = {}));
export var Vochse504ApplicationJsonErrorDescriptionEnum;
(function (Vochse504ApplicationJsonErrorDescriptionEnum) {
    Vochse504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Vochse504ApplicationJsonErrorDescriptionEnum || (Vochse504ApplicationJsonErrorDescriptionEnum = {}));
var Vochse504ApplicationJson = /** @class */ (function (_super) {
    __extends(Vochse504ApplicationJson, _super);
    function Vochse504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vochse504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vochse504ApplicationJson.prototype, "errorDescription", void 0);
    return Vochse504ApplicationJson;
}(SpeakeasyBase));
export { Vochse504ApplicationJson };
var VochseResponse = /** @class */ (function (_super) {
    __extends(VochseResponse, _super);
    function VochseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], VochseResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], VochseResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Vochse400ApplicationJson)
    ], VochseResponse.prototype, "vochse400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Vochse401ApplicationJson)
    ], VochseResponse.prototype, "vochse401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Vochse404ApplicationJson)
    ], VochseResponse.prototype, "vochse404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Vochse500ApplicationJson)
    ], VochseResponse.prototype, "vochse500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Vochse502ApplicationJson)
    ], VochseResponse.prototype, "vochse502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Vochse503ApplicationJson)
    ], VochseResponse.prototype, "vochse503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Vochse504ApplicationJson)
    ], VochseResponse.prototype, "vochse504ApplicationJsonObject", void 0);
    return VochseResponse;
}(SpeakeasyBase));
export { VochseResponse };
