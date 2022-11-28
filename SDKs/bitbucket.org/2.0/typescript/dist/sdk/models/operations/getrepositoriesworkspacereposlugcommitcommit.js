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
var GetRepositoriesWorkspaceRepoSlugCommitCommitPathParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugCommitCommitPathParams, _super);
    function GetRepositoriesWorkspaceRepoSlugCommitCommitPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commit" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitPathParams.prototype, "commit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitPathParams.prototype, "workspace", void 0);
    return GetRepositoriesWorkspaceRepoSlugCommitCommitPathParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugCommitCommitPathParams };
var GetRepositoriesWorkspaceRepoSlugCommitCommitSecurity = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugCommitCommitSecurity, _super);
    function GetRepositoriesWorkspaceRepoSlugCommitCommitSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitSecurity.prototype, "apiKey", void 0);
    return GetRepositoriesWorkspaceRepoSlugCommitCommitSecurity;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugCommitCommitSecurity };
var GetRepositoriesWorkspaceRepoSlugCommitCommitRequest = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugCommitCommitRequest, _super);
    function GetRepositoriesWorkspaceRepoSlugCommitCommitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugCommitCommitPathParams)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugCommitCommitSecurity)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitRequest.prototype, "security", void 0);
    return GetRepositoriesWorkspaceRepoSlugCommitCommitRequest;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugCommitCommitRequest };
var GetRepositoriesWorkspaceRepoSlugCommitCommitResponse = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugCommitCommitResponse, _super);
    function GetRepositoriesWorkspaceRepoSlugCommitCommitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitResponse.prototype, "commit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitResponse.prototype, "error", void 0);
    return GetRepositoriesWorkspaceRepoSlugCommitCommitResponse;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugCommitCommitResponse };
