package operations

import (
	"openapi/pkg/models/shared"
)

type GetBlockIDTransactionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetBlockIDTransactionSecurity struct {
	Key2 shared.SchemeKey2 `security:"scheme,type=apiKey,subtype=header"`
}

type GetBlockIDTransactionRequest struct {
	PathParams GetBlockIDTransactionPathParams
	Security   GetBlockIDTransactionSecurity
}

type GetBlockIDTransactionResponse struct {
	ContentType string
	Empty       map[string]interface{}
	Headers     map[string][]string
	StatusCode  int64
}
