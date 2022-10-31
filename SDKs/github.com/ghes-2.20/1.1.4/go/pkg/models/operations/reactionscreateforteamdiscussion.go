package operations

import (
"openapi/pkg/models/shared")

type ReactionsCreateForTeamDiscussionPathParams struct {
    DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    
}

type ReactionsCreateForTeamDiscussionHeaders struct {
    Accept string `header:"style=simple,explode=false,name=accept"`
    
}


type ReactionsCreateForTeamDiscussionRequestBodyContentEnum string

const (
    ReactionsCreateForTeamDiscussionRequestBodyContentEnumPlus1 ReactionsCreateForTeamDiscussionRequestBodyContentEnum = "+1"
ReactionsCreateForTeamDiscussionRequestBodyContentEnumMinus1 ReactionsCreateForTeamDiscussionRequestBodyContentEnum = "-1"
ReactionsCreateForTeamDiscussionRequestBodyContentEnumLaugh ReactionsCreateForTeamDiscussionRequestBodyContentEnum = "laugh"
ReactionsCreateForTeamDiscussionRequestBodyContentEnumConfused ReactionsCreateForTeamDiscussionRequestBodyContentEnum = "confused"
ReactionsCreateForTeamDiscussionRequestBodyContentEnumHeart ReactionsCreateForTeamDiscussionRequestBodyContentEnum = "heart"
ReactionsCreateForTeamDiscussionRequestBodyContentEnumHooray ReactionsCreateForTeamDiscussionRequestBodyContentEnum = "hooray"
ReactionsCreateForTeamDiscussionRequestBodyContentEnumRocket ReactionsCreateForTeamDiscussionRequestBodyContentEnum = "rocket"
ReactionsCreateForTeamDiscussionRequestBodyContentEnumEyes ReactionsCreateForTeamDiscussionRequestBodyContentEnum = "eyes"
)


type ReactionsCreateForTeamDiscussionRequestBody struct {
    Content ReactionsCreateForTeamDiscussionRequestBodyContentEnum `json:"content"`
    
}

type ReactionsCreateForTeamDiscussionRequest struct {
    PathParams ReactionsCreateForTeamDiscussionPathParams 
    Headers ReactionsCreateForTeamDiscussionHeaders 
    Request *ReactionsCreateForTeamDiscussionRequestBody `request:"mediaType=application/json"`
    
}

type ReactionsCreateForTeamDiscussionResponse struct {
    ContentType string 
    StatusCode int64 
    Reaction *shared.Reaction 
    
}

