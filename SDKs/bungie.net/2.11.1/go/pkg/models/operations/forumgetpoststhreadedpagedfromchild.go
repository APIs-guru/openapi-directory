package operations

type ForumGetPostsThreadedPagedFromChildPathParams struct {
	ChildPostID    int64 `pathParam:"style=simple,explode=false,name=childPostId"`
	Page           int32 `pathParam:"style=simple,explode=false,name=page"`
	PageSize       int32 `pathParam:"style=simple,explode=false,name=pageSize"`
	ReplySize      int32 `pathParam:"style=simple,explode=false,name=replySize"`
	RootThreadMode bool  `pathParam:"style=simple,explode=false,name=rootThreadMode"`
	SortMode       int32 `pathParam:"style=simple,explode=false,name=sortMode"`
}

type ForumGetPostsThreadedPagedFromChildQueryParams struct {
	Showbanned *string `queryParam:"style=form,explode=true,name=showbanned"`
}

type ForumGetPostsThreadedPagedFromChildRequest struct {
	PathParams  ForumGetPostsThreadedPagedFromChildPathParams
	QueryParams ForumGetPostsThreadedPagedFromChildQueryParams
}

type ForumGetPostsThreadedPagedFromChildResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
