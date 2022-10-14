package operations

type UpdateSignalingChannelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateSignalingChannelRequestBodySingleMasterConfiguration struct {
	MessageTTLSeconds *int64 `json:"MessageTtlSeconds,omitempty"`
}

type UpdateSignalingChannelRequestBody struct {
	ChannelArn                string                                                      `json:"ChannelARN"`
	CurrentVersion            string                                                      `json:"CurrentVersion"`
	SingleMasterConfiguration *UpdateSignalingChannelRequestBodySingleMasterConfiguration `json:"SingleMasterConfiguration,omitempty"`
}

type UpdateSignalingChannelRequest struct {
	Headers UpdateSignalingChannelHeaders
	Request UpdateSignalingChannelRequestBody `request:"mediaType=application/json"`
}

type UpdateSignalingChannelResponse struct {
	AccessDeniedException        *interface{}
	ClientLimitExceededException *interface{}
	ContentType                  string
	InvalidArgumentException     *interface{}
	ResourceInUseException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	UpdateSignalingChannelOutput map[string]interface{}
	VersionMismatchException     *interface{}
}
