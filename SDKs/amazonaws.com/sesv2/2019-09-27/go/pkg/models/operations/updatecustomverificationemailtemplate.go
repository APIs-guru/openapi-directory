package operations

type UpdateCustomVerificationEmailTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=TemplateName"`
}

type UpdateCustomVerificationEmailTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateCustomVerificationEmailTemplateRequestBody struct {
	FailureRedirectionURL string `json:"FailureRedirectionURL"`
	FromEmailAddress      string `json:"FromEmailAddress"`
	SuccessRedirectionURL string `json:"SuccessRedirectionURL"`
	TemplateContent       string `json:"TemplateContent"`
	TemplateSubject       string `json:"TemplateSubject"`
}

type UpdateCustomVerificationEmailTemplateRequest struct {
	PathParams UpdateCustomVerificationEmailTemplatePathParams
	Headers    UpdateCustomVerificationEmailTemplateHeaders
	Request    UpdateCustomVerificationEmailTemplateRequestBody `request:"mediaType=application/json"`
}

type UpdateCustomVerificationEmailTemplateResponse struct {
	BadRequestException                           *interface{}
	ContentType                                   string
	NotFoundException                             *interface{}
	StatusCode                                    int64
	TooManyRequestsException                      *interface{}
	UpdateCustomVerificationEmailTemplateResponse map[string]interface{}
}
