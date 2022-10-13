package operations

import (
	"openapi/pkg/models/shared"
)

type CreateServiceTemplateVersionXAmzTargetEnum string

const (
	CreateServiceTemplateVersionXAmzTargetEnumAwsProton20200720CreateServiceTemplateVersion CreateServiceTemplateVersionXAmzTargetEnum = "AwsProton20200720.CreateServiceTemplateVersion"
)

type CreateServiceTemplateVersionHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateServiceTemplateVersionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateServiceTemplateVersionRequest struct {
	Headers CreateServiceTemplateVersionHeaders
	Request shared.CreateServiceTemplateVersionInput `request:"mediaType=application/json"`
}

type CreateServiceTemplateVersionResponse struct {
	AccessDeniedException              *interface{}
	ConflictException                  *interface{}
	ContentType                        string
	CreateServiceTemplateVersionOutput *shared.CreateServiceTemplateVersionOutput
	InternalServerException            *interface{}
	ResourceNotFoundException          *interface{}
	ServiceQuotaExceededException      *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
	ValidationException                *interface{}
}
