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
var PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams = /** @class */ (function (_super) {
    __extends(PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams, _super);
    function PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commit" }),
        __metadata("design:type", String)
    ], PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams.prototype, "commit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" }),
        __metadata("design:type", String)
    ], PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams.prototype, "workspace", void 0);
    return PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams;
}(SpeakeasyBase));
export { PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams };
var PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity = /** @class */ (function (_super) {
    __extends(PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity, _super);
    function PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity.prototype, "apiKey", void 0);
    return PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity;
}(SpeakeasyBase));
export { PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity };
var PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest = /** @class */ (function (_super) {
    __extends(PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest, _super);
    function PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams)
    ], PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity)
    ], PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest.prototype, "security", void 0);
    return PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest;
}(SpeakeasyBase));
export { PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest };
var PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse = /** @class */ (function (_super) {
    __extends(PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse, _super);
    function PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse.prototype, "commitstatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse.prototype, "error", void 0);
    return PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse;
}(SpeakeasyBase));
export { PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse };
