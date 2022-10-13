package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCollectionXAmzTargetEnum string

const (
	CreateCollectionXAmzTargetEnumRekognitionServiceCreateCollection CreateCollectionXAmzTargetEnum = "RekognitionService.CreateCollection"
)

type CreateCollectionHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCollectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateCollectionRequest struct {
	Headers CreateCollectionHeaders
	Request shared.CreateCollectionRequest `request:"mediaType=application/json"`
}

type CreateCollectionResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	CreateCollectionResponse               *shared.CreateCollectionResponse
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceAlreadyExistsException         *interface{}
	ServiceQuotaExceededException          *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
