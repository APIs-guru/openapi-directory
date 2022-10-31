package operations

import (
	"openapi/pkg/models/shared"
)

type GetFactNumbersQueryParams struct {
	Number int64 `queryParam:"style=form,explode=true,name=number"`
}

type GetFactNumbersSecurity struct {
	XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetFactNumbersRequest struct {
	QueryParams GetFactNumbersQueryParams
	Security    GetFactNumbersSecurity
}

type GetFactNumbersResponse struct {
	ContentType string
	StatusCode  int64
}
