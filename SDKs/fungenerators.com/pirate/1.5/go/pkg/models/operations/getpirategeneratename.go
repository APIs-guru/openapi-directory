package operations

import (
	"openapi/pkg/models/shared"
)

type GetPirateGenerateNameQueryParams struct {
	Limit     *int64  `queryParam:"style=form,explode=true,name=limit"`
	Variation *string `queryParam:"style=form,explode=true,name=variation"`
}

type GetPirateGenerateNameSecurity struct {
	XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetPirateGenerateNameRequest struct {
	QueryParams GetPirateGenerateNameQueryParams
	Security    GetPirateGenerateNameSecurity
}

type GetPirateGenerateNameResponse struct {
	ContentType string
	StatusCode  int64
}
