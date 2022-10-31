package operations

import (
"openapi/pkg/models/shared")

type TeamsGetDiscussionCommentPathParams struct {
    CommentNumber int64 `pathParam:"style=simple,explode=false,name=comment_number"`
    DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    
}

type TeamsGetDiscussionCommentRequest struct {
    PathParams TeamsGetDiscussionCommentPathParams 
    
}

type TeamsGetDiscussionCommentResponse struct {
    ContentType string 
    StatusCode int64 
    TeamDiscussionComment *shared.TeamDiscussionComment 
    
}

