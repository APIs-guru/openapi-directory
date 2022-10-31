package operations

type ForumGetTopicsPagedPathParams struct {
	CategoryFilter int32 `pathParam:"style=simple,explode=false,name=categoryFilter"`
	Group          int64 `pathParam:"style=simple,explode=false,name=group"`
	Page           int32 `pathParam:"style=simple,explode=false,name=page"`
	PageSize       int32 `pathParam:"style=simple,explode=false,name=pageSize"`
	QuickDate      int32 `pathParam:"style=simple,explode=false,name=quickDate"`
	Sort           int64 `pathParam:"style=simple,explode=false,name=sort"`
}

type ForumGetTopicsPagedQueryParams struct {
	Locales   *string `queryParam:"style=form,explode=true,name=locales"`
	Tagstring *string `queryParam:"style=form,explode=true,name=tagstring"`
}

type ForumGetTopicsPagedRequest struct {
	PathParams  ForumGetTopicsPagedPathParams
	QueryParams ForumGetTopicsPagedQueryParams
}

type ForumGetTopicsPagedResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
