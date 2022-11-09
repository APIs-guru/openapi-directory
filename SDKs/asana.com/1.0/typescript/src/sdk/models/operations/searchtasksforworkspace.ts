import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchTasksForWorkspacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" })
  workspaceGid: string;
}

export enum SearchTasksForWorkspaceResourceSubtypeEnum {
    DefaultTask = "default_task"
,    Milestone = "milestone"
}

export enum SearchTasksForWorkspaceSortByEnum {
    DueDate = "due_date"
,    CreatedAt = "created_at"
,    CompletedAt = "completed_at"
,    Likes = "likes"
,    ModifiedAt = "modified_at"
}


export class SearchTasksForWorkspaceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=assigned_by.any" })
  assignedByAny?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=assigned_by.not" })
  assignedByNot?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=assignee.any" })
  assigneeAny?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=assignee.not" })
  assigneeNot?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=commented_on_by.any" })
  commentedOnByAny?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=commented_on_by.not" })
  commentedOnByNot?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=completed" })
  completed?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=completed_at.after" })
  completedAtAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=completed_at.before" })
  completedAtBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=completed_on" })
  completedOn?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=completed_on.after" })
  completedOnAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=completed_on.before" })
  completedOnBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created_at.after" })
  createdAtAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created_at.before" })
  createdAtBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created_by.any" })
  createdByAny?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created_by.not" })
  createdByNot?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created_on" })
  createdOn?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created_on.after" })
  createdOnAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created_on.before" })
  createdOnBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=due_at.after" })
  dueAtAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=due_at.before" })
  dueAtBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=due_on" })
  dueOn?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=due_on.after" })
  dueOnAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=due_on.before" })
  dueOnBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=followers.any" })
  followersAny?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=followers.not" })
  followersNot?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=has_attachment" })
  hasAttachment?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_blocked" })
  isBlocked?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_blocking" })
  isBlocking?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_subtask" })
  isSubtask?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=liked_by.any" })
  likedByAny?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=liked_by.not" })
  likedByNot?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modified_at.after" })
  modifiedAtAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modified_at.before" })
  modifiedAtBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modified_on" })
  modifiedOn?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modified_on.after" })
  modifiedOnAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modified_on.before" })
  modifiedOnBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=portfolios.any" })
  portfoliosAny?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=projects.all" })
  projectsAll?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=projects.any" })
  projectsAny?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=projects.not" })
  projectsNot?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resource_subtype" })
  resourceSubtype?: SearchTasksForWorkspaceResourceSubtypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sections.all" })
  sectionsAll?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sections.any" })
  sectionsAny?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sections.not" })
  sectionsNot?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_ascending" })
  sortAscending?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: SearchTasksForWorkspaceSortByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_on" })
  startOn?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_on.after" })
  startOnAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_on.before" })
  startOnBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tags.all" })
  tagsAll?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tags.any" })
  tagsAny?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tags.not" })
  tagsNot?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=teams.any" })
  teamsAny?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;
}


export class SearchTasksForWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SearchTasksForWorkspacePathParams;

  @Metadata()
  queryParams: SearchTasksForWorkspaceQueryParams;
}


export class SearchTasksForWorkspace200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.TaskCompact })
  data?: shared.TaskCompact[];
}


export class SearchTasksForWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  searchTasksForWorkspace200ApplicationJsonObject?: SearchTasksForWorkspace200ApplicationJson;
}
