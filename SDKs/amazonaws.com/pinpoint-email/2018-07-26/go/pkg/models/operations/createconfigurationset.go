package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type CreateConfigurationSetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateConfigurationSetRequestBodyDeliveryOptions struct {
	SendingPoolName *string               `json:"SendingPoolName,omitempty"`
	TLSPolicy       *shared.TLSPolicyEnum `json:"TlsPolicy,omitempty"`
}

type CreateConfigurationSetRequestBodyReputationOptions struct {
	LastFreshStart           *time.Time `json:"LastFreshStart,omitempty"`
	ReputationMetricsEnabled *bool      `json:"ReputationMetricsEnabled,omitempty"`
}

type CreateConfigurationSetRequestBodySendingOptions struct {
	SendingEnabled *bool `json:"SendingEnabled,omitempty"`
}

type CreateConfigurationSetRequestBodyTrackingOptions struct {
	CustomRedirectDomain *string `json:"CustomRedirectDomain,omitempty"`
}

type CreateConfigurationSetRequestBody struct {
	ConfigurationSetName string                                              `json:"ConfigurationSetName"`
	DeliveryOptions      *CreateConfigurationSetRequestBodyDeliveryOptions   `json:"DeliveryOptions,omitempty"`
	ReputationOptions    *CreateConfigurationSetRequestBodyReputationOptions `json:"ReputationOptions,omitempty"`
	SendingOptions       *CreateConfigurationSetRequestBodySendingOptions    `json:"SendingOptions,omitempty"`
	Tags                 []shared.Tag                                        `json:"Tags,omitempty"`
	TrackingOptions      *CreateConfigurationSetRequestBodyTrackingOptions   `json:"TrackingOptions,omitempty"`
}

type CreateConfigurationSetRequest struct {
	Headers CreateConfigurationSetHeaders
	Request CreateConfigurationSetRequestBody `request:"mediaType=application/json"`
}

type CreateConfigurationSetResponse struct {
	AlreadyExistsException          *interface{}
	BadRequestException             *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	CreateConfigurationSetResponse  map[string]interface{}
	LimitExceededException          *interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
}
