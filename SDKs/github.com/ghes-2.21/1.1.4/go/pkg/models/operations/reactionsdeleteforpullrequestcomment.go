package operations



type ReactionsDeleteForPullRequestCommentPathParams struct {
    CommentID int64 `pathParam:"style=simple,explode=false,name=comment_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    ReactionID int64 `pathParam:"style=simple,explode=false,name=reaction_id"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReactionsDeleteForPullRequestCommentRequest struct {
    PathParams ReactionsDeleteForPullRequestCommentPathParams 
    
}

type ReactionsDeleteForPullRequestCommentResponse struct {
    ContentType string 
    StatusCode int64 
    
}

