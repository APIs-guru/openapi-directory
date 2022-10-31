package operations

import (
	"openapi/pkg/models/shared"
)

type GetServiceTemplateXAmzTargetEnum string

const (
	GetServiceTemplateXAmzTargetEnumAwsProton20200720GetServiceTemplate GetServiceTemplateXAmzTargetEnum = "AwsProton20200720.GetServiceTemplate"
)

type GetServiceTemplateHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetServiceTemplateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetServiceTemplateRequest struct {
	Headers GetServiceTemplateHeaders
	Request shared.GetServiceTemplateInput `request:"mediaType=application/json"`
}

type GetServiceTemplateResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetServiceTemplateOutput  *shared.GetServiceTemplateOutput
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
