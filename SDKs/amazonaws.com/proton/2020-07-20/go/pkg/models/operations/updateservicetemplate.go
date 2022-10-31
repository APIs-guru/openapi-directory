package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServiceTemplateXAmzTargetEnum string

const (
	UpdateServiceTemplateXAmzTargetEnumAwsProton20200720UpdateServiceTemplate UpdateServiceTemplateXAmzTargetEnum = "AwsProton20200720.UpdateServiceTemplate"
)

type UpdateServiceTemplateHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateServiceTemplateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
