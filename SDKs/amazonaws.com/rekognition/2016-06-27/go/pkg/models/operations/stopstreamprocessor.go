package operations

import (
	"openapi/pkg/models/shared"
)

type StopStreamProcessorXAmzTargetEnum string

const (
	StopStreamProcessorXAmzTargetEnumRekognitionServiceStopStreamProcessor StopStreamProcessorXAmzTargetEnum = "RekognitionService.StopStreamProcessor"
)

type StopStreamProcessorHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopStreamProcessorXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopStreamProcessorRequest struct {
	Headers StopStreamProcessorHeaders
	Request shared.StopStreamProcessorRequest `request:"mediaType=application/json"`
}

type StopStreamProcessorResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceInUseException                 *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	StopStreamProcessorResponse            map[string]interface{}
	ThrottlingException                    *interface{}
}
