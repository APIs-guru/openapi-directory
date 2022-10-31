package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEnvironmentTemplateXAmzTargetEnum string

const (
	DeleteEnvironmentTemplateXAmzTargetEnumAwsProton20200720DeleteEnvironmentTemplate DeleteEnvironmentTemplateXAmzTargetEnum = "AwsProton20200720.DeleteEnvironmentTemplate"
)

type DeleteEnvironmentTemplateHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteEnvironmentTemplateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
