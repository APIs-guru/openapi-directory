package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeStackSummaryXAmzTargetEnum string

const (
	DescribeStackSummaryXAmzTargetEnumOpsWorks20130218DescribeStackSummary DescribeStackSummaryXAmzTargetEnum = "OpsWorks_20130218.DescribeStackSummary"
)

type DescribeStackSummaryHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeStackSummaryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeStackSummaryRequest struct {
	Headers DescribeStackSummaryHeaders
	Request shared.DescribeStackSummaryRequest `request:"mediaType=application/json"`
}

type DescribeStackSummaryResponse struct {
	ContentType                string
	DescribeStackSummaryResult *shared.DescribeStackSummaryResult
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ValidationException        *interface{}
}
