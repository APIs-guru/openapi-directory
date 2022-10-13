package operations

type DeleteClickwrapsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteClickwrapsIDRequest struct {
	PathParams DeleteClickwrapsIDPathParams
}

type DeleteClickwrapsIDResponse struct {
	ContentType string
	StatusCode  int64
}
