package operations

type ForumGetCoreTopicsPagedPathParams struct {
	CategoryFilter int32 `pathParam:"style=simple,explode=false,name=categoryFilter"`
	Page           int32 `pathParam:"style=simple,explode=false,name=page"`
	QuickDate      int32 `pathParam:"style=simple,explode=false,name=quickDate"`
	Sort           int64 `pathParam:"style=simple,explode=false,name=sort"`
}

type ForumGetCoreTopicsPagedQueryParams struct {
	Locales *string `queryParam:"style=form,explode=true,name=locales"`
}

type ForumGetCoreTopicsPagedRequest struct {
	PathParams  ForumGetCoreTopicsPagedPathParams
	QueryParams ForumGetCoreTopicsPagedQueryParams
}

type ForumGetCoreTopicsPagedResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
