package operations

type CreateCustomVerificationEmailTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateCustomVerificationEmailTemplateRequestBody struct {
	FailureRedirectionURL string `json:"FailureRedirectionURL"`
	FromEmailAddress      string `json:"FromEmailAddress"`
	SuccessRedirectionURL string `json:"SuccessRedirectionURL"`
	TemplateContent       string `json:"TemplateContent"`
	TemplateName          string `json:"TemplateName"`
	TemplateSubject       string `json:"TemplateSubject"`
}

type CreateCustomVerificationEmailTemplateRequest struct {
	Headers CreateCustomVerificationEmailTemplateHeaders
	Request CreateCustomVerificationEmailTemplateRequestBody `request:"mediaType=application/json"`
}

type CreateCustomVerificationEmailTemplateResponse struct {
	AlreadyExistsException                        *interface{}
	BadRequestException                           *interface{}
	ContentType                                   string
	CreateCustomVerificationEmailTemplateResponse map[string]interface{}
	LimitExceededException                        *interface{}
	NotFoundException                             *interface{}
	StatusCode                                    int64
	TooManyRequestsException                      *interface{}
}
