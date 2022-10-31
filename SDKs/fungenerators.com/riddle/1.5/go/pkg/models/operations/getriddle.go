package operations

import (
	"openapi/pkg/models/shared"
)

type GetRiddleQueryParams struct {
	ID *string `queryParam:"style=form,explode=true,name=id"`
}

type GetRiddleSecurity struct {
	XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetRiddleRequest struct {
	QueryParams GetRiddleQueryParams
	Security    GetRiddleSecurity
}

type GetRiddleResponse struct {
	ContentType string
	StatusCode  int64
}
