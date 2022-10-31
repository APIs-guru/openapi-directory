package operations

import (
	"openapi/pkg/models/shared"
)

type GetFactOnthisdayDiedQueryParams struct {
	Day   *string `queryParam:"style=form,explode=true,name=day"`
	Month *string `queryParam:"style=form,explode=true,name=month"`
}

type GetFactOnthisdayDiedSecurity struct {
	XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetFactOnthisdayDiedRequest struct {
	QueryParams GetFactOnthisdayDiedQueryParams
	Security    GetFactOnthisdayDiedSecurity
}

type GetFactOnthisdayDiedResponse struct {
	ContentType string
	StatusCode  int64
}
