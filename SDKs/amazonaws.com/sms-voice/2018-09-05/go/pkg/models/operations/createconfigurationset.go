package operations

type CreateConfigurationSetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateConfigurationSetRequestBody struct {
	ConfigurationSetName *string `json:"ConfigurationSetName,omitempty"`
}

type CreateConfigurationSetRequest struct {
	Headers CreateConfigurationSetHeaders
	Request CreateConfigurationSetRequestBody `request:"mediaType=application/json"`
}

type CreateConfigurationSetResponse struct {
	AlreadyExistsException         *interface{}
	BadRequestException            *interface{}
	ContentType                    string
	CreateConfigurationSetResponse map[string]interface{}
	InternalServiceErrorException  *interface{}
	LimitExceededException         *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
