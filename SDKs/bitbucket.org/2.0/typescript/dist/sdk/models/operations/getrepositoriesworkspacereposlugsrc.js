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
var GetRepositoriesWorkspaceRepoSlugSrcPathParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugSrcPathParams, _super);
    function GetRepositoriesWorkspaceRepoSlugSrcPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugSrcPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugSrcPathParams.prototype, "workspace", void 0);
    return GetRepositoriesWorkspaceRepoSlugSrcPathParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugSrcPathParams };
export var GetRepositoriesWorkspaceRepoSlugSrcFormatEnum;
(function (GetRepositoriesWorkspaceRepoSlugSrcFormatEnum) {
    GetRepositoriesWorkspaceRepoSlugSrcFormatEnum["Meta"] = "meta";
})(GetRepositoriesWorkspaceRepoSlugSrcFormatEnum || (GetRepositoriesWorkspaceRepoSlugSrcFormatEnum = {}));
var GetRepositoriesWorkspaceRepoSlugSrcQueryParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugSrcQueryParams, _super);
    function GetRepositoriesWorkspaceRepoSlugSrcQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugSrcQueryParams.prototype, "format", void 0);
    return GetRepositoriesWorkspaceRepoSlugSrcQueryParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugSrcQueryParams };
var GetRepositoriesWorkspaceRepoSlugSrcSecurity = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugSrcSecurity, _super);
    function GetRepositoriesWorkspaceRepoSlugSrcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetRepositoriesWorkspaceRepoSlugSrcSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetRepositoriesWorkspaceRepoSlugSrcSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetRepositoriesWorkspaceRepoSlugSrcSecurity.prototype, "apiKey", void 0);
    return GetRepositoriesWorkspaceRepoSlugSrcSecurity;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugSrcSecurity };
var GetRepositoriesWorkspaceRepoSlugSrcRequest = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugSrcRequest, _super);
    function GetRepositoriesWorkspaceRepoSlugSrcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugSrcPathParams)
    ], GetRepositoriesWorkspaceRepoSlugSrcRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugSrcQueryParams)
    ], GetRepositoriesWorkspaceRepoSlugSrcRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugSrcSecurity)
    ], GetRepositoriesWorkspaceRepoSlugSrcRequest.prototype, "security", void 0);
    return GetRepositoriesWorkspaceRepoSlugSrcRequest;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugSrcRequest };
var GetRepositoriesWorkspaceRepoSlugSrcResponse = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugSrcResponse, _super);
    function GetRepositoriesWorkspaceRepoSlugSrcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugSrcResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugSrcResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoriesWorkspaceRepoSlugSrcResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedTreeentries)
    ], GetRepositoriesWorkspaceRepoSlugSrcResponse.prototype, "paginatedTreeentries", void 0);
    return GetRepositoriesWorkspaceRepoSlugSrcResponse;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugSrcResponse };
