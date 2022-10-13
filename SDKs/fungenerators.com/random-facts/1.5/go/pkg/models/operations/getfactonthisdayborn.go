package operations

import (
	"openapi/pkg/models/shared"
)

type GetFactOnthisdayBornQueryParams struct {
	Day   *string `queryParam:"style=form,explode=true,name=day"`
	Month *string `queryParam:"style=form,explode=true,name=month"`
}

type GetFactOnthisdayBornSecurity struct {
	XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetFactOnthisdayBornRequest struct {
	QueryParams GetFactOnthisdayBornQueryParams
	Security    GetFactOnthisdayBornSecurity
}

type GetFactOnthisdayBornResponse struct {
	ContentType string
	StatusCode  int64
}
