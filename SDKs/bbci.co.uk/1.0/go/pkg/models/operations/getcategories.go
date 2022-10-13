package operations

import (
	"openapi/pkg/models/shared"
)

type GetCategoriesQueryParams struct {
	Lang shared.LangEnum `queryParam:"style=form,explode=true,name=lang"`
}

type GetCategoriesRequest struct {
	QueryParams GetCategoriesQueryParams
}

type GetCategoriesResponse struct {
	ContentType string
	StatusCode  int64
	Ibl         *interface{}
}
