package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeServiceErrorsXAmzTargetEnum string

const (
	DescribeServiceErrorsXAmzTargetEnumOpsWorks20130218DescribeServiceErrors DescribeServiceErrorsXAmzTargetEnum = "OpsWorks_20130218.DescribeServiceErrors"
)

type DescribeServiceErrorsHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeServiceErrorsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeServiceErrorsRequest struct {
	Headers DescribeServiceErrorsHeaders
	Request shared.DescribeServiceErrorsRequest `request:"mediaType=application/json"`
}

type DescribeServiceErrorsResponse struct {
	ContentType                 string
	DescribeServiceErrorsResult *shared.DescribeServiceErrorsResult
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ValidationException         *interface{}
}
