package operations

import (
	"openapi/pkg/models/shared"
)

type CreateServiceTemplateXAmzTargetEnum string

const (
	CreateServiceTemplateXAmzTargetEnumAwsProton20200720CreateServiceTemplate CreateServiceTemplateXAmzTargetEnum = "AwsProton20200720.CreateServiceTemplate"
)

type CreateServiceTemplateHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateServiceTemplateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateServiceTemplateRequest struct {
	Headers CreateServiceTemplateHeaders
	Request shared.CreateServiceTemplateInput `request:"mediaType=application/json"`
}

type CreateServiceTemplateResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateServiceTemplateOutput   *shared.CreateServiceTemplateOutput
	InternalServerException       *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
