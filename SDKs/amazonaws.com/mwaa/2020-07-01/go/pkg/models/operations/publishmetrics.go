package operations

import (
	"openapi/pkg/models/shared"
)

type PublishMetricsPathParams struct {
	EnvironmentName string `pathParam:"style=simple,explode=false,name=EnvironmentName"`
}

type PublishMetricsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
