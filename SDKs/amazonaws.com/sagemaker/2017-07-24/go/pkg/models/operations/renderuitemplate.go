package operations

import (
	"openapi/pkg/models/shared"
)

type RenderUITemplateXAmzTargetEnum string

const (
	RenderUITemplateXAmzTargetEnumSageMakerRenderUITemplate RenderUITemplateXAmzTargetEnum = "SageMaker.RenderUiTemplate"
)

type RenderUITemplateHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RenderUITemplateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RenderUITemplateRequest struct {
	Headers RenderUITemplateHeaders
	Request shared.RenderUITemplateRequest `request:"mediaType=application/json"`
}

type RenderUITemplateResponse struct {
	ContentType              string
	RenderUITemplateResponse *shared.RenderUITemplateResponse
	ResourceNotFound         *interface{}
	StatusCode               int64
}
