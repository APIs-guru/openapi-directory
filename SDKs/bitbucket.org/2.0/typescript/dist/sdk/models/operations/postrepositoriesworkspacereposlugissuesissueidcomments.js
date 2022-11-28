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
var PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPathParams = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPathParams, _super);
    function PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_id" }),
        __metadata("design:type", String)
    ], PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPathParams.prototype, "issueId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPathParams.prototype, "workspace", void 0);
    return PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPathParams;
}(SpeakeasyBase));
export { PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPathParams };
var PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity, _super);
    function PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity.prototype, "apiKey", void 0);
    return PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity;
}(SpeakeasyBase));
export { PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity };
var PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest, _super);
    function PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPathParams)
    ], PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity)
    ], PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest.prototype, "security", void 0);
    return PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest;
}(SpeakeasyBase));
export { PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest };
var PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse, _super);
    function PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse.prototype, "error", void 0);
    return PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse;
}(SpeakeasyBase));
export { PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse };
