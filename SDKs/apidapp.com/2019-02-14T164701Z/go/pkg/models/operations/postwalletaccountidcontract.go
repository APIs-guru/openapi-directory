package operations

type PostWalletAccountIDContractPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostWalletAccountIDContractRequest struct {
	PathParams PostWalletAccountIDContractPathParams
}

type PostWalletAccountIDContractResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
