package operations

type DeleteConfigurationSetPathParams struct {
	ConfigurationSetName string `pathParam:"style=simple,explode=false,name=ConfigurationSetName"`
}

type DeleteConfigurationSetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteConfigurationSetRequest struct {
	PathParams DeleteConfigurationSetPathParams
	Headers    DeleteConfigurationSetHeaders
}

type DeleteConfigurationSetResponse struct {
	BadRequestException             *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	DeleteConfigurationSetResponse  map[string]interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
}
