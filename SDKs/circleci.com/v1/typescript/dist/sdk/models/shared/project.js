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
import { Aws } from "./aws";
var ProjectFeatureFlags = /** @class */ (function (_super) {
    __extends(ProjectFeatureFlags, _super);
    function ProjectFeatureFlags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build-fork-prs" }),
        __metadata("design:type", Boolean)
    ], ProjectFeatureFlags.prototype, "buildForkPrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fleet" }),
        __metadata("design:type", Boolean)
    ], ProjectFeatureFlags.prototype, "fleet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=junit" }),
        __metadata("design:type", Boolean)
    ], ProjectFeatureFlags.prototype, "junit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oss" }),
        __metadata("design:type", Boolean)
    ], ProjectFeatureFlags.prototype, "oss", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osx" }),
        __metadata("design:type", Boolean)
    ], ProjectFeatureFlags.prototype, "osx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=set-github-status" }),
        __metadata("design:type", Boolean)
    ], ProjectFeatureFlags.prototype, "setGithubStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trusty-beta" }),
        __metadata("design:type", Boolean)
    ], ProjectFeatureFlags.prototype, "trustyBeta", void 0);
    return ProjectFeatureFlags;
}(SpeakeasyBase));
export { ProjectFeatureFlags };
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aws" }),
        __metadata("design:type", Aws)
    ], Project.prototype, "aws", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branches" }),
        __metadata("design:type", Map)
    ], Project.prototype, "branches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campfire_notify_prefs" }),
        __metadata("design:type", String)
    ], Project.prototype, "campfireNotifyPrefs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campfire_room" }),
        __metadata("design:type", String)
    ], Project.prototype, "campfireRoom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campfire_subdomain" }),
        __metadata("design:type", String)
    ], Project.prototype, "campfireSubdomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campfire_token" }),
        __metadata("design:type", String)
    ], Project.prototype, "campfireToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compile" }),
        __metadata("design:type", String)
    ], Project.prototype, "compile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_branch" }),
        __metadata("design:type", String)
    ], Project.prototype, "defaultBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dependencies" }),
        __metadata("design:type", String)
    ], Project.prototype, "dependencies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extra" }),
        __metadata("design:type", String)
    ], Project.prototype, "extra", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feature_flags" }),
        __metadata("design:type", ProjectFeatureFlags)
    ], Project.prototype, "featureFlags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flowdock_api_token" }),
        __metadata("design:type", String)
    ], Project.prototype, "flowdockApiToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followed" }),
        __metadata("design:type", Boolean)
    ], Project.prototype, "followed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_usable_key" }),
        __metadata("design:type", Boolean)
    ], Project.prototype, "hasUsableKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=heroku_deploy_user" }),
        __metadata("design:type", String)
    ], Project.prototype, "herokuDeployUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hipchat_api_token" }),
        __metadata("design:type", String)
    ], Project.prototype, "hipchatApiToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hipchat_notify" }),
        __metadata("design:type", String)
    ], Project.prototype, "hipchatNotify", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hipchat_notify_prefs" }),
        __metadata("design:type", String)
    ], Project.prototype, "hipchatNotifyPrefs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hipchat_room" }),
        __metadata("design:type", String)
    ], Project.prototype, "hipchatRoom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=irc_channel" }),
        __metadata("design:type", String)
    ], Project.prototype, "ircChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=irc_keyword" }),
        __metadata("design:type", String)
    ], Project.prototype, "ircKeyword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=irc_notify_prefs" }),
        __metadata("design:type", String)
    ], Project.prototype, "ircNotifyPrefs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=irc_password" }),
        __metadata("design:type", String)
    ], Project.prototype, "ircPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=irc_server" }),
        __metadata("design:type", String)
    ], Project.prototype, "ircServer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=irc_username" }),
        __metadata("design:type", String)
    ], Project.prototype, "ircUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], Project.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oss" }),
        __metadata("design:type", Boolean)
    ], Project.prototype, "oss", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parallel" }),
        __metadata("design:type", Number)
    ], Project.prototype, "parallel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reponame" }),
        __metadata("design:type", String)
    ], Project.prototype, "reponame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", Array)
    ], Project.prototype, "scopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=setup" }),
        __metadata("design:type", String)
    ], Project.prototype, "setup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slack_api_token" }),
        __metadata("design:type", String)
    ], Project.prototype, "slackApiToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slack_channel" }),
        __metadata("design:type", String)
    ], Project.prototype, "slackChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slack_channel_override" }),
        __metadata("design:type", String)
    ], Project.prototype, "slackChannelOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slack_notify_prefs" }),
        __metadata("design:type", String)
    ], Project.prototype, "slackNotifyPrefs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slack_subdomain" }),
        __metadata("design:type", String)
    ], Project.prototype, "slackSubdomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slack_webhook_url" }),
        __metadata("design:type", String)
    ], Project.prototype, "slackWebhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_keys" }),
        __metadata("design:type", Array)
    ], Project.prototype, "sshKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=test" }),
        __metadata("design:type", String)
    ], Project.prototype, "test", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], Project.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vcs_type" }),
        __metadata("design:type", String)
    ], Project.prototype, "vcsType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vcs_url" }),
        __metadata("design:type", String)
    ], Project.prototype, "vcsUrl", void 0);
    return Project;
}(SpeakeasyBase));
export { Project };
