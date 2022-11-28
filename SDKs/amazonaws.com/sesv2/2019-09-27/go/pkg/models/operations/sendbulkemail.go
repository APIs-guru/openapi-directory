package operations

import (
	"openapi/pkg/models/shared"
)

type SendBulkEmailHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// SendBulkEmailRequestBodyDefaultContent
// An object that contains the body of the message. You can specify a template message.
type SendBulkEmailRequestBodyDefaultContent struct {
	Template *shared.Template `json:"Template,omitempty"`
}

type SendBulkEmailRequestBody struct {
	BulkEmailEntries                          []shared.BulkEmailEntry                `json:"BulkEmailEntries"`
	ConfigurationSetName                      *string                                `json:"ConfigurationSetName,omitempty"`
	DefaultContent                            SendBulkEmailRequestBodyDefaultContent `json:"DefaultContent"`
	DefaultEmailTags                          []shared.MessageTag                    `json:"DefaultEmailTags,omitempty"`
	FeedbackForwardingEmailAddress            *string                                `json:"FeedbackForwardingEmailAddress,omitempty"`
	FeedbackForwardingEmailAddressIdentityArn *string                                `json:"FeedbackForwardingEmailAddressIdentityArn,omitempty"`
	FromEmailAddress                          *string                                `json:"FromEmailAddress,omitempty"`
	FromEmailAddressIdentityArn               *string                                `json:"FromEmailAddressIdentityArn,omitempty"`
	ReplyToAddresses                          []string                               `json:"ReplyToAddresses,omitempty"`
}

type SendBulkEmailRequest struct {
	Headers SendBulkEmailHeaders
	Request SendBulkEmailRequestBody `request:"mediaType=application/json"`
}

type SendBulkEmailResponse struct {
	AccountSuspendedException          *interface{}
	BadRequestException                *interface{}
	ContentType                        string
	LimitExceededException             *interface{}
	MailFromDomainNotVerifiedException *interface{}
	MessageRejected                    *interface{}
	NotFoundException                  *interface{}
	SendBulkEmailResponse              *shared.SendBulkEmailResponse
	SendingPausedException             *interface{}
	StatusCode                         int64
	TooManyRequestsException           *interface{}
}
