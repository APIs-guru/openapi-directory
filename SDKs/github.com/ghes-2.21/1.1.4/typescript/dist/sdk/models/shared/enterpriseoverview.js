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
var EnterpriseOverviewComments = /** @class */ (function (_super) {
    __extends(EnterpriseOverviewComments, _super);
    function EnterpriseOverviewComments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_commit_comments" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewComments.prototype, "totalCommitComments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_gist_comments" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewComments.prototype, "totalGistComments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_issue_comments" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewComments.prototype, "totalIssueComments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_pull_request_comments" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewComments.prototype, "totalPullRequestComments", void 0);
    return EnterpriseOverviewComments;
}(SpeakeasyBase));
export { EnterpriseOverviewComments };
var EnterpriseOverviewGists = /** @class */ (function (_super) {
    __extends(EnterpriseOverviewGists, _super);
    function EnterpriseOverviewGists() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_gists" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewGists.prototype, "privateGists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_gists" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewGists.prototype, "publicGists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_gists" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewGists.prototype, "totalGists", void 0);
    return EnterpriseOverviewGists;
}(SpeakeasyBase));
export { EnterpriseOverviewGists };
var EnterpriseOverviewHooks = /** @class */ (function (_super) {
    __extends(EnterpriseOverviewHooks, _super);
    function EnterpriseOverviewHooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active_hooks" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewHooks.prototype, "activeHooks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inactive_hooks" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewHooks.prototype, "inactiveHooks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_hooks" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewHooks.prototype, "totalHooks", void 0);
    return EnterpriseOverviewHooks;
}(SpeakeasyBase));
export { EnterpriseOverviewHooks };
var EnterpriseOverviewIssues = /** @class */ (function (_super) {
    __extends(EnterpriseOverviewIssues, _super);
    function EnterpriseOverviewIssues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed_issues" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewIssues.prototype, "closedIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewIssues.prototype, "openIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_issues" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewIssues.prototype, "totalIssues", void 0);
    return EnterpriseOverviewIssues;
}(SpeakeasyBase));
export { EnterpriseOverviewIssues };
var EnterpriseOverviewMilestones = /** @class */ (function (_super) {
    __extends(EnterpriseOverviewMilestones, _super);
    function EnterpriseOverviewMilestones() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed_milestones" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewMilestones.prototype, "closedMilestones", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_milestones" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewMilestones.prototype, "openMilestones", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_milestones" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewMilestones.prototype, "totalMilestones", void 0);
    return EnterpriseOverviewMilestones;
}(SpeakeasyBase));
export { EnterpriseOverviewMilestones };
var EnterpriseOverviewOrgs = /** @class */ (function (_super) {
    __extends(EnterpriseOverviewOrgs, _super);
    function EnterpriseOverviewOrgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled_orgs" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewOrgs.prototype, "disabledOrgs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_orgs" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewOrgs.prototype, "totalOrgs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_team_members" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewOrgs.prototype, "totalTeamMembers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_teams" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewOrgs.prototype, "totalTeams", void 0);
    return EnterpriseOverviewOrgs;
}(SpeakeasyBase));
export { EnterpriseOverviewOrgs };
var EnterpriseOverviewPages = /** @class */ (function (_super) {
    __extends(EnterpriseOverviewPages, _super);
    function EnterpriseOverviewPages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_pages" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewPages.prototype, "totalPages", void 0);
    return EnterpriseOverviewPages;
}(SpeakeasyBase));
export { EnterpriseOverviewPages };
var EnterpriseOverviewPulls = /** @class */ (function (_super) {
    __extends(EnterpriseOverviewPulls, _super);
    function EnterpriseOverviewPulls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mergeable_pulls" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewPulls.prototype, "mergeablePulls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merged_pulls" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewPulls.prototype, "mergedPulls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_pulls" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewPulls.prototype, "totalPulls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unmergeable_pulls" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewPulls.prototype, "unmergeablePulls", void 0);
    return EnterpriseOverviewPulls;
}(SpeakeasyBase));
export { EnterpriseOverviewPulls };
var EnterpriseOverviewRepos = /** @class */ (function (_super) {
    __extends(EnterpriseOverviewRepos, _super);
    function EnterpriseOverviewRepos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fork_repos" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewRepos.prototype, "forkRepos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=org_repos" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewRepos.prototype, "orgRepos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=root_repos" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewRepos.prototype, "rootRepos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_pushes" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewRepos.prototype, "totalPushes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_repos" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewRepos.prototype, "totalRepos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_wikis" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewRepos.prototype, "totalWikis", void 0);
    return EnterpriseOverviewRepos;
}(SpeakeasyBase));
export { EnterpriseOverviewRepos };
var EnterpriseOverviewUsers = /** @class */ (function (_super) {
    __extends(EnterpriseOverviewUsers, _super);
    function EnterpriseOverviewUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin_users" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewUsers.prototype, "adminUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspended_users" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewUsers.prototype, "suspendedUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_users" }),
        __metadata("design:type", Number)
    ], EnterpriseOverviewUsers.prototype, "totalUsers", void 0);
    return EnterpriseOverviewUsers;
}(SpeakeasyBase));
export { EnterpriseOverviewUsers };
var EnterpriseOverview = /** @class */ (function (_super) {
    __extends(EnterpriseOverview, _super);
    function EnterpriseOverview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", EnterpriseOverviewComments)
    ], EnterpriseOverview.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists" }),
        __metadata("design:type", EnterpriseOverviewGists)
    ], EnterpriseOverview.prototype, "gists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hooks" }),
        __metadata("design:type", EnterpriseOverviewHooks)
    ], EnterpriseOverview.prototype, "hooks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issues" }),
        __metadata("design:type", EnterpriseOverviewIssues)
    ], EnterpriseOverview.prototype, "issues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=milestones" }),
        __metadata("design:type", EnterpriseOverviewMilestones)
    ], EnterpriseOverview.prototype, "milestones", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orgs" }),
        __metadata("design:type", EnterpriseOverviewOrgs)
    ], EnterpriseOverview.prototype, "orgs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", EnterpriseOverviewPages)
    ], EnterpriseOverview.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pulls" }),
        __metadata("design:type", EnterpriseOverviewPulls)
    ], EnterpriseOverview.prototype, "pulls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos" }),
        __metadata("design:type", EnterpriseOverviewRepos)
    ], EnterpriseOverview.prototype, "repos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users" }),
        __metadata("design:type", EnterpriseOverviewUsers)
    ], EnterpriseOverview.prototype, "users", void 0);
    return EnterpriseOverview;
}(SpeakeasyBase));
export { EnterpriseOverview };
