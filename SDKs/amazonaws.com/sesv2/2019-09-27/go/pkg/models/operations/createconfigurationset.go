package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type CreateConfigurationSetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateConfigurationSetRequestBodyDeliveryOptions struct {
	SendingPoolName *string               `json:"SendingPoolName"`
	TLSPolicy       *shared.TLSPolicyEnum `json:"TlsPolicy"`
}

type CreateConfigurationSetRequestBodyReputationOptions struct {
	LastFreshStart           *time.Time `json:"LastFreshStart"`
	ReputationMetricsEnabled *bool      `json:"ReputationMetricsEnabled"`
}

type CreateConfigurationSetRequestBodySendingOptions struct {
	SendingEnabled *bool `json:"SendingEnabled"`
}

type CreateConfigurationSetRequestBodySuppressionOptions struct {
	SuppressedReasons []shared.SuppressionListReasonEnum `json:"SuppressedReasons"`
}

type CreateConfigurationSetRequestBodyTrackingOptions struct {
	CustomRedirectDomain *string `json:"CustomRedirectDomain"`
}

type CreateConfigurationSetRequestBody struct {
	ConfigurationSetName string                                               `json:"ConfigurationSetName"`
	DeliveryOptions      *CreateConfigurationSetRequestBodyDeliveryOptions    `json:"DeliveryOptions"`
	ReputationOptions    *CreateConfigurationSetRequestBodyReputationOptions  `json:"ReputationOptions"`
	SendingOptions       *CreateConfigurationSetRequestBodySendingOptions     `json:"SendingOptions"`
	SuppressionOptions   *CreateConfigurationSetRequestBodySuppressionOptions `json:"SuppressionOptions"`
	Tags                 []shared.Tag                                         `json:"Tags"`
	TrackingOptions      *CreateConfigurationSetRequestBodyTrackingOptions    `json:"TrackingOptions"`
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
