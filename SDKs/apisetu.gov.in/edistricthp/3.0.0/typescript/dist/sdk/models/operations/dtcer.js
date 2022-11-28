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
var DtcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(DtcerRequestBodyCertificateParameters, _super);
    function DtcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], DtcerRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return DtcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { DtcerRequestBodyCertificateParameters };
export var DtcerRequestBodyFormatEnum;
(function (DtcerRequestBodyFormatEnum) {
    DtcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(DtcerRequestBodyFormatEnum || (DtcerRequestBodyFormatEnum = {}));
var DtcerRequestBody = /** @class */ (function (_super) {
    __extends(DtcerRequestBody, _super);
    function DtcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", DtcerRequestBodyCertificateParameters)
    ], DtcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], DtcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], DtcerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], DtcerRequestBody.prototype, "txnId", void 0);
    return DtcerRequestBody;
}(SpeakeasyBase));
export { DtcerRequestBody };
var DtcerSecurity = /** @class */ (function (_super) {
    __extends(DtcerSecurity, _super);
    function DtcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DtcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], DtcerSecurity.prototype, "clientId", void 0);
    return DtcerSecurity;
}(SpeakeasyBase));
export { DtcerSecurity };
export var Dtcer400ApplicationJsonErrorEnum;
(function (Dtcer400ApplicationJsonErrorEnum) {
    Dtcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Dtcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Dtcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Dtcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Dtcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Dtcer400ApplicationJsonErrorEnum || (Dtcer400ApplicationJsonErrorEnum = {}));
export var Dtcer400ApplicationJsonErrorDescriptionEnum;
(function (Dtcer400ApplicationJsonErrorDescriptionEnum) {
    Dtcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Dtcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Dtcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Dtcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Dtcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Dtcer400ApplicationJsonErrorDescriptionEnum || (Dtcer400ApplicationJsonErrorDescriptionEnum = {}));
var Dtcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Dtcer400ApplicationJson, _super);
    function Dtcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dtcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dtcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Dtcer400ApplicationJson;
}(SpeakeasyBase));
export { Dtcer400ApplicationJson };
export var Dtcer401ApplicationJsonErrorEnum;
(function (Dtcer401ApplicationJsonErrorEnum) {
    Dtcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Dtcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Dtcer401ApplicationJsonErrorEnum || (Dtcer401ApplicationJsonErrorEnum = {}));
export var Dtcer401ApplicationJsonErrorDescriptionEnum;
(function (Dtcer401ApplicationJsonErrorDescriptionEnum) {
    Dtcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Dtcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Dtcer401ApplicationJsonErrorDescriptionEnum || (Dtcer401ApplicationJsonErrorDescriptionEnum = {}));
var Dtcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Dtcer401ApplicationJson, _super);
    function Dtcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dtcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dtcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Dtcer401ApplicationJson;
}(SpeakeasyBase));
export { Dtcer401ApplicationJson };
export var Dtcer404ApplicationJsonErrorEnum;
(function (Dtcer404ApplicationJsonErrorEnum) {
    Dtcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Dtcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Dtcer404ApplicationJsonErrorEnum || (Dtcer404ApplicationJsonErrorEnum = {}));
export var Dtcer404ApplicationJsonErrorDescriptionEnum;
(function (Dtcer404ApplicationJsonErrorDescriptionEnum) {
    Dtcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Dtcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Dtcer404ApplicationJsonErrorDescriptionEnum || (Dtcer404ApplicationJsonErrorDescriptionEnum = {}));
var Dtcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Dtcer404ApplicationJson, _super);
    function Dtcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dtcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dtcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Dtcer404ApplicationJson;
}(SpeakeasyBase));
export { Dtcer404ApplicationJson };
export var Dtcer500ApplicationJsonErrorEnum;
(function (Dtcer500ApplicationJsonErrorEnum) {
    Dtcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Dtcer500ApplicationJsonErrorEnum || (Dtcer500ApplicationJsonErrorEnum = {}));
export var Dtcer500ApplicationJsonErrorDescriptionEnum;
(function (Dtcer500ApplicationJsonErrorDescriptionEnum) {
    Dtcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Dtcer500ApplicationJsonErrorDescriptionEnum || (Dtcer500ApplicationJsonErrorDescriptionEnum = {}));
var Dtcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Dtcer500ApplicationJson, _super);
    function Dtcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dtcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dtcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Dtcer500ApplicationJson;
}(SpeakeasyBase));
export { Dtcer500ApplicationJson };
export var Dtcer502ApplicationJsonErrorEnum;
(function (Dtcer502ApplicationJsonErrorEnum) {
    Dtcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Dtcer502ApplicationJsonErrorEnum || (Dtcer502ApplicationJsonErrorEnum = {}));
export var Dtcer502ApplicationJsonErrorDescriptionEnum;
(function (Dtcer502ApplicationJsonErrorDescriptionEnum) {
    Dtcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Dtcer502ApplicationJsonErrorDescriptionEnum || (Dtcer502ApplicationJsonErrorDescriptionEnum = {}));
var Dtcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Dtcer502ApplicationJson, _super);
    function Dtcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dtcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dtcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Dtcer502ApplicationJson;
}(SpeakeasyBase));
export { Dtcer502ApplicationJson };
export var Dtcer503ApplicationJsonErrorEnum;
(function (Dtcer503ApplicationJsonErrorEnum) {
    Dtcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Dtcer503ApplicationJsonErrorEnum || (Dtcer503ApplicationJsonErrorEnum = {}));
export var Dtcer503ApplicationJsonErrorDescriptionEnum;
(function (Dtcer503ApplicationJsonErrorDescriptionEnum) {
    Dtcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Dtcer503ApplicationJsonErrorDescriptionEnum || (Dtcer503ApplicationJsonErrorDescriptionEnum = {}));
var Dtcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Dtcer503ApplicationJson, _super);
    function Dtcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dtcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dtcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Dtcer503ApplicationJson;
}(SpeakeasyBase));
export { Dtcer503ApplicationJson };
export var Dtcer504ApplicationJsonErrorEnum;
(function (Dtcer504ApplicationJsonErrorEnum) {
    Dtcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Dtcer504ApplicationJsonErrorEnum || (Dtcer504ApplicationJsonErrorEnum = {}));
export var Dtcer504ApplicationJsonErrorDescriptionEnum;
(function (Dtcer504ApplicationJsonErrorDescriptionEnum) {
    Dtcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Dtcer504ApplicationJsonErrorDescriptionEnum || (Dtcer504ApplicationJsonErrorDescriptionEnum = {}));
var Dtcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Dtcer504ApplicationJson, _super);
    function Dtcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dtcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dtcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Dtcer504ApplicationJson;
}(SpeakeasyBase));
export { Dtcer504ApplicationJson };
var DtcerRequest = /** @class */ (function (_super) {
    __extends(DtcerRequest, _super);
    function DtcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DtcerRequestBody)
    ], DtcerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DtcerSecurity)
    ], DtcerRequest.prototype, "security", void 0);
    return DtcerRequest;
}(SpeakeasyBase));
export { DtcerRequest };
var DtcerResponse = /** @class */ (function (_super) {
    __extends(DtcerResponse, _super);
    function DtcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DtcerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DtcerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dtcer400ApplicationJson)
    ], DtcerResponse.prototype, "dtcer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dtcer401ApplicationJson)
    ], DtcerResponse.prototype, "dtcer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dtcer404ApplicationJson)
    ], DtcerResponse.prototype, "dtcer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dtcer500ApplicationJson)
    ], DtcerResponse.prototype, "dtcer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dtcer502ApplicationJson)
    ], DtcerResponse.prototype, "dtcer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dtcer503ApplicationJson)
    ], DtcerResponse.prototype, "dtcer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dtcer504ApplicationJson)
    ], DtcerResponse.prototype, "dtcer504ApplicationJsonObject", void 0);
    return DtcerResponse;
}(SpeakeasyBase));
export { DtcerResponse };
