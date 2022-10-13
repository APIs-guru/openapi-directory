package operations

import (
	"openapi/pkg/models/shared"
)

type PostRiddleQueryParams struct {
	Answer   string `queryParam:"style=form,explode=true,name=answer"`
	Category string `queryParam:"style=form,explode=true,name=category"`
	Question string `queryParam:"style=form,explode=true,name=question"`
}

type PostRiddleSecurity struct {
	XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PostRiddleRequest struct {
	QueryParams PostRiddleQueryParams
	Security    PostRiddleSecurity
}

type PostRiddleResponse struct {
	ContentType string
	StatusCode  int64
}
