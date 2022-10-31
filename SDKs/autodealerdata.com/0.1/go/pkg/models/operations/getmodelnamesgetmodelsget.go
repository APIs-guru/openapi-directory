package operations

import (
	"openapi/pkg/models/shared"
)

type GetModelNamesGetModelsGetQueryParams struct {
	BrandName string `queryParam:"style=form,explode=true,name=brandName"`
	Jwt       string `queryParam:"style=form,explode=true,name=jwt"`
}

type GetModelNamesGetModelsGetRequest struct {
	QueryParams GetModelNamesGetModelsGetQueryParams
}

type GetModelNamesGetModelsGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	ModelResp           *shared.ModelResp
	StatusCode          int64
}
