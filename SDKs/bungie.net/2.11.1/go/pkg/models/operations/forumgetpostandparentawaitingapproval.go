package operations



type ForumGetPostAndParentAwaitingApprovalPathParams struct {
    ChildPostID int64 `pathParam:"style=simple,explode=false,name=childPostId"`
    
}

type ForumGetPostAndParentAwaitingApprovalQueryParams struct {
    Showbanned *string `queryParam:"style=form,explode=true,name=showbanned"`
    
}

type ForumGetPostAndParentAwaitingApprovalRequest struct {
    PathParams ForumGetPostAndParentAwaitingApprovalPathParams 
    QueryParams ForumGetPostAndParentAwaitingApprovalQueryParams 
    
}

type ForumGetPostAndParentAwaitingApprovalResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

