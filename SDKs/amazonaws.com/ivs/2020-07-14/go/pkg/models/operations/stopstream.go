package operations

type StopStreamHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StopStreamRequestBody struct {
	ChannelArn string `json:"channelArn"`
}

type StopStreamRequest struct {
	Headers StopStreamHeaders
	Request StopStreamRequestBody `request:"mediaType=application/json"`
}

type StopStreamResponse struct {
	AccessDeniedException     *interface{}
	ChannelNotBroadcasting    *interface{}
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	StopStreamResponse        map[string]interface{}
	StreamUnavailable         *interface{}
	ValidationException       *interface{}
}
