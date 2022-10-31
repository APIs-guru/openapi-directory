package operations

import (
	"openapi/pkg/models/shared"
)

type GetFactFodQueryParams struct {
	Category *string `queryParam:"style=form,explode=true,name=category"`
}

type GetFactFodSecurity struct {
	XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetFactFodRequest struct {
	QueryParams GetFactFodQueryParams
	Security    GetFactFodSecurity
}

type GetFactFodResponse struct {
	ContentType string
	StatusCode  int64
}
