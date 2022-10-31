package operations



type TeamsDeleteDiscussionCommentLegacyPathParams struct {
    CommentNumber int64 `pathParam:"style=simple,explode=false,name=comment_number"`
    DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    
}

type TeamsDeleteDiscussionCommentLegacyRequest struct {
    PathParams TeamsDeleteDiscussionCommentLegacyPathParams 
    
}

type TeamsDeleteDiscussionCommentLegacyResponse struct {
    ContentType string 
    StatusCode int64 
    
}

