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
	Raw      *shared.RawMessage `json:"Raw"`
	Simple   *shared.Message    `json:"Simple"`
	Template *shared.Template   `json:"Template"`
}

type SendEmailRequestBodyDestination struct {
	BccAddresses []string `json:"BccAddresses"`
	CcAddresses  []string `json:"CcAddresses"`
	ToAddresses  []string `json:"ToAddresses"`
}

type SendEmailRequestBody struct {
	ConfigurationSetName           *string                         `json:"ConfigurationSetName"`
	Content                        SendEmailRequestBodyContent     `json:"Content"`
	Destination                    SendEmailRequestBodyDestination `json:"Destination"`
	EmailTags                      []shared.MessageTag             `json:"EmailTags"`
	FeedbackForwardingEmailAddress *string                         `json:"FeedbackForwardingEmailAddress"`
	FromEmailAddress               *string                         `json:"FromEmailAddress"`
	ReplyToAddresses               []string                        `json:"ReplyToAddresses"`
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
