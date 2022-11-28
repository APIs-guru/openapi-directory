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
var DccerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(DccerRequestBodyCertificateParameters, _super);
    function DccerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], DccerRequestBodyCertificateParameters.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], DccerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    return DccerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { DccerRequestBodyCertificateParameters };
export var DccerRequestBodyFormatEnum;
(function (DccerRequestBodyFormatEnum) {
    DccerRequestBodyFormatEnum["Pdf"] = "pdf";
})(DccerRequestBodyFormatEnum || (DccerRequestBodyFormatEnum = {}));
var DccerRequestBody = /** @class */ (function (_super) {
    __extends(DccerRequestBody, _super);
    function DccerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", DccerRequestBodyCertificateParameters)
    ], DccerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], DccerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], DccerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], DccerRequestBody.prototype, "txnId", void 0);
    return DccerRequestBody;
}(SpeakeasyBase));
export { DccerRequestBody };
var DccerSecurity = /** @class */ (function (_super) {
    __extends(DccerSecurity, _super);
    function DccerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DccerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], DccerSecurity.prototype, "clientId", void 0);
    return DccerSecurity;
}(SpeakeasyBase));
export { DccerSecurity };
export var Dccer400ApplicationJsonErrorEnum;
(function (Dccer400ApplicationJsonErrorEnum) {
    Dccer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Dccer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Dccer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Dccer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Dccer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Dccer400ApplicationJsonErrorEnum || (Dccer400ApplicationJsonErrorEnum = {}));
export var Dccer400ApplicationJsonErrorDescriptionEnum;
(function (Dccer400ApplicationJsonErrorDescriptionEnum) {
    Dccer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Dccer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Dccer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Dccer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Dccer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Dccer400ApplicationJsonErrorDescriptionEnum || (Dccer400ApplicationJsonErrorDescriptionEnum = {}));
var Dccer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Dccer400ApplicationJson, _super);
    function Dccer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dccer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dccer400ApplicationJson.prototype, "errorDescription", void 0);
    return Dccer400ApplicationJson;
}(SpeakeasyBase));
export { Dccer400ApplicationJson };
export var Dccer401ApplicationJsonErrorEnum;
(function (Dccer401ApplicationJsonErrorEnum) {
    Dccer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Dccer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Dccer401ApplicationJsonErrorEnum || (Dccer401ApplicationJsonErrorEnum = {}));
export var Dccer401ApplicationJsonErrorDescriptionEnum;
(function (Dccer401ApplicationJsonErrorDescriptionEnum) {
    Dccer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Dccer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Dccer401ApplicationJsonErrorDescriptionEnum || (Dccer401ApplicationJsonErrorDescriptionEnum = {}));
var Dccer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Dccer401ApplicationJson, _super);
    function Dccer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dccer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dccer401ApplicationJson.prototype, "errorDescription", void 0);
    return Dccer401ApplicationJson;
}(SpeakeasyBase));
export { Dccer401ApplicationJson };
export var Dccer404ApplicationJsonErrorEnum;
(function (Dccer404ApplicationJsonErrorEnum) {
    Dccer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Dccer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Dccer404ApplicationJsonErrorEnum || (Dccer404ApplicationJsonErrorEnum = {}));
export var Dccer404ApplicationJsonErrorDescriptionEnum;
(function (Dccer404ApplicationJsonErrorDescriptionEnum) {
    Dccer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Dccer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Dccer404ApplicationJsonErrorDescriptionEnum || (Dccer404ApplicationJsonErrorDescriptionEnum = {}));
var Dccer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Dccer404ApplicationJson, _super);
    function Dccer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dccer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dccer404ApplicationJson.prototype, "errorDescription", void 0);
    return Dccer404ApplicationJson;
}(SpeakeasyBase));
export { Dccer404ApplicationJson };
export var Dccer500ApplicationJsonErrorEnum;
(function (Dccer500ApplicationJsonErrorEnum) {
    Dccer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Dccer500ApplicationJsonErrorEnum || (Dccer500ApplicationJsonErrorEnum = {}));
export var Dccer500ApplicationJsonErrorDescriptionEnum;
(function (Dccer500ApplicationJsonErrorDescriptionEnum) {
    Dccer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Dccer500ApplicationJsonErrorDescriptionEnum || (Dccer500ApplicationJsonErrorDescriptionEnum = {}));
var Dccer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Dccer500ApplicationJson, _super);
    function Dccer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dccer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dccer500ApplicationJson.prototype, "errorDescription", void 0);
    return Dccer500ApplicationJson;
}(SpeakeasyBase));
export { Dccer500ApplicationJson };
export var Dccer502ApplicationJsonErrorEnum;
(function (Dccer502ApplicationJsonErrorEnum) {
    Dccer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Dccer502ApplicationJsonErrorEnum || (Dccer502ApplicationJsonErrorEnum = {}));
export var Dccer502ApplicationJsonErrorDescriptionEnum;
(function (Dccer502ApplicationJsonErrorDescriptionEnum) {
    Dccer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Dccer502ApplicationJsonErrorDescriptionEnum || (Dccer502ApplicationJsonErrorDescriptionEnum = {}));
var Dccer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Dccer502ApplicationJson, _super);
    function Dccer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dccer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dccer502ApplicationJson.prototype, "errorDescription", void 0);
    return Dccer502ApplicationJson;
}(SpeakeasyBase));
export { Dccer502ApplicationJson };
export var Dccer503ApplicationJsonErrorEnum;
(function (Dccer503ApplicationJsonErrorEnum) {
    Dccer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Dccer503ApplicationJsonErrorEnum || (Dccer503ApplicationJsonErrorEnum = {}));
export var Dccer503ApplicationJsonErrorDescriptionEnum;
(function (Dccer503ApplicationJsonErrorDescriptionEnum) {
    Dccer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Dccer503ApplicationJsonErrorDescriptionEnum || (Dccer503ApplicationJsonErrorDescriptionEnum = {}));
var Dccer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Dccer503ApplicationJson, _super);
    function Dccer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dccer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dccer503ApplicationJson.prototype, "errorDescription", void 0);
    return Dccer503ApplicationJson;
}(SpeakeasyBase));
export { Dccer503ApplicationJson };
export var Dccer504ApplicationJsonErrorEnum;
(function (Dccer504ApplicationJsonErrorEnum) {
    Dccer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Dccer504ApplicationJsonErrorEnum || (Dccer504ApplicationJsonErrorEnum = {}));
export var Dccer504ApplicationJsonErrorDescriptionEnum;
(function (Dccer504ApplicationJsonErrorDescriptionEnum) {
    Dccer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Dccer504ApplicationJsonErrorDescriptionEnum || (Dccer504ApplicationJsonErrorDescriptionEnum = {}));
var Dccer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Dccer504ApplicationJson, _super);
    function Dccer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dccer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dccer504ApplicationJson.prototype, "errorDescription", void 0);
    return Dccer504ApplicationJson;
}(SpeakeasyBase));
export { Dccer504ApplicationJson };
var DccerRequest = /** @class */ (function (_super) {
    __extends(DccerRequest, _super);
    function DccerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DccerRequestBody)
    ], DccerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DccerSecurity)
    ], DccerRequest.prototype, "security", void 0);
    return DccerRequest;
}(SpeakeasyBase));
export { DccerRequest };
var DccerResponse = /** @class */ (function (_super) {
    __extends(DccerResponse, _super);
    function DccerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DccerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DccerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dccer400ApplicationJson)
    ], DccerResponse.prototype, "dccer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dccer401ApplicationJson)
    ], DccerResponse.prototype, "dccer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dccer404ApplicationJson)
    ], DccerResponse.prototype, "dccer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dccer500ApplicationJson)
    ], DccerResponse.prototype, "dccer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dccer502ApplicationJson)
    ], DccerResponse.prototype, "dccer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dccer503ApplicationJson)
    ], DccerResponse.prototype, "dccer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Dccer504ApplicationJson)
    ], DccerResponse.prototype, "dccer504ApplicationJsonObject", void 0);
    return DccerResponse;
}(SpeakeasyBase));
export { DccerResponse };
