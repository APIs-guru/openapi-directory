package operations

type PutConfigurationSetSendingOptionsPathParams struct {
	ConfigurationSetName string `pathParam:"style=simple,explode=false,name=ConfigurationSetName"`
}

type PutConfigurationSetSendingOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutConfigurationSetSendingOptionsRequestBody struct {
	SendingEnabled *bool `json:"SendingEnabled,omitempty"`
}

type PutConfigurationSetSendingOptionsRequest struct {
	PathParams PutConfigurationSetSendingOptionsPathParams
	Headers    PutConfigurationSetSendingOptionsHeaders
	Request    PutConfigurationSetSendingOptionsRequestBody `request:"mediaType=application/json"`
}

type PutConfigurationSetSendingOptionsResponse struct {
	BadRequestException                       *interface{}
	ContentType                               string
	NotFoundException                         *interface{}
	PutConfigurationSetSendingOptionsResponse map[string]interface{}
	StatusCode                                int64
	TooManyRequestsException                  *interface{}
}
