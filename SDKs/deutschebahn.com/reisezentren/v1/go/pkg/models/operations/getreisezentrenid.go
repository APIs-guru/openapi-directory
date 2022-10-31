package operations

type GetReisezentrenIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetReisezentrenIDRequest struct {
	PathParams GetReisezentrenIDPathParams
}

type GetReisezentrenIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
