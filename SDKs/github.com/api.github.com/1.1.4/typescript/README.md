# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest, ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest = {
  pathParams: {
    org: "fugiat",
    repositoryId: 7721589441139439455,
    runnerGroupId: 3226718161535449406,
  },
};

sdk.sdk.actionsAddRepoAccessToSelfHostedRunnerGroupInOrg(req).then((res: ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `actionsAddRepoAccessToSelfHostedRunnerGroupInOrg` - Add repository access to a self-hosted runner group in an organization
* `actionsAddSelectedRepoToOrgSecret` - Add selected repository to an organization secret
* `actionsAddSelfHostedRunnerToGroupForOrg` - Add a self-hosted runner to a group for an organization
* `actionsCancelWorkflowRun` - Cancel a workflow run
* `actionsCreateOrUpdateEnvironmentSecret` - Create or update an environment secret
* `actionsCreateOrUpdateOrgSecret` - Create or update an organization secret
* `actionsCreateOrUpdateRepoSecret` - Create or update a repository secret
* `actionsCreateRegistrationTokenForOrg` - Create a registration token for an organization
* `actionsCreateRegistrationTokenForRepo` - Create a registration token for a repository
* `actionsCreateRemoveTokenForOrg` - Create a remove token for an organization
* `actionsCreateRemoveTokenForRepo` - Create a remove token for a repository
* `actionsCreateSelfHostedRunnerGroupForOrg` - Create a self-hosted runner group for an organization
* `actionsCreateWorkflowDispatch` - Create a workflow dispatch event
* `actionsDeleteArtifact` - Delete an artifact
* `actionsDeleteEnvironmentSecret` - Delete an environment secret
* `actionsDeleteOrgSecret` - Delete an organization secret
* `actionsDeleteRepoSecret` - Delete a repository secret
* `actionsDeleteSelfHostedRunnerFromOrg` - Delete a self-hosted runner from an organization
* `actionsDeleteSelfHostedRunnerFromRepo` - Delete a self-hosted runner from a repository
* `actionsDeleteSelfHostedRunnerGroupFromOrg` - Delete a self-hosted runner group from an organization
* `actionsDeleteWorkflowRun` - Delete a workflow run
* `actionsDeleteWorkflowRunLogs` - Delete workflow run logs
* `actionsDisableSelectedRepositoryGithubActionsOrganization` - Disable a selected repository for GitHub Actions in an organization
* `actionsDisableWorkflow` - Disable a workflow
* `actionsDownloadArtifact` - Download an artifact
* `actionsDownloadJobLogsForWorkflowRun` - Download job logs for a workflow run
* `actionsDownloadWorkflowRunLogs` - Download workflow run logs
* `actionsEnableSelectedRepositoryGithubActionsOrganization` - Enable a selected repository for GitHub Actions in an organization
* `actionsEnableWorkflow` - Enable a workflow
* `actionsGetAllowedActionsOrganization` - Get allowed actions for an organization
* `actionsGetAllowedActionsRepository` - Get allowed actions for a repository
* `actionsGetArtifact` - Get an artifact
* `actionsGetEnvironmentPublicKey` - Get an environment public key
* `actionsGetEnvironmentSecret` - Get an environment secret
* `actionsGetGithubActionsPermissionsOrganization` - Get GitHub Actions permissions for an organization
* `actionsGetGithubActionsPermissionsRepository` - Get GitHub Actions permissions for a repository
* `actionsGetJobForWorkflowRun` - Get a job for a workflow run
* `actionsGetOrgPublicKey` - Get an organization public key
* `actionsGetOrgSecret` - Get an organization secret
* `actionsGetPendingDeploymentsForRun` - Get pending deployments for a workflow run
* `actionsGetRepoPublicKey` - Get a repository public key
* `actionsGetRepoSecret` - Get a repository secret
* `actionsGetReviewsForRun` - Get the review history for a workflow run
* `actionsGetSelfHostedRunnerForOrg` - Get a self-hosted runner for an organization
* `actionsGetSelfHostedRunnerForRepo` - Get a self-hosted runner for a repository
* `actionsGetSelfHostedRunnerGroupForOrg` - Get a self-hosted runner group for an organization
* `actionsGetWorkflow` - Get a workflow
* `actionsGetWorkflowRun` - Get a workflow run
* `actionsGetWorkflowRunUsage` - Get workflow run usage
* `actionsGetWorkflowUsage` - Get workflow usage
* `actionsListArtifactsForRepo` - List artifacts for a repository
* `actionsListEnvironmentSecrets` - List environment secrets
* `actionsListJobsForWorkflowRun` - List jobs for a workflow run
* `actionsListOrgSecrets` - List organization secrets
* `actionsListRepoAccessToSelfHostedRunnerGroupInOrg` - List repository access to a self-hosted runner group in an organization
* `actionsListRepoSecrets` - List repository secrets
* `actionsListRepoWorkflows` - List repository workflows
* `actionsListRunnerApplicationsForOrg` - List runner applications for an organization
* `actionsListRunnerApplicationsForRepo` - List runner applications for a repository
* `actionsListSelectedReposForOrgSecret` - List selected repositories for an organization secret
* `actionsListSelectedRepositoriesEnabledGithubActionsOrganization` - List selected repositories enabled for GitHub Actions in an organization
* `actionsListSelfHostedRunnerGroupsForOrg` - List self-hosted runner groups for an organization
* `actionsListSelfHostedRunnersForOrg` - List self-hosted runners for an organization
* `actionsListSelfHostedRunnersForRepo` - List self-hosted runners for a repository
* `actionsListSelfHostedRunnersInGroupForOrg` - List self-hosted runners in a group for an organization
* `actionsListWorkflowRunArtifacts` - List workflow run artifacts
* `actionsListWorkflowRuns` - List workflow runs
* `actionsListWorkflowRunsForRepo` - List workflow runs for a repository
* `actionsReRunWorkflow` - Re-run a workflow
* `actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg` - Remove repository access to a self-hosted runner group in an organization
* `actionsRemoveSelectedRepoFromOrgSecret` - Remove selected repository from an organization secret
* `actionsRemoveSelfHostedRunnerFromGroupForOrg` - Remove a self-hosted runner from a group for an organization
* `actionsReviewPendingDeploymentsForRun` - Review pending deployments for a workflow run
* `actionsSetAllowedActionsOrganization` - Set allowed actions for an organization
* `actionsSetAllowedActionsRepository` - Set allowed actions for a repository
* `actionsSetGithubActionsPermissionsOrganization` - Set GitHub Actions permissions for an organization
* `actionsSetGithubActionsPermissionsRepository` - Set GitHub Actions permissions for a repository
* `actionsSetRepoAccessToSelfHostedRunnerGroupInOrg` - Set repository access for a self-hosted runner group in an organization
* `actionsSetSelectedReposForOrgSecret` - Set selected repositories for an organization secret
* `actionsSetSelectedRepositoriesEnabledGithubActionsOrganization` - Set selected repositories enabled for GitHub Actions in an organization
* `actionsSetSelfHostedRunnersInGroupForOrg` - Set self-hosted runners in a group for an organization
* `actionsUpdateSelfHostedRunnerGroupForOrg` - Update a self-hosted runner group for an organization
* `activityCheckRepoIsStarredByAuthenticatedUser` - Check if a repository is starred by the authenticated user
* `activityDeleteRepoSubscription` - Delete a repository subscription
* `activityDeleteThreadSubscription` - Delete a thread subscription
* `activityGetFeeds` - Get feeds
* `activityGetRepoSubscription` - Get a repository subscription
* `activityGetThread` - Get a thread
* `activityGetThreadSubscriptionForAuthenticatedUser` - Get a thread subscription for the authenticated user
* `activityListEventsForAuthenticatedUser` - List events for the authenticated user
* `activityListNotificationsForAuthenticatedUser` - List notifications for the authenticated user
* `activityListOrgEventsForAuthenticatedUser` - List organization events for the authenticated user
* `activityListPublicEvents` - List public events
* `activityListPublicEventsForRepoNetwork` - List public events for a network of repositories
* `activityListPublicEventsForUser` - List public events for a user
* `activityListPublicOrgEvents` - List public organization events
* `activityListReceivedEventsForUser` - List events received by the authenticated user
* `activityListReceivedPublicEventsForUser` - List public events received by a user
* `activityListRepoEvents` - List repository events
* `activityListRepoNotificationsForAuthenticatedUser` - List repository notifications for the authenticated user
* `activityListReposStarredByAuthenticatedUser` - List repositories starred by the authenticated user
* `activityListReposStarredByUser` - List repositories starred by a user
* `activityListReposWatchedByUser` - List repositories watched by a user
* `activityListStargazersForRepo` - List stargazers
* `activityListWatchedReposForAuthenticatedUser` - List repositories watched by the authenticated user
* `activityListWatchersForRepo` - List watchers
* `activityMarkNotificationsAsRead` - Mark notifications as read
* `activityMarkRepoNotificationsAsRead` - Mark repository notifications as read
* `activityMarkThreadAsRead` - Mark a thread as read
* `activitySetRepoSubscription` - Set a repository subscription
* `activitySetThreadSubscription` - Set a thread subscription
* `activityStarRepoForAuthenticatedUser` - Star a repository for the authenticated user
* `activityUnstarRepoForAuthenticatedUser` - Unstar a repository for the authenticated user
* `appsAddRepoToInstallation` - Add a repository to an app installation
* `appsCheckAuthorization` - Check an authorization
* `appsCheckToken` - Check a token
* `appsCreateContentAttachment` - Create a content attachment
* `appsCreateFromManifest` - Create a GitHub App from a manifest
* `appsCreateInstallationAccessToken` - Create an installation access token for an app
* `appsDeleteAuthorization` - Delete an app authorization
* `appsDeleteInstallation` - Delete an installation for the authenticated app
* `appsDeleteToken` - Delete an app token
* `appsGetAuthenticated` - Get the authenticated app
* `appsGetBySlug` - Get an app
* `appsGetInstallation` - Get an installation for the authenticated app
* `appsGetOrgInstallation` - Get an organization installation for the authenticated app
* `appsGetRepoInstallation` - Get a repository installation for the authenticated app
* `appsGetSubscriptionPlanForAccount` - Get a subscription plan for an account
* `appsGetSubscriptionPlanForAccountStubbed` - Get a subscription plan for an account (stubbed)
* `appsGetUserInstallation` - Get a user installation for the authenticated app
* `appsGetWebhookConfigForApp` - Get a webhook configuration for an app
* `appsListAccountsForPlan` - List accounts for a plan
* `appsListAccountsForPlanStubbed` - List accounts for a plan (stubbed)
* `appsListInstallationReposForAuthenticatedUser` - List repositories accessible to the user access token
* `appsListInstallations` - List installations for the authenticated app
* `appsListInstallationsForAuthenticatedUser` - List app installations accessible to the user access token
* `appsListPlans` - List plans
* `appsListPlansStubbed` - List plans (stubbed)
* `appsListReposAccessibleToInstallation` - List repositories accessible to the app installation
* `appsListSubscriptionsForAuthenticatedUser` - List subscriptions for the authenticated user
* `appsListSubscriptionsForAuthenticatedUserStubbed` - List subscriptions for the authenticated user (stubbed)
* `appsRemoveRepoFromInstallation` - Remove a repository from an app installation
* `appsResetAuthorization` - Reset an authorization
* `appsResetToken` - Reset a token
* `appsRevokeAuthorizationForApplication` - Revoke an authorization for an application
* `appsRevokeGrantForApplication` - Revoke a grant for an application
* `appsRevokeInstallationAccessToken` - Revoke an installation access token
* `appsScopeToken` - Create a scoped access token
* `appsSuspendInstallation` - Suspend an app installation
* `appsUnsuspendInstallation` - Unsuspend an app installation
* `appsUpdateWebhookConfigForApp` - Update a webhook configuration for an app
* `auditLogGetAuditLog` - Get the audit log for an enterprise
* `billingGetGithubActionsBillingGhe` - Get GitHub Actions billing for an enterprise
* `billingGetGithubActionsBillingOrg` - Get GitHub Actions billing for an organization
* `billingGetGithubActionsBillingUser` - Get GitHub Actions billing for a user
* `billingGetGithubPackagesBillingGhe` - Get GitHub Packages billing for an enterprise
* `billingGetGithubPackagesBillingOrg` - Get GitHub Packages billing for an organization
* `billingGetGithubPackagesBillingUser` - Get GitHub Packages billing for a user
* `billingGetSharedStorageBillingGhe` - Get shared storage billing for an enterprise
* `billingGetSharedStorageBillingOrg` - Get shared storage billing for an organization
* `billingGetSharedStorageBillingUser` - Get shared storage billing for a user
* `checksCreate` - Create a check run
* `checksCreateSuite` - Create a check suite
* `checksGet` - Get a check run
* `checksGetSuite` - Get a check suite
* `checksListAnnotations` - List check run annotations
* `checksListForRef` - List check runs for a Git reference
* `checksListForSuite` - List check runs in a check suite
* `checksListSuitesForRef` - List check suites for a Git reference
* `checksRerequestSuite` - Rerequest a check suite
* `checksSetSuitesPreferences` - Update repository preferences for check suites
* `checksUpdate` - Update a check run
* `codeScanningDeleteAnalysis` - Delete a code scanning analysis from a repository
* `codeScanningGetAlert` - Get a code scanning alert
* `codeScanningGetAnalysis` - Get a code scanning analysis for a repository
* `codeScanningGetSarif` - Get information about a SARIF upload
* `codeScanningListAlertsForRepo` - List code scanning alerts for a repository
* `codeScanningListAlertsInstances` - List instances of a code scanning alert
* `codeScanningListRecentAnalyses` - List code scanning analyses for a repository
* `codeScanningUpdateAlert` - Update a code scanning alert
* `codeScanningUploadSarif` - Upload an analysis as SARIF data
* `codesOfConductGetAllCodesOfConduct` - Get all codes of conduct
* `codesOfConductGetConductCode` - Get a code of conduct
* `codesOfConductGetForRepo` - Get the code of conduct for a repository
* `emojisGet` - Get emojis
* `enterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise` - Add organization access to a self-hosted runner group in an enterprise
* `enterpriseAdminAddSelfHostedRunnerToGroupForEnterprise` - Add a self-hosted runner to a group for an enterprise
* `enterpriseAdminCreateRegistrationTokenForEnterprise` - Create a registration token for an enterprise
* `enterpriseAdminCreateRemoveTokenForEnterprise` - Create a remove token for an enterprise
* `enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise` - Create a self-hosted runner group for an enterprise
* `enterpriseAdminDeleteScimGroupFromEnterprise` - Delete a SCIM group from an enterprise
* `enterpriseAdminDeleteSelfHostedRunnerFromEnterprise` - Delete a self-hosted runner from an enterprise
* `enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise` - Delete a self-hosted runner group from an enterprise
* `enterpriseAdminDeleteUserFromEnterprise` - Delete a SCIM user from an enterprise
* `enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise` - Disable a selected organization for GitHub Actions in an enterprise
* `enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise` - Enable a selected organization for GitHub Actions in an enterprise
* `enterpriseAdminGetAllowedActionsEnterprise` - Get allowed actions for an enterprise
* `enterpriseAdminGetGithubActionsPermissionsEnterprise` - Get GitHub Actions permissions for an enterprise
* `enterpriseAdminGetProvisioningInformationForEnterpriseGroup` - Get SCIM provisioning information for an enterprise group
* `enterpriseAdminGetProvisioningInformationForEnterpriseUser` - Get SCIM provisioning information for an enterprise user
* `enterpriseAdminGetSelfHostedRunnerForEnterprise` - Get a self-hosted runner for an enterprise
* `enterpriseAdminGetSelfHostedRunnerGroupForEnterprise` - Get a self-hosted runner group for an enterprise
* `enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise` - List organization access to a self-hosted runner group in an enterprise
* `enterpriseAdminListProvisionedGroupsEnterprise` - List provisioned SCIM groups for an enterprise
* `enterpriseAdminListProvisionedIdentitiesEnterprise` - List SCIM provisioned identities for an enterprise
* `enterpriseAdminListRunnerApplicationsForEnterprise` - List runner applications for an enterprise
* `enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise` - List selected organizations enabled for GitHub Actions in an enterprise
* `enterpriseAdminListSelfHostedRunnerGroupsForEnterprise` - List self-hosted runner groups for an enterprise
* `enterpriseAdminListSelfHostedRunnersForEnterprise` - List self-hosted runners for an enterprise
* `enterpriseAdminListSelfHostedRunnersInGroupForEnterprise` - List self-hosted runners in a group for an enterprise
* `enterpriseAdminProvisionAndInviteEnterpriseGroup` - Provision a SCIM enterprise group and invite users
* `enterpriseAdminProvisionAndInviteEnterpriseUser` - Provision and invite a SCIM enterprise user
* `enterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise` - Remove organization access to a self-hosted runner group in an enterprise
* `enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise` - Remove a self-hosted runner from a group for an enterprise
* `enterpriseAdminSetAllowedActionsEnterprise` - Set allowed actions for an enterprise
* `enterpriseAdminSetGithubActionsPermissionsEnterprise` - Set GitHub Actions permissions for an enterprise
* `enterpriseAdminSetInformationForProvisionedEnterpriseGroup` - Set SCIM information for a provisioned enterprise group
* `enterpriseAdminSetInformationForProvisionedEnterpriseUser` - Set SCIM information for a provisioned enterprise user
* `enterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise` - Set organization access for a self-hosted runner group in an enterprise
* `enterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise` - Set selected organizations enabled for GitHub Actions in an enterprise
* `enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise` - Set self-hosted runners in a group for an enterprise
* `enterpriseAdminUpdateAttributeForEnterpriseGroup` - Update an attribute for a SCIM enterprise group
* `enterpriseAdminUpdateAttributeForEnterpriseUser` - Update an attribute for a SCIM enterprise user
* `enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise` - Update a self-hosted runner group for an enterprise
* `gistsCheckIsStarred` - Check if a gist is starred
* `gistsCreate` - Create a gist
* `gistsCreateComment` - Create a gist comment
* `gistsDelete` - Delete a gist
* `gistsDeleteComment` - Delete a gist comment
* `gistsFork` - Fork a gist
* `gistsGet` - Get a gist
* `gistsGetComment` - Get a gist comment
* `gistsGetRevision` - Get a gist revision
* `gistsList` - List gists for the authenticated user
* `gistsListComments` - List gist comments
* `gistsListCommits` - List gist commits
* `gistsListForUser` - List gists for a user
* `gistsListForks` - List gist forks
* `gistsListPublic` - List public gists
* `gistsListStarred` - List starred gists
* `gistsStar` - Star a gist
* `gistsUnstar` - Unstar a gist
* `gistsUpdate` - Update a gist
* `gistsUpdateComment` - Update a gist comment
* `gitCreateBlob` - Create a blob
* `gitCreateCommit` - Create a commit
* `gitCreateRef` - Create a reference
* `gitCreateTag` - Create a tag object
* `gitCreateTree` - Create a tree
* `gitDeleteRef` - Delete a reference
* `gitGetBlob` - Get a blob
* `gitGetCommit` - Get a commit
* `gitGetRef` - Get a reference
* `gitGetTag` - Get a tag
* `gitGetTree` - Get a tree
* `gitListMatchingRefs` - List matching references
* `gitUpdateRef` - Update a reference
* `gitignoreGetAllTemplates` - Get all gitignore templates
* `gitignoreGetTemplate` - Get a gitignore template
* `interactionsGetRestrictionsForAuthenticatedUser` - Get interaction restrictions for your public repositories
* `interactionsGetRestrictionsForOrg` - Get interaction restrictions for an organization
* `interactionsGetRestrictionsForRepo` - Get interaction restrictions for a repository
* `interactionsRemoveRestrictionsForAuthenticatedUser` - Remove interaction restrictions from your public repositories
* `interactionsRemoveRestrictionsForOrg` - Remove interaction restrictions for an organization
* `interactionsRemoveRestrictionsForRepo` - Remove interaction restrictions for a repository
* `interactionsSetRestrictionsForAuthenticatedUser` - Set interaction restrictions for your public repositories
* `interactionsSetRestrictionsForOrg` - Set interaction restrictions for an organization
* `interactionsSetRestrictionsForRepo` - Set interaction restrictions for a repository
* `issuesAddAssignees` - Add assignees to an issue
* `issuesAddLabels` - Add labels to an issue
* `issuesCheckUserCanBeAssigned` - Check if a user can be assigned
* `issuesCreate` - Create an issue
* `issuesCreateComment` - Create an issue comment
* `issuesCreateLabel` - Create a label
* `issuesCreateMilestone` - Create a milestone
* `issuesDeleteComment` - Delete an issue comment
* `issuesDeleteLabel` - Delete a label
* `issuesDeleteMilestone` - Delete a milestone
* `issuesGet` - Get an issue
* `issuesGetComment` - Get an issue comment
* `issuesGetEvent` - Get an issue event
* `issuesGetLabel` - Get a label
* `issuesGetMilestone` - Get a milestone
* `issuesList` - List issues assigned to the authenticated user
* `issuesListAssignees` - List assignees
* `issuesListComments` - List issue comments
* `issuesListCommentsForRepo` - List issue comments for a repository
* `issuesListEvents` - List issue events
* `issuesListEventsForRepo` - List issue events for a repository
* `issuesListEventsForTimeline` - List timeline events for an issue
* `issuesListForAuthenticatedUser` - List user account issues assigned to the authenticated user
* `issuesListForOrg` - List organization issues assigned to the authenticated user
* `issuesListForRepo` - List repository issues
* `issuesListLabelsForMilestone` - List labels for issues in a milestone
* `issuesListLabelsForRepo` - List labels for a repository
* `issuesListLabelsOnIssue` - List labels for an issue
* `issuesListMilestones` - List milestones
* `issuesLock` - Lock an issue
* `issuesRemoveAllLabels` - Remove all labels from an issue
* `issuesRemoveAssignees` - Remove assignees from an issue
* `issuesRemoveLabel` - Remove a label from an issue
* `issuesSetLabels` - Set labels for an issue
* `issuesUnlock` - Unlock an issue
* `issuesUpdate` - Update an issue
* `issuesUpdateComment` - Update an issue comment
* `issuesUpdateLabel` - Update a label
* `issuesUpdateMilestone` - Update a milestone
* `licensesGet` - Get a license
* `licensesGetAllCommonlyUsed` - Get all commonly used licenses
* `licensesGetForRepo` - Get the license for a repository
* `markdownRender` - Render a Markdown document
* `markdownRenderRaw` - Render a Markdown document in raw mode
* `metaGet` - Get GitHub meta information
* `metaGetOctocat` - Get Octocat
* `metaGetZen` - Get the Zen of GitHub
* `metaRoot` - GitHub API Root
* `migrationsCancelImport` - Cancel an import
* `migrationsDeleteArchiveForAuthenticatedUser` - Delete a user migration archive
* `migrationsDeleteArchiveForOrg` - Delete an organization migration archive
* `migrationsDownloadArchiveForOrg` - Download an organization migration archive
* `migrationsGetArchiveForAuthenticatedUser` - Download a user migration archive
* `migrationsGetCommitAuthors` - Get commit authors
* `migrationsGetImportStatus` - Get an import status
* `migrationsGetLargeFiles` - Get large files
* `migrationsGetStatusForAuthenticatedUser` - Get a user migration status
* `migrationsGetStatusForOrg` - Get an organization migration status
* `migrationsListForAuthenticatedUser` - List user migrations
* `migrationsListForOrg` - List organization migrations
* `migrationsListReposForOrg` - List repositories in an organization migration
* `migrationsListReposForUser` - List repositories for a user migration
* `migrationsMapCommitAuthor` - Map a commit author
* `migrationsSetLfsPreference` - Update Git LFS preference
* `migrationsStartForAuthenticatedUser` - Start a user migration
* `migrationsStartForOrg` - Start an organization migration
* `migrationsStartImport` - Start an import
* `migrationsUnlockRepoForAuthenticatedUser` - Unlock a user repository
* `migrationsUnlockRepoForOrg` - Unlock an organization repository
* `migrationsUpdateImport` - Update an import
* `oauthAuthorizationsCreateAuthorization` - Create a new authorization
* `oauthAuthorizationsDeleteAuthorization` - Delete an authorization
* `oauthAuthorizationsDeleteGrant` - Delete a grant
* `oauthAuthorizationsGetAuthorization` - Get a single authorization
* `oauthAuthorizationsGetGrant` - Get a single grant
* `oauthAuthorizationsGetOrCreateAuthorizationForApp` - Get-or-create an authorization for a specific app
* `oauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint` - Get-or-create an authorization for a specific app and fingerprint
* `oauthAuthorizationsListAuthorizations` - List your authorizations
* `oauthAuthorizationsListGrants` - List your grants
* `oauthAuthorizationsUpdateAuthorization` - Update an existing authorization
* `orgsBlockUser` - Block a user from an organization
* `orgsCancelInvitation` - Cancel an organization invitation
* `orgsCheckBlockedUser` - Check if a user is blocked by an organization
* `orgsCheckMembershipForUser` - Check organization membership for a user
* `orgsCheckPublicMembershipForUser` - Check public organization membership for a user
* `orgsConvertMemberToOutsideCollaborator` - Convert an organization member to outside collaborator
* `orgsCreateInvitation` - Create an organization invitation
* `orgsCreateWebhook` - Create an organization webhook
* `orgsDeleteWebhook` - Delete an organization webhook
* `orgsGet` - Get an organization
* `orgsGetAuditLog` - Get the audit log for an organization
* `orgsGetMembershipForAuthenticatedUser` - Get an organization membership for the authenticated user
* `orgsGetMembershipForUser` - Get organization membership for a user
* `orgsGetWebhook` - Get an organization webhook
* `orgsGetWebhookConfigForOrg` - Get a webhook configuration for an organization
* `orgsList` - List organizations
* `orgsListAppInstallations` - List app installations for an organization
* `orgsListBlockedUsers` - List users blocked by an organization
* `orgsListFailedInvitations` - List failed organization invitations
* `orgsListForAuthenticatedUser` - List organizations for the authenticated user
* `orgsListForUser` - List organizations for a user
* `orgsListInvitationTeams` - List organization invitation teams
* `orgsListMembers` - List organization members
* `orgsListMembershipsForAuthenticatedUser` - List organization memberships for the authenticated user
* `orgsListOutsideCollaborators` - List outside collaborators for an organization
* `orgsListPendingInvitations` - List pending organization invitations
* `orgsListPublicMembers` - List public organization members
* `orgsListSamlSsoAuthorizations` - List SAML SSO authorizations for an organization
* `orgsListWebhooks` - List organization webhooks
* `orgsPingWebhook` - Ping an organization webhook
* `orgsRemoveMember` - Remove an organization member
* `orgsRemoveMembershipForUser` - Remove organization membership for a user
* `orgsRemoveOutsideCollaborator` - Remove outside collaborator from an organization
* `orgsRemovePublicMembershipForAuthenticatedUser` - Remove public organization membership for the authenticated user
* `orgsRemoveSamlSsoAuthorization` - Remove a SAML SSO authorization for an organization
* `orgsSetMembershipForUser` - Set organization membership for a user
* `orgsSetPublicMembershipForAuthenticatedUser` - Set public organization membership for the authenticated user
* `orgsUnblockUser` - Unblock a user from an organization
* `orgsUpdate` - Update an organization
* `orgsUpdateMembershipForAuthenticatedUser` - Update an organization membership for the authenticated user
* `orgsUpdateWebhook` - Update an organization webhook
* `orgsUpdateWebhookConfigForOrg` - Update a webhook configuration for an organization
* `packagesDeletePackageForAuthenticatedUser` - Delete a package for the authenticated user
* `packagesDeletePackageForOrg` - Delete a package for an organization
* `packagesDeletePackageVersionForAuthenticatedUser` - Delete a package version for the authenticated user
* `packagesDeletePackageVersionForOrg` - Delete package version for an organization
* `packagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUser` - Get all package versions for a package owned by the authenticated user
* `packagesGetAllPackageVersionsForPackageOwnedByOrg` - Get all package versions for a package owned by an organization
* `packagesGetAllPackageVersionsForPackageOwnedByUser` - Get all package versions for a package owned by a user
* `packagesGetPackageForAuthenticatedUser` - Get a package for the authenticated user
* `packagesGetPackageForOrganization` - Get a package for an organization
* `packagesGetPackageForUser` - Get a package for a user
* `packagesGetPackageVersionForAuthenticatedUser` - Get a package version for the authenticated user
* `packagesGetPackageVersionForOrganization` - Get a package version for an organization
* `packagesGetPackageVersionForUser` - Get a package version for a user
* `packagesRestorePackageForAuthenticatedUser` - Restore a package for the authenticated user
* `packagesRestorePackageForOrg` - Restore a package for an organization
* `packagesRestorePackageVersionForAuthenticatedUser` - Restore a package version for the authenticated user
* `packagesRestorePackageVersionForOrg` - Restore package version for an organization
* `projectsAddCollaborator` - Add project collaborator
* `projectsCreateCard` - Create a project card
* `projectsCreateColumn` - Create a project column
* `projectsCreateForAuthenticatedUser` - Create a user project
* `projectsCreateForOrg` - Create an organization project
* `projectsCreateForRepo` - Create a repository project
* `projectsDelete` - Delete a project
* `projectsDeleteCard` - Delete a project card
* `projectsDeleteColumn` - Delete a project column
* `projectsGet` - Get a project
* `projectsGetCard` - Get a project card
* `projectsGetColumn` - Get a project column
* `projectsGetPermissionForUser` - Get project permission for a user
* `projectsListCards` - List project cards
* `projectsListCollaborators` - List project collaborators
* `projectsListColumns` - List project columns
* `projectsListForOrg` - List organization projects
* `projectsListForRepo` - List repository projects
* `projectsListForUser` - List user projects
* `projectsMoveCard` - Move a project card
* `projectsMoveColumn` - Move a project column
* `projectsRemoveCollaborator` - Remove user as a collaborator
* `projectsUpdate` - Update a project
* `projectsUpdateCard` - Update an existing project card
* `projectsUpdateColumn` - Update an existing project column
* `pullsCheckIfMerged` - Check if a pull request has been merged
* `pullsCreate` - Create a pull request
* `pullsCreateReplyForReviewComment` - Create a reply for a review comment
* `pullsCreateReview` - Create a review for a pull request
* `pullsCreateReviewComment` - Create a review comment for a pull request
* `pullsDeletePendingReview` - Delete a pending review for a pull request
* `pullsDeleteReviewComment` - Delete a review comment for a pull request
* `pullsDismissReview` - Dismiss a review for a pull request
* `pullsGet` - Get a pull request
* `pullsGetReview` - Get a review for a pull request
* `pullsGetReviewComment` - Get a review comment for a pull request
* `pullsList` - List pull requests
* `pullsListCommentsForReview` - List comments for a pull request review
* `pullsListCommits` - List commits on a pull request
* `pullsListFiles` - List pull requests files
* `pullsListRequestedReviewers` - List requested reviewers for a pull request
* `pullsListReviewComments` - List review comments on a pull request
* `pullsListReviewCommentsForRepo` - List review comments in a repository
* `pullsListReviews` - List reviews for a pull request
* `pullsMerge` - Merge a pull request
* `pullsRemoveRequestedReviewers` - Remove requested reviewers from a pull request
* `pullsRequestReviewers` - Request reviewers for a pull request
* `pullsSubmitReview` - Submit a review for a pull request
* `pullsUpdate` - Update a pull request
* `pullsUpdateBranch` - Update a pull request branch
* `pullsUpdateReview` - Update a review for a pull request
* `pullsUpdateReviewComment` - Update a review comment for a pull request
* `rateLimitGet` - Get rate limit status for the authenticated user
* `reactionsCreateForCommitComment` - Create reaction for a commit comment
* `reactionsCreateForIssue` - Create reaction for an issue
* `reactionsCreateForIssueComment` - Create reaction for an issue comment
* `reactionsCreateForPullRequestReviewComment` - Create reaction for a pull request review comment
* `reactionsCreateForTeamDiscussionCommentInOrg` - Create reaction for a team discussion comment
* `reactionsCreateForTeamDiscussionCommentLegacy` - Create reaction for a team discussion comment (Legacy)
* `reactionsCreateForTeamDiscussionInOrg` - Create reaction for a team discussion
* `reactionsCreateForTeamDiscussionLegacy` - Create reaction for a team discussion (Legacy)
* `reactionsDeleteForCommitComment` - Delete a commit comment reaction
* `reactionsDeleteForIssue` - Delete an issue reaction
* `reactionsDeleteForIssueComment` - Delete an issue comment reaction
* `reactionsDeleteForPullRequestComment` - Delete a pull request comment reaction
* `reactionsDeleteForTeamDiscussion` - Delete team discussion reaction
* `reactionsDeleteForTeamDiscussionComment` - Delete team discussion comment reaction
* `reactionsDeleteLegacy` - Delete a reaction (Legacy)
* `reactionsListForCommitComment` - List reactions for a commit comment
* `reactionsListForIssue` - List reactions for an issue
* `reactionsListForIssueComment` - List reactions for an issue comment
* `reactionsListForPullRequestReviewComment` - List reactions for a pull request review comment
* `reactionsListForTeamDiscussionCommentInOrg` - List reactions for a team discussion comment
* `reactionsListForTeamDiscussionCommentLegacy` - List reactions for a team discussion comment (Legacy)
* `reactionsListForTeamDiscussionInOrg` - List reactions for a team discussion
* `reactionsListForTeamDiscussionLegacy` - List reactions for a team discussion (Legacy)
* `reposAcceptInvitation` - Accept a repository invitation
* `reposAddAppAccessRestrictions` - Add app access restrictions
* `reposAddCollaborator` - Add a repository collaborator
* `reposAddStatusCheckContexts` - Add status check contexts
* `reposAddTeamAccessRestrictions` - Add team access restrictions
* `reposAddUserAccessRestrictions` - Add user access restrictions
* `reposCheckCollaborator` - Check if a user is a repository collaborator
* `reposCheckVulnerabilityAlerts` - Check if vulnerability alerts are enabled for a repository
* `reposCompareCommits` - Compare two commits
* `reposCreateCommitComment` - Create a commit comment
* `reposCreateCommitSignatureProtection` - Create commit signature protection
* `reposCreateCommitStatus` - Create a commit status
* `reposCreateDeployKey` - Create a deploy key
* `reposCreateDeployment` - Create a deployment
* `reposCreateDeploymentStatus` - Create a deployment status
* `reposCreateDispatchEvent` - Create a repository dispatch event
* `reposCreateForAuthenticatedUser` - Create a repository for the authenticated user
* `reposCreateFork` - Create a fork
* `reposCreateInOrg` - Create an organization repository
* `reposCreateOrUpdateEnvironment` - Create or update an environment
* `reposCreateOrUpdateFileContents` - Create or update file contents
* `reposCreatePagesSite` - Create a GitHub Pages site
* `reposCreateRelease` - Create a release
* `reposCreateUsingTemplate` - Create a repository using a template
* `reposCreateWebhook` - Create a repository webhook
* `reposDeclineInvitation` - Decline a repository invitation
* `reposDelete` - Delete a repository
* `reposDeleteAccessRestrictions` - Delete access restrictions
* `reposDeleteAdminBranchProtection` - Delete admin branch protection
* `reposDeleteAnEnvironment` - Delete an environment
* `reposDeleteBranchProtection` - Delete branch protection
* `reposDeleteCommitComment` - Delete a commit comment
* `reposDeleteCommitSignatureProtection` - Delete commit signature protection
* `reposDeleteDeployKey` - Delete a deploy key
* `reposDeleteDeployment` - Delete a deployment
* `reposDeleteFile` - Delete a file
* `reposDeleteInvitation` - Delete a repository invitation
* `reposDeletePagesSite` - Delete a GitHub Pages site
* `reposDeletePullRequestReviewProtection` - Delete pull request review protection
* `reposDeleteRelease` - Delete a release
* `reposDeleteReleaseAsset` - Delete a release asset
* `reposDeleteWebhook` - Delete a repository webhook
* `reposDisableAutomatedSecurityFixes` - Disable automated security fixes
* `reposDisableVulnerabilityAlerts` - Disable vulnerability alerts
* `reposDownloadTarballArchive` - Download a repository archive (tar)
* `reposDownloadZipballArchive` - Download a repository archive (zip)
* `reposEnableAutomatedSecurityFixes` - Enable automated security fixes
* `reposEnableVulnerabilityAlerts` - Enable vulnerability alerts
* `reposGet` - Get a repository
* `reposGetAccessRestrictions` - Get access restrictions
* `reposGetAdminBranchProtection` - Get admin branch protection
* `reposGetAllEnvironments` - Get all environments
* `reposGetAllStatusCheckContexts` - Get all status check contexts
* `reposGetAllTopics` - Get all repository topics
* `reposGetAppsWithAccessToProtectedBranch` - Get apps with access to the protected branch
* `reposGetBranch` - Get a branch
* `reposGetBranchProtection` - Get branch protection
* `reposGetClones` - Get repository clones
* `reposGetCodeFrequencyStats` - Get the weekly commit activity
* `reposGetCollaboratorPermissionLevel` - Get repository permissions for a user
* `reposGetCombinedStatusForRef` - Get the combined status for a specific reference
* `reposGetCommit` - Get a commit
* `reposGetCommitActivityStats` - Get the last year of commit activity
* `reposGetCommitComment` - Get a commit comment
* `reposGetCommitSignatureProtection` - Get commit signature protection
* `reposGetCommunityProfileMetrics` - Get community profile metrics
* `reposGetContent` - Get repository content
* `reposGetContributorsStats` - Get all contributor commit activity
* `reposGetDeployKey` - Get a deploy key
* `reposGetDeployment` - Get a deployment
* `reposGetDeploymentStatus` - Get a deployment status
* `reposGetEnvironment` - Get an environment
* `reposGetLatestPagesBuild` - Get latest Pages build
* `reposGetLatestRelease` - Get the latest release
* `reposGetPages` - Get a GitHub Pages site
* `reposGetPagesBuild` - Get GitHub Pages build
* `reposGetParticipationStats` - Get the weekly commit count
* `reposGetPullRequestReviewProtection` - Get pull request review protection
* `reposGetPunchCardStats` - Get the hourly commit count for each day
* `reposGetReadme` - Get a repository README
* `reposGetReadmeFromAltPath` - Get a repository README
* `reposGetRelease` - Get a release
* `reposGetReleaseAsset` - Get a release asset
* `reposGetReleaseByTag` - Get a release by tag name
* `reposGetStatusChecksProtection` - Get status checks protection
* `reposGetTeamsWithAccessToProtectedBranch` - Get teams with access to the protected branch
* `reposGetTopPaths` - Get top referral paths
* `reposGetTopReferrers` - Get top referral sources
* `reposGetUsersWithAccessToProtectedBranch` - Get users with access to the protected branch
* `reposGetViews` - Get page views
* `reposGetWebhook` - Get a repository webhook
* `reposGetWebhookConfigForRepo` - Get a webhook configuration for a repository
* `reposListBranches` - List branches
* `reposListBranchesForHeadCommit` - List branches for HEAD commit
* `reposListCollaborators` - List repository collaborators
* `reposListCommentsForCommit` - List commit comments
* `reposListCommitCommentsForRepo` - List commit comments for a repository
* `reposListCommitStatusesForRef` - List commit statuses for a reference
* `reposListCommits` - List commits
* `reposListContributors` - List repository contributors
* `reposListDeployKeys` - List deploy keys
* `reposListDeploymentStatuses` - List deployment statuses
* `reposListDeployments` - List deployments
* `reposListForAuthenticatedUser` - List repositories for the authenticated user
* `reposListForOrg` - List organization repositories
* `reposListForUser` - List repositories for a user
* `reposListForks` - List forks
* `reposListInvitations` - List repository invitations
* `reposListInvitationsForAuthenticatedUser` - List repository invitations for the authenticated user
* `reposListLanguages` - List repository languages
* `reposListPagesBuilds` - List GitHub Pages builds
* `reposListPublic` - List public repositories
* `reposListPullRequestsAssociatedWithCommit` - List pull requests associated with a commit
* `reposListReleaseAssets` - List release assets
* `reposListReleases` - List releases
* `reposListTags` - List repository tags
* `reposListTeams` - List repository teams
* `reposListWebhooks` - List repository webhooks
* `reposMerge` - Merge a branch
* `reposPingWebhook` - Ping a repository webhook
* `reposRemoveAppAccessRestrictions` - Remove app access restrictions
* `reposRemoveCollaborator` - Remove a repository collaborator
* `reposRemoveStatusCheckContexts` - Remove status check contexts
* `reposRemoveStatusCheckProtection` - Remove status check protection
* `reposRemoveTeamAccessRestrictions` - Remove team access restrictions
* `reposRemoveUserAccessRestrictions` - Remove user access restrictions
* `reposRenameBranch` - Rename a branch
* `reposReplaceAllTopics` - Replace all repository topics
* `reposRequestPagesBuild` - Request a GitHub Pages build
* `reposSetAdminBranchProtection` - Set admin branch protection
* `reposSetAppAccessRestrictions` - Set app access restrictions
* `reposSetStatusCheckContexts` - Set status check contexts
* `reposSetTeamAccessRestrictions` - Set team access restrictions
* `reposSetUserAccessRestrictions` - Set user access restrictions
* `reposTestPushWebhook` - Test the push repository webhook
* `reposTransfer` - Transfer a repository
* `reposUpdate` - Update a repository
* `reposUpdateBranchProtection` - Update branch protection
* `reposUpdateCommitComment` - Update a commit comment
* `reposUpdateInformationAboutPagesSite` - Update information about a GitHub Pages site
* `reposUpdateInvitation` - Update a repository invitation
* `reposUpdatePullRequestReviewProtection` - Update pull request review protection
* `reposUpdateRelease` - Update a release
* `reposUpdateReleaseAsset` - Update a release asset
* `reposUpdateStatusCheckProtection` - Update status check protection
* `reposUpdateWebhook` - Update a repository webhook
* `reposUpdateWebhookConfigForRepo` - Update a webhook configuration for a repository
* `reposUploadReleaseAsset` - Upload a release asset
* `scimDeleteUserFromOrg` - Delete a SCIM user from an organization
* `scimGetProvisioningInformationForUser` - Get SCIM provisioning information for a user
* `scimListProvisionedIdentities` - List SCIM provisioned identities
* `scimProvisionAndInviteUser` - Provision and invite a SCIM user
* `scimSetInformationForProvisionedUser` - Update a provisioned organization membership
* `scimUpdateAttributeForUser` - Update an attribute for a SCIM user
* `searchCode` - Search code
* `searchCommits` - Search commits
* `searchIssuesAndPullRequests` - Search issues and pull requests
* `searchLabels` - Search labels
* `searchRepos` - Search repositories
* `searchTopics` - Search topics
* `searchUsers` - Search users
* `secretScanningGetAlert` - Get a secret scanning alert
* `secretScanningListAlertsForRepo` - List secret scanning alerts for a repository
* `secretScanningUpdateAlert` - Update a secret scanning alert
* `teamsAddMemberLegacy` - Add team member (Legacy)
* `teamsAddOrUpdateMembershipForUserInOrg` - Add or update team membership for a user
* `teamsAddOrUpdateMembershipForUserLegacy` - Add or update team membership for a user (Legacy)
* `teamsAddOrUpdateProjectPermissionsInOrg` - Add or update team project permissions
* `teamsAddOrUpdateProjectPermissionsLegacy` - Add or update team project permissions (Legacy)
* `teamsAddOrUpdateRepoPermissionsInOrg` - Add or update team repository permissions
* `teamsAddOrUpdateRepoPermissionsLegacy` - Add or update team repository permissions (Legacy)
* `teamsCheckPermissionsForProjectInOrg` - Check team permissions for a project
* `teamsCheckPermissionsForProjectLegacy` - Check team permissions for a project (Legacy)
* `teamsCheckPermissionsForRepoInOrg` - Check team permissions for a repository
* `teamsCheckPermissionsForRepoLegacy` - Check team permissions for a repository (Legacy)
* `teamsCreate` - Create a team
* `teamsCreateDiscussionCommentInOrg` - Create a discussion comment
* `teamsCreateDiscussionCommentLegacy` - Create a discussion comment (Legacy)
* `teamsCreateDiscussionInOrg` - Create a discussion
* `teamsCreateDiscussionLegacy` - Create a discussion (Legacy)
* `teamsCreateOrUpdateIdpGroupConnectionsInOrg` - Create or update IdP group connections
* `teamsCreateOrUpdateIdpGroupConnectionsLegacy` - Create or update IdP group connections (Legacy)
* `teamsDeleteDiscussionCommentInOrg` - Delete a discussion comment
* `teamsDeleteDiscussionCommentLegacy` - Delete a discussion comment (Legacy)
* `teamsDeleteDiscussionInOrg` - Delete a discussion
* `teamsDeleteDiscussionLegacy` - Delete a discussion (Legacy)
* `teamsDeleteInOrg` - Delete a team
* `teamsDeleteLegacy` - Delete a team (Legacy)
* `teamsGetByName` - Get a team by name
* `teamsGetDiscussionCommentInOrg` - Get a discussion comment
* `teamsGetDiscussionCommentLegacy` - Get a discussion comment (Legacy)
* `teamsGetDiscussionInOrg` - Get a discussion
* `teamsGetDiscussionLegacy` - Get a discussion (Legacy)
* `teamsGetLegacy` - Get a team (Legacy)
* `teamsGetMemberLegacy` - Get team member (Legacy)
* `teamsGetMembershipForUserInOrg` - Get team membership for a user
* `teamsGetMembershipForUserLegacy` - Get team membership for a user (Legacy)
* `teamsList` - List teams
* `teamsListChildInOrg` - List child teams
* `teamsListChildLegacy` - List child teams (Legacy)
* `teamsListDiscussionCommentsInOrg` - List discussion comments
* `teamsListDiscussionCommentsLegacy` - List discussion comments (Legacy)
* `teamsListDiscussionsInOrg` - List discussions
* `teamsListDiscussionsLegacy` - List discussions (Legacy)
* `teamsListForAuthenticatedUser` - List teams for the authenticated user
* `teamsListIdpGroupsForLegacy` - List IdP groups for a team (Legacy)
* `teamsListIdpGroupsForOrg` - List IdP groups for an organization
* `teamsListIdpGroupsInOrg` - List IdP groups for a team
* `teamsListMembersInOrg` - List team members
* `teamsListMembersLegacy` - List team members (Legacy)
* `teamsListPendingInvitationsInOrg` - List pending team invitations
* `teamsListPendingInvitationsLegacy` - List pending team invitations (Legacy)
* `teamsListProjectsInOrg` - List team projects
* `teamsListProjectsLegacy` - List team projects (Legacy)
* `teamsListReposInOrg` - List team repositories
* `teamsListReposLegacy` - List team repositories (Legacy)
* `teamsRemoveMemberLegacy` - Remove team member (Legacy)
* `teamsRemoveMembershipForUserInOrg` - Remove team membership for a user
* `teamsRemoveMembershipForUserLegacy` - Remove team membership for a user (Legacy)
* `teamsRemoveProjectInOrg` - Remove a project from a team
* `teamsRemoveProjectLegacy` - Remove a project from a team (Legacy)
* `teamsRemoveRepoInOrg` - Remove a repository from a team
* `teamsRemoveRepoLegacy` - Remove a repository from a team (Legacy)
* `teamsUpdateDiscussionCommentInOrg` - Update a discussion comment
* `teamsUpdateDiscussionCommentLegacy` - Update a discussion comment (Legacy)
* `teamsUpdateDiscussionInOrg` - Update a discussion
* `teamsUpdateDiscussionLegacy` - Update a discussion (Legacy)
* `teamsUpdateInOrg` - Update a team
* `teamsUpdateLegacy` - Update a team (Legacy)
* `usersAddEmailForAuthenticated` - Add an email address for the authenticated user
* `usersBlock` - Block a user
* `usersCheckBlocked` - Check if a user is blocked by the authenticated user
* `usersCheckFollowingForUser` - Check if a user follows another user
* `usersCheckPersonIsFollowedByAuthenticated` - Check if a person is followed by the authenticated user
* `usersCreateGpgKeyForAuthenticated` - Create a GPG key for the authenticated user
* `usersCreatePublicSshKeyForAuthenticated` - Create a public SSH key for the authenticated user
* `usersDeleteEmailForAuthenticated` - Delete an email address for the authenticated user
* `usersDeleteGpgKeyForAuthenticated` - Delete a GPG key for the authenticated user
* `usersDeletePublicSshKeyForAuthenticated` - Delete a public SSH key for the authenticated user
* `usersFollow` - Follow a user
* `usersGetAuthenticated` - Get the authenticated user
* `usersGetByUsername` - Get a user
* `usersGetContextForUser` - Get contextual information for a user
* `usersGetGpgKeyForAuthenticated` - Get a GPG key for the authenticated user
* `usersGetPublicSshKeyForAuthenticated` - Get a public SSH key for the authenticated user
* `usersList` - List users
* `usersListBlockedByAuthenticated` - List users blocked by the authenticated user
* `usersListEmailsForAuthenticated` - List email addresses for the authenticated user
* `usersListFollowedByAuthenticated` - List the people the authenticated user follows
* `usersListFollowersForAuthenticatedUser` - List followers of the authenticated user
* `usersListFollowersForUser` - List followers of a user
* `usersListFollowingForUser` - List the people a user follows
* `usersListGpgKeysForAuthenticated` - List GPG keys for the authenticated user
* `usersListGpgKeysForUser` - List GPG keys for a user
* `usersListPublicEmailsForAuthenticated` - List public email addresses for the authenticated user
* `usersListPublicKeysForUser` - List public keys for a user
* `usersListPublicSshKeysForAuthenticated` - List public SSH keys for the authenticated user
* `usersSetPrimaryEmailVisibilityForAuthenticated` - Set primary email visibility for the authenticated user
* `usersUnblock` - Unblock a user
* `usersUnfollow` - Unfollow a user
* `usersUpdateAuthenticated` - Update the authenticated user

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
