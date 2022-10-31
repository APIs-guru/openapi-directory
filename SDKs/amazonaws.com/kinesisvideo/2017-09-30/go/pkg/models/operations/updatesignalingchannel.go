package operations

type UpdateSignalingChannelHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
