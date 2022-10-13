package operations

type DeleteJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteJobRequestBody struct {
	JobID string `json:"jobID"`
}

type DeleteJobRequest struct {
	Headers DeleteJobHeaders
	Request DeleteJobRequestBody `request:"mediaType=application/json"`
}

type DeleteJobResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	DeleteJobResponse             map[string]interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	UninitializedAccountException *interface{}
}
