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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ImporterExporterCodeVerificationApiPathParams = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApiPathParams, _super);
    function ImporterExporterCodeVerificationApiPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=iec" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApiPathParams.prototype, "iec", void 0);
    return ImporterExporterCodeVerificationApiPathParams;
}(SpeakeasyBase));
export { ImporterExporterCodeVerificationApiPathParams };
var ImporterExporterCodeVerificationApiSecurityOption1 = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApiSecurityOption1, _super);
    function ImporterExporterCodeVerificationApiSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ImporterExporterCodeVerificationApiSecurityOption1.prototype, "apiKey", void 0);
    return ImporterExporterCodeVerificationApiSecurityOption1;
}(SpeakeasyBase));
export { ImporterExporterCodeVerificationApiSecurityOption1 };
var ImporterExporterCodeVerificationApiSecurityOption2 = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApiSecurityOption2, _super);
    function ImporterExporterCodeVerificationApiSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], ImporterExporterCodeVerificationApiSecurityOption2.prototype, "clientId", void 0);
    return ImporterExporterCodeVerificationApiSecurityOption2;
}(SpeakeasyBase));
export { ImporterExporterCodeVerificationApiSecurityOption2 };
var ImporterExporterCodeVerificationApiSecurity = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApiSecurity, _super);
    function ImporterExporterCodeVerificationApiSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ImporterExporterCodeVerificationApiSecurityOption1)
    ], ImporterExporterCodeVerificationApiSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ImporterExporterCodeVerificationApiSecurityOption2)
    ], ImporterExporterCodeVerificationApiSecurity.prototype, "option2", void 0);
    return ImporterExporterCodeVerificationApiSecurity;
}(SpeakeasyBase));
export { ImporterExporterCodeVerificationApiSecurity };
var ImporterExporterCodeVerificationApiRequest = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApiRequest, _super);
    function ImporterExporterCodeVerificationApiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ImporterExporterCodeVerificationApiPathParams)
    ], ImporterExporterCodeVerificationApiRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ImporterExporterCodeVerificationApiSecurity)
    ], ImporterExporterCodeVerificationApiRequest.prototype, "security", void 0);
    return ImporterExporterCodeVerificationApiRequest;
}(SpeakeasyBase));
export { ImporterExporterCodeVerificationApiRequest };
var ImporterExporterCodeVerificationApi200ApplicationJson = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApi200ApplicationJson, _super);
    function ImporterExporterCodeVerificationApi200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=addressLine1" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "addressLine1", void 0);
    __decorate([
        Metadata({ data: "json, name=addressLine2" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "addressLine2", void 0);
    __decorate([
        Metadata({ data: "json, name=branch" }),
        __metadata("design:type", Array)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "branch", void 0);
    __decorate([
        Metadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "city", void 0);
    __decorate([
        Metadata({ data: "json, name=dataAsOn" }),
        __metadata("design:type", Date)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "dataAsOn", void 0);
    __decorate([
        Metadata({ data: "json, name=directors" }),
        __metadata("design:type", Array)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "directors", void 0);
    __decorate([
        Metadata({ data: "json, name=entityName" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "entityName", void 0);
    __decorate([
        Metadata({ data: "json, name=exporterType" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "exporterType", void 0);
    __decorate([
        Metadata({ data: "json, name=iec" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "iec", void 0);
    __decorate([
        Metadata({ data: "json, name=iecIssueDate" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "iecIssueDate", void 0);
    __decorate([
        Metadata({ data: "json, name=iecModificationDate" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "iecModificationDate", void 0);
    __decorate([
        Metadata({ data: "json, name=iecStatus" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "iecStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=natureOfConcern" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "natureOfConcern", void 0);
    __decorate([
        Metadata({ data: "json, name=pan" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "pan", void 0);
    __decorate([
        Metadata({ data: "json, name=pin" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "pin", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "state", void 0);
    return ImporterExporterCodeVerificationApi200ApplicationJson;
}(SpeakeasyBase));
export { ImporterExporterCodeVerificationApi200ApplicationJson };
export var ImporterExporterCodeVerificationApi400ApplicationJsonErrorEnum;
(function (ImporterExporterCodeVerificationApi400ApplicationJsonErrorEnum) {
    ImporterExporterCodeVerificationApi400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid parameter";
    ImporterExporterCodeVerificationApi400ApplicationJsonErrorEnum["MissingParameter"] = "missing parameter";
})(ImporterExporterCodeVerificationApi400ApplicationJsonErrorEnum || (ImporterExporterCodeVerificationApi400ApplicationJsonErrorEnum = {}));
export var ImporterExporterCodeVerificationApi400ApplicationJsonErrorDescriptionEnum;
(function (ImporterExporterCodeVerificationApi400ApplicationJsonErrorDescriptionEnum) {
    ImporterExporterCodeVerificationApi400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    ImporterExporterCodeVerificationApi400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters.";
})(ImporterExporterCodeVerificationApi400ApplicationJsonErrorDescriptionEnum || (ImporterExporterCodeVerificationApi400ApplicationJsonErrorDescriptionEnum = {}));
var ImporterExporterCodeVerificationApi400ApplicationJson = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApi400ApplicationJson, _super);
    function ImporterExporterCodeVerificationApi400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi400ApplicationJson.prototype, "errorDescription", void 0);
    return ImporterExporterCodeVerificationApi400ApplicationJson;
}(SpeakeasyBase));
export { ImporterExporterCodeVerificationApi400ApplicationJson };
export var ImporterExporterCodeVerificationApi401ApplicationJsonErrorEnum;
(function (ImporterExporterCodeVerificationApi401ApplicationJsonErrorEnum) {
    ImporterExporterCodeVerificationApi401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    ImporterExporterCodeVerificationApi401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(ImporterExporterCodeVerificationApi401ApplicationJsonErrorEnum || (ImporterExporterCodeVerificationApi401ApplicationJsonErrorEnum = {}));
export var ImporterExporterCodeVerificationApi401ApplicationJsonErrorDescriptionEnum;
(function (ImporterExporterCodeVerificationApi401ApplicationJsonErrorDescriptionEnum) {
    ImporterExporterCodeVerificationApi401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    ImporterExporterCodeVerificationApi401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(ImporterExporterCodeVerificationApi401ApplicationJsonErrorDescriptionEnum || (ImporterExporterCodeVerificationApi401ApplicationJsonErrorDescriptionEnum = {}));
var ImporterExporterCodeVerificationApi401ApplicationJson = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApi401ApplicationJson, _super);
    function ImporterExporterCodeVerificationApi401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi401ApplicationJson.prototype, "errorDescription", void 0);
    return ImporterExporterCodeVerificationApi401ApplicationJson;
}(SpeakeasyBase));
export { ImporterExporterCodeVerificationApi401ApplicationJson };
export var ImporterExporterCodeVerificationApi404ApplicationJsonErrorEnum;
(function (ImporterExporterCodeVerificationApi404ApplicationJsonErrorEnum) {
    ImporterExporterCodeVerificationApi404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    ImporterExporterCodeVerificationApi404ApplicationJsonErrorEnum["UrlNotFound"] = "Url not found";
})(ImporterExporterCodeVerificationApi404ApplicationJsonErrorEnum || (ImporterExporterCodeVerificationApi404ApplicationJsonErrorEnum = {}));
export var ImporterExporterCodeVerificationApi404ApplicationJsonErrorDescriptionEnum;
(function (ImporterExporterCodeVerificationApi404ApplicationJsonErrorDescriptionEnum) {
    ImporterExporterCodeVerificationApi404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    ImporterExporterCodeVerificationApi404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect.";
})(ImporterExporterCodeVerificationApi404ApplicationJsonErrorDescriptionEnum || (ImporterExporterCodeVerificationApi404ApplicationJsonErrorDescriptionEnum = {}));
var ImporterExporterCodeVerificationApi404ApplicationJson = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApi404ApplicationJson, _super);
    function ImporterExporterCodeVerificationApi404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi404ApplicationJson.prototype, "errorDescription", void 0);
    return ImporterExporterCodeVerificationApi404ApplicationJson;
}(SpeakeasyBase));
export { ImporterExporterCodeVerificationApi404ApplicationJson };
export var ImporterExporterCodeVerificationApi500ApplicationJsonErrorEnum;
(function (ImporterExporterCodeVerificationApi500ApplicationJsonErrorEnum) {
    ImporterExporterCodeVerificationApi500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(ImporterExporterCodeVerificationApi500ApplicationJsonErrorEnum || (ImporterExporterCodeVerificationApi500ApplicationJsonErrorEnum = {}));
export var ImporterExporterCodeVerificationApi500ApplicationJsonErrorDescriptionEnum;
(function (ImporterExporterCodeVerificationApi500ApplicationJsonErrorDescriptionEnum) {
    ImporterExporterCodeVerificationApi500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(ImporterExporterCodeVerificationApi500ApplicationJsonErrorDescriptionEnum || (ImporterExporterCodeVerificationApi500ApplicationJsonErrorDescriptionEnum = {}));
var ImporterExporterCodeVerificationApi500ApplicationJson = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApi500ApplicationJson, _super);
    function ImporterExporterCodeVerificationApi500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi500ApplicationJson.prototype, "errorDescription", void 0);
    return ImporterExporterCodeVerificationApi500ApplicationJson;
}(SpeakeasyBase));
export { ImporterExporterCodeVerificationApi500ApplicationJson };
export var ImporterExporterCodeVerificationApi502ApplicationJsonErrorEnum;
(function (ImporterExporterCodeVerificationApi502ApplicationJsonErrorEnum) {
    ImporterExporterCodeVerificationApi502ApplicationJsonErrorEnum["BadGateway"] = "bad gateway";
})(ImporterExporterCodeVerificationApi502ApplicationJsonErrorEnum || (ImporterExporterCodeVerificationApi502ApplicationJsonErrorEnum = {}));
export var ImporterExporterCodeVerificationApi502ApplicationJsonErrorDescriptionEnum;
(function (ImporterExporterCodeVerificationApi502ApplicationJsonErrorDescriptionEnum) {
    ImporterExporterCodeVerificationApi502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response.";
})(ImporterExporterCodeVerificationApi502ApplicationJsonErrorDescriptionEnum || (ImporterExporterCodeVerificationApi502ApplicationJsonErrorDescriptionEnum = {}));
var ImporterExporterCodeVerificationApi502ApplicationJson = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApi502ApplicationJson, _super);
    function ImporterExporterCodeVerificationApi502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi502ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi502ApplicationJson.prototype, "errorDescription", void 0);
    return ImporterExporterCodeVerificationApi502ApplicationJson;
}(SpeakeasyBase));
export { ImporterExporterCodeVerificationApi502ApplicationJson };
export var ImporterExporterCodeVerificationApi503ApplicationJsonErrorEnum;
(function (ImporterExporterCodeVerificationApi503ApplicationJsonErrorEnum) {
    ImporterExporterCodeVerificationApi503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(ImporterExporterCodeVerificationApi503ApplicationJsonErrorEnum || (ImporterExporterCodeVerificationApi503ApplicationJsonErrorEnum = {}));
export var ImporterExporterCodeVerificationApi503ApplicationJsonErrorDescriptionEnum;
(function (ImporterExporterCodeVerificationApi503ApplicationJsonErrorDescriptionEnum) {
    ImporterExporterCodeVerificationApi503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(ImporterExporterCodeVerificationApi503ApplicationJsonErrorDescriptionEnum || (ImporterExporterCodeVerificationApi503ApplicationJsonErrorDescriptionEnum = {}));
var ImporterExporterCodeVerificationApi503ApplicationJson = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApi503ApplicationJson, _super);
    function ImporterExporterCodeVerificationApi503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi503ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi503ApplicationJson.prototype, "errorDescription", void 0);
    return ImporterExporterCodeVerificationApi503ApplicationJson;
}(SpeakeasyBase));
export { ImporterExporterCodeVerificationApi503ApplicationJson };
export var ImporterExporterCodeVerificationApi504ApplicationJsonErrorEnum;
(function (ImporterExporterCodeVerificationApi504ApplicationJsonErrorEnum) {
    ImporterExporterCodeVerificationApi504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(ImporterExporterCodeVerificationApi504ApplicationJsonErrorEnum || (ImporterExporterCodeVerificationApi504ApplicationJsonErrorEnum = {}));
export var ImporterExporterCodeVerificationApi504ApplicationJsonErrorDescriptionEnum;
(function (ImporterExporterCodeVerificationApi504ApplicationJsonErrorDescriptionEnum) {
    ImporterExporterCodeVerificationApi504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(ImporterExporterCodeVerificationApi504ApplicationJsonErrorDescriptionEnum || (ImporterExporterCodeVerificationApi504ApplicationJsonErrorDescriptionEnum = {}));
var ImporterExporterCodeVerificationApi504ApplicationJson = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApi504ApplicationJson, _super);
    function ImporterExporterCodeVerificationApi504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi504ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi504ApplicationJson.prototype, "errorDescription", void 0);
    return ImporterExporterCodeVerificationApi504ApplicationJson;
}(SpeakeasyBase));
export { ImporterExporterCodeVerificationApi504ApplicationJson };
var ImporterExporterCodeVerificationApiResponse = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApiResponse, _super);
    function ImporterExporterCodeVerificationApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApiResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ImporterExporterCodeVerificationApi200ApplicationJson)
    ], ImporterExporterCodeVerificationApiResponse.prototype, "importerExporterCodeVerificationApi200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ImporterExporterCodeVerificationApi400ApplicationJson)
    ], ImporterExporterCodeVerificationApiResponse.prototype, "importerExporterCodeVerificationApi400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ImporterExporterCodeVerificationApi401ApplicationJson)
    ], ImporterExporterCodeVerificationApiResponse.prototype, "importerExporterCodeVerificationApi401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ImporterExporterCodeVerificationApi404ApplicationJson)
    ], ImporterExporterCodeVerificationApiResponse.prototype, "importerExporterCodeVerificationApi404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ImporterExporterCodeVerificationApi500ApplicationJson)
    ], ImporterExporterCodeVerificationApiResponse.prototype, "importerExporterCodeVerificationApi500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ImporterExporterCodeVerificationApi502ApplicationJson)
    ], ImporterExporterCodeVerificationApiResponse.prototype, "importerExporterCodeVerificationApi502ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ImporterExporterCodeVerificationApi503ApplicationJson)
    ], ImporterExporterCodeVerificationApiResponse.prototype, "importerExporterCodeVerificationApi503ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ImporterExporterCodeVerificationApi504ApplicationJson)
    ], ImporterExporterCodeVerificationApiResponse.prototype, "importerExporterCodeVerificationApi504ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ImporterExporterCodeVerificationApiResponse.prototype, "statusCode", void 0);
    return ImporterExporterCodeVerificationApiResponse;
}(SpeakeasyBase));
export { ImporterExporterCodeVerificationApiResponse };
