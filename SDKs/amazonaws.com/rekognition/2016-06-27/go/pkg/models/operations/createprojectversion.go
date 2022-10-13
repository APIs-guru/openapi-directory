package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProjectVersionXAmzTargetEnum string

const (
	CreateProjectVersionXAmzTargetEnumRekognitionServiceCreateProjectVersion CreateProjectVersionXAmzTargetEnum = "RekognitionService.CreateProjectVersion"
)

type CreateProjectVersionHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateProjectVersionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateProjectVersionRequest struct {
	Headers CreateProjectVersionHeaders
	Request shared.CreateProjectVersionRequest `request:"mediaType=application/json"`
}

type CreateProjectVersionResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	CreateProjectVersionResponse           *shared.CreateProjectVersionResponse
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	LimitExceededException                 *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceInUseException                 *interface{}
	ResourceNotFoundException              *interface{}
	ServiceQuotaExceededException          *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
