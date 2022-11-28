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
export var GetSnippetsRoleEnum;
(function (GetSnippetsRoleEnum) {
    GetSnippetsRoleEnum["Owner"] = "owner";
    GetSnippetsRoleEnum["Contributor"] = "contributor";
    GetSnippetsRoleEnum["Member"] = "member";
})(GetSnippetsRoleEnum || (GetSnippetsRoleEnum = {}));
var GetSnippetsQueryParams = /** @class */ (function (_super) {
    __extends(GetSnippetsQueryParams, _super);
    function GetSnippetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" }),
        __metadata("design:type", String)
    ], GetSnippetsQueryParams.prototype, "role", void 0);
    return GetSnippetsQueryParams;
}(SpeakeasyBase));
export { GetSnippetsQueryParams };
var GetSnippetsSecurity = /** @class */ (function (_super) {
    __extends(GetSnippetsSecurity, _super);
    function GetSnippetsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetSnippetsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetSnippetsSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetSnippetsSecurity.prototype, "apiKey", void 0);
    return GetSnippetsSecurity;
}(SpeakeasyBase));
export { GetSnippetsSecurity };
var GetSnippetsRequest = /** @class */ (function (_super) {
    __extends(GetSnippetsRequest, _super);
    function GetSnippetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSnippetsQueryParams)
    ], GetSnippetsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSnippetsSecurity)
    ], GetSnippetsRequest.prototype, "security", void 0);
    return GetSnippetsRequest;
}(SpeakeasyBase));
export { GetSnippetsRequest };
var GetSnippetsResponse = /** @class */ (function (_super) {
    __extends(GetSnippetsResponse, _super);
    function GetSnippetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSnippetsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSnippetsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSnippetsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedSnippets)
    ], GetSnippetsResponse.prototype, "paginatedSnippets", void 0);
    return GetSnippetsResponse;
}(SpeakeasyBase));
export { GetSnippetsResponse };
