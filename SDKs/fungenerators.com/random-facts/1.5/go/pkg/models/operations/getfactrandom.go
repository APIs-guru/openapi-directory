package operations

import (
	"openapi/pkg/models/shared"
)

type GetFactRandomQueryParams struct {
	Category    *string `queryParam:"style=form,explode=true,name=category"`
	Subcategory *string `queryParam:"style=form,explode=true,name=subcategory"`
}

type GetFactRandomSecurity struct {
	XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetFactRandomRequest struct {
	QueryParams GetFactRandomQueryParams
	Security    GetFactRandomSecurity
}

type GetFactRandomResponse struct {
	ContentType string
	StatusCode  int64
}
