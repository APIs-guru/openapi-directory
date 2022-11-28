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
var TapcnRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(TapcnRequestBodyCertificateParameters, _super);
    function TapcnRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentNumber" }),
        __metadata("design:type", String)
    ], TapcnRequestBodyCertificateParameters.prototype, "documentNumber", void 0);
    return TapcnRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { TapcnRequestBodyCertificateParameters };
export var TapcnRequestBodyFormatEnum;
(function (TapcnRequestBodyFormatEnum) {
    TapcnRequestBodyFormatEnum["Pdf"] = "pdf";
})(TapcnRequestBodyFormatEnum || (TapcnRequestBodyFormatEnum = {}));
var TapcnRequestBody = /** @class */ (function (_super) {
    __extends(TapcnRequestBody, _super);
    function TapcnRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", TapcnRequestBodyCertificateParameters)
    ], TapcnRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], TapcnRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], TapcnRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], TapcnRequestBody.prototype, "txnId", void 0);
    return TapcnRequestBody;
}(SpeakeasyBase));
export { TapcnRequestBody };
var TapcnSecurity = /** @class */ (function (_super) {
    __extends(TapcnSecurity, _super);
    function TapcnSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], TapcnSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], TapcnSecurity.prototype, "clientId", void 0);
    return TapcnSecurity;
}(SpeakeasyBase));
export { TapcnSecurity };
export var Tapcn400ApplicationJsonErrorEnum;
(function (Tapcn400ApplicationJsonErrorEnum) {
    Tapcn400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Tapcn400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Tapcn400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Tapcn400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Tapcn400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Tapcn400ApplicationJsonErrorEnum || (Tapcn400ApplicationJsonErrorEnum = {}));
export var Tapcn400ApplicationJsonErrorDescriptionEnum;
(function (Tapcn400ApplicationJsonErrorDescriptionEnum) {
    Tapcn400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Tapcn400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Tapcn400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Tapcn400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Tapcn400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Tapcn400ApplicationJsonErrorDescriptionEnum || (Tapcn400ApplicationJsonErrorDescriptionEnum = {}));
var Tapcn400ApplicationJson = /** @class */ (function (_super) {
    __extends(Tapcn400ApplicationJson, _super);
    function Tapcn400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tapcn400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tapcn400ApplicationJson.prototype, "errorDescription", void 0);
    return Tapcn400ApplicationJson;
}(SpeakeasyBase));
export { Tapcn400ApplicationJson };
export var Tapcn401ApplicationJsonErrorEnum;
(function (Tapcn401ApplicationJsonErrorEnum) {
    Tapcn401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Tapcn401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Tapcn401ApplicationJsonErrorEnum || (Tapcn401ApplicationJsonErrorEnum = {}));
export var Tapcn401ApplicationJsonErrorDescriptionEnum;
(function (Tapcn401ApplicationJsonErrorDescriptionEnum) {
    Tapcn401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Tapcn401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Tapcn401ApplicationJsonErrorDescriptionEnum || (Tapcn401ApplicationJsonErrorDescriptionEnum = {}));
var Tapcn401ApplicationJson = /** @class */ (function (_super) {
    __extends(Tapcn401ApplicationJson, _super);
    function Tapcn401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tapcn401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tapcn401ApplicationJson.prototype, "errorDescription", void 0);
    return Tapcn401ApplicationJson;
}(SpeakeasyBase));
export { Tapcn401ApplicationJson };
export var Tapcn404ApplicationJsonErrorEnum;
(function (Tapcn404ApplicationJsonErrorEnum) {
    Tapcn404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Tapcn404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Tapcn404ApplicationJsonErrorEnum || (Tapcn404ApplicationJsonErrorEnum = {}));
export var Tapcn404ApplicationJsonErrorDescriptionEnum;
(function (Tapcn404ApplicationJsonErrorDescriptionEnum) {
    Tapcn404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Tapcn404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Tapcn404ApplicationJsonErrorDescriptionEnum || (Tapcn404ApplicationJsonErrorDescriptionEnum = {}));
var Tapcn404ApplicationJson = /** @class */ (function (_super) {
    __extends(Tapcn404ApplicationJson, _super);
    function Tapcn404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tapcn404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tapcn404ApplicationJson.prototype, "errorDescription", void 0);
    return Tapcn404ApplicationJson;
}(SpeakeasyBase));
export { Tapcn404ApplicationJson };
export var Tapcn500ApplicationJsonErrorEnum;
(function (Tapcn500ApplicationJsonErrorEnum) {
    Tapcn500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Tapcn500ApplicationJsonErrorEnum || (Tapcn500ApplicationJsonErrorEnum = {}));
export var Tapcn500ApplicationJsonErrorDescriptionEnum;
(function (Tapcn500ApplicationJsonErrorDescriptionEnum) {
    Tapcn500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Tapcn500ApplicationJsonErrorDescriptionEnum || (Tapcn500ApplicationJsonErrorDescriptionEnum = {}));
var Tapcn500ApplicationJson = /** @class */ (function (_super) {
    __extends(Tapcn500ApplicationJson, _super);
    function Tapcn500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tapcn500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tapcn500ApplicationJson.prototype, "errorDescription", void 0);
    return Tapcn500ApplicationJson;
}(SpeakeasyBase));
export { Tapcn500ApplicationJson };
export var Tapcn502ApplicationJsonErrorEnum;
(function (Tapcn502ApplicationJsonErrorEnum) {
    Tapcn502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Tapcn502ApplicationJsonErrorEnum || (Tapcn502ApplicationJsonErrorEnum = {}));
export var Tapcn502ApplicationJsonErrorDescriptionEnum;
(function (Tapcn502ApplicationJsonErrorDescriptionEnum) {
    Tapcn502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Tapcn502ApplicationJsonErrorDescriptionEnum || (Tapcn502ApplicationJsonErrorDescriptionEnum = {}));
var Tapcn502ApplicationJson = /** @class */ (function (_super) {
    __extends(Tapcn502ApplicationJson, _super);
    function Tapcn502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tapcn502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tapcn502ApplicationJson.prototype, "errorDescription", void 0);
    return Tapcn502ApplicationJson;
}(SpeakeasyBase));
export { Tapcn502ApplicationJson };
export var Tapcn503ApplicationJsonErrorEnum;
(function (Tapcn503ApplicationJsonErrorEnum) {
    Tapcn503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Tapcn503ApplicationJsonErrorEnum || (Tapcn503ApplicationJsonErrorEnum = {}));
export var Tapcn503ApplicationJsonErrorDescriptionEnum;
(function (Tapcn503ApplicationJsonErrorDescriptionEnum) {
    Tapcn503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Tapcn503ApplicationJsonErrorDescriptionEnum || (Tapcn503ApplicationJsonErrorDescriptionEnum = {}));
var Tapcn503ApplicationJson = /** @class */ (function (_super) {
    __extends(Tapcn503ApplicationJson, _super);
    function Tapcn503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tapcn503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tapcn503ApplicationJson.prototype, "errorDescription", void 0);
    return Tapcn503ApplicationJson;
}(SpeakeasyBase));
export { Tapcn503ApplicationJson };
export var Tapcn504ApplicationJsonErrorEnum;
(function (Tapcn504ApplicationJsonErrorEnum) {
    Tapcn504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Tapcn504ApplicationJsonErrorEnum || (Tapcn504ApplicationJsonErrorEnum = {}));
export var Tapcn504ApplicationJsonErrorDescriptionEnum;
(function (Tapcn504ApplicationJsonErrorDescriptionEnum) {
    Tapcn504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Tapcn504ApplicationJsonErrorDescriptionEnum || (Tapcn504ApplicationJsonErrorDescriptionEnum = {}));
var Tapcn504ApplicationJson = /** @class */ (function (_super) {
    __extends(Tapcn504ApplicationJson, _super);
    function Tapcn504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tapcn504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tapcn504ApplicationJson.prototype, "errorDescription", void 0);
    return Tapcn504ApplicationJson;
}(SpeakeasyBase));
export { Tapcn504ApplicationJson };
var TapcnRequest = /** @class */ (function (_super) {
    __extends(TapcnRequest, _super);
    function TapcnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TapcnRequestBody)
    ], TapcnRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TapcnSecurity)
    ], TapcnRequest.prototype, "security", void 0);
    return TapcnRequest;
}(SpeakeasyBase));
export { TapcnRequest };
var TapcnResponse = /** @class */ (function (_super) {
    __extends(TapcnResponse, _super);
    function TapcnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TapcnResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TapcnResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Tapcn400ApplicationJson)
    ], TapcnResponse.prototype, "tapcn400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Tapcn401ApplicationJson)
    ], TapcnResponse.prototype, "tapcn401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Tapcn404ApplicationJson)
    ], TapcnResponse.prototype, "tapcn404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Tapcn500ApplicationJson)
    ], TapcnResponse.prototype, "tapcn500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Tapcn502ApplicationJson)
    ], TapcnResponse.prototype, "tapcn502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Tapcn503ApplicationJson)
    ], TapcnResponse.prototype, "tapcn503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Tapcn504ApplicationJson)
    ], TapcnResponse.prototype, "tapcn504ApplicationJsonObject", void 0);
    return TapcnResponse;
}(SpeakeasyBase));
export { TapcnResponse };
