package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInvitationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateInvitationsRequestBody struct {
	AccountIds               []string `json:"accountIds"`
	DisableEmailNotification *bool    `json:"disableEmailNotification"`
	Message                  *string  `json:"message"`
}

type CreateInvitationsRequest struct {
	Headers CreateInvitationsHeaders
	Request CreateInvitationsRequestBody `request:"mediaType=application/json"`
}

type CreateInvitationsResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateInvitationsResponse     *shared.CreateInvitationsResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
