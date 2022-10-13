package operations

type DeleteTagPathParams struct {
	TagID int64 `pathParam:"style=simple,explode=false,name=tagId"`
}

type DeleteTagRequest struct {
	PathParams DeleteTagPathParams
}

type DeleteTagResponse struct {
	ContentType string
	StatusCode  int64
}
