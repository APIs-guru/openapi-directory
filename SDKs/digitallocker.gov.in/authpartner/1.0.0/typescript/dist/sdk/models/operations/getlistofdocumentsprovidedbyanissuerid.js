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
var GetListOfDocumentsProvidedByAnIssuerIdSecurity = /** @class */ (function (_super) {
    __extends(GetListOfDocumentsProvidedByAnIssuerIdSecurity, _super);
    function GetListOfDocumentsProvidedByAnIssuerIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauthsecurity)
    ], GetListOfDocumentsProvidedByAnIssuerIdSecurity.prototype, "oauthsecurity", void 0);
    return GetListOfDocumentsProvidedByAnIssuerIdSecurity;
}(SpeakeasyBase));
export { GetListOfDocumentsProvidedByAnIssuerIdSecurity };
var GetListOfDocumentsProvidedByAnIssuerIdRequest = /** @class */ (function (_super) {
    __extends(GetListOfDocumentsProvidedByAnIssuerIdRequest, _super);
    function GetListOfDocumentsProvidedByAnIssuerIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", Object)
    ], GetListOfDocumentsProvidedByAnIssuerIdRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListOfDocumentsProvidedByAnIssuerIdSecurity)
    ], GetListOfDocumentsProvidedByAnIssuerIdRequest.prototype, "security", void 0);
    return GetListOfDocumentsProvidedByAnIssuerIdRequest;
}(SpeakeasyBase));
export { GetListOfDocumentsProvidedByAnIssuerIdRequest };
var GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson, _super);
    function GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", Object)
    ], GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", Object)
    ], GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson.prototype, "errorDescription", void 0);
    return GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson;
}(SpeakeasyBase));
export { GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson };
var GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson, _super);
    function GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson.prototype, "errorDescription", void 0);
    return GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson;
}(SpeakeasyBase));
export { GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson };
var GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson, _super);
    function GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", Object)
    ], GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", Object)
    ], GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson.prototype, "errorDescription", void 0);
    return GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson;
}(SpeakeasyBase));
export { GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson };
var GetListOfDocumentsProvidedByAnIssuerIdResponse = /** @class */ (function (_super) {
    __extends(GetListOfDocumentsProvidedByAnIssuerIdResponse, _super);
    function GetListOfDocumentsProvidedByAnIssuerIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetListOfDocumentsProvidedByAnIssuerIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DocTypeResponse)
    ], GetListOfDocumentsProvidedByAnIssuerIdResponse.prototype, "docTypeResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson)
    ], GetListOfDocumentsProvidedByAnIssuerIdResponse.prototype, "getListOfDocumentsProvidedByAnIssuerId400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson)
    ], GetListOfDocumentsProvidedByAnIssuerIdResponse.prototype, "getListOfDocumentsProvidedByAnIssuerId401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson)
    ], GetListOfDocumentsProvidedByAnIssuerIdResponse.prototype, "getListOfDocumentsProvidedByAnIssuerId500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetListOfDocumentsProvidedByAnIssuerIdResponse.prototype, "statusCode", void 0);
    return GetListOfDocumentsProvidedByAnIssuerIdResponse;
}(SpeakeasyBase));
export { GetListOfDocumentsProvidedByAnIssuerIdResponse };
