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
var GovidRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(GovidRequestBodyCertificateParameters, _super);
    function GovidRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CARD_NO" }),
        __metadata("design:type", String)
    ], GovidRequestBodyCertificateParameters.prototype, "cardNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], GovidRequestBodyCertificateParameters.prototype, "fullName", void 0);
    return GovidRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { GovidRequestBodyCertificateParameters };
export var GovidRequestBodyFormatEnum;
(function (GovidRequestBodyFormatEnum) {
    GovidRequestBodyFormatEnum["Pdf"] = "pdf";
})(GovidRequestBodyFormatEnum || (GovidRequestBodyFormatEnum = {}));
var GovidRequestBody = /** @class */ (function (_super) {
    __extends(GovidRequestBody, _super);
    function GovidRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", GovidRequestBodyCertificateParameters)
    ], GovidRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], GovidRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], GovidRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], GovidRequestBody.prototype, "txnId", void 0);
    return GovidRequestBody;
}(SpeakeasyBase));
export { GovidRequestBody };
var GovidSecurity = /** @class */ (function (_super) {
    __extends(GovidSecurity, _super);
    function GovidSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GovidSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], GovidSecurity.prototype, "clientId", void 0);
    return GovidSecurity;
}(SpeakeasyBase));
export { GovidSecurity };
export var Govid400ApplicationJsonErrorEnum;
(function (Govid400ApplicationJsonErrorEnum) {
    Govid400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Govid400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Govid400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Govid400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Govid400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Govid400ApplicationJsonErrorEnum || (Govid400ApplicationJsonErrorEnum = {}));
export var Govid400ApplicationJsonErrorDescriptionEnum;
(function (Govid400ApplicationJsonErrorDescriptionEnum) {
    Govid400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Govid400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Govid400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Govid400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Govid400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Govid400ApplicationJsonErrorDescriptionEnum || (Govid400ApplicationJsonErrorDescriptionEnum = {}));
var Govid400ApplicationJson = /** @class */ (function (_super) {
    __extends(Govid400ApplicationJson, _super);
    function Govid400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Govid400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Govid400ApplicationJson.prototype, "errorDescription", void 0);
    return Govid400ApplicationJson;
}(SpeakeasyBase));
export { Govid400ApplicationJson };
export var Govid401ApplicationJsonErrorEnum;
(function (Govid401ApplicationJsonErrorEnum) {
    Govid401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Govid401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Govid401ApplicationJsonErrorEnum || (Govid401ApplicationJsonErrorEnum = {}));
export var Govid401ApplicationJsonErrorDescriptionEnum;
(function (Govid401ApplicationJsonErrorDescriptionEnum) {
    Govid401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Govid401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Govid401ApplicationJsonErrorDescriptionEnum || (Govid401ApplicationJsonErrorDescriptionEnum = {}));
var Govid401ApplicationJson = /** @class */ (function (_super) {
    __extends(Govid401ApplicationJson, _super);
    function Govid401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Govid401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Govid401ApplicationJson.prototype, "errorDescription", void 0);
    return Govid401ApplicationJson;
}(SpeakeasyBase));
export { Govid401ApplicationJson };
export var Govid404ApplicationJsonErrorEnum;
(function (Govid404ApplicationJsonErrorEnum) {
    Govid404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Govid404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Govid404ApplicationJsonErrorEnum || (Govid404ApplicationJsonErrorEnum = {}));
export var Govid404ApplicationJsonErrorDescriptionEnum;
(function (Govid404ApplicationJsonErrorDescriptionEnum) {
    Govid404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Govid404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Govid404ApplicationJsonErrorDescriptionEnum || (Govid404ApplicationJsonErrorDescriptionEnum = {}));
var Govid404ApplicationJson = /** @class */ (function (_super) {
    __extends(Govid404ApplicationJson, _super);
    function Govid404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Govid404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Govid404ApplicationJson.prototype, "errorDescription", void 0);
    return Govid404ApplicationJson;
}(SpeakeasyBase));
export { Govid404ApplicationJson };
export var Govid500ApplicationJsonErrorEnum;
(function (Govid500ApplicationJsonErrorEnum) {
    Govid500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Govid500ApplicationJsonErrorEnum || (Govid500ApplicationJsonErrorEnum = {}));
export var Govid500ApplicationJsonErrorDescriptionEnum;
(function (Govid500ApplicationJsonErrorDescriptionEnum) {
    Govid500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Govid500ApplicationJsonErrorDescriptionEnum || (Govid500ApplicationJsonErrorDescriptionEnum = {}));
var Govid500ApplicationJson = /** @class */ (function (_super) {
    __extends(Govid500ApplicationJson, _super);
    function Govid500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Govid500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Govid500ApplicationJson.prototype, "errorDescription", void 0);
    return Govid500ApplicationJson;
}(SpeakeasyBase));
export { Govid500ApplicationJson };
export var Govid502ApplicationJsonErrorEnum;
(function (Govid502ApplicationJsonErrorEnum) {
    Govid502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Govid502ApplicationJsonErrorEnum || (Govid502ApplicationJsonErrorEnum = {}));
export var Govid502ApplicationJsonErrorDescriptionEnum;
(function (Govid502ApplicationJsonErrorDescriptionEnum) {
    Govid502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Govid502ApplicationJsonErrorDescriptionEnum || (Govid502ApplicationJsonErrorDescriptionEnum = {}));
var Govid502ApplicationJson = /** @class */ (function (_super) {
    __extends(Govid502ApplicationJson, _super);
    function Govid502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Govid502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Govid502ApplicationJson.prototype, "errorDescription", void 0);
    return Govid502ApplicationJson;
}(SpeakeasyBase));
export { Govid502ApplicationJson };
export var Govid503ApplicationJsonErrorEnum;
(function (Govid503ApplicationJsonErrorEnum) {
    Govid503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Govid503ApplicationJsonErrorEnum || (Govid503ApplicationJsonErrorEnum = {}));
export var Govid503ApplicationJsonErrorDescriptionEnum;
(function (Govid503ApplicationJsonErrorDescriptionEnum) {
    Govid503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Govid503ApplicationJsonErrorDescriptionEnum || (Govid503ApplicationJsonErrorDescriptionEnum = {}));
var Govid503ApplicationJson = /** @class */ (function (_super) {
    __extends(Govid503ApplicationJson, _super);
    function Govid503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Govid503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Govid503ApplicationJson.prototype, "errorDescription", void 0);
    return Govid503ApplicationJson;
}(SpeakeasyBase));
export { Govid503ApplicationJson };
export var Govid504ApplicationJsonErrorEnum;
(function (Govid504ApplicationJsonErrorEnum) {
    Govid504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Govid504ApplicationJsonErrorEnum || (Govid504ApplicationJsonErrorEnum = {}));
export var Govid504ApplicationJsonErrorDescriptionEnum;
(function (Govid504ApplicationJsonErrorDescriptionEnum) {
    Govid504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Govid504ApplicationJsonErrorDescriptionEnum || (Govid504ApplicationJsonErrorDescriptionEnum = {}));
var Govid504ApplicationJson = /** @class */ (function (_super) {
    __extends(Govid504ApplicationJson, _super);
    function Govid504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Govid504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Govid504ApplicationJson.prototype, "errorDescription", void 0);
    return Govid504ApplicationJson;
}(SpeakeasyBase));
export { Govid504ApplicationJson };
var GovidRequest = /** @class */ (function (_super) {
    __extends(GovidRequest, _super);
    function GovidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GovidRequestBody)
    ], GovidRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GovidSecurity)
    ], GovidRequest.prototype, "security", void 0);
    return GovidRequest;
}(SpeakeasyBase));
export { GovidRequest };
var GovidResponse = /** @class */ (function (_super) {
    __extends(GovidResponse, _super);
    function GovidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GovidResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GovidResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Govid400ApplicationJson)
    ], GovidResponse.prototype, "govid400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Govid401ApplicationJson)
    ], GovidResponse.prototype, "govid401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Govid404ApplicationJson)
    ], GovidResponse.prototype, "govid404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Govid500ApplicationJson)
    ], GovidResponse.prototype, "govid500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Govid502ApplicationJson)
    ], GovidResponse.prototype, "govid502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Govid503ApplicationJson)
    ], GovidResponse.prototype, "govid503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Govid504ApplicationJson)
    ], GovidResponse.prototype, "govid504ApplicationJsonObject", void 0);
    return GovidResponse;
}(SpeakeasyBase));
export { GovidResponse };
