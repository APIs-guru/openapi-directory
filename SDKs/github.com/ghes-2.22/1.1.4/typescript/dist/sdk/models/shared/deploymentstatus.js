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
var DeploymentStatusSimpleUser = /** @class */ (function (_super) {
    __extends(DeploymentStatusSimpleUser, _super);
    function DeploymentStatusSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], DeploymentStatusSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], DeploymentStatusSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], DeploymentStatusSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], DeploymentStatusSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], DeploymentStatusSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], DeploymentStatusSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], DeploymentStatusSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DeploymentStatusSimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], DeploymentStatusSimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], DeploymentStatusSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], DeploymentStatusSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], DeploymentStatusSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], DeploymentStatusSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], DeploymentStatusSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], DeploymentStatusSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], DeploymentStatusSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], DeploymentStatusSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DeploymentStatusSimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], DeploymentStatusSimpleUser.prototype, "url", void 0);
    return DeploymentStatusSimpleUser;
}(SpeakeasyBase));
export { DeploymentStatusSimpleUser };
export var DeploymentStatusStateEnum;
(function (DeploymentStatusStateEnum) {
    DeploymentStatusStateEnum["Error"] = "error";
    DeploymentStatusStateEnum["Failure"] = "failure";
    DeploymentStatusStateEnum["Inactive"] = "inactive";
    DeploymentStatusStateEnum["Pending"] = "pending";
    DeploymentStatusStateEnum["Success"] = "success";
    DeploymentStatusStateEnum["Queued"] = "queued";
    DeploymentStatusStateEnum["InProgress"] = "in_progress";
})(DeploymentStatusStateEnum || (DeploymentStatusStateEnum = {}));
// DeploymentStatus
/**
 * The status of a deployment.
**/
var DeploymentStatus = /** @class */ (function (_super) {
    __extends(DeploymentStatus, _super);
    function DeploymentStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], DeploymentStatus.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", DeploymentStatusSimpleUser)
    ], DeploymentStatus.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployment_url" }),
        __metadata("design:type", String)
    ], DeploymentStatus.prototype, "deploymentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DeploymentStatus.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", String)
    ], DeploymentStatus.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment_url" }),
        __metadata("design:type", String)
    ], DeploymentStatus.prototype, "environmentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DeploymentStatus.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=log_url" }),
        __metadata("design:type", String)
    ], DeploymentStatus.prototype, "logUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], DeploymentStatus.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=performed_via_github_app" }),
        __metadata("design:type", Map)
    ], DeploymentStatus.prototype, "performedViaGithubApp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository_url" }),
        __metadata("design:type", String)
    ], DeploymentStatus.prototype, "repositoryUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], DeploymentStatus.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_url" }),
        __metadata("design:type", String)
    ], DeploymentStatus.prototype, "targetUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], DeploymentStatus.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], DeploymentStatus.prototype, "url", void 0);
    return DeploymentStatus;
}(SpeakeasyBase));
export { DeploymentStatus };
