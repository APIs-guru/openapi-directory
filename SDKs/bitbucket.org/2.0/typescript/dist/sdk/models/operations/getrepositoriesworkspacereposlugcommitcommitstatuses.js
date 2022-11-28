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
var GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesPathParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesPathParams, _super);
    function GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commit" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesPathParams.prototype, "commit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesPathParams.prototype, "workspace", void 0);
    return GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesPathParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesPathParams };
var GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryParams, _super);
    function GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryParams.prototype, "sort", void 0);
    return GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryParams };
var GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurity = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurity, _super);
    function GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurity.prototype, "apiKey", void 0);
    return GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurity;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurity };
var GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest, _super);
    function GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesPathParams)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryParams)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurity)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest.prototype, "security", void 0);
    return GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest };
var GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse, _super);
    function GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedCommitstatuses)
    ], GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse.prototype, "paginatedCommitstatuses", void 0);
    return GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse };
