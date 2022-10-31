package operations



type ForumGetPostsThreadedPagedPathParams struct {
    GetParentPost bool `pathParam:"style=simple,explode=false,name=getParentPost"`
    Page int32 `pathParam:"style=simple,explode=false,name=page"`
    PageSize int32 `pathParam:"style=simple,explode=false,name=pageSize"`
    ParentPostID int64 `pathParam:"style=simple,explode=false,name=parentPostId"`
    ReplySize int32 `pathParam:"style=simple,explode=false,name=replySize"`
    RootThreadMode bool `pathParam:"style=simple,explode=false,name=rootThreadMode"`
    SortMode int32 `pathParam:"style=simple,explode=false,name=sortMode"`
    
}

type ForumGetPostsThreadedPagedQueryParams struct {
    Showbanned *string `queryParam:"style=form,explode=true,name=showbanned"`
    
}

type ForumGetPostsThreadedPagedRequest struct {
    PathParams ForumGetPostsThreadedPagedPathParams 
    QueryParams ForumGetPostsThreadedPagedQueryParams 
    
}

type ForumGetPostsThreadedPagedResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

