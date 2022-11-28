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
var LcsagRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(LcsagRequestBodyCertificateParameters, _super);
    function LcsagRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], LcsagRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], LcsagRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegNum" }),
        __metadata("design:type", String)
    ], LcsagRequestBodyCertificateParameters.prototype, "regNum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], LcsagRequestBodyCertificateParameters.prototype, "uid", void 0);
    return LcsagRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { LcsagRequestBodyCertificateParameters };
export var LcsagRequestBodyFormatEnum;
(function (LcsagRequestBodyFormatEnum) {
    LcsagRequestBodyFormatEnum["Pdf"] = "pdf";
})(LcsagRequestBodyFormatEnum || (LcsagRequestBodyFormatEnum = {}));
var LcsagRequestBody = /** @class */ (function (_super) {
    __extends(LcsagRequestBody, _super);
    function LcsagRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", LcsagRequestBodyCertificateParameters)
    ], LcsagRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], LcsagRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], LcsagRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], LcsagRequestBody.prototype, "txnId", void 0);
    return LcsagRequestBody;
}(SpeakeasyBase));
export { LcsagRequestBody };
var LcsagSecurity = /** @class */ (function (_super) {
    __extends(LcsagSecurity, _super);
    function LcsagSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LcsagSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], LcsagSecurity.prototype, "clientId", void 0);
    return LcsagSecurity;
}(SpeakeasyBase));
export { LcsagSecurity };
export var Lcsag400ApplicationJsonErrorEnum;
(function (Lcsag400ApplicationJsonErrorEnum) {
    Lcsag400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Lcsag400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Lcsag400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Lcsag400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Lcsag400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Lcsag400ApplicationJsonErrorEnum || (Lcsag400ApplicationJsonErrorEnum = {}));
export var Lcsag400ApplicationJsonErrorDescriptionEnum;
(function (Lcsag400ApplicationJsonErrorDescriptionEnum) {
    Lcsag400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Lcsag400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Lcsag400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Lcsag400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Lcsag400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Lcsag400ApplicationJsonErrorDescriptionEnum || (Lcsag400ApplicationJsonErrorDescriptionEnum = {}));
var Lcsag400ApplicationJson = /** @class */ (function (_super) {
    __extends(Lcsag400ApplicationJson, _super);
    function Lcsag400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lcsag400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lcsag400ApplicationJson.prototype, "errorDescription", void 0);
    return Lcsag400ApplicationJson;
}(SpeakeasyBase));
export { Lcsag400ApplicationJson };
export var Lcsag401ApplicationJsonErrorEnum;
(function (Lcsag401ApplicationJsonErrorEnum) {
    Lcsag401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Lcsag401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Lcsag401ApplicationJsonErrorEnum || (Lcsag401ApplicationJsonErrorEnum = {}));
export var Lcsag401ApplicationJsonErrorDescriptionEnum;
(function (Lcsag401ApplicationJsonErrorDescriptionEnum) {
    Lcsag401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Lcsag401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Lcsag401ApplicationJsonErrorDescriptionEnum || (Lcsag401ApplicationJsonErrorDescriptionEnum = {}));
var Lcsag401ApplicationJson = /** @class */ (function (_super) {
    __extends(Lcsag401ApplicationJson, _super);
    function Lcsag401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lcsag401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lcsag401ApplicationJson.prototype, "errorDescription", void 0);
    return Lcsag401ApplicationJson;
}(SpeakeasyBase));
export { Lcsag401ApplicationJson };
export var Lcsag404ApplicationJsonErrorEnum;
(function (Lcsag404ApplicationJsonErrorEnum) {
    Lcsag404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Lcsag404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Lcsag404ApplicationJsonErrorEnum || (Lcsag404ApplicationJsonErrorEnum = {}));
export var Lcsag404ApplicationJsonErrorDescriptionEnum;
(function (Lcsag404ApplicationJsonErrorDescriptionEnum) {
    Lcsag404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Lcsag404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Lcsag404ApplicationJsonErrorDescriptionEnum || (Lcsag404ApplicationJsonErrorDescriptionEnum = {}));
var Lcsag404ApplicationJson = /** @class */ (function (_super) {
    __extends(Lcsag404ApplicationJson, _super);
    function Lcsag404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lcsag404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lcsag404ApplicationJson.prototype, "errorDescription", void 0);
    return Lcsag404ApplicationJson;
}(SpeakeasyBase));
export { Lcsag404ApplicationJson };
export var Lcsag500ApplicationJsonErrorEnum;
(function (Lcsag500ApplicationJsonErrorEnum) {
    Lcsag500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Lcsag500ApplicationJsonErrorEnum || (Lcsag500ApplicationJsonErrorEnum = {}));
export var Lcsag500ApplicationJsonErrorDescriptionEnum;
(function (Lcsag500ApplicationJsonErrorDescriptionEnum) {
    Lcsag500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Lcsag500ApplicationJsonErrorDescriptionEnum || (Lcsag500ApplicationJsonErrorDescriptionEnum = {}));
var Lcsag500ApplicationJson = /** @class */ (function (_super) {
    __extends(Lcsag500ApplicationJson, _super);
    function Lcsag500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lcsag500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lcsag500ApplicationJson.prototype, "errorDescription", void 0);
    return Lcsag500ApplicationJson;
}(SpeakeasyBase));
export { Lcsag500ApplicationJson };
export var Lcsag502ApplicationJsonErrorEnum;
(function (Lcsag502ApplicationJsonErrorEnum) {
    Lcsag502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Lcsag502ApplicationJsonErrorEnum || (Lcsag502ApplicationJsonErrorEnum = {}));
export var Lcsag502ApplicationJsonErrorDescriptionEnum;
(function (Lcsag502ApplicationJsonErrorDescriptionEnum) {
    Lcsag502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Lcsag502ApplicationJsonErrorDescriptionEnum || (Lcsag502ApplicationJsonErrorDescriptionEnum = {}));
var Lcsag502ApplicationJson = /** @class */ (function (_super) {
    __extends(Lcsag502ApplicationJson, _super);
    function Lcsag502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lcsag502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lcsag502ApplicationJson.prototype, "errorDescription", void 0);
    return Lcsag502ApplicationJson;
}(SpeakeasyBase));
export { Lcsag502ApplicationJson };
export var Lcsag503ApplicationJsonErrorEnum;
(function (Lcsag503ApplicationJsonErrorEnum) {
    Lcsag503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Lcsag503ApplicationJsonErrorEnum || (Lcsag503ApplicationJsonErrorEnum = {}));
export var Lcsag503ApplicationJsonErrorDescriptionEnum;
(function (Lcsag503ApplicationJsonErrorDescriptionEnum) {
    Lcsag503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Lcsag503ApplicationJsonErrorDescriptionEnum || (Lcsag503ApplicationJsonErrorDescriptionEnum = {}));
var Lcsag503ApplicationJson = /** @class */ (function (_super) {
    __extends(Lcsag503ApplicationJson, _super);
    function Lcsag503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lcsag503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lcsag503ApplicationJson.prototype, "errorDescription", void 0);
    return Lcsag503ApplicationJson;
}(SpeakeasyBase));
export { Lcsag503ApplicationJson };
export var Lcsag504ApplicationJsonErrorEnum;
(function (Lcsag504ApplicationJsonErrorEnum) {
    Lcsag504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Lcsag504ApplicationJsonErrorEnum || (Lcsag504ApplicationJsonErrorEnum = {}));
export var Lcsag504ApplicationJsonErrorDescriptionEnum;
(function (Lcsag504ApplicationJsonErrorDescriptionEnum) {
    Lcsag504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Lcsag504ApplicationJsonErrorDescriptionEnum || (Lcsag504ApplicationJsonErrorDescriptionEnum = {}));
var Lcsag504ApplicationJson = /** @class */ (function (_super) {
    __extends(Lcsag504ApplicationJson, _super);
    function Lcsag504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lcsag504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lcsag504ApplicationJson.prototype, "errorDescription", void 0);
    return Lcsag504ApplicationJson;
}(SpeakeasyBase));
export { Lcsag504ApplicationJson };
var LcsagRequest = /** @class */ (function (_super) {
    __extends(LcsagRequest, _super);
    function LcsagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", LcsagRequestBody)
    ], LcsagRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LcsagSecurity)
    ], LcsagRequest.prototype, "security", void 0);
    return LcsagRequest;
}(SpeakeasyBase));
export { LcsagRequest };
var LcsagResponse = /** @class */ (function (_super) {
    __extends(LcsagResponse, _super);
    function LcsagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LcsagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LcsagResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Lcsag400ApplicationJson)
    ], LcsagResponse.prototype, "lcsag400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Lcsag401ApplicationJson)
    ], LcsagResponse.prototype, "lcsag401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Lcsag404ApplicationJson)
    ], LcsagResponse.prototype, "lcsag404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Lcsag500ApplicationJson)
    ], LcsagResponse.prototype, "lcsag500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Lcsag502ApplicationJson)
    ], LcsagResponse.prototype, "lcsag502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Lcsag503ApplicationJson)
    ], LcsagResponse.prototype, "lcsag503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Lcsag504ApplicationJson)
    ], LcsagResponse.prototype, "lcsag504ApplicationJsonObject", void 0);
    return LcsagResponse;
}(SpeakeasyBase));
export { LcsagResponse };
