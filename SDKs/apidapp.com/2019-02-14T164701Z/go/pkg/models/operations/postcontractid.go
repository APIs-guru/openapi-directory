package operations

import (
	"openapi/pkg/models/shared"
)

type PostContractIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostContractIDSecurity struct {
	Key2 shared.SchemeKey2 `security:"scheme,type=apiKey,subtype=header"`
}

type PostContractIDRequest struct {
	PathParams PostContractIDPathParams
	Security   PostContractIDSecurity
}

type PostContractIDResponse struct {
	ContentType string
	Empty       map[string]interface{}
	Headers     map[string][]string
	StatusCode  int64
}
