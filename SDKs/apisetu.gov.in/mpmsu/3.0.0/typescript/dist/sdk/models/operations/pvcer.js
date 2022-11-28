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
var PvcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PvcerRequestBodyCertificateParameters, _super);
    function PvcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=APPNO" }),
        __metadata("design:type", String)
    ], PvcerRequestBodyCertificateParameters.prototype, "appno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Date_Of_Birth" }),
        __metadata("design:type", String)
    ], PvcerRequestBodyCertificateParameters.prototype, "dateOfBirth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ENROLNO" }),
        __metadata("design:type", String)
    ], PvcerRequestBodyCertificateParameters.prototype, "enrolno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ROLLNO" }),
        __metadata("design:type", String)
    ], PvcerRequestBodyCertificateParameters.prototype, "rollno", void 0);
    return PvcerRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { PvcerRequestBodyCertificateParameters };
export var PvcerRequestBodyFormatEnum;
(function (PvcerRequestBodyFormatEnum) {
    PvcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(PvcerRequestBodyFormatEnum || (PvcerRequestBodyFormatEnum = {}));
var PvcerRequestBody = /** @class */ (function (_super) {
    __extends(PvcerRequestBody, _super);
    function PvcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", PvcerRequestBodyCertificateParameters)
    ], PvcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], PvcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PvcerRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], PvcerRequestBody.prototype, "txnId", void 0);
    return PvcerRequestBody;
}(SpeakeasyBase));
export { PvcerRequestBody };
var PvcerSecurity = /** @class */ (function (_super) {
    __extends(PvcerSecurity, _super);
    function PvcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PvcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PvcerSecurity.prototype, "clientId", void 0);
    return PvcerSecurity;
}(SpeakeasyBase));
export { PvcerSecurity };
export var Pvcer400ApplicationJsonErrorEnum;
(function (Pvcer400ApplicationJsonErrorEnum) {
    Pvcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Pvcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Pvcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Pvcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Pvcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Pvcer400ApplicationJsonErrorEnum || (Pvcer400ApplicationJsonErrorEnum = {}));
export var Pvcer400ApplicationJsonErrorDescriptionEnum;
(function (Pvcer400ApplicationJsonErrorDescriptionEnum) {
    Pvcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Pvcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Pvcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Pvcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Pvcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Pvcer400ApplicationJsonErrorDescriptionEnum || (Pvcer400ApplicationJsonErrorDescriptionEnum = {}));
var Pvcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Pvcer400ApplicationJson, _super);
    function Pvcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pvcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pvcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Pvcer400ApplicationJson;
}(SpeakeasyBase));
export { Pvcer400ApplicationJson };
export var Pvcer401ApplicationJsonErrorEnum;
(function (Pvcer401ApplicationJsonErrorEnum) {
    Pvcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Pvcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Pvcer401ApplicationJsonErrorEnum || (Pvcer401ApplicationJsonErrorEnum = {}));
export var Pvcer401ApplicationJsonErrorDescriptionEnum;
(function (Pvcer401ApplicationJsonErrorDescriptionEnum) {
    Pvcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Pvcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Pvcer401ApplicationJsonErrorDescriptionEnum || (Pvcer401ApplicationJsonErrorDescriptionEnum = {}));
var Pvcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Pvcer401ApplicationJson, _super);
    function Pvcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pvcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pvcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Pvcer401ApplicationJson;
}(SpeakeasyBase));
export { Pvcer401ApplicationJson };
export var Pvcer404ApplicationJsonErrorEnum;
(function (Pvcer404ApplicationJsonErrorEnum) {
    Pvcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Pvcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Pvcer404ApplicationJsonErrorEnum || (Pvcer404ApplicationJsonErrorEnum = {}));
export var Pvcer404ApplicationJsonErrorDescriptionEnum;
(function (Pvcer404ApplicationJsonErrorDescriptionEnum) {
    Pvcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Pvcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Pvcer404ApplicationJsonErrorDescriptionEnum || (Pvcer404ApplicationJsonErrorDescriptionEnum = {}));
var Pvcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Pvcer404ApplicationJson, _super);
    function Pvcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pvcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pvcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Pvcer404ApplicationJson;
}(SpeakeasyBase));
export { Pvcer404ApplicationJson };
export var Pvcer500ApplicationJsonErrorEnum;
(function (Pvcer500ApplicationJsonErrorEnum) {
    Pvcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Pvcer500ApplicationJsonErrorEnum || (Pvcer500ApplicationJsonErrorEnum = {}));
export var Pvcer500ApplicationJsonErrorDescriptionEnum;
(function (Pvcer500ApplicationJsonErrorDescriptionEnum) {
    Pvcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Pvcer500ApplicationJsonErrorDescriptionEnum || (Pvcer500ApplicationJsonErrorDescriptionEnum = {}));
var Pvcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Pvcer500ApplicationJson, _super);
    function Pvcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pvcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pvcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Pvcer500ApplicationJson;
}(SpeakeasyBase));
export { Pvcer500ApplicationJson };
export var Pvcer502ApplicationJsonErrorEnum;
(function (Pvcer502ApplicationJsonErrorEnum) {
    Pvcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Pvcer502ApplicationJsonErrorEnum || (Pvcer502ApplicationJsonErrorEnum = {}));
export var Pvcer502ApplicationJsonErrorDescriptionEnum;
(function (Pvcer502ApplicationJsonErrorDescriptionEnum) {
    Pvcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Pvcer502ApplicationJsonErrorDescriptionEnum || (Pvcer502ApplicationJsonErrorDescriptionEnum = {}));
var Pvcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Pvcer502ApplicationJson, _super);
    function Pvcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pvcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pvcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Pvcer502ApplicationJson;
}(SpeakeasyBase));
export { Pvcer502ApplicationJson };
export var Pvcer503ApplicationJsonErrorEnum;
(function (Pvcer503ApplicationJsonErrorEnum) {
    Pvcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Pvcer503ApplicationJsonErrorEnum || (Pvcer503ApplicationJsonErrorEnum = {}));
export var Pvcer503ApplicationJsonErrorDescriptionEnum;
(function (Pvcer503ApplicationJsonErrorDescriptionEnum) {
    Pvcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Pvcer503ApplicationJsonErrorDescriptionEnum || (Pvcer503ApplicationJsonErrorDescriptionEnum = {}));
var Pvcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Pvcer503ApplicationJson, _super);
    function Pvcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pvcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pvcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Pvcer503ApplicationJson;
}(SpeakeasyBase));
export { Pvcer503ApplicationJson };
export var Pvcer504ApplicationJsonErrorEnum;
(function (Pvcer504ApplicationJsonErrorEnum) {
    Pvcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Pvcer504ApplicationJsonErrorEnum || (Pvcer504ApplicationJsonErrorEnum = {}));
export var Pvcer504ApplicationJsonErrorDescriptionEnum;
(function (Pvcer504ApplicationJsonErrorDescriptionEnum) {
    Pvcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Pvcer504ApplicationJsonErrorDescriptionEnum || (Pvcer504ApplicationJsonErrorDescriptionEnum = {}));
var Pvcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Pvcer504ApplicationJson, _super);
    function Pvcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pvcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pvcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Pvcer504ApplicationJson;
}(SpeakeasyBase));
export { Pvcer504ApplicationJson };
var PvcerRequest = /** @class */ (function (_super) {
    __extends(PvcerRequest, _super);
    function PvcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PvcerRequestBody)
    ], PvcerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PvcerSecurity)
    ], PvcerRequest.prototype, "security", void 0);
    return PvcerRequest;
}(SpeakeasyBase));
export { PvcerRequest };
var PvcerResponse = /** @class */ (function (_super) {
    __extends(PvcerResponse, _super);
    function PvcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PvcerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PvcerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Pvcer400ApplicationJson)
    ], PvcerResponse.prototype, "pvcer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Pvcer401ApplicationJson)
    ], PvcerResponse.prototype, "pvcer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Pvcer404ApplicationJson)
    ], PvcerResponse.prototype, "pvcer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Pvcer500ApplicationJson)
    ], PvcerResponse.prototype, "pvcer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Pvcer502ApplicationJson)
    ], PvcerResponse.prototype, "pvcer502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Pvcer503ApplicationJson)
    ], PvcerResponse.prototype, "pvcer503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Pvcer504ApplicationJson)
    ], PvcerResponse.prototype, "pvcer504ApplicationJsonObject", void 0);
    return PvcerResponse;
}(SpeakeasyBase));
export { PvcerResponse };
