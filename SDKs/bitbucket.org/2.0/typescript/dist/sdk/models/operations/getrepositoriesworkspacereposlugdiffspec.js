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
var GetRepositoriesWorkspaceRepoSlugDiffSpecPathParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugDiffSpecPathParams, _super);
    function GetRepositoriesWorkspaceRepoSlugDiffSpecPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugDiffSpecPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spec" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugDiffSpecPathParams.prototype, "spec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugDiffSpecPathParams.prototype, "workspace", void 0);
    return GetRepositoriesWorkspaceRepoSlugDiffSpecPathParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugDiffSpecPathParams };
var GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams, _super);
    function GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=binary" }),
        __metadata("design:type", Boolean)
    ], GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams.prototype, "binary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=context" }),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams.prototype, "context", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignore_whitespace" }),
        __metadata("design:type", Boolean)
    ], GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams.prototype, "ignoreWhitespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=merge" }),
        __metadata("design:type", Boolean)
    ], GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams.prototype, "merge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=renames" }),
        __metadata("design:type", Boolean)
    ], GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams.prototype, "renames", void 0);
    return GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams };
var GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity, _super);
    function GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity.prototype, "apiKey", void 0);
    return GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity };
var GetRepositoriesWorkspaceRepoSlugDiffSpecRequest = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugDiffSpecRequest, _super);
    function GetRepositoriesWorkspaceRepoSlugDiffSpecRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugDiffSpecPathParams)
    ], GetRepositoriesWorkspaceRepoSlugDiffSpecRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams)
    ], GetRepositoriesWorkspaceRepoSlugDiffSpecRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity)
    ], GetRepositoriesWorkspaceRepoSlugDiffSpecRequest.prototype, "security", void 0);
    return GetRepositoriesWorkspaceRepoSlugDiffSpecRequest;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugDiffSpecRequest };
var GetRepositoriesWorkspaceRepoSlugDiffSpecResponse = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugDiffSpecResponse, _super);
    function GetRepositoriesWorkspaceRepoSlugDiffSpecResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugDiffSpecResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugDiffSpecResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoriesWorkspaceRepoSlugDiffSpecResponse.prototype, "error", void 0);
    return GetRepositoriesWorkspaceRepoSlugDiffSpecResponse;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugDiffSpecResponse };
