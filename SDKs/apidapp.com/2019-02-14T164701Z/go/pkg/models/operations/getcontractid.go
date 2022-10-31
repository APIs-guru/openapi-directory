package operations

import (
	"openapi/pkg/models/shared"
)

type GetContractIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetContractIDSecurity struct {
	Key2 shared.SchemeKey2 `security:"scheme,type=apiKey,subtype=header"`
}

type GetContractIDRequest struct {
	PathParams GetContractIDPathParams
	Security   GetContractIDSecurity
}

type GetContractIDResponse struct {
	ContentType string
	Empty       map[string]interface{}
	Headers     map[string][]string
	StatusCode  int64
}
