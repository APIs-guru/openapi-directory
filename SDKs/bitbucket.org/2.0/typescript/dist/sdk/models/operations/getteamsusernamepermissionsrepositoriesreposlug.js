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
var GetTeamsUsernamePermissionsRepositoriesRepoSlugPathParams = /** @class */ (function (_super) {
    __extends(GetTeamsUsernamePermissionsRepositoriesRepoSlugPathParams, _super);
    function GetTeamsUsernamePermissionsRepositoriesRepoSlugPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetTeamsUsernamePermissionsRepositoriesRepoSlugPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], GetTeamsUsernamePermissionsRepositoriesRepoSlugPathParams.prototype, "username", void 0);
    return GetTeamsUsernamePermissionsRepositoriesRepoSlugPathParams;
}(SpeakeasyBase));
export { GetTeamsUsernamePermissionsRepositoriesRepoSlugPathParams };
var GetTeamsUsernamePermissionsRepositoriesRepoSlugQueryParams = /** @class */ (function (_super) {
    __extends(GetTeamsUsernamePermissionsRepositoriesRepoSlugQueryParams, _super);
    function GetTeamsUsernamePermissionsRepositoriesRepoSlugQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetTeamsUsernamePermissionsRepositoriesRepoSlugQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetTeamsUsernamePermissionsRepositoriesRepoSlugQueryParams.prototype, "sort", void 0);
    return GetTeamsUsernamePermissionsRepositoriesRepoSlugQueryParams;
}(SpeakeasyBase));
export { GetTeamsUsernamePermissionsRepositoriesRepoSlugQueryParams };
var GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurity = /** @class */ (function (_super) {
    __extends(GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurity, _super);
    function GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurity.prototype, "apiKey", void 0);
    return GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurity;
}(SpeakeasyBase));
export { GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurity };
var GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest = /** @class */ (function (_super) {
    __extends(GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest, _super);
    function GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsUsernamePermissionsRepositoriesRepoSlugPathParams)
    ], GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsUsernamePermissionsRepositoriesRepoSlugQueryParams)
    ], GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurity)
    ], GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest.prototype, "security", void 0);
    return GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest;
}(SpeakeasyBase));
export { GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest };
var GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse = /** @class */ (function (_super) {
    __extends(GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse, _super);
    function GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedRepositoryPermissions)
    ], GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse.prototype, "paginatedRepositoryPermissions", void 0);
    return GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse;
}(SpeakeasyBase));
export { GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse };
