package operations

import (
	"openapi/pkg/models/shared"
)

type SendBulkEmailHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SendBulkEmailRequestBodyDefaultContent struct {
	Template *shared.Template `json:"Template"`
}

type SendBulkEmailRequestBody struct {
	BulkEmailEntries                          []shared.BulkEmailEntry                `json:"BulkEmailEntries"`
	ConfigurationSetName                      *string                                `json:"ConfigurationSetName"`
	DefaultContent                            SendBulkEmailRequestBodyDefaultContent `json:"DefaultContent"`
	DefaultEmailTags                          []shared.MessageTag                    `json:"DefaultEmailTags"`
	FeedbackForwardingEmailAddress            *string                                `json:"FeedbackForwardingEmailAddress"`
	FeedbackForwardingEmailAddressIdentityArn *string                                `json:"FeedbackForwardingEmailAddressIdentityArn"`
	FromEmailAddress                          *string                                `json:"FromEmailAddress"`
	FromEmailAddressIdentityArn               *string                                `json:"FromEmailAddressIdentityArn"`
	ReplyToAddresses                          []string                               `json:"ReplyToAddresses"`
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
