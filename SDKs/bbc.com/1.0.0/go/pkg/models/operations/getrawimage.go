package operations

type GetRawImagePathParams struct {
	Pid string `pathParam:"style=simple,explode=false,name=pid"`
}

type GetRawImageRequest struct {
	PathParams GetRawImagePathParams
}

type GetRawImageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
	Nitro       *interface{}
}
