package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteServiceTemplateXAmzTargetEnum string

const (
	DeleteServiceTemplateXAmzTargetEnumAwsProton20200720DeleteServiceTemplate DeleteServiceTemplateXAmzTargetEnum = "AwsProton20200720.DeleteServiceTemplate"
)

type DeleteServiceTemplateHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteServiceTemplateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteServiceTemplateRequest struct {
	Headers DeleteServiceTemplateHeaders
	Request shared.DeleteServiceTemplateInput `request:"mediaType=application/json"`
}

type DeleteServiceTemplateResponse struct {
	AccessDeniedException       *interface{}
	ConflictException           *interface{}
	ContentType                 string
	DeleteServiceTemplateOutput *shared.DeleteServiceTemplateOutput
	InternalServerException     *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	ValidationException         *interface{}
}
