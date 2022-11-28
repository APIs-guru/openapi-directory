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

// CreateConfigurationSetRequestBodyDeliveryOptions
// Used to associate a configuration set with a dedicated IP pool.
type CreateConfigurationSetRequestBodyDeliveryOptions struct {
	SendingPoolName *string               `json:"SendingPoolName,omitempty"`
	TLSPolicy       *shared.TLSPolicyEnum `json:"TlsPolicy,omitempty"`
}

// CreateConfigurationSetRequestBodyReputationOptions
// Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region.
type CreateConfigurationSetRequestBodyReputationOptions struct {
	LastFreshStart           *time.Time `json:"LastFreshStart,omitempty"`
	ReputationMetricsEnabled *bool      `json:"ReputationMetricsEnabled,omitempty"`
}

// CreateConfigurationSetRequestBodySendingOptions
// Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.
type CreateConfigurationSetRequestBodySendingOptions struct {
	SendingEnabled *bool `json:"SendingEnabled,omitempty"`
}

// CreateConfigurationSetRequestBodySuppressionOptions
// An object that contains information about the suppression list preferences for your account.
type CreateConfigurationSetRequestBodySuppressionOptions struct {
	SuppressedReasons []shared.SuppressionListReasonEnum `json:"SuppressedReasons,omitempty"`
}

// CreateConfigurationSetRequestBodyTrackingOptions
// <p>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</p>
type CreateConfigurationSetRequestBodyTrackingOptions struct {
	CustomRedirectDomain *string `json:"CustomRedirectDomain,omitempty"`
}

type CreateConfigurationSetRequestBody struct {
	ConfigurationSetName string                                               `json:"ConfigurationSetName"`
	DeliveryOptions      *CreateConfigurationSetRequestBodyDeliveryOptions    `json:"DeliveryOptions,omitempty"`
	ReputationOptions    *CreateConfigurationSetRequestBodyReputationOptions  `json:"ReputationOptions,omitempty"`
	SendingOptions       *CreateConfigurationSetRequestBodySendingOptions     `json:"SendingOptions,omitempty"`
	SuppressionOptions   *CreateConfigurationSetRequestBodySuppressionOptions `json:"SuppressionOptions,omitempty"`
	Tags                 []shared.Tag                                         `json:"Tags,omitempty"`
	TrackingOptions      *CreateConfigurationSetRequestBodyTrackingOptions    `json:"TrackingOptions,omitempty"`
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
