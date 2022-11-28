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
var IsoalRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(IsoalRequestBodyCertificateParameters, _super);
    function IsoalRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], IsoalRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], IsoalRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return IsoalRequestBodyCertificateParameters;
}(SpeakeasyBase));
export { IsoalRequestBodyCertificateParameters };
export var IsoalRequestBodyFormatEnum;
(function (IsoalRequestBodyFormatEnum) {
    IsoalRequestBodyFormatEnum["Pdf"] = "pdf";
})(IsoalRequestBodyFormatEnum || (IsoalRequestBodyFormatEnum = {}));
var IsoalRequestBody = /** @class */ (function (_super) {
    __extends(IsoalRequestBody, _super);
    function IsoalRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateParameters" }),
        __metadata("design:type", IsoalRequestBodyCertificateParameters)
    ], IsoalRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], IsoalRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], IsoalRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], IsoalRequestBody.prototype, "txnId", void 0);
    return IsoalRequestBody;
}(SpeakeasyBase));
export { IsoalRequestBody };
var IsoalSecurity = /** @class */ (function (_super) {
    __extends(IsoalSecurity, _super);
    function IsoalSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], IsoalSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], IsoalSecurity.prototype, "clientId", void 0);
    return IsoalSecurity;
}(SpeakeasyBase));
export { IsoalSecurity };
export var Isoal400ApplicationJsonErrorEnum;
(function (Isoal400ApplicationJsonErrorEnum) {
    Isoal400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Isoal400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Isoal400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Isoal400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Isoal400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Isoal400ApplicationJsonErrorEnum || (Isoal400ApplicationJsonErrorEnum = {}));
export var Isoal400ApplicationJsonErrorDescriptionEnum;
(function (Isoal400ApplicationJsonErrorDescriptionEnum) {
    Isoal400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Isoal400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Isoal400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Isoal400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Isoal400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Isoal400ApplicationJsonErrorDescriptionEnum || (Isoal400ApplicationJsonErrorDescriptionEnum = {}));
var Isoal400ApplicationJson = /** @class */ (function (_super) {
    __extends(Isoal400ApplicationJson, _super);
    function Isoal400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Isoal400ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Isoal400ApplicationJson.prototype, "errorDescription", void 0);
    return Isoal400ApplicationJson;
}(SpeakeasyBase));
export { Isoal400ApplicationJson };
export var Isoal401ApplicationJsonErrorEnum;
(function (Isoal401ApplicationJsonErrorEnum) {
    Isoal401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Isoal401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Isoal401ApplicationJsonErrorEnum || (Isoal401ApplicationJsonErrorEnum = {}));
export var Isoal401ApplicationJsonErrorDescriptionEnum;
(function (Isoal401ApplicationJsonErrorDescriptionEnum) {
    Isoal401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Isoal401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Isoal401ApplicationJsonErrorDescriptionEnum || (Isoal401ApplicationJsonErrorDescriptionEnum = {}));
var Isoal401ApplicationJson = /** @class */ (function (_super) {
    __extends(Isoal401ApplicationJson, _super);
    function Isoal401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Isoal401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Isoal401ApplicationJson.prototype, "errorDescription", void 0);
    return Isoal401ApplicationJson;
}(SpeakeasyBase));
export { Isoal401ApplicationJson };
export var Isoal404ApplicationJsonErrorEnum;
(function (Isoal404ApplicationJsonErrorEnum) {
    Isoal404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Isoal404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Isoal404ApplicationJsonErrorEnum || (Isoal404ApplicationJsonErrorEnum = {}));
export var Isoal404ApplicationJsonErrorDescriptionEnum;
(function (Isoal404ApplicationJsonErrorDescriptionEnum) {
    Isoal404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Isoal404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Isoal404ApplicationJsonErrorDescriptionEnum || (Isoal404ApplicationJsonErrorDescriptionEnum = {}));
var Isoal404ApplicationJson = /** @class */ (function (_super) {
    __extends(Isoal404ApplicationJson, _super);
    function Isoal404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Isoal404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Isoal404ApplicationJson.prototype, "errorDescription", void 0);
    return Isoal404ApplicationJson;
}(SpeakeasyBase));
export { Isoal404ApplicationJson };
export var Isoal500ApplicationJsonErrorEnum;
(function (Isoal500ApplicationJsonErrorEnum) {
    Isoal500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Isoal500ApplicationJsonErrorEnum || (Isoal500ApplicationJsonErrorEnum = {}));
export var Isoal500ApplicationJsonErrorDescriptionEnum;
(function (Isoal500ApplicationJsonErrorDescriptionEnum) {
    Isoal500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Isoal500ApplicationJsonErrorDescriptionEnum || (Isoal500ApplicationJsonErrorDescriptionEnum = {}));
var Isoal500ApplicationJson = /** @class */ (function (_super) {
    __extends(Isoal500ApplicationJson, _super);
    function Isoal500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Isoal500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Isoal500ApplicationJson.prototype, "errorDescription", void 0);
    return Isoal500ApplicationJson;
}(SpeakeasyBase));
export { Isoal500ApplicationJson };
export var Isoal502ApplicationJsonErrorEnum;
(function (Isoal502ApplicationJsonErrorEnum) {
    Isoal502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Isoal502ApplicationJsonErrorEnum || (Isoal502ApplicationJsonErrorEnum = {}));
export var Isoal502ApplicationJsonErrorDescriptionEnum;
(function (Isoal502ApplicationJsonErrorDescriptionEnum) {
    Isoal502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Isoal502ApplicationJsonErrorDescriptionEnum || (Isoal502ApplicationJsonErrorDescriptionEnum = {}));
var Isoal502ApplicationJson = /** @class */ (function (_super) {
    __extends(Isoal502ApplicationJson, _super);
    function Isoal502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Isoal502ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Isoal502ApplicationJson.prototype, "errorDescription", void 0);
    return Isoal502ApplicationJson;
}(SpeakeasyBase));
export { Isoal502ApplicationJson };
export var Isoal503ApplicationJsonErrorEnum;
(function (Isoal503ApplicationJsonErrorEnum) {
    Isoal503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Isoal503ApplicationJsonErrorEnum || (Isoal503ApplicationJsonErrorEnum = {}));
export var Isoal503ApplicationJsonErrorDescriptionEnum;
(function (Isoal503ApplicationJsonErrorDescriptionEnum) {
    Isoal503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Isoal503ApplicationJsonErrorDescriptionEnum || (Isoal503ApplicationJsonErrorDescriptionEnum = {}));
var Isoal503ApplicationJson = /** @class */ (function (_super) {
    __extends(Isoal503ApplicationJson, _super);
    function Isoal503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Isoal503ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Isoal503ApplicationJson.prototype, "errorDescription", void 0);
    return Isoal503ApplicationJson;
}(SpeakeasyBase));
export { Isoal503ApplicationJson };
export var Isoal504ApplicationJsonErrorEnum;
(function (Isoal504ApplicationJsonErrorEnum) {
    Isoal504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Isoal504ApplicationJsonErrorEnum || (Isoal504ApplicationJsonErrorEnum = {}));
export var Isoal504ApplicationJsonErrorDescriptionEnum;
(function (Isoal504ApplicationJsonErrorDescriptionEnum) {
    Isoal504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Isoal504ApplicationJsonErrorDescriptionEnum || (Isoal504ApplicationJsonErrorDescriptionEnum = {}));
var Isoal504ApplicationJson = /** @class */ (function (_super) {
    __extends(Isoal504ApplicationJson, _super);
    function Isoal504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Isoal504ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Isoal504ApplicationJson.prototype, "errorDescription", void 0);
    return Isoal504ApplicationJson;
}(SpeakeasyBase));
export { Isoal504ApplicationJson };
var IsoalRequest = /** @class */ (function (_super) {
    __extends(IsoalRequest, _super);
    function IsoalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", IsoalRequestBody)
    ], IsoalRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IsoalSecurity)
    ], IsoalRequest.prototype, "security", void 0);
    return IsoalRequest;
}(SpeakeasyBase));
export { IsoalRequest };
var IsoalResponse = /** @class */ (function (_super) {
    __extends(IsoalResponse, _super);
    function IsoalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IsoalResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IsoalResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Isoal400ApplicationJson)
    ], IsoalResponse.prototype, "isoal400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Isoal401ApplicationJson)
    ], IsoalResponse.prototype, "isoal401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Isoal404ApplicationJson)
    ], IsoalResponse.prototype, "isoal404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Isoal500ApplicationJson)
    ], IsoalResponse.prototype, "isoal500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Isoal502ApplicationJson)
    ], IsoalResponse.prototype, "isoal502ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Isoal503ApplicationJson)
    ], IsoalResponse.prototype, "isoal503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Isoal504ApplicationJson)
    ], IsoalResponse.prototype, "isoal504ApplicationJsonObject", void 0);
    return IsoalResponse;
}(SpeakeasyBase));
export { IsoalResponse };
