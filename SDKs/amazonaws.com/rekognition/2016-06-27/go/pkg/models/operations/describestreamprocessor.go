package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeStreamProcessorXAmzTargetEnum string

const (
	DescribeStreamProcessorXAmzTargetEnumRekognitionServiceDescribeStreamProcessor DescribeStreamProcessorXAmzTargetEnum = "RekognitionService.DescribeStreamProcessor"
)

type DescribeStreamProcessorHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeStreamProcessorXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeStreamProcessorRequest struct {
	Headers DescribeStreamProcessorHeaders
	Request shared.DescribeStreamProcessorRequest `request:"mediaType=application/json"`
}

type DescribeStreamProcessorResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	DescribeStreamProcessorResponse        *shared.DescribeStreamProcessorResponse
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
