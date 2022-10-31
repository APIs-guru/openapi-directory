package operations

type PutConfigurationSetReputationOptionsPathParams struct {
	ConfigurationSetName string `pathParam:"style=simple,explode=false,name=ConfigurationSetName"`
}

type PutConfigurationSetReputationOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutConfigurationSetReputationOptionsRequestBody struct {
	ReputationMetricsEnabled *bool `json:"ReputationMetricsEnabled,omitempty"`
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
