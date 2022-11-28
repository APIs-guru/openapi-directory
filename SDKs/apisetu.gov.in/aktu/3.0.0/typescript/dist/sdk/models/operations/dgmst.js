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
var DgmstRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(DgmstRequestBodyCertificateParameters, _super);
    function DgmstRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], DgmstRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnrollmentNo" }),
        __metadata("design:type", String)
    ], DgmstRequestBodyCertificateParameters.prototype, "enrollmentNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], DgmstRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RollNo" }),
        __metadata("design:type", String)
    ], DgmstRequestBodyCertificateParameters.prototype, "rollNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], DgmstRequestBodyCertificateParameters.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Year" }),
        __metadata("design:type", String)
    ], DgmstRequestBodyCertificateParameters.prototype, "year", void 0);
    return DgmstRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { DgmstRequestBodyCertificateParameters };
export var DgmstRequestBodyFormatEnum;
(function (DgmstRequestBodyFormatEnum) {
    DgmstRequestBodyFormatEnum["Pdf"] = "pdf";
})(DgmstRequestBodyFormatEnum || (DgmstRequestBodyFormatEnum = {}));
var DgmstRequestBody = /** @class */ (function (_super) {
    __extends(DgmstRequestBody, _super);
    function DgmstRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", DgmstRequestBodyCertificateParameters)
    ], DgmstRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], DgmstRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], DgmstRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], DgmstRequestBody.prototype, "txnId", void 0);
    return DgmstRequestBody;
}(SpeakeasyBase));
export { DgmstRequestBody };
var DgmstSecurity = /** @class */ (function (_super) {
    __extends(DgmstSecurity, _super);
    function DgmstSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DgmstSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], DgmstSecurity.prototype, "clientId", void 0);
    return DgmstSecurity;
}(SpeakeasyBase));
export { DgmstSecurity };
export var Dgmst400ApplicationJsonErrorEnum;
(function (Dgmst400ApplicationJsonErrorEnum) {
    Dgmst400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Dgmst400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Dgmst400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Dgmst400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Dgmst400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Dgmst400ApplicationJsonErrorEnum || (Dgmst400ApplicationJsonErrorEnum = {}));
export var Dgmst400ApplicationJsonErrorDescriptionEnum;
(function (Dgmst400ApplicationJsonErrorDescriptionEnum) {
    Dgmst400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Dgmst400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Dgmst400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Dgmst400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Dgmst400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Dgmst400ApplicationJsonErrorDescriptionEnum || (Dgmst400ApplicationJsonErrorDescriptionEnum = {}));
var Dgmst400ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgmst400ApplicationJson, _super);
    function Dgmst400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgmst400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgmst400ApplicationJson.prototype, "errorDescription", void 0);
    return Dgmst400ApplicationJson;
}(SpeakeasyBase));
export { Dgmst400ApplicationJson };
export var Dgmst401ApplicationJsonErrorEnum;
(function (Dgmst401ApplicationJsonErrorEnum) {
    Dgmst401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Dgmst401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Dgmst401ApplicationJsonErrorEnum || (Dgmst401ApplicationJsonErrorEnum = {}));
export var Dgmst401ApplicationJsonErrorDescriptionEnum;
(function (Dgmst401ApplicationJsonErrorDescriptionEnum) {
    Dgmst401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Dgmst401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Dgmst401ApplicationJsonErrorDescriptionEnum || (Dgmst401ApplicationJsonErrorDescriptionEnum = {}));
var Dgmst401ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgmst401ApplicationJson, _super);
    function Dgmst401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgmst401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgmst401ApplicationJson.prototype, "errorDescription", void 0);
    return Dgmst401ApplicationJson;
}(SpeakeasyBase));
export { Dgmst401ApplicationJson };
export var Dgmst404ApplicationJsonErrorEnum;
(function (Dgmst404ApplicationJsonErrorEnum) {
    Dgmst404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Dgmst404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Dgmst404ApplicationJsonErrorEnum || (Dgmst404ApplicationJsonErrorEnum = {}));
export var Dgmst404ApplicationJsonErrorDescriptionEnum;
(function (Dgmst404ApplicationJsonErrorDescriptionEnum) {
    Dgmst404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Dgmst404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Dgmst404ApplicationJsonErrorDescriptionEnum || (Dgmst404ApplicationJsonErrorDescriptionEnum = {}));
var Dgmst404ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgmst404ApplicationJson, _super);
    function Dgmst404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgmst404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgmst404ApplicationJson.prototype, "errorDescription", void 0);
    return Dgmst404ApplicationJson;
}(SpeakeasyBase));
export { Dgmst404ApplicationJson };
export var Dgmst500ApplicationJsonErrorEnum;
(function (Dgmst500ApplicationJsonErrorEnum) {
    Dgmst500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Dgmst500ApplicationJsonErrorEnum || (Dgmst500ApplicationJsonErrorEnum = {}));
export var Dgmst500ApplicationJsonErrorDescriptionEnum;
(function (Dgmst500ApplicationJsonErrorDescriptionEnum) {
    Dgmst500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Dgmst500ApplicationJsonErrorDescriptionEnum || (Dgmst500ApplicationJsonErrorDescriptionEnum = {}));
var Dgmst500ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgmst500ApplicationJson, _super);
    function Dgmst500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgmst500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgmst500ApplicationJson.prototype, "errorDescription", void 0);
    return Dgmst500ApplicationJson;
}(SpeakeasyBase));
export { Dgmst500ApplicationJson };
export var Dgmst502ApplicationJsonErrorEnum;
(function (Dgmst502ApplicationJsonErrorEnum) {
    Dgmst502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Dgmst502ApplicationJsonErrorEnum || (Dgmst502ApplicationJsonErrorEnum = {}));
export var Dgmst502ApplicationJsonErrorDescriptionEnum;
(function (Dgmst502ApplicationJsonErrorDescriptionEnum) {
    Dgmst502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Dgmst502ApplicationJsonErrorDescriptionEnum || (Dgmst502ApplicationJsonErrorDescriptionEnum = {}));
var Dgmst502ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgmst502ApplicationJson, _super);
    function Dgmst502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgmst502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgmst502ApplicationJson.prototype, "errorDescription", void 0);
    return Dgmst502ApplicationJson;
}(SpeakeasyBase));
export { Dgmst502ApplicationJson };
export var Dgmst503ApplicationJsonErrorEnum;
(function (Dgmst503ApplicationJsonErrorEnum) {
    Dgmst503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Dgmst503ApplicationJsonErrorEnum || (Dgmst503ApplicationJsonErrorEnum = {}));
export var Dgmst503ApplicationJsonErrorDescriptionEnum;
(function (Dgmst503ApplicationJsonErrorDescriptionEnum) {
    Dgmst503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Dgmst503ApplicationJsonErrorDescriptionEnum || (Dgmst503ApplicationJsonErrorDescriptionEnum = {}));
var Dgmst503ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgmst503ApplicationJson, _super);
    function Dgmst503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgmst503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgmst503ApplicationJson.prototype, "errorDescription", void 0);
    return Dgmst503ApplicationJson;
}(SpeakeasyBase));
export { Dgmst503ApplicationJson };
export var Dgmst504ApplicationJsonErrorEnum;
(function (Dgmst504ApplicationJsonErrorEnum) {
    Dgmst504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Dgmst504ApplicationJsonErrorEnum || (Dgmst504ApplicationJsonErrorEnum = {}));
export var Dgmst504ApplicationJsonErrorDescriptionEnum;
(function (Dgmst504ApplicationJsonErrorDescriptionEnum) {
    Dgmst504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Dgmst504ApplicationJsonErrorDescriptionEnum || (Dgmst504ApplicationJsonErrorDescriptionEnum = {}));
var Dgmst504ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgmst504ApplicationJson, _super);
    function Dgmst504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgmst504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgmst504ApplicationJson.prototype, "errorDescription", void 0);
    return Dgmst504ApplicationJson;
}(SpeakeasyBase));
export { Dgmst504ApplicationJson };
var DgmstRequest = /** @class */ (function (_super) {
    __extends(DgmstRequest, _super);
    function DgmstRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DgmstRequestBody)
    ], DgmstRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DgmstSecurity)
    ], DgmstRequest.prototype, "security", void 0);
    return DgmstRequest;
}(SpeakeasyBase));
export { DgmstRequest };
var DgmstResponse = /** @class */ (function (_super) {
    __extends(DgmstResponse, _super);
    function DgmstResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DgmstResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DgmstResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dgmst400ApplicationJson)
    ], DgmstResponse.prototype, "dgmst400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dgmst401ApplicationJson)
    ], DgmstResponse.prototype, "dgmst401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dgmst404ApplicationJson)
    ], DgmstResponse.prototype, "dgmst404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dgmst500ApplicationJson)
    ], DgmstResponse.prototype, "dgmst500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dgmst502ApplicationJson)
    ], DgmstResponse.prototype, "dgmst502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dgmst503ApplicationJson)
    ], DgmstResponse.prototype, "dgmst503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dgmst504ApplicationJson)
    ], DgmstResponse.prototype, "dgmst504ApplicationJsonObject", void 0);
    return DgmstResponse;
}(SpeakeasyBase));
export { DgmstResponse };
