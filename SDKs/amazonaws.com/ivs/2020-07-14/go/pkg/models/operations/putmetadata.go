package operations

type PutMetadataHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutMetadataRequestBody struct {
	ChannelArn string `json:"channelArn"`
	Metadata   string `json:"metadata"`
}

type PutMetadataRequest struct {
	Headers PutMetadataHeaders
	Request PutMetadataRequestBody `request:"mediaType=application/json"`
}

type PutMetadataResponse struct {
	AccessDeniedException     *interface{}
	ChannelNotBroadcasting    *interface{}
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
