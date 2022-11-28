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
var GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams, _super);
    function GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_id" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams.prototype, "issueId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams.prototype, "workspace", void 0);
    return GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams };
var GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity, _super);
    function GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity.prototype, "apiKey", void 0);
    return GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity };
var GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest, _super);
    function GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams)
    ], GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity)
    ], GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest.prototype, "security", void 0);
    return GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest };
var GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse, _super);
    function GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse.prototype, "error", void 0);
    return GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse };
