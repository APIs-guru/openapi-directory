package operations

type DeleteConfigurationSetEventDestinationPathParams struct {
	ConfigurationSetName string `pathParam:"style=simple,explode=false,name=ConfigurationSetName"`
	EventDestinationName string `pathParam:"style=simple,explode=false,name=EventDestinationName"`
}

type DeleteConfigurationSetEventDestinationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteConfigurationSetEventDestinationRequest struct {
	PathParams DeleteConfigurationSetEventDestinationPathParams
	Headers    DeleteConfigurationSetEventDestinationHeaders
}

type DeleteConfigurationSetEventDestinationResponse struct {
	BadRequestException                            *interface{}
	ContentType                                    string
	DeleteConfigurationSetEventDestinationResponse map[string]interface{}
	InternalServiceErrorException                  *interface{}
	NotFoundException                              *interface{}
	StatusCode                                     int64
	TooManyRequestsException                       *interface{}
}
