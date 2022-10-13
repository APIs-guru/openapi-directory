package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAppXAmzTargetEnum string

const (
	DescribeAppXAmzTargetEnumSageMakerDescribeApp DescribeAppXAmzTargetEnum = "SageMaker.DescribeApp"
)

type DescribeAppHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAppXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAppRequest struct {
	Headers DescribeAppHeaders
	Request shared.DescribeAppRequest `request:"mediaType=application/json"`
}

type DescribeAppResponse struct {
	ContentType         string
	DescribeAppResponse *shared.DescribeAppResponse
	ResourceNotFound    *interface{}
	StatusCode          int64
}
