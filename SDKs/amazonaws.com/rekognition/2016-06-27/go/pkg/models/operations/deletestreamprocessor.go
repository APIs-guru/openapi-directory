package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteStreamProcessorXAmzTargetEnum string

const (
	DeleteStreamProcessorXAmzTargetEnumRekognitionServiceDeleteStreamProcessor DeleteStreamProcessorXAmzTargetEnum = "RekognitionService.DeleteStreamProcessor"
)

type DeleteStreamProcessorHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteStreamProcessorXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteStreamProcessorRequest struct {
	Headers DeleteStreamProcessorHeaders
	Request shared.DeleteStreamProcessorRequest `request:"mediaType=application/json"`
}

type DeleteStreamProcessorResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	DeleteStreamProcessorResponse          map[string]interface{}
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceInUseException                 *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
