package operations

type DeleteLocationPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteLocationRequest struct {
	PathParams DeleteLocationPathParams
}

type DeleteLocationResponse struct {
	ContentType string
	StatusCode  int64
}
