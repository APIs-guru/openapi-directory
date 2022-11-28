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
var CemstRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(CemstRequestBodyCertificateParameters, _super);
    function CemstRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], CemstRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], CemstRequestBodyCertificateParameters.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], CemstRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], CemstRequestBodyCertificateParameters.prototype, "year", void 0);
    return CemstRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { CemstRequestBodyCertificateParameters };
export var CemstRequestBodyFormatEnum;
(function (CemstRequestBodyFormatEnum) {
    CemstRequestBodyFormatEnum["Pdf"] = "pdf";
})(CemstRequestBodyFormatEnum || (CemstRequestBodyFormatEnum = {}));
var CemstRequestBody = /** @class */ (function (_super) {
    __extends(CemstRequestBody, _super);
    function CemstRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", CemstRequestBodyCertificateParameters)
    ], CemstRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], CemstRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CemstRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], CemstRequestBody.prototype, "txnId", void 0);
    return CemstRequestBody;
}(SpeakeasyBase));
export { CemstRequestBody };
var CemstSecurity = /** @class */ (function (_super) {
    __extends(CemstSecurity, _super);
    function CemstSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CemstSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], CemstSecurity.prototype, "clientId", void 0);
    return CemstSecurity;
}(SpeakeasyBase));
export { CemstSecurity };
export var Cemst400ApplicationJsonErrorEnum;
(function (Cemst400ApplicationJsonErrorEnum) {
    Cemst400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Cemst400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Cemst400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Cemst400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Cemst400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Cemst400ApplicationJsonErrorEnum || (Cemst400ApplicationJsonErrorEnum = {}));
export var Cemst400ApplicationJsonErrorDescriptionEnum;
(function (Cemst400ApplicationJsonErrorDescriptionEnum) {
    Cemst400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Cemst400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Cemst400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Cemst400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Cemst400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Cemst400ApplicationJsonErrorDescriptionEnum || (Cemst400ApplicationJsonErrorDescriptionEnum = {}));
var Cemst400ApplicationJson = /** @class */ (function (_super) {
    __extends(Cemst400ApplicationJson, _super);
    function Cemst400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cemst400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cemst400ApplicationJson.prototype, "errorDescription", void 0);
    return Cemst400ApplicationJson;
}(SpeakeasyBase));
export { Cemst400ApplicationJson };
export var Cemst401ApplicationJsonErrorEnum;
(function (Cemst401ApplicationJsonErrorEnum) {
    Cemst401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Cemst401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Cemst401ApplicationJsonErrorEnum || (Cemst401ApplicationJsonErrorEnum = {}));
export var Cemst401ApplicationJsonErrorDescriptionEnum;
(function (Cemst401ApplicationJsonErrorDescriptionEnum) {
    Cemst401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Cemst401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Cemst401ApplicationJsonErrorDescriptionEnum || (Cemst401ApplicationJsonErrorDescriptionEnum = {}));
var Cemst401ApplicationJson = /** @class */ (function (_super) {
    __extends(Cemst401ApplicationJson, _super);
    function Cemst401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cemst401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cemst401ApplicationJson.prototype, "errorDescription", void 0);
    return Cemst401ApplicationJson;
}(SpeakeasyBase));
export { Cemst401ApplicationJson };
export var Cemst404ApplicationJsonErrorEnum;
(function (Cemst404ApplicationJsonErrorEnum) {
    Cemst404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Cemst404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Cemst404ApplicationJsonErrorEnum || (Cemst404ApplicationJsonErrorEnum = {}));
export var Cemst404ApplicationJsonErrorDescriptionEnum;
(function (Cemst404ApplicationJsonErrorDescriptionEnum) {
    Cemst404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Cemst404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Cemst404ApplicationJsonErrorDescriptionEnum || (Cemst404ApplicationJsonErrorDescriptionEnum = {}));
var Cemst404ApplicationJson = /** @class */ (function (_super) {
    __extends(Cemst404ApplicationJson, _super);
    function Cemst404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cemst404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cemst404ApplicationJson.prototype, "errorDescription", void 0);
    return Cemst404ApplicationJson;
}(SpeakeasyBase));
export { Cemst404ApplicationJson };
export var Cemst500ApplicationJsonErrorEnum;
(function (Cemst500ApplicationJsonErrorEnum) {
    Cemst500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Cemst500ApplicationJsonErrorEnum || (Cemst500ApplicationJsonErrorEnum = {}));
export var Cemst500ApplicationJsonErrorDescriptionEnum;
(function (Cemst500ApplicationJsonErrorDescriptionEnum) {
    Cemst500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Cemst500ApplicationJsonErrorDescriptionEnum || (Cemst500ApplicationJsonErrorDescriptionEnum = {}));
var Cemst500ApplicationJson = /** @class */ (function (_super) {
    __extends(Cemst500ApplicationJson, _super);
    function Cemst500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cemst500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cemst500ApplicationJson.prototype, "errorDescription", void 0);
    return Cemst500ApplicationJson;
}(SpeakeasyBase));
export { Cemst500ApplicationJson };
export var Cemst502ApplicationJsonErrorEnum;
(function (Cemst502ApplicationJsonErrorEnum) {
    Cemst502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Cemst502ApplicationJsonErrorEnum || (Cemst502ApplicationJsonErrorEnum = {}));
export var Cemst502ApplicationJsonErrorDescriptionEnum;
(function (Cemst502ApplicationJsonErrorDescriptionEnum) {
    Cemst502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Cemst502ApplicationJsonErrorDescriptionEnum || (Cemst502ApplicationJsonErrorDescriptionEnum = {}));
var Cemst502ApplicationJson = /** @class */ (function (_super) {
    __extends(Cemst502ApplicationJson, _super);
    function Cemst502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cemst502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cemst502ApplicationJson.prototype, "errorDescription", void 0);
    return Cemst502ApplicationJson;
}(SpeakeasyBase));
export { Cemst502ApplicationJson };
export var Cemst503ApplicationJsonErrorEnum;
(function (Cemst503ApplicationJsonErrorEnum) {
    Cemst503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Cemst503ApplicationJsonErrorEnum || (Cemst503ApplicationJsonErrorEnum = {}));
export var Cemst503ApplicationJsonErrorDescriptionEnum;
(function (Cemst503ApplicationJsonErrorDescriptionEnum) {
    Cemst503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Cemst503ApplicationJsonErrorDescriptionEnum || (Cemst503ApplicationJsonErrorDescriptionEnum = {}));
var Cemst503ApplicationJson = /** @class */ (function (_super) {
    __extends(Cemst503ApplicationJson, _super);
    function Cemst503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cemst503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cemst503ApplicationJson.prototype, "errorDescription", void 0);
    return Cemst503ApplicationJson;
}(SpeakeasyBase));
export { Cemst503ApplicationJson };
export var Cemst504ApplicationJsonErrorEnum;
(function (Cemst504ApplicationJsonErrorEnum) {
    Cemst504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Cemst504ApplicationJsonErrorEnum || (Cemst504ApplicationJsonErrorEnum = {}));
export var Cemst504ApplicationJsonErrorDescriptionEnum;
(function (Cemst504ApplicationJsonErrorDescriptionEnum) {
    Cemst504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Cemst504ApplicationJsonErrorDescriptionEnum || (Cemst504ApplicationJsonErrorDescriptionEnum = {}));
var Cemst504ApplicationJson = /** @class */ (function (_super) {
    __extends(Cemst504ApplicationJson, _super);
    function Cemst504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cemst504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cemst504ApplicationJson.prototype, "errorDescription", void 0);
    return Cemst504ApplicationJson;
}(SpeakeasyBase));
export { Cemst504ApplicationJson };
var CemstRequest = /** @class */ (function (_super) {
    __extends(CemstRequest, _super);
    function CemstRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CemstRequestBody)
    ], CemstRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CemstSecurity)
    ], CemstRequest.prototype, "security", void 0);
    return CemstRequest;
}(SpeakeasyBase));
export { CemstRequest };
var CemstResponse = /** @class */ (function (_super) {
    __extends(CemstResponse, _super);
    function CemstResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CemstResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CemstResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cemst400ApplicationJson)
    ], CemstResponse.prototype, "cemst400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cemst401ApplicationJson)
    ], CemstResponse.prototype, "cemst401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cemst404ApplicationJson)
    ], CemstResponse.prototype, "cemst404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cemst500ApplicationJson)
    ], CemstResponse.prototype, "cemst500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cemst502ApplicationJson)
    ], CemstResponse.prototype, "cemst502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cemst503ApplicationJson)
    ], CemstResponse.prototype, "cemst503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cemst504ApplicationJson)
    ], CemstResponse.prototype, "cemst504ApplicationJsonObject", void 0);
    return CemstResponse;
}(SpeakeasyBase));
export { CemstResponse };
