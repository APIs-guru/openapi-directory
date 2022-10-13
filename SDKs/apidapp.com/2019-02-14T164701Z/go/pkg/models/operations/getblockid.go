package operations

import (
	"openapi/pkg/models/shared"
)

type GetBlockIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetBlockIDSecurity struct {
	Key2 shared.SchemeKey2 `security:"scheme,type=apiKey,subtype=header"`
}

type GetBlockIDRequest struct {
	PathParams GetBlockIDPathParams
	Security   GetBlockIDSecurity
}

type GetBlockIDResponse struct {
	ContentType string
	Empty       map[string]interface{}
	Headers     map[string][]string
	StatusCode  int64
}
