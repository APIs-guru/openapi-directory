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
var UgdcnRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(UgdcnRequestBodyCertificateParameters, _super);
    function UgdcnRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentNumber" }),
        __metadata("design:type", String)
    ], UgdcnRequestBodyCertificateParameters.prototype, "documentNumber", void 0);
    return UgdcnRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { UgdcnRequestBodyCertificateParameters };
export var UgdcnRequestBodyFormatEnum;
(function (UgdcnRequestBodyFormatEnum) {
    UgdcnRequestBodyFormatEnum["Pdf"] = "pdf";
})(UgdcnRequestBodyFormatEnum || (UgdcnRequestBodyFormatEnum = {}));
var UgdcnRequestBody = /** @class */ (function (_super) {
    __extends(UgdcnRequestBody, _super);
    function UgdcnRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", UgdcnRequestBodyCertificateParameters)
    ], UgdcnRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], UgdcnRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], UgdcnRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], UgdcnRequestBody.prototype, "txnId", void 0);
    return UgdcnRequestBody;
}(SpeakeasyBase));
export { UgdcnRequestBody };
var UgdcnSecurity = /** @class */ (function (_super) {
    __extends(UgdcnSecurity, _super);
    function UgdcnSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], UgdcnSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], UgdcnSecurity.prototype, "clientId", void 0);
    return UgdcnSecurity;
}(SpeakeasyBase));
export { UgdcnSecurity };
export var Ugdcn400ApplicationJsonErrorEnum;
(function (Ugdcn400ApplicationJsonErrorEnum) {
    Ugdcn400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Ugdcn400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Ugdcn400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Ugdcn400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Ugdcn400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Ugdcn400ApplicationJsonErrorEnum || (Ugdcn400ApplicationJsonErrorEnum = {}));
export var Ugdcn400ApplicationJsonErrorDescriptionEnum;
(function (Ugdcn400ApplicationJsonErrorDescriptionEnum) {
    Ugdcn400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Ugdcn400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Ugdcn400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Ugdcn400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Ugdcn400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Ugdcn400ApplicationJsonErrorDescriptionEnum || (Ugdcn400ApplicationJsonErrorDescriptionEnum = {}));
var Ugdcn400ApplicationJson = /** @class */ (function (_super) {
    __extends(Ugdcn400ApplicationJson, _super);
    function Ugdcn400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ugdcn400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ugdcn400ApplicationJson.prototype, "errorDescription", void 0);
    return Ugdcn400ApplicationJson;
}(SpeakeasyBase));
export { Ugdcn400ApplicationJson };
export var Ugdcn401ApplicationJsonErrorEnum;
(function (Ugdcn401ApplicationJsonErrorEnum) {
    Ugdcn401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Ugdcn401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Ugdcn401ApplicationJsonErrorEnum || (Ugdcn401ApplicationJsonErrorEnum = {}));
export var Ugdcn401ApplicationJsonErrorDescriptionEnum;
(function (Ugdcn401ApplicationJsonErrorDescriptionEnum) {
    Ugdcn401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Ugdcn401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Ugdcn401ApplicationJsonErrorDescriptionEnum || (Ugdcn401ApplicationJsonErrorDescriptionEnum = {}));
var Ugdcn401ApplicationJson = /** @class */ (function (_super) {
    __extends(Ugdcn401ApplicationJson, _super);
    function Ugdcn401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ugdcn401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ugdcn401ApplicationJson.prototype, "errorDescription", void 0);
    return Ugdcn401ApplicationJson;
}(SpeakeasyBase));
export { Ugdcn401ApplicationJson };
export var Ugdcn404ApplicationJsonErrorEnum;
(function (Ugdcn404ApplicationJsonErrorEnum) {
    Ugdcn404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Ugdcn404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Ugdcn404ApplicationJsonErrorEnum || (Ugdcn404ApplicationJsonErrorEnum = {}));
export var Ugdcn404ApplicationJsonErrorDescriptionEnum;
(function (Ugdcn404ApplicationJsonErrorDescriptionEnum) {
    Ugdcn404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Ugdcn404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Ugdcn404ApplicationJsonErrorDescriptionEnum || (Ugdcn404ApplicationJsonErrorDescriptionEnum = {}));
var Ugdcn404ApplicationJson = /** @class */ (function (_super) {
    __extends(Ugdcn404ApplicationJson, _super);
    function Ugdcn404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ugdcn404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ugdcn404ApplicationJson.prototype, "errorDescription", void 0);
    return Ugdcn404ApplicationJson;
}(SpeakeasyBase));
export { Ugdcn404ApplicationJson };
export var Ugdcn500ApplicationJsonErrorEnum;
(function (Ugdcn500ApplicationJsonErrorEnum) {
    Ugdcn500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Ugdcn500ApplicationJsonErrorEnum || (Ugdcn500ApplicationJsonErrorEnum = {}));
export var Ugdcn500ApplicationJsonErrorDescriptionEnum;
(function (Ugdcn500ApplicationJsonErrorDescriptionEnum) {
    Ugdcn500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Ugdcn500ApplicationJsonErrorDescriptionEnum || (Ugdcn500ApplicationJsonErrorDescriptionEnum = {}));
var Ugdcn500ApplicationJson = /** @class */ (function (_super) {
    __extends(Ugdcn500ApplicationJson, _super);
    function Ugdcn500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ugdcn500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ugdcn500ApplicationJson.prototype, "errorDescription", void 0);
    return Ugdcn500ApplicationJson;
}(SpeakeasyBase));
export { Ugdcn500ApplicationJson };
export var Ugdcn502ApplicationJsonErrorEnum;
(function (Ugdcn502ApplicationJsonErrorEnum) {
    Ugdcn502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Ugdcn502ApplicationJsonErrorEnum || (Ugdcn502ApplicationJsonErrorEnum = {}));
export var Ugdcn502ApplicationJsonErrorDescriptionEnum;
(function (Ugdcn502ApplicationJsonErrorDescriptionEnum) {
    Ugdcn502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Ugdcn502ApplicationJsonErrorDescriptionEnum || (Ugdcn502ApplicationJsonErrorDescriptionEnum = {}));
var Ugdcn502ApplicationJson = /** @class */ (function (_super) {
    __extends(Ugdcn502ApplicationJson, _super);
    function Ugdcn502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ugdcn502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ugdcn502ApplicationJson.prototype, "errorDescription", void 0);
    return Ugdcn502ApplicationJson;
}(SpeakeasyBase));
export { Ugdcn502ApplicationJson };
export var Ugdcn503ApplicationJsonErrorEnum;
(function (Ugdcn503ApplicationJsonErrorEnum) {
    Ugdcn503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Ugdcn503ApplicationJsonErrorEnum || (Ugdcn503ApplicationJsonErrorEnum = {}));
export var Ugdcn503ApplicationJsonErrorDescriptionEnum;
(function (Ugdcn503ApplicationJsonErrorDescriptionEnum) {
    Ugdcn503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Ugdcn503ApplicationJsonErrorDescriptionEnum || (Ugdcn503ApplicationJsonErrorDescriptionEnum = {}));
var Ugdcn503ApplicationJson = /** @class */ (function (_super) {
    __extends(Ugdcn503ApplicationJson, _super);
    function Ugdcn503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ugdcn503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ugdcn503ApplicationJson.prototype, "errorDescription", void 0);
    return Ugdcn503ApplicationJson;
}(SpeakeasyBase));
export { Ugdcn503ApplicationJson };
export var Ugdcn504ApplicationJsonErrorEnum;
(function (Ugdcn504ApplicationJsonErrorEnum) {
    Ugdcn504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Ugdcn504ApplicationJsonErrorEnum || (Ugdcn504ApplicationJsonErrorEnum = {}));
export var Ugdcn504ApplicationJsonErrorDescriptionEnum;
(function (Ugdcn504ApplicationJsonErrorDescriptionEnum) {
    Ugdcn504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Ugdcn504ApplicationJsonErrorDescriptionEnum || (Ugdcn504ApplicationJsonErrorDescriptionEnum = {}));
var Ugdcn504ApplicationJson = /** @class */ (function (_super) {
    __extends(Ugdcn504ApplicationJson, _super);
    function Ugdcn504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ugdcn504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ugdcn504ApplicationJson.prototype, "errorDescription", void 0);
    return Ugdcn504ApplicationJson;
}(SpeakeasyBase));
export { Ugdcn504ApplicationJson };
var UgdcnRequest = /** @class */ (function (_super) {
    __extends(UgdcnRequest, _super);
    function UgdcnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UgdcnRequestBody)
    ], UgdcnRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UgdcnSecurity)
    ], UgdcnRequest.prototype, "security", void 0);
    return UgdcnRequest;
}(SpeakeasyBase));
export { UgdcnRequest };
var UgdcnResponse = /** @class */ (function (_super) {
    __extends(UgdcnResponse, _super);
    function UgdcnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UgdcnResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UgdcnResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ugdcn400ApplicationJson)
    ], UgdcnResponse.prototype, "ugdcn400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ugdcn401ApplicationJson)
    ], UgdcnResponse.prototype, "ugdcn401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ugdcn404ApplicationJson)
    ], UgdcnResponse.prototype, "ugdcn404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ugdcn500ApplicationJson)
    ], UgdcnResponse.prototype, "ugdcn500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ugdcn502ApplicationJson)
    ], UgdcnResponse.prototype, "ugdcn502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ugdcn503ApplicationJson)
    ], UgdcnResponse.prototype, "ugdcn503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ugdcn504ApplicationJson)
    ], UgdcnResponse.prototype, "ugdcn504ApplicationJsonObject", void 0);
    return UgdcnResponse;
}(SpeakeasyBase));
export { UgdcnResponse };
