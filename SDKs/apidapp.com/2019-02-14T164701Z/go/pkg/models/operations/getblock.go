package operations

import (
	"openapi/pkg/models/shared"
)

type GetBlockSecurity struct {
	Key2 shared.SchemeKey2 `security:"scheme,type=apiKey,subtype=header"`
}

type GetBlockRequest struct {
	Security GetBlockSecurity
}

type GetBlockResponse struct {
	ContentType string
	Empty       map[string]interface{}
	Headers     map[string][]string
	StatusCode  int64
}
