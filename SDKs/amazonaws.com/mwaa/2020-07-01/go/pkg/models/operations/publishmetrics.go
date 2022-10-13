package operations

import (
	"openapi/pkg/models/shared"
)

type PublishMetricsPathParams struct {
	EnvironmentName string `pathParam:"style=simple,explode=false,name=EnvironmentName"`
}

type PublishMetricsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PublishMetricsRequestBody struct {
	MetricData []shared.MetricDatum `json:"MetricData"`
}

type PublishMetricsRequest struct {
	PathParams PublishMetricsPathParams
	Headers    PublishMetricsHeaders
	Request    PublishMetricsRequestBody `request:"mediaType=application/json"`
}

type PublishMetricsResponse struct {
	ContentType             string
	InternalServerException *interface{}
	PublishMetricsOutput    map[string]interface{}
	StatusCode              int64
	ValidationException     *interface{}
}
