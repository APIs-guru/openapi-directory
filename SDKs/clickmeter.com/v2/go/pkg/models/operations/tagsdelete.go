package operations

type TagsDeletePathParams struct {
	TagID int64 `pathParam:"style=simple,explode=false,name=tagId"`
}

type TagsDeleteRequest struct {
	PathParams TagsDeletePathParams
}

type TagsDeleteResponse struct {
	ContentType  string
	StatusCode   int64
	SystemObject map[string]interface{}
}
