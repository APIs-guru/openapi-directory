package operations

import (
	"openapi/pkg/models/shared"
)

type GetEnvironmentTemplateVersionXAmzTargetEnum string

const (
	GetEnvironmentTemplateVersionXAmzTargetEnumAwsProton20200720GetEnvironmentTemplateVersion GetEnvironmentTemplateVersionXAmzTargetEnum = "AwsProton20200720.GetEnvironmentTemplateVersion"
)

type GetEnvironmentTemplateVersionHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetEnvironmentTemplateVersionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetEnvironmentTemplateVersionRequest struct {
	Headers GetEnvironmentTemplateVersionHeaders
	Request shared.GetEnvironmentTemplateVersionInput `request:"mediaType=application/json"`
}

type GetEnvironmentTemplateVersionResponse struct {
	AccessDeniedException               *interface{}
	ContentType                         string
	GetEnvironmentTemplateVersionOutput *shared.GetEnvironmentTemplateVersionOutput
	InternalServerException             *interface{}
	ResourceNotFoundException           *interface{}
	StatusCode                          int64
	ThrottlingException                 *interface{}
	ValidationException                 *interface{}
}
