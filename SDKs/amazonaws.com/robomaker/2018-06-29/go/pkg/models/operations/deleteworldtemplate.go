package operations

type DeleteWorldTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteWorldTemplateRequestBody struct {
	Template string `json:"template"`
}

type DeleteWorldTemplateRequest struct {
	Headers DeleteWorldTemplateHeaders
	Request DeleteWorldTemplateRequestBody `request:"mediaType=application/json"`
}

type DeleteWorldTemplateResponse struct {
	ContentType                 string
	DeleteWorldTemplateResponse map[string]interface{}
	InternalServerException     *interface{}
	InvalidParameterException   *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
