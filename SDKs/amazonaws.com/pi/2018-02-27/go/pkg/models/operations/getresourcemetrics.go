package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourceMetricsXAmzTargetEnum string

const (
	GetResourceMetricsXAmzTargetEnumPerformanceInsightsv20180227GetResourceMetrics GetResourceMetricsXAmzTargetEnum = "PerformanceInsightsv20180227.GetResourceMetrics"
)

type GetResourceMetricsHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetResourceMetricsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetResourceMetricsRequest struct {
	Headers GetResourceMetricsHeaders
	Request shared.GetResourceMetricsRequest `request:"mediaType=application/json"`
}

type GetResourceMetricsResponse struct {
	ContentType                string
	GetResourceMetricsResponse *shared.GetResourceMetricsResponse
	InternalServiceError       *interface{}
	InvalidArgumentException   *interface{}
	NotAuthorizedException     *interface{}
	StatusCode                 int64
}
