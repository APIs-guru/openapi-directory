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
var MetaRoot200ApplicationJson = /** @class */ (function (_super) {
    __extends(MetaRoot200ApplicationJson, _super);
    function MetaRoot200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizations_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "authorizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code_search_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "codeSearchUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commit_search_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "commitSearchUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_user_authorizations_html_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "currentUserAuthorizationsHtmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_user_repositories_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "currentUserRepositoriesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_user_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "currentUserUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "emailsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emojis_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "emojisUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feeds_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "feedsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hub_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "hubUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_search_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "issueSearchUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issues_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "issuesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keys_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "keysUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_search_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "labelSearchUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifications_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "notificationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_repositories_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "organizationRepositoriesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_teams_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "organizationTeamsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "organizationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_gists_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "publicGistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate_limit_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "rateLimitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository_search_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "repositorySearchUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "repositoryUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_gists_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "starredGistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_search_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "topicSearchUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_organizations_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "userOrganizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_repositories_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "userRepositoriesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_search_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "userSearchUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_url" }),
        __metadata("design:type", String)
    ], MetaRoot200ApplicationJson.prototype, "userUrl", void 0);
    return MetaRoot200ApplicationJson;
}(SpeakeasyBase));
export { MetaRoot200ApplicationJson };
var MetaRootResponse = /** @class */ (function (_super) {
    __extends(MetaRootResponse, _super);
    function MetaRootResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetaRootResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MetaRootResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MetaRoot200ApplicationJson)
    ], MetaRootResponse.prototype, "metaRoot200ApplicationJsonObject", void 0);
    return MetaRootResponse;
}(SpeakeasyBase));
export { MetaRootResponse };
