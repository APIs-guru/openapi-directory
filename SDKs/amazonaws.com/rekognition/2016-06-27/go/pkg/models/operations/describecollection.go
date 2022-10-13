package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCollectionXAmzTargetEnum string

const (
	DescribeCollectionXAmzTargetEnumRekognitionServiceDescribeCollection DescribeCollectionXAmzTargetEnum = "RekognitionService.DescribeCollection"
)

type DescribeCollectionHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeCollectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeCollectionRequest struct {
	Headers DescribeCollectionHeaders
	Request shared.DescribeCollectionRequest `request:"mediaType=application/json"`
}

type DescribeCollectionResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	DescribeCollectionResponse             *shared.DescribeCollectionResponse
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
