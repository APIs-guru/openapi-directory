# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest(
    path_params=operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgPathParams(
        org="similique",
        repository_id=4720841853374531491,
        runner_group_id=2062157674888119143,
    ),
)
    
res = s.actions.actions_add_repo_access_to_self_hosted_runner_group_in_org(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### actions

* `actions_add_repo_access_to_self_hosted_runner_group_in_org` - Add repository access to a self-hosted runner group in an organization
* `actions_add_selected_repo_to_org_secret` - Add selected repository to an organization secret
* `actions_add_self_hosted_runner_to_group_for_org` - Add a self-hosted runner to a group for an organization
* `actions_cancel_workflow_run` - Cancel a workflow run
* `actions_create_or_update_org_secret` - Create or update an organization secret
* `actions_create_or_update_repo_secret` - Create or update a repository secret
* `actions_create_registration_token_for_org` - Create a registration token for an organization
* `actions_create_registration_token_for_repo` - Create a registration token for a repository
* `actions_create_remove_token_for_org` - Create a remove token for an organization
* `actions_create_remove_token_for_repo` - Create a remove token for a repository
* `actions_create_self_hosted_runner_group_for_org` - Create a self-hosted runner group for an organization
* `actions_create_workflow_dispatch` - Create a workflow dispatch event
* `actions_delete_artifact` - Delete an artifact
* `actions_delete_org_secret` - Delete an organization secret
* `actions_delete_repo_secret` - Delete a repository secret
* `actions_delete_self_hosted_runner_from_org` - Delete a self-hosted runner from an organization
* `actions_delete_self_hosted_runner_from_repo` - Delete a self-hosted runner from a repository
* `actions_delete_self_hosted_runner_group_from_org` - Delete a self-hosted runner group from an organization
* `actions_delete_workflow_run` - Delete a workflow run
* `actions_delete_workflow_run_logs` - Delete workflow run logs
* `actions_disable_selected_repository_github_actions_organization` - Disable a selected repository for GitHub Actions in an organization
* `actions_disable_workflow` - Disable a workflow
* `actions_download_artifact` - Download an artifact
* `actions_download_job_logs_for_workflow_run` - Download job logs for a workflow run
* `actions_download_workflow_run_logs` - Download workflow run logs
* `actions_enable_selected_repository_github_actions_organization` - Enable a selected repository for GitHub Actions in an organization
* `actions_enable_workflow` - Enable a workflow
* `actions_get_allowed_actions_organization` - Get allowed actions for an organization
* `actions_get_allowed_actions_repository` - Get allowed actions for a repository
* `actions_get_artifact` - Get an artifact
* `actions_get_github_actions_permissions_organization` - Get GitHub Actions permissions for an organization
* `actions_get_github_actions_permissions_repository` - Get GitHub Actions permissions for a repository
* `actions_get_job_for_workflow_run` - Get a job for a workflow run
* `actions_get_org_public_key` - Get an organization public key
* `actions_get_org_secret` - Get an organization secret
* `actions_get_repo_public_key` - Get a repository public key
* `actions_get_repo_secret` - Get a repository secret
* `actions_get_self_hosted_runner_for_org` - Get a self-hosted runner for an organization
* `actions_get_self_hosted_runner_for_repo` - Get a self-hosted runner for a repository
* `actions_get_self_hosted_runner_group_for_org` - Get a self-hosted runner group for an organization
* `actions_get_workflow` - Get a workflow
* `actions_get_workflow_run` - Get a workflow run
* `actions_list_artifacts_for_repo` - List artifacts for a repository
* `actions_list_jobs_for_workflow_run` - List jobs for a workflow run
* `actions_list_org_secrets` - List organization secrets
* `actions_list_repo_access_to_self_hosted_runner_group_in_org` - List repository access to a self-hosted runner group in an organization
* `actions_list_repo_secrets` - List repository secrets
* `actions_list_repo_workflows` - List repository workflows
* `actions_list_runner_applications_for_org` - List runner applications for an organization
* `actions_list_runner_applications_for_repo` - List runner applications for a repository
* `actions_list_selected_repos_for_org_secret` - List selected repositories for an organization secret
* `actions_list_selected_repositories_enabled_github_actions_organization` - List selected repositories enabled for GitHub Actions in an organization
* `actions_list_self_hosted_runner_groups_for_org` - List self-hosted runner groups for an organization
* `actions_list_self_hosted_runners_for_org` - List self-hosted runners for an organization
* `actions_list_self_hosted_runners_for_repo` - List self-hosted runners for a repository
* `actions_list_self_hosted_runners_in_group_for_org` - List self-hosted runners in a group for an organization
* `actions_list_workflow_run_artifacts` - List workflow run artifacts
* `actions_list_workflow_runs` - List workflow runs
* `actions_list_workflow_runs_for_repo` - List workflow runs for a repository
* `actions_re_run_workflow` - Re-run a workflow
* `actions_remove_repo_access_to_self_hosted_runner_group_in_org` - Remove repository access to a self-hosted runner group in an organization
* `actions_remove_selected_repo_from_org_secret` - Remove selected repository from an organization secret
* `actions_remove_self_hosted_runner_from_group_for_org` - Remove a self-hosted runner from a group for an organization
* `actions_set_allowed_actions_organization` - Set allowed actions for an organization
* `actions_set_allowed_actions_repository` - Set allowed actions for a repository
* `actions_set_github_actions_permissions_organization` - Set GitHub Actions permissions for an organization
* `actions_set_github_actions_permissions_repository` - Set GitHub Actions permissions for a repository
* `actions_set_repo_access_to_self_hosted_runner_group_in_org` - Set repository access for a self-hosted runner group in an organization
* `actions_set_selected_repos_for_org_secret` - Set selected repositories for an organization secret
* `actions_set_selected_repositories_enabled_github_actions_organization` - Set selected repositories enabled for GitHub Actions in an organization
* `actions_set_self_hosted_runners_in_group_for_org` - Set self-hosted runners in a group for an organization
* `actions_update_self_hosted_runner_group_for_org` - Update a self-hosted runner group for an organization

### activity

* `activity_check_repo_is_starred_by_authenticated_user` - Check if a repository is starred by the authenticated user
* `activity_delete_repo_subscription` - Delete a repository subscription
* `activity_delete_thread_subscription` - Delete a thread subscription
* `activity_get_feeds` - Get feeds
* `activity_get_repo_subscription` - Get a repository subscription
* `activity_get_thread` - Get a thread
* `activity_get_thread_subscription_for_authenticated_user` - Get a thread subscription for the authenticated user
* `activity_list_events_for_authenticated_user` - List events for the authenticated user
* `activity_list_notifications_for_authenticated_user` - List notifications for the authenticated user
* `activity_list_org_events_for_authenticated_user` - List organization events for the authenticated user
* `activity_list_public_events` - List public events
* `activity_list_public_events_for_repo_network` - List public events for a network of repositories
* `activity_list_public_events_for_user` - List public events for a user
* `activity_list_public_org_events` - List public organization events
* `activity_list_received_events_for_user` - List events received by the authenticated user
* `activity_list_received_public_events_for_user` - List public events received by a user
* `activity_list_repo_events` - List repository events
* `activity_list_repo_notifications_for_authenticated_user` - List repository notifications for the authenticated user
* `activity_list_repos_starred_by_authenticated_user` - List repositories starred by the authenticated user
* `activity_list_repos_starred_by_user` - List repositories starred by a user
* `activity_list_repos_watched_by_user` - List repositories watched by a user
* `activity_list_stargazers_for_repo` - List stargazers
* `activity_list_watched_repos_for_authenticated_user` - List repositories watched by the authenticated user
* `activity_list_watchers_for_repo` - List watchers
* `activity_mark_notifications_as_read` - Mark notifications as read
* `activity_mark_repo_notifications_as_read` - Mark repository notifications as read
* `activity_mark_thread_as_read` - Mark a thread as read
* `activity_set_repo_subscription` - Set a repository subscription
* `activity_set_thread_subscription` - Set a thread subscription
* `activity_star_repo_for_authenticated_user` - Star a repository for the authenticated user
* `activity_unstar_repo_for_authenticated_user` - Unstar a repository for the authenticated user

### apps

* `apps_add_repo_to_installation` - Add a repository to an app installation
* `apps_check_authorization` - Check an authorization
* `apps_check_token` - Check a token
* `apps_create_content_attachment` - Create a content attachment
* `apps_create_from_manifest` - Create a GitHub App from a manifest
* `apps_create_installation_access_token` - Create an installation access token for an app
* `apps_delete_authorization` - Delete an app authorization
* `apps_delete_installation` - Delete an installation for the authenticated app
* `apps_delete_token` - Delete an app token
* `apps_get_authenticated` - Get the authenticated app
* `apps_get_by_slug` - Get an app
* `apps_get_installation` - Get an installation for the authenticated app
* `apps_get_org_installation` - Get an organization installation for the authenticated app
* `apps_get_repo_installation` - Get a repository installation for the authenticated app
* `apps_get_user_installation` - Get a user installation for the authenticated app
* `apps_get_webhook_config_for_app` - Get a webhook configuration for an app
* `apps_list_installation_repos_for_authenticated_user` - List repositories accessible to the user access token
* `apps_list_installations` - List installations for the authenticated app
* `apps_list_installations_for_authenticated_user` - List app installations accessible to the user access token
* `apps_list_repos_accessible_to_installation` - List repositories accessible to the app installation
* `apps_remove_repo_from_installation` - Remove a repository from an app installation
* `apps_reset_authorization` - Reset an authorization
* `apps_reset_token` - Reset a token
* `apps_revoke_authorization_for_application` - Revoke an authorization for an application
* `apps_revoke_grant_for_application` - Revoke a grant for an application
* `apps_revoke_installation_access_token` - Revoke an installation access token
* `apps_scope_token` - Create a scoped access token
* `apps_suspend_installation` - Suspend an app installation
* `apps_unsuspend_installation` - Unsuspend an app installation
* `apps_update_webhook_config_for_app` - Update a webhook configuration for an app

### checks

* `checks_create` - Create a check run
* `checks_create_suite` - Create a check suite
* `checks_get` - Get a check run
* `checks_get_suite` - Get a check suite
* `checks_list_annotations` - List check run annotations
* `checks_list_for_ref` - List check runs for a Git reference
* `checks_list_for_suite` - List check runs in a check suite
* `checks_list_suites_for_ref` - List check suites for a Git reference
* `checks_rerequest_suite` - Rerequest a check suite
* `checks_set_suites_preferences` - Update repository preferences for check suites
* `checks_update` - Update a check run

### code-scanning

* `code_scanning_get_alert` - Get a code scanning alert
* `code_scanning_list_alerts_for_repo` - List code scanning alerts for a repository
* `code_scanning_list_recent_analyses` - List code scanning analyses for a repository
* `code_scanning_update_alert` - Update a code scanning alert
* `code_scanning_upload_sarif` - Upload an analysis as SARIF data

### codes-of-conduct

* `codes_of_conduct_get_all_codes_of_conduct` - Get all codes of conduct
* `codes_of_conduct_get_conduct_code` - Get a code of conduct

### emojis

* `emojis_get` - Get emojis

### enterprise-admin

* `enterprise_admin_add_authorized_ssh_key` - Add an authorized SSH key
* `enterprise_admin_add_org_access_to_self_hosted_runner_group_in_enterprise` - Add organization access to a self-hosted runner group in an enterprise
* `enterprise_admin_add_self_hosted_runner_to_group_for_enterprise` - Add a self-hosted runner to a group for an enterprise
* `enterprise_admin_create_enterprise_server_license` - Create a GitHub license
* `enterprise_admin_create_global_webhook` - Create a global webhook
* `enterprise_admin_create_impersonation_o_auth_token` - Create an impersonation OAuth token
* `enterprise_admin_create_org` - Create an organization
* `enterprise_admin_create_pre_receive_environment` - Create a pre-receive environment
* `enterprise_admin_create_pre_receive_hook` - Create a pre-receive hook
* `enterprise_admin_create_registration_token_for_enterprise` - Create a registration token for an enterprise
* `enterprise_admin_create_remove_token_for_enterprise` - Create a remove token for an enterprise
* `enterprise_admin_create_self_hosted_runner_group_for_enterprise` - Create a self-hosted runner group for an enterprise
* `enterprise_admin_create_user` - Create a user
* `enterprise_admin_delete_global_webhook` - Delete a global webhook
* `enterprise_admin_delete_impersonation_o_auth_token` - Delete an impersonation OAuth token
* `enterprise_admin_delete_personal_access_token` - Delete a personal access token
* `enterprise_admin_delete_pre_receive_environment` - Delete a pre-receive environment
* `enterprise_admin_delete_pre_receive_hook` - Delete a pre-receive hook
* `enterprise_admin_delete_public_key` - Delete a public key
* `enterprise_admin_delete_self_hosted_runner_from_enterprise` - Delete a self-hosted runner from an enterprise
* `enterprise_admin_delete_self_hosted_runner_group_from_enterprise` - Delete a self-hosted runner group from an enterprise
* `enterprise_admin_delete_user` - Delete a user
* `enterprise_admin_demote_site_administrator` - Demote a site administrator
* `enterprise_admin_disable_selected_organization_github_actions_enterprise` - Disable a selected organization for GitHub Actions in an enterprise
* `enterprise_admin_enable_or_disable_maintenance_mode` - Enable or disable maintenance mode
* `enterprise_admin_enable_selected_organization_github_actions_enterprise` - Enable a selected organization for GitHub Actions in an enterprise
* `enterprise_admin_get_all_authorized_ssh_keys` - Get all authorized SSH keys
* `enterprise_admin_get_allowed_actions_enterprise` - Get allowed actions for an enterprise
* `enterprise_admin_get_announcement` - Get the global announcement banner
* `enterprise_admin_get_configuration_status` - Get the configuration status
* `enterprise_admin_get_download_status_for_pre_receive_environment` - Get the download status for a pre-receive environment
* `enterprise_admin_get_github_actions_permissions_enterprise` - Get GitHub Actions permissions for an enterprise
* `enterprise_admin_get_global_webhook` - Get a global webhook
* `enterprise_admin_get_license_information` - Get license information
* `enterprise_admin_get_maintenance_status` - Get the maintenance status
* `enterprise_admin_get_pre_receive_environment` - Get a pre-receive environment
* `enterprise_admin_get_pre_receive_hook` - Get a pre-receive hook
* `enterprise_admin_get_pre_receive_hook_for_org` - Get a pre-receive hook for an organization
* `enterprise_admin_get_pre_receive_hook_for_repo` - Get a pre-receive hook for a repository
* `enterprise_admin_get_self_hosted_runner_for_enterprise` - Get a self-hosted runner for an enterprise
* `enterprise_admin_get_self_hosted_runner_group_for_enterprise` - Get a self-hosted runner group for an enterprise
* `enterprise_admin_get_settings` - Get settings
* `enterprise_admin_get_type_stats` - Get statistics
* `enterprise_admin_list_global_webhooks` - List global webhooks
* `enterprise_admin_list_org_access_to_self_hosted_runner_group_in_enterprise` - List organization access to a self-hosted runner group in an enterprise
* `enterprise_admin_list_personal_access_tokens` - List personal access tokens
* `enterprise_admin_list_pre_receive_environments` - List pre-receive environments
* `enterprise_admin_list_pre_receive_hooks` - List pre-receive hooks
* `enterprise_admin_list_pre_receive_hooks_for_org` - List pre-receive hooks for an organization
* `enterprise_admin_list_pre_receive_hooks_for_repo` - List pre-receive hooks for a repository
* `enterprise_admin_list_public_keys` - List public keys
* `enterprise_admin_list_runner_applications_for_enterprise` - List runner applications for an enterprise
* `enterprise_admin_list_selected_organizations_enabled_github_actions_enterprise` - List selected organizations enabled for GitHub Actions in an enterprise
* `enterprise_admin_list_self_hosted_runner_groups_for_enterprise` - List self-hosted runner groups for an enterprise
* `enterprise_admin_list_self_hosted_runners_for_enterprise` - List self-hosted runners for an enterprise
* `enterprise_admin_list_self_hosted_runners_in_group_for_enterprise` - List self-hosted runners in a group for an enterprise
* `enterprise_admin_ping_global_webhook` - Ping a global webhook
* `enterprise_admin_promote_user_to_be_site_administrator` - Promote a user to be a site administrator
* `enterprise_admin_remove_announcement` - Remove the global announcement banner
* `enterprise_admin_remove_authorized_ssh_key` - Remove an authorized SSH key
* `enterprise_admin_remove_org_access_to_self_hosted_runner_group_in_enterprise` - Remove organization access to a self-hosted runner group in an enterprise
* `enterprise_admin_remove_pre_receive_hook_enforcement_for_org` - Remove pre-receive hook enforcement for an organization
* `enterprise_admin_remove_pre_receive_hook_enforcement_for_repo` - Remove pre-receive hook enforcement for a repository
* `enterprise_admin_remove_self_hosted_runner_from_group_for_enterprise` - Remove a self-hosted runner from a group for an enterprise
* `enterprise_admin_set_allowed_actions_enterprise` - Set allowed actions for an enterprise
* `enterprise_admin_set_announcement` - Set the global announcement banner
* `enterprise_admin_set_github_actions_permissions_enterprise` - Set GitHub Actions permissions for an enterprise
* `enterprise_admin_set_org_access_to_self_hosted_runner_group_in_enterprise` - Set organization access for a self-hosted runner group in an enterprise
* `enterprise_admin_set_selected_organizations_enabled_github_actions_enterprise` - Set selected organizations enabled for GitHub Actions in an enterprise
* `enterprise_admin_set_self_hosted_runners_in_group_for_enterprise` - Set self-hosted runners in a group for an enterprise
* `enterprise_admin_set_settings` - Set settings
* `enterprise_admin_start_configuration_process` - Start a configuration process
* `enterprise_admin_start_pre_receive_environment_download` - Start a pre-receive environment download
* `enterprise_admin_suspend_user` - Suspend a user
* `enterprise_admin_sync_ldap_mapping_for_team` - Sync LDAP mapping for a team
* `enterprise_admin_sync_ldap_mapping_for_user` - Sync LDAP mapping for a user
* `enterprise_admin_unsuspend_user` - Unsuspend a user
* `enterprise_admin_update_global_webhook` - Update a global webhook
* `enterprise_admin_update_ldap_mapping_for_team` - Update LDAP mapping for a team
* `enterprise_admin_update_ldap_mapping_for_user` - Update LDAP mapping for a user
* `enterprise_admin_update_org_name` - Update an organization name
* `enterprise_admin_update_pre_receive_environment` - Update a pre-receive environment
* `enterprise_admin_update_pre_receive_hook` - Update a pre-receive hook
* `enterprise_admin_update_pre_receive_hook_enforcement_for_org` - Update pre-receive hook enforcement for an organization
* `enterprise_admin_update_pre_receive_hook_enforcement_for_repo` - Update pre-receive hook enforcement for a repository
* `enterprise_admin_update_self_hosted_runner_group_for_enterprise` - Update a self-hosted runner group for an enterprise
* `enterprise_admin_update_username_for_user` - Update the username for a user
* `enterprise_admin_upgrade_license` - Upgrade a license

### gists

* `gists_check_is_starred` - Check if a gist is starred
* `gists_create` - Create a gist
* `gists_create_comment` - Create a gist comment
* `gists_delete` - Delete a gist
* `gists_delete_comment` - Delete a gist comment
* `gists_fork` - Fork a gist
* `gists_get` - Get a gist
* `gists_get_comment` - Get a gist comment
* `gists_get_revision` - Get a gist revision
* `gists_list` - List gists for the authenticated user
* `gists_list_comments` - List gist comments
* `gists_list_commits` - List gist commits
* `gists_list_for_user` - List gists for a user
* `gists_list_forks` - List gist forks
* `gists_list_public` - List public gists
* `gists_list_starred` - List starred gists
* `gists_star` - Star a gist
* `gists_unstar` - Unstar a gist
* `gists_update` - Update a gist
* `gists_update_comment` - Update a gist comment

### git

* `git_create_blob` - Create a blob
* `git_create_commit` - Create a commit
* `git_create_ref` - Create a reference
* `git_create_tag` - Create a tag object
* `git_create_tree` - Create a tree
* `git_delete_ref` - Delete a reference
* `git_get_blob` - Get a blob
* `git_get_commit` - Get a commit
* `git_get_ref` - Get a reference
* `git_get_tag` - Get a tag
* `git_get_tree` - Get a tree
* `git_list_matching_refs` - List matching references
* `git_update_ref` - Update a reference

### gitignore

* `gitignore_get_all_templates` - Get all gitignore templates
* `gitignore_get_template` - Get a gitignore template

### issues

* `issues_add_assignees` - Add assignees to an issue
* `issues_add_labels` - Add labels to an issue
* `issues_check_user_can_be_assigned` - Check if a user can be assigned
* `issues_create` - Create an issue
* `issues_create_comment` - Create an issue comment
* `issues_create_label` - Create a label
* `issues_create_milestone` - Create a milestone
* `issues_delete_comment` - Delete an issue comment
* `issues_delete_label` - Delete a label
* `issues_delete_milestone` - Delete a milestone
* `issues_get` - Get an issue
* `issues_get_comment` - Get an issue comment
* `issues_get_event` - Get an issue event
* `issues_get_label` - Get a label
* `issues_get_milestone` - Get a milestone
* `issues_list` - List issues assigned to the authenticated user
* `issues_list_assignees` - List assignees
* `issues_list_comments` - List issue comments
* `issues_list_comments_for_repo` - List issue comments for a repository
* `issues_list_events` - List issue events
* `issues_list_events_for_repo` - List issue events for a repository
* `issues_list_events_for_timeline` - List timeline events for an issue
* `issues_list_for_authenticated_user` - List user account issues assigned to the authenticated user
* `issues_list_for_org` - List organization issues assigned to the authenticated user
* `issues_list_for_repo` - List repository issues
* `issues_list_labels_for_milestone` - List labels for issues in a milestone
* `issues_list_labels_for_repo` - List labels for a repository
* `issues_list_labels_on_issue` - List labels for an issue
* `issues_list_milestones` - List milestones
* `issues_lock` - Lock an issue
* `issues_remove_all_labels` - Remove all labels from an issue
* `issues_remove_assignees` - Remove assignees from an issue
* `issues_remove_label` - Remove a label from an issue
* `issues_set_labels` - Set labels for an issue
* `issues_unlock` - Unlock an issue
* `issues_update` - Update an issue
* `issues_update_comment` - Update an issue comment
* `issues_update_label` - Update a label
* `issues_update_milestone` - Update a milestone

### licenses

* `licenses_get` - Get a license
* `licenses_get_all_commonly_used` - Get all commonly used licenses
* `licenses_get_for_repo` - Get the license for a repository

### markdown

* `markdown_render` - Render a Markdown document
* `markdown_render_raw` - Render a Markdown document in raw mode

### meta

* `meta_get` - Get GitHub Enterprise Server meta information
* `meta_get_octocat` - Get Octocat
* `meta_get_zen` - Get the Zen of GitHub
* `meta_root` - GitHub API Root

### oauth-authorizations

* `oauth_authorizations_create_authorization` - Create a new authorization
* `oauth_authorizations_delete_authorization` - Delete an authorization
* `oauth_authorizations_delete_grant` - Delete a grant
* `oauth_authorizations_get_authorization` - Get a single authorization
* `oauth_authorizations_get_grant` - Get a single grant
* `oauth_authorizations_get_or_create_authorization_for_app` - Get-or-create an authorization for a specific app
* `oauth_authorizations_get_or_create_authorization_for_app_and_fingerprint` - Get-or-create an authorization for a specific app and fingerprint
* `oauth_authorizations_list_authorizations` - List your authorizations
* `oauth_authorizations_list_grants` - List your grants
* `oauth_authorizations_update_authorization` - Update an existing authorization

### orgs

* `orgs_check_membership_for_user` - Check organization membership for a user
* `orgs_check_public_membership_for_user` - Check public organization membership for a user
* `orgs_convert_member_to_outside_collaborator` - Convert an organization member to outside collaborator
* `orgs_create_webhook` - Create an organization webhook
* `orgs_delete_webhook` - Delete an organization webhook
* `orgs_get` - Get an organization
* `orgs_get_membership_for_authenticated_user` - Get an organization membership for the authenticated user
* `orgs_get_membership_for_user` - Get organization membership for a user
* `orgs_get_webhook` - Get an organization webhook
* `orgs_get_webhook_config_for_org` - Get a webhook configuration for an organization
* `orgs_list` - List organizations
* `orgs_list_app_installations` - List app installations for an organization
* `orgs_list_for_authenticated_user` - List organizations for the authenticated user
* `orgs_list_for_user` - List organizations for a user
* `orgs_list_members` - List organization members
* `orgs_list_memberships_for_authenticated_user` - List organization memberships for the authenticated user
* `orgs_list_outside_collaborators` - List outside collaborators for an organization
* `orgs_list_public_members` - List public organization members
* `orgs_list_webhooks` - List organization webhooks
* `orgs_ping_webhook` - Ping an organization webhook
* `orgs_remove_member` - Remove an organization member
* `orgs_remove_membership_for_user` - Remove organization membership for a user
* `orgs_remove_outside_collaborator` - Remove outside collaborator from an organization
* `orgs_remove_public_membership_for_authenticated_user` - Remove public organization membership for the authenticated user
* `orgs_set_membership_for_user` - Set organization membership for a user
* `orgs_set_public_membership_for_authenticated_user` - Set public organization membership for the authenticated user
* `orgs_update` - Update an organization
* `orgs_update_membership_for_authenticated_user` - Update an organization membership for the authenticated user
* `orgs_update_webhook` - Update an organization webhook
* `orgs_update_webhook_config_for_org` - Update a webhook configuration for an organization

### projects

* `projects_add_collaborator` - Add project collaborator
* `projects_create_card` - Create a project card
* `projects_create_column` - Create a project column
* `projects_create_for_authenticated_user` - Create a user project
* `projects_create_for_org` - Create an organization project
* `projects_create_for_repo` - Create a repository project
* `projects_delete` - Delete a project
* `projects_delete_card` - Delete a project card
* `projects_delete_column` - Delete a project column
* `projects_get` - Get a project
* `projects_get_card` - Get a project card
* `projects_get_column` - Get a project column
* `projects_get_permission_for_user` - Get project permission for a user
* `projects_list_cards` - List project cards
* `projects_list_collaborators` - List project collaborators
* `projects_list_columns` - List project columns
* `projects_list_for_org` - List organization projects
* `projects_list_for_repo` - List repository projects
* `projects_list_for_user` - List user projects
* `projects_move_card` - Move a project card
* `projects_move_column` - Move a project column
* `projects_remove_collaborator` - Remove user as a collaborator
* `projects_update` - Update a project
* `projects_update_card` - Update an existing project card
* `projects_update_column` - Update an existing project column

### pulls

* `pulls_check_if_merged` - Check if a pull request has been merged
* `pulls_create` - Create a pull request
* `pulls_create_reply_for_review_comment` - Create a reply for a review comment
* `pulls_create_review` - Create a review for a pull request
* `pulls_create_review_comment` - Create a review comment for a pull request
* `pulls_delete_pending_review` - Delete a pending review for a pull request
* `pulls_delete_review_comment` - Delete a review comment for a pull request
* `pulls_dismiss_review` - Dismiss a review for a pull request
* `pulls_get` - Get a pull request
* `pulls_get_review` - Get a review for a pull request
* `pulls_get_review_comment` - Get a review comment for a pull request
* `pulls_list` - List pull requests
* `pulls_list_comments_for_review` - List comments for a pull request review
* `pulls_list_commits` - List commits on a pull request
* `pulls_list_files` - List pull requests files
* `pulls_list_requested_reviewers` - List requested reviewers for a pull request
* `pulls_list_review_comments` - List review comments on a pull request
* `pulls_list_review_comments_for_repo` - List review comments in a repository
* `pulls_list_reviews` - List reviews for a pull request
* `pulls_merge` - Merge a pull request
* `pulls_remove_requested_reviewers` - Remove requested reviewers from a pull request
* `pulls_request_reviewers` - Request reviewers for a pull request
* `pulls_submit_review` - Submit a review for a pull request
* `pulls_update` - Update a pull request
* `pulls_update_branch` - Update a pull request branch
* `pulls_update_review` - Update a review for a pull request
* `pulls_update_review_comment` - Update a review comment for a pull request

### rate-limit

* `rate_limit_get` - Get rate limit status for the authenticated user

### reactions

* `reactions_create_for_commit_comment` - Create reaction for a commit comment
* `reactions_create_for_issue` - Create reaction for an issue
* `reactions_create_for_issue_comment` - Create reaction for an issue comment
* `reactions_create_for_pull_request_review_comment` - Create reaction for a pull request review comment
* `reactions_create_for_team_discussion_comment_in_org` - Create reaction for a team discussion comment
* `reactions_create_for_team_discussion_comment_legacy` - Create reaction for a team discussion comment (Legacy)
* `reactions_create_for_team_discussion_in_org` - Create reaction for a team discussion
* `reactions_create_for_team_discussion_legacy` - Create reaction for a team discussion (Legacy)
* `reactions_delete_for_commit_comment` - Delete a commit comment reaction
* `reactions_delete_for_issue` - Delete an issue reaction
* `reactions_delete_for_issue_comment` - Delete an issue comment reaction
* `reactions_delete_for_pull_request_comment` - Delete a pull request comment reaction
* `reactions_delete_for_team_discussion` - Delete team discussion reaction
* `reactions_delete_for_team_discussion_comment` - Delete team discussion comment reaction
* `reactions_delete_legacy` - Delete a reaction (Legacy)
* `reactions_list_for_commit_comment` - List reactions for a commit comment
* `reactions_list_for_issue` - List reactions for an issue
* `reactions_list_for_issue_comment` - List reactions for an issue comment
* `reactions_list_for_pull_request_review_comment` - List reactions for a pull request review comment
* `reactions_list_for_team_discussion_comment_in_org` - List reactions for a team discussion comment
* `reactions_list_for_team_discussion_comment_legacy` - List reactions for a team discussion comment (Legacy)
* `reactions_list_for_team_discussion_in_org` - List reactions for a team discussion
* `reactions_list_for_team_discussion_legacy` - List reactions for a team discussion (Legacy)

### repos

* `repos_accept_invitation` - Accept a repository invitation
* `repos_add_app_access_restrictions` - Add app access restrictions
* `repos_add_collaborator` - Add a repository collaborator
* `repos_add_status_check_contexts` - Add status check contexts
* `repos_add_team_access_restrictions` - Add team access restrictions
* `repos_add_user_access_restrictions` - Add user access restrictions
* `repos_check_collaborator` - Check if a user is a repository collaborator
* `repos_compare_commits` - Compare two commits
* `repos_create_commit_comment` - Create a commit comment
* `repos_create_commit_signature_protection` - Create commit signature protection
* `repos_create_commit_status` - Create a commit status
* `repos_create_deploy_key` - Create a deploy key
* `repos_create_deployment` - Create a deployment
* `repos_create_deployment_status` - Create a deployment status
* `repos_create_dispatch_event` - Create a repository dispatch event
* `repos_create_for_authenticated_user` - Create a repository for the authenticated user
* `repos_create_fork` - Create a fork
* `repos_create_in_org` - Create an organization repository
* `repos_create_or_update_file_contents` - Create or update file contents
* `repos_create_pages_site` - Create a GitHub Enterprise Server Pages site
* `repos_create_release` - Create a release
* `repos_create_using_template` - Create a repository using a template
* `repos_create_webhook` - Create a repository webhook
* `repos_decline_invitation` - Decline a repository invitation
* `repos_delete` - Delete a repository
* `repos_delete_access_restrictions` - Delete access restrictions
* `repos_delete_admin_branch_protection` - Delete admin branch protection
* `repos_delete_branch_protection` - Delete branch protection
* `repos_delete_commit_comment` - Delete a commit comment
* `repos_delete_commit_signature_protection` - Delete commit signature protection
* `repos_delete_deploy_key` - Delete a deploy key
* `repos_delete_deployment` - Delete a deployment
* `repos_delete_file` - Delete a file
* `repos_delete_invitation` - Delete a repository invitation
* `repos_delete_pages_site` - Delete a GitHub Enterprise Server Pages site
* `repos_delete_pull_request_review_protection` - Delete pull request review protection
* `repos_delete_release` - Delete a release
* `repos_delete_release_asset` - Delete a release asset
* `repos_delete_webhook` - Delete a repository webhook
* `repos_download_tarball_archive` - Download a repository archive (tar)
* `repos_download_zipball_archive` - Download a repository archive (zip)
* `repos_get` - Get a repository
* `repos_get_access_restrictions` - Get access restrictions
* `repos_get_admin_branch_protection` - Get admin branch protection
* `repos_get_all_status_check_contexts` - Get all status check contexts
* `repos_get_all_topics` - Get all repository topics
* `repos_get_apps_with_access_to_protected_branch` - Get apps with access to the protected branch
* `repos_get_branch` - Get a branch
* `repos_get_branch_protection` - Get branch protection
* `repos_get_code_frequency_stats` - Get the weekly commit activity
* `repos_get_collaborator_permission_level` - Get repository permissions for a user
* `repos_get_combined_status_for_ref` - Get the combined status for a specific reference
* `repos_get_commit` - Get a commit
* `repos_get_commit_activity_stats` - Get the last year of commit activity
* `repos_get_commit_comment` - Get a commit comment
* `repos_get_commit_signature_protection` - Get commit signature protection
* `repos_get_content` - Get repository content
* `repos_get_contributors_stats` - Get all contributor commit activity
* `repos_get_deploy_key` - Get a deploy key
* `repos_get_deployment` - Get a deployment
* `repos_get_deployment_status` - Get a deployment status
* `repos_get_latest_pages_build` - Get latest Pages build
* `repos_get_latest_release` - Get the latest release
* `repos_get_pages` - Get a GitHub Enterprise Server Pages site
* `repos_get_pages_build` - Get GitHub Enterprise Server Pages build
* `repos_get_participation_stats` - Get the weekly commit count
* `repos_get_pull_request_review_protection` - Get pull request review protection
* `repos_get_punch_card_stats` - Get the hourly commit count for each day
* `repos_get_readme` - Get a repository README
* `repos_get_readme_in_directory` - Get a repository README for a directory
* `repos_get_release` - Get a release
* `repos_get_release_asset` - Get a release asset
* `repos_get_release_by_tag` - Get a release by tag name
* `repos_get_status_checks_protection` - Get status checks protection
* `repos_get_teams_with_access_to_protected_branch` - Get teams with access to the protected branch
* `repos_get_users_with_access_to_protected_branch` - Get users with access to the protected branch
* `repos_get_webhook` - Get a repository webhook
* `repos_get_webhook_config_for_repo` - Get a webhook configuration for a repository
* `repos_list_branches` - List branches
* `repos_list_branches_for_head_commit` - List branches for HEAD commit
* `repos_list_collaborators` - List repository collaborators
* `repos_list_comments_for_commit` - List commit comments
* `repos_list_commit_comments_for_repo` - List commit comments for a repository
* `repos_list_commit_statuses_for_ref` - List commit statuses for a reference
* `repos_list_commits` - List commits
* `repos_list_contributors` - List repository contributors
* `repos_list_deploy_keys` - List deploy keys
* `repos_list_deployment_statuses` - List deployment statuses
* `repos_list_deployments` - List deployments
* `repos_list_for_authenticated_user` - List repositories for the authenticated user
* `repos_list_for_org` - List organization repositories
* `repos_list_for_user` - List repositories for a user
* `repos_list_forks` - List forks
* `repos_list_invitations` - List repository invitations
* `repos_list_invitations_for_authenticated_user` - List repository invitations for the authenticated user
* `repos_list_languages` - List repository languages
* `repos_list_pages_builds` - List GitHub Enterprise Server Pages builds
* `repos_list_public` - List public repositories
* `repos_list_pull_requests_associated_with_commit` - List pull requests associated with a commit
* `repos_list_release_assets` - List release assets
* `repos_list_releases` - List releases
* `repos_list_tags` - List repository tags
* `repos_list_teams` - List repository teams
* `repos_list_webhooks` - List repository webhooks
* `repos_merge` - Merge a branch
* `repos_ping_webhook` - Ping a repository webhook
* `repos_remove_app_access_restrictions` - Remove app access restrictions
* `repos_remove_collaborator` - Remove a repository collaborator
* `repos_remove_status_check_contexts` - Remove status check contexts
* `repos_remove_status_check_protection` - Remove status check protection
* `repos_remove_team_access_restrictions` - Remove team access restrictions
* `repos_remove_user_access_restrictions` - Remove user access restrictions
* `repos_replace_all_topics` - Replace all repository topics
* `repos_request_pages_build` - Request a GitHub Enterprise Server Pages build
* `repos_set_admin_branch_protection` - Set admin branch protection
* `repos_set_app_access_restrictions` - Set app access restrictions
* `repos_set_status_check_contexts` - Set status check contexts
* `repos_set_team_access_restrictions` - Set team access restrictions
* `repos_set_user_access_restrictions` - Set user access restrictions
* `repos_test_push_webhook` - Test the push repository webhook
* `repos_transfer` - Transfer a repository
* `repos_update` - Update a repository
* `repos_update_branch_protection` - Update branch protection
* `repos_update_commit_comment` - Update a commit comment
* `repos_update_information_about_pages_site` - Update information about a GitHub Enterprise Server Pages site
* `repos_update_invitation` - Update a repository invitation
* `repos_update_pull_request_review_protection` - Update pull request review protection
* `repos_update_release` - Update a release
* `repos_update_release_asset` - Update a release asset
* `repos_update_status_check_protection` - Update status check protection
* `repos_update_webhook` - Update a repository webhook
* `repos_update_webhook_config_for_repo` - Update a webhook configuration for a repository
* `repos_upload_release_asset` - Upload a release asset

### search

* `search_code` - Search code
* `search_commits` - Search commits
* `search_issues_and_pull_requests` - Search issues and pull requests
* `search_labels` - Search labels
* `search_repos` - Search repositories
* `search_topics` - Search topics
* `search_users` - Search users

### teams

* `teams_add_member_legacy` - Add team member (Legacy)
* `teams_add_or_update_membership_for_user_in_org` - Add or update team membership for a user
* `teams_add_or_update_membership_for_user_legacy` - Add or update team membership for a user (Legacy)
* `teams_add_or_update_project_permissions_in_org` - Add or update team project permissions
* `teams_add_or_update_project_permissions_legacy` - Add or update team project permissions (Legacy)
* `teams_add_or_update_repo_permissions_in_org` - Add or update team repository permissions
* `teams_add_or_update_repo_permissions_legacy` - Add or update team repository permissions (Legacy)
* `teams_check_permissions_for_project_in_org` - Check team permissions for a project
* `teams_check_permissions_for_project_legacy` - Check team permissions for a project (Legacy)
* `teams_check_permissions_for_repo_in_org` - Check team permissions for a repository
* `teams_check_permissions_for_repo_legacy` - Check team permissions for a repository (Legacy)
* `teams_create` - Create a team
* `teams_create_discussion_comment_in_org` - Create a discussion comment
* `teams_create_discussion_comment_legacy` - Create a discussion comment (Legacy)
* `teams_create_discussion_in_org` - Create a discussion
* `teams_create_discussion_legacy` - Create a discussion (Legacy)
* `teams_delete_discussion_comment_in_org` - Delete a discussion comment
* `teams_delete_discussion_comment_legacy` - Delete a discussion comment (Legacy)
* `teams_delete_discussion_in_org` - Delete a discussion
* `teams_delete_discussion_legacy` - Delete a discussion (Legacy)
* `teams_delete_in_org` - Delete a team
* `teams_delete_legacy` - Delete a team (Legacy)
* `teams_get_by_name` - Get a team by name
* `teams_get_discussion_comment_in_org` - Get a discussion comment
* `teams_get_discussion_comment_legacy` - Get a discussion comment (Legacy)
* `teams_get_discussion_in_org` - Get a discussion
* `teams_get_discussion_legacy` - Get a discussion (Legacy)
* `teams_get_legacy` - Get a team (Legacy)
* `teams_get_member_legacy` - Get team member (Legacy)
* `teams_get_membership_for_user_in_org` - Get team membership for a user
* `teams_get_membership_for_user_legacy` - Get team membership for a user (Legacy)
* `teams_list` - List teams
* `teams_list_child_in_org` - List child teams
* `teams_list_child_legacy` - List child teams (Legacy)
* `teams_list_discussion_comments_in_org` - List discussion comments
* `teams_list_discussion_comments_legacy` - List discussion comments (Legacy)
* `teams_list_discussions_in_org` - List discussions
* `teams_list_discussions_legacy` - List discussions (Legacy)
* `teams_list_for_authenticated_user` - List teams for the authenticated user
* `teams_list_members_in_org` - List team members
* `teams_list_members_legacy` - List team members (Legacy)
* `teams_list_projects_in_org` - List team projects
* `teams_list_projects_legacy` - List team projects (Legacy)
* `teams_list_repos_in_org` - List team repositories
* `teams_list_repos_legacy` - List team repositories (Legacy)
* `teams_remove_member_legacy` - Remove team member (Legacy)
* `teams_remove_membership_for_user_in_org` - Remove team membership for a user
* `teams_remove_membership_for_user_legacy` - Remove team membership for a user (Legacy)
* `teams_remove_project_in_org` - Remove a project from a team
* `teams_remove_project_legacy` - Remove a project from a team (Legacy)
* `teams_remove_repo_in_org` - Remove a repository from a team
* `teams_remove_repo_legacy` - Remove a repository from a team (Legacy)
* `teams_update_discussion_comment_in_org` - Update a discussion comment
* `teams_update_discussion_comment_legacy` - Update a discussion comment (Legacy)
* `teams_update_discussion_in_org` - Update a discussion
* `teams_update_discussion_legacy` - Update a discussion (Legacy)
* `teams_update_in_org` - Update a team
* `teams_update_legacy` - Update a team (Legacy)

### users

* `users_add_email_for_authenticated` - Add an email address for the authenticated user
* `users_check_following_for_user` - Check if a user follows another user
* `users_check_person_is_followed_by_authenticated` - Check if a person is followed by the authenticated user
* `users_create_gpg_key_for_authenticated` - Create a GPG key for the authenticated user
* `users_create_public_ssh_key_for_authenticated` - Create a public SSH key for the authenticated user
* `users_delete_email_for_authenticated` - Delete an email address for the authenticated user
* `users_delete_gpg_key_for_authenticated` - Delete a GPG key for the authenticated user
* `users_delete_public_ssh_key_for_authenticated` - Delete a public SSH key for the authenticated user
* `users_follow` - Follow a user
* `users_get_authenticated` - Get the authenticated user
* `users_get_by_username` - Get a user
* `users_get_context_for_user` - Get contextual information for a user
* `users_get_gpg_key_for_authenticated` - Get a GPG key for the authenticated user
* `users_get_public_ssh_key_for_authenticated` - Get a public SSH key for the authenticated user
* `users_list` - List users
* `users_list_emails_for_authenticated` - List email addresses for the authenticated user
* `users_list_followed_by_authenticated` - List the people the authenticated user follows
* `users_list_followers_for_authenticated_user` - List followers of the authenticated user
* `users_list_followers_for_user` - List followers of a user
* `users_list_following_for_user` - List the people a user follows
* `users_list_gpg_keys_for_authenticated` - List GPG keys for the authenticated user
* `users_list_gpg_keys_for_user` - List GPG keys for a user
* `users_list_public_emails_for_authenticated` - List public email addresses for the authenticated user
* `users_list_public_keys_for_user` - List public keys for a user
* `users_list_public_ssh_keys_for_authenticated` - List public SSH keys for the authenticated user
* `users_unfollow` - Unfollow a user
* `users_update_authenticated` - Update the authenticated user

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
