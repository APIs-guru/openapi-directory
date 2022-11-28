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
var GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipPathParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipPathParams, _super);
    function GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_name" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipPathParams.prototype, "repoName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_id" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipPathParams.prototype, "taskId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipPathParams.prototype, "workspace", void 0);
    return GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipPathParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipPathParams };
var GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipSecurity = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipSecurity, _super);
    function GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipSecurity.prototype, "apiKey", void 0);
    return GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipSecurity;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipSecurity };
var GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest, _super);
    function GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipPathParams)
    ], GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipSecurity)
    ], GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest.prototype, "security", void 0);
    return GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest };
var GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipResponse = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipResponse, _super);
    function GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.IssueJobStatus)
    ], GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipResponse.prototype, "issueJobStatus", void 0);
    return GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipResponse;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipResponse };
