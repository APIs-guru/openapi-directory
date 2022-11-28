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
var GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams, _super);
    function GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spec" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams.prototype, "spec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams.prototype, "workspace", void 0);
    return GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams };
var GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams, _super);
    function GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignore_whitespace" }),
        __metadata("design:type", Boolean)
    ], GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams.prototype, "ignoreWhitespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=merge" }),
        __metadata("design:type", Boolean)
    ], GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams.prototype, "merge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=renames" }),
        __metadata("design:type", Boolean)
    ], GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams.prototype, "renames", void 0);
    return GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams };
var GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity, _super);
    function GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity.prototype, "apiKey", void 0);
    return GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity };
var GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest, _super);
    function GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams)
    ], GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams)
    ], GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity)
    ], GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest.prototype, "security", void 0);
    return GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest };
var GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse, _super);
    function GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedDiffstats)
    ], GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse.prototype, "paginatedDiffstats", void 0);
    return GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse };
