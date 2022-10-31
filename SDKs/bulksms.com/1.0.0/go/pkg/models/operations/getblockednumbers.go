package operations

import (
	"openapi/pkg/models/shared"
)

type GetBlockedNumbersQueryParams struct {
	Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
	MinID *int32 `queryParam:"style=form,explode=true,name=min-id"`
}

type GetBlockedNumbersSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type GetBlockedNumbersRequest struct {
	QueryParams GetBlockedNumbersQueryParams
	Security    GetBlockedNumbersSecurity
}

type GetBlockedNumbersResponse struct {
	BlockedNumber *shared.BlockedNumber
	ContentType   string
	StatusCode    int64
}
