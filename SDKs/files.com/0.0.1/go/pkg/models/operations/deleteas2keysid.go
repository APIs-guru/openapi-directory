package operations

type DeleteAs2KeysIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteAs2KeysIDRequest struct {
	PathParams DeleteAs2KeysIDPathParams
}

type DeleteAs2KeysIDResponse struct {
	ContentType string
	StatusCode  int64
}
