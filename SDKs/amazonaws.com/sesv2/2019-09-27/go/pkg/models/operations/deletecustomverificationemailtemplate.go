package operations

type DeleteCustomVerificationEmailTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=TemplateName"`
}

type DeleteCustomVerificationEmailTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteCustomVerificationEmailTemplateRequest struct {
	PathParams DeleteCustomVerificationEmailTemplatePathParams
	Headers    DeleteCustomVerificationEmailTemplateHeaders
}

type DeleteCustomVerificationEmailTemplateResponse struct {
	BadRequestException                           *interface{}
	ContentType                                   string
	DeleteCustomVerificationEmailTemplateResponse map[string]interface{}
	NotFoundException                             *interface{}
	StatusCode                                    int64
	TooManyRequestsException                      *interface{}
}
