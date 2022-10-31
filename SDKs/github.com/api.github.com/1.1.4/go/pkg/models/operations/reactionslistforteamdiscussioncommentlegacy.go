package operations

import (
"openapi/pkg/models/shared")

type ReactionsListForTeamDiscussionCommentLegacyPathParams struct {
    CommentNumber int64 `pathParam:"style=simple,explode=false,name=comment_number"`
    DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    
}


type ReactionsListForTeamDiscussionCommentLegacyContentEnum string

const (
    ReactionsListForTeamDiscussionCommentLegacyContentEnumPlus1 ReactionsListForTeamDiscussionCommentLegacyContentEnum = "+1"
ReactionsListForTeamDiscussionCommentLegacyContentEnumMinus1 ReactionsListForTeamDiscussionCommentLegacyContentEnum = "-1"
ReactionsListForTeamDiscussionCommentLegacyContentEnumLaugh ReactionsListForTeamDiscussionCommentLegacyContentEnum = "laugh"
ReactionsListForTeamDiscussionCommentLegacyContentEnumConfused ReactionsListForTeamDiscussionCommentLegacyContentEnum = "confused"
ReactionsListForTeamDiscussionCommentLegacyContentEnumHeart ReactionsListForTeamDiscussionCommentLegacyContentEnum = "heart"
ReactionsListForTeamDiscussionCommentLegacyContentEnumHooray ReactionsListForTeamDiscussionCommentLegacyContentEnum = "hooray"
ReactionsListForTeamDiscussionCommentLegacyContentEnumRocket ReactionsListForTeamDiscussionCommentLegacyContentEnum = "rocket"
ReactionsListForTeamDiscussionCommentLegacyContentEnumEyes ReactionsListForTeamDiscussionCommentLegacyContentEnum = "eyes"
)


type ReactionsListForTeamDiscussionCommentLegacyQueryParams struct {
    Content *ReactionsListForTeamDiscussionCommentLegacyContentEnum `queryParam:"style=form,explode=true,name=content"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ReactionsListForTeamDiscussionCommentLegacyRequest struct {
    PathParams ReactionsListForTeamDiscussionCommentLegacyPathParams 
    QueryParams ReactionsListForTeamDiscussionCommentLegacyQueryParams 
    
}

type ReactionsListForTeamDiscussionCommentLegacyResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Reactions []shared.Reaction 
    
}

