package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransactionHashReceiptPathParams struct {
	Hash string `pathParam:"style=simple,explode=false,name=hash"`
}

type GetTransactionHashReceiptSecurity struct {
	Key2 shared.SchemeKey2 `security:"scheme,type=apiKey,subtype=header"`
}

type GetTransactionHashReceiptRequest struct {
	PathParams GetTransactionHashReceiptPathParams
	Security   GetTransactionHashReceiptSecurity
}

type GetTransactionHashReceiptResponse struct {
	ContentType string
	Empty       map[string]interface{}
	Headers     map[string][]string
	StatusCode  int64
}
