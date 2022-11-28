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
var CvipcRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(CvipcRequestBodyCertificateParameters, _super);
    function CvipcRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], CvipcRequestBodyCertificateParameters.prototype, "udf1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UDF2" }),
        __metadata("design:type", String)
    ], CvipcRequestBodyCertificateParameters.prototype, "udf2", void 0);
    return CvipcRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { CvipcRequestBodyCertificateParameters };
export var CvipcRequestBodyFormatEnum;
(function (CvipcRequestBodyFormatEnum) {
    CvipcRequestBodyFormatEnum["Pdf"] = "pdf";
})(CvipcRequestBodyFormatEnum || (CvipcRequestBodyFormatEnum = {}));
var CvipcRequestBody = /** @class */ (function (_super) {
    __extends(CvipcRequestBody, _super);
    function CvipcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", CvipcRequestBodyCertificateParameters)
    ], CvipcRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], CvipcRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CvipcRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], CvipcRequestBody.prototype, "txnId", void 0);
    return CvipcRequestBody;
}(SpeakeasyBase));
export { CvipcRequestBody };
var CvipcSecurity = /** @class */ (function (_super) {
    __extends(CvipcSecurity, _super);
    function CvipcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CvipcSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], CvipcSecurity.prototype, "clientId", void 0);
    return CvipcSecurity;
}(SpeakeasyBase));
export { CvipcSecurity };
export var Cvipc400ApplicationJsonErrorEnum;
(function (Cvipc400ApplicationJsonErrorEnum) {
    Cvipc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Cvipc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Cvipc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Cvipc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Cvipc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Cvipc400ApplicationJsonErrorEnum || (Cvipc400ApplicationJsonErrorEnum = {}));
export var Cvipc400ApplicationJsonErrorDescriptionEnum;
(function (Cvipc400ApplicationJsonErrorDescriptionEnum) {
    Cvipc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Cvipc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Cvipc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Cvipc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Cvipc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Cvipc400ApplicationJsonErrorDescriptionEnum || (Cvipc400ApplicationJsonErrorDescriptionEnum = {}));
var Cvipc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Cvipc400ApplicationJson, _super);
    function Cvipc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cvipc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cvipc400ApplicationJson.prototype, "errorDescription", void 0);
    return Cvipc400ApplicationJson;
}(SpeakeasyBase));
export { Cvipc400ApplicationJson };
export var Cvipc401ApplicationJsonErrorEnum;
(function (Cvipc401ApplicationJsonErrorEnum) {
    Cvipc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Cvipc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Cvipc401ApplicationJsonErrorEnum || (Cvipc401ApplicationJsonErrorEnum = {}));
export var Cvipc401ApplicationJsonErrorDescriptionEnum;
(function (Cvipc401ApplicationJsonErrorDescriptionEnum) {
    Cvipc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Cvipc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Cvipc401ApplicationJsonErrorDescriptionEnum || (Cvipc401ApplicationJsonErrorDescriptionEnum = {}));
var Cvipc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Cvipc401ApplicationJson, _super);
    function Cvipc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cvipc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cvipc401ApplicationJson.prototype, "errorDescription", void 0);
    return Cvipc401ApplicationJson;
}(SpeakeasyBase));
export { Cvipc401ApplicationJson };
export var Cvipc404ApplicationJsonErrorEnum;
(function (Cvipc404ApplicationJsonErrorEnum) {
    Cvipc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Cvipc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Cvipc404ApplicationJsonErrorEnum || (Cvipc404ApplicationJsonErrorEnum = {}));
export var Cvipc404ApplicationJsonErrorDescriptionEnum;
(function (Cvipc404ApplicationJsonErrorDescriptionEnum) {
    Cvipc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Cvipc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Cvipc404ApplicationJsonErrorDescriptionEnum || (Cvipc404ApplicationJsonErrorDescriptionEnum = {}));
var Cvipc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Cvipc404ApplicationJson, _super);
    function Cvipc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cvipc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cvipc404ApplicationJson.prototype, "errorDescription", void 0);
    return Cvipc404ApplicationJson;
}(SpeakeasyBase));
export { Cvipc404ApplicationJson };
export var Cvipc500ApplicationJsonErrorEnum;
(function (Cvipc500ApplicationJsonErrorEnum) {
    Cvipc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Cvipc500ApplicationJsonErrorEnum || (Cvipc500ApplicationJsonErrorEnum = {}));
export var Cvipc500ApplicationJsonErrorDescriptionEnum;
(function (Cvipc500ApplicationJsonErrorDescriptionEnum) {
    Cvipc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Cvipc500ApplicationJsonErrorDescriptionEnum || (Cvipc500ApplicationJsonErrorDescriptionEnum = {}));
var Cvipc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Cvipc500ApplicationJson, _super);
    function Cvipc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cvipc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cvipc500ApplicationJson.prototype, "errorDescription", void 0);
    return Cvipc500ApplicationJson;
}(SpeakeasyBase));
export { Cvipc500ApplicationJson };
export var Cvipc502ApplicationJsonErrorEnum;
(function (Cvipc502ApplicationJsonErrorEnum) {
    Cvipc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Cvipc502ApplicationJsonErrorEnum || (Cvipc502ApplicationJsonErrorEnum = {}));
export var Cvipc502ApplicationJsonErrorDescriptionEnum;
(function (Cvipc502ApplicationJsonErrorDescriptionEnum) {
    Cvipc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Cvipc502ApplicationJsonErrorDescriptionEnum || (Cvipc502ApplicationJsonErrorDescriptionEnum = {}));
var Cvipc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Cvipc502ApplicationJson, _super);
    function Cvipc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cvipc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cvipc502ApplicationJson.prototype, "errorDescription", void 0);
    return Cvipc502ApplicationJson;
}(SpeakeasyBase));
export { Cvipc502ApplicationJson };
export var Cvipc503ApplicationJsonErrorEnum;
(function (Cvipc503ApplicationJsonErrorEnum) {
    Cvipc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Cvipc503ApplicationJsonErrorEnum || (Cvipc503ApplicationJsonErrorEnum = {}));
export var Cvipc503ApplicationJsonErrorDescriptionEnum;
(function (Cvipc503ApplicationJsonErrorDescriptionEnum) {
    Cvipc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Cvipc503ApplicationJsonErrorDescriptionEnum || (Cvipc503ApplicationJsonErrorDescriptionEnum = {}));
var Cvipc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Cvipc503ApplicationJson, _super);
    function Cvipc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cvipc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cvipc503ApplicationJson.prototype, "errorDescription", void 0);
    return Cvipc503ApplicationJson;
}(SpeakeasyBase));
export { Cvipc503ApplicationJson };
export var Cvipc504ApplicationJsonErrorEnum;
(function (Cvipc504ApplicationJsonErrorEnum) {
    Cvipc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Cvipc504ApplicationJsonErrorEnum || (Cvipc504ApplicationJsonErrorEnum = {}));
export var Cvipc504ApplicationJsonErrorDescriptionEnum;
(function (Cvipc504ApplicationJsonErrorDescriptionEnum) {
    Cvipc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Cvipc504ApplicationJsonErrorDescriptionEnum || (Cvipc504ApplicationJsonErrorDescriptionEnum = {}));
var Cvipc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Cvipc504ApplicationJson, _super);
    function Cvipc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cvipc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cvipc504ApplicationJson.prototype, "errorDescription", void 0);
    return Cvipc504ApplicationJson;
}(SpeakeasyBase));
export { Cvipc504ApplicationJson };
var CvipcRequest = /** @class */ (function (_super) {
    __extends(CvipcRequest, _super);
    function CvipcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CvipcRequestBody)
    ], CvipcRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CvipcSecurity)
    ], CvipcRequest.prototype, "security", void 0);
    return CvipcRequest;
}(SpeakeasyBase));
export { CvipcRequest };
var CvipcResponse = /** @class */ (function (_super) {
    __extends(CvipcResponse, _super);
    function CvipcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CvipcResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CvipcResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cvipc400ApplicationJson)
    ], CvipcResponse.prototype, "cvipc400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cvipc401ApplicationJson)
    ], CvipcResponse.prototype, "cvipc401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cvipc404ApplicationJson)
    ], CvipcResponse.prototype, "cvipc404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cvipc500ApplicationJson)
    ], CvipcResponse.prototype, "cvipc500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cvipc502ApplicationJson)
    ], CvipcResponse.prototype, "cvipc502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cvipc503ApplicationJson)
    ], CvipcResponse.prototype, "cvipc503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Cvipc504ApplicationJson)
    ], CvipcResponse.prototype, "cvipc504ApplicationJsonObject", void 0);
    return CvipcResponse;
}(SpeakeasyBase));
export { CvipcResponse };
