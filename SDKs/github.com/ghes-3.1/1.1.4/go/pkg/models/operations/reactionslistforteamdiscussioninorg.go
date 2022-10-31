package operations

import (
"openapi/pkg/models/shared")

type ReactionsListForTeamDiscussionInOrgPathParams struct {
    DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
    Org string `pathParam:"style=simple,explode=false,name=org"`
    TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
    
}


type ReactionsListForTeamDiscussionInOrgContentEnum string

const (
    ReactionsListForTeamDiscussionInOrgContentEnumPlus1 ReactionsListForTeamDiscussionInOrgContentEnum = "+1"
ReactionsListForTeamDiscussionInOrgContentEnumMinus1 ReactionsListForTeamDiscussionInOrgContentEnum = "-1"
ReactionsListForTeamDiscussionInOrgContentEnumLaugh ReactionsListForTeamDiscussionInOrgContentEnum = "laugh"
ReactionsListForTeamDiscussionInOrgContentEnumConfused ReactionsListForTeamDiscussionInOrgContentEnum = "confused"
ReactionsListForTeamDiscussionInOrgContentEnumHeart ReactionsListForTeamDiscussionInOrgContentEnum = "heart"
ReactionsListForTeamDiscussionInOrgContentEnumHooray ReactionsListForTeamDiscussionInOrgContentEnum = "hooray"
ReactionsListForTeamDiscussionInOrgContentEnumRocket ReactionsListForTeamDiscussionInOrgContentEnum = "rocket"
ReactionsListForTeamDiscussionInOrgContentEnumEyes ReactionsListForTeamDiscussionInOrgContentEnum = "eyes"
)


type ReactionsListForTeamDiscussionInOrgQueryParams struct {
    Content *ReactionsListForTeamDiscussionInOrgContentEnum `queryParam:"style=form,explode=true,name=content"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ReactionsListForTeamDiscussionInOrgRequest struct {
    PathParams ReactionsListForTeamDiscussionInOrgPathParams 
    QueryParams ReactionsListForTeamDiscussionInOrgQueryParams 
    
}

type ReactionsListForTeamDiscussionInOrgResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Reactions []shared.Reaction 
    
}

