package operations

import (
	"openapi/pkg/models/shared"
)

type GetSolutionMetricsXAmzTargetEnum string

const (
	GetSolutionMetricsXAmzTargetEnumAmazonPersonalizeGetSolutionMetrics GetSolutionMetricsXAmzTargetEnum = "AmazonPersonalize.GetSolutionMetrics"
)

type GetSolutionMetricsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSolutionMetricsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetSolutionMetricsRequest struct {
	Headers GetSolutionMetricsHeaders
	Request shared.GetSolutionMetricsRequest `request:"mediaType=application/json"`
}

type GetSolutionMetricsResponse struct {
	ContentType                string
	GetSolutionMetricsResponse *shared.GetSolutionMetricsResponse
	InvalidInputException      *interface{}
	ResourceInUseException     *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}
