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
import { CreateAttachmentForTaskRequest, CreateAttachmentForTaskResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    personalAccessToken: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
));
    
const req: CreateAttachmentForTaskRequest = {
  pathParams: {
    taskGid: "aspernatur",
  },
  queryParams: {
    limit: 4782768469875935138,
    offset: "modi",
    optFields: [
      "expedita",
    ],
    optPretty: false,
  },
  request: {
    file: {
      content: "omnis".encode(),
      file: "aliquam",
    },
    name: "provident",
    resourceSubtype: "external",
    url: "aut",
  },
};

sdk.attachments.createAttachmentForTask(req).then((res: CreateAttachmentForTaskResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Attachments

* `createAttachmentForTask` - Upload an attachment
* `deleteAttachment` - Delete an attachment
* `getAttachment` - Get an attachment
* `getAttachmentsForTask` - Get attachments for a task

### Batch API

* `createBatchRequest` - Submit parallel requests

### Custom Field Settings

* `getCustomFieldSettingsForPortfolio` - Get a portfolio's custom fields
* `getCustomFieldSettingsForProject` - Get a project's custom fields

### Custom Fields

* `createCustomField` - Create a custom field
* `createEnumOptionForCustomField` - Create an enum option
* `deleteCustomField` - Delete a custom field
* `getCustomField` - Get a custom field
* `getCustomFieldsForWorkspace` - Get a workspace's custom fields
* `insertEnumOptionForCustomField` - Reorder a custom field's enum
* `updateCustomField` - Update a custom field
* `updateEnumOption` - Update an enum option

### Events

* `getEvents` - Get events on a resource

### Goals

* `addFollowers` - Add a collaborator to a goal
* `addSubgoal` - Add a subgoal to a parent goal
* `addSupportingWorkForGoal` - Add a project/portfolio as supporting work for a goal.
* `createGoal` - Create a goal
* `createGoalMetric` - Create a goal metric
* `deleteGoal` - Delete a goal
* `getGoal` - Get a goal
* `getGoals` - Get goals
* `getParentGoalsForGoal` - Get parent goals from a goal
* `getSubgoalsForGoal` - Get subgoals from a goal
* `removeFollowers` - Remove a collaborator from a goal
* `removeSubgoal` - Remove a subgoal from a goal
* `removeSupportingWorkForGoal` - Remove a project/portfolio as supporting work for a goal.
* `supportingWork` - Get supporting work from a goal
* `updateGoal` - Update a goal
* `updateGoalMetric` - Update a goal metric

### Jobs

* `getJob` - Get a job by id

### Organization Exports

* `createOrganizationExport` - Create an organization export request
* `getOrganizationExport` - Get details on an org export request

### Portfolio Memberships

* `getPortfolioMembership` - Get a portfolio membership
* `getPortfolioMemberships` - Get multiple portfolio memberships
* `getPortfolioMembershipsForPortfolio` - Get memberships from a portfolio

### Portfolios

* `addCustomFieldSettingForPortfolio` - Add a custom field to a portfolio
* `addItemForPortfolio` - Add a portfolio item
* `addMembersForPortfolio` - Add users to a portfolio
* `createPortfolio` - Create a portfolio
* `deletePortfolio` - Delete a portfolio
* `getItemsForPortfolio` - Get portfolio items
* `getPortfolio` - Get a portfolio
* `getPortfolios` - Get multiple portfolios
* `removeCustomFieldSettingForPortfolio` - Remove a custom field from a portfolio
* `removeItemForPortfolio` - Remove a portfolio item
* `removeMembersForPortfolio` - Remove users from a portfolio
* `updatePortfolio` - Update a portfolio

### Project Memberships

* `getProjectMembership` - Get a project membership
* `getProjectMembershipsForProject` - Get memberships from a project

### Project Statuses

* `createProjectStatusForProject` - Create a project status
* `deleteProjectStatus` - Delete a project status
* `getProjectStatus` - Get a project status
* `getProjectStatusesForProject` - Get statuses from a project

### Projects

* `addCustomFieldSettingForProject` - Add a custom field to a project
* `addFollowersForProject` - Add followers to a project
* `addMembersForProject` - Add users to a project
* `createProject` - Create a project
* `createProjectForTeam` - Create a project in a team
* `createProjectForWorkspace` - Create a project in a workspace
* `deleteProject` - Delete a project
* `duplicateProject` - Duplicate a project
* `getProject` - Get a project
* `getProjects` - Get multiple projects
* `getProjectsForTask` - Get projects a task is in
* `getProjectsForTeam` - Get a team's projects
* `getProjectsForWorkspace` - Get all projects in a workspace
* `getTaskCountsForProject` - Get task count of a project
* `removeCustomFieldSettingForProject` - Remove a custom field from a project
* `removeFollowersForProject` - Remove followers from a project
* `removeMembersForProject` - Remove users from a project
* `updateProject` - Update a project

### Sections

* `addTaskForSection` - Add task to section
* `createSectionForProject` - Create a section in a project
* `deleteSection` - Delete a section
* `getSection` - Get a section
* `getSectionsForProject` - Get sections in a project
* `insertSectionForProject` - Move or Insert sections
* `updateSection` - Update a section

### Stories

* `createStoryForTask` - Create a story on a task
* `deleteStory` - Delete a story
* `getStoriesForTask` - Get stories from a task
* `getStory` - Get a story
* `updateStory` - Update a story

### Tags

* `createTag` - Create a tag
* `createTagForWorkspace` - Create a tag in a workspace
* `deleteTag` - Delete a tag
* `getTag` - Get a tag
* `getTags` - Get multiple tags
* `getTagsForTask` - Get a task's tags
* `getTagsForWorkspace` - Get tags in a workspace
* `updateTag` - Update a tag

### Tasks

* `addDependenciesForTask` - Set dependencies for a task
* `addDependentsForTask` - Set dependents for a task
* `addFollowersForTask` - Add followers to a task
* `addProjectForTask` - Add a project to a task
* `addTagForTask` - Add a tag to a task
* `createSubtaskForTask` - Create a subtask
* `createTask` - Create a task
* `deleteTask` - Delete a task
* `duplicateTask` - Duplicate a task
* `getDependenciesForTask` - Get dependencies from a task
* `getDependentsForTask` - Get dependents from a task
* `getSubtasksForTask` - Get subtasks from a task
* `getTask` - Get a task
* `getTasks` - Get multiple tasks
* `getTasksForProject` - Get tasks from a project
* `getTasksForSection` - Get tasks from a section
* `getTasksForTag` - Get tasks from a tag
* `getTasksForUserTaskList` - Get tasks from a user task list
* `removeDependenciesForTask` - Unlink dependencies from a task
* `removeDependentsForTask` - Unlink dependents from a task
* `removeFollowerForTask` - Remove followers from a task
* `removeProjectForTask` - Remove a project from a task
* `removeTagForTask` - Remove a tag from a task
* `searchTasksForWorkspace` - Search tasks in a workspace
* `setParentForTask` - Set the parent of a task
* `updateTask` - Update a task

### Team Memberships

* `getTeamMembership` - Get a team membership
* `getTeamMemberships` - Get team memberships
* `getTeamMembershipsForTeam` - Get memberships from a team
* `getTeamMembershipsForUser` - Get memberships from a user

### Teams

* `addUserForTeam` - Add a user to a team
* `createTeam` - Create a team
* `getTeam` - Get a team
* `getTeamsForOrganization` - Get teams in an organization
* `getTeamsForUser` - Get teams for a user
* `removeUserForTeam` - Remove a user from a team

### Time Periods

* `getTimePeriod` - Get a time period
* `getTimePeriods` - Get time periods

### Typeahead

* `typeaheadForWorkspace` - Get objects via typeahead

### User Task Lists

* `getUserTaskList` - Get a user task list
* `getUserTaskListForUser` - Get a user's task list

### Users

* `getFavoritesForUser` - Get a user's favorites
* `getUser` - Get a user
* `getUsers` - Get multiple users
* `getUsersForTeam` - Get users in a team
* `getUsersForWorkspace` - Get users in a workspace or organization

### Webhooks

* `createWebhook` - Establish a webhook
* `deleteWebhook` - Delete a webhook
* `getWebhook` - Get a webhook
* `getWebhooks` - Get multiple webhooks

### Workspace Memberships

* `getWorkspaceMembership` - Get a workspace membership
* `getWorkspaceMembershipsForUser` - Get workspace memberships for a user
* `getWorkspaceMembershipsForWorkspace` - Get the workspace memberships for a workspace

### Workspaces

* `addUserForWorkspace` - Add a user to a workspace or organization
* `getWorkspace` - Get a workspace
* `getWorkspaces` - Get multiple workspaces
* `removeUserForWorkspace` - Remove a user from a workspace or organization
* `updateWorkspace` - Update a workspace

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
