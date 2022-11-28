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
var GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugPathParams = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugPathParams, _super);
    function GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugPathParams.prototype, "workspace", void 0);
    return GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugPathParams;
}(SpeakeasyBase));
export { GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugPathParams };
var GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryParams = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryParams, _super);
    function GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryParams.prototype, "sort", void 0);
    return GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryParams;
}(SpeakeasyBase));
export { GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryParams };
var GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity, _super);
    function GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity.prototype, "apiKey", void 0);
    return GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity;
}(SpeakeasyBase));
export { GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity };
var GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest, _super);
    function GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugPathParams)
    ], GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryParams)
    ], GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity)
    ], GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest.prototype, "security", void 0);
    return GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest;
}(SpeakeasyBase));
export { GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest };
var GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse, _super);
    function GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedRepositoryPermissions)
    ], GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse.prototype, "paginatedRepositoryPermissions", void 0);
    return GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse;
}(SpeakeasyBase));
export { GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse };
