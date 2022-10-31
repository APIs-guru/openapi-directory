package operations

import (
	"openapi/pkg/models/shared"
)

type SendCustomVerificationEmailHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type SendCustomVerificationEmailRequestBody struct {
	ConfigurationSetName *string `json:"ConfigurationSetName,omitempty"`
	EmailAddress         string  `json:"EmailAddress"`
	TemplateName         string  `json:"TemplateName"`
}

type SendCustomVerificationEmailRequest struct {
	Headers SendCustomVerificationEmailHeaders
	Request SendCustomVerificationEmailRequestBody `request:"mediaType=application/json"`
}

type SendCustomVerificationEmailResponse struct {
	BadRequestException                 *interface{}
	ContentType                         string
	LimitExceededException              *interface{}
	MailFromDomainNotVerifiedException  *interface{}
	MessageRejected                     *interface{}
	NotFoundException                   *interface{}
	SendCustomVerificationEmailResponse *shared.SendCustomVerificationEmailResponse
	SendingPausedException              *interface{}
	StatusCode                          int64
	TooManyRequestsException            *interface{}
}
