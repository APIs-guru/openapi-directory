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
var GetRepositoriesWorkspaceRepoSlugIssuesPathParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugIssuesPathParams, _super);
    function GetRepositoriesWorkspaceRepoSlugIssuesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugIssuesPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugIssuesPathParams.prototype, "workspace", void 0);
    return GetRepositoriesWorkspaceRepoSlugIssuesPathParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugIssuesPathParams };
var GetRepositoriesWorkspaceRepoSlugIssuesSecurity = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugIssuesSecurity, _super);
    function GetRepositoriesWorkspaceRepoSlugIssuesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetRepositoriesWorkspaceRepoSlugIssuesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetRepositoriesWorkspaceRepoSlugIssuesSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetRepositoriesWorkspaceRepoSlugIssuesSecurity.prototype, "apiKey", void 0);
    return GetRepositoriesWorkspaceRepoSlugIssuesSecurity;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugIssuesSecurity };
var GetRepositoriesWorkspaceRepoSlugIssuesRequest = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugIssuesRequest, _super);
    function GetRepositoriesWorkspaceRepoSlugIssuesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugIssuesPathParams)
    ], GetRepositoriesWorkspaceRepoSlugIssuesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugIssuesSecurity)
    ], GetRepositoriesWorkspaceRepoSlugIssuesRequest.prototype, "security", void 0);
    return GetRepositoriesWorkspaceRepoSlugIssuesRequest;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugIssuesRequest };
var GetRepositoriesWorkspaceRepoSlugIssuesResponse = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugIssuesResponse, _super);
    function GetRepositoriesWorkspaceRepoSlugIssuesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugIssuesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugIssuesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoriesWorkspaceRepoSlugIssuesResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedIssues)
    ], GetRepositoriesWorkspaceRepoSlugIssuesResponse.prototype, "paginatedIssues", void 0);
    return GetRepositoriesWorkspaceRepoSlugIssuesResponse;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugIssuesResponse };
