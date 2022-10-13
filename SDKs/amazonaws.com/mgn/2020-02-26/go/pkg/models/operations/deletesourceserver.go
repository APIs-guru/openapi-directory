package operations

type DeleteSourceServerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteSourceServerRequestBody struct {
	SourceServerID string `json:"sourceServerID"`
}

type DeleteSourceServerRequest struct {
	Headers DeleteSourceServerHeaders
	Request DeleteSourceServerRequestBody `request:"mediaType=application/json"`
}

type DeleteSourceServerResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	DeleteSourceServerResponse    map[string]interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	UninitializedAccountException *interface{}
}
