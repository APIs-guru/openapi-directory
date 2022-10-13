package operations

import (
	"openapi/pkg/models/shared"
)

type EstimationAPIDetailsQueryParams struct {
	ID int32 `queryParam:"style=form,explode=true,name=id"`
}

type EstimationAPIDetailsHeaders struct {
	XAuthKey    string `header:"name=x-auth-key"`
	XAuthSecret string `header:"name=x-auth-secret"`
}

type EstimationAPIDetailsRequest struct {
	QueryParams EstimationAPIDetailsQueryParams
	Headers     EstimationAPIDetailsHeaders
}

type EstimationAPIDetailsResponse struct {
	Body                          []byte
	ContentType                   string
	EstimationFullDetailsAPIModel *shared.EstimationFullDetailsAPIModel
	StatusCode                    int64
}
