package operations

import (
	"openapi/pkg/models/shared"
)

type GetUUIDVersionVersionPathParams struct {
	Version int64 `pathParam:"style=simple,explode=false,name=version"`
}

type GetUUIDVersionVersionQueryParams struct {
	Count *int64  `queryParam:"style=form,explode=true,name=count"`
	Text  *string `queryParam:"style=form,explode=true,name=text"`
	Type  *string `queryParam:"style=form,explode=true,name=type"`
}

type GetUUIDVersionVersionSecurity struct {
	XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetUUIDVersionVersionRequest struct {
	PathParams  GetUUIDVersionVersionPathParams
	QueryParams GetUUIDVersionVersionQueryParams
	Security    GetUUIDVersionVersionSecurity
}

type GetUUIDVersionVersionResponse struct {
	ContentType string
	StatusCode  int64
}
