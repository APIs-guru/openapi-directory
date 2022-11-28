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
var IlpmtRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(IlpmtRequestBodyCertificateParameters, _super);
    function IlpmtRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], IlpmtRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], IlpmtRequestBodyCertificateParameters.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eILPAppId" }),
        __metadata("design:type", String)
    ], IlpmtRequestBodyCertificateParameters.prototype, "eIlpAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eILPContactNumber" }),
        __metadata("design:type", String)
    ], IlpmtRequestBodyCertificateParameters.prototype, "eIlpContactNumber", void 0);
    return IlpmtRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { IlpmtRequestBodyCertificateParameters };
export var IlpmtRequestBodyFormatEnum;
(function (IlpmtRequestBodyFormatEnum) {
    IlpmtRequestBodyFormatEnum["Pdf"] = "pdf";
})(IlpmtRequestBodyFormatEnum || (IlpmtRequestBodyFormatEnum = {}));
var IlpmtRequestBody = /** @class */ (function (_super) {
    __extends(IlpmtRequestBody, _super);
    function IlpmtRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", IlpmtRequestBodyCertificateParameters)
    ], IlpmtRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], IlpmtRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], IlpmtRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], IlpmtRequestBody.prototype, "txnId", void 0);
    return IlpmtRequestBody;
}(SpeakeasyBase));
export { IlpmtRequestBody };
var IlpmtSecurity = /** @class */ (function (_super) {
    __extends(IlpmtSecurity, _super);
    function IlpmtSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], IlpmtSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], IlpmtSecurity.prototype, "clientId", void 0);
    return IlpmtSecurity;
}(SpeakeasyBase));
export { IlpmtSecurity };
export var Ilpmt400ApplicationJsonErrorEnum;
(function (Ilpmt400ApplicationJsonErrorEnum) {
    Ilpmt400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Ilpmt400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Ilpmt400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Ilpmt400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Ilpmt400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Ilpmt400ApplicationJsonErrorEnum || (Ilpmt400ApplicationJsonErrorEnum = {}));
export var Ilpmt400ApplicationJsonErrorDescriptionEnum;
(function (Ilpmt400ApplicationJsonErrorDescriptionEnum) {
    Ilpmt400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Ilpmt400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Ilpmt400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Ilpmt400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Ilpmt400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Ilpmt400ApplicationJsonErrorDescriptionEnum || (Ilpmt400ApplicationJsonErrorDescriptionEnum = {}));
var Ilpmt400ApplicationJson = /** @class */ (function (_super) {
    __extends(Ilpmt400ApplicationJson, _super);
    function Ilpmt400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ilpmt400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ilpmt400ApplicationJson.prototype, "errorDescription", void 0);
    return Ilpmt400ApplicationJson;
}(SpeakeasyBase));
export { Ilpmt400ApplicationJson };
export var Ilpmt401ApplicationJsonErrorEnum;
(function (Ilpmt401ApplicationJsonErrorEnum) {
    Ilpmt401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Ilpmt401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Ilpmt401ApplicationJsonErrorEnum || (Ilpmt401ApplicationJsonErrorEnum = {}));
export var Ilpmt401ApplicationJsonErrorDescriptionEnum;
(function (Ilpmt401ApplicationJsonErrorDescriptionEnum) {
    Ilpmt401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Ilpmt401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Ilpmt401ApplicationJsonErrorDescriptionEnum || (Ilpmt401ApplicationJsonErrorDescriptionEnum = {}));
var Ilpmt401ApplicationJson = /** @class */ (function (_super) {
    __extends(Ilpmt401ApplicationJson, _super);
    function Ilpmt401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ilpmt401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ilpmt401ApplicationJson.prototype, "errorDescription", void 0);
    return Ilpmt401ApplicationJson;
}(SpeakeasyBase));
export { Ilpmt401ApplicationJson };
export var Ilpmt404ApplicationJsonErrorEnum;
(function (Ilpmt404ApplicationJsonErrorEnum) {
    Ilpmt404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Ilpmt404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Ilpmt404ApplicationJsonErrorEnum || (Ilpmt404ApplicationJsonErrorEnum = {}));
export var Ilpmt404ApplicationJsonErrorDescriptionEnum;
(function (Ilpmt404ApplicationJsonErrorDescriptionEnum) {
    Ilpmt404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Ilpmt404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Ilpmt404ApplicationJsonErrorDescriptionEnum || (Ilpmt404ApplicationJsonErrorDescriptionEnum = {}));
var Ilpmt404ApplicationJson = /** @class */ (function (_super) {
    __extends(Ilpmt404ApplicationJson, _super);
    function Ilpmt404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ilpmt404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ilpmt404ApplicationJson.prototype, "errorDescription", void 0);
    return Ilpmt404ApplicationJson;
}(SpeakeasyBase));
export { Ilpmt404ApplicationJson };
export var Ilpmt500ApplicationJsonErrorEnum;
(function (Ilpmt500ApplicationJsonErrorEnum) {
    Ilpmt500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Ilpmt500ApplicationJsonErrorEnum || (Ilpmt500ApplicationJsonErrorEnum = {}));
export var Ilpmt500ApplicationJsonErrorDescriptionEnum;
(function (Ilpmt500ApplicationJsonErrorDescriptionEnum) {
    Ilpmt500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Ilpmt500ApplicationJsonErrorDescriptionEnum || (Ilpmt500ApplicationJsonErrorDescriptionEnum = {}));
var Ilpmt500ApplicationJson = /** @class */ (function (_super) {
    __extends(Ilpmt500ApplicationJson, _super);
    function Ilpmt500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ilpmt500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ilpmt500ApplicationJson.prototype, "errorDescription", void 0);
    return Ilpmt500ApplicationJson;
}(SpeakeasyBase));
export { Ilpmt500ApplicationJson };
export var Ilpmt502ApplicationJsonErrorEnum;
(function (Ilpmt502ApplicationJsonErrorEnum) {
    Ilpmt502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Ilpmt502ApplicationJsonErrorEnum || (Ilpmt502ApplicationJsonErrorEnum = {}));
export var Ilpmt502ApplicationJsonErrorDescriptionEnum;
(function (Ilpmt502ApplicationJsonErrorDescriptionEnum) {
    Ilpmt502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Ilpmt502ApplicationJsonErrorDescriptionEnum || (Ilpmt502ApplicationJsonErrorDescriptionEnum = {}));
var Ilpmt502ApplicationJson = /** @class */ (function (_super) {
    __extends(Ilpmt502ApplicationJson, _super);
    function Ilpmt502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ilpmt502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ilpmt502ApplicationJson.prototype, "errorDescription", void 0);
    return Ilpmt502ApplicationJson;
}(SpeakeasyBase));
export { Ilpmt502ApplicationJson };
export var Ilpmt503ApplicationJsonErrorEnum;
(function (Ilpmt503ApplicationJsonErrorEnum) {
    Ilpmt503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Ilpmt503ApplicationJsonErrorEnum || (Ilpmt503ApplicationJsonErrorEnum = {}));
export var Ilpmt503ApplicationJsonErrorDescriptionEnum;
(function (Ilpmt503ApplicationJsonErrorDescriptionEnum) {
    Ilpmt503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Ilpmt503ApplicationJsonErrorDescriptionEnum || (Ilpmt503ApplicationJsonErrorDescriptionEnum = {}));
var Ilpmt503ApplicationJson = /** @class */ (function (_super) {
    __extends(Ilpmt503ApplicationJson, _super);
    function Ilpmt503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ilpmt503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ilpmt503ApplicationJson.prototype, "errorDescription", void 0);
    return Ilpmt503ApplicationJson;
}(SpeakeasyBase));
export { Ilpmt503ApplicationJson };
export var Ilpmt504ApplicationJsonErrorEnum;
(function (Ilpmt504ApplicationJsonErrorEnum) {
    Ilpmt504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Ilpmt504ApplicationJsonErrorEnum || (Ilpmt504ApplicationJsonErrorEnum = {}));
export var Ilpmt504ApplicationJsonErrorDescriptionEnum;
(function (Ilpmt504ApplicationJsonErrorDescriptionEnum) {
    Ilpmt504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Ilpmt504ApplicationJsonErrorDescriptionEnum || (Ilpmt504ApplicationJsonErrorDescriptionEnum = {}));
var Ilpmt504ApplicationJson = /** @class */ (function (_super) {
    __extends(Ilpmt504ApplicationJson, _super);
    function Ilpmt504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ilpmt504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ilpmt504ApplicationJson.prototype, "errorDescription", void 0);
    return Ilpmt504ApplicationJson;
}(SpeakeasyBase));
export { Ilpmt504ApplicationJson };
var IlpmtRequest = /** @class */ (function (_super) {
    __extends(IlpmtRequest, _super);
    function IlpmtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", IlpmtRequestBody)
    ], IlpmtRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IlpmtSecurity)
    ], IlpmtRequest.prototype, "security", void 0);
    return IlpmtRequest;
}(SpeakeasyBase));
export { IlpmtRequest };
var IlpmtResponse = /** @class */ (function (_super) {
    __extends(IlpmtResponse, _super);
    function IlpmtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IlpmtResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IlpmtResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ilpmt400ApplicationJson)
    ], IlpmtResponse.prototype, "ilpmt400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ilpmt401ApplicationJson)
    ], IlpmtResponse.prototype, "ilpmt401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ilpmt404ApplicationJson)
    ], IlpmtResponse.prototype, "ilpmt404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ilpmt500ApplicationJson)
    ], IlpmtResponse.prototype, "ilpmt500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ilpmt502ApplicationJson)
    ], IlpmtResponse.prototype, "ilpmt502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ilpmt503ApplicationJson)
    ], IlpmtResponse.prototype, "ilpmt503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Ilpmt504ApplicationJson)
    ], IlpmtResponse.prototype, "ilpmt504ApplicationJsonObject", void 0);
    return IlpmtResponse;
}(SpeakeasyBase));
export { IlpmtResponse };
