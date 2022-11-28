package operations

import (
	"openapi/pkg/models/shared"
)

type SendEmailHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// SendEmailRequestBodyContent
// An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
type SendEmailRequestBodyContent struct {
	Raw      *shared.RawMessage `json:"Raw,omitempty"`
	Simple   *shared.Message    `json:"Simple,omitempty"`
	Template *shared.Template   `json:"Template,omitempty"`
}

// SendEmailRequestBodyDestination
// An object that describes the recipients for an email.
type SendEmailRequestBodyDestination struct {
	BccAddresses []string `json:"BccAddresses,omitempty"`
	CcAddresses  []string `json:"CcAddresses,omitempty"`
	ToAddresses  []string `json:"ToAddresses,omitempty"`
}

type SendEmailRequestBody struct {
	ConfigurationSetName           *string                         `json:"ConfigurationSetName,omitempty"`
	Content                        SendEmailRequestBodyContent     `json:"Content"`
	Destination                    SendEmailRequestBodyDestination `json:"Destination"`
	EmailTags                      []shared.MessageTag             `json:"EmailTags,omitempty"`
	FeedbackForwardingEmailAddress *string                         `json:"FeedbackForwardingEmailAddress,omitempty"`
	FromEmailAddress               *string                         `json:"FromEmailAddress,omitempty"`
	ReplyToAddresses               []string                        `json:"ReplyToAddresses,omitempty"`
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
