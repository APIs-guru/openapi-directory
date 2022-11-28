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
var PutRepositoriesWorkspaceRepoSlugPathParams = /** @class */ (function (_super) {
    __extends(PutRepositoriesWorkspaceRepoSlugPathParams, _super);
    function PutRepositoriesWorkspaceRepoSlugPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], PutRepositoriesWorkspaceRepoSlugPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], PutRepositoriesWorkspaceRepoSlugPathParams.prototype, "workspace", void 0);
    return PutRepositoriesWorkspaceRepoSlugPathParams;
}(SpeakeasyBase));
export { PutRepositoriesWorkspaceRepoSlugPathParams };
var PutRepositoriesWorkspaceRepoSlugSecurity = /** @class */ (function (_super) {
    __extends(PutRepositoriesWorkspaceRepoSlugSecurity, _super);
    function PutRepositoriesWorkspaceRepoSlugSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PutRepositoriesWorkspaceRepoSlugSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], PutRepositoriesWorkspaceRepoSlugSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PutRepositoriesWorkspaceRepoSlugSecurity.prototype, "apiKey", void 0);
    return PutRepositoriesWorkspaceRepoSlugSecurity;
}(SpeakeasyBase));
export { PutRepositoriesWorkspaceRepoSlugSecurity };
var PutRepositoriesWorkspaceRepoSlugRequest = /** @class */ (function (_super) {
    __extends(PutRepositoriesWorkspaceRepoSlugRequest, _super);
    function PutRepositoriesWorkspaceRepoSlugRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutRepositoriesWorkspaceRepoSlugPathParams)
    ], PutRepositoriesWorkspaceRepoSlugRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], PutRepositoriesWorkspaceRepoSlugRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutRepositoriesWorkspaceRepoSlugSecurity)
    ], PutRepositoriesWorkspaceRepoSlugRequest.prototype, "security", void 0);
    return PutRepositoriesWorkspaceRepoSlugRequest;
}(SpeakeasyBase));
export { PutRepositoriesWorkspaceRepoSlugRequest };
var PutRepositoriesWorkspaceRepoSlugResponse = /** @class */ (function (_super) {
    __extends(PutRepositoriesWorkspaceRepoSlugResponse, _super);
    function PutRepositoriesWorkspaceRepoSlugResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutRepositoriesWorkspaceRepoSlugResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutRepositoriesWorkspaceRepoSlugResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutRepositoriesWorkspaceRepoSlugResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutRepositoriesWorkspaceRepoSlugResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutRepositoriesWorkspaceRepoSlugResponse.prototype, "repository", void 0);
    return PutRepositoriesWorkspaceRepoSlugResponse;
}(SpeakeasyBase));
export { PutRepositoriesWorkspaceRepoSlugResponse };
