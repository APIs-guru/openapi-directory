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
var TetcrRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(TetcrRequestBodyCertificateParameters, _super);
    function TetcrRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], TetcrRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], TetcrRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year_month" }),
        __metadata("design:type", String)
    ], TetcrRequestBodyCertificateParameters.prototype, "yearMonth", void 0);
    return TetcrRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { TetcrRequestBodyCertificateParameters };
export var TetcrRequestBodyFormatEnum;
(function (TetcrRequestBodyFormatEnum) {
    TetcrRequestBodyFormatEnum["Pdf"] = "pdf";
})(TetcrRequestBodyFormatEnum || (TetcrRequestBodyFormatEnum = {}));
var TetcrRequestBody = /** @class */ (function (_super) {
    __extends(TetcrRequestBody, _super);
    function TetcrRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", TetcrRequestBodyCertificateParameters)
    ], TetcrRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], TetcrRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], TetcrRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], TetcrRequestBody.prototype, "txnId", void 0);
    return TetcrRequestBody;
}(SpeakeasyBase));
export { TetcrRequestBody };
var TetcrSecurity = /** @class */ (function (_super) {
    __extends(TetcrSecurity, _super);
    function TetcrSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], TetcrSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], TetcrSecurity.prototype, "clientId", void 0);
    return TetcrSecurity;
}(SpeakeasyBase));
export { TetcrSecurity };
export var Tetcr400ApplicationJsonErrorEnum;
(function (Tetcr400ApplicationJsonErrorEnum) {
    Tetcr400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Tetcr400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Tetcr400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Tetcr400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Tetcr400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Tetcr400ApplicationJsonErrorEnum || (Tetcr400ApplicationJsonErrorEnum = {}));
export var Tetcr400ApplicationJsonErrorDescriptionEnum;
(function (Tetcr400ApplicationJsonErrorDescriptionEnum) {
    Tetcr400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Tetcr400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Tetcr400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Tetcr400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Tetcr400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Tetcr400ApplicationJsonErrorDescriptionEnum || (Tetcr400ApplicationJsonErrorDescriptionEnum = {}));
var Tetcr400ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetcr400ApplicationJson, _super);
    function Tetcr400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetcr400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetcr400ApplicationJson.prototype, "errorDescription", void 0);
    return Tetcr400ApplicationJson;
}(SpeakeasyBase));
export { Tetcr400ApplicationJson };
export var Tetcr401ApplicationJsonErrorEnum;
(function (Tetcr401ApplicationJsonErrorEnum) {
    Tetcr401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Tetcr401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Tetcr401ApplicationJsonErrorEnum || (Tetcr401ApplicationJsonErrorEnum = {}));
export var Tetcr401ApplicationJsonErrorDescriptionEnum;
(function (Tetcr401ApplicationJsonErrorDescriptionEnum) {
    Tetcr401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Tetcr401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Tetcr401ApplicationJsonErrorDescriptionEnum || (Tetcr401ApplicationJsonErrorDescriptionEnum = {}));
var Tetcr401ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetcr401ApplicationJson, _super);
    function Tetcr401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetcr401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetcr401ApplicationJson.prototype, "errorDescription", void 0);
    return Tetcr401ApplicationJson;
}(SpeakeasyBase));
export { Tetcr401ApplicationJson };
export var Tetcr404ApplicationJsonErrorEnum;
(function (Tetcr404ApplicationJsonErrorEnum) {
    Tetcr404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Tetcr404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Tetcr404ApplicationJsonErrorEnum || (Tetcr404ApplicationJsonErrorEnum = {}));
export var Tetcr404ApplicationJsonErrorDescriptionEnum;
(function (Tetcr404ApplicationJsonErrorDescriptionEnum) {
    Tetcr404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Tetcr404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Tetcr404ApplicationJsonErrorDescriptionEnum || (Tetcr404ApplicationJsonErrorDescriptionEnum = {}));
var Tetcr404ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetcr404ApplicationJson, _super);
    function Tetcr404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetcr404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetcr404ApplicationJson.prototype, "errorDescription", void 0);
    return Tetcr404ApplicationJson;
}(SpeakeasyBase));
export { Tetcr404ApplicationJson };
export var Tetcr500ApplicationJsonErrorEnum;
(function (Tetcr500ApplicationJsonErrorEnum) {
    Tetcr500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Tetcr500ApplicationJsonErrorEnum || (Tetcr500ApplicationJsonErrorEnum = {}));
export var Tetcr500ApplicationJsonErrorDescriptionEnum;
(function (Tetcr500ApplicationJsonErrorDescriptionEnum) {
    Tetcr500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Tetcr500ApplicationJsonErrorDescriptionEnum || (Tetcr500ApplicationJsonErrorDescriptionEnum = {}));
var Tetcr500ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetcr500ApplicationJson, _super);
    function Tetcr500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetcr500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetcr500ApplicationJson.prototype, "errorDescription", void 0);
    return Tetcr500ApplicationJson;
}(SpeakeasyBase));
export { Tetcr500ApplicationJson };
export var Tetcr502ApplicationJsonErrorEnum;
(function (Tetcr502ApplicationJsonErrorEnum) {
    Tetcr502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Tetcr502ApplicationJsonErrorEnum || (Tetcr502ApplicationJsonErrorEnum = {}));
export var Tetcr502ApplicationJsonErrorDescriptionEnum;
(function (Tetcr502ApplicationJsonErrorDescriptionEnum) {
    Tetcr502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Tetcr502ApplicationJsonErrorDescriptionEnum || (Tetcr502ApplicationJsonErrorDescriptionEnum = {}));
var Tetcr502ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetcr502ApplicationJson, _super);
    function Tetcr502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetcr502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetcr502ApplicationJson.prototype, "errorDescription", void 0);
    return Tetcr502ApplicationJson;
}(SpeakeasyBase));
export { Tetcr502ApplicationJson };
export var Tetcr503ApplicationJsonErrorEnum;
(function (Tetcr503ApplicationJsonErrorEnum) {
    Tetcr503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Tetcr503ApplicationJsonErrorEnum || (Tetcr503ApplicationJsonErrorEnum = {}));
export var Tetcr503ApplicationJsonErrorDescriptionEnum;
(function (Tetcr503ApplicationJsonErrorDescriptionEnum) {
    Tetcr503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Tetcr503ApplicationJsonErrorDescriptionEnum || (Tetcr503ApplicationJsonErrorDescriptionEnum = {}));
var Tetcr503ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetcr503ApplicationJson, _super);
    function Tetcr503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetcr503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetcr503ApplicationJson.prototype, "errorDescription", void 0);
    return Tetcr503ApplicationJson;
}(SpeakeasyBase));
export { Tetcr503ApplicationJson };
export var Tetcr504ApplicationJsonErrorEnum;
(function (Tetcr504ApplicationJsonErrorEnum) {
    Tetcr504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Tetcr504ApplicationJsonErrorEnum || (Tetcr504ApplicationJsonErrorEnum = {}));
export var Tetcr504ApplicationJsonErrorDescriptionEnum;
(function (Tetcr504ApplicationJsonErrorDescriptionEnum) {
    Tetcr504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Tetcr504ApplicationJsonErrorDescriptionEnum || (Tetcr504ApplicationJsonErrorDescriptionEnum = {}));
var Tetcr504ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetcr504ApplicationJson, _super);
    function Tetcr504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetcr504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetcr504ApplicationJson.prototype, "errorDescription", void 0);
    return Tetcr504ApplicationJson;
}(SpeakeasyBase));
export { Tetcr504ApplicationJson };
var TetcrRequest = /** @class */ (function (_super) {
    __extends(TetcrRequest, _super);
    function TetcrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TetcrRequestBody)
    ], TetcrRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TetcrSecurity)
    ], TetcrRequest.prototype, "security", void 0);
    return TetcrRequest;
}(SpeakeasyBase));
export { TetcrRequest };
var TetcrResponse = /** @class */ (function (_super) {
    __extends(TetcrResponse, _super);
    function TetcrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TetcrResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TetcrResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Tetcr400ApplicationJson)
    ], TetcrResponse.prototype, "tetcr400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Tetcr401ApplicationJson)
    ], TetcrResponse.prototype, "tetcr401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Tetcr404ApplicationJson)
    ], TetcrResponse.prototype, "tetcr404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Tetcr500ApplicationJson)
    ], TetcrResponse.prototype, "tetcr500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Tetcr502ApplicationJson)
    ], TetcrResponse.prototype, "tetcr502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Tetcr503ApplicationJson)
    ], TetcrResponse.prototype, "tetcr503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Tetcr504ApplicationJson)
    ], TetcrResponse.prototype, "tetcr504ApplicationJsonObject", void 0);
    return TetcrResponse;
}(SpeakeasyBase));
export { TetcrResponse };
