package operations

import (
	"openapi/pkg/models/shared"
)

type TestRenderEmailTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=TemplateName"`
}

type TestRenderEmailTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
