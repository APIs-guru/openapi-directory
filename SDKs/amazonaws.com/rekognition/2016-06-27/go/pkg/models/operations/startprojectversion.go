package operations

import (
	"openapi/pkg/models/shared"
)

type StartProjectVersionXAmzTargetEnum string

const (
	StartProjectVersionXAmzTargetEnumRekognitionServiceStartProjectVersion StartProjectVersionXAmzTargetEnum = "RekognitionService.StartProjectVersion"
)

type StartProjectVersionHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartProjectVersionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartProjectVersionRequest struct {
	Headers StartProjectVersionHeaders
	Request shared.StartProjectVersionRequest `request:"mediaType=application/json"`
}

type StartProjectVersionResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	LimitExceededException                 *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceInUseException                 *interface{}
	ResourceNotFoundException              *interface{}
	StartProjectVersionResponse            *shared.StartProjectVersionResponse
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
