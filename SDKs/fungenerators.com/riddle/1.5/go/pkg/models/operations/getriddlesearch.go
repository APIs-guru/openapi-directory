package operations

import (
	"openapi/pkg/models/shared"
)

type GetRiddleSearchQueryParams struct {
	Category *string `queryParam:"style=form,explode=true,name=category"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetRiddleSearchSecurity struct {
	XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetRiddleSearchRequest struct {
	QueryParams GetRiddleSearchQueryParams
	Security    GetRiddleSearchSecurity
}

type GetRiddleSearchResponse struct {
	ContentType string
	StatusCode  int64
}
