package operations

type DeleteResponsePlanHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteResponsePlanRequestBody struct {
	Arn string `json:"arn"`
}

type DeleteResponsePlanRequest struct {
	Headers DeleteResponsePlanHeaders
	Request DeleteResponsePlanRequestBody `request:"mediaType=application/json"`
}

type DeleteResponsePlanResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	DeleteResponsePlanOutput map[string]interface{}
	InternalServerException  *interface{}
	StatusCode               int64
	ThrottlingException      *interface{}
	ValidationException      *interface{}
}
