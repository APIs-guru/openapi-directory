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
var PrfndRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PrfndRequestBodyCertificateParameters, _super);
    function PrfndRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AC_NO" }),
        __metadata("design:type", String)
    ], PrfndRequestBodyCertificateParameters.prototype, "acNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], PrfndRequestBodyCertificateParameters.prototype, "dob", void 0);
    return PrfndRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { PrfndRequestBodyCertificateParameters };
export var PrfndRequestBodyFormatEnum;
(function (PrfndRequestBodyFormatEnum) {
    PrfndRequestBodyFormatEnum["Pdf"] = "pdf";
})(PrfndRequestBodyFormatEnum || (PrfndRequestBodyFormatEnum = {}));
var PrfndRequestBody = /** @class */ (function (_super) {
    __extends(PrfndRequestBody, _super);
    function PrfndRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", PrfndRequestBodyCertificateParameters)
    ], PrfndRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], PrfndRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PrfndRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], PrfndRequestBody.prototype, "txnId", void 0);
    return PrfndRequestBody;
}(SpeakeasyBase));
export { PrfndRequestBody };
var PrfndSecurity = /** @class */ (function (_super) {
    __extends(PrfndSecurity, _super);
    function PrfndSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PrfndSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PrfndSecurity.prototype, "clientId", void 0);
    return PrfndSecurity;
}(SpeakeasyBase));
export { PrfndSecurity };
export var Prfnd400ApplicationJsonErrorEnum;
(function (Prfnd400ApplicationJsonErrorEnum) {
    Prfnd400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Prfnd400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Prfnd400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Prfnd400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Prfnd400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Prfnd400ApplicationJsonErrorEnum || (Prfnd400ApplicationJsonErrorEnum = {}));
export var Prfnd400ApplicationJsonErrorDescriptionEnum;
(function (Prfnd400ApplicationJsonErrorDescriptionEnum) {
    Prfnd400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Prfnd400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Prfnd400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Prfnd400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Prfnd400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Prfnd400ApplicationJsonErrorDescriptionEnum || (Prfnd400ApplicationJsonErrorDescriptionEnum = {}));
var Prfnd400ApplicationJson = /** @class */ (function (_super) {
    __extends(Prfnd400ApplicationJson, _super);
    function Prfnd400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Prfnd400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Prfnd400ApplicationJson.prototype, "errorDescription", void 0);
    return Prfnd400ApplicationJson;
}(SpeakeasyBase));
export { Prfnd400ApplicationJson };
export var Prfnd401ApplicationJsonErrorEnum;
(function (Prfnd401ApplicationJsonErrorEnum) {
    Prfnd401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Prfnd401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Prfnd401ApplicationJsonErrorEnum || (Prfnd401ApplicationJsonErrorEnum = {}));
export var Prfnd401ApplicationJsonErrorDescriptionEnum;
(function (Prfnd401ApplicationJsonErrorDescriptionEnum) {
    Prfnd401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Prfnd401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Prfnd401ApplicationJsonErrorDescriptionEnum || (Prfnd401ApplicationJsonErrorDescriptionEnum = {}));
var Prfnd401ApplicationJson = /** @class */ (function (_super) {
    __extends(Prfnd401ApplicationJson, _super);
    function Prfnd401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Prfnd401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Prfnd401ApplicationJson.prototype, "errorDescription", void 0);
    return Prfnd401ApplicationJson;
}(SpeakeasyBase));
export { Prfnd401ApplicationJson };
export var Prfnd404ApplicationJsonErrorEnum;
(function (Prfnd404ApplicationJsonErrorEnum) {
    Prfnd404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Prfnd404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Prfnd404ApplicationJsonErrorEnum || (Prfnd404ApplicationJsonErrorEnum = {}));
export var Prfnd404ApplicationJsonErrorDescriptionEnum;
(function (Prfnd404ApplicationJsonErrorDescriptionEnum) {
    Prfnd404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Prfnd404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Prfnd404ApplicationJsonErrorDescriptionEnum || (Prfnd404ApplicationJsonErrorDescriptionEnum = {}));
var Prfnd404ApplicationJson = /** @class */ (function (_super) {
    __extends(Prfnd404ApplicationJson, _super);
    function Prfnd404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Prfnd404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Prfnd404ApplicationJson.prototype, "errorDescription", void 0);
    return Prfnd404ApplicationJson;
}(SpeakeasyBase));
export { Prfnd404ApplicationJson };
export var Prfnd500ApplicationJsonErrorEnum;
(function (Prfnd500ApplicationJsonErrorEnum) {
    Prfnd500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Prfnd500ApplicationJsonErrorEnum || (Prfnd500ApplicationJsonErrorEnum = {}));
export var Prfnd500ApplicationJsonErrorDescriptionEnum;
(function (Prfnd500ApplicationJsonErrorDescriptionEnum) {
    Prfnd500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Prfnd500ApplicationJsonErrorDescriptionEnum || (Prfnd500ApplicationJsonErrorDescriptionEnum = {}));
var Prfnd500ApplicationJson = /** @class */ (function (_super) {
    __extends(Prfnd500ApplicationJson, _super);
    function Prfnd500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Prfnd500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Prfnd500ApplicationJson.prototype, "errorDescription", void 0);
    return Prfnd500ApplicationJson;
}(SpeakeasyBase));
export { Prfnd500ApplicationJson };
export var Prfnd502ApplicationJsonErrorEnum;
(function (Prfnd502ApplicationJsonErrorEnum) {
    Prfnd502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Prfnd502ApplicationJsonErrorEnum || (Prfnd502ApplicationJsonErrorEnum = {}));
export var Prfnd502ApplicationJsonErrorDescriptionEnum;
(function (Prfnd502ApplicationJsonErrorDescriptionEnum) {
    Prfnd502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Prfnd502ApplicationJsonErrorDescriptionEnum || (Prfnd502ApplicationJsonErrorDescriptionEnum = {}));
var Prfnd502ApplicationJson = /** @class */ (function (_super) {
    __extends(Prfnd502ApplicationJson, _super);
    function Prfnd502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Prfnd502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Prfnd502ApplicationJson.prototype, "errorDescription", void 0);
    return Prfnd502ApplicationJson;
}(SpeakeasyBase));
export { Prfnd502ApplicationJson };
export var Prfnd503ApplicationJsonErrorEnum;
(function (Prfnd503ApplicationJsonErrorEnum) {
    Prfnd503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Prfnd503ApplicationJsonErrorEnum || (Prfnd503ApplicationJsonErrorEnum = {}));
export var Prfnd503ApplicationJsonErrorDescriptionEnum;
(function (Prfnd503ApplicationJsonErrorDescriptionEnum) {
    Prfnd503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Prfnd503ApplicationJsonErrorDescriptionEnum || (Prfnd503ApplicationJsonErrorDescriptionEnum = {}));
var Prfnd503ApplicationJson = /** @class */ (function (_super) {
    __extends(Prfnd503ApplicationJson, _super);
    function Prfnd503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Prfnd503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Prfnd503ApplicationJson.prototype, "errorDescription", void 0);
    return Prfnd503ApplicationJson;
}(SpeakeasyBase));
export { Prfnd503ApplicationJson };
export var Prfnd504ApplicationJsonErrorEnum;
(function (Prfnd504ApplicationJsonErrorEnum) {
    Prfnd504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Prfnd504ApplicationJsonErrorEnum || (Prfnd504ApplicationJsonErrorEnum = {}));
export var Prfnd504ApplicationJsonErrorDescriptionEnum;
(function (Prfnd504ApplicationJsonErrorDescriptionEnum) {
    Prfnd504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Prfnd504ApplicationJsonErrorDescriptionEnum || (Prfnd504ApplicationJsonErrorDescriptionEnum = {}));
var Prfnd504ApplicationJson = /** @class */ (function (_super) {
    __extends(Prfnd504ApplicationJson, _super);
    function Prfnd504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Prfnd504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Prfnd504ApplicationJson.prototype, "errorDescription", void 0);
    return Prfnd504ApplicationJson;
}(SpeakeasyBase));
export { Prfnd504ApplicationJson };
var PrfndRequest = /** @class */ (function (_super) {
    __extends(PrfndRequest, _super);
    function PrfndRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PrfndRequestBody)
    ], PrfndRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrfndSecurity)
    ], PrfndRequest.prototype, "security", void 0);
    return PrfndRequest;
}(SpeakeasyBase));
export { PrfndRequest };
var PrfndResponse = /** @class */ (function (_super) {
    __extends(PrfndResponse, _super);
    function PrfndResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PrfndResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PrfndResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Prfnd400ApplicationJson)
    ], PrfndResponse.prototype, "prfnd400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Prfnd401ApplicationJson)
    ], PrfndResponse.prototype, "prfnd401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Prfnd404ApplicationJson)
    ], PrfndResponse.prototype, "prfnd404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Prfnd500ApplicationJson)
    ], PrfndResponse.prototype, "prfnd500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Prfnd502ApplicationJson)
    ], PrfndResponse.prototype, "prfnd502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Prfnd503ApplicationJson)
    ], PrfndResponse.prototype, "prfnd503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Prfnd504ApplicationJson)
    ], PrfndResponse.prototype, "prfnd504ApplicationJsonObject", void 0);
    return PrfndResponse;
}(SpeakeasyBase));
export { PrfndResponse };
