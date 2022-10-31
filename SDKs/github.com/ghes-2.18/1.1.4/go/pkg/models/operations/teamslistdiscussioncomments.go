package operations

import (
"openapi/pkg/models/shared")

type TeamsListDiscussionCommentsPathParams struct {
    DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    
}

type TeamsListDiscussionCommentsQueryParams struct {
    Direction *shared.DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type TeamsListDiscussionCommentsHeaders struct {
    Accept string `header:"style=simple,explode=false,name=accept"`
    
}

type TeamsListDiscussionCommentsRequest struct {
    PathParams TeamsListDiscussionCommentsPathParams 
    QueryParams TeamsListDiscussionCommentsQueryParams 
    Headers TeamsListDiscussionCommentsHeaders 
    
}

type TeamsListDiscussionCommentsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    TeamDiscussionComments []shared.TeamDiscussionComment 
    
}

