package operations

type OptionsWalletAccountIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type OptionsWalletAccountIDRequest struct {
	PathParams OptionsWalletAccountIDPathParams
}

type OptionsWalletAccountIDResponse struct {
	ContentType string
	Empty       map[string]interface{}
	Headers     map[string][]string
	StatusCode  int64
}
