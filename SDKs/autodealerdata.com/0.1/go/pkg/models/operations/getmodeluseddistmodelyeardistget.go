package operations

import (
	"openapi/pkg/models/shared"
)

type GetModelUsedDistModelYearDistGetQueryParams struct {
	BrandName  string  `queryParam:"style=form,explode=true,name=brandName"`
	Jwt        string  `queryParam:"style=form,explode=true,name=jwt"`
	ModelName  string  `queryParam:"style=form,explode=true,name=modelName"`
	RegionName *string `queryParam:"style=form,explode=true,name=regionName"`
}

type GetModelUsedDistModelYearDistGetRequest struct {
	QueryParams GetModelUsedDistModelYearDistGetQueryParams
}

type GetModelUsedDistModelYearDistGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	ModelYearDistResp   *shared.ModelYearDistResp
	StatusCode          int64
}
