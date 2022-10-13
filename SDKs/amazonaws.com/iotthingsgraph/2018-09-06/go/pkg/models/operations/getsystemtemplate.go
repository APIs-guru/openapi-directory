package operations

import (
	"openapi/pkg/models/shared"
)

type GetSystemTemplateXAmzTargetEnum string

const (
	GetSystemTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceGetSystemTemplate GetSystemTemplateXAmzTargetEnum = "IotThingsGraphFrontEndService.GetSystemTemplate"
)

type GetSystemTemplateHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSystemTemplateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetSystemTemplateRequest struct {
	Headers GetSystemTemplateHeaders
	Request shared.GetSystemTemplateRequest `request:"mediaType=application/json"`
}

type GetSystemTemplateResponse struct {
	ContentType               string
	GetSystemTemplateResponse *shared.GetSystemTemplateResponse
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
