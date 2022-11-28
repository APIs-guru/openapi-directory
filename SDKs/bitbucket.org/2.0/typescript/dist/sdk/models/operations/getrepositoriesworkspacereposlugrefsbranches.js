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
var GetRepositoriesWorkspaceRepoSlugRefsBranchesPathParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugRefsBranchesPathParams, _super);
    function GetRepositoriesWorkspaceRepoSlugRefsBranchesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugRefsBranchesPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugRefsBranchesPathParams.prototype, "workspace", void 0);
    return GetRepositoriesWorkspaceRepoSlugRefsBranchesPathParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugRefsBranchesPathParams };
var GetRepositoriesWorkspaceRepoSlugRefsBranchesQueryParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugRefsBranchesQueryParams, _super);
    function GetRepositoriesWorkspaceRepoSlugRefsBranchesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugRefsBranchesQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugRefsBranchesQueryParams.prototype, "sort", void 0);
    return GetRepositoriesWorkspaceRepoSlugRefsBranchesQueryParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugRefsBranchesQueryParams };
var GetRepositoriesWorkspaceRepoSlugRefsBranchesSecurity = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugRefsBranchesSecurity, _super);
    function GetRepositoriesWorkspaceRepoSlugRefsBranchesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetRepositoriesWorkspaceRepoSlugRefsBranchesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetRepositoriesWorkspaceRepoSlugRefsBranchesSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetRepositoriesWorkspaceRepoSlugRefsBranchesSecurity.prototype, "apiKey", void 0);
    return GetRepositoriesWorkspaceRepoSlugRefsBranchesSecurity;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugRefsBranchesSecurity };
var GetRepositoriesWorkspaceRepoSlugRefsBranchesRequest = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugRefsBranchesRequest, _super);
    function GetRepositoriesWorkspaceRepoSlugRefsBranchesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugRefsBranchesPathParams)
    ], GetRepositoriesWorkspaceRepoSlugRefsBranchesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugRefsBranchesQueryParams)
    ], GetRepositoriesWorkspaceRepoSlugRefsBranchesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugRefsBranchesSecurity)
    ], GetRepositoriesWorkspaceRepoSlugRefsBranchesRequest.prototype, "security", void 0);
    return GetRepositoriesWorkspaceRepoSlugRefsBranchesRequest;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugRefsBranchesRequest };
var GetRepositoriesWorkspaceRepoSlugRefsBranchesResponse = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugRefsBranchesResponse, _super);
    function GetRepositoriesWorkspaceRepoSlugRefsBranchesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugRefsBranchesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugRefsBranchesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoriesWorkspaceRepoSlugRefsBranchesResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedBranches)
    ], GetRepositoriesWorkspaceRepoSlugRefsBranchesResponse.prototype, "paginatedBranches", void 0);
    return GetRepositoriesWorkspaceRepoSlugRefsBranchesResponse;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugRefsBranchesResponse };
