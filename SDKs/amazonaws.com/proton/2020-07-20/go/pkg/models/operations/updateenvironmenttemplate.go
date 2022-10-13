package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEnvironmentTemplateXAmzTargetEnum string

const (
	UpdateEnvironmentTemplateXAmzTargetEnumAwsProton20200720UpdateEnvironmentTemplate UpdateEnvironmentTemplateXAmzTargetEnum = "AwsProton20200720.UpdateEnvironmentTemplate"
)

type UpdateEnvironmentTemplateHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateEnvironmentTemplateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateEnvironmentTemplateRequest struct {
	Headers UpdateEnvironmentTemplateHeaders
	Request shared.UpdateEnvironmentTemplateInput `request:"mediaType=application/json"`
}

type UpdateEnvironmentTemplateResponse struct {
	AccessDeniedException           *interface{}
	ConflictException               *interface{}
	ContentType                     string
	InternalServerException         *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
	UpdateEnvironmentTemplateOutput *shared.UpdateEnvironmentTemplateOutput
	ValidationException             *interface{}
}
