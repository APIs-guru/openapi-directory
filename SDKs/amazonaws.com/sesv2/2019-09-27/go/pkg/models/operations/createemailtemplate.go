package operations

type CreateEmailTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateEmailTemplateRequestBodyTemplateContent struct {
	HTML    *string `json:"Html"`
	Subject *string `json:"Subject"`
	Text    *string `json:"Text"`
}

type CreateEmailTemplateRequestBody struct {
	TemplateContent CreateEmailTemplateRequestBodyTemplateContent `json:"TemplateContent"`
	TemplateName    string                                        `json:"TemplateName"`
}

type CreateEmailTemplateRequest struct {
	Headers CreateEmailTemplateHeaders
	Request CreateEmailTemplateRequestBody `request:"mediaType=application/json"`
}

type CreateEmailTemplateResponse struct {
	AlreadyExistsException      *interface{}
	BadRequestException         *interface{}
	ContentType                 string
	CreateEmailTemplateResponse map[string]interface{}
	LimitExceededException      *interface{}
	StatusCode                  int64
	TooManyRequestsException    *interface{}
}
