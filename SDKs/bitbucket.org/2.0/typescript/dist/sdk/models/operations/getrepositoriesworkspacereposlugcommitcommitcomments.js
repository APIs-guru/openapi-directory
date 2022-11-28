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
var GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams, _super);
    function GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commit" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams.prototype, "commit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams.prototype, "workspace", void 0);
    return GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams };
var GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryParams, _super);
    function GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryParams.prototype, "sort", void 0);
    return GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryParams };
var GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity, _super);
    function GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity.prototype, "apiKey", void 0);
    return GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity };
var GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest, _super);
    function GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryParams)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest.prototype, "security", void 0);
    return GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest };
var GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse, _super);
    function GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedCommitComments)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse.prototype, "paginatedCommitComments", void 0);
    return GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse };
