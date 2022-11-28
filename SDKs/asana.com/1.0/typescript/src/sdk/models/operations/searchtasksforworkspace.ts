import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchTasksForWorkspacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" })
  workspaceGid: string;
}

export enum SearchTasksForWorkspaceResourceSubtypeEnum {
    DefaultTask = "default_task",
    Milestone = "milestone"
}

export enum SearchTasksForWorkspaceSortByEnum {
    DueDate = "due_date",
    CreatedAt = "created_at",
    CompletedAt = "completed_at",
    Likes = "likes",
    ModifiedAt = "modified_at"
}


export class SearchTasksForWorkspaceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assigned_by.any" })
  assignedByAny?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assigned_by.not" })
  assignedByNot?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assignee.any" })
  assigneeAny?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assignee.not" })
  assigneeNot?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=commented_on_by.any" })
  commentedOnByAny?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=commented_on_by.not" })
  commentedOnByNot?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completed" })
  completed?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completed_at.after" })
  completedAtAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completed_at.before" })
  completedAtBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completed_on" })
  completedOn?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completed_on.after" })
  completedOnAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completed_on.before" })
  completedOnBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_at.after" })
  createdAtAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_at.before" })
  createdAtBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_by.any" })
  createdByAny?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_by.not" })
  createdByNot?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_on" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_on.after" })
  createdOnAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_on.before" })
  createdOnBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=due_at.after" })
  dueAtAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=due_at.before" })
  dueAtBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=due_on" })
  dueOn?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=due_on.after" })
  dueOnAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=due_on.before" })
  dueOnBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=followers.any" })
  followersAny?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=followers.not" })
  followersNot?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=has_attachment" })
  hasAttachment?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_blocked" })
  isBlocked?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_blocking" })
  isBlocking?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_subtask" })
  isSubtask?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=liked_by.any" })
  likedByAny?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=liked_by.not" })
  likedByNot?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modified_at.after" })
  modifiedAtAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modified_at.before" })
  modifiedAtBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modified_on" })
  modifiedOn?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modified_on.after" })
  modifiedOnAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modified_on.before" })
  modifiedOnBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=portfolios.any" })
  portfoliosAny?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projects.all" })
  projectsAll?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projects.any" })
  projectsAny?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projects.not" })
  projectsNot?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resource_subtype" })
  resourceSubtype?: SearchTasksForWorkspaceResourceSubtypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sections.all" })
  sectionsAll?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sections.any" })
  sectionsAny?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sections.not" })
  sectionsNot?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_ascending" })
  sortAscending?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: SearchTasksForWorkspaceSortByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_on" })
  startOn?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_on.after" })
  startOnAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_on.before" })
  startOnBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags.all" })
  tagsAll?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags.any" })
  tagsAny?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags.not" })
  tagsNot?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=teams.any" })
  teamsAny?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;
}


export class SearchTasksForWorkspace200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.TaskCompact })
  data?: shared.TaskCompact[];
}


export class SearchTasksForWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SearchTasksForWorkspacePathParams;

  @SpeakeasyMetadata()
  queryParams: SearchTasksForWorkspaceQueryParams;
}


export class SearchTasksForWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  searchTasksForWorkspace200ApplicationJsonObject?: SearchTasksForWorkspace200ApplicationJson;
}
