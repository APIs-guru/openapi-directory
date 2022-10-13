package operations

import (
	"openapi/pkg/models/shared"
)

type GetFlowTemplateXAmzTargetEnum string

const (
	GetFlowTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceGetFlowTemplate GetFlowTemplateXAmzTargetEnum = "IotThingsGraphFrontEndService.GetFlowTemplate"
)

type GetFlowTemplateHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetFlowTemplateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetFlowTemplateRequest struct {
	Headers GetFlowTemplateHeaders
	Request shared.GetFlowTemplateRequest `request:"mediaType=application/json"`
}

type GetFlowTemplateResponse struct {
	ContentType               string
	GetFlowTemplateResponse   *shared.GetFlowTemplateResponse
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
