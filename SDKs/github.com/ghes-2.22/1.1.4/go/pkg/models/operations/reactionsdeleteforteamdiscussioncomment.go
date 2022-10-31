package operations



type ReactionsDeleteForTeamDiscussionCommentPathParams struct {
    CommentNumber int64 `pathParam:"style=simple,explode=false,name=comment_number"`
    DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
    Org string `pathParam:"style=simple,explode=false,name=org"`
    ReactionID int64 `pathParam:"style=simple,explode=false,name=reaction_id"`
    TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
    
}

type ReactionsDeleteForTeamDiscussionCommentRequest struct {
    PathParams ReactionsDeleteForTeamDiscussionCommentPathParams 
    
}

type ReactionsDeleteForTeamDiscussionCommentResponse struct {
    ContentType string 
    StatusCode int64 
    
}

