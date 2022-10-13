package operations

import (
	"openapi/pkg/models/shared"
)

type StopProjectVersionXAmzTargetEnum string

const (
	StopProjectVersionXAmzTargetEnumRekognitionServiceStopProjectVersion StopProjectVersionXAmzTargetEnum = "RekognitionService.StopProjectVersion"
)

type StopProjectVersionHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopProjectVersionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopProjectVersionRequest struct {
	Headers StopProjectVersionHeaders
	Request shared.StopProjectVersionRequest `request:"mediaType=application/json"`
}

type StopProjectVersionResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceInUseException                 *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	StopProjectVersionResponse             *shared.StopProjectVersionResponse
	ThrottlingException                    *interface{}
}
