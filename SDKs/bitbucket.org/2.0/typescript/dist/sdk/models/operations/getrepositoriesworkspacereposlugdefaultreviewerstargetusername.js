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
var GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams, _super);
    function GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_username" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams.prototype, "targetUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams.prototype, "workspace", void 0);
    return GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams };
var GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity, _super);
    function GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity.prototype, "apiKey", void 0);
    return GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity };
var GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest, _super);
    function GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams)
    ], GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity)
    ], GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest.prototype, "security", void 0);
    return GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest };
var GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse, _super);
    function GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse.prototype, "error", void 0);
    return GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse };
