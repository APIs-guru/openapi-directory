package operations

type DeleteDriverPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteDriverRequest struct {
	PathParams DeleteDriverPathParams
}

type DeleteDriverResponse struct {
	ContentType string
	StatusCode  int64
}
