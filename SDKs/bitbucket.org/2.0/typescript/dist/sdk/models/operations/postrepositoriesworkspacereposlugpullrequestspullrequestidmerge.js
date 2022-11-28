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
var PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams, _super);
    function PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_request_id" }),
        __metadata("design:type", Number)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams.prototype, "pullRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams.prototype, "workspace", void 0);
    return PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams;
}(SpeakeasyBase));
export { PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams };
var PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeQueryParams = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeQueryParams, _super);
    function PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=async" }),
        __metadata("design:type", Boolean)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeQueryParams.prototype, "async", void 0);
    return PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeQueryParams;
}(SpeakeasyBase));
export { PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeQueryParams };
var PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity, _super);
    function PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity.prototype, "apiKey", void 0);
    return PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity;
}(SpeakeasyBase));
export { PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity };
var PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest, _super);
    function PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeQueryParams)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest.prototype, "security", void 0);
    return PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest;
}(SpeakeasyBase));
export { PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest };
var PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse, _super);
    function PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse.prototype, "pullrequest", void 0);
    return PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse;
}(SpeakeasyBase));
export { PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse };
