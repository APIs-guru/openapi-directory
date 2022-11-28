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
var BknocRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(BknocRequestBodyCertificateParameters, _super);
    function BknocRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], BknocRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], BknocRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegNum" }),
        __metadata("design:type", String)
    ], BknocRequestBodyCertificateParameters.prototype, "regNum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], BknocRequestBodyCertificateParameters.prototype, "uid", void 0);
    return BknocRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { BknocRequestBodyCertificateParameters };
export var BknocRequestBodyFormatEnum;
(function (BknocRequestBodyFormatEnum) {
    BknocRequestBodyFormatEnum["Pdf"] = "pdf";
})(BknocRequestBodyFormatEnum || (BknocRequestBodyFormatEnum = {}));
var BknocRequestBody = /** @class */ (function (_super) {
    __extends(BknocRequestBody, _super);
    function BknocRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", BknocRequestBodyCertificateParameters)
    ], BknocRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], BknocRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], BknocRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], BknocRequestBody.prototype, "txnId", void 0);
    return BknocRequestBody;
}(SpeakeasyBase));
export { BknocRequestBody };
var BknocSecurity = /** @class */ (function (_super) {
    __extends(BknocSecurity, _super);
    function BknocSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], BknocSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], BknocSecurity.prototype, "clientId", void 0);
    return BknocSecurity;
}(SpeakeasyBase));
export { BknocSecurity };
export var Bknoc400ApplicationJsonErrorEnum;
(function (Bknoc400ApplicationJsonErrorEnum) {
    Bknoc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Bknoc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Bknoc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Bknoc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Bknoc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Bknoc400ApplicationJsonErrorEnum || (Bknoc400ApplicationJsonErrorEnum = {}));
export var Bknoc400ApplicationJsonErrorDescriptionEnum;
(function (Bknoc400ApplicationJsonErrorDescriptionEnum) {
    Bknoc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Bknoc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Bknoc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Bknoc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Bknoc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Bknoc400ApplicationJsonErrorDescriptionEnum || (Bknoc400ApplicationJsonErrorDescriptionEnum = {}));
var Bknoc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Bknoc400ApplicationJson, _super);
    function Bknoc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bknoc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bknoc400ApplicationJson.prototype, "errorDescription", void 0);
    return Bknoc400ApplicationJson;
}(SpeakeasyBase));
export { Bknoc400ApplicationJson };
export var Bknoc401ApplicationJsonErrorEnum;
(function (Bknoc401ApplicationJsonErrorEnum) {
    Bknoc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Bknoc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Bknoc401ApplicationJsonErrorEnum || (Bknoc401ApplicationJsonErrorEnum = {}));
export var Bknoc401ApplicationJsonErrorDescriptionEnum;
(function (Bknoc401ApplicationJsonErrorDescriptionEnum) {
    Bknoc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Bknoc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Bknoc401ApplicationJsonErrorDescriptionEnum || (Bknoc401ApplicationJsonErrorDescriptionEnum = {}));
var Bknoc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Bknoc401ApplicationJson, _super);
    function Bknoc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bknoc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bknoc401ApplicationJson.prototype, "errorDescription", void 0);
    return Bknoc401ApplicationJson;
}(SpeakeasyBase));
export { Bknoc401ApplicationJson };
export var Bknoc404ApplicationJsonErrorEnum;
(function (Bknoc404ApplicationJsonErrorEnum) {
    Bknoc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Bknoc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Bknoc404ApplicationJsonErrorEnum || (Bknoc404ApplicationJsonErrorEnum = {}));
export var Bknoc404ApplicationJsonErrorDescriptionEnum;
(function (Bknoc404ApplicationJsonErrorDescriptionEnum) {
    Bknoc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Bknoc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Bknoc404ApplicationJsonErrorDescriptionEnum || (Bknoc404ApplicationJsonErrorDescriptionEnum = {}));
var Bknoc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Bknoc404ApplicationJson, _super);
    function Bknoc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bknoc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bknoc404ApplicationJson.prototype, "errorDescription", void 0);
    return Bknoc404ApplicationJson;
}(SpeakeasyBase));
export { Bknoc404ApplicationJson };
export var Bknoc500ApplicationJsonErrorEnum;
(function (Bknoc500ApplicationJsonErrorEnum) {
    Bknoc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Bknoc500ApplicationJsonErrorEnum || (Bknoc500ApplicationJsonErrorEnum = {}));
export var Bknoc500ApplicationJsonErrorDescriptionEnum;
(function (Bknoc500ApplicationJsonErrorDescriptionEnum) {
    Bknoc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Bknoc500ApplicationJsonErrorDescriptionEnum || (Bknoc500ApplicationJsonErrorDescriptionEnum = {}));
var Bknoc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Bknoc500ApplicationJson, _super);
    function Bknoc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bknoc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bknoc500ApplicationJson.prototype, "errorDescription", void 0);
    return Bknoc500ApplicationJson;
}(SpeakeasyBase));
export { Bknoc500ApplicationJson };
export var Bknoc502ApplicationJsonErrorEnum;
(function (Bknoc502ApplicationJsonErrorEnum) {
    Bknoc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Bknoc502ApplicationJsonErrorEnum || (Bknoc502ApplicationJsonErrorEnum = {}));
export var Bknoc502ApplicationJsonErrorDescriptionEnum;
(function (Bknoc502ApplicationJsonErrorDescriptionEnum) {
    Bknoc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Bknoc502ApplicationJsonErrorDescriptionEnum || (Bknoc502ApplicationJsonErrorDescriptionEnum = {}));
var Bknoc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Bknoc502ApplicationJson, _super);
    function Bknoc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bknoc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bknoc502ApplicationJson.prototype, "errorDescription", void 0);
    return Bknoc502ApplicationJson;
}(SpeakeasyBase));
export { Bknoc502ApplicationJson };
export var Bknoc503ApplicationJsonErrorEnum;
(function (Bknoc503ApplicationJsonErrorEnum) {
    Bknoc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Bknoc503ApplicationJsonErrorEnum || (Bknoc503ApplicationJsonErrorEnum = {}));
export var Bknoc503ApplicationJsonErrorDescriptionEnum;
(function (Bknoc503ApplicationJsonErrorDescriptionEnum) {
    Bknoc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Bknoc503ApplicationJsonErrorDescriptionEnum || (Bknoc503ApplicationJsonErrorDescriptionEnum = {}));
var Bknoc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Bknoc503ApplicationJson, _super);
    function Bknoc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bknoc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bknoc503ApplicationJson.prototype, "errorDescription", void 0);
    return Bknoc503ApplicationJson;
}(SpeakeasyBase));
export { Bknoc503ApplicationJson };
export var Bknoc504ApplicationJsonErrorEnum;
(function (Bknoc504ApplicationJsonErrorEnum) {
    Bknoc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Bknoc504ApplicationJsonErrorEnum || (Bknoc504ApplicationJsonErrorEnum = {}));
export var Bknoc504ApplicationJsonErrorDescriptionEnum;
(function (Bknoc504ApplicationJsonErrorDescriptionEnum) {
    Bknoc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Bknoc504ApplicationJsonErrorDescriptionEnum || (Bknoc504ApplicationJsonErrorDescriptionEnum = {}));
var Bknoc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Bknoc504ApplicationJson, _super);
    function Bknoc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bknoc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bknoc504ApplicationJson.prototype, "errorDescription", void 0);
    return Bknoc504ApplicationJson;
}(SpeakeasyBase));
export { Bknoc504ApplicationJson };
var BknocRequest = /** @class */ (function (_super) {
    __extends(BknocRequest, _super);
    function BknocRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BknocRequestBody)
    ], BknocRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BknocSecurity)
    ], BknocRequest.prototype, "security", void 0);
    return BknocRequest;
}(SpeakeasyBase));
export { BknocRequest };
var BknocResponse = /** @class */ (function (_super) {
    __extends(BknocResponse, _super);
    function BknocResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BknocResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BknocResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Bknoc400ApplicationJson)
    ], BknocResponse.prototype, "bknoc400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Bknoc401ApplicationJson)
    ], BknocResponse.prototype, "bknoc401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Bknoc404ApplicationJson)
    ], BknocResponse.prototype, "bknoc404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Bknoc500ApplicationJson)
    ], BknocResponse.prototype, "bknoc500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Bknoc502ApplicationJson)
    ], BknocResponse.prototype, "bknoc502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Bknoc503ApplicationJson)
    ], BknocResponse.prototype, "bknoc503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Bknoc504ApplicationJson)
    ], BknocResponse.prototype, "bknoc504ApplicationJsonObject", void 0);
    return BknocResponse;
}(SpeakeasyBase));
export { BknocResponse };
