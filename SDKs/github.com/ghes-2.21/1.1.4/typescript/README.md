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
import { ActivityCheckRepoIsStarredByAuthenticatedUserRequest, ActivityCheckRepoIsStarredByAuthenticatedUserResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ActivityCheckRepoIsStarredByAuthenticatedUserRequest = {
  pathParams: {
    owner: "ut",
    repo: "tempora",
  },
};

sdk.activity.activityCheckRepoIsStarredByAuthenticatedUser(req).then((res: ActivityCheckRepoIsStarredByAuthenticatedUserResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### activity

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

### apps

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
* `appsGetUserInstallation` - Get a user installation for the authenticated app
* `appsListInstallationReposForAuthenticatedUser` - List repositories accessible to the user access token
* `appsListInstallations` - List installations for the authenticated app
* `appsListInstallationsForAuthenticatedUser` - List app installations accessible to the user access token
* `appsListReposAccessibleToInstallation` - List repositories accessible to the app installation
* `appsRemoveRepoFromInstallation` - Remove a repository from an app installation
* `appsResetAuthorization` - Reset an authorization
* `appsResetToken` - Reset a token
* `appsRevokeAuthorizationForApplication` - Revoke an authorization for an application
* `appsRevokeGrantForApplication` - Revoke a grant for an application
* `appsRevokeInstallationAccessToken` - Revoke an installation access token

### checks

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

### codes-of-conduct

* `codesOfConductGetAllCodesOfConduct` - Get all codes of conduct
* `codesOfConductGetConductCode` - Get a code of conduct

### emojis

* `emojisGet` - Get emojis

### enterprise-admin

* `enterpriseAdminAddAuthorizedSshKey` - Add an authorized SSH key
* `enterpriseAdminCreateEnterpriseServerLicense` - Create a GitHub license
* `enterpriseAdminCreateGlobalWebhook` - Create a global webhook
* `enterpriseAdminCreateImpersonationOAuthToken` - Create an impersonation OAuth token
* `enterpriseAdminCreateOrg` - Create an organization
* `enterpriseAdminCreatePreReceiveEnvironment` - Create a pre-receive environment
* `enterpriseAdminCreatePreReceiveHook` - Create a pre-receive hook
* `enterpriseAdminCreateUser` - Create a user
* `enterpriseAdminDeleteGlobalWebhook` - Delete a global webhook
* `enterpriseAdminDeleteImpersonationOAuthToken` - Delete an impersonation OAuth token
* `enterpriseAdminDeletePersonalAccessToken` - Delete a personal access token
* `enterpriseAdminDeletePreReceiveEnvironment` - Delete a pre-receive environment
* `enterpriseAdminDeletePreReceiveHook` - Delete a pre-receive hook
* `enterpriseAdminDeletePublicKey` - Delete a public key
* `enterpriseAdminDeleteUser` - Delete a user
* `enterpriseAdminDemoteSiteAdministrator` - Demote a site administrator
* `enterpriseAdminEnableOrDisableMaintenanceMode` - Enable or disable maintenance mode
* `enterpriseAdminGetAllAuthorizedSshKeys` - Get all authorized SSH keys
* `enterpriseAdminGetConfigurationStatus` - Get the configuration status
* `enterpriseAdminGetDownloadStatusForPreReceiveEnvironment` - Get the download status for a pre-receive environment
* `enterpriseAdminGetGlobalWebhook` - Get a global webhook
* `enterpriseAdminGetLicenseInformation` - Get license information
* `enterpriseAdminGetMaintenanceStatus` - Get the maintenance status
* `enterpriseAdminGetPreReceiveEnvironment` - Get a pre-receive environment
* `enterpriseAdminGetPreReceiveHook` - Get a pre-receive hook
* `enterpriseAdminGetPreReceiveHookForOrg` - Get a pre-receive hook for an organization
* `enterpriseAdminGetPreReceiveHookForRepo` - Get a pre-receive hook for a repository
* `enterpriseAdminGetSettings` - Get settings
* `enterpriseAdminGetTypeStats` - Get statistics
* `enterpriseAdminListGlobalWebhooks` - List global webhooks
* `enterpriseAdminListPersonalAccessTokens` - List personal access tokens
* `enterpriseAdminListPreReceiveEnvironments` - List pre-receive environments
* `enterpriseAdminListPreReceiveHooks` - List pre-receive hooks
* `enterpriseAdminListPreReceiveHooksForOrg` - List pre-receive hooks for an organization
* `enterpriseAdminListPreReceiveHooksForRepo` - List pre-receive hooks for a repository
* `enterpriseAdminListPublicKeys` - List public keys
* `enterpriseAdminPingGlobalWebhook` - Ping a global webhook
* `enterpriseAdminPromoteUserToBeSiteAdministrator` - Promote a user to be a site administrator
* `enterpriseAdminRemoveAuthorizedSshKey` - Remove an authorized SSH key
* `enterpriseAdminRemovePreReceiveHookEnforcementForOrg` - Remove pre-receive hook enforcement for an organization
* `enterpriseAdminRemovePreReceiveHookEnforcementForRepo` - Remove pre-receive hook enforcement for a repository
* `enterpriseAdminSetSettings` - Set settings
* `enterpriseAdminStartConfigurationProcess` - Start a configuration process
* `enterpriseAdminStartPreReceiveEnvironmentDownload` - Start a pre-receive environment download
* `enterpriseAdminSuspendUser` - Suspend a user
* `enterpriseAdminSyncLdapMappingForTeam` - Sync LDAP mapping for a team
* `enterpriseAdminSyncLdapMappingForUser` - Sync LDAP mapping for a user
* `enterpriseAdminUnsuspendUser` - Unsuspend a user
* `enterpriseAdminUpdateGlobalWebhook` - Update a global webhook
* `enterpriseAdminUpdateLdapMappingForTeam` - Update LDAP mapping for a team
* `enterpriseAdminUpdateLdapMappingForUser` - Update LDAP mapping for a user
* `enterpriseAdminUpdateOrgName` - Update an organization name
* `enterpriseAdminUpdatePreReceiveEnvironment` - Update a pre-receive environment
* `enterpriseAdminUpdatePreReceiveHook` - Update a pre-receive hook
* `enterpriseAdminUpdatePreReceiveHookEnforcementForOrg` - Update pre-receive hook enforcement for an organization
* `enterpriseAdminUpdatePreReceiveHookEnforcementForRepo` - Update pre-receive hook enforcement for a repository
* `enterpriseAdminUpdateUsernameForUser` - Update the username for a user
* `enterpriseAdminUpgradeLicense` - Upgrade a license

### gists

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

### git

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

### gitignore

* `gitignoreGetAllTemplates` - Get all gitignore templates
* `gitignoreGetTemplate` - Get a gitignore template

### issues

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

### licenses

* `licensesGet` - Get a license
* `licensesGetAllCommonlyUsed` - Get all commonly used licenses
* `licensesGetForRepo` - Get the license for a repository

### markdown

* `markdownRender` - Render a Markdown document
* `markdownRenderRaw` - Render a Markdown document in raw mode

### meta

* `metaGet` - Get GitHub Enterprise Server meta information
* `metaGetOctocat` - Get Octocat
* `metaGetZen` - Get the Zen of GitHub
* `metaRoot` - GitHub API Root

### oauth-authorizations

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

### orgs

* `orgsCheckMembershipForUser` - Check organization membership for a user
* `orgsCheckPublicMembershipForUser` - Check public organization membership for a user
* `orgsConvertMemberToOutsideCollaborator` - Convert an organization member to outside collaborator
* `orgsCreateWebhook` - Create an organization webhook
* `orgsDeleteWebhook` - Delete an organization webhook
* `orgsGet` - Get an organization
* `orgsGetMembershipForAuthenticatedUser` - Get an organization membership for the authenticated user
* `orgsGetMembershipForUser` - Get organization membership for a user
* `orgsGetWebhook` - Get an organization webhook
* `orgsList` - List organizations
* `orgsListAppInstallations` - List app installations for an organization
* `orgsListForAuthenticatedUser` - List organizations for the authenticated user
* `orgsListForUser` - List organizations for a user
* `orgsListMembers` - List organization members
* `orgsListMembershipsForAuthenticatedUser` - List organization memberships for the authenticated user
* `orgsListOutsideCollaborators` - List outside collaborators for an organization
* `orgsListPublicMembers` - List public organization members
* `orgsListWebhooks` - List organization webhooks
* `orgsPingWebhook` - Ping an organization webhook
* `orgsRemoveMember` - Remove an organization member
* `orgsRemoveMembershipForUser` - Remove organization membership for a user
* `orgsRemoveOutsideCollaborator` - Remove outside collaborator from an organization
* `orgsRemovePublicMembershipForAuthenticatedUser` - Remove public organization membership for the authenticated user
* `orgsSetMembershipForUser` - Set organization membership for a user
* `orgsSetPublicMembershipForAuthenticatedUser` - Set public organization membership for the authenticated user
* `orgsUpdate` - Update an organization
* `orgsUpdateMembershipForAuthenticatedUser` - Update an organization membership for the authenticated user
* `orgsUpdateWebhook` - Update an organization webhook

### projects

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

### pulls

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

### rate-limit

* `rateLimitGet` - Get rate limit status for the authenticated user

### reactions

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

### repos

* `reposAcceptInvitation` - Accept a repository invitation
* `reposAddAppAccessRestrictions` - Add app access restrictions
* `reposAddCollaborator` - Add a repository collaborator
* `reposAddStatusCheckContexts` - Add status check contexts
* `reposAddTeamAccessRestrictions` - Add team access restrictions
* `reposAddUserAccessRestrictions` - Add user access restrictions
* `reposCheckCollaborator` - Check if a user is a repository collaborator
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
* `reposCreateOrUpdateFileContents` - Create or update file contents
* `reposCreatePagesSite` - Create a GitHub Pages site
* `reposCreateRelease` - Create a release
* `reposCreateUsingTemplate` - Create a repository using a template
* `reposCreateWebhook` - Create a repository webhook
* `reposDeclineInvitation` - Decline a repository invitation
* `reposDelete` - Delete a repository
* `reposDeleteAccessRestrictions` - Delete access restrictions
* `reposDeleteAdminBranchProtection` - Delete admin branch protection
* `reposDeleteBranchProtection` - Delete branch protection
* `reposDeleteCommitComment` - Delete a commit comment
* `reposDeleteCommitSignatureProtection` - Delete commit signature protection
* `reposDeleteDeployKey` - Delete a deploy key
* `reposDeleteDeployment` - Delete a deployment
* `reposDeleteFile` - Delete a file
* `reposDeleteInvitation` - Delete a repository invitation
* `reposDeletePagesSite` - Delete a GitHub Enterprise Server Pages site
* `reposDeletePullRequestReviewProtection` - Delete pull request review protection
* `reposDeleteRelease` - Delete a release
* `reposDeleteReleaseAsset` - Delete a release asset
* `reposDeleteWebhook` - Delete a repository webhook
* `reposDownloadTarballArchive` - Download a repository archive (tar)
* `reposDownloadZipballArchive` - Download a repository archive (zip)
* `reposGet` - Get a repository
* `reposGetAccessRestrictions` - Get access restrictions
* `reposGetAdminBranchProtection` - Get admin branch protection
* `reposGetAllStatusCheckContexts` - Get all status check contexts
* `reposGetAllTopics` - Get all repository topics
* `reposGetAppsWithAccessToProtectedBranch` - Get apps with access to the protected branch
* `reposGetBranch` - Get a branch
* `reposGetBranchProtection` - Get branch protection
* `reposGetCodeFrequencyStats` - Get the weekly commit activity
* `reposGetCollaboratorPermissionLevel` - Get repository permissions for a user
* `reposGetCombinedStatusForRef` - Get the combined status for a specific reference
* `reposGetCommit` - Get a commit
* `reposGetCommitActivityStats` - Get the last year of commit activity
* `reposGetCommitComment` - Get a commit comment
* `reposGetCommitSignatureProtection` - Get commit signature protection
* `reposGetContent` - Get repository content
* `reposGetContributorsStats` - Get all contributor commit activity
* `reposGetDeployKey` - Get a deploy key
* `reposGetDeployment` - Get a deployment
* `reposGetDeploymentStatus` - Get a deployment status
* `reposGetLatestPagesBuild` - Get latest Pages build
* `reposGetLatestRelease` - Get the latest release
* `reposGetPages` - Get a GitHub Enterprise Server Pages site
* `reposGetPagesBuild` - Get GitHub Enterprise Server Pages build
* `reposGetParticipationStats` - Get the weekly commit count
* `reposGetPullRequestReviewProtection` - Get pull request review protection
* `reposGetPunchCardStats` - Get the hourly commit count for each day
* `reposGetReadme` - Get a repository README
* `reposGetReadmeInDirectory` - Get a repository README for a directory
* `reposGetRelease` - Get a release
* `reposGetReleaseAsset` - Get a release asset
* `reposGetReleaseByTag` - Get a release by tag name
* `reposGetStatusChecksProtection` - Get status checks protection
* `reposGetTeamsWithAccessToProtectedBranch` - Get teams with access to the protected branch
* `reposGetUsersWithAccessToProtectedBranch` - Get users with access to the protected branch
* `reposGetWebhook` - Get a repository webhook
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
* `reposListPagesBuilds` - List GitHub Enterprise Server Pages builds
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
* `reposReplaceAllTopics` - Replace all repository topics
* `reposRequestPagesBuild` - Request a GitHub Enterprise Server Pages build
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
* `reposUploadReleaseAsset` - Upload a release asset

### search

* `searchCode` - Search code
* `searchCommits` - Search commits
* `searchIssuesAndPullRequests` - Search issues and pull requests
* `searchLabels` - Search labels
* `searchRepos` - Search repositories
* `searchTopics` - Search topics
* `searchUsers` - Search users

### teams

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
* `teamsListMembersInOrg` - List team members
* `teamsListMembersLegacy` - List team members (Legacy)
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

### users

* `usersAddEmailForAuthenticated` - Add an email address for the authenticated user
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
* `usersUnfollow` - Unfollow a user
* `usersUpdateAuthenticated` - Update the authenticated user

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
