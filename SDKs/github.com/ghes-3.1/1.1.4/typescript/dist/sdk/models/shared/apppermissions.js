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
export var AppPermissionsActionsEnum;
(function (AppPermissionsActionsEnum) {
    AppPermissionsActionsEnum["Read"] = "read";
    AppPermissionsActionsEnum["Write"] = "write";
})(AppPermissionsActionsEnum || (AppPermissionsActionsEnum = {}));
export var AppPermissionsAdministrationEnum;
(function (AppPermissionsAdministrationEnum) {
    AppPermissionsAdministrationEnum["Read"] = "read";
    AppPermissionsAdministrationEnum["Write"] = "write";
})(AppPermissionsAdministrationEnum || (AppPermissionsAdministrationEnum = {}));
export var AppPermissionsChecksEnum;
(function (AppPermissionsChecksEnum) {
    AppPermissionsChecksEnum["Read"] = "read";
    AppPermissionsChecksEnum["Write"] = "write";
})(AppPermissionsChecksEnum || (AppPermissionsChecksEnum = {}));
export var AppPermissionsContentReferencesEnum;
(function (AppPermissionsContentReferencesEnum) {
    AppPermissionsContentReferencesEnum["Read"] = "read";
    AppPermissionsContentReferencesEnum["Write"] = "write";
})(AppPermissionsContentReferencesEnum || (AppPermissionsContentReferencesEnum = {}));
export var AppPermissionsContentsEnum;
(function (AppPermissionsContentsEnum) {
    AppPermissionsContentsEnum["Read"] = "read";
    AppPermissionsContentsEnum["Write"] = "write";
})(AppPermissionsContentsEnum || (AppPermissionsContentsEnum = {}));
export var AppPermissionsDeploymentsEnum;
(function (AppPermissionsDeploymentsEnum) {
    AppPermissionsDeploymentsEnum["Read"] = "read";
    AppPermissionsDeploymentsEnum["Write"] = "write";
})(AppPermissionsDeploymentsEnum || (AppPermissionsDeploymentsEnum = {}));
export var AppPermissionsEnvironmentsEnum;
(function (AppPermissionsEnvironmentsEnum) {
    AppPermissionsEnvironmentsEnum["Read"] = "read";
    AppPermissionsEnvironmentsEnum["Write"] = "write";
})(AppPermissionsEnvironmentsEnum || (AppPermissionsEnvironmentsEnum = {}));
export var AppPermissionsIssuesEnum;
(function (AppPermissionsIssuesEnum) {
    AppPermissionsIssuesEnum["Read"] = "read";
    AppPermissionsIssuesEnum["Write"] = "write";
})(AppPermissionsIssuesEnum || (AppPermissionsIssuesEnum = {}));
export var AppPermissionsMembersEnum;
(function (AppPermissionsMembersEnum) {
    AppPermissionsMembersEnum["Read"] = "read";
    AppPermissionsMembersEnum["Write"] = "write";
})(AppPermissionsMembersEnum || (AppPermissionsMembersEnum = {}));
export var AppPermissionsMetadataEnum;
(function (AppPermissionsMetadataEnum) {
    AppPermissionsMetadataEnum["Read"] = "read";
    AppPermissionsMetadataEnum["Write"] = "write";
})(AppPermissionsMetadataEnum || (AppPermissionsMetadataEnum = {}));
export var AppPermissionsOrganizationAdministrationEnum;
(function (AppPermissionsOrganizationAdministrationEnum) {
    AppPermissionsOrganizationAdministrationEnum["Read"] = "read";
    AppPermissionsOrganizationAdministrationEnum["Write"] = "write";
})(AppPermissionsOrganizationAdministrationEnum || (AppPermissionsOrganizationAdministrationEnum = {}));
export var AppPermissionsOrganizationHooksEnum;
(function (AppPermissionsOrganizationHooksEnum) {
    AppPermissionsOrganizationHooksEnum["Read"] = "read";
    AppPermissionsOrganizationHooksEnum["Write"] = "write";
})(AppPermissionsOrganizationHooksEnum || (AppPermissionsOrganizationHooksEnum = {}));
export var AppPermissionsOrganizationPlanEnum;
(function (AppPermissionsOrganizationPlanEnum) {
    AppPermissionsOrganizationPlanEnum["Read"] = "read";
})(AppPermissionsOrganizationPlanEnum || (AppPermissionsOrganizationPlanEnum = {}));
export var AppPermissionsOrganizationProjectsEnum;
(function (AppPermissionsOrganizationProjectsEnum) {
    AppPermissionsOrganizationProjectsEnum["Read"] = "read";
    AppPermissionsOrganizationProjectsEnum["Write"] = "write";
    AppPermissionsOrganizationProjectsEnum["Admin"] = "admin";
})(AppPermissionsOrganizationProjectsEnum || (AppPermissionsOrganizationProjectsEnum = {}));
export var AppPermissionsOrganizationSecretsEnum;
(function (AppPermissionsOrganizationSecretsEnum) {
    AppPermissionsOrganizationSecretsEnum["Read"] = "read";
    AppPermissionsOrganizationSecretsEnum["Write"] = "write";
})(AppPermissionsOrganizationSecretsEnum || (AppPermissionsOrganizationSecretsEnum = {}));
export var AppPermissionsOrganizationSelfHostedRunnersEnum;
(function (AppPermissionsOrganizationSelfHostedRunnersEnum) {
    AppPermissionsOrganizationSelfHostedRunnersEnum["Read"] = "read";
    AppPermissionsOrganizationSelfHostedRunnersEnum["Write"] = "write";
})(AppPermissionsOrganizationSelfHostedRunnersEnum || (AppPermissionsOrganizationSelfHostedRunnersEnum = {}));
export var AppPermissionsOrganizationUserBlockingEnum;
(function (AppPermissionsOrganizationUserBlockingEnum) {
    AppPermissionsOrganizationUserBlockingEnum["Read"] = "read";
    AppPermissionsOrganizationUserBlockingEnum["Write"] = "write";
})(AppPermissionsOrganizationUserBlockingEnum || (AppPermissionsOrganizationUserBlockingEnum = {}));
export var AppPermissionsPackagesEnum;
(function (AppPermissionsPackagesEnum) {
    AppPermissionsPackagesEnum["Read"] = "read";
    AppPermissionsPackagesEnum["Write"] = "write";
})(AppPermissionsPackagesEnum || (AppPermissionsPackagesEnum = {}));
export var AppPermissionsPagesEnum;
(function (AppPermissionsPagesEnum) {
    AppPermissionsPagesEnum["Read"] = "read";
    AppPermissionsPagesEnum["Write"] = "write";
})(AppPermissionsPagesEnum || (AppPermissionsPagesEnum = {}));
export var AppPermissionsPullRequestsEnum;
(function (AppPermissionsPullRequestsEnum) {
    AppPermissionsPullRequestsEnum["Read"] = "read";
    AppPermissionsPullRequestsEnum["Write"] = "write";
})(AppPermissionsPullRequestsEnum || (AppPermissionsPullRequestsEnum = {}));
export var AppPermissionsRepositoryHooksEnum;
(function (AppPermissionsRepositoryHooksEnum) {
    AppPermissionsRepositoryHooksEnum["Read"] = "read";
    AppPermissionsRepositoryHooksEnum["Write"] = "write";
})(AppPermissionsRepositoryHooksEnum || (AppPermissionsRepositoryHooksEnum = {}));
export var AppPermissionsRepositoryProjectsEnum;
(function (AppPermissionsRepositoryProjectsEnum) {
    AppPermissionsRepositoryProjectsEnum["Read"] = "read";
    AppPermissionsRepositoryProjectsEnum["Write"] = "write";
    AppPermissionsRepositoryProjectsEnum["Admin"] = "admin";
})(AppPermissionsRepositoryProjectsEnum || (AppPermissionsRepositoryProjectsEnum = {}));
export var AppPermissionsSecretScanningAlertsEnum;
(function (AppPermissionsSecretScanningAlertsEnum) {
    AppPermissionsSecretScanningAlertsEnum["Read"] = "read";
    AppPermissionsSecretScanningAlertsEnum["Write"] = "write";
})(AppPermissionsSecretScanningAlertsEnum || (AppPermissionsSecretScanningAlertsEnum = {}));
export var AppPermissionsSecretsEnum;
(function (AppPermissionsSecretsEnum) {
    AppPermissionsSecretsEnum["Read"] = "read";
    AppPermissionsSecretsEnum["Write"] = "write";
})(AppPermissionsSecretsEnum || (AppPermissionsSecretsEnum = {}));
export var AppPermissionsSecurityEventsEnum;
(function (AppPermissionsSecurityEventsEnum) {
    AppPermissionsSecurityEventsEnum["Read"] = "read";
    AppPermissionsSecurityEventsEnum["Write"] = "write";
})(AppPermissionsSecurityEventsEnum || (AppPermissionsSecurityEventsEnum = {}));
export var AppPermissionsSingleFileEnum;
(function (AppPermissionsSingleFileEnum) {
    AppPermissionsSingleFileEnum["Read"] = "read";
    AppPermissionsSingleFileEnum["Write"] = "write";
})(AppPermissionsSingleFileEnum || (AppPermissionsSingleFileEnum = {}));
export var AppPermissionsStatusesEnum;
(function (AppPermissionsStatusesEnum) {
    AppPermissionsStatusesEnum["Read"] = "read";
    AppPermissionsStatusesEnum["Write"] = "write";
})(AppPermissionsStatusesEnum || (AppPermissionsStatusesEnum = {}));
export var AppPermissionsTeamDiscussionsEnum;
(function (AppPermissionsTeamDiscussionsEnum) {
    AppPermissionsTeamDiscussionsEnum["Read"] = "read";
    AppPermissionsTeamDiscussionsEnum["Write"] = "write";
})(AppPermissionsTeamDiscussionsEnum || (AppPermissionsTeamDiscussionsEnum = {}));
export var AppPermissionsVulnerabilityAlertsEnum;
(function (AppPermissionsVulnerabilityAlertsEnum) {
    AppPermissionsVulnerabilityAlertsEnum["Read"] = "read";
})(AppPermissionsVulnerabilityAlertsEnum || (AppPermissionsVulnerabilityAlertsEnum = {}));
export var AppPermissionsWorkflowsEnum;
(function (AppPermissionsWorkflowsEnum) {
    AppPermissionsWorkflowsEnum["Write"] = "write";
})(AppPermissionsWorkflowsEnum || (AppPermissionsWorkflowsEnum = {}));
// AppPermissions
/**
 * The permissions granted to the user-to-server access token.
**/
var AppPermissions = /** @class */ (function (_super) {
    __extends(AppPermissions, _super);
    function AppPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=administration" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "administration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checks" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "checks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_references" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "contentReferences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "contents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployments" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "deployments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environments" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "environments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issues" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "issues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_administration" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "organizationAdministration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_hooks" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "organizationHooks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_plan" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "organizationPlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_projects" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "organizationProjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_secrets" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "organizationSecrets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_self_hosted_runners" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "organizationSelfHostedRunners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_user_blocking" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "organizationUserBlocking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packages" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "packages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull_requests" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "pullRequests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository_hooks" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "repositoryHooks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository_projects" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "repositoryProjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret_scanning_alerts" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "secretScanningAlerts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secrets" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "secrets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=security_events" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "securityEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=single_file" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "singleFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statuses" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "statuses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team_discussions" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "teamDiscussions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vulnerability_alerts" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "vulnerabilityAlerts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflows" }),
        __metadata("design:type", String)
    ], AppPermissions.prototype, "workflows", void 0);
    return AppPermissions;
}(SpeakeasyBase));
export { AppPermissions };
