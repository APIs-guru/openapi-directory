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
var GetRepositoriesWorkspaceRepoSlugVersionsVersionIdPathParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugVersionsVersionIdPathParams, _super);
    function GetRepositoriesWorkspaceRepoSlugVersionsVersionIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugVersionsVersionIdPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version_id" }),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugVersionsVersionIdPathParams.prototype, "versionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugVersionsVersionIdPathParams.prototype, "workspace", void 0);
    return GetRepositoriesWorkspaceRepoSlugVersionsVersionIdPathParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugVersionsVersionIdPathParams };
var GetRepositoriesWorkspaceRepoSlugVersionsVersionIdSecurity = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugVersionsVersionIdSecurity, _super);
    function GetRepositoriesWorkspaceRepoSlugVersionsVersionIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetRepositoriesWorkspaceRepoSlugVersionsVersionIdSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetRepositoriesWorkspaceRepoSlugVersionsVersionIdSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetRepositoriesWorkspaceRepoSlugVersionsVersionIdSecurity.prototype, "apiKey", void 0);
    return GetRepositoriesWorkspaceRepoSlugVersionsVersionIdSecurity;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugVersionsVersionIdSecurity };
var GetRepositoriesWorkspaceRepoSlugVersionsVersionIdRequest = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugVersionsVersionIdRequest, _super);
    function GetRepositoriesWorkspaceRepoSlugVersionsVersionIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugVersionsVersionIdPathParams)
    ], GetRepositoriesWorkspaceRepoSlugVersionsVersionIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugVersionsVersionIdSecurity)
    ], GetRepositoriesWorkspaceRepoSlugVersionsVersionIdRequest.prototype, "security", void 0);
    return GetRepositoriesWorkspaceRepoSlugVersionsVersionIdRequest;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugVersionsVersionIdRequest };
var GetRepositoriesWorkspaceRepoSlugVersionsVersionIdResponse = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugVersionsVersionIdResponse, _super);
    function GetRepositoriesWorkspaceRepoSlugVersionsVersionIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugVersionsVersionIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugVersionsVersionIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoriesWorkspaceRepoSlugVersionsVersionIdResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoriesWorkspaceRepoSlugVersionsVersionIdResponse.prototype, "version", void 0);
    return GetRepositoriesWorkspaceRepoSlugVersionsVersionIdResponse;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugVersionsVersionIdResponse };
