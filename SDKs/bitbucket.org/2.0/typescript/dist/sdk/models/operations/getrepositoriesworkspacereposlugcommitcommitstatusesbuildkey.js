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
var GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams, _super);
    function GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commit" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams.prototype, "commit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams.prototype, "workspace", void 0);
    return GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams };
var GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity, _super);
    function GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity.prototype, "apiKey", void 0);
    return GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity };
var GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest, _super);
    function GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest.prototype, "security", void 0);
    return GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest };
var GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse, _super);
    function GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse.prototype, "commitstatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse.prototype, "error", void 0);
    return GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse };
