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
var GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesPathParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesPathParams, _super);
    function GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_request_id" }),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesPathParams.prototype, "pullRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesPathParams.prototype, "workspace", void 0);
    return GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesPathParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesPathParams };
var GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesQueryParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesQueryParams, _super);
    function GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesQueryParams.prototype, "sort", void 0);
    return GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesQueryParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesQueryParams };
var GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesSecurity = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesSecurity, _super);
    function GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesSecurity.prototype, "apiKey", void 0);
    return GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesSecurity;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesSecurity };
var GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest, _super);
    function GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesPathParams)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesQueryParams)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesSecurity)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest.prototype, "security", void 0);
    return GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest };
var GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse, _super);
    function GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedCommitstatuses)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse.prototype, "paginatedCommitstatuses", void 0);
    return GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse };
