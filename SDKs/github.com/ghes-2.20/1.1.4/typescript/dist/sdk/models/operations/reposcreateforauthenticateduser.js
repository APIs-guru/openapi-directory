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
var ReposCreateForAuthenticatedUserRequestBody = /** @class */ (function (_super) {
    __extends(ReposCreateForAuthenticatedUserRequestBody, _super);
    function ReposCreateForAuthenticatedUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_merge_commit" }),
        __metadata("design:type", Boolean)
    ], ReposCreateForAuthenticatedUserRequestBody.prototype, "allowMergeCommit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_rebase_merge" }),
        __metadata("design:type", Boolean)
    ], ReposCreateForAuthenticatedUserRequestBody.prototype, "allowRebaseMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_squash_merge" }),
        __metadata("design:type", Boolean)
    ], ReposCreateForAuthenticatedUserRequestBody.prototype, "allowSquashMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auto_init" }),
        __metadata("design:type", Boolean)
    ], ReposCreateForAuthenticatedUserRequestBody.prototype, "autoInit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete_branch_on_merge" }),
        __metadata("design:type", Boolean)
    ], ReposCreateForAuthenticatedUserRequestBody.prototype, "deleteBranchOnMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReposCreateForAuthenticatedUserRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gitignore_template" }),
        __metadata("design:type", String)
    ], ReposCreateForAuthenticatedUserRequestBody.prototype, "gitignoreTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_downloads" }),
        __metadata("design:type", Boolean)
    ], ReposCreateForAuthenticatedUserRequestBody.prototype, "hasDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_issues" }),
        __metadata("design:type", Boolean)
    ], ReposCreateForAuthenticatedUserRequestBody.prototype, "hasIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_projects" }),
        __metadata("design:type", Boolean)
    ], ReposCreateForAuthenticatedUserRequestBody.prototype, "hasProjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_wiki" }),
        __metadata("design:type", Boolean)
    ], ReposCreateForAuthenticatedUserRequestBody.prototype, "hasWiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homepage" }),
        __metadata("design:type", String)
    ], ReposCreateForAuthenticatedUserRequestBody.prototype, "homepage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_template" }),
        __metadata("design:type", Boolean)
    ], ReposCreateForAuthenticatedUserRequestBody.prototype, "isTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license_template" }),
        __metadata("design:type", String)
    ], ReposCreateForAuthenticatedUserRequestBody.prototype, "licenseTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReposCreateForAuthenticatedUserRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], ReposCreateForAuthenticatedUserRequestBody.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team_id" }),
        __metadata("design:type", Number)
    ], ReposCreateForAuthenticatedUserRequestBody.prototype, "teamId", void 0);
    return ReposCreateForAuthenticatedUserRequestBody;
}(SpeakeasyBase));
export { ReposCreateForAuthenticatedUserRequestBody };
var ReposCreateForAuthenticatedUserRequest = /** @class */ (function (_super) {
    __extends(ReposCreateForAuthenticatedUserRequest, _super);
    function ReposCreateForAuthenticatedUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposCreateForAuthenticatedUserRequestBody)
    ], ReposCreateForAuthenticatedUserRequest.prototype, "request", void 0);
    return ReposCreateForAuthenticatedUserRequest;
}(SpeakeasyBase));
export { ReposCreateForAuthenticatedUserRequest };
var ReposCreateForAuthenticatedUserResponse = /** @class */ (function (_super) {
    __extends(ReposCreateForAuthenticatedUserResponse, _super);
    function ReposCreateForAuthenticatedUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposCreateForAuthenticatedUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReposCreateForAuthenticatedUserResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposCreateForAuthenticatedUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReposCreateForAuthenticatedUserResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Repository)
    ], ReposCreateForAuthenticatedUserResponse.prototype, "repository", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScimError)
    ], ReposCreateForAuthenticatedUserResponse.prototype, "scimError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReposCreateForAuthenticatedUserResponse.prototype, "validationError", void 0);
    return ReposCreateForAuthenticatedUserResponse;
}(SpeakeasyBase));
export { ReposCreateForAuthenticatedUserResponse };
