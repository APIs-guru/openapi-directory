package operations

import (
	"openapi/pkg/models/shared"
)

type EurekaInfoQueryParams struct {
	Nonce   int32  `queryParam:"style=form,explode=true,name=nonce"`
	Options string `queryParam:"style=form,explode=true,name=options"`
	Params  string `queryParam:"style=form,explode=true,name=params"`
}

type EurekaInfoRequest struct {
	QueryParams EurekaInfoQueryParams
}

type EurekaInfoResponse struct {
	ContentType string
	Example1    *shared.Example1
	StatusCode  int64
}
