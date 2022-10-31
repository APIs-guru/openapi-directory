package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type SearchTasksForWorkspacePathParams struct {
	WorkspaceGid string `pathParam:"style=simple,explode=false,name=workspace_gid"`
}

type SearchTasksForWorkspaceResourceSubtypeEnum string

const (
	SearchTasksForWorkspaceResourceSubtypeEnumDefaultTask SearchTasksForWorkspaceResourceSubtypeEnum = "default_task"
	SearchTasksForWorkspaceResourceSubtypeEnumMilestone   SearchTasksForWorkspaceResourceSubtypeEnum = "milestone"
)

type SearchTasksForWorkspaceSortByEnum string

const (
	SearchTasksForWorkspaceSortByEnumDueDate     SearchTasksForWorkspaceSortByEnum = "due_date"
	SearchTasksForWorkspaceSortByEnumCreatedAt   SearchTasksForWorkspaceSortByEnum = "created_at"
	SearchTasksForWorkspaceSortByEnumCompletedAt SearchTasksForWorkspaceSortByEnum = "completed_at"
	SearchTasksForWorkspaceSortByEnumLikes       SearchTasksForWorkspaceSortByEnum = "likes"
	SearchTasksForWorkspaceSortByEnumModifiedAt  SearchTasksForWorkspaceSortByEnum = "modified_at"
)

type SearchTasksForWorkspaceQueryParams struct {
	AssignedByAny     *string                                     `queryParam:"style=form,explode=true,name=assigned_by.any"`
	AssignedByNot     *string                                     `queryParam:"style=form,explode=true,name=assigned_by.not"`
	AssigneeAny       *string                                     `queryParam:"style=form,explode=true,name=assignee.any"`
	AssigneeNot       *string                                     `queryParam:"style=form,explode=true,name=assignee.not"`
	CommentedOnByAny  *string                                     `queryParam:"style=form,explode=true,name=commented_on_by.any"`
	CommentedOnByNot  *string                                     `queryParam:"style=form,explode=true,name=commented_on_by.not"`
	Completed         *bool                                       `queryParam:"style=form,explode=true,name=completed"`
	CompletedAtAfter  *time.Time                                  `queryParam:"style=form,explode=true,name=completed_at.after"`
	CompletedAtBefore *time.Time                                  `queryParam:"style=form,explode=true,name=completed_at.before"`
	CompletedOn       *time.Time                                  `queryParam:"style=form,explode=true,name=completed_on"`
	CompletedOnAfter  *time.Time                                  `queryParam:"style=form,explode=true,name=completed_on.after"`
	CompletedOnBefore *time.Time                                  `queryParam:"style=form,explode=true,name=completed_on.before"`
	CreatedAtAfter    *time.Time                                  `queryParam:"style=form,explode=true,name=created_at.after"`
	CreatedAtBefore   *time.Time                                  `queryParam:"style=form,explode=true,name=created_at.before"`
	CreatedByAny      *string                                     `queryParam:"style=form,explode=true,name=created_by.any"`
	CreatedByNot      *string                                     `queryParam:"style=form,explode=true,name=created_by.not"`
	CreatedOn         *time.Time                                  `queryParam:"style=form,explode=true,name=created_on"`
	CreatedOnAfter    *time.Time                                  `queryParam:"style=form,explode=true,name=created_on.after"`
	CreatedOnBefore   *time.Time                                  `queryParam:"style=form,explode=true,name=created_on.before"`
	DueAtAfter        *time.Time                                  `queryParam:"style=form,explode=true,name=due_at.after"`
	DueAtBefore       *time.Time                                  `queryParam:"style=form,explode=true,name=due_at.before"`
	DueOn             *time.Time                                  `queryParam:"style=form,explode=true,name=due_on"`
	DueOnAfter        *time.Time                                  `queryParam:"style=form,explode=true,name=due_on.after"`
	DueOnBefore       *time.Time                                  `queryParam:"style=form,explode=true,name=due_on.before"`
	FollowersAny      *string                                     `queryParam:"style=form,explode=true,name=followers.any"`
	FollowersNot      *string                                     `queryParam:"style=form,explode=true,name=followers.not"`
	HasAttachment     *bool                                       `queryParam:"style=form,explode=true,name=has_attachment"`
	IsBlocked         *bool                                       `queryParam:"style=form,explode=true,name=is_blocked"`
	IsBlocking        *bool                                       `queryParam:"style=form,explode=true,name=is_blocking"`
	IsSubtask         *bool                                       `queryParam:"style=form,explode=true,name=is_subtask"`
	LikedByAny        *string                                     `queryParam:"style=form,explode=true,name=liked_by.any"`
	LikedByNot        *string                                     `queryParam:"style=form,explode=true,name=liked_by.not"`
	ModifiedAtAfter   *time.Time                                  `queryParam:"style=form,explode=true,name=modified_at.after"`
	ModifiedAtBefore  *time.Time                                  `queryParam:"style=form,explode=true,name=modified_at.before"`
	ModifiedOn        *time.Time                                  `queryParam:"style=form,explode=true,name=modified_on"`
	ModifiedOnAfter   *time.Time                                  `queryParam:"style=form,explode=true,name=modified_on.after"`
	ModifiedOnBefore  *time.Time                                  `queryParam:"style=form,explode=true,name=modified_on.before"`
	OptFields         []string                                    `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty         *bool                                       `queryParam:"style=form,explode=true,name=opt_pretty"`
	PortfoliosAny     *string                                     `queryParam:"style=form,explode=true,name=portfolios.any"`
	ProjectsAll       *string                                     `queryParam:"style=form,explode=true,name=projects.all"`
	ProjectsAny       *string                                     `queryParam:"style=form,explode=true,name=projects.any"`
	ProjectsNot       *string                                     `queryParam:"style=form,explode=true,name=projects.not"`
	ResourceSubtype   *SearchTasksForWorkspaceResourceSubtypeEnum `queryParam:"style=form,explode=true,name=resource_subtype"`
	SectionsAll       *string                                     `queryParam:"style=form,explode=true,name=sections.all"`
	SectionsAny       *string                                     `queryParam:"style=form,explode=true,name=sections.any"`
	SectionsNot       *string                                     `queryParam:"style=form,explode=true,name=sections.not"`
	SortAscending     *bool                                       `queryParam:"style=form,explode=true,name=sort_ascending"`
	SortBy            *SearchTasksForWorkspaceSortByEnum          `queryParam:"style=form,explode=true,name=sort_by"`
	StartOn           *time.Time                                  `queryParam:"style=form,explode=true,name=start_on"`
	StartOnAfter      *time.Time                                  `queryParam:"style=form,explode=true,name=start_on.after"`
	StartOnBefore     *time.Time                                  `queryParam:"style=form,explode=true,name=start_on.before"`
	TagsAll           *string                                     `queryParam:"style=form,explode=true,name=tags.all"`
	TagsAny           *string                                     `queryParam:"style=form,explode=true,name=tags.any"`
	TagsNot           *string                                     `queryParam:"style=form,explode=true,name=tags.not"`
	TeamsAny          *string                                     `queryParam:"style=form,explode=true,name=teams.any"`
	Text              *string                                     `queryParam:"style=form,explode=true,name=text"`
}

type SearchTasksForWorkspaceRequest struct {
	PathParams  SearchTasksForWorkspacePathParams
	QueryParams SearchTasksForWorkspaceQueryParams
}

type SearchTasksForWorkspace200ApplicationJSON struct {
	Data []shared.TaskCompact `json:"data,omitempty"`
}

type SearchTasksForWorkspaceResponse struct {
	ContentType                                     string
	ErrorResponse                                   *shared.ErrorResponse
	StatusCode                                      int64
	SearchTasksForWorkspace200ApplicationJSONObject *SearchTasksForWorkspace200ApplicationJSON
}
