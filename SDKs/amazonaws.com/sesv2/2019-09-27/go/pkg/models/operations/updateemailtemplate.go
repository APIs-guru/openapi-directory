package operations

type UpdateEmailTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=TemplateName"`
}

type UpdateEmailTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateEmailTemplateRequestBodyTemplateContent struct {
	HTML    *string `json:"Html,omitempty"`
	Subject *string `json:"Subject,omitempty"`
	Text    *string `json:"Text,omitempty"`
}

type UpdateEmailTemplateRequestBody struct {
	TemplateContent UpdateEmailTemplateRequestBodyTemplateContent `json:"TemplateContent"`
}

type UpdateEmailTemplateRequest struct {
	PathParams UpdateEmailTemplatePathParams
	Headers    UpdateEmailTemplateHeaders
	Request    UpdateEmailTemplateRequestBody `request:"mediaType=application/json"`
}

type UpdateEmailTemplateResponse struct {
	BadRequestException         *interface{}
	ContentType                 string
	NotFoundException           *interface{}
	StatusCode                  int64
	TooManyRequestsException    *interface{}
	UpdateEmailTemplateResponse map[string]interface{}
}
