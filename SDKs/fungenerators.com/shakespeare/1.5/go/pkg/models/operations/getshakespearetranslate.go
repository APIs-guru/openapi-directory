package operations

import (
	"openapi/pkg/models/shared"
)

type GetShakespeareTranslateQueryParams struct {
	Text string `queryParam:"style=form,explode=true,name=text"`
}

type GetShakespeareTranslateSecurity struct {
	XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetShakespeareTranslateRequest struct {
	QueryParams GetShakespeareTranslateQueryParams
	Security    GetShakespeareTranslateSecurity
}

type GetShakespeareTranslateResponse struct {
	ContentType string
	StatusCode  int64
}
