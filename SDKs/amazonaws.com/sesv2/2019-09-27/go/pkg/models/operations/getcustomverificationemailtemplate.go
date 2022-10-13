package operations

import (
	"openapi/pkg/models/shared"
)

type GetCustomVerificationEmailTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=TemplateName"`
}

type GetCustomVerificationEmailTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCustomVerificationEmailTemplateRequest struct {
	PathParams GetCustomVerificationEmailTemplatePathParams
	Headers    GetCustomVerificationEmailTemplateHeaders
}

type GetCustomVerificationEmailTemplateResponse struct {
	BadRequestException                        *interface{}
	ContentType                                string
	GetCustomVerificationEmailTemplateResponse *shared.GetCustomVerificationEmailTemplateResponse
	NotFoundException                          *interface{}
	StatusCode                                 int64
	TooManyRequestsException                   *interface{}
}
