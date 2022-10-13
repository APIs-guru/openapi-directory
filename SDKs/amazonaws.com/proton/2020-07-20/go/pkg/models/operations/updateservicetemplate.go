package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServiceTemplateXAmzTargetEnum string

const (
	UpdateServiceTemplateXAmzTargetEnumAwsProton20200720UpdateServiceTemplate UpdateServiceTemplateXAmzTargetEnum = "AwsProton20200720.UpdateServiceTemplate"
)

type UpdateServiceTemplateHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateServiceTemplateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateServiceTemplateRequest struct {
	Headers UpdateServiceTemplateHeaders
	Request shared.UpdateServiceTemplateInput `request:"mediaType=application/json"`
}

type UpdateServiceTemplateResponse struct {
	AccessDeniedException       *interface{}
	ConflictException           *interface{}
	ContentType                 string
	InternalServerException     *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UpdateServiceTemplateOutput *shared.UpdateServiceTemplateOutput
	ValidationException         *interface{}
}
