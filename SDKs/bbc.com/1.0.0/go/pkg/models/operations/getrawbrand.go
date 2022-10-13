package operations

type GetRawBrandPathParams struct {
	Pid string `pathParam:"style=simple,explode=false,name=pid"`
}

type GetRawBrandRequest struct {
	PathParams GetRawBrandPathParams
}

type GetRawBrandResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
	Nitro       *interface{}
}
