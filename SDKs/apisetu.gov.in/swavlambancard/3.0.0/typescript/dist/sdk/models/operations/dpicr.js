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
var DpicrRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(DpicrRequestBodyCertificateParameters, _super);
    function DpicrRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CERT_NO" }),
        __metadata("design:type", String)
    ], DpicrRequestBodyCertificateParameters.prototype, "certNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], DpicrRequestBodyCertificateParameters.prototype, "fullName", void 0);
    return DpicrRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { DpicrRequestBodyCertificateParameters };
export var DpicrRequestBodyFormatEnum;
(function (DpicrRequestBodyFormatEnum) {
    DpicrRequestBodyFormatEnum["Pdf"] = "pdf";
})(DpicrRequestBodyFormatEnum || (DpicrRequestBodyFormatEnum = {}));
var DpicrRequestBody = /** @class */ (function (_super) {
    __extends(DpicrRequestBody, _super);
    function DpicrRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", DpicrRequestBodyCertificateParameters)
    ], DpicrRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], DpicrRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], DpicrRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], DpicrRequestBody.prototype, "txnId", void 0);
    return DpicrRequestBody;
}(SpeakeasyBase));
export { DpicrRequestBody };
var DpicrSecurity = /** @class */ (function (_super) {
    __extends(DpicrSecurity, _super);
    function DpicrSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DpicrSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], DpicrSecurity.prototype, "clientId", void 0);
    return DpicrSecurity;
}(SpeakeasyBase));
export { DpicrSecurity };
export var Dpicr400ApplicationJsonErrorEnum;
(function (Dpicr400ApplicationJsonErrorEnum) {
    Dpicr400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Dpicr400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Dpicr400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Dpicr400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Dpicr400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Dpicr400ApplicationJsonErrorEnum || (Dpicr400ApplicationJsonErrorEnum = {}));
export var Dpicr400ApplicationJsonErrorDescriptionEnum;
(function (Dpicr400ApplicationJsonErrorDescriptionEnum) {
    Dpicr400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Dpicr400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Dpicr400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Dpicr400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Dpicr400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Dpicr400ApplicationJsonErrorDescriptionEnum || (Dpicr400ApplicationJsonErrorDescriptionEnum = {}));
var Dpicr400ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpicr400ApplicationJson, _super);
    function Dpicr400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpicr400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpicr400ApplicationJson.prototype, "errorDescription", void 0);
    return Dpicr400ApplicationJson;
}(SpeakeasyBase));
export { Dpicr400ApplicationJson };
export var Dpicr401ApplicationJsonErrorEnum;
(function (Dpicr401ApplicationJsonErrorEnum) {
    Dpicr401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Dpicr401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Dpicr401ApplicationJsonErrorEnum || (Dpicr401ApplicationJsonErrorEnum = {}));
export var Dpicr401ApplicationJsonErrorDescriptionEnum;
(function (Dpicr401ApplicationJsonErrorDescriptionEnum) {
    Dpicr401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Dpicr401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Dpicr401ApplicationJsonErrorDescriptionEnum || (Dpicr401ApplicationJsonErrorDescriptionEnum = {}));
var Dpicr401ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpicr401ApplicationJson, _super);
    function Dpicr401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpicr401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpicr401ApplicationJson.prototype, "errorDescription", void 0);
    return Dpicr401ApplicationJson;
}(SpeakeasyBase));
export { Dpicr401ApplicationJson };
export var Dpicr404ApplicationJsonErrorEnum;
(function (Dpicr404ApplicationJsonErrorEnum) {
    Dpicr404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Dpicr404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Dpicr404ApplicationJsonErrorEnum || (Dpicr404ApplicationJsonErrorEnum = {}));
export var Dpicr404ApplicationJsonErrorDescriptionEnum;
(function (Dpicr404ApplicationJsonErrorDescriptionEnum) {
    Dpicr404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Dpicr404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Dpicr404ApplicationJsonErrorDescriptionEnum || (Dpicr404ApplicationJsonErrorDescriptionEnum = {}));
var Dpicr404ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpicr404ApplicationJson, _super);
    function Dpicr404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpicr404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpicr404ApplicationJson.prototype, "errorDescription", void 0);
    return Dpicr404ApplicationJson;
}(SpeakeasyBase));
export { Dpicr404ApplicationJson };
export var Dpicr500ApplicationJsonErrorEnum;
(function (Dpicr500ApplicationJsonErrorEnum) {
    Dpicr500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Dpicr500ApplicationJsonErrorEnum || (Dpicr500ApplicationJsonErrorEnum = {}));
export var Dpicr500ApplicationJsonErrorDescriptionEnum;
(function (Dpicr500ApplicationJsonErrorDescriptionEnum) {
    Dpicr500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Dpicr500ApplicationJsonErrorDescriptionEnum || (Dpicr500ApplicationJsonErrorDescriptionEnum = {}));
var Dpicr500ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpicr500ApplicationJson, _super);
    function Dpicr500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpicr500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpicr500ApplicationJson.prototype, "errorDescription", void 0);
    return Dpicr500ApplicationJson;
}(SpeakeasyBase));
export { Dpicr500ApplicationJson };
export var Dpicr502ApplicationJsonErrorEnum;
(function (Dpicr502ApplicationJsonErrorEnum) {
    Dpicr502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Dpicr502ApplicationJsonErrorEnum || (Dpicr502ApplicationJsonErrorEnum = {}));
export var Dpicr502ApplicationJsonErrorDescriptionEnum;
(function (Dpicr502ApplicationJsonErrorDescriptionEnum) {
    Dpicr502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Dpicr502ApplicationJsonErrorDescriptionEnum || (Dpicr502ApplicationJsonErrorDescriptionEnum = {}));
var Dpicr502ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpicr502ApplicationJson, _super);
    function Dpicr502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpicr502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpicr502ApplicationJson.prototype, "errorDescription", void 0);
    return Dpicr502ApplicationJson;
}(SpeakeasyBase));
export { Dpicr502ApplicationJson };
export var Dpicr503ApplicationJsonErrorEnum;
(function (Dpicr503ApplicationJsonErrorEnum) {
    Dpicr503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Dpicr503ApplicationJsonErrorEnum || (Dpicr503ApplicationJsonErrorEnum = {}));
export var Dpicr503ApplicationJsonErrorDescriptionEnum;
(function (Dpicr503ApplicationJsonErrorDescriptionEnum) {
    Dpicr503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Dpicr503ApplicationJsonErrorDescriptionEnum || (Dpicr503ApplicationJsonErrorDescriptionEnum = {}));
var Dpicr503ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpicr503ApplicationJson, _super);
    function Dpicr503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpicr503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpicr503ApplicationJson.prototype, "errorDescription", void 0);
    return Dpicr503ApplicationJson;
}(SpeakeasyBase));
export { Dpicr503ApplicationJson };
export var Dpicr504ApplicationJsonErrorEnum;
(function (Dpicr504ApplicationJsonErrorEnum) {
    Dpicr504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Dpicr504ApplicationJsonErrorEnum || (Dpicr504ApplicationJsonErrorEnum = {}));
export var Dpicr504ApplicationJsonErrorDescriptionEnum;
(function (Dpicr504ApplicationJsonErrorDescriptionEnum) {
    Dpicr504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Dpicr504ApplicationJsonErrorDescriptionEnum || (Dpicr504ApplicationJsonErrorDescriptionEnum = {}));
var Dpicr504ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpicr504ApplicationJson, _super);
    function Dpicr504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpicr504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpicr504ApplicationJson.prototype, "errorDescription", void 0);
    return Dpicr504ApplicationJson;
}(SpeakeasyBase));
export { Dpicr504ApplicationJson };
var DpicrRequest = /** @class */ (function (_super) {
    __extends(DpicrRequest, _super);
    function DpicrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DpicrRequestBody)
    ], DpicrRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DpicrSecurity)
    ], DpicrRequest.prototype, "security", void 0);
    return DpicrRequest;
}(SpeakeasyBase));
export { DpicrRequest };
var DpicrResponse = /** @class */ (function (_super) {
    __extends(DpicrResponse, _super);
    function DpicrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DpicrResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DpicrResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dpicr400ApplicationJson)
    ], DpicrResponse.prototype, "dpicr400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dpicr401ApplicationJson)
    ], DpicrResponse.prototype, "dpicr401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dpicr404ApplicationJson)
    ], DpicrResponse.prototype, "dpicr404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dpicr500ApplicationJson)
    ], DpicrResponse.prototype, "dpicr500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dpicr502ApplicationJson)
    ], DpicrResponse.prototype, "dpicr502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dpicr503ApplicationJson)
    ], DpicrResponse.prototype, "dpicr503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dpicr504ApplicationJson)
    ], DpicrResponse.prototype, "dpicr504ApplicationJsonObject", void 0);
    return DpicrResponse;
}(SpeakeasyBase));
export { DpicrResponse };
