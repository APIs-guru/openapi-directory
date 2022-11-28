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
var GetRepositoriesWorkspaceRepoSlugPullrequestsPathParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugPullrequestsPathParams, _super);
    function GetRepositoriesWorkspaceRepoSlugPullrequestsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsPathParams.prototype, "workspace", void 0);
    return GetRepositoriesWorkspaceRepoSlugPullrequestsPathParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugPullrequestsPathParams };
export var GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum;
(function (GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum) {
    GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum["Merged"] = "MERGED";
    GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum["Superseded"] = "SUPERSEDED";
    GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum["Open"] = "OPEN";
    GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum["Declined"] = "DECLINED";
})(GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum || (GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum = {}));
var GetRepositoriesWorkspaceRepoSlugPullrequestsQueryParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugPullrequestsQueryParams, _super);
    function GetRepositoriesWorkspaceRepoSlugPullrequestsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsQueryParams.prototype, "state", void 0);
    return GetRepositoriesWorkspaceRepoSlugPullrequestsQueryParams;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugPullrequestsQueryParams };
var GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity, _super);
    function GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity.prototype, "apiKey", void 0);
    return GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity };
var GetRepositoriesWorkspaceRepoSlugPullrequestsRequest = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugPullrequestsRequest, _super);
    function GetRepositoriesWorkspaceRepoSlugPullrequestsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugPullrequestsPathParams)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugPullrequestsQueryParams)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsRequest.prototype, "security", void 0);
    return GetRepositoriesWorkspaceRepoSlugPullrequestsRequest;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugPullrequestsRequest };
var GetRepositoriesWorkspaceRepoSlugPullrequestsResponse = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugPullrequestsResponse, _super);
    function GetRepositoriesWorkspaceRepoSlugPullrequestsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedPullrequests)
    ], GetRepositoriesWorkspaceRepoSlugPullrequestsResponse.prototype, "paginatedPullrequests", void 0);
    return GetRepositoriesWorkspaceRepoSlugPullrequestsResponse;
}(SpeakeasyBase));
export { GetRepositoriesWorkspaceRepoSlugPullrequestsResponse };
