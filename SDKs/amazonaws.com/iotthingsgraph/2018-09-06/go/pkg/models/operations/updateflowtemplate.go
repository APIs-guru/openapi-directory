package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFlowTemplateXAmzTargetEnum string

const (
	UpdateFlowTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceUpdateFlowTemplate UpdateFlowTemplateXAmzTargetEnum = "IotThingsGraphFrontEndService.UpdateFlowTemplate"
)

type UpdateFlowTemplateHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateFlowTemplateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateFlowTemplateRequest struct {
	Headers UpdateFlowTemplateHeaders
	Request shared.UpdateFlowTemplateRequest `request:"mediaType=application/json"`
}

type UpdateFlowTemplateResponse struct {
	ContentType                string
	InternalFailureException   *interface{}
	InvalidRequestException    *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	UpdateFlowTemplateResponse *shared.UpdateFlowTemplateResponse
}
