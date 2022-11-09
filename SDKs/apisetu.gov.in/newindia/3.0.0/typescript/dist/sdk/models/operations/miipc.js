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
var MiipcRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(MiipcRequestBodyCertificateParameters, _super);
    function MiipcRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], MiipcRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        Metadata({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], MiipcRequestBodyCertificateParameters.prototype, "udf1", void 0);
    __decorate([
        Metadata({ data: "json, name=UDF2" }),
        __metadata("design:type", String)
    ], MiipcRequestBodyCertificateParameters.prototype, "udf2", void 0);
    __decorate([
        Metadata({ data: "json, name=UDF3" }),
        __metadata("design:type", String)
    ], MiipcRequestBodyCertificateParameters.prototype, "udf3", void 0);
    return MiipcRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { MiipcRequestBodyCertificateParameters };
export var MiipcRequestBodyFormatEnum;
(function (MiipcRequestBodyFormatEnum) {
    MiipcRequestBodyFormatEnum["Pdf"] = "pdf";
})(MiipcRequestBodyFormatEnum || (MiipcRequestBodyFormatEnum = {}));
var MiipcRequestBody = /** @class */ (function (_super) {
    __extends(MiipcRequestBody, _super);
    function MiipcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", MiipcRequestBodyCertificateParameters)
    ], MiipcRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], MiipcRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], MiipcRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], MiipcRequestBody.prototype, "txnId", void 0);
    return MiipcRequestBody;
}(SpeakeasyBase));
export { MiipcRequestBody };
var MiipcSecurity = /** @class */ (function (_super) {
    __extends(MiipcSecurity, _super);
    function MiipcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MiipcSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], MiipcSecurity.prototype, "clientId", void 0);
    return MiipcSecurity;
}(SpeakeasyBase));
export { MiipcSecurity };
var MiipcRequest = /** @class */ (function (_super) {
    __extends(MiipcRequest, _super);
    function MiipcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", MiipcRequestBody)
    ], MiipcRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MiipcSecurity)
    ], MiipcRequest.prototype, "security", void 0);
    return MiipcRequest;
}(SpeakeasyBase));
export { MiipcRequest };
export var Miipc400ApplicationJsonErrorEnum;
(function (Miipc400ApplicationJsonErrorEnum) {
    Miipc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Miipc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Miipc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Miipc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Miipc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Miipc400ApplicationJsonErrorEnum || (Miipc400ApplicationJsonErrorEnum = {}));
export var Miipc400ApplicationJsonErrorDescriptionEnum;
(function (Miipc400ApplicationJsonErrorDescriptionEnum) {
    Miipc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Miipc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Miipc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Miipc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Miipc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Miipc400ApplicationJsonErrorDescriptionEnum || (Miipc400ApplicationJsonErrorDescriptionEnum = {}));
var Miipc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Miipc400ApplicationJson, _super);
    function Miipc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Miipc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Miipc400ApplicationJson.prototype, "errorDescription", void 0);
    return Miipc400ApplicationJson;
}(SpeakeasyBase));
export { Miipc400ApplicationJson };
export var Miipc401ApplicationJsonErrorEnum;
(function (Miipc401ApplicationJsonErrorEnum) {
    Miipc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Miipc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Miipc401ApplicationJsonErrorEnum || (Miipc401ApplicationJsonErrorEnum = {}));
export var Miipc401ApplicationJsonErrorDescriptionEnum;
(function (Miipc401ApplicationJsonErrorDescriptionEnum) {
    Miipc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Miipc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Miipc401ApplicationJsonErrorDescriptionEnum || (Miipc401ApplicationJsonErrorDescriptionEnum = {}));
var Miipc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Miipc401ApplicationJson, _super);
    function Miipc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Miipc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Miipc401ApplicationJson.prototype, "errorDescription", void 0);
    return Miipc401ApplicationJson;
}(SpeakeasyBase));
export { Miipc401ApplicationJson };
export var Miipc404ApplicationJsonErrorEnum;
(function (Miipc404ApplicationJsonErrorEnum) {
    Miipc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Miipc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Miipc404ApplicationJsonErrorEnum || (Miipc404ApplicationJsonErrorEnum = {}));
export var Miipc404ApplicationJsonErrorDescriptionEnum;
(function (Miipc404ApplicationJsonErrorDescriptionEnum) {
    Miipc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Miipc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Miipc404ApplicationJsonErrorDescriptionEnum || (Miipc404ApplicationJsonErrorDescriptionEnum = {}));
var Miipc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Miipc404ApplicationJson, _super);
    function Miipc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Miipc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Miipc404ApplicationJson.prototype, "errorDescription", void 0);
    return Miipc404ApplicationJson;
}(SpeakeasyBase));
export { Miipc404ApplicationJson };
export var Miipc500ApplicationJsonErrorEnum;
(function (Miipc500ApplicationJsonErrorEnum) {
    Miipc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Miipc500ApplicationJsonErrorEnum || (Miipc500ApplicationJsonErrorEnum = {}));
export var Miipc500ApplicationJsonErrorDescriptionEnum;
(function (Miipc500ApplicationJsonErrorDescriptionEnum) {
    Miipc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Miipc500ApplicationJsonErrorDescriptionEnum || (Miipc500ApplicationJsonErrorDescriptionEnum = {}));
var Miipc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Miipc500ApplicationJson, _super);
    function Miipc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Miipc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Miipc500ApplicationJson.prototype, "errorDescription", void 0);
    return Miipc500ApplicationJson;
}(SpeakeasyBase));
export { Miipc500ApplicationJson };
export var Miipc502ApplicationJsonErrorEnum;
(function (Miipc502ApplicationJsonErrorEnum) {
    Miipc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Miipc502ApplicationJsonErrorEnum || (Miipc502ApplicationJsonErrorEnum = {}));
export var Miipc502ApplicationJsonErrorDescriptionEnum;
(function (Miipc502ApplicationJsonErrorDescriptionEnum) {
    Miipc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Miipc502ApplicationJsonErrorDescriptionEnum || (Miipc502ApplicationJsonErrorDescriptionEnum = {}));
var Miipc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Miipc502ApplicationJson, _super);
    function Miipc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Miipc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Miipc502ApplicationJson.prototype, "errorDescription", void 0);
    return Miipc502ApplicationJson;
}(SpeakeasyBase));
export { Miipc502ApplicationJson };
export var Miipc503ApplicationJsonErrorEnum;
(function (Miipc503ApplicationJsonErrorEnum) {
    Miipc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Miipc503ApplicationJsonErrorEnum || (Miipc503ApplicationJsonErrorEnum = {}));
export var Miipc503ApplicationJsonErrorDescriptionEnum;
(function (Miipc503ApplicationJsonErrorDescriptionEnum) {
    Miipc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Miipc503ApplicationJsonErrorDescriptionEnum || (Miipc503ApplicationJsonErrorDescriptionEnum = {}));
var Miipc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Miipc503ApplicationJson, _super);
    function Miipc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Miipc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Miipc503ApplicationJson.prototype, "errorDescription", void 0);
    return Miipc503ApplicationJson;
}(SpeakeasyBase));
export { Miipc503ApplicationJson };
export var Miipc504ApplicationJsonErrorEnum;
(function (Miipc504ApplicationJsonErrorEnum) {
    Miipc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Miipc504ApplicationJsonErrorEnum || (Miipc504ApplicationJsonErrorEnum = {}));
export var Miipc504ApplicationJsonErrorDescriptionEnum;
(function (Miipc504ApplicationJsonErrorDescriptionEnum) {
    Miipc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Miipc504ApplicationJsonErrorDescriptionEnum || (Miipc504ApplicationJsonErrorDescriptionEnum = {}));
var Miipc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Miipc504ApplicationJson, _super);
    function Miipc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Miipc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Miipc504ApplicationJson.prototype, "errorDescription", void 0);
    return Miipc504ApplicationJson;
}(SpeakeasyBase));
export { Miipc504ApplicationJson };
var MiipcResponse = /** @class */ (function (_super) {
    __extends(MiipcResponse, _super);
    function MiipcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MiipcResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MiipcResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Miipc400ApplicationJson)
    ], MiipcResponse.prototype, "miipc400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Miipc401ApplicationJson)
    ], MiipcResponse.prototype, "miipc401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Miipc404ApplicationJson)
    ], MiipcResponse.prototype, "miipc404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Miipc500ApplicationJson)
    ], MiipcResponse.prototype, "miipc500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Miipc502ApplicationJson)
    ], MiipcResponse.prototype, "miipc502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Miipc503ApplicationJson)
    ], MiipcResponse.prototype, "miipc503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Miipc504ApplicationJson)
    ], MiipcResponse.prototype, "miipc504ApplicationJsonObject", void 0);
    return MiipcResponse;
}(SpeakeasyBase));
export { MiipcResponse };
