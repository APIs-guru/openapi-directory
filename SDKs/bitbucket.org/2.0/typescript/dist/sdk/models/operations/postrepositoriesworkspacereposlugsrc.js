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
var PostRepositoriesWorkspaceRepoSlugSrcPathParams = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugSrcPathParams, _super);
    function PostRepositoriesWorkspaceRepoSlugSrcPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], PostRepositoriesWorkspaceRepoSlugSrcPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], PostRepositoriesWorkspaceRepoSlugSrcPathParams.prototype, "workspace", void 0);
    return PostRepositoriesWorkspaceRepoSlugSrcPathParams;
}(SpeakeasyBase));
export { PostRepositoriesWorkspaceRepoSlugSrcPathParams };
var PostRepositoriesWorkspaceRepoSlugSrcQueryParams = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugSrcQueryParams, _super);
    function PostRepositoriesWorkspaceRepoSlugSrcQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=author" }),
        __metadata("design:type", String)
    ], PostRepositoriesWorkspaceRepoSlugSrcQueryParams.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=branch" }),
        __metadata("design:type", String)
    ], PostRepositoriesWorkspaceRepoSlugSrcQueryParams.prototype, "branch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=files" }),
        __metadata("design:type", String)
    ], PostRepositoriesWorkspaceRepoSlugSrcQueryParams.prototype, "files", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=message" }),
        __metadata("design:type", String)
    ], PostRepositoriesWorkspaceRepoSlugSrcQueryParams.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parents" }),
        __metadata("design:type", String)
    ], PostRepositoriesWorkspaceRepoSlugSrcQueryParams.prototype, "parents", void 0);
    return PostRepositoriesWorkspaceRepoSlugSrcQueryParams;
}(SpeakeasyBase));
export { PostRepositoriesWorkspaceRepoSlugSrcQueryParams };
var PostRepositoriesWorkspaceRepoSlugSrcSecurity = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugSrcSecurity, _super);
    function PostRepositoriesWorkspaceRepoSlugSrcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PostRepositoriesWorkspaceRepoSlugSrcSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], PostRepositoriesWorkspaceRepoSlugSrcSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PostRepositoriesWorkspaceRepoSlugSrcSecurity.prototype, "apiKey", void 0);
    return PostRepositoriesWorkspaceRepoSlugSrcSecurity;
}(SpeakeasyBase));
export { PostRepositoriesWorkspaceRepoSlugSrcSecurity };
var PostRepositoriesWorkspaceRepoSlugSrcRequest = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugSrcRequest, _super);
    function PostRepositoriesWorkspaceRepoSlugSrcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRepositoriesWorkspaceRepoSlugSrcPathParams)
    ], PostRepositoriesWorkspaceRepoSlugSrcRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRepositoriesWorkspaceRepoSlugSrcQueryParams)
    ], PostRepositoriesWorkspaceRepoSlugSrcRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRepositoriesWorkspaceRepoSlugSrcSecurity)
    ], PostRepositoriesWorkspaceRepoSlugSrcRequest.prototype, "security", void 0);
    return PostRepositoriesWorkspaceRepoSlugSrcRequest;
}(SpeakeasyBase));
export { PostRepositoriesWorkspaceRepoSlugSrcRequest };
var PostRepositoriesWorkspaceRepoSlugSrcResponse = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugSrcResponse, _super);
    function PostRepositoriesWorkspaceRepoSlugSrcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostRepositoriesWorkspaceRepoSlugSrcResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostRepositoriesWorkspaceRepoSlugSrcResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostRepositoriesWorkspaceRepoSlugSrcResponse.prototype, "error", void 0);
    return PostRepositoriesWorkspaceRepoSlugSrcResponse;
}(SpeakeasyBase));
export { PostRepositoriesWorkspaceRepoSlugSrcResponse };
