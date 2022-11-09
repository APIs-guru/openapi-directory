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
var GetSearchParametersForADocumentIdSecurity = /** @class */ (function (_super) {
    __extends(GetSearchParametersForADocumentIdSecurity, _super);
    function GetSearchParametersForADocumentIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauthsecurity)
    ], GetSearchParametersForADocumentIdSecurity.prototype, "oauthsecurity", void 0);
    return GetSearchParametersForADocumentIdSecurity;
}(SpeakeasyBase));
export { GetSearchParametersForADocumentIdSecurity };
var GetSearchParametersForADocumentIdRequest = /** @class */ (function (_super) {
    __extends(GetSearchParametersForADocumentIdRequest, _super);
    function GetSearchParametersForADocumentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", Object)
    ], GetSearchParametersForADocumentIdRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSearchParametersForADocumentIdSecurity)
    ], GetSearchParametersForADocumentIdRequest.prototype, "security", void 0);
    return GetSearchParametersForADocumentIdRequest;
}(SpeakeasyBase));
export { GetSearchParametersForADocumentIdRequest };
var GetSearchParametersForADocumentId400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSearchParametersForADocumentId400ApplicationJson, _super);
    function GetSearchParametersForADocumentId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", Object)
    ], GetSearchParametersForADocumentId400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", Object)
    ], GetSearchParametersForADocumentId400ApplicationJson.prototype, "errorDescription", void 0);
    return GetSearchParametersForADocumentId400ApplicationJson;
}(SpeakeasyBase));
export { GetSearchParametersForADocumentId400ApplicationJson };
var GetSearchParametersForADocumentId401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSearchParametersForADocumentId401ApplicationJson, _super);
    function GetSearchParametersForADocumentId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetSearchParametersForADocumentId401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetSearchParametersForADocumentId401ApplicationJson.prototype, "errorDescription", void 0);
    return GetSearchParametersForADocumentId401ApplicationJson;
}(SpeakeasyBase));
export { GetSearchParametersForADocumentId401ApplicationJson };
var GetSearchParametersForADocumentId500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSearchParametersForADocumentId500ApplicationJson, _super);
    function GetSearchParametersForADocumentId500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", Object)
    ], GetSearchParametersForADocumentId500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", Object)
    ], GetSearchParametersForADocumentId500ApplicationJson.prototype, "errorDescription", void 0);
    return GetSearchParametersForADocumentId500ApplicationJson;
}(SpeakeasyBase));
export { GetSearchParametersForADocumentId500ApplicationJson };
var GetSearchParametersForADocumentIdResponse = /** @class */ (function (_super) {
    __extends(GetSearchParametersForADocumentIdResponse, _super);
    function GetSearchParametersForADocumentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSearchParametersForADocumentIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSearchParametersForADocumentId400ApplicationJson)
    ], GetSearchParametersForADocumentIdResponse.prototype, "getSearchParametersForADocumentId400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSearchParametersForADocumentId401ApplicationJson)
    ], GetSearchParametersForADocumentIdResponse.prototype, "getSearchParametersForADocumentId401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSearchParametersForADocumentId500ApplicationJson)
    ], GetSearchParametersForADocumentIdResponse.prototype, "getSearchParametersForADocumentId500ApplicationJsonObject", void 0);
    __decorate([
        Metadata({ elemType: shared.SearchParametersResponse }),
        __metadata("design:type", Array)
    ], GetSearchParametersForADocumentIdResponse.prototype, "searchParametersResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSearchParametersForADocumentIdResponse.prototype, "statusCode", void 0);
    return GetSearchParametersForADocumentIdResponse;
}(SpeakeasyBase));
export { GetSearchParametersForADocumentIdResponse };
