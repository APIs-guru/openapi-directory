package operations

type AddViewPathParams struct {
	ID interface{} `pathParam:"style=simple,explode=false,name=id"`
}

type AddViewRequest struct {
	PathParams AddViewPathParams
}

type AddViewResponse struct {
	ContentType string
	StatusCode  int64
}
