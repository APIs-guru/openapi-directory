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
var ReposCreateInOrgPathParams = /** @class */ (function (_super) {
    __extends(ReposCreateInOrgPathParams, _super);
    function ReposCreateInOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ReposCreateInOrgPathParams.prototype, "org", void 0);
    return ReposCreateInOrgPathParams;
}(SpeakeasyBase));
export { ReposCreateInOrgPathParams };
export var ReposCreateInOrgRequestBodyVisibilityEnum;
(function (ReposCreateInOrgRequestBodyVisibilityEnum) {
    ReposCreateInOrgRequestBodyVisibilityEnum["Public"] = "public";
    ReposCreateInOrgRequestBodyVisibilityEnum["Private"] = "private";
    ReposCreateInOrgRequestBodyVisibilityEnum["Visibility"] = "visibility";
    ReposCreateInOrgRequestBodyVisibilityEnum["Internal"] = "internal";
})(ReposCreateInOrgRequestBodyVisibilityEnum || (ReposCreateInOrgRequestBodyVisibilityEnum = {}));
var ReposCreateInOrgRequestBody = /** @class */ (function (_super) {
    __extends(ReposCreateInOrgRequestBody, _super);
    function ReposCreateInOrgRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_merge_commit" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "allowMergeCommit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_rebase_merge" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "allowRebaseMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_squash_merge" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "allowSquashMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auto_init" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "autoInit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete_branch_on_merge" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "deleteBranchOnMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReposCreateInOrgRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gitignore_template" }),
        __metadata("design:type", String)
    ], ReposCreateInOrgRequestBody.prototype, "gitignoreTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_issues" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "hasIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_projects" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "hasProjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_wiki" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "hasWiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homepage" }),
        __metadata("design:type", String)
    ], ReposCreateInOrgRequestBody.prototype, "homepage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_template" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "isTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license_template" }),
        __metadata("design:type", String)
    ], ReposCreateInOrgRequestBody.prototype, "licenseTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReposCreateInOrgRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team_id" }),
        __metadata("design:type", Number)
    ], ReposCreateInOrgRequestBody.prototype, "teamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], ReposCreateInOrgRequestBody.prototype, "visibility", void 0);
    return ReposCreateInOrgRequestBody;
}(SpeakeasyBase));
export { ReposCreateInOrgRequestBody };
var ReposCreateInOrgRequest = /** @class */ (function (_super) {
    __extends(ReposCreateInOrgRequest, _super);
    function ReposCreateInOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposCreateInOrgPathParams)
    ], ReposCreateInOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposCreateInOrgRequestBody)
    ], ReposCreateInOrgRequest.prototype, "request", void 0);
    return ReposCreateInOrgRequest;
}(SpeakeasyBase));
export { ReposCreateInOrgRequest };
var ReposCreateInOrgResponse = /** @class */ (function (_super) {
    __extends(ReposCreateInOrgResponse, _super);
    function ReposCreateInOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposCreateInOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReposCreateInOrgResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposCreateInOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReposCreateInOrgResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Repository)
    ], ReposCreateInOrgResponse.prototype, "repository", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReposCreateInOrgResponse.prototype, "validationError", void 0);
    return ReposCreateInOrgResponse;
}(SpeakeasyBase));
export { ReposCreateInOrgResponse };
