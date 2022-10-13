package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCollectionXAmzTargetEnum string

const (
	DeleteCollectionXAmzTargetEnumRekognitionServiceDeleteCollection DeleteCollectionXAmzTargetEnum = "RekognitionService.DeleteCollection"
)

type DeleteCollectionHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteCollectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteCollectionRequest struct {
	Headers DeleteCollectionHeaders
	Request shared.DeleteCollectionRequest `request:"mediaType=application/json"`
}

type DeleteCollectionResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	DeleteCollectionResponse               *shared.DeleteCollectionResponse
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
