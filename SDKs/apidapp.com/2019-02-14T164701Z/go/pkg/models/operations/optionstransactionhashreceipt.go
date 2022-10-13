package operations

type OptionsTransactionHashReceiptPathParams struct {
	Hash string `pathParam:"style=simple,explode=false,name=hash"`
}

type OptionsTransactionHashReceiptRequest struct {
	PathParams OptionsTransactionHashReceiptPathParams
}

type OptionsTransactionHashReceiptResponse struct {
	ContentType string
	Empty       map[string]interface{}
	Headers     map[string][]string
	StatusCode  int64
}
