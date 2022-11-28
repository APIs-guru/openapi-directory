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
var GetRepositoriesWorkspaceRepoSlugHooksUidPathParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugHooksUidPathParams, _super);
    function GetRepositoriesWorkspaceRepoSlugHooksUidPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugHooksUidPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uid" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugHooksUidPathParams.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugHooksUidPathParams.prototype, "workspace", void 0);
    return GetRepositoriesWorkspaceRepoSlugHooksUidPathParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugHooksUidPathParams };
var GetRepositoriesWorkspaceRepoSlugHooksUidSecurity = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugHooksUidSecurity, _super);
    function GetRepositoriesWorkspaceRepoSlugHooksUidSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetRepositoriesWorkspaceRepoSlugHooksUidSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetRepositoriesWorkspaceRepoSlugHooksUidSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetRepositoriesWorkspaceRepoSlugHooksUidSecurity.prototype, "apiKey", void 0);
    return GetRepositoriesWorkspaceRepoSlugHooksUidSecurity;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugHooksUidSecurity };
var GetRepositoriesWorkspaceRepoSlugHooksUidRequest = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugHooksUidRequest, _super);
    function GetRepositoriesWorkspaceRepoSlugHooksUidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugHooksUidPathParams)
    ], GetRepositoriesWorkspaceRepoSlugHooksUidRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugHooksUidSecurity)
    ], GetRepositoriesWorkspaceRepoSlugHooksUidRequest.prototype, "security", void 0);
    return GetRepositoriesWorkspaceRepoSlugHooksUidRequest;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugHooksUidRequest };
var GetRepositoriesWorkspaceRepoSlugHooksUidResponse = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugHooksUidResponse, _super);
    function GetRepositoriesWorkspaceRepoSlugHooksUidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugHooksUidResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugHooksUidResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoriesWorkspaceRepoSlugHooksUidResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoriesWorkspaceRepoSlugHooksUidResponse.prototype, "webhookSubscription", void 0);
    return GetRepositoriesWorkspaceRepoSlugHooksUidResponse;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugHooksUidResponse };
