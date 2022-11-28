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
var GetRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams, _super);
    function GetRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams.prototype, "workspace", void 0);
    return GetRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams };
var GetRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryParams, _super);
    function GetRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=kind" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryParams.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pattern" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryParams.prototype, "pattern", void 0);
    return GetRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryParams };
var GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity, _super);
    function GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity.prototype, "apiKey", void 0);
    return GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity };
var GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest, _super);
    function GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams)
    ], GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryParams)
    ], GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity)
    ], GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest.prototype, "security", void 0);
    return GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest };
var GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse, _super);
    function GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedBranchrestrictions)
    ], GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse.prototype, "paginatedBranchrestrictions", void 0);
    return GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse };
