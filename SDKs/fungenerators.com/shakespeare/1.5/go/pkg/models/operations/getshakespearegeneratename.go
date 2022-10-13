package operations

import (
	"openapi/pkg/models/shared"
)

type GetShakespeareGenerateNameQueryParams struct {
	Limit     *int64  `queryParam:"style=form,explode=true,name=limit"`
	Variation *string `queryParam:"style=form,explode=true,name=variation"`
}

type GetShakespeareGenerateNameSecurity struct {
	XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetShakespeareGenerateNameRequest struct {
	QueryParams GetShakespeareGenerateNameQueryParams
	Security    GetShakespeareGenerateNameSecurity
}

type GetShakespeareGenerateNameResponse struct {
	ContentType string
	StatusCode  int64
}
