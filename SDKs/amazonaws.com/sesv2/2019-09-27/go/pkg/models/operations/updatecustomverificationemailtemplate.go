package operations

type UpdateCustomVerificationEmailTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=TemplateName"`
}

type UpdateCustomVerificationEmailTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
