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
var DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams = /** @class */ (function (_super) {
    __extends(DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams, _super);
    function DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_id" }),
        __metadata("design:type", String)
    ], DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams.prototype, "issueId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams.prototype, "workspace", void 0);
    return DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams;
}(SpeakeasyBase));
export { DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams };
var DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity = /** @class */ (function (_super) {
    __extends(DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity, _super);
    function DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity.prototype, "apiKey", void 0);
    return DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity;
}(SpeakeasyBase));
export { DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity };
var DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest = /** @class */ (function (_super) {
    __extends(DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest, _super);
    function DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams)
    ], DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity)
    ], DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest.prototype, "security", void 0);
    return DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest;
}(SpeakeasyBase));
export { DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest };
var DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse = /** @class */ (function (_super) {
    __extends(DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse, _super);
    function DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse.prototype, "error", void 0);
    return DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse;
}(SpeakeasyBase));
export { DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse };
