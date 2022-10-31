package operations

import (
	"openapi/pkg/models/shared"
)

type GetBlockchainSecurity struct {
	Key2 shared.SchemeKey2 `security:"scheme,type=apiKey,subtype=header"`
}

type GetBlockchainRequest struct {
	Security GetBlockchainSecurity
}

type GetBlockchainResponse struct {
	ContentType string
	Empty       map[string]interface{}
	Headers     map[string][]string
	StatusCode  int64
}
