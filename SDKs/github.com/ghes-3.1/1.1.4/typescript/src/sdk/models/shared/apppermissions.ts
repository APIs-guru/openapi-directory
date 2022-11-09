import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AppPermissionsActionsEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsAdministrationEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsChecksEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsContentReferencesEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsContentsEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsDeploymentsEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsEnvironmentsEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsIssuesEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsMembersEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsMetadataEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsOrganizationAdministrationEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsOrganizationHooksEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsOrganizationPlanEnum {
    Read = "read"
}

export enum AppPermissionsOrganizationProjectsEnum {
    Read = "read"
,    Write = "write"
,    Admin = "admin"
}

export enum AppPermissionsOrganizationSecretsEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsOrganizationSelfHostedRunnersEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsOrganizationUserBlockingEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsPackagesEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsPagesEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsPullRequestsEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsRepositoryHooksEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsRepositoryProjectsEnum {
    Read = "read"
,    Write = "write"
,    Admin = "admin"
}

export enum AppPermissionsSecretScanningAlertsEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsSecretsEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsSecurityEventsEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsSingleFileEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsStatusesEnum {
    Read = "read"
,    Write = "write"
}

export enum AppPermissionsTeamDiscussionsEnum {
    Read = "read"
,    Write = "write"
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
  @Metadata({ data: "json, name=actions" })
  actions?: AppPermissionsActionsEnum;

  @Metadata({ data: "json, name=administration" })
  administration?: AppPermissionsAdministrationEnum;

  @Metadata({ data: "json, name=checks" })
  checks?: AppPermissionsChecksEnum;

  @Metadata({ data: "json, name=content_references" })
  contentReferences?: AppPermissionsContentReferencesEnum;

  @Metadata({ data: "json, name=contents" })
  contents?: AppPermissionsContentsEnum;

  @Metadata({ data: "json, name=deployments" })
  deployments?: AppPermissionsDeploymentsEnum;

  @Metadata({ data: "json, name=environments" })
  environments?: AppPermissionsEnvironmentsEnum;

  @Metadata({ data: "json, name=issues" })
  issues?: AppPermissionsIssuesEnum;

  @Metadata({ data: "json, name=members" })
  members?: AppPermissionsMembersEnum;

  @Metadata({ data: "json, name=metadata" })
  metadata?: AppPermissionsMetadataEnum;

  @Metadata({ data: "json, name=organization_administration" })
  organizationAdministration?: AppPermissionsOrganizationAdministrationEnum;

  @Metadata({ data: "json, name=organization_hooks" })
  organizationHooks?: AppPermissionsOrganizationHooksEnum;

  @Metadata({ data: "json, name=organization_plan" })
  organizationPlan?: AppPermissionsOrganizationPlanEnum;

  @Metadata({ data: "json, name=organization_projects" })
  organizationProjects?: AppPermissionsOrganizationProjectsEnum;

  @Metadata({ data: "json, name=organization_secrets" })
  organizationSecrets?: AppPermissionsOrganizationSecretsEnum;

  @Metadata({ data: "json, name=organization_self_hosted_runners" })
  organizationSelfHostedRunners?: AppPermissionsOrganizationSelfHostedRunnersEnum;

  @Metadata({ data: "json, name=organization_user_blocking" })
  organizationUserBlocking?: AppPermissionsOrganizationUserBlockingEnum;

  @Metadata({ data: "json, name=packages" })
  packages?: AppPermissionsPackagesEnum;

  @Metadata({ data: "json, name=pages" })
  pages?: AppPermissionsPagesEnum;

  @Metadata({ data: "json, name=pull_requests" })
  pullRequests?: AppPermissionsPullRequestsEnum;

  @Metadata({ data: "json, name=repository_hooks" })
  repositoryHooks?: AppPermissionsRepositoryHooksEnum;

  @Metadata({ data: "json, name=repository_projects" })
  repositoryProjects?: AppPermissionsRepositoryProjectsEnum;

  @Metadata({ data: "json, name=secret_scanning_alerts" })
  secretScanningAlerts?: AppPermissionsSecretScanningAlertsEnum;

  @Metadata({ data: "json, name=secrets" })
  secrets?: AppPermissionsSecretsEnum;

  @Metadata({ data: "json, name=security_events" })
  securityEvents?: AppPermissionsSecurityEventsEnum;

  @Metadata({ data: "json, name=single_file" })
  singleFile?: AppPermissionsSingleFileEnum;

  @Metadata({ data: "json, name=statuses" })
  statuses?: AppPermissionsStatusesEnum;

  @Metadata({ data: "json, name=team_discussions" })
  teamDiscussions?: AppPermissionsTeamDiscussionsEnum;

  @Metadata({ data: "json, name=vulnerability_alerts" })
  vulnerabilityAlerts?: AppPermissionsVulnerabilityAlertsEnum;

  @Metadata({ data: "json, name=workflows" })
  workflows?: AppPermissionsWorkflowsEnum;
}
