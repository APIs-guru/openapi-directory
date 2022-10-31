package operations

type PutConfigurationSetDeliveryOptionsPathParams struct {
	ConfigurationSetName string `pathParam:"style=simple,explode=false,name=ConfigurationSetName"`
}

type PutConfigurationSetDeliveryOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutConfigurationSetDeliveryOptionsRequestBodyTLSPolicyEnum string

const (
	PutConfigurationSetDeliveryOptionsRequestBodyTLSPolicyEnumRequire  PutConfigurationSetDeliveryOptionsRequestBodyTLSPolicyEnum = "REQUIRE"
	PutConfigurationSetDeliveryOptionsRequestBodyTLSPolicyEnumOptional PutConfigurationSetDeliveryOptionsRequestBodyTLSPolicyEnum = "OPTIONAL"
)

type PutConfigurationSetDeliveryOptionsRequestBody struct {
	SendingPoolName *string                                                     `json:"SendingPoolName,omitempty"`
	TLSPolicy       *PutConfigurationSetDeliveryOptionsRequestBodyTLSPolicyEnum `json:"TlsPolicy,omitempty"`
}

type PutConfigurationSetDeliveryOptionsRequest struct {
	PathParams PutConfigurationSetDeliveryOptionsPathParams
	Headers    PutConfigurationSetDeliveryOptionsHeaders
	Request    PutConfigurationSetDeliveryOptionsRequestBody `request:"mediaType=application/json"`
}

type PutConfigurationSetDeliveryOptionsResponse struct {
	BadRequestException                        *interface{}
	ContentType                                string
	NotFoundException                          *interface{}
	PutConfigurationSetDeliveryOptionsResponse map[string]interface{}
	StatusCode                                 int64
	TooManyRequestsException                   *interface{}
}
