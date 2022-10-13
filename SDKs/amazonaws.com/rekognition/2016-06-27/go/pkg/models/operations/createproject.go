package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProjectXAmzTargetEnum string

const (
	CreateProjectXAmzTargetEnumRekognitionServiceCreateProject CreateProjectXAmzTargetEnum = "RekognitionService.CreateProject"
)

type CreateProjectHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateProjectXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateProjectRequest struct {
	Headers CreateProjectHeaders
	Request shared.CreateProjectRequest `request:"mediaType=application/json"`
}

type CreateProjectResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	CreateProjectResponse                  *shared.CreateProjectResponse
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	LimitExceededException                 *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceInUseException                 *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
