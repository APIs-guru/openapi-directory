package operations



type ForumGetPostAndParentPathParams struct {
    ChildPostID int64 `pathParam:"style=simple,explode=false,name=childPostId"`
    
}

type ForumGetPostAndParentQueryParams struct {
    Showbanned *string `queryParam:"style=form,explode=true,name=showbanned"`
    
}

type ForumGetPostAndParentRequest struct {
    PathParams ForumGetPostAndParentPathParams 
    QueryParams ForumGetPostAndParentQueryParams 
    
}

type ForumGetPostAndParentResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

