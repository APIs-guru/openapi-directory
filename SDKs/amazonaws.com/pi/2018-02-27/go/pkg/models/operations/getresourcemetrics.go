package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourceMetricsXAmzTargetEnum string

const (
	GetResourceMetricsXAmzTargetEnumPerformanceInsightsv20180227GetResourceMetrics GetResourceMetricsXAmzTargetEnum = "PerformanceInsightsv20180227.GetResourceMetrics"
)

type GetResourceMetricsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetResourceMetricsXAmzTargetEnum `header:"name=X-Amz-Target"`
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
