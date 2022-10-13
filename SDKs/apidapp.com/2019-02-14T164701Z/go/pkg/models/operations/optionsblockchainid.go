package operations

type OptionsBlockchainIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type OptionsBlockchainIDRequest struct {
	PathParams OptionsBlockchainIDPathParams
}

type OptionsBlockchainIDResponse struct {
	ContentType string
	Empty       map[string]interface{}
	Headers     map[string][]string
	StatusCode  int64
}
