package operations

import (
"openapi/pkg/models/shared")

type ReactionsCreateForTeamDiscussionLegacyPathParams struct {
    DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    
}


type ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum string

const (
    ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnumPlus1 ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum = "+1"
ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnumMinus1 ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum = "-1"
ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnumLaugh ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum = "laugh"
ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnumConfused ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum = "confused"
ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnumHeart ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum = "heart"
ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnumHooray ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum = "hooray"
ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnumRocket ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum = "rocket"
ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnumEyes ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum = "eyes"
)


type ReactionsCreateForTeamDiscussionLegacyRequestBody struct {
    Content ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum `json:"content"`
    
}

type ReactionsCreateForTeamDiscussionLegacyRequest struct {
    PathParams ReactionsCreateForTeamDiscussionLegacyPathParams 
    Request *ReactionsCreateForTeamDiscussionLegacyRequestBody `request:"mediaType=application/json"`
    
}

type ReactionsCreateForTeamDiscussionLegacyResponse struct {
    ContentType string 
    StatusCode int64 
    Reaction *shared.Reaction 
    
}

