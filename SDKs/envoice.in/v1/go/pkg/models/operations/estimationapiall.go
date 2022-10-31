package operations

import (
	"openapi/pkg/models/shared"
)

type EstimationAPIAllQueryParams struct {
	QueryOptionsPage     *int32 `queryParam:"style=form,explode=true,name=queryOptions.page"`
	QueryOptionsPageSize *int32 `queryParam:"style=form,explode=true,name=queryOptions.pageSize"`
}

type EstimationAPIAllHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type EstimationAPIAllRequest struct {
	QueryParams EstimationAPIAllQueryParams
	Headers     EstimationAPIAllHeaders
}

type EstimationAPIAllResponse struct {
	Body                                []byte
	ContentType                         string
	ListResultEstimationDetailsAPIModel *shared.ListResultEstimationDetailsAPIModel
	StatusCode                          int64
}
