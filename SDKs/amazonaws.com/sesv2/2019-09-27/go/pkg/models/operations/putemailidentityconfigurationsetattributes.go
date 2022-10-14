package operations

type PutEmailIdentityConfigurationSetAttributesPathParams struct {
	EmailIdentity string `pathParam:"style=simple,explode=false,name=EmailIdentity"`
}

type PutEmailIdentityConfigurationSetAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutEmailIdentityConfigurationSetAttributesRequestBody struct {
	ConfigurationSetName *string `json:"ConfigurationSetName,omitempty"`
}

type PutEmailIdentityConfigurationSetAttributesRequest struct {
	PathParams PutEmailIdentityConfigurationSetAttributesPathParams
	Headers    PutEmailIdentityConfigurationSetAttributesHeaders
	Request    PutEmailIdentityConfigurationSetAttributesRequestBody `request:"mediaType=application/json"`
}

type PutEmailIdentityConfigurationSetAttributesResponse struct {
	BadRequestException                                *interface{}
	ContentType                                        string
	NotFoundException                                  *interface{}
	PutEmailIdentityConfigurationSetAttributesResponse map[string]interface{}
	StatusCode                                         int64
	TooManyRequestsException                           *interface{}
}
