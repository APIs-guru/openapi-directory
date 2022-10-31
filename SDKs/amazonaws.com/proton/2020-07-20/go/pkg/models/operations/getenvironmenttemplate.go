package operations

import (
	"openapi/pkg/models/shared"
)

type GetEnvironmentTemplateXAmzTargetEnum string

const (
	GetEnvironmentTemplateXAmzTargetEnumAwsProton20200720GetEnvironmentTemplate GetEnvironmentTemplateXAmzTargetEnum = "AwsProton20200720.GetEnvironmentTemplate"
)

type GetEnvironmentTemplateHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetEnvironmentTemplateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetEnvironmentTemplateRequest struct {
	Headers GetEnvironmentTemplateHeaders
	Request shared.GetEnvironmentTemplateInput `request:"mediaType=application/json"`
}

type GetEnvironmentTemplateResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	GetEnvironmentTemplateOutput *shared.GetEnvironmentTemplateOutput
	InternalServerException      *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
	ValidationException          *interface{}
}
