import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchTasksForWorkspacePathParams extends SpeakeasyBase {
    workspaceGid: string;
}
export declare enum SearchTasksForWorkspaceResourceSubtypeEnum {
    DefaultTask = "default_task",
    Milestone = "milestone"
}
export declare enum SearchTasksForWorkspaceSortByEnum {
    DueDate = "due_date",
    CreatedAt = "created_at",
    CompletedAt = "completed_at",
    Likes = "likes",
    ModifiedAt = "modified_at"
}
export declare class SearchTasksForWorkspaceQueryParams extends SpeakeasyBase {
    assignedByAny?: string;
    assignedByNot?: string;
    assigneeAny?: string;
    assigneeNot?: string;
    commentedOnByAny?: string;
    commentedOnByNot?: string;
    completed?: boolean;
    completedAtAfter?: Date;
    completedAtBefore?: Date;
    completedOn?: Date;
    completedOnAfter?: Date;
    completedOnBefore?: Date;
    createdAtAfter?: Date;
    createdAtBefore?: Date;
    createdByAny?: string;
    createdByNot?: string;
    createdOn?: Date;
    createdOnAfter?: Date;
    createdOnBefore?: Date;
    dueAtAfter?: Date;
    dueAtBefore?: Date;
    dueOn?: Date;
    dueOnAfter?: Date;
    dueOnBefore?: Date;
    followersAny?: string;
    followersNot?: string;
    hasAttachment?: boolean;
    isBlocked?: boolean;
    isBlocking?: boolean;
    isSubtask?: boolean;
    likedByAny?: string;
    likedByNot?: string;
    modifiedAtAfter?: Date;
    modifiedAtBefore?: Date;
    modifiedOn?: Date;
    modifiedOnAfter?: Date;
    modifiedOnBefore?: Date;
    optFields?: string[];
    optPretty?: boolean;
    portfoliosAny?: string;
    projectsAll?: string;
    projectsAny?: string;
    projectsNot?: string;
    resourceSubtype?: SearchTasksForWorkspaceResourceSubtypeEnum;
    sectionsAll?: string;
    sectionsAny?: string;
    sectionsNot?: string;
    sortAscending?: boolean;
    sortBy?: SearchTasksForWorkspaceSortByEnum;
    startOn?: Date;
    startOnAfter?: Date;
    startOnBefore?: Date;
    tagsAll?: string;
    tagsAny?: string;
    tagsNot?: string;
    teamsAny?: string;
    text?: string;
}
export declare class SearchTasksForWorkspace200ApplicationJson extends SpeakeasyBase {
    data?: shared.TaskCompact[];
}
export declare class SearchTasksForWorkspaceRequest extends SpeakeasyBase {
    pathParams: SearchTasksForWorkspacePathParams;
    queryParams: SearchTasksForWorkspaceQueryParams;
}
export declare class SearchTasksForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    searchTasksForWorkspace200ApplicationJsonObject?: SearchTasksForWorkspace200ApplicationJson;
}
