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
var HvcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(HvcerRequestBodyCertificateParameters, _super);
    function HvcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], HvcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RROLL" }),
        __metadata("design:type", String)
    ], HvcerRequestBodyCertificateParameters.prototype, "rroll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=YEAR" }),
        __metadata("design:type", String)
    ], HvcerRequestBodyCertificateParameters.prototype, "year", void 0);
    return HvcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { HvcerRequestBodyCertificateParameters };
export var HvcerRequestBodyFormatEnum;
(function (HvcerRequestBodyFormatEnum) {
    HvcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(HvcerRequestBodyFormatEnum || (HvcerRequestBodyFormatEnum = {}));
var HvcerRequestBody = /** @class */ (function (_super) {
    __extends(HvcerRequestBody, _super);
    function HvcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", HvcerRequestBodyCertificateParameters)
    ], HvcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], HvcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], HvcerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], HvcerRequestBody.prototype, "txnId", void 0);
    return HvcerRequestBody;
}(SpeakeasyBase));
export { HvcerRequestBody };
var HvcerSecurity = /** @class */ (function (_super) {
    __extends(HvcerSecurity, _super);
    function HvcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], HvcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], HvcerSecurity.prototype, "clientId", void 0);
    return HvcerSecurity;
}(SpeakeasyBase));
export { HvcerSecurity };
export var Hvcer400ApplicationJsonErrorEnum;
(function (Hvcer400ApplicationJsonErrorEnum) {
    Hvcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Hvcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Hvcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Hvcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Hvcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Hvcer400ApplicationJsonErrorEnum || (Hvcer400ApplicationJsonErrorEnum = {}));
export var Hvcer400ApplicationJsonErrorDescriptionEnum;
(function (Hvcer400ApplicationJsonErrorDescriptionEnum) {
    Hvcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Hvcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Hvcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Hvcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Hvcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Hvcer400ApplicationJsonErrorDescriptionEnum || (Hvcer400ApplicationJsonErrorDescriptionEnum = {}));
var Hvcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Hvcer400ApplicationJson, _super);
    function Hvcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hvcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hvcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Hvcer400ApplicationJson;
}(SpeakeasyBase));
export { Hvcer400ApplicationJson };
export var Hvcer401ApplicationJsonErrorEnum;
(function (Hvcer401ApplicationJsonErrorEnum) {
    Hvcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Hvcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Hvcer401ApplicationJsonErrorEnum || (Hvcer401ApplicationJsonErrorEnum = {}));
export var Hvcer401ApplicationJsonErrorDescriptionEnum;
(function (Hvcer401ApplicationJsonErrorDescriptionEnum) {
    Hvcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Hvcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Hvcer401ApplicationJsonErrorDescriptionEnum || (Hvcer401ApplicationJsonErrorDescriptionEnum = {}));
var Hvcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Hvcer401ApplicationJson, _super);
    function Hvcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hvcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hvcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Hvcer401ApplicationJson;
}(SpeakeasyBase));
export { Hvcer401ApplicationJson };
export var Hvcer404ApplicationJsonErrorEnum;
(function (Hvcer404ApplicationJsonErrorEnum) {
    Hvcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Hvcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Hvcer404ApplicationJsonErrorEnum || (Hvcer404ApplicationJsonErrorEnum = {}));
export var Hvcer404ApplicationJsonErrorDescriptionEnum;
(function (Hvcer404ApplicationJsonErrorDescriptionEnum) {
    Hvcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Hvcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Hvcer404ApplicationJsonErrorDescriptionEnum || (Hvcer404ApplicationJsonErrorDescriptionEnum = {}));
var Hvcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Hvcer404ApplicationJson, _super);
    function Hvcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hvcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hvcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Hvcer404ApplicationJson;
}(SpeakeasyBase));
export { Hvcer404ApplicationJson };
export var Hvcer500ApplicationJsonErrorEnum;
(function (Hvcer500ApplicationJsonErrorEnum) {
    Hvcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Hvcer500ApplicationJsonErrorEnum || (Hvcer500ApplicationJsonErrorEnum = {}));
export var Hvcer500ApplicationJsonErrorDescriptionEnum;
(function (Hvcer500ApplicationJsonErrorDescriptionEnum) {
    Hvcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Hvcer500ApplicationJsonErrorDescriptionEnum || (Hvcer500ApplicationJsonErrorDescriptionEnum = {}));
var Hvcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Hvcer500ApplicationJson, _super);
    function Hvcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hvcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hvcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Hvcer500ApplicationJson;
}(SpeakeasyBase));
export { Hvcer500ApplicationJson };
export var Hvcer502ApplicationJsonErrorEnum;
(function (Hvcer502ApplicationJsonErrorEnum) {
    Hvcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Hvcer502ApplicationJsonErrorEnum || (Hvcer502ApplicationJsonErrorEnum = {}));
export var Hvcer502ApplicationJsonErrorDescriptionEnum;
(function (Hvcer502ApplicationJsonErrorDescriptionEnum) {
    Hvcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Hvcer502ApplicationJsonErrorDescriptionEnum || (Hvcer502ApplicationJsonErrorDescriptionEnum = {}));
var Hvcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Hvcer502ApplicationJson, _super);
    function Hvcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hvcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hvcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Hvcer502ApplicationJson;
}(SpeakeasyBase));
export { Hvcer502ApplicationJson };
export var Hvcer503ApplicationJsonErrorEnum;
(function (Hvcer503ApplicationJsonErrorEnum) {
    Hvcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Hvcer503ApplicationJsonErrorEnum || (Hvcer503ApplicationJsonErrorEnum = {}));
export var Hvcer503ApplicationJsonErrorDescriptionEnum;
(function (Hvcer503ApplicationJsonErrorDescriptionEnum) {
    Hvcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Hvcer503ApplicationJsonErrorDescriptionEnum || (Hvcer503ApplicationJsonErrorDescriptionEnum = {}));
var Hvcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Hvcer503ApplicationJson, _super);
    function Hvcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hvcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hvcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Hvcer503ApplicationJson;
}(SpeakeasyBase));
export { Hvcer503ApplicationJson };
export var Hvcer504ApplicationJsonErrorEnum;
(function (Hvcer504ApplicationJsonErrorEnum) {
    Hvcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Hvcer504ApplicationJsonErrorEnum || (Hvcer504ApplicationJsonErrorEnum = {}));
export var Hvcer504ApplicationJsonErrorDescriptionEnum;
(function (Hvcer504ApplicationJsonErrorDescriptionEnum) {
    Hvcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Hvcer504ApplicationJsonErrorDescriptionEnum || (Hvcer504ApplicationJsonErrorDescriptionEnum = {}));
var Hvcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Hvcer504ApplicationJson, _super);
    function Hvcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hvcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hvcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Hvcer504ApplicationJson;
}(SpeakeasyBase));
export { Hvcer504ApplicationJson };
var HvcerRequest = /** @class */ (function (_super) {
    __extends(HvcerRequest, _super);
    function HvcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", HvcerRequestBody)
    ], HvcerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HvcerSecurity)
    ], HvcerRequest.prototype, "security", void 0);
    return HvcerRequest;
}(SpeakeasyBase));
export { HvcerRequest };
var HvcerResponse = /** @class */ (function (_super) {
    __extends(HvcerResponse, _super);
    function HvcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HvcerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HvcerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hvcer400ApplicationJson)
    ], HvcerResponse.prototype, "hvcer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hvcer401ApplicationJson)
    ], HvcerResponse.prototype, "hvcer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hvcer404ApplicationJson)
    ], HvcerResponse.prototype, "hvcer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hvcer500ApplicationJson)
    ], HvcerResponse.prototype, "hvcer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hvcer502ApplicationJson)
    ], HvcerResponse.prototype, "hvcer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hvcer503ApplicationJson)
    ], HvcerResponse.prototype, "hvcer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Hvcer504ApplicationJson)
    ], HvcerResponse.prototype, "hvcer504ApplicationJsonObject", void 0);
    return HvcerResponse;
}(SpeakeasyBase));
export { HvcerResponse };
