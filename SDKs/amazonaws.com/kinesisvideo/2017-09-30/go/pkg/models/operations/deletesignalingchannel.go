package operations

type DeleteSignalingChannelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteSignalingChannelRequestBody struct {
	ChannelArn     string  `json:"ChannelARN"`
	CurrentVersion *string `json:"CurrentVersion,omitempty"`
}

type DeleteSignalingChannelRequest struct {
	Headers DeleteSignalingChannelHeaders
	Request DeleteSignalingChannelRequestBody `request:"mediaType=application/json"`
}

type DeleteSignalingChannelResponse struct {
	AccessDeniedException        *interface{}
	ClientLimitExceededException *interface{}
	ContentType                  string
	DeleteSignalingChannelOutput map[string]interface{}
	InvalidArgumentException     *interface{}
	ResourceInUseException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	VersionMismatchException     *interface{}
}
