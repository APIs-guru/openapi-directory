package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegionsQueryParams struct {
	Lang shared.LangEnum `queryParam:"style=form,explode=true,name=lang"`
}

type GetRegionsRequest struct {
	QueryParams GetRegionsQueryParams
}

type GetRegionsResponse struct {
	ContentType string
	StatusCode  int64
	Ibl         *interface{}
}
