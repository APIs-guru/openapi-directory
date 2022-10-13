package operations

import (
	"openapi/pkg/models/shared"
)

type CategoryListingsAllPathParams struct {
	EcosystemID string `pathParam:"style=simple,explode=false,name=ecosystem_id"`
	ID          string `pathParam:"style=simple,explode=false,name=id"`
}

type CategoryListingsAllQueryParams struct {
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
}

type CategoryListingsAllRequest struct {
	PathParams  CategoryListingsAllPathParams
	QueryParams CategoryListingsAllQueryParams
}

type CategoryListingsAllResponse struct {
	ContentType         string
	GetListingsResponse *shared.GetListingsResponse
	StatusCode          int64
}
