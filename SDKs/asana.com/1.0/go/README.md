# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                PersonalAccessToken: &shared.SchemePersonalAccessToken{
                    Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateAttachmentForTaskRequest{
        PathParams: operations.CreateAttachmentForTaskPathParams{
            TaskGid: "aspernatur",
        },
        QueryParams: operations.CreateAttachmentForTaskQueryParams{
            Limit: 4782768469875935138,
            Offset: "modi",
            OptFields: []string{
                "expedita",
            },
            OptPretty: false,
        },
        Request: shared.AttachmentRequest{
            File: &shared.AttachmentRequestFile{
                Content: []byte("omnis"),
                File: "aliquam",
            },
            Name: "provident",
            ResourceSubtype: "external",
            URL: "aut",
        },
    }
    
    res, err := s.Attachments.CreateAttachmentForTask(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAttachmentForTask200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Attachments

* `CreateAttachmentForTask` - Upload an attachment
* `DeleteAttachment` - Delete an attachment
* `GetAttachment` - Get an attachment
* `GetAttachmentsForTask` - Get attachments for a task

### Batch API

* `CreateBatchRequest` - Submit parallel requests

### Custom Field Settings

* `GetCustomFieldSettingsForPortfolio` - Get a portfolio's custom fields
* `GetCustomFieldSettingsForProject` - Get a project's custom fields

### Custom Fields

* `CreateCustomField` - Create a custom field
* `CreateEnumOptionForCustomField` - Create an enum option
* `DeleteCustomField` - Delete a custom field
* `GetCustomField` - Get a custom field
* `GetCustomFieldsForWorkspace` - Get a workspace's custom fields
* `InsertEnumOptionForCustomField` - Reorder a custom field's enum
* `UpdateCustomField` - Update a custom field
* `UpdateEnumOption` - Update an enum option

### Events

* `GetEvents` - Get events on a resource

### Goals

* `AddFollowers` - Add a collaborator to a goal
* `AddSubgoal` - Add a subgoal to a parent goal
* `AddSupportingWorkForGoal` - Add a project/portfolio as supporting work for a goal.
* `CreateGoal` - Create a goal
* `CreateGoalMetric` - Create a goal metric
* `DeleteGoal` - Delete a goal
* `GetGoal` - Get a goal
* `GetGoals` - Get goals
* `GetParentGoalsForGoal` - Get parent goals from a goal
* `GetSubgoalsForGoal` - Get subgoals from a goal
* `RemoveFollowers` - Remove a collaborator from a goal
* `RemoveSubgoal` - Remove a subgoal from a goal
* `RemoveSupportingWorkForGoal` - Remove a project/portfolio as supporting work for a goal.
* `SupportingWork` - Get supporting work from a goal
* `UpdateGoal` - Update a goal
* `UpdateGoalMetric` - Update a goal metric

### Jobs

* `GetJob` - Get a job by id

### Organization Exports

* `CreateOrganizationExport` - Create an organization export request
* `GetOrganizationExport` - Get details on an org export request

### Portfolio Memberships

* `GetPortfolioMembership` - Get a portfolio membership
* `GetPortfolioMemberships` - Get multiple portfolio memberships
* `GetPortfolioMembershipsForPortfolio` - Get memberships from a portfolio

### Portfolios

* `AddCustomFieldSettingForPortfolio` - Add a custom field to a portfolio
* `AddItemForPortfolio` - Add a portfolio item
* `AddMembersForPortfolio` - Add users to a portfolio
* `CreatePortfolio` - Create a portfolio
* `DeletePortfolio` - Delete a portfolio
* `GetItemsForPortfolio` - Get portfolio items
* `GetPortfolio` - Get a portfolio
* `GetPortfolios` - Get multiple portfolios
* `RemoveCustomFieldSettingForPortfolio` - Remove a custom field from a portfolio
* `RemoveItemForPortfolio` - Remove a portfolio item
* `RemoveMembersForPortfolio` - Remove users from a portfolio
* `UpdatePortfolio` - Update a portfolio

### Project Memberships

* `GetProjectMembership` - Get a project membership
* `GetProjectMembershipsForProject` - Get memberships from a project

### Project Statuses

* `CreateProjectStatusForProject` - Create a project status
* `DeleteProjectStatus` - Delete a project status
* `GetProjectStatus` - Get a project status
* `GetProjectStatusesForProject` - Get statuses from a project

### Projects

* `AddCustomFieldSettingForProject` - Add a custom field to a project
* `AddFollowersForProject` - Add followers to a project
* `AddMembersForProject` - Add users to a project
* `CreateProject` - Create a project
* `CreateProjectForTeam` - Create a project in a team
* `CreateProjectForWorkspace` - Create a project in a workspace
* `DeleteProject` - Delete a project
* `DuplicateProject` - Duplicate a project
* `GetProject` - Get a project
* `GetProjects` - Get multiple projects
* `GetProjectsForTask` - Get projects a task is in
* `GetProjectsForTeam` - Get a team's projects
* `GetProjectsForWorkspace` - Get all projects in a workspace
* `GetTaskCountsForProject` - Get task count of a project
* `RemoveCustomFieldSettingForProject` - Remove a custom field from a project
* `RemoveFollowersForProject` - Remove followers from a project
* `RemoveMembersForProject` - Remove users from a project
* `UpdateProject` - Update a project

### Sections

* `AddTaskForSection` - Add task to section
* `CreateSectionForProject` - Create a section in a project
* `DeleteSection` - Delete a section
* `GetSection` - Get a section
* `GetSectionsForProject` - Get sections in a project
* `InsertSectionForProject` - Move or Insert sections
* `UpdateSection` - Update a section

### Stories

* `CreateStoryForTask` - Create a story on a task
* `DeleteStory` - Delete a story
* `GetStoriesForTask` - Get stories from a task
* `GetStory` - Get a story
* `UpdateStory` - Update a story

### Tags

* `CreateTag` - Create a tag
* `CreateTagForWorkspace` - Create a tag in a workspace
* `DeleteTag` - Delete a tag
* `GetTag` - Get a tag
* `GetTags` - Get multiple tags
* `GetTagsForTask` - Get a task's tags
* `GetTagsForWorkspace` - Get tags in a workspace
* `UpdateTag` - Update a tag

### Tasks

* `AddDependenciesForTask` - Set dependencies for a task
* `AddDependentsForTask` - Set dependents for a task
* `AddFollowersForTask` - Add followers to a task
* `AddProjectForTask` - Add a project to a task
* `AddTagForTask` - Add a tag to a task
* `CreateSubtaskForTask` - Create a subtask
* `CreateTask` - Create a task
* `DeleteTask` - Delete a task
* `DuplicateTask` - Duplicate a task
* `GetDependenciesForTask` - Get dependencies from a task
* `GetDependentsForTask` - Get dependents from a task
* `GetSubtasksForTask` - Get subtasks from a task
* `GetTask` - Get a task
* `GetTasks` - Get multiple tasks
* `GetTasksForProject` - Get tasks from a project
* `GetTasksForSection` - Get tasks from a section
* `GetTasksForTag` - Get tasks from a tag
* `GetTasksForUserTaskList` - Get tasks from a user task list
* `RemoveDependenciesForTask` - Unlink dependencies from a task
* `RemoveDependentsForTask` - Unlink dependents from a task
* `RemoveFollowerForTask` - Remove followers from a task
* `RemoveProjectForTask` - Remove a project from a task
* `RemoveTagForTask` - Remove a tag from a task
* `SearchTasksForWorkspace` - Search tasks in a workspace
* `SetParentForTask` - Set the parent of a task
* `UpdateTask` - Update a task

### Team Memberships

* `GetTeamMembership` - Get a team membership
* `GetTeamMemberships` - Get team memberships
* `GetTeamMembershipsForTeam` - Get memberships from a team
* `GetTeamMembershipsForUser` - Get memberships from a user

### Teams

* `AddUserForTeam` - Add a user to a team
* `CreateTeam` - Create a team
* `GetTeam` - Get a team
* `GetTeamsForOrganization` - Get teams in an organization
* `GetTeamsForUser` - Get teams for a user
* `RemoveUserForTeam` - Remove a user from a team

### Time Periods

* `GetTimePeriod` - Get a time period
* `GetTimePeriods` - Get time periods

### Typeahead

* `TypeaheadForWorkspace` - Get objects via typeahead

### User Task Lists

* `GetUserTaskList` - Get a user task list
* `GetUserTaskListForUser` - Get a user's task list

### Users

* `GetFavoritesForUser` - Get a user's favorites
* `GetUser` - Get a user
* `GetUsers` - Get multiple users
* `GetUsersForTeam` - Get users in a team
* `GetUsersForWorkspace` - Get users in a workspace or organization

### Webhooks

* `CreateWebhook` - Establish a webhook
* `DeleteWebhook` - Delete a webhook
* `GetWebhook` - Get a webhook
* `GetWebhooks` - Get multiple webhooks

### Workspace Memberships

* `GetWorkspaceMembership` - Get a workspace membership
* `GetWorkspaceMembershipsForUser` - Get workspace memberships for a user
* `GetWorkspaceMembershipsForWorkspace` - Get the workspace memberships for a workspace

### Workspaces

* `AddUserForWorkspace` - Add a user to a workspace or organization
* `GetWorkspace` - Get a workspace
* `GetWorkspaces` - Get multiple workspaces
* `RemoveUserForWorkspace` - Remove a user from a workspace or organization
* `UpdateWorkspace` - Update a workspace

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
