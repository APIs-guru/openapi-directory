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
s.config_security(
    security=shared.Security(
        personal_access_token=shared.SchemePersonalAccessToken(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    )
)
    
req = operations.CreateAttachmentForTaskRequest(
    path_params=operations.CreateAttachmentForTaskPathParams(
        task_gid="aspernatur",
    ),
    query_params=operations.CreateAttachmentForTaskQueryParams(
        limit=4782768469875935138,
        offset="modi",
        opt_fields=[
            "expedita",
        ],
        opt_pretty=False,
    ),
    request=shared.AttachmentRequest(
        file=shared.AttachmentRequestFile(
            content="omnis".encode(),
            file="aliquam",
        ),
        name="provident",
        resource_subtype="external",
        url="aut",
    ),
)
    
res = s.attachments.create_attachment_for_task(req)

if res.create_attachment_for_task_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Attachments

* `create_attachment_for_task` - Upload an attachment
* `delete_attachment` - Delete an attachment
* `get_attachment` - Get an attachment
* `get_attachments_for_task` - Get attachments for a task

### Batch API

* `create_batch_request` - Submit parallel requests

### Custom Field Settings

* `get_custom_field_settings_for_portfolio` - Get a portfolio's custom fields
* `get_custom_field_settings_for_project` - Get a project's custom fields

### Custom Fields

* `create_custom_field` - Create a custom field
* `create_enum_option_for_custom_field` - Create an enum option
* `delete_custom_field` - Delete a custom field
* `get_custom_field` - Get a custom field
* `get_custom_fields_for_workspace` - Get a workspace's custom fields
* `insert_enum_option_for_custom_field` - Reorder a custom field's enum
* `update_custom_field` - Update a custom field
* `update_enum_option` - Update an enum option

### Events

* `get_events` - Get events on a resource

### Goals

* `add_followers` - Add a collaborator to a goal
* `add_subgoal` - Add a subgoal to a parent goal
* `add_supporting_work_for_goal` - Add a project/portfolio as supporting work for a goal.
* `create_goal` - Create a goal
* `create_goal_metric` - Create a goal metric
* `delete_goal` - Delete a goal
* `get_goal` - Get a goal
* `get_goals` - Get goals
* `get_parent_goals_for_goal` - Get parent goals from a goal
* `get_subgoals_for_goal` - Get subgoals from a goal
* `remove_followers` - Remove a collaborator from a goal
* `remove_subgoal` - Remove a subgoal from a goal
* `remove_supporting_work_for_goal` - Remove a project/portfolio as supporting work for a goal.
* `supporting_work` - Get supporting work from a goal
* `update_goal` - Update a goal
* `update_goal_metric` - Update a goal metric

### Jobs

* `get_job` - Get a job by id

### Organization Exports

* `create_organization_export` - Create an organization export request
* `get_organization_export` - Get details on an org export request

### Portfolio Memberships

* `get_portfolio_membership` - Get a portfolio membership
* `get_portfolio_memberships` - Get multiple portfolio memberships
* `get_portfolio_memberships_for_portfolio` - Get memberships from a portfolio

### Portfolios

* `add_custom_field_setting_for_portfolio` - Add a custom field to a portfolio
* `add_item_for_portfolio` - Add a portfolio item
* `add_members_for_portfolio` - Add users to a portfolio
* `create_portfolio` - Create a portfolio
* `delete_portfolio` - Delete a portfolio
* `get_items_for_portfolio` - Get portfolio items
* `get_portfolio` - Get a portfolio
* `get_portfolios` - Get multiple portfolios
* `remove_custom_field_setting_for_portfolio` - Remove a custom field from a portfolio
* `remove_item_for_portfolio` - Remove a portfolio item
* `remove_members_for_portfolio` - Remove users from a portfolio
* `update_portfolio` - Update a portfolio

### Project Memberships

* `get_project_membership` - Get a project membership
* `get_project_memberships_for_project` - Get memberships from a project

### Project Statuses

* `create_project_status_for_project` - Create a project status
* `delete_project_status` - Delete a project status
* `get_project_status` - Get a project status
* `get_project_statuses_for_project` - Get statuses from a project

### Projects

* `add_custom_field_setting_for_project` - Add a custom field to a project
* `add_followers_for_project` - Add followers to a project
* `add_members_for_project` - Add users to a project
* `create_project` - Create a project
* `create_project_for_team` - Create a project in a team
* `create_project_for_workspace` - Create a project in a workspace
* `delete_project` - Delete a project
* `duplicate_project` - Duplicate a project
* `get_project` - Get a project
* `get_projects` - Get multiple projects
* `get_projects_for_task` - Get projects a task is in
* `get_projects_for_team` - Get a team's projects
* `get_projects_for_workspace` - Get all projects in a workspace
* `get_task_counts_for_project` - Get task count of a project
* `remove_custom_field_setting_for_project` - Remove a custom field from a project
* `remove_followers_for_project` - Remove followers from a project
* `remove_members_for_project` - Remove users from a project
* `update_project` - Update a project

### Sections

* `add_task_for_section` - Add task to section
* `create_section_for_project` - Create a section in a project
* `delete_section` - Delete a section
* `get_section` - Get a section
* `get_sections_for_project` - Get sections in a project
* `insert_section_for_project` - Move or Insert sections
* `update_section` - Update a section

### Stories

* `create_story_for_task` - Create a story on a task
* `delete_story` - Delete a story
* `get_stories_for_task` - Get stories from a task
* `get_story` - Get a story
* `update_story` - Update a story

### Tags

* `create_tag` - Create a tag
* `create_tag_for_workspace` - Create a tag in a workspace
* `delete_tag` - Delete a tag
* `get_tag` - Get a tag
* `get_tags` - Get multiple tags
* `get_tags_for_task` - Get a task's tags
* `get_tags_for_workspace` - Get tags in a workspace
* `update_tag` - Update a tag

### Tasks

* `add_dependencies_for_task` - Set dependencies for a task
* `add_dependents_for_task` - Set dependents for a task
* `add_followers_for_task` - Add followers to a task
* `add_project_for_task` - Add a project to a task
* `add_tag_for_task` - Add a tag to a task
* `create_subtask_for_task` - Create a subtask
* `create_task` - Create a task
* `delete_task` - Delete a task
* `duplicate_task` - Duplicate a task
* `get_dependencies_for_task` - Get dependencies from a task
* `get_dependents_for_task` - Get dependents from a task
* `get_subtasks_for_task` - Get subtasks from a task
* `get_task` - Get a task
* `get_tasks` - Get multiple tasks
* `get_tasks_for_project` - Get tasks from a project
* `get_tasks_for_section` - Get tasks from a section
* `get_tasks_for_tag` - Get tasks from a tag
* `get_tasks_for_user_task_list` - Get tasks from a user task list
* `remove_dependencies_for_task` - Unlink dependencies from a task
* `remove_dependents_for_task` - Unlink dependents from a task
* `remove_follower_for_task` - Remove followers from a task
* `remove_project_for_task` - Remove a project from a task
* `remove_tag_for_task` - Remove a tag from a task
* `search_tasks_for_workspace` - Search tasks in a workspace
* `set_parent_for_task` - Set the parent of a task
* `update_task` - Update a task

### Team Memberships

* `get_team_membership` - Get a team membership
* `get_team_memberships` - Get team memberships
* `get_team_memberships_for_team` - Get memberships from a team
* `get_team_memberships_for_user` - Get memberships from a user

### Teams

* `add_user_for_team` - Add a user to a team
* `create_team` - Create a team
* `get_team` - Get a team
* `get_teams_for_organization` - Get teams in an organization
* `get_teams_for_user` - Get teams for a user
* `remove_user_for_team` - Remove a user from a team

### Time Periods

* `get_time_period` - Get a time period
* `get_time_periods` - Get time periods

### Typeahead

* `typeahead_for_workspace` - Get objects via typeahead

### User Task Lists

* `get_user_task_list` - Get a user task list
* `get_user_task_list_for_user` - Get a user's task list

### Users

* `get_favorites_for_user` - Get a user's favorites
* `get_user` - Get a user
* `get_users` - Get multiple users
* `get_users_for_team` - Get users in a team
* `get_users_for_workspace` - Get users in a workspace or organization

### Webhooks

* `create_webhook` - Establish a webhook
* `delete_webhook` - Delete a webhook
* `get_webhook` - Get a webhook
* `get_webhooks` - Get multiple webhooks

### Workspace Memberships

* `get_workspace_membership` - Get a workspace membership
* `get_workspace_memberships_for_user` - Get workspace memberships for a user
* `get_workspace_memberships_for_workspace` - Get the workspace memberships for a workspace

### Workspaces

* `add_user_for_workspace` - Add a user to a workspace or organization
* `get_workspace` - Get a workspace
* `get_workspaces` - Get multiple workspaces
* `remove_user_for_workspace` - Remove a user from a workspace or organization
* `update_workspace` - Update a workspace

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
