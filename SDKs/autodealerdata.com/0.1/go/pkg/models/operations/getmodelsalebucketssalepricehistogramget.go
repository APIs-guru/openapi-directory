package operations

import (
	"openapi/pkg/models/shared"
)

type GetModelSaleBucketsSalePriceHistogramGetQueryParams struct {
	BrandName  string  `queryParam:"style=form,explode=true,name=brandName"`
	Jwt        string  `queryParam:"style=form,explode=true,name=jwt"`
	ModelName  string  `queryParam:"style=form,explode=true,name=modelName"`
	RegionName *string `queryParam:"style=form,explode=true,name=regionName"`
}

type GetModelSaleBucketsSalePriceHistogramGetRequest struct {
	QueryParams GetModelSaleBucketsSalePriceHistogramGetQueryParams
}

type GetModelSaleBucketsSalePriceHistogramGetResponse struct {
	BucketResp          *shared.BucketResp
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
}
