import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AppPermissionsActionsEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsAdministrationEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsChecksEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsContentReferencesEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsContentsEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsDeploymentsEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsEnvironmentsEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsIssuesEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsMembersEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsMetadataEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsOrganizationAdministrationEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsOrganizationHooksEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsOrganizationPlanEnum {
    Read = "read"
}

export enum AppPermissionsOrganizationProjectsEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}

export enum AppPermissionsOrganizationSecretsEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsOrganizationSelfHostedRunnersEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsOrganizationUserBlockingEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsPackagesEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsPagesEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsPullRequestsEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsRepositoryHooksEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsRepositoryProjectsEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}

export enum AppPermissionsSecretScanningAlertsEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsSecretsEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsSecurityEventsEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsSingleFileEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsStatusesEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsTeamDiscussionsEnum {
    Read = "read",
    Write = "write"
}

export enum AppPermissionsVulnerabilityAlertsEnum {
    Read = "read"
}

export enum AppPermissionsWorkflowsEnum {
    Write = "write"
}


// AppPermissions
/** 
 * The permissions granted to the user-to-server access token.
**/
export class AppPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions" })
  actions?: AppPermissionsActionsEnum;

  @SpeakeasyMetadata({ data: "json, name=administration" })
  administration?: AppPermissionsAdministrationEnum;

  @SpeakeasyMetadata({ data: "json, name=checks" })
  checks?: AppPermissionsChecksEnum;

  @SpeakeasyMetadata({ data: "json, name=content_references" })
  contentReferences?: AppPermissionsContentReferencesEnum;

  @SpeakeasyMetadata({ data: "json, name=contents" })
  contents?: AppPermissionsContentsEnum;

  @SpeakeasyMetadata({ data: "json, name=deployments" })
  deployments?: AppPermissionsDeploymentsEnum;

  @SpeakeasyMetadata({ data: "json, name=environments" })
  environments?: AppPermissionsEnvironmentsEnum;

  @SpeakeasyMetadata({ data: "json, name=issues" })
  issues?: AppPermissionsIssuesEnum;

  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: AppPermissionsMembersEnum;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: AppPermissionsMetadataEnum;

  @SpeakeasyMetadata({ data: "json, name=organization_administration" })
  organizationAdministration?: AppPermissionsOrganizationAdministrationEnum;

  @SpeakeasyMetadata({ data: "json, name=organization_hooks" })
  organizationHooks?: AppPermissionsOrganizationHooksEnum;

  @SpeakeasyMetadata({ data: "json, name=organization_plan" })
  organizationPlan?: AppPermissionsOrganizationPlanEnum;

  @SpeakeasyMetadata({ data: "json, name=organization_projects" })
  organizationProjects?: AppPermissionsOrganizationProjectsEnum;

  @SpeakeasyMetadata({ data: "json, name=organization_secrets" })
  organizationSecrets?: AppPermissionsOrganizationSecretsEnum;

  @SpeakeasyMetadata({ data: "json, name=organization_self_hosted_runners" })
  organizationSelfHostedRunners?: AppPermissionsOrganizationSelfHostedRunnersEnum;

  @SpeakeasyMetadata({ data: "json, name=organization_user_blocking" })
  organizationUserBlocking?: AppPermissionsOrganizationUserBlockingEnum;

  @SpeakeasyMetadata({ data: "json, name=packages" })
  packages?: AppPermissionsPackagesEnum;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: AppPermissionsPagesEnum;

  @SpeakeasyMetadata({ data: "json, name=pull_requests" })
  pullRequests?: AppPermissionsPullRequestsEnum;

  @SpeakeasyMetadata({ data: "json, name=repository_hooks" })
  repositoryHooks?: AppPermissionsRepositoryHooksEnum;

  @SpeakeasyMetadata({ data: "json, name=repository_projects" })
  repositoryProjects?: AppPermissionsRepositoryProjectsEnum;

  @SpeakeasyMetadata({ data: "json, name=secret_scanning_alerts" })
  secretScanningAlerts?: AppPermissionsSecretScanningAlertsEnum;

  @SpeakeasyMetadata({ data: "json, name=secrets" })
  secrets?: AppPermissionsSecretsEnum;

  @SpeakeasyMetadata({ data: "json, name=security_events" })
  securityEvents?: AppPermissionsSecurityEventsEnum;

  @SpeakeasyMetadata({ data: "json, name=single_file" })
  singleFile?: AppPermissionsSingleFileEnum;

  @SpeakeasyMetadata({ data: "json, name=statuses" })
  statuses?: AppPermissionsStatusesEnum;

  @SpeakeasyMetadata({ data: "json, name=team_discussions" })
  teamDiscussions?: AppPermissionsTeamDiscussionsEnum;

  @SpeakeasyMetadata({ data: "json, name=vulnerability_alerts" })
  vulnerabilityAlerts?: AppPermissionsVulnerabilityAlertsEnum;

  @SpeakeasyMetadata({ data: "json, name=workflows" })
  workflows?: AppPermissionsWorkflowsEnum;
}
