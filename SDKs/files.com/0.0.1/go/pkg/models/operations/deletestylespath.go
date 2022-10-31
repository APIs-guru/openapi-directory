package operations

type DeleteStylesPathPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type DeleteStylesPathRequest struct {
	PathParams DeleteStylesPathPathParams
}

type DeleteStylesPathResponse struct {
	ContentType string
	StatusCode  int64
}
