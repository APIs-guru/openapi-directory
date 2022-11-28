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
var DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams = /** @class */ (function (_super) {
    __extends(DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams, _super);
    function DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams.prototype, "workspace", void 0);
    return DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams;
}(SpeakeasyBase));
export { DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams };
var DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity = /** @class */ (function (_super) {
    __extends(DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity, _super);
    function DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity.prototype, "apiKey", void 0);
    return DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity;
}(SpeakeasyBase));
export { DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity };
var DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest = /** @class */ (function (_super) {
    __extends(DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest, _super);
    function DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams)
    ], DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity)
    ], DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest.prototype, "security", void 0);
    return DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest;
}(SpeakeasyBase));
export { DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest };
var DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse = /** @class */ (function (_super) {
    __extends(DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse, _super);
    function DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse.prototype, "error", void 0);
    return DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse;
}(SpeakeasyBase));
export { DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse };
