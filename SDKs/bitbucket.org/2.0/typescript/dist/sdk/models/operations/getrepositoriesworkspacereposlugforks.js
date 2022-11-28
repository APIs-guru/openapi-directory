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
var GetRepositoriesWorkspaceRepoSlugForksPathParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugForksPathParams, _super);
    function GetRepositoriesWorkspaceRepoSlugForksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugForksPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugForksPathParams.prototype, "workspace", void 0);
    return GetRepositoriesWorkspaceRepoSlugForksPathParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugForksPathParams };
export var GetRepositoriesWorkspaceRepoSlugForksRoleEnum;
(function (GetRepositoriesWorkspaceRepoSlugForksRoleEnum) {
    GetRepositoriesWorkspaceRepoSlugForksRoleEnum["Admin"] = "admin";
    GetRepositoriesWorkspaceRepoSlugForksRoleEnum["Contributor"] = "contributor";
    GetRepositoriesWorkspaceRepoSlugForksRoleEnum["Member"] = "member";
    GetRepositoriesWorkspaceRepoSlugForksRoleEnum["Owner"] = "owner";
})(GetRepositoriesWorkspaceRepoSlugForksRoleEnum || (GetRepositoriesWorkspaceRepoSlugForksRoleEnum = {}));
var GetRepositoriesWorkspaceRepoSlugForksQueryParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugForksQueryParams, _super);
    function GetRepositoriesWorkspaceRepoSlugForksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugForksQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugForksQueryParams.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugForksQueryParams.prototype, "sort", void 0);
    return GetRepositoriesWorkspaceRepoSlugForksQueryParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugForksQueryParams };
var GetRepositoriesWorkspaceRepoSlugForksSecurity = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugForksSecurity, _super);
    function GetRepositoriesWorkspaceRepoSlugForksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetRepositoriesWorkspaceRepoSlugForksSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetRepositoriesWorkspaceRepoSlugForksSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetRepositoriesWorkspaceRepoSlugForksSecurity.prototype, "apiKey", void 0);
    return GetRepositoriesWorkspaceRepoSlugForksSecurity;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugForksSecurity };
var GetRepositoriesWorkspaceRepoSlugForksRequest = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugForksRequest, _super);
    function GetRepositoriesWorkspaceRepoSlugForksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugForksPathParams)
    ], GetRepositoriesWorkspaceRepoSlugForksRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugForksQueryParams)
    ], GetRepositoriesWorkspaceRepoSlugForksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugForksSecurity)
    ], GetRepositoriesWorkspaceRepoSlugForksRequest.prototype, "security", void 0);
    return GetRepositoriesWorkspaceRepoSlugForksRequest;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugForksRequest };
var GetRepositoriesWorkspaceRepoSlugForksResponse = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugForksResponse, _super);
    function GetRepositoriesWorkspaceRepoSlugForksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugForksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugForksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedRepositories)
    ], GetRepositoriesWorkspaceRepoSlugForksResponse.prototype, "paginatedRepositories", void 0);
    return GetRepositoriesWorkspaceRepoSlugForksResponse;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugForksResponse };
