package operations

import (
	"openapi/pkg/models/shared"
)

type GetModelNamesAllGetInactiveModelsGetQueryParams struct {
	BrandName string `queryParam:"style=form,explode=true,name=brandName"`
	Jwt       string `queryParam:"style=form,explode=true,name=jwt"`
}

type GetModelNamesAllGetInactiveModelsGetRequest struct {
	QueryParams GetModelNamesAllGetInactiveModelsGetQueryParams
}

type GetModelNamesAllGetInactiveModelsGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	ModelResp           *shared.ModelResp
	StatusCode          int64
}
