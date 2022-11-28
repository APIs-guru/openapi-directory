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
var BpcrdRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(BpcrdRequestBodyCertificateParameters, _super);
    function BpcrdRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], BpcrdRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return BpcrdRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { BpcrdRequestBodyCertificateParameters };
export var BpcrdRequestBodyFormatEnum;
(function (BpcrdRequestBodyFormatEnum) {
    BpcrdRequestBodyFormatEnum["Pdf"] = "pdf";
})(BpcrdRequestBodyFormatEnum || (BpcrdRequestBodyFormatEnum = {}));
var BpcrdRequestBody = /** @class */ (function (_super) {
    __extends(BpcrdRequestBody, _super);
    function BpcrdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", BpcrdRequestBodyCertificateParameters)
    ], BpcrdRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], BpcrdRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], BpcrdRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], BpcrdRequestBody.prototype, "txnId", void 0);
    return BpcrdRequestBody;
}(SpeakeasyBase));
export { BpcrdRequestBody };
var BpcrdSecurity = /** @class */ (function (_super) {
    __extends(BpcrdSecurity, _super);
    function BpcrdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], BpcrdSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], BpcrdSecurity.prototype, "clientId", void 0);
    return BpcrdSecurity;
}(SpeakeasyBase));
export { BpcrdSecurity };
export var Bpcrd400ApplicationJsonErrorEnum;
(function (Bpcrd400ApplicationJsonErrorEnum) {
    Bpcrd400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Bpcrd400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Bpcrd400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Bpcrd400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Bpcrd400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Bpcrd400ApplicationJsonErrorEnum || (Bpcrd400ApplicationJsonErrorEnum = {}));
export var Bpcrd400ApplicationJsonErrorDescriptionEnum;
(function (Bpcrd400ApplicationJsonErrorDescriptionEnum) {
    Bpcrd400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Bpcrd400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Bpcrd400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Bpcrd400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Bpcrd400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Bpcrd400ApplicationJsonErrorDescriptionEnum || (Bpcrd400ApplicationJsonErrorDescriptionEnum = {}));
var Bpcrd400ApplicationJson = /** @class */ (function (_super) {
    __extends(Bpcrd400ApplicationJson, _super);
    function Bpcrd400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bpcrd400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bpcrd400ApplicationJson.prototype, "errorDescription", void 0);
    return Bpcrd400ApplicationJson;
}(SpeakeasyBase));
export { Bpcrd400ApplicationJson };
export var Bpcrd401ApplicationJsonErrorEnum;
(function (Bpcrd401ApplicationJsonErrorEnum) {
    Bpcrd401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Bpcrd401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Bpcrd401ApplicationJsonErrorEnum || (Bpcrd401ApplicationJsonErrorEnum = {}));
export var Bpcrd401ApplicationJsonErrorDescriptionEnum;
(function (Bpcrd401ApplicationJsonErrorDescriptionEnum) {
    Bpcrd401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Bpcrd401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Bpcrd401ApplicationJsonErrorDescriptionEnum || (Bpcrd401ApplicationJsonErrorDescriptionEnum = {}));
var Bpcrd401ApplicationJson = /** @class */ (function (_super) {
    __extends(Bpcrd401ApplicationJson, _super);
    function Bpcrd401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bpcrd401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bpcrd401ApplicationJson.prototype, "errorDescription", void 0);
    return Bpcrd401ApplicationJson;
}(SpeakeasyBase));
export { Bpcrd401ApplicationJson };
export var Bpcrd404ApplicationJsonErrorEnum;
(function (Bpcrd404ApplicationJsonErrorEnum) {
    Bpcrd404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Bpcrd404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Bpcrd404ApplicationJsonErrorEnum || (Bpcrd404ApplicationJsonErrorEnum = {}));
export var Bpcrd404ApplicationJsonErrorDescriptionEnum;
(function (Bpcrd404ApplicationJsonErrorDescriptionEnum) {
    Bpcrd404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Bpcrd404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Bpcrd404ApplicationJsonErrorDescriptionEnum || (Bpcrd404ApplicationJsonErrorDescriptionEnum = {}));
var Bpcrd404ApplicationJson = /** @class */ (function (_super) {
    __extends(Bpcrd404ApplicationJson, _super);
    function Bpcrd404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bpcrd404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bpcrd404ApplicationJson.prototype, "errorDescription", void 0);
    return Bpcrd404ApplicationJson;
}(SpeakeasyBase));
export { Bpcrd404ApplicationJson };
export var Bpcrd500ApplicationJsonErrorEnum;
(function (Bpcrd500ApplicationJsonErrorEnum) {
    Bpcrd500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Bpcrd500ApplicationJsonErrorEnum || (Bpcrd500ApplicationJsonErrorEnum = {}));
export var Bpcrd500ApplicationJsonErrorDescriptionEnum;
(function (Bpcrd500ApplicationJsonErrorDescriptionEnum) {
    Bpcrd500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Bpcrd500ApplicationJsonErrorDescriptionEnum || (Bpcrd500ApplicationJsonErrorDescriptionEnum = {}));
var Bpcrd500ApplicationJson = /** @class */ (function (_super) {
    __extends(Bpcrd500ApplicationJson, _super);
    function Bpcrd500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bpcrd500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bpcrd500ApplicationJson.prototype, "errorDescription", void 0);
    return Bpcrd500ApplicationJson;
}(SpeakeasyBase));
export { Bpcrd500ApplicationJson };
export var Bpcrd502ApplicationJsonErrorEnum;
(function (Bpcrd502ApplicationJsonErrorEnum) {
    Bpcrd502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Bpcrd502ApplicationJsonErrorEnum || (Bpcrd502ApplicationJsonErrorEnum = {}));
export var Bpcrd502ApplicationJsonErrorDescriptionEnum;
(function (Bpcrd502ApplicationJsonErrorDescriptionEnum) {
    Bpcrd502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Bpcrd502ApplicationJsonErrorDescriptionEnum || (Bpcrd502ApplicationJsonErrorDescriptionEnum = {}));
var Bpcrd502ApplicationJson = /** @class */ (function (_super) {
    __extends(Bpcrd502ApplicationJson, _super);
    function Bpcrd502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bpcrd502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bpcrd502ApplicationJson.prototype, "errorDescription", void 0);
    return Bpcrd502ApplicationJson;
}(SpeakeasyBase));
export { Bpcrd502ApplicationJson };
export var Bpcrd503ApplicationJsonErrorEnum;
(function (Bpcrd503ApplicationJsonErrorEnum) {
    Bpcrd503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Bpcrd503ApplicationJsonErrorEnum || (Bpcrd503ApplicationJsonErrorEnum = {}));
export var Bpcrd503ApplicationJsonErrorDescriptionEnum;
(function (Bpcrd503ApplicationJsonErrorDescriptionEnum) {
    Bpcrd503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Bpcrd503ApplicationJsonErrorDescriptionEnum || (Bpcrd503ApplicationJsonErrorDescriptionEnum = {}));
var Bpcrd503ApplicationJson = /** @class */ (function (_super) {
    __extends(Bpcrd503ApplicationJson, _super);
    function Bpcrd503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bpcrd503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bpcrd503ApplicationJson.prototype, "errorDescription", void 0);
    return Bpcrd503ApplicationJson;
}(SpeakeasyBase));
export { Bpcrd503ApplicationJson };
export var Bpcrd504ApplicationJsonErrorEnum;
(function (Bpcrd504ApplicationJsonErrorEnum) {
    Bpcrd504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Bpcrd504ApplicationJsonErrorEnum || (Bpcrd504ApplicationJsonErrorEnum = {}));
export var Bpcrd504ApplicationJsonErrorDescriptionEnum;
(function (Bpcrd504ApplicationJsonErrorDescriptionEnum) {
    Bpcrd504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Bpcrd504ApplicationJsonErrorDescriptionEnum || (Bpcrd504ApplicationJsonErrorDescriptionEnum = {}));
var Bpcrd504ApplicationJson = /** @class */ (function (_super) {
    __extends(Bpcrd504ApplicationJson, _super);
    function Bpcrd504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bpcrd504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bpcrd504ApplicationJson.prototype, "errorDescription", void 0);
    return Bpcrd504ApplicationJson;
}(SpeakeasyBase));
export { Bpcrd504ApplicationJson };
var BpcrdRequest = /** @class */ (function (_super) {
    __extends(BpcrdRequest, _super);
    function BpcrdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BpcrdRequestBody)
    ], BpcrdRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BpcrdSecurity)
    ], BpcrdRequest.prototype, "security", void 0);
    return BpcrdRequest;
}(SpeakeasyBase));
export { BpcrdRequest };
var BpcrdResponse = /** @class */ (function (_super) {
    __extends(BpcrdResponse, _super);
    function BpcrdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BpcrdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BpcrdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Bpcrd400ApplicationJson)
    ], BpcrdResponse.prototype, "bpcrd400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Bpcrd401ApplicationJson)
    ], BpcrdResponse.prototype, "bpcrd401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Bpcrd404ApplicationJson)
    ], BpcrdResponse.prototype, "bpcrd404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Bpcrd500ApplicationJson)
    ], BpcrdResponse.prototype, "bpcrd500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Bpcrd502ApplicationJson)
    ], BpcrdResponse.prototype, "bpcrd502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Bpcrd503ApplicationJson)
    ], BpcrdResponse.prototype, "bpcrd503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Bpcrd504ApplicationJson)
    ], BpcrdResponse.prototype, "bpcrd504ApplicationJsonObject", void 0);
    return BpcrdResponse;
}(SpeakeasyBase));
export { BpcrdResponse };
