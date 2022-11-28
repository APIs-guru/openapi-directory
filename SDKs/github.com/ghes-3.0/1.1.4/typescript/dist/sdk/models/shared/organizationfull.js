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
var OrganizationFullPlan = /** @class */ (function (_super) {
    __extends(OrganizationFullPlan, _super);
    function OrganizationFullPlan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filled_seats" }),
        __metadata("design:type", Number)
    ], OrganizationFullPlan.prototype, "filledSeats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OrganizationFullPlan.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_repos" }),
        __metadata("design:type", Number)
    ], OrganizationFullPlan.prototype, "privateRepos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seats" }),
        __metadata("design:type", Number)
    ], OrganizationFullPlan.prototype, "seats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=space" }),
        __metadata("design:type", Number)
    ], OrganizationFullPlan.prototype, "space", void 0);
    return OrganizationFullPlan;
}(SpeakeasyBase));
export { OrganizationFullPlan };
// OrganizationFull
/**
 * Organization Full
**/
var OrganizationFull = /** @class */ (function (_super) {
    __extends(OrganizationFull, _super);
    function OrganizationFull() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], OrganizationFull.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billing_email" }),
        __metadata("design:type", String)
    ], OrganizationFull.prototype, "billingEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blog" }),
        __metadata("design:type", String)
    ], OrganizationFull.prototype, "blog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collaborators" }),
        __metadata("design:type", Number)
    ], OrganizationFull.prototype, "collaborators", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company" }),
        __metadata("design:type", String)
    ], OrganizationFull.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], OrganizationFull.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_repository_permission" }),
        __metadata("design:type", String)
    ], OrganizationFull.prototype, "defaultRepositoryPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OrganizationFull.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disk_usage" }),
        __metadata("design:type", Number)
    ], OrganizationFull.prototype, "diskUsage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], OrganizationFull.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], OrganizationFull.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers" }),
        __metadata("design:type", Number)
    ], OrganizationFull.prototype, "followers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following" }),
        __metadata("design:type", Number)
    ], OrganizationFull.prototype, "following", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_organization_projects" }),
        __metadata("design:type", Boolean)
    ], OrganizationFull.prototype, "hasOrganizationProjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_repository_projects" }),
        __metadata("design:type", Boolean)
    ], OrganizationFull.prototype, "hasRepositoryProjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hooks_url" }),
        __metadata("design:type", String)
    ], OrganizationFull.prototype, "hooksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], OrganizationFull.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], OrganizationFull.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_verified" }),
        __metadata("design:type", Boolean)
    ], OrganizationFull.prototype, "isVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issues_url" }),
        __metadata("design:type", String)
    ], OrganizationFull.prototype, "issuesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], OrganizationFull.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], OrganizationFull.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members_allowed_repository_creation_type" }),
        __metadata("design:type", String)
    ], OrganizationFull.prototype, "membersAllowedRepositoryCreationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members_can_create_internal_repositories" }),
        __metadata("design:type", Boolean)
    ], OrganizationFull.prototype, "membersCanCreateInternalRepositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members_can_create_pages" }),
        __metadata("design:type", Boolean)
    ], OrganizationFull.prototype, "membersCanCreatePages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members_can_create_private_pages" }),
        __metadata("design:type", Boolean)
    ], OrganizationFull.prototype, "membersCanCreatePrivatePages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members_can_create_private_repositories" }),
        __metadata("design:type", Boolean)
    ], OrganizationFull.prototype, "membersCanCreatePrivateRepositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members_can_create_public_pages" }),
        __metadata("design:type", Boolean)
    ], OrganizationFull.prototype, "membersCanCreatePublicPages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members_can_create_public_repositories" }),
        __metadata("design:type", Boolean)
    ], OrganizationFull.prototype, "membersCanCreatePublicRepositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members_can_create_repositories" }),
        __metadata("design:type", Boolean)
    ], OrganizationFull.prototype, "membersCanCreateRepositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members_url" }),
        __metadata("design:type", String)
    ], OrganizationFull.prototype, "membersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OrganizationFull.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], OrganizationFull.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owned_private_repos" }),
        __metadata("design:type", Number)
    ], OrganizationFull.prototype, "ownedPrivateRepos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plan" }),
        __metadata("design:type", OrganizationFullPlan)
    ], OrganizationFull.prototype, "plan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_gists" }),
        __metadata("design:type", Number)
    ], OrganizationFull.prototype, "privateGists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_gists" }),
        __metadata("design:type", Number)
    ], OrganizationFull.prototype, "publicGists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_members_url" }),
        __metadata("design:type", String)
    ], OrganizationFull.prototype, "publicMembersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_repos" }),
        __metadata("design:type", Number)
    ], OrganizationFull.prototype, "publicRepos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], OrganizationFull.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_private_repos" }),
        __metadata("design:type", Number)
    ], OrganizationFull.prototype, "totalPrivateRepos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=twitter_username" }),
        __metadata("design:type", String)
    ], OrganizationFull.prototype, "twitterUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=two_factor_requirement_enabled" }),
        __metadata("design:type", Boolean)
    ], OrganizationFull.prototype, "twoFactorRequirementEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], OrganizationFull.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], OrganizationFull.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], OrganizationFull.prototype, "url", void 0);
    return OrganizationFull;
}(SpeakeasyBase));
export { OrganizationFull };
