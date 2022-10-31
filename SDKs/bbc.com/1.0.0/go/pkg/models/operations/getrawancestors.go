package operations

type GetRawAncestorsPathParams struct {
	Pid string `pathParam:"style=simple,explode=false,name=pid"`
}

type GetRawAncestorsRequest struct {
	PathParams GetRawAncestorsPathParams
}

type GetRawAncestorsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
	Nitro       *interface{}
}
