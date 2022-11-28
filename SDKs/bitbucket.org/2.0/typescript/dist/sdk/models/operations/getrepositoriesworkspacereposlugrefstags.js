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
var GetRepositoriesWorkspaceRepoSlugRefsTagsPathParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugRefsTagsPathParams, _super);
    function GetRepositoriesWorkspaceRepoSlugRefsTagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugRefsTagsPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugRefsTagsPathParams.prototype, "workspace", void 0);
    return GetRepositoriesWorkspaceRepoSlugRefsTagsPathParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugRefsTagsPathParams };
var GetRepositoriesWorkspaceRepoSlugRefsTagsQueryParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugRefsTagsQueryParams, _super);
    function GetRepositoriesWorkspaceRepoSlugRefsTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugRefsTagsQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugRefsTagsQueryParams.prototype, "sort", void 0);
    return GetRepositoriesWorkspaceRepoSlugRefsTagsQueryParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugRefsTagsQueryParams };
var GetRepositoriesWorkspaceRepoSlugRefsTagsSecurity = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugRefsTagsSecurity, _super);
    function GetRepositoriesWorkspaceRepoSlugRefsTagsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetRepositoriesWorkspaceRepoSlugRefsTagsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetRepositoriesWorkspaceRepoSlugRefsTagsSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetRepositoriesWorkspaceRepoSlugRefsTagsSecurity.prototype, "apiKey", void 0);
    return GetRepositoriesWorkspaceRepoSlugRefsTagsSecurity;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugRefsTagsSecurity };
var GetRepositoriesWorkspaceRepoSlugRefsTagsRequest = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugRefsTagsRequest, _super);
    function GetRepositoriesWorkspaceRepoSlugRefsTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugRefsTagsPathParams)
    ], GetRepositoriesWorkspaceRepoSlugRefsTagsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugRefsTagsQueryParams)
    ], GetRepositoriesWorkspaceRepoSlugRefsTagsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugRefsTagsSecurity)
    ], GetRepositoriesWorkspaceRepoSlugRefsTagsRequest.prototype, "security", void 0);
    return GetRepositoriesWorkspaceRepoSlugRefsTagsRequest;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugRefsTagsRequest };
var GetRepositoriesWorkspaceRepoSlugRefsTagsResponse = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugRefsTagsResponse, _super);
    function GetRepositoriesWorkspaceRepoSlugRefsTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugRefsTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugRefsTagsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoriesWorkspaceRepoSlugRefsTagsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedTags)
    ], GetRepositoriesWorkspaceRepoSlugRefsTagsResponse.prototype, "paginatedTags", void 0);
    return GetRepositoriesWorkspaceRepoSlugRefsTagsResponse;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugRefsTagsResponse };
