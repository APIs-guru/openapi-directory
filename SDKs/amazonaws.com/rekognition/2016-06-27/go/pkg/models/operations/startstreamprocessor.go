package operations

import (
	"openapi/pkg/models/shared"
)

type StartStreamProcessorXAmzTargetEnum string

const (
	StartStreamProcessorXAmzTargetEnumRekognitionServiceStartStreamProcessor StartStreamProcessorXAmzTargetEnum = "RekognitionService.StartStreamProcessor"
)

type StartStreamProcessorHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartStreamProcessorXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartStreamProcessorRequest struct {
	Headers StartStreamProcessorHeaders
	Request shared.StartStreamProcessorRequest `request:"mediaType=application/json"`
}

type StartStreamProcessorResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceInUseException                 *interface{}
	ResourceNotFoundException              *interface{}
	StartStreamProcessorResponse           map[string]interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
