package operations

type DeleteEmailTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=TemplateName"`
}

type DeleteEmailTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteEmailTemplateRequest struct {
	PathParams DeleteEmailTemplatePathParams
	Headers    DeleteEmailTemplateHeaders
}

type DeleteEmailTemplateResponse struct {
	BadRequestException         *interface{}
	ContentType                 string
	DeleteEmailTemplateResponse map[string]interface{}
	NotFoundException           *interface{}
	StatusCode                  int64
	TooManyRequestsException    *interface{}
}
