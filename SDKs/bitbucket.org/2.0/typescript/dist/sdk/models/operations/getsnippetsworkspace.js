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
var GetSnippetsWorkspacePathParams = /** @class */ (function (_super) {
    __extends(GetSnippetsWorkspacePathParams, _super);
    function GetSnippetsWorkspacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetSnippetsWorkspacePathParams.prototype, "workspace", void 0);
    return GetSnippetsWorkspacePathParams;
}(SpeakeasyBase));
export { GetSnippetsWorkspacePathParams };
export var GetSnippetsWorkspaceRoleEnum;
(function (GetSnippetsWorkspaceRoleEnum) {
    GetSnippetsWorkspaceRoleEnum["Owner"] = "owner";
    GetSnippetsWorkspaceRoleEnum["Contributor"] = "contributor";
    GetSnippetsWorkspaceRoleEnum["Member"] = "member";
})(GetSnippetsWorkspaceRoleEnum || (GetSnippetsWorkspaceRoleEnum = {}));
var GetSnippetsWorkspaceQueryParams = /** @class */ (function (_super) {
    __extends(GetSnippetsWorkspaceQueryParams, _super);
    function GetSnippetsWorkspaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" }),
        __metadata("design:type", String)
    ], GetSnippetsWorkspaceQueryParams.prototype, "role", void 0);
    return GetSnippetsWorkspaceQueryParams;
}(SpeakeasyBase));
export { GetSnippetsWorkspaceQueryParams };
var GetSnippetsWorkspaceSecurity = /** @class */ (function (_super) {
    __extends(GetSnippetsWorkspaceSecurity, _super);
    function GetSnippetsWorkspaceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetSnippetsWorkspaceSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetSnippetsWorkspaceSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetSnippetsWorkspaceSecurity.prototype, "apiKey", void 0);
    return GetSnippetsWorkspaceSecurity;
}(SpeakeasyBase));
export { GetSnippetsWorkspaceSecurity };
var GetSnippetsWorkspaceRequest = /** @class */ (function (_super) {
    __extends(GetSnippetsWorkspaceRequest, _super);
    function GetSnippetsWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSnippetsWorkspacePathParams)
    ], GetSnippetsWorkspaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSnippetsWorkspaceQueryParams)
    ], GetSnippetsWorkspaceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSnippetsWorkspaceSecurity)
    ], GetSnippetsWorkspaceRequest.prototype, "security", void 0);
    return GetSnippetsWorkspaceRequest;
}(SpeakeasyBase));
export { GetSnippetsWorkspaceRequest };
var GetSnippetsWorkspaceResponse = /** @class */ (function (_super) {
    __extends(GetSnippetsWorkspaceResponse, _super);
    function GetSnippetsWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSnippetsWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSnippetsWorkspaceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSnippetsWorkspaceResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedSnippets)
    ], GetSnippetsWorkspaceResponse.prototype, "paginatedSnippets", void 0);
    return GetSnippetsWorkspaceResponse;
}(SpeakeasyBase));
export { GetSnippetsWorkspaceResponse };
