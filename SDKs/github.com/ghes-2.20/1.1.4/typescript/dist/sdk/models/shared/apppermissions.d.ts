import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AppPermissionsActionsEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsAdministrationEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsChecksEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsContentReferencesEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsContentsEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsDeploymentsEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsEnvironmentsEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsIssuesEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsMembersEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsMetadataEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsOrganizationAdministrationEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsOrganizationHooksEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsOrganizationPlanEnum {
    Read = "read"
}
export declare enum AppPermissionsOrganizationProjectsEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
export declare enum AppPermissionsOrganizationSecretsEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsOrganizationSelfHostedRunnersEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsOrganizationUserBlockingEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsPackagesEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsPagesEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsPullRequestsEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsRepositoryHooksEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsRepositoryProjectsEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
export declare enum AppPermissionsSecretScanningAlertsEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsSecretsEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsSecurityEventsEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsSingleFileEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsStatusesEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsTeamDiscussionsEnum {
    Read = "read",
    Write = "write"
}
export declare enum AppPermissionsVulnerabilityAlertsEnum {
    Read = "read"
}
export declare enum AppPermissionsWorkflowsEnum {
    Write = "write"
}
/**
 * The permissions granted to the user-to-server access token.
**/
export declare class AppPermissions extends SpeakeasyBase {
    actions?: AppPermissionsActionsEnum;
    administration?: AppPermissionsAdministrationEnum;
    checks?: AppPermissionsChecksEnum;
    contentReferences?: AppPermissionsContentReferencesEnum;
    contents?: AppPermissionsContentsEnum;
    deployments?: AppPermissionsDeploymentsEnum;
    environments?: AppPermissionsEnvironmentsEnum;
    issues?: AppPermissionsIssuesEnum;
    members?: AppPermissionsMembersEnum;
    metadata?: AppPermissionsMetadataEnum;
    organizationAdministration?: AppPermissionsOrganizationAdministrationEnum;
    organizationHooks?: AppPermissionsOrganizationHooksEnum;
    organizationPlan?: AppPermissionsOrganizationPlanEnum;
    organizationProjects?: AppPermissionsOrganizationProjectsEnum;
    organizationSecrets?: AppPermissionsOrganizationSecretsEnum;
    organizationSelfHostedRunners?: AppPermissionsOrganizationSelfHostedRunnersEnum;
    organizationUserBlocking?: AppPermissionsOrganizationUserBlockingEnum;
    packages?: AppPermissionsPackagesEnum;
    pages?: AppPermissionsPagesEnum;
    pullRequests?: AppPermissionsPullRequestsEnum;
    repositoryHooks?: AppPermissionsRepositoryHooksEnum;
    repositoryProjects?: AppPermissionsRepositoryProjectsEnum;
    secretScanningAlerts?: AppPermissionsSecretScanningAlertsEnum;
    secrets?: AppPermissionsSecretsEnum;
    securityEvents?: AppPermissionsSecurityEventsEnum;
    singleFile?: AppPermissionsSingleFileEnum;
    statuses?: AppPermissionsStatusesEnum;
    teamDiscussions?: AppPermissionsTeamDiscussionsEnum;
    vulnerabilityAlerts?: AppPermissionsVulnerabilityAlertsEnum;
    workflows?: AppPermissionsWorkflowsEnum;
}
