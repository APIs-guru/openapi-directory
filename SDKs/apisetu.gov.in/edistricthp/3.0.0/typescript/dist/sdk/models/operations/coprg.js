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
var CoprgRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(CoprgRequestBodyCertificateParameters, _super);
    function CoprgRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], CoprgRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return CoprgRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { CoprgRequestBodyCertificateParameters };
export var CoprgRequestBodyFormatEnum;
(function (CoprgRequestBodyFormatEnum) {
    CoprgRequestBodyFormatEnum["Pdf"] = "pdf";
})(CoprgRequestBodyFormatEnum || (CoprgRequestBodyFormatEnum = {}));
var CoprgRequestBody = /** @class */ (function (_super) {
    __extends(CoprgRequestBody, _super);
    function CoprgRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", CoprgRequestBodyCertificateParameters)
    ], CoprgRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], CoprgRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CoprgRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], CoprgRequestBody.prototype, "txnId", void 0);
    return CoprgRequestBody;
}(SpeakeasyBase));
export { CoprgRequestBody };
var CoprgSecurity = /** @class */ (function (_super) {
    __extends(CoprgSecurity, _super);
    function CoprgSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CoprgSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], CoprgSecurity.prototype, "clientId", void 0);
    return CoprgSecurity;
}(SpeakeasyBase));
export { CoprgSecurity };
export var Coprg400ApplicationJsonErrorEnum;
(function (Coprg400ApplicationJsonErrorEnum) {
    Coprg400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Coprg400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Coprg400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Coprg400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Coprg400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Coprg400ApplicationJsonErrorEnum || (Coprg400ApplicationJsonErrorEnum = {}));
export var Coprg400ApplicationJsonErrorDescriptionEnum;
(function (Coprg400ApplicationJsonErrorDescriptionEnum) {
    Coprg400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Coprg400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Coprg400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Coprg400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Coprg400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Coprg400ApplicationJsonErrorDescriptionEnum || (Coprg400ApplicationJsonErrorDescriptionEnum = {}));
var Coprg400ApplicationJson = /** @class */ (function (_super) {
    __extends(Coprg400ApplicationJson, _super);
    function Coprg400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Coprg400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Coprg400ApplicationJson.prototype, "errorDescription", void 0);
    return Coprg400ApplicationJson;
}(SpeakeasyBase));
export { Coprg400ApplicationJson };
export var Coprg401ApplicationJsonErrorEnum;
(function (Coprg401ApplicationJsonErrorEnum) {
    Coprg401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Coprg401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Coprg401ApplicationJsonErrorEnum || (Coprg401ApplicationJsonErrorEnum = {}));
export var Coprg401ApplicationJsonErrorDescriptionEnum;
(function (Coprg401ApplicationJsonErrorDescriptionEnum) {
    Coprg401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Coprg401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Coprg401ApplicationJsonErrorDescriptionEnum || (Coprg401ApplicationJsonErrorDescriptionEnum = {}));
var Coprg401ApplicationJson = /** @class */ (function (_super) {
    __extends(Coprg401ApplicationJson, _super);
    function Coprg401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Coprg401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Coprg401ApplicationJson.prototype, "errorDescription", void 0);
    return Coprg401ApplicationJson;
}(SpeakeasyBase));
export { Coprg401ApplicationJson };
export var Coprg404ApplicationJsonErrorEnum;
(function (Coprg404ApplicationJsonErrorEnum) {
    Coprg404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Coprg404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Coprg404ApplicationJsonErrorEnum || (Coprg404ApplicationJsonErrorEnum = {}));
export var Coprg404ApplicationJsonErrorDescriptionEnum;
(function (Coprg404ApplicationJsonErrorDescriptionEnum) {
    Coprg404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Coprg404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Coprg404ApplicationJsonErrorDescriptionEnum || (Coprg404ApplicationJsonErrorDescriptionEnum = {}));
var Coprg404ApplicationJson = /** @class */ (function (_super) {
    __extends(Coprg404ApplicationJson, _super);
    function Coprg404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Coprg404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Coprg404ApplicationJson.prototype, "errorDescription", void 0);
    return Coprg404ApplicationJson;
}(SpeakeasyBase));
export { Coprg404ApplicationJson };
export var Coprg500ApplicationJsonErrorEnum;
(function (Coprg500ApplicationJsonErrorEnum) {
    Coprg500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Coprg500ApplicationJsonErrorEnum || (Coprg500ApplicationJsonErrorEnum = {}));
export var Coprg500ApplicationJsonErrorDescriptionEnum;
(function (Coprg500ApplicationJsonErrorDescriptionEnum) {
    Coprg500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Coprg500ApplicationJsonErrorDescriptionEnum || (Coprg500ApplicationJsonErrorDescriptionEnum = {}));
var Coprg500ApplicationJson = /** @class */ (function (_super) {
    __extends(Coprg500ApplicationJson, _super);
    function Coprg500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Coprg500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Coprg500ApplicationJson.prototype, "errorDescription", void 0);
    return Coprg500ApplicationJson;
}(SpeakeasyBase));
export { Coprg500ApplicationJson };
export var Coprg502ApplicationJsonErrorEnum;
(function (Coprg502ApplicationJsonErrorEnum) {
    Coprg502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Coprg502ApplicationJsonErrorEnum || (Coprg502ApplicationJsonErrorEnum = {}));
export var Coprg502ApplicationJsonErrorDescriptionEnum;
(function (Coprg502ApplicationJsonErrorDescriptionEnum) {
    Coprg502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Coprg502ApplicationJsonErrorDescriptionEnum || (Coprg502ApplicationJsonErrorDescriptionEnum = {}));
var Coprg502ApplicationJson = /** @class */ (function (_super) {
    __extends(Coprg502ApplicationJson, _super);
    function Coprg502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Coprg502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Coprg502ApplicationJson.prototype, "errorDescription", void 0);
    return Coprg502ApplicationJson;
}(SpeakeasyBase));
export { Coprg502ApplicationJson };
export var Coprg503ApplicationJsonErrorEnum;
(function (Coprg503ApplicationJsonErrorEnum) {
    Coprg503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Coprg503ApplicationJsonErrorEnum || (Coprg503ApplicationJsonErrorEnum = {}));
export var Coprg503ApplicationJsonErrorDescriptionEnum;
(function (Coprg503ApplicationJsonErrorDescriptionEnum) {
    Coprg503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Coprg503ApplicationJsonErrorDescriptionEnum || (Coprg503ApplicationJsonErrorDescriptionEnum = {}));
var Coprg503ApplicationJson = /** @class */ (function (_super) {
    __extends(Coprg503ApplicationJson, _super);
    function Coprg503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Coprg503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Coprg503ApplicationJson.prototype, "errorDescription", void 0);
    return Coprg503ApplicationJson;
}(SpeakeasyBase));
export { Coprg503ApplicationJson };
export var Coprg504ApplicationJsonErrorEnum;
(function (Coprg504ApplicationJsonErrorEnum) {
    Coprg504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Coprg504ApplicationJsonErrorEnum || (Coprg504ApplicationJsonErrorEnum = {}));
export var Coprg504ApplicationJsonErrorDescriptionEnum;
(function (Coprg504ApplicationJsonErrorDescriptionEnum) {
    Coprg504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Coprg504ApplicationJsonErrorDescriptionEnum || (Coprg504ApplicationJsonErrorDescriptionEnum = {}));
var Coprg504ApplicationJson = /** @class */ (function (_super) {
    __extends(Coprg504ApplicationJson, _super);
    function Coprg504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Coprg504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Coprg504ApplicationJson.prototype, "errorDescription", void 0);
    return Coprg504ApplicationJson;
}(SpeakeasyBase));
export { Coprg504ApplicationJson };
var CoprgRequest = /** @class */ (function (_super) {
    __extends(CoprgRequest, _super);
    function CoprgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CoprgRequestBody)
    ], CoprgRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CoprgSecurity)
    ], CoprgRequest.prototype, "security", void 0);
    return CoprgRequest;
}(SpeakeasyBase));
export { CoprgRequest };
var CoprgResponse = /** @class */ (function (_super) {
    __extends(CoprgResponse, _super);
    function CoprgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CoprgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CoprgResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Coprg400ApplicationJson)
    ], CoprgResponse.prototype, "coprg400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Coprg401ApplicationJson)
    ], CoprgResponse.prototype, "coprg401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Coprg404ApplicationJson)
    ], CoprgResponse.prototype, "coprg404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Coprg500ApplicationJson)
    ], CoprgResponse.prototype, "coprg500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Coprg502ApplicationJson)
    ], CoprgResponse.prototype, "coprg502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Coprg503ApplicationJson)
    ], CoprgResponse.prototype, "coprg503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Coprg504ApplicationJson)
    ], CoprgResponse.prototype, "coprg504ApplicationJsonObject", void 0);
    return CoprgResponse;
}(SpeakeasyBase));
export { CoprgResponse };
