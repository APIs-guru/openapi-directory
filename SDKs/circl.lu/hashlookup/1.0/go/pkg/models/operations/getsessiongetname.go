package operations

type GetSessionGetNamePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetSessionGetNameRequest struct {
	PathParams GetSessionGetNamePathParams
}

type GetSessionGetNameResponse struct {
	ContentType string
	StatusCode  int64
}
