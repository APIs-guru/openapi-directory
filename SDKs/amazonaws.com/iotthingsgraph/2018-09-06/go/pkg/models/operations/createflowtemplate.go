package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFlowTemplateXAmzTargetEnum string

const (
	CreateFlowTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceCreateFlowTemplate CreateFlowTemplateXAmzTargetEnum = "IotThingsGraphFrontEndService.CreateFlowTemplate"
)

type CreateFlowTemplateHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateFlowTemplateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateFlowTemplateRequest struct {
	Headers CreateFlowTemplateHeaders
	Request shared.CreateFlowTemplateRequest `request:"mediaType=application/json"`
}

type CreateFlowTemplateResponse struct {
	ContentType                    string
	CreateFlowTemplateResponse     *shared.CreateFlowTemplateResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
