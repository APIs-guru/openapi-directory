package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEnvironmentTemplateXAmzTargetEnum string

const (
	DeleteEnvironmentTemplateXAmzTargetEnumAwsProton20200720DeleteEnvironmentTemplate DeleteEnvironmentTemplateXAmzTargetEnum = "AwsProton20200720.DeleteEnvironmentTemplate"
)

type DeleteEnvironmentTemplateHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteEnvironmentTemplateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteEnvironmentTemplateRequest struct {
	Headers DeleteEnvironmentTemplateHeaders
	Request shared.DeleteEnvironmentTemplateInput `request:"mediaType=application/json"`
}

type DeleteEnvironmentTemplateResponse struct {
	AccessDeniedException           *interface{}
	ConflictException               *interface{}
	ContentType                     string
	DeleteEnvironmentTemplateOutput *shared.DeleteEnvironmentTemplateOutput
	InternalServerException         *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
	ValidationException             *interface{}
}
