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
var RatcrRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RatcrRequestBodyCertificateParameters, _super);
    function RatcrRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], RatcrRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], RatcrRequestBodyCertificateParameters.prototype, "uid", void 0);
    return RatcrRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { RatcrRequestBodyCertificateParameters };
export var RatcrRequestBodyFormatEnum;
(function (RatcrRequestBodyFormatEnum) {
    RatcrRequestBodyFormatEnum["Pdf"] = "pdf";
})(RatcrRequestBodyFormatEnum || (RatcrRequestBodyFormatEnum = {}));
var RatcrRequestBody = /** @class */ (function (_super) {
    __extends(RatcrRequestBody, _super);
    function RatcrRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RatcrRequestBodyCertificateParameters)
    ], RatcrRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RatcrRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RatcrRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RatcrRequestBody.prototype, "txnId", void 0);
    return RatcrRequestBody;
}(SpeakeasyBase));
export { RatcrRequestBody };
var RatcrSecurity = /** @class */ (function (_super) {
    __extends(RatcrSecurity, _super);
    function RatcrSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RatcrSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RatcrSecurity.prototype, "clientId", void 0);
    return RatcrSecurity;
}(SpeakeasyBase));
export { RatcrSecurity };
export var Ratcr400ApplicationJsonErrorEnum;
(function (Ratcr400ApplicationJsonErrorEnum) {
    Ratcr400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Ratcr400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Ratcr400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Ratcr400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Ratcr400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Ratcr400ApplicationJsonErrorEnum || (Ratcr400ApplicationJsonErrorEnum = {}));
export var Ratcr400ApplicationJsonErrorDescriptionEnum;
(function (Ratcr400ApplicationJsonErrorDescriptionEnum) {
    Ratcr400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Ratcr400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Ratcr400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Ratcr400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Ratcr400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Ratcr400ApplicationJsonErrorDescriptionEnum || (Ratcr400ApplicationJsonErrorDescriptionEnum = {}));
var Ratcr400ApplicationJson = /** @class */ (function (_super) {
    __extends(Ratcr400ApplicationJson, _super);
    function Ratcr400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ratcr400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ratcr400ApplicationJson.prototype, "errorDescription", void 0);
    return Ratcr400ApplicationJson;
}(SpeakeasyBase));
export { Ratcr400ApplicationJson };
export var Ratcr401ApplicationJsonErrorEnum;
(function (Ratcr401ApplicationJsonErrorEnum) {
    Ratcr401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Ratcr401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Ratcr401ApplicationJsonErrorEnum || (Ratcr401ApplicationJsonErrorEnum = {}));
export var Ratcr401ApplicationJsonErrorDescriptionEnum;
(function (Ratcr401ApplicationJsonErrorDescriptionEnum) {
    Ratcr401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Ratcr401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Ratcr401ApplicationJsonErrorDescriptionEnum || (Ratcr401ApplicationJsonErrorDescriptionEnum = {}));
var Ratcr401ApplicationJson = /** @class */ (function (_super) {
    __extends(Ratcr401ApplicationJson, _super);
    function Ratcr401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ratcr401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ratcr401ApplicationJson.prototype, "errorDescription", void 0);
    return Ratcr401ApplicationJson;
}(SpeakeasyBase));
export { Ratcr401ApplicationJson };
export var Ratcr404ApplicationJsonErrorEnum;
(function (Ratcr404ApplicationJsonErrorEnum) {
    Ratcr404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Ratcr404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Ratcr404ApplicationJsonErrorEnum || (Ratcr404ApplicationJsonErrorEnum = {}));
export var Ratcr404ApplicationJsonErrorDescriptionEnum;
(function (Ratcr404ApplicationJsonErrorDescriptionEnum) {
    Ratcr404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Ratcr404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Ratcr404ApplicationJsonErrorDescriptionEnum || (Ratcr404ApplicationJsonErrorDescriptionEnum = {}));
var Ratcr404ApplicationJson = /** @class */ (function (_super) {
    __extends(Ratcr404ApplicationJson, _super);
    function Ratcr404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ratcr404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ratcr404ApplicationJson.prototype, "errorDescription", void 0);
    return Ratcr404ApplicationJson;
}(SpeakeasyBase));
export { Ratcr404ApplicationJson };
export var Ratcr500ApplicationJsonErrorEnum;
(function (Ratcr500ApplicationJsonErrorEnum) {
    Ratcr500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Ratcr500ApplicationJsonErrorEnum || (Ratcr500ApplicationJsonErrorEnum = {}));
export var Ratcr500ApplicationJsonErrorDescriptionEnum;
(function (Ratcr500ApplicationJsonErrorDescriptionEnum) {
    Ratcr500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Ratcr500ApplicationJsonErrorDescriptionEnum || (Ratcr500ApplicationJsonErrorDescriptionEnum = {}));
var Ratcr500ApplicationJson = /** @class */ (function (_super) {
    __extends(Ratcr500ApplicationJson, _super);
    function Ratcr500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ratcr500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ratcr500ApplicationJson.prototype, "errorDescription", void 0);
    return Ratcr500ApplicationJson;
}(SpeakeasyBase));
export { Ratcr500ApplicationJson };
export var Ratcr502ApplicationJsonErrorEnum;
(function (Ratcr502ApplicationJsonErrorEnum) {
    Ratcr502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Ratcr502ApplicationJsonErrorEnum || (Ratcr502ApplicationJsonErrorEnum = {}));
export var Ratcr502ApplicationJsonErrorDescriptionEnum;
(function (Ratcr502ApplicationJsonErrorDescriptionEnum) {
    Ratcr502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Ratcr502ApplicationJsonErrorDescriptionEnum || (Ratcr502ApplicationJsonErrorDescriptionEnum = {}));
var Ratcr502ApplicationJson = /** @class */ (function (_super) {
    __extends(Ratcr502ApplicationJson, _super);
    function Ratcr502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ratcr502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ratcr502ApplicationJson.prototype, "errorDescription", void 0);
    return Ratcr502ApplicationJson;
}(SpeakeasyBase));
export { Ratcr502ApplicationJson };
export var Ratcr503ApplicationJsonErrorEnum;
(function (Ratcr503ApplicationJsonErrorEnum) {
    Ratcr503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Ratcr503ApplicationJsonErrorEnum || (Ratcr503ApplicationJsonErrorEnum = {}));
export var Ratcr503ApplicationJsonErrorDescriptionEnum;
(function (Ratcr503ApplicationJsonErrorDescriptionEnum) {
    Ratcr503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Ratcr503ApplicationJsonErrorDescriptionEnum || (Ratcr503ApplicationJsonErrorDescriptionEnum = {}));
var Ratcr503ApplicationJson = /** @class */ (function (_super) {
    __extends(Ratcr503ApplicationJson, _super);
    function Ratcr503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ratcr503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ratcr503ApplicationJson.prototype, "errorDescription", void 0);
    return Ratcr503ApplicationJson;
}(SpeakeasyBase));
export { Ratcr503ApplicationJson };
export var Ratcr504ApplicationJsonErrorEnum;
(function (Ratcr504ApplicationJsonErrorEnum) {
    Ratcr504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Ratcr504ApplicationJsonErrorEnum || (Ratcr504ApplicationJsonErrorEnum = {}));
export var Ratcr504ApplicationJsonErrorDescriptionEnum;
(function (Ratcr504ApplicationJsonErrorDescriptionEnum) {
    Ratcr504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Ratcr504ApplicationJsonErrorDescriptionEnum || (Ratcr504ApplicationJsonErrorDescriptionEnum = {}));
var Ratcr504ApplicationJson = /** @class */ (function (_super) {
    __extends(Ratcr504ApplicationJson, _super);
    function Ratcr504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ratcr504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ratcr504ApplicationJson.prototype, "errorDescription", void 0);
    return Ratcr504ApplicationJson;
}(SpeakeasyBase));
export { Ratcr504ApplicationJson };
var RatcrRequest = /** @class */ (function (_super) {
    __extends(RatcrRequest, _super);
    function RatcrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RatcrRequestBody)
    ], RatcrRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RatcrSecurity)
    ], RatcrRequest.prototype, "security", void 0);
    return RatcrRequest;
}(SpeakeasyBase));
export { RatcrRequest };
var RatcrResponse = /** @class */ (function (_super) {
    __extends(RatcrResponse, _super);
    function RatcrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RatcrResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RatcrResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ratcr400ApplicationJson)
    ], RatcrResponse.prototype, "ratcr400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ratcr401ApplicationJson)
    ], RatcrResponse.prototype, "ratcr401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ratcr404ApplicationJson)
    ], RatcrResponse.prototype, "ratcr404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ratcr500ApplicationJson)
    ], RatcrResponse.prototype, "ratcr500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ratcr502ApplicationJson)
    ], RatcrResponse.prototype, "ratcr502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ratcr503ApplicationJson)
    ], RatcrResponse.prototype, "ratcr503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ratcr504ApplicationJson)
    ], RatcrResponse.prototype, "ratcr504ApplicationJsonObject", void 0);
    return RatcrResponse;
}(SpeakeasyBase));
export { RatcrResponse };
