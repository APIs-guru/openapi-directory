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
var PostRepositoriesWorkspaceRepoSlugDeployKeysPathParams = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugDeployKeysPathParams, _super);
    function PostRepositoriesWorkspaceRepoSlugDeployKeysPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], PostRepositoriesWorkspaceRepoSlugDeployKeysPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], PostRepositoriesWorkspaceRepoSlugDeployKeysPathParams.prototype, "workspace", void 0);
    return PostRepositoriesWorkspaceRepoSlugDeployKeysPathParams;
}(SpeakeasyBase));
export { PostRepositoriesWorkspaceRepoSlugDeployKeysPathParams };
var PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity, _super);
    function PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity.prototype, "apiKey", void 0);
    return PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity;
}(SpeakeasyBase));
export { PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity };
var PostRepositoriesWorkspaceRepoSlugDeployKeysRequest = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugDeployKeysRequest, _super);
    function PostRepositoriesWorkspaceRepoSlugDeployKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRepositoriesWorkspaceRepoSlugDeployKeysPathParams)
    ], PostRepositoriesWorkspaceRepoSlugDeployKeysRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity)
    ], PostRepositoriesWorkspaceRepoSlugDeployKeysRequest.prototype, "security", void 0);
    return PostRepositoriesWorkspaceRepoSlugDeployKeysRequest;
}(SpeakeasyBase));
export { PostRepositoriesWorkspaceRepoSlugDeployKeysRequest };
var PostRepositoriesWorkspaceRepoSlugDeployKeysResponse = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugDeployKeysResponse, _super);
    function PostRepositoriesWorkspaceRepoSlugDeployKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostRepositoriesWorkspaceRepoSlugDeployKeysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostRepositoriesWorkspaceRepoSlugDeployKeysResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostRepositoriesWorkspaceRepoSlugDeployKeysResponse.prototype, "deployKey", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostRepositoriesWorkspaceRepoSlugDeployKeysResponse.prototype, "error", void 0);
    return PostRepositoriesWorkspaceRepoSlugDeployKeysResponse;
}(SpeakeasyBase));
export { PostRepositoriesWorkspaceRepoSlugDeployKeysResponse };
