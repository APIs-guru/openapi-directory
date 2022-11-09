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
var DpcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(DpcerRequestBodyCertificateParameters, _super);
    function DpcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], DpcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], DpcerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        Metadata({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], DpcerRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return DpcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { DpcerRequestBodyCertificateParameters };
export var DpcerRequestBodyFormatEnum;
(function (DpcerRequestBodyFormatEnum) {
    DpcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(DpcerRequestBodyFormatEnum || (DpcerRequestBodyFormatEnum = {}));
var DpcerRequestBody = /** @class */ (function (_super) {
    __extends(DpcerRequestBody, _super);
    function DpcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", DpcerRequestBodyCertificateParameters)
    ], DpcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], DpcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], DpcerRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], DpcerRequestBody.prototype, "txnId", void 0);
    return DpcerRequestBody;
}(SpeakeasyBase));
export { DpcerRequestBody };
var DpcerSecurity = /** @class */ (function (_super) {
    __extends(DpcerSecurity, _super);
    function DpcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DpcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], DpcerSecurity.prototype, "clientId", void 0);
    return DpcerSecurity;
}(SpeakeasyBase));
export { DpcerSecurity };
var DpcerRequest = /** @class */ (function (_super) {
    __extends(DpcerRequest, _super);
    function DpcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DpcerRequestBody)
    ], DpcerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DpcerSecurity)
    ], DpcerRequest.prototype, "security", void 0);
    return DpcerRequest;
}(SpeakeasyBase));
export { DpcerRequest };
export var Dpcer400ApplicationJsonErrorEnum;
(function (Dpcer400ApplicationJsonErrorEnum) {
    Dpcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Dpcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Dpcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Dpcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Dpcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Dpcer400ApplicationJsonErrorEnum || (Dpcer400ApplicationJsonErrorEnum = {}));
export var Dpcer400ApplicationJsonErrorDescriptionEnum;
(function (Dpcer400ApplicationJsonErrorDescriptionEnum) {
    Dpcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Dpcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Dpcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Dpcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Dpcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Dpcer400ApplicationJsonErrorDescriptionEnum || (Dpcer400ApplicationJsonErrorDescriptionEnum = {}));
var Dpcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpcer400ApplicationJson, _super);
    function Dpcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Dpcer400ApplicationJson;
}(SpeakeasyBase));
export { Dpcer400ApplicationJson };
export var Dpcer401ApplicationJsonErrorEnum;
(function (Dpcer401ApplicationJsonErrorEnum) {
    Dpcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Dpcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Dpcer401ApplicationJsonErrorEnum || (Dpcer401ApplicationJsonErrorEnum = {}));
export var Dpcer401ApplicationJsonErrorDescriptionEnum;
(function (Dpcer401ApplicationJsonErrorDescriptionEnum) {
    Dpcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Dpcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Dpcer401ApplicationJsonErrorDescriptionEnum || (Dpcer401ApplicationJsonErrorDescriptionEnum = {}));
var Dpcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpcer401ApplicationJson, _super);
    function Dpcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Dpcer401ApplicationJson;
}(SpeakeasyBase));
export { Dpcer401ApplicationJson };
export var Dpcer404ApplicationJsonErrorEnum;
(function (Dpcer404ApplicationJsonErrorEnum) {
    Dpcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Dpcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Dpcer404ApplicationJsonErrorEnum || (Dpcer404ApplicationJsonErrorEnum = {}));
export var Dpcer404ApplicationJsonErrorDescriptionEnum;
(function (Dpcer404ApplicationJsonErrorDescriptionEnum) {
    Dpcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Dpcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Dpcer404ApplicationJsonErrorDescriptionEnum || (Dpcer404ApplicationJsonErrorDescriptionEnum = {}));
var Dpcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpcer404ApplicationJson, _super);
    function Dpcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Dpcer404ApplicationJson;
}(SpeakeasyBase));
export { Dpcer404ApplicationJson };
export var Dpcer500ApplicationJsonErrorEnum;
(function (Dpcer500ApplicationJsonErrorEnum) {
    Dpcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Dpcer500ApplicationJsonErrorEnum || (Dpcer500ApplicationJsonErrorEnum = {}));
export var Dpcer500ApplicationJsonErrorDescriptionEnum;
(function (Dpcer500ApplicationJsonErrorDescriptionEnum) {
    Dpcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Dpcer500ApplicationJsonErrorDescriptionEnum || (Dpcer500ApplicationJsonErrorDescriptionEnum = {}));
var Dpcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpcer500ApplicationJson, _super);
    function Dpcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Dpcer500ApplicationJson;
}(SpeakeasyBase));
export { Dpcer500ApplicationJson };
export var Dpcer502ApplicationJsonErrorEnum;
(function (Dpcer502ApplicationJsonErrorEnum) {
    Dpcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Dpcer502ApplicationJsonErrorEnum || (Dpcer502ApplicationJsonErrorEnum = {}));
export var Dpcer502ApplicationJsonErrorDescriptionEnum;
(function (Dpcer502ApplicationJsonErrorDescriptionEnum) {
    Dpcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Dpcer502ApplicationJsonErrorDescriptionEnum || (Dpcer502ApplicationJsonErrorDescriptionEnum = {}));
var Dpcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpcer502ApplicationJson, _super);
    function Dpcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Dpcer502ApplicationJson;
}(SpeakeasyBase));
export { Dpcer502ApplicationJson };
export var Dpcer503ApplicationJsonErrorEnum;
(function (Dpcer503ApplicationJsonErrorEnum) {
    Dpcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Dpcer503ApplicationJsonErrorEnum || (Dpcer503ApplicationJsonErrorEnum = {}));
export var Dpcer503ApplicationJsonErrorDescriptionEnum;
(function (Dpcer503ApplicationJsonErrorDescriptionEnum) {
    Dpcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Dpcer503ApplicationJsonErrorDescriptionEnum || (Dpcer503ApplicationJsonErrorDescriptionEnum = {}));
var Dpcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpcer503ApplicationJson, _super);
    function Dpcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Dpcer503ApplicationJson;
}(SpeakeasyBase));
export { Dpcer503ApplicationJson };
export var Dpcer504ApplicationJsonErrorEnum;
(function (Dpcer504ApplicationJsonErrorEnum) {
    Dpcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Dpcer504ApplicationJsonErrorEnum || (Dpcer504ApplicationJsonErrorEnum = {}));
export var Dpcer504ApplicationJsonErrorDescriptionEnum;
(function (Dpcer504ApplicationJsonErrorDescriptionEnum) {
    Dpcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Dpcer504ApplicationJsonErrorDescriptionEnum || (Dpcer504ApplicationJsonErrorDescriptionEnum = {}));
var Dpcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpcer504ApplicationJson, _super);
    function Dpcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Dpcer504ApplicationJson;
}(SpeakeasyBase));
export { Dpcer504ApplicationJson };
var DpcerResponse = /** @class */ (function (_super) {
    __extends(DpcerResponse, _super);
    function DpcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DpcerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DpcerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Dpcer400ApplicationJson)
    ], DpcerResponse.prototype, "dpcer400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Dpcer401ApplicationJson)
    ], DpcerResponse.prototype, "dpcer401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Dpcer404ApplicationJson)
    ], DpcerResponse.prototype, "dpcer404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Dpcer500ApplicationJson)
    ], DpcerResponse.prototype, "dpcer500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Dpcer502ApplicationJson)
    ], DpcerResponse.prototype, "dpcer502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Dpcer503ApplicationJson)
    ], DpcerResponse.prototype, "dpcer503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Dpcer504ApplicationJson)
    ], DpcerResponse.prototype, "dpcer504ApplicationJsonObject", void 0);
    return DpcerResponse;
}(SpeakeasyBase));
export { DpcerResponse };
