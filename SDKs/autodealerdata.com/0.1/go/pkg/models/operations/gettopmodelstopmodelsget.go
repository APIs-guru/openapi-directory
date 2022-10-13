package operations

import (
	"openapi/pkg/models/shared"
)

type GetTopModelsTopModelsGetQueryParams struct {
	Jwt        string  `queryParam:"style=form,explode=true,name=jwt"`
	RegionName *string `queryParam:"style=form,explode=true,name=regionName"`
}

type GetTopModelsTopModelsGetRequest struct {
	QueryParams GetTopModelsTopModelsGetQueryParams
}

type GetTopModelsTopModelsGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
	TopModelResp        *shared.TopModelResp
}
