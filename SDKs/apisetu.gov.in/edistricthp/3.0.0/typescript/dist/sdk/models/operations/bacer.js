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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var BacerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(BacerRequestBodyCertificateParameters, _super);
    function BacerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], BacerRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return BacerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { BacerRequestBodyCertificateParameters };
export var BacerRequestBodyFormatEnum;
(function (BacerRequestBodyFormatEnum) {
    BacerRequestBodyFormatEnum["Pdf"] = "pdf";
})(BacerRequestBodyFormatEnum || (BacerRequestBodyFormatEnum = {}));
var BacerRequestBody = /** @class */ (function (_super) {
    __extends(BacerRequestBody, _super);
    function BacerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", BacerRequestBodyCertificateParameters)
    ], BacerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], BacerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], BacerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], BacerRequestBody.prototype, "txnId", void 0);
    return BacerRequestBody;
}(SpeakeasyBase));
export { BacerRequestBody };
var BacerSecurity = /** @class */ (function (_super) {
    __extends(BacerSecurity, _super);
    function BacerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], BacerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], BacerSecurity.prototype, "clientId", void 0);
    return BacerSecurity;
}(SpeakeasyBase));
export { BacerSecurity };
var BacerRequest = /** @class */ (function (_super) {
    __extends(BacerRequest, _super);
    function BacerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BacerRequestBody)
    ], BacerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BacerSecurity)
    ], BacerRequest.prototype, "security", void 0);
    return BacerRequest;
}(SpeakeasyBase));
export { BacerRequest };
export var Bacer400ApplicationJsonErrorEnum;
(function (Bacer400ApplicationJsonErrorEnum) {
    Bacer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Bacer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Bacer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Bacer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Bacer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Bacer400ApplicationJsonErrorEnum || (Bacer400ApplicationJsonErrorEnum = {}));
export var Bacer400ApplicationJsonErrorDescriptionEnum;
(function (Bacer400ApplicationJsonErrorDescriptionEnum) {
    Bacer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Bacer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Bacer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Bacer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Bacer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Bacer400ApplicationJsonErrorDescriptionEnum || (Bacer400ApplicationJsonErrorDescriptionEnum = {}));
var Bacer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Bacer400ApplicationJson, _super);
    function Bacer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bacer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bacer400ApplicationJson.prototype, "errorDescription", void 0);
    return Bacer400ApplicationJson;
}(SpeakeasyBase));
export { Bacer400ApplicationJson };
export var Bacer401ApplicationJsonErrorEnum;
(function (Bacer401ApplicationJsonErrorEnum) {
    Bacer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Bacer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Bacer401ApplicationJsonErrorEnum || (Bacer401ApplicationJsonErrorEnum = {}));
export var Bacer401ApplicationJsonErrorDescriptionEnum;
(function (Bacer401ApplicationJsonErrorDescriptionEnum) {
    Bacer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Bacer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Bacer401ApplicationJsonErrorDescriptionEnum || (Bacer401ApplicationJsonErrorDescriptionEnum = {}));
var Bacer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Bacer401ApplicationJson, _super);
    function Bacer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bacer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bacer401ApplicationJson.prototype, "errorDescription", void 0);
    return Bacer401ApplicationJson;
}(SpeakeasyBase));
export { Bacer401ApplicationJson };
export var Bacer404ApplicationJsonErrorEnum;
(function (Bacer404ApplicationJsonErrorEnum) {
    Bacer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Bacer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Bacer404ApplicationJsonErrorEnum || (Bacer404ApplicationJsonErrorEnum = {}));
export var Bacer404ApplicationJsonErrorDescriptionEnum;
(function (Bacer404ApplicationJsonErrorDescriptionEnum) {
    Bacer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Bacer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Bacer404ApplicationJsonErrorDescriptionEnum || (Bacer404ApplicationJsonErrorDescriptionEnum = {}));
var Bacer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Bacer404ApplicationJson, _super);
    function Bacer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bacer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bacer404ApplicationJson.prototype, "errorDescription", void 0);
    return Bacer404ApplicationJson;
}(SpeakeasyBase));
export { Bacer404ApplicationJson };
export var Bacer500ApplicationJsonErrorEnum;
(function (Bacer500ApplicationJsonErrorEnum) {
    Bacer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Bacer500ApplicationJsonErrorEnum || (Bacer500ApplicationJsonErrorEnum = {}));
export var Bacer500ApplicationJsonErrorDescriptionEnum;
(function (Bacer500ApplicationJsonErrorDescriptionEnum) {
    Bacer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Bacer500ApplicationJsonErrorDescriptionEnum || (Bacer500ApplicationJsonErrorDescriptionEnum = {}));
var Bacer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Bacer500ApplicationJson, _super);
    function Bacer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bacer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bacer500ApplicationJson.prototype, "errorDescription", void 0);
    return Bacer500ApplicationJson;
}(SpeakeasyBase));
export { Bacer500ApplicationJson };
export var Bacer502ApplicationJsonErrorEnum;
(function (Bacer502ApplicationJsonErrorEnum) {
    Bacer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Bacer502ApplicationJsonErrorEnum || (Bacer502ApplicationJsonErrorEnum = {}));
export var Bacer502ApplicationJsonErrorDescriptionEnum;
(function (Bacer502ApplicationJsonErrorDescriptionEnum) {
    Bacer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Bacer502ApplicationJsonErrorDescriptionEnum || (Bacer502ApplicationJsonErrorDescriptionEnum = {}));
var Bacer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Bacer502ApplicationJson, _super);
    function Bacer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bacer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bacer502ApplicationJson.prototype, "errorDescription", void 0);
    return Bacer502ApplicationJson;
}(SpeakeasyBase));
export { Bacer502ApplicationJson };
export var Bacer503ApplicationJsonErrorEnum;
(function (Bacer503ApplicationJsonErrorEnum) {
    Bacer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Bacer503ApplicationJsonErrorEnum || (Bacer503ApplicationJsonErrorEnum = {}));
export var Bacer503ApplicationJsonErrorDescriptionEnum;
(function (Bacer503ApplicationJsonErrorDescriptionEnum) {
    Bacer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Bacer503ApplicationJsonErrorDescriptionEnum || (Bacer503ApplicationJsonErrorDescriptionEnum = {}));
var Bacer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Bacer503ApplicationJson, _super);
    function Bacer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bacer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bacer503ApplicationJson.prototype, "errorDescription", void 0);
    return Bacer503ApplicationJson;
}(SpeakeasyBase));
export { Bacer503ApplicationJson };
export var Bacer504ApplicationJsonErrorEnum;
(function (Bacer504ApplicationJsonErrorEnum) {
    Bacer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Bacer504ApplicationJsonErrorEnum || (Bacer504ApplicationJsonErrorEnum = {}));
export var Bacer504ApplicationJsonErrorDescriptionEnum;
(function (Bacer504ApplicationJsonErrorDescriptionEnum) {
    Bacer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Bacer504ApplicationJsonErrorDescriptionEnum || (Bacer504ApplicationJsonErrorDescriptionEnum = {}));
var Bacer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Bacer504ApplicationJson, _super);
    function Bacer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bacer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bacer504ApplicationJson.prototype, "errorDescription", void 0);
    return Bacer504ApplicationJson;
}(SpeakeasyBase));
export { Bacer504ApplicationJson };
var BacerResponse = /** @class */ (function (_super) {
    __extends(BacerResponse, _super);
    function BacerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BacerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BacerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Bacer400ApplicationJson)
    ], BacerResponse.prototype, "bacer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Bacer401ApplicationJson)
    ], BacerResponse.prototype, "bacer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Bacer404ApplicationJson)
    ], BacerResponse.prototype, "bacer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Bacer500ApplicationJson)
    ], BacerResponse.prototype, "bacer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Bacer502ApplicationJson)
    ], BacerResponse.prototype, "bacer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Bacer503ApplicationJson)
    ], BacerResponse.prototype, "bacer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Bacer504ApplicationJson)
    ], BacerResponse.prototype, "bacer504ApplicationJsonObject", void 0);
    return BacerResponse;
}(SpeakeasyBase));
export { BacerResponse };
