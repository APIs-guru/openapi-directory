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
var ShcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(ShcerRequestBodyCertificateParameters, _super);
    function ShcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ShcerRequestBodyCertificateParameters.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], ShcerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    return ShcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { ShcerRequestBodyCertificateParameters };
export var ShcerRequestBodyFormatEnum;
(function (ShcerRequestBodyFormatEnum) {
    ShcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(ShcerRequestBodyFormatEnum || (ShcerRequestBodyFormatEnum = {}));
var ShcerRequestBody = /** @class */ (function (_super) {
    __extends(ShcerRequestBody, _super);
    function ShcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", ShcerRequestBodyCertificateParameters)
    ], ShcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], ShcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], ShcerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], ShcerRequestBody.prototype, "txnId", void 0);
    return ShcerRequestBody;
}(SpeakeasyBase));
export { ShcerRequestBody };
var ShcerSecurity = /** @class */ (function (_super) {
    __extends(ShcerSecurity, _super);
    function ShcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ShcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], ShcerSecurity.prototype, "clientId", void 0);
    return ShcerSecurity;
}(SpeakeasyBase));
export { ShcerSecurity };
export var Shcer400ApplicationJsonErrorEnum;
(function (Shcer400ApplicationJsonErrorEnum) {
    Shcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Shcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Shcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Shcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Shcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Shcer400ApplicationJsonErrorEnum || (Shcer400ApplicationJsonErrorEnum = {}));
export var Shcer400ApplicationJsonErrorDescriptionEnum;
(function (Shcer400ApplicationJsonErrorDescriptionEnum) {
    Shcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Shcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Shcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Shcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Shcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Shcer400ApplicationJsonErrorDescriptionEnum || (Shcer400ApplicationJsonErrorDescriptionEnum = {}));
var Shcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Shcer400ApplicationJson, _super);
    function Shcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Shcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Shcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Shcer400ApplicationJson;
}(SpeakeasyBase));
export { Shcer400ApplicationJson };
export var Shcer401ApplicationJsonErrorEnum;
(function (Shcer401ApplicationJsonErrorEnum) {
    Shcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Shcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Shcer401ApplicationJsonErrorEnum || (Shcer401ApplicationJsonErrorEnum = {}));
export var Shcer401ApplicationJsonErrorDescriptionEnum;
(function (Shcer401ApplicationJsonErrorDescriptionEnum) {
    Shcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Shcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Shcer401ApplicationJsonErrorDescriptionEnum || (Shcer401ApplicationJsonErrorDescriptionEnum = {}));
var Shcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Shcer401ApplicationJson, _super);
    function Shcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Shcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Shcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Shcer401ApplicationJson;
}(SpeakeasyBase));
export { Shcer401ApplicationJson };
export var Shcer404ApplicationJsonErrorEnum;
(function (Shcer404ApplicationJsonErrorEnum) {
    Shcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Shcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Shcer404ApplicationJsonErrorEnum || (Shcer404ApplicationJsonErrorEnum = {}));
export var Shcer404ApplicationJsonErrorDescriptionEnum;
(function (Shcer404ApplicationJsonErrorDescriptionEnum) {
    Shcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Shcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Shcer404ApplicationJsonErrorDescriptionEnum || (Shcer404ApplicationJsonErrorDescriptionEnum = {}));
var Shcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Shcer404ApplicationJson, _super);
    function Shcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Shcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Shcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Shcer404ApplicationJson;
}(SpeakeasyBase));
export { Shcer404ApplicationJson };
export var Shcer500ApplicationJsonErrorEnum;
(function (Shcer500ApplicationJsonErrorEnum) {
    Shcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Shcer500ApplicationJsonErrorEnum || (Shcer500ApplicationJsonErrorEnum = {}));
export var Shcer500ApplicationJsonErrorDescriptionEnum;
(function (Shcer500ApplicationJsonErrorDescriptionEnum) {
    Shcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Shcer500ApplicationJsonErrorDescriptionEnum || (Shcer500ApplicationJsonErrorDescriptionEnum = {}));
var Shcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Shcer500ApplicationJson, _super);
    function Shcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Shcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Shcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Shcer500ApplicationJson;
}(SpeakeasyBase));
export { Shcer500ApplicationJson };
export var Shcer502ApplicationJsonErrorEnum;
(function (Shcer502ApplicationJsonErrorEnum) {
    Shcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Shcer502ApplicationJsonErrorEnum || (Shcer502ApplicationJsonErrorEnum = {}));
export var Shcer502ApplicationJsonErrorDescriptionEnum;
(function (Shcer502ApplicationJsonErrorDescriptionEnum) {
    Shcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Shcer502ApplicationJsonErrorDescriptionEnum || (Shcer502ApplicationJsonErrorDescriptionEnum = {}));
var Shcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Shcer502ApplicationJson, _super);
    function Shcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Shcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Shcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Shcer502ApplicationJson;
}(SpeakeasyBase));
export { Shcer502ApplicationJson };
export var Shcer503ApplicationJsonErrorEnum;
(function (Shcer503ApplicationJsonErrorEnum) {
    Shcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Shcer503ApplicationJsonErrorEnum || (Shcer503ApplicationJsonErrorEnum = {}));
export var Shcer503ApplicationJsonErrorDescriptionEnum;
(function (Shcer503ApplicationJsonErrorDescriptionEnum) {
    Shcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Shcer503ApplicationJsonErrorDescriptionEnum || (Shcer503ApplicationJsonErrorDescriptionEnum = {}));
var Shcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Shcer503ApplicationJson, _super);
    function Shcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Shcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Shcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Shcer503ApplicationJson;
}(SpeakeasyBase));
export { Shcer503ApplicationJson };
export var Shcer504ApplicationJsonErrorEnum;
(function (Shcer504ApplicationJsonErrorEnum) {
    Shcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Shcer504ApplicationJsonErrorEnum || (Shcer504ApplicationJsonErrorEnum = {}));
export var Shcer504ApplicationJsonErrorDescriptionEnum;
(function (Shcer504ApplicationJsonErrorDescriptionEnum) {
    Shcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Shcer504ApplicationJsonErrorDescriptionEnum || (Shcer504ApplicationJsonErrorDescriptionEnum = {}));
var Shcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Shcer504ApplicationJson, _super);
    function Shcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Shcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Shcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Shcer504ApplicationJson;
}(SpeakeasyBase));
export { Shcer504ApplicationJson };
var ShcerRequest = /** @class */ (function (_super) {
    __extends(ShcerRequest, _super);
    function ShcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ShcerRequestBody)
    ], ShcerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ShcerSecurity)
    ], ShcerRequest.prototype, "security", void 0);
    return ShcerRequest;
}(SpeakeasyBase));
export { ShcerRequest };
var ShcerResponse = /** @class */ (function (_super) {
    __extends(ShcerResponse, _super);
    function ShcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ShcerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ShcerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Shcer400ApplicationJson)
    ], ShcerResponse.prototype, "shcer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Shcer401ApplicationJson)
    ], ShcerResponse.prototype, "shcer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Shcer404ApplicationJson)
    ], ShcerResponse.prototype, "shcer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Shcer500ApplicationJson)
    ], ShcerResponse.prototype, "shcer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Shcer502ApplicationJson)
    ], ShcerResponse.prototype, "shcer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Shcer503ApplicationJson)
    ], ShcerResponse.prototype, "shcer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Shcer504ApplicationJson)
    ], ShcerResponse.prototype, "shcer504ApplicationJsonObject", void 0);
    return ShcerResponse;
}(SpeakeasyBase));
export { ShcerResponse };
