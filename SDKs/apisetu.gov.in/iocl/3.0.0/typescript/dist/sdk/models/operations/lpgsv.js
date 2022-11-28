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
var LpgsvRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(LpgsvRequestBodyCertificateParameters, _super);
    function LpgsvRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], LpgsvRequestBodyCertificateParameters.prototype, "uid", void 0);
    return LpgsvRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { LpgsvRequestBodyCertificateParameters };
export var LpgsvRequestBodyFormatEnum;
(function (LpgsvRequestBodyFormatEnum) {
    LpgsvRequestBodyFormatEnum["Pdf"] = "pdf";
})(LpgsvRequestBodyFormatEnum || (LpgsvRequestBodyFormatEnum = {}));
var LpgsvRequestBody = /** @class */ (function (_super) {
    __extends(LpgsvRequestBody, _super);
    function LpgsvRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", LpgsvRequestBodyCertificateParameters)
    ], LpgsvRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], LpgsvRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], LpgsvRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], LpgsvRequestBody.prototype, "txnId", void 0);
    return LpgsvRequestBody;
}(SpeakeasyBase));
export { LpgsvRequestBody };
var LpgsvSecurity = /** @class */ (function (_super) {
    __extends(LpgsvSecurity, _super);
    function LpgsvSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LpgsvSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], LpgsvSecurity.prototype, "clientId", void 0);
    return LpgsvSecurity;
}(SpeakeasyBase));
export { LpgsvSecurity };
export var Lpgsv400ApplicationJsonErrorEnum;
(function (Lpgsv400ApplicationJsonErrorEnum) {
    Lpgsv400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Lpgsv400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Lpgsv400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Lpgsv400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Lpgsv400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Lpgsv400ApplicationJsonErrorEnum || (Lpgsv400ApplicationJsonErrorEnum = {}));
export var Lpgsv400ApplicationJsonErrorDescriptionEnum;
(function (Lpgsv400ApplicationJsonErrorDescriptionEnum) {
    Lpgsv400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Lpgsv400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Lpgsv400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Lpgsv400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Lpgsv400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Lpgsv400ApplicationJsonErrorDescriptionEnum || (Lpgsv400ApplicationJsonErrorDescriptionEnum = {}));
var Lpgsv400ApplicationJson = /** @class */ (function (_super) {
    __extends(Lpgsv400ApplicationJson, _super);
    function Lpgsv400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lpgsv400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lpgsv400ApplicationJson.prototype, "errorDescription", void 0);
    return Lpgsv400ApplicationJson;
}(SpeakeasyBase));
export { Lpgsv400ApplicationJson };
export var Lpgsv401ApplicationJsonErrorEnum;
(function (Lpgsv401ApplicationJsonErrorEnum) {
    Lpgsv401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Lpgsv401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Lpgsv401ApplicationJsonErrorEnum || (Lpgsv401ApplicationJsonErrorEnum = {}));
export var Lpgsv401ApplicationJsonErrorDescriptionEnum;
(function (Lpgsv401ApplicationJsonErrorDescriptionEnum) {
    Lpgsv401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Lpgsv401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Lpgsv401ApplicationJsonErrorDescriptionEnum || (Lpgsv401ApplicationJsonErrorDescriptionEnum = {}));
var Lpgsv401ApplicationJson = /** @class */ (function (_super) {
    __extends(Lpgsv401ApplicationJson, _super);
    function Lpgsv401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lpgsv401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lpgsv401ApplicationJson.prototype, "errorDescription", void 0);
    return Lpgsv401ApplicationJson;
}(SpeakeasyBase));
export { Lpgsv401ApplicationJson };
export var Lpgsv404ApplicationJsonErrorEnum;
(function (Lpgsv404ApplicationJsonErrorEnum) {
    Lpgsv404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Lpgsv404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Lpgsv404ApplicationJsonErrorEnum || (Lpgsv404ApplicationJsonErrorEnum = {}));
export var Lpgsv404ApplicationJsonErrorDescriptionEnum;
(function (Lpgsv404ApplicationJsonErrorDescriptionEnum) {
    Lpgsv404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Lpgsv404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Lpgsv404ApplicationJsonErrorDescriptionEnum || (Lpgsv404ApplicationJsonErrorDescriptionEnum = {}));
var Lpgsv404ApplicationJson = /** @class */ (function (_super) {
    __extends(Lpgsv404ApplicationJson, _super);
    function Lpgsv404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lpgsv404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lpgsv404ApplicationJson.prototype, "errorDescription", void 0);
    return Lpgsv404ApplicationJson;
}(SpeakeasyBase));
export { Lpgsv404ApplicationJson };
export var Lpgsv500ApplicationJsonErrorEnum;
(function (Lpgsv500ApplicationJsonErrorEnum) {
    Lpgsv500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Lpgsv500ApplicationJsonErrorEnum || (Lpgsv500ApplicationJsonErrorEnum = {}));
export var Lpgsv500ApplicationJsonErrorDescriptionEnum;
(function (Lpgsv500ApplicationJsonErrorDescriptionEnum) {
    Lpgsv500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Lpgsv500ApplicationJsonErrorDescriptionEnum || (Lpgsv500ApplicationJsonErrorDescriptionEnum = {}));
var Lpgsv500ApplicationJson = /** @class */ (function (_super) {
    __extends(Lpgsv500ApplicationJson, _super);
    function Lpgsv500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lpgsv500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lpgsv500ApplicationJson.prototype, "errorDescription", void 0);
    return Lpgsv500ApplicationJson;
}(SpeakeasyBase));
export { Lpgsv500ApplicationJson };
export var Lpgsv502ApplicationJsonErrorEnum;
(function (Lpgsv502ApplicationJsonErrorEnum) {
    Lpgsv502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Lpgsv502ApplicationJsonErrorEnum || (Lpgsv502ApplicationJsonErrorEnum = {}));
export var Lpgsv502ApplicationJsonErrorDescriptionEnum;
(function (Lpgsv502ApplicationJsonErrorDescriptionEnum) {
    Lpgsv502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Lpgsv502ApplicationJsonErrorDescriptionEnum || (Lpgsv502ApplicationJsonErrorDescriptionEnum = {}));
var Lpgsv502ApplicationJson = /** @class */ (function (_super) {
    __extends(Lpgsv502ApplicationJson, _super);
    function Lpgsv502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lpgsv502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lpgsv502ApplicationJson.prototype, "errorDescription", void 0);
    return Lpgsv502ApplicationJson;
}(SpeakeasyBase));
export { Lpgsv502ApplicationJson };
export var Lpgsv503ApplicationJsonErrorEnum;
(function (Lpgsv503ApplicationJsonErrorEnum) {
    Lpgsv503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Lpgsv503ApplicationJsonErrorEnum || (Lpgsv503ApplicationJsonErrorEnum = {}));
export var Lpgsv503ApplicationJsonErrorDescriptionEnum;
(function (Lpgsv503ApplicationJsonErrorDescriptionEnum) {
    Lpgsv503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Lpgsv503ApplicationJsonErrorDescriptionEnum || (Lpgsv503ApplicationJsonErrorDescriptionEnum = {}));
var Lpgsv503ApplicationJson = /** @class */ (function (_super) {
    __extends(Lpgsv503ApplicationJson, _super);
    function Lpgsv503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lpgsv503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lpgsv503ApplicationJson.prototype, "errorDescription", void 0);
    return Lpgsv503ApplicationJson;
}(SpeakeasyBase));
export { Lpgsv503ApplicationJson };
export var Lpgsv504ApplicationJsonErrorEnum;
(function (Lpgsv504ApplicationJsonErrorEnum) {
    Lpgsv504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Lpgsv504ApplicationJsonErrorEnum || (Lpgsv504ApplicationJsonErrorEnum = {}));
export var Lpgsv504ApplicationJsonErrorDescriptionEnum;
(function (Lpgsv504ApplicationJsonErrorDescriptionEnum) {
    Lpgsv504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Lpgsv504ApplicationJsonErrorDescriptionEnum || (Lpgsv504ApplicationJsonErrorDescriptionEnum = {}));
var Lpgsv504ApplicationJson = /** @class */ (function (_super) {
    __extends(Lpgsv504ApplicationJson, _super);
    function Lpgsv504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lpgsv504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lpgsv504ApplicationJson.prototype, "errorDescription", void 0);
    return Lpgsv504ApplicationJson;
}(SpeakeasyBase));
export { Lpgsv504ApplicationJson };
var LpgsvRequest = /** @class */ (function (_super) {
    __extends(LpgsvRequest, _super);
    function LpgsvRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", LpgsvRequestBody)
    ], LpgsvRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LpgsvSecurity)
    ], LpgsvRequest.prototype, "security", void 0);
    return LpgsvRequest;
}(SpeakeasyBase));
export { LpgsvRequest };
var LpgsvResponse = /** @class */ (function (_super) {
    __extends(LpgsvResponse, _super);
    function LpgsvResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LpgsvResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LpgsvResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Lpgsv400ApplicationJson)
    ], LpgsvResponse.prototype, "lpgsv400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Lpgsv401ApplicationJson)
    ], LpgsvResponse.prototype, "lpgsv401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Lpgsv404ApplicationJson)
    ], LpgsvResponse.prototype, "lpgsv404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Lpgsv500ApplicationJson)
    ], LpgsvResponse.prototype, "lpgsv500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Lpgsv502ApplicationJson)
    ], LpgsvResponse.prototype, "lpgsv502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Lpgsv503ApplicationJson)
    ], LpgsvResponse.prototype, "lpgsv503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Lpgsv504ApplicationJson)
    ], LpgsvResponse.prototype, "lpgsv504ApplicationJsonObject", void 0);
    return LpgsvResponse;
}(SpeakeasyBase));
export { LpgsvResponse };
