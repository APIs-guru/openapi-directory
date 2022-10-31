package operations

import (
"openapi/pkg/models/shared")

type ReactionsListForTeamDiscussionLegacyPathParams struct {
    DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    
}


type ReactionsListForTeamDiscussionLegacyContentEnum string

const (
    ReactionsListForTeamDiscussionLegacyContentEnumPlus1 ReactionsListForTeamDiscussionLegacyContentEnum = "+1"
ReactionsListForTeamDiscussionLegacyContentEnumMinus1 ReactionsListForTeamDiscussionLegacyContentEnum = "-1"
ReactionsListForTeamDiscussionLegacyContentEnumLaugh ReactionsListForTeamDiscussionLegacyContentEnum = "laugh"
ReactionsListForTeamDiscussionLegacyContentEnumConfused ReactionsListForTeamDiscussionLegacyContentEnum = "confused"
ReactionsListForTeamDiscussionLegacyContentEnumHeart ReactionsListForTeamDiscussionLegacyContentEnum = "heart"
ReactionsListForTeamDiscussionLegacyContentEnumHooray ReactionsListForTeamDiscussionLegacyContentEnum = "hooray"
ReactionsListForTeamDiscussionLegacyContentEnumRocket ReactionsListForTeamDiscussionLegacyContentEnum = "rocket"
ReactionsListForTeamDiscussionLegacyContentEnumEyes ReactionsListForTeamDiscussionLegacyContentEnum = "eyes"
)


type ReactionsListForTeamDiscussionLegacyQueryParams struct {
    Content *ReactionsListForTeamDiscussionLegacyContentEnum `queryParam:"style=form,explode=true,name=content"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ReactionsListForTeamDiscussionLegacyRequest struct {
    PathParams ReactionsListForTeamDiscussionLegacyPathParams 
    QueryParams ReactionsListForTeamDiscussionLegacyQueryParams 
    
}

type ReactionsListForTeamDiscussionLegacyResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Reactions []shared.Reaction 
    
}

