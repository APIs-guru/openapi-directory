package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeActionXAmzTargetEnum string

const (
	DescribeActionXAmzTargetEnumSageMakerDescribeAction DescribeActionXAmzTargetEnum = "SageMaker.DescribeAction"
)

type DescribeActionHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeActionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeActionRequest struct {
	Headers DescribeActionHeaders
	Request shared.DescribeActionRequest `request:"mediaType=application/json"`
}

type DescribeActionResponse struct {
	ContentType            string
	DescribeActionResponse *shared.DescribeActionResponse
	ResourceNotFound       *interface{}
	StatusCode             int64
}
