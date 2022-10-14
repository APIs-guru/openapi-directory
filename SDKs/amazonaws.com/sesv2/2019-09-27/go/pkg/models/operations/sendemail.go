package operations

import (
	"openapi/pkg/models/shared"
)

type SendEmailHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SendEmailRequestBodyContent struct {
	Raw      *shared.RawMessage `json:"Raw,omitempty"`
	Simple   *shared.Message    `json:"Simple,omitempty"`
	Template *shared.Template   `json:"Template,omitempty"`
}

type SendEmailRequestBodyDestination struct {
	BccAddresses []string `json:"BccAddresses,omitempty"`
	CcAddresses  []string `json:"CcAddresses,omitempty"`
	ToAddresses  []string `json:"ToAddresses,omitempty"`
}

type SendEmailRequestBodyListManagementOptions struct {
	ContactListName *string `json:"ContactListName,omitempty"`
	TopicName       *string `json:"TopicName,omitempty"`
}

type SendEmailRequestBody struct {
	ConfigurationSetName                      *string                                    `json:"ConfigurationSetName,omitempty"`
	Content                                   SendEmailRequestBodyContent                `json:"Content"`
	Destination                               *SendEmailRequestBodyDestination           `json:"Destination,omitempty"`
	EmailTags                                 []shared.MessageTag                        `json:"EmailTags,omitempty"`
	FeedbackForwardingEmailAddress            *string                                    `json:"FeedbackForwardingEmailAddress,omitempty"`
	FeedbackForwardingEmailAddressIdentityArn *string                                    `json:"FeedbackForwardingEmailAddressIdentityArn,omitempty"`
	FromEmailAddress                          *string                                    `json:"FromEmailAddress,omitempty"`
	FromEmailAddressIdentityArn               *string                                    `json:"FromEmailAddressIdentityArn,omitempty"`
	ListManagementOptions                     *SendEmailRequestBodyListManagementOptions `json:"ListManagementOptions,omitempty"`
	ReplyToAddresses                          []string                                   `json:"ReplyToAddresses,omitempty"`
}

type SendEmailRequest struct {
	Headers SendEmailHeaders
	Request SendEmailRequestBody `request:"mediaType=application/json"`
}

type SendEmailResponse struct {
	AccountSuspendedException          *interface{}
	BadRequestException                *interface{}
	ContentType                        string
	LimitExceededException             *interface{}
	MailFromDomainNotVerifiedException *interface{}
	MessageRejected                    *interface{}
	NotFoundException                  *interface{}
	SendEmailResponse                  *shared.SendEmailResponse
	SendingPausedException             *interface{}
	StatusCode                         int64
	TooManyRequestsException           *interface{}
}
