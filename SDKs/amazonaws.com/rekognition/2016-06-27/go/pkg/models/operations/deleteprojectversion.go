package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProjectVersionXAmzTargetEnum string

const (
	DeleteProjectVersionXAmzTargetEnumRekognitionServiceDeleteProjectVersion DeleteProjectVersionXAmzTargetEnum = "RekognitionService.DeleteProjectVersion"
)

type DeleteProjectVersionHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteProjectVersionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteProjectVersionRequest struct {
	Headers DeleteProjectVersionHeaders
	Request shared.DeleteProjectVersionRequest `request:"mediaType=application/json"`
}

type DeleteProjectVersionResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	DeleteProjectVersionResponse           *shared.DeleteProjectVersionResponse
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceInUseException                 *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
