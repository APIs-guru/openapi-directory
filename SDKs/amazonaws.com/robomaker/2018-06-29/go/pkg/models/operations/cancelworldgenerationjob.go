package operations

type CancelWorldGenerationJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CancelWorldGenerationJobRequestBody struct {
	Job string `json:"job"`
}

type CancelWorldGenerationJobRequest struct {
	Headers CancelWorldGenerationJobHeaders
	Request CancelWorldGenerationJobRequestBody `request:"mediaType=application/json"`
}

type CancelWorldGenerationJobResponse struct {
	CancelWorldGenerationJobResponse map[string]interface{}
	ContentType                      string
	InternalServerException          *interface{}
	InvalidParameterException        *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
}
