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
var DgcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(DgcerRequestBodyCertificateParameters, _super);
    function DgcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CNAME" }),
        __metadata("design:type", String)
    ], DgcerRequestBodyCertificateParameters.prototype, "cname", void 0);
    __decorate([
        Metadata({ data: "json, name=REGNO" }),
        __metadata("design:type", String)
    ], DgcerRequestBodyCertificateParameters.prototype, "regno", void 0);
    __decorate([
        Metadata({ data: "json, name=RROLL" }),
        __metadata("design:type", String)
    ], DgcerRequestBodyCertificateParameters.prototype, "rroll", void 0);
    __decorate([
        Metadata({ data: "json, name=YEAR" }),
        __metadata("design:type", String)
    ], DgcerRequestBodyCertificateParameters.prototype, "year", void 0);
    return DgcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { DgcerRequestBodyCertificateParameters };
export var DgcerRequestBodyFormatEnum;
(function (DgcerRequestBodyFormatEnum) {
    DgcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(DgcerRequestBodyFormatEnum || (DgcerRequestBodyFormatEnum = {}));
var DgcerRequestBody = /** @class */ (function (_super) {
    __extends(DgcerRequestBody, _super);
    function DgcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", DgcerRequestBodyCertificateParameters)
    ], DgcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], DgcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], DgcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], DgcerRequestBody.prototype, "txnId", void 0);
    return DgcerRequestBody;
}(SpeakeasyBase));
export { DgcerRequestBody };
var DgcerSecurity = /** @class */ (function (_super) {
    __extends(DgcerSecurity, _super);
    function DgcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DgcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], DgcerSecurity.prototype, "clientId", void 0);
    return DgcerSecurity;
}(SpeakeasyBase));
export { DgcerSecurity };
var DgcerRequest = /** @class */ (function (_super) {
    __extends(DgcerRequest, _super);
    function DgcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DgcerRequestBody)
    ], DgcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DgcerSecurity)
    ], DgcerRequest.prototype, "security", void 0);
    return DgcerRequest;
}(SpeakeasyBase));
export { DgcerRequest };
export var Dgcer400ApplicationJsonErrorEnum;
(function (Dgcer400ApplicationJsonErrorEnum) {
    Dgcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Dgcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Dgcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Dgcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Dgcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Dgcer400ApplicationJsonErrorEnum || (Dgcer400ApplicationJsonErrorEnum = {}));
export var Dgcer400ApplicationJsonErrorDescriptionEnum;
(function (Dgcer400ApplicationJsonErrorDescriptionEnum) {
    Dgcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Dgcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Dgcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Dgcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Dgcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Dgcer400ApplicationJsonErrorDescriptionEnum || (Dgcer400ApplicationJsonErrorDescriptionEnum = {}));
var Dgcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgcer400ApplicationJson, _super);
    function Dgcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Dgcer400ApplicationJson;
}(SpeakeasyBase));
export { Dgcer400ApplicationJson };
export var Dgcer401ApplicationJsonErrorEnum;
(function (Dgcer401ApplicationJsonErrorEnum) {
    Dgcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Dgcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Dgcer401ApplicationJsonErrorEnum || (Dgcer401ApplicationJsonErrorEnum = {}));
export var Dgcer401ApplicationJsonErrorDescriptionEnum;
(function (Dgcer401ApplicationJsonErrorDescriptionEnum) {
    Dgcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Dgcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Dgcer401ApplicationJsonErrorDescriptionEnum || (Dgcer401ApplicationJsonErrorDescriptionEnum = {}));
var Dgcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgcer401ApplicationJson, _super);
    function Dgcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Dgcer401ApplicationJson;
}(SpeakeasyBase));
export { Dgcer401ApplicationJson };
export var Dgcer404ApplicationJsonErrorEnum;
(function (Dgcer404ApplicationJsonErrorEnum) {
    Dgcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Dgcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Dgcer404ApplicationJsonErrorEnum || (Dgcer404ApplicationJsonErrorEnum = {}));
export var Dgcer404ApplicationJsonErrorDescriptionEnum;
(function (Dgcer404ApplicationJsonErrorDescriptionEnum) {
    Dgcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Dgcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Dgcer404ApplicationJsonErrorDescriptionEnum || (Dgcer404ApplicationJsonErrorDescriptionEnum = {}));
var Dgcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgcer404ApplicationJson, _super);
    function Dgcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Dgcer404ApplicationJson;
}(SpeakeasyBase));
export { Dgcer404ApplicationJson };
export var Dgcer500ApplicationJsonErrorEnum;
(function (Dgcer500ApplicationJsonErrorEnum) {
    Dgcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Dgcer500ApplicationJsonErrorEnum || (Dgcer500ApplicationJsonErrorEnum = {}));
export var Dgcer500ApplicationJsonErrorDescriptionEnum;
(function (Dgcer500ApplicationJsonErrorDescriptionEnum) {
    Dgcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Dgcer500ApplicationJsonErrorDescriptionEnum || (Dgcer500ApplicationJsonErrorDescriptionEnum = {}));
var Dgcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgcer500ApplicationJson, _super);
    function Dgcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Dgcer500ApplicationJson;
}(SpeakeasyBase));
export { Dgcer500ApplicationJson };
export var Dgcer502ApplicationJsonErrorEnum;
(function (Dgcer502ApplicationJsonErrorEnum) {
    Dgcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Dgcer502ApplicationJsonErrorEnum || (Dgcer502ApplicationJsonErrorEnum = {}));
export var Dgcer502ApplicationJsonErrorDescriptionEnum;
(function (Dgcer502ApplicationJsonErrorDescriptionEnum) {
    Dgcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Dgcer502ApplicationJsonErrorDescriptionEnum || (Dgcer502ApplicationJsonErrorDescriptionEnum = {}));
var Dgcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgcer502ApplicationJson, _super);
    function Dgcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Dgcer502ApplicationJson;
}(SpeakeasyBase));
export { Dgcer502ApplicationJson };
export var Dgcer503ApplicationJsonErrorEnum;
(function (Dgcer503ApplicationJsonErrorEnum) {
    Dgcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Dgcer503ApplicationJsonErrorEnum || (Dgcer503ApplicationJsonErrorEnum = {}));
export var Dgcer503ApplicationJsonErrorDescriptionEnum;
(function (Dgcer503ApplicationJsonErrorDescriptionEnum) {
    Dgcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Dgcer503ApplicationJsonErrorDescriptionEnum || (Dgcer503ApplicationJsonErrorDescriptionEnum = {}));
var Dgcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgcer503ApplicationJson, _super);
    function Dgcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Dgcer503ApplicationJson;
}(SpeakeasyBase));
export { Dgcer503ApplicationJson };
export var Dgcer504ApplicationJsonErrorEnum;
(function (Dgcer504ApplicationJsonErrorEnum) {
    Dgcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Dgcer504ApplicationJsonErrorEnum || (Dgcer504ApplicationJsonErrorEnum = {}));
export var Dgcer504ApplicationJsonErrorDescriptionEnum;
(function (Dgcer504ApplicationJsonErrorDescriptionEnum) {
    Dgcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Dgcer504ApplicationJsonErrorDescriptionEnum || (Dgcer504ApplicationJsonErrorDescriptionEnum = {}));
var Dgcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgcer504ApplicationJson, _super);
    function Dgcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Dgcer504ApplicationJson;
}(SpeakeasyBase));
export { Dgcer504ApplicationJson };
var DgcerResponse = /** @class */ (function (_super) {
    __extends(DgcerResponse, _super);
    function DgcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DgcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DgcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Dgcer400ApplicationJson)
    ], DgcerResponse.prototype, "dgcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Dgcer401ApplicationJson)
    ], DgcerResponse.prototype, "dgcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Dgcer404ApplicationJson)
    ], DgcerResponse.prototype, "dgcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Dgcer500ApplicationJson)
    ], DgcerResponse.prototype, "dgcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Dgcer502ApplicationJson)
    ], DgcerResponse.prototype, "dgcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Dgcer503ApplicationJson)
    ], DgcerResponse.prototype, "dgcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Dgcer504ApplicationJson)
    ], DgcerResponse.prototype, "dgcer504ApplicationJsonObject", void 0);
    return DgcerResponse;
}(SpeakeasyBase));
export { DgcerResponse };
