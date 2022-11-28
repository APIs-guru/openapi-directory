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
var MnrgaRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(MnrgaRequestBodyCertificateParameters, _super);
    function MnrgaRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], MnrgaRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return MnrgaRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { MnrgaRequestBodyCertificateParameters };
export var MnrgaRequestBodyFormatEnum;
(function (MnrgaRequestBodyFormatEnum) {
    MnrgaRequestBodyFormatEnum["Pdf"] = "pdf";
})(MnrgaRequestBodyFormatEnum || (MnrgaRequestBodyFormatEnum = {}));
var MnrgaRequestBody = /** @class */ (function (_super) {
    __extends(MnrgaRequestBody, _super);
    function MnrgaRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", MnrgaRequestBodyCertificateParameters)
    ], MnrgaRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], MnrgaRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], MnrgaRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], MnrgaRequestBody.prototype, "txnId", void 0);
    return MnrgaRequestBody;
}(SpeakeasyBase));
export { MnrgaRequestBody };
var MnrgaSecurity = /** @class */ (function (_super) {
    __extends(MnrgaSecurity, _super);
    function MnrgaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MnrgaSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], MnrgaSecurity.prototype, "clientId", void 0);
    return MnrgaSecurity;
}(SpeakeasyBase));
export { MnrgaSecurity };
export var Mnrga400ApplicationJsonErrorEnum;
(function (Mnrga400ApplicationJsonErrorEnum) {
    Mnrga400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Mnrga400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Mnrga400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Mnrga400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Mnrga400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Mnrga400ApplicationJsonErrorEnum || (Mnrga400ApplicationJsonErrorEnum = {}));
export var Mnrga400ApplicationJsonErrorDescriptionEnum;
(function (Mnrga400ApplicationJsonErrorDescriptionEnum) {
    Mnrga400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Mnrga400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Mnrga400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Mnrga400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Mnrga400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Mnrga400ApplicationJsonErrorDescriptionEnum || (Mnrga400ApplicationJsonErrorDescriptionEnum = {}));
var Mnrga400ApplicationJson = /** @class */ (function (_super) {
    __extends(Mnrga400ApplicationJson, _super);
    function Mnrga400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mnrga400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mnrga400ApplicationJson.prototype, "errorDescription", void 0);
    return Mnrga400ApplicationJson;
}(SpeakeasyBase));
export { Mnrga400ApplicationJson };
export var Mnrga401ApplicationJsonErrorEnum;
(function (Mnrga401ApplicationJsonErrorEnum) {
    Mnrga401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Mnrga401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Mnrga401ApplicationJsonErrorEnum || (Mnrga401ApplicationJsonErrorEnum = {}));
export var Mnrga401ApplicationJsonErrorDescriptionEnum;
(function (Mnrga401ApplicationJsonErrorDescriptionEnum) {
    Mnrga401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Mnrga401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Mnrga401ApplicationJsonErrorDescriptionEnum || (Mnrga401ApplicationJsonErrorDescriptionEnum = {}));
var Mnrga401ApplicationJson = /** @class */ (function (_super) {
    __extends(Mnrga401ApplicationJson, _super);
    function Mnrga401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mnrga401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mnrga401ApplicationJson.prototype, "errorDescription", void 0);
    return Mnrga401ApplicationJson;
}(SpeakeasyBase));
export { Mnrga401ApplicationJson };
export var Mnrga404ApplicationJsonErrorEnum;
(function (Mnrga404ApplicationJsonErrorEnum) {
    Mnrga404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Mnrga404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Mnrga404ApplicationJsonErrorEnum || (Mnrga404ApplicationJsonErrorEnum = {}));
export var Mnrga404ApplicationJsonErrorDescriptionEnum;
(function (Mnrga404ApplicationJsonErrorDescriptionEnum) {
    Mnrga404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Mnrga404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Mnrga404ApplicationJsonErrorDescriptionEnum || (Mnrga404ApplicationJsonErrorDescriptionEnum = {}));
var Mnrga404ApplicationJson = /** @class */ (function (_super) {
    __extends(Mnrga404ApplicationJson, _super);
    function Mnrga404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mnrga404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mnrga404ApplicationJson.prototype, "errorDescription", void 0);
    return Mnrga404ApplicationJson;
}(SpeakeasyBase));
export { Mnrga404ApplicationJson };
export var Mnrga500ApplicationJsonErrorEnum;
(function (Mnrga500ApplicationJsonErrorEnum) {
    Mnrga500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Mnrga500ApplicationJsonErrorEnum || (Mnrga500ApplicationJsonErrorEnum = {}));
export var Mnrga500ApplicationJsonErrorDescriptionEnum;
(function (Mnrga500ApplicationJsonErrorDescriptionEnum) {
    Mnrga500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Mnrga500ApplicationJsonErrorDescriptionEnum || (Mnrga500ApplicationJsonErrorDescriptionEnum = {}));
var Mnrga500ApplicationJson = /** @class */ (function (_super) {
    __extends(Mnrga500ApplicationJson, _super);
    function Mnrga500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mnrga500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mnrga500ApplicationJson.prototype, "errorDescription", void 0);
    return Mnrga500ApplicationJson;
}(SpeakeasyBase));
export { Mnrga500ApplicationJson };
export var Mnrga502ApplicationJsonErrorEnum;
(function (Mnrga502ApplicationJsonErrorEnum) {
    Mnrga502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Mnrga502ApplicationJsonErrorEnum || (Mnrga502ApplicationJsonErrorEnum = {}));
export var Mnrga502ApplicationJsonErrorDescriptionEnum;
(function (Mnrga502ApplicationJsonErrorDescriptionEnum) {
    Mnrga502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Mnrga502ApplicationJsonErrorDescriptionEnum || (Mnrga502ApplicationJsonErrorDescriptionEnum = {}));
var Mnrga502ApplicationJson = /** @class */ (function (_super) {
    __extends(Mnrga502ApplicationJson, _super);
    function Mnrga502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mnrga502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mnrga502ApplicationJson.prototype, "errorDescription", void 0);
    return Mnrga502ApplicationJson;
}(SpeakeasyBase));
export { Mnrga502ApplicationJson };
export var Mnrga503ApplicationJsonErrorEnum;
(function (Mnrga503ApplicationJsonErrorEnum) {
    Mnrga503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Mnrga503ApplicationJsonErrorEnum || (Mnrga503ApplicationJsonErrorEnum = {}));
export var Mnrga503ApplicationJsonErrorDescriptionEnum;
(function (Mnrga503ApplicationJsonErrorDescriptionEnum) {
    Mnrga503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Mnrga503ApplicationJsonErrorDescriptionEnum || (Mnrga503ApplicationJsonErrorDescriptionEnum = {}));
var Mnrga503ApplicationJson = /** @class */ (function (_super) {
    __extends(Mnrga503ApplicationJson, _super);
    function Mnrga503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mnrga503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mnrga503ApplicationJson.prototype, "errorDescription", void 0);
    return Mnrga503ApplicationJson;
}(SpeakeasyBase));
export { Mnrga503ApplicationJson };
export var Mnrga504ApplicationJsonErrorEnum;
(function (Mnrga504ApplicationJsonErrorEnum) {
    Mnrga504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Mnrga504ApplicationJsonErrorEnum || (Mnrga504ApplicationJsonErrorEnum = {}));
export var Mnrga504ApplicationJsonErrorDescriptionEnum;
(function (Mnrga504ApplicationJsonErrorDescriptionEnum) {
    Mnrga504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Mnrga504ApplicationJsonErrorDescriptionEnum || (Mnrga504ApplicationJsonErrorDescriptionEnum = {}));
var Mnrga504ApplicationJson = /** @class */ (function (_super) {
    __extends(Mnrga504ApplicationJson, _super);
    function Mnrga504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mnrga504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mnrga504ApplicationJson.prototype, "errorDescription", void 0);
    return Mnrga504ApplicationJson;
}(SpeakeasyBase));
export { Mnrga504ApplicationJson };
var MnrgaRequest = /** @class */ (function (_super) {
    __extends(MnrgaRequest, _super);
    function MnrgaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", MnrgaRequestBody)
    ], MnrgaRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MnrgaSecurity)
    ], MnrgaRequest.prototype, "security", void 0);
    return MnrgaRequest;
}(SpeakeasyBase));
export { MnrgaRequest };
var MnrgaResponse = /** @class */ (function (_super) {
    __extends(MnrgaResponse, _super);
    function MnrgaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MnrgaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MnrgaResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Mnrga400ApplicationJson)
    ], MnrgaResponse.prototype, "mnrga400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Mnrga401ApplicationJson)
    ], MnrgaResponse.prototype, "mnrga401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Mnrga404ApplicationJson)
    ], MnrgaResponse.prototype, "mnrga404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Mnrga500ApplicationJson)
    ], MnrgaResponse.prototype, "mnrga500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Mnrga502ApplicationJson)
    ], MnrgaResponse.prototype, "mnrga502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Mnrga503ApplicationJson)
    ], MnrgaResponse.prototype, "mnrga503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Mnrga504ApplicationJson)
    ], MnrgaResponse.prototype, "mnrga504ApplicationJsonObject", void 0);
    return MnrgaResponse;
}(SpeakeasyBase));
export { MnrgaResponse };
