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
var DipcrRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(DipcrRequestBodyCertificateParameters, _super);
    function DipcrRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], DipcrRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RollNo" }),
        __metadata("design:type", String)
    ], DipcrRequestBodyCertificateParameters.prototype, "rollNo", void 0);
    return DipcrRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { DipcrRequestBodyCertificateParameters };
export var DipcrRequestBodyFormatEnum;
(function (DipcrRequestBodyFormatEnum) {
    DipcrRequestBodyFormatEnum["Pdf"] = "pdf";
})(DipcrRequestBodyFormatEnum || (DipcrRequestBodyFormatEnum = {}));
var DipcrRequestBody = /** @class */ (function (_super) {
    __extends(DipcrRequestBody, _super);
    function DipcrRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", DipcrRequestBodyCertificateParameters)
    ], DipcrRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], DipcrRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], DipcrRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], DipcrRequestBody.prototype, "txnId", void 0);
    return DipcrRequestBody;
}(SpeakeasyBase));
export { DipcrRequestBody };
var DipcrSecurity = /** @class */ (function (_super) {
    __extends(DipcrSecurity, _super);
    function DipcrSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DipcrSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], DipcrSecurity.prototype, "clientId", void 0);
    return DipcrSecurity;
}(SpeakeasyBase));
export { DipcrSecurity };
export var Dipcr400ApplicationJsonErrorEnum;
(function (Dipcr400ApplicationJsonErrorEnum) {
    Dipcr400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Dipcr400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Dipcr400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Dipcr400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Dipcr400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Dipcr400ApplicationJsonErrorEnum || (Dipcr400ApplicationJsonErrorEnum = {}));
export var Dipcr400ApplicationJsonErrorDescriptionEnum;
(function (Dipcr400ApplicationJsonErrorDescriptionEnum) {
    Dipcr400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Dipcr400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Dipcr400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Dipcr400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Dipcr400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Dipcr400ApplicationJsonErrorDescriptionEnum || (Dipcr400ApplicationJsonErrorDescriptionEnum = {}));
var Dipcr400ApplicationJson = /** @class */ (function (_super) {
    __extends(Dipcr400ApplicationJson, _super);
    function Dipcr400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dipcr400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dipcr400ApplicationJson.prototype, "errorDescription", void 0);
    return Dipcr400ApplicationJson;
}(SpeakeasyBase));
export { Dipcr400ApplicationJson };
export var Dipcr401ApplicationJsonErrorEnum;
(function (Dipcr401ApplicationJsonErrorEnum) {
    Dipcr401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Dipcr401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Dipcr401ApplicationJsonErrorEnum || (Dipcr401ApplicationJsonErrorEnum = {}));
export var Dipcr401ApplicationJsonErrorDescriptionEnum;
(function (Dipcr401ApplicationJsonErrorDescriptionEnum) {
    Dipcr401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Dipcr401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Dipcr401ApplicationJsonErrorDescriptionEnum || (Dipcr401ApplicationJsonErrorDescriptionEnum = {}));
var Dipcr401ApplicationJson = /** @class */ (function (_super) {
    __extends(Dipcr401ApplicationJson, _super);
    function Dipcr401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dipcr401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dipcr401ApplicationJson.prototype, "errorDescription", void 0);
    return Dipcr401ApplicationJson;
}(SpeakeasyBase));
export { Dipcr401ApplicationJson };
export var Dipcr404ApplicationJsonErrorEnum;
(function (Dipcr404ApplicationJsonErrorEnum) {
    Dipcr404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Dipcr404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Dipcr404ApplicationJsonErrorEnum || (Dipcr404ApplicationJsonErrorEnum = {}));
export var Dipcr404ApplicationJsonErrorDescriptionEnum;
(function (Dipcr404ApplicationJsonErrorDescriptionEnum) {
    Dipcr404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Dipcr404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Dipcr404ApplicationJsonErrorDescriptionEnum || (Dipcr404ApplicationJsonErrorDescriptionEnum = {}));
var Dipcr404ApplicationJson = /** @class */ (function (_super) {
    __extends(Dipcr404ApplicationJson, _super);
    function Dipcr404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dipcr404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dipcr404ApplicationJson.prototype, "errorDescription", void 0);
    return Dipcr404ApplicationJson;
}(SpeakeasyBase));
export { Dipcr404ApplicationJson };
export var Dipcr500ApplicationJsonErrorEnum;
(function (Dipcr500ApplicationJsonErrorEnum) {
    Dipcr500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Dipcr500ApplicationJsonErrorEnum || (Dipcr500ApplicationJsonErrorEnum = {}));
export var Dipcr500ApplicationJsonErrorDescriptionEnum;
(function (Dipcr500ApplicationJsonErrorDescriptionEnum) {
    Dipcr500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Dipcr500ApplicationJsonErrorDescriptionEnum || (Dipcr500ApplicationJsonErrorDescriptionEnum = {}));
var Dipcr500ApplicationJson = /** @class */ (function (_super) {
    __extends(Dipcr500ApplicationJson, _super);
    function Dipcr500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dipcr500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dipcr500ApplicationJson.prototype, "errorDescription", void 0);
    return Dipcr500ApplicationJson;
}(SpeakeasyBase));
export { Dipcr500ApplicationJson };
export var Dipcr502ApplicationJsonErrorEnum;
(function (Dipcr502ApplicationJsonErrorEnum) {
    Dipcr502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Dipcr502ApplicationJsonErrorEnum || (Dipcr502ApplicationJsonErrorEnum = {}));
export var Dipcr502ApplicationJsonErrorDescriptionEnum;
(function (Dipcr502ApplicationJsonErrorDescriptionEnum) {
    Dipcr502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Dipcr502ApplicationJsonErrorDescriptionEnum || (Dipcr502ApplicationJsonErrorDescriptionEnum = {}));
var Dipcr502ApplicationJson = /** @class */ (function (_super) {
    __extends(Dipcr502ApplicationJson, _super);
    function Dipcr502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dipcr502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dipcr502ApplicationJson.prototype, "errorDescription", void 0);
    return Dipcr502ApplicationJson;
}(SpeakeasyBase));
export { Dipcr502ApplicationJson };
export var Dipcr503ApplicationJsonErrorEnum;
(function (Dipcr503ApplicationJsonErrorEnum) {
    Dipcr503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Dipcr503ApplicationJsonErrorEnum || (Dipcr503ApplicationJsonErrorEnum = {}));
export var Dipcr503ApplicationJsonErrorDescriptionEnum;
(function (Dipcr503ApplicationJsonErrorDescriptionEnum) {
    Dipcr503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Dipcr503ApplicationJsonErrorDescriptionEnum || (Dipcr503ApplicationJsonErrorDescriptionEnum = {}));
var Dipcr503ApplicationJson = /** @class */ (function (_super) {
    __extends(Dipcr503ApplicationJson, _super);
    function Dipcr503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dipcr503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dipcr503ApplicationJson.prototype, "errorDescription", void 0);
    return Dipcr503ApplicationJson;
}(SpeakeasyBase));
export { Dipcr503ApplicationJson };
export var Dipcr504ApplicationJsonErrorEnum;
(function (Dipcr504ApplicationJsonErrorEnum) {
    Dipcr504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Dipcr504ApplicationJsonErrorEnum || (Dipcr504ApplicationJsonErrorEnum = {}));
export var Dipcr504ApplicationJsonErrorDescriptionEnum;
(function (Dipcr504ApplicationJsonErrorDescriptionEnum) {
    Dipcr504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Dipcr504ApplicationJsonErrorDescriptionEnum || (Dipcr504ApplicationJsonErrorDescriptionEnum = {}));
var Dipcr504ApplicationJson = /** @class */ (function (_super) {
    __extends(Dipcr504ApplicationJson, _super);
    function Dipcr504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dipcr504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dipcr504ApplicationJson.prototype, "errorDescription", void 0);
    return Dipcr504ApplicationJson;
}(SpeakeasyBase));
export { Dipcr504ApplicationJson };
var DipcrRequest = /** @class */ (function (_super) {
    __extends(DipcrRequest, _super);
    function DipcrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DipcrRequestBody)
    ], DipcrRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DipcrSecurity)
    ], DipcrRequest.prototype, "security", void 0);
    return DipcrRequest;
}(SpeakeasyBase));
export { DipcrRequest };
var DipcrResponse = /** @class */ (function (_super) {
    __extends(DipcrResponse, _super);
    function DipcrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DipcrResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DipcrResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dipcr400ApplicationJson)
    ], DipcrResponse.prototype, "dipcr400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dipcr401ApplicationJson)
    ], DipcrResponse.prototype, "dipcr401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dipcr404ApplicationJson)
    ], DipcrResponse.prototype, "dipcr404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dipcr500ApplicationJson)
    ], DipcrResponse.prototype, "dipcr500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dipcr502ApplicationJson)
    ], DipcrResponse.prototype, "dipcr502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dipcr503ApplicationJson)
    ], DipcrResponse.prototype, "dipcr503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dipcr504ApplicationJson)
    ], DipcrResponse.prototype, "dipcr504ApplicationJsonObject", void 0);
    return DipcrResponse;
}(SpeakeasyBase));
export { DipcrResponse };
