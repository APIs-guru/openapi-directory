package operations

type DeleteFilesPathPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type DeleteFilesPathQueryParams struct {
	Recursive *bool `queryParam:"style=form,explode=true,name=recursive"`
}

type DeleteFilesPathRequest struct {
	PathParams  DeleteFilesPathPathParams
	QueryParams DeleteFilesPathQueryParams
}

type DeleteFilesPathResponse struct {
	ContentType string
	StatusCode  int64
}
