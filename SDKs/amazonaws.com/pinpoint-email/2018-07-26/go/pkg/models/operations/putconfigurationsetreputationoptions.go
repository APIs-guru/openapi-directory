package operations

type PutConfigurationSetReputationOptionsPathParams struct {
	ConfigurationSetName string `pathParam:"style=simple,explode=false,name=ConfigurationSetName"`
}

type PutConfigurationSetReputationOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutConfigurationSetReputationOptionsRequestBody struct {
	ReputationMetricsEnabled *bool `json:"ReputationMetricsEnabled"`
}

type PutConfigurationSetReputationOptionsRequest struct {
	PathParams PutConfigurationSetReputationOptionsPathParams
	Headers    PutConfigurationSetReputationOptionsHeaders
	Request    PutConfigurationSetReputationOptionsRequestBody `request:"mediaType=application/json"`
}

type PutConfigurationSetReputationOptionsResponse struct {
	BadRequestException                          *interface{}
	ContentType                                  string
	NotFoundException                            *interface{}
	PutConfigurationSetReputationOptionsResponse map[string]interface{}
	StatusCode                                   int64
	TooManyRequestsException                     *interface{}
}
