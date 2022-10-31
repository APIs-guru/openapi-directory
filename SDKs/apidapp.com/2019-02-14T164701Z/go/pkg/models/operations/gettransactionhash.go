package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransactionHashPathParams struct {
	Hash string `pathParam:"style=simple,explode=false,name=hash"`
}

type GetTransactionHashSecurity struct {
	Key2 shared.SchemeKey2 `security:"scheme,type=apiKey,subtype=header"`
}

type GetTransactionHashRequest struct {
	PathParams GetTransactionHashPathParams
	Security   GetTransactionHashSecurity
}

type GetTransactionHashResponse struct {
	ContentType string
	Empty       map[string]interface{}
	Headers     map[string][]string
	StatusCode  int64
}
