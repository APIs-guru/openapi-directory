package operations

import (
	"openapi/pkg/models/shared"
)

type PostTransactionSecurity struct {
	Key2 shared.SchemeKey2 `security:"scheme,type=apiKey,subtype=header"`
}

type PostTransactionRequest struct {
	Security PostTransactionSecurity
}

type PostTransactionResponse struct {
	ContentType string
	Empty       map[string]interface{}
	Headers     map[string][]string
	StatusCode  int64
}
