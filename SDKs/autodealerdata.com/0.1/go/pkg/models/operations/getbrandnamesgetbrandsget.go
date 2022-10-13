package operations

import (
	"openapi/pkg/models/shared"
)

type GetBrandNamesGetBrandsGetQueryParams struct {
	Jwt string `queryParam:"style=form,explode=true,name=jwt"`
}

type GetBrandNamesGetBrandsGetRequest struct {
	QueryParams GetBrandNamesGetBrandsGetQueryParams
}

type GetBrandNamesGetBrandsGetResponse struct {
	BrandResp           *shared.BrandResp
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
}
