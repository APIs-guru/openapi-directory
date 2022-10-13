package operations

type StopHumanLoopHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StopHumanLoopRequestBody struct {
	HumanLoopName string `json:"HumanLoopName"`
}

type StopHumanLoopRequest struct {
	Headers StopHumanLoopHeaders
	Request StopHumanLoopRequestBody `request:"mediaType=application/json"`
}

type StopHumanLoopResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	StopHumanLoopResponse     map[string]interface{}
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
