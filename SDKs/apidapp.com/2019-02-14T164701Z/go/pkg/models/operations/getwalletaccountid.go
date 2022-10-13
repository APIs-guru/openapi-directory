package operations

type GetWalletAccountIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetWalletAccountIDRequest struct {
	PathParams GetWalletAccountIDPathParams
}

type GetWalletAccountIDResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
