package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSystemTemplateXAmzTargetEnum string

const (
	UpdateSystemTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceUpdateSystemTemplate UpdateSystemTemplateXAmzTargetEnum = "IotThingsGraphFrontEndService.UpdateSystemTemplate"
)

type UpdateSystemTemplateHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateSystemTemplateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateSystemTemplateRequest struct {
	Headers UpdateSystemTemplateHeaders
	Request shared.UpdateSystemTemplateRequest `request:"mediaType=application/json"`
}

type UpdateSystemTemplateResponse struct {
	ContentType                  string
	InternalFailureException     *interface{}
	InvalidRequestException      *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
	UpdateSystemTemplateResponse *shared.UpdateSystemTemplateResponse
}
