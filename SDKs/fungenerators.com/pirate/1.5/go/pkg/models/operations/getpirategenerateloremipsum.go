package operations

import (
	"openapi/pkg/models/shared"
)

type GetPirateGenerateLoremIpsumQueryParams struct {
	Limit *int64  `queryParam:"style=form,explode=true,name=limit"`
	Type  *string `queryParam:"style=form,explode=true,name=type"`
}

type GetPirateGenerateLoremIpsumSecurity struct {
	XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetPirateGenerateLoremIpsumRequest struct {
	QueryParams GetPirateGenerateLoremIpsumQueryParams
	Security    GetPirateGenerateLoremIpsumSecurity
}

type GetPirateGenerateLoremIpsumResponse struct {
	ContentType string
	StatusCode  int64
}
