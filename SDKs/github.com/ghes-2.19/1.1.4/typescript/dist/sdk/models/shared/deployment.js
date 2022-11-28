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
var DeploymentSimpleUser = /** @class */ (function (_super) {
    __extends(DeploymentSimpleUser, _super);
    function DeploymentSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], DeploymentSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], DeploymentSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], DeploymentSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], DeploymentSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], DeploymentSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], DeploymentSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], DeploymentSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DeploymentSimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], DeploymentSimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], DeploymentSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], DeploymentSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], DeploymentSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], DeploymentSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], DeploymentSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], DeploymentSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], DeploymentSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], DeploymentSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DeploymentSimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], DeploymentSimpleUser.prototype, "url", void 0);
    return DeploymentSimpleUser;
}(SpeakeasyBase));
export { DeploymentSimpleUser };
// Deployment
/**
 * A request for a specific ref(branch,sha,tag) to be deployed
**/
var Deployment = /** @class */ (function (_super) {
    __extends(Deployment, _super);
    function Deployment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Deployment.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", DeploymentSimpleUser)
    ], Deployment.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Deployment.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_environment" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "originalEnvironment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload" }),
        __metadata("design:type", Object)
    ], Deployment.prototype, "payload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=performed_via_github_app" }),
        __metadata("design:type", Map)
    ], Deployment.prototype, "performedViaGithubApp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=production_environment" }),
        __metadata("design:type", Boolean)
    ], Deployment.prototype, "productionEnvironment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository_url" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "repositoryUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statuses_url" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "statusesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=task" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "task", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transient_environment" }),
        __metadata("design:type", Boolean)
    ], Deployment.prototype, "transientEnvironment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Deployment.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "url", void 0);
    return Deployment;
}(SpeakeasyBase));
export { Deployment };
