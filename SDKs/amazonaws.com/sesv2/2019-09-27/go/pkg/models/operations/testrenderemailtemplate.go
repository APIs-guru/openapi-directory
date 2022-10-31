package operations

import (
	"openapi/pkg/models/shared"
)

type TestRenderEmailTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=TemplateName"`
}

type TestRenderEmailTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type TestRenderEmailTemplateRequestBody struct {
	TemplateData string `json:"TemplateData"`
}

type TestRenderEmailTemplateRequest struct {
	PathParams TestRenderEmailTemplatePathParams
	Headers    TestRenderEmailTemplateHeaders
	Request    TestRenderEmailTemplateRequestBody `request:"mediaType=application/json"`
}

type TestRenderEmailTemplateResponse struct {
	BadRequestException             *interface{}
	ContentType                     string
	NotFoundException               *interface{}
	StatusCode                      int64
	TestRenderEmailTemplateResponse *shared.TestRenderEmailTemplateResponse
	TooManyRequestsException        *interface{}
}
