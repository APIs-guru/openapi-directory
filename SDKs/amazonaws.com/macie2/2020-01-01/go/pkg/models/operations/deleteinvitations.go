package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteInvitationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteInvitationsRequestBody struct {
	AccountIds []string `json:"accountIds"`
}

type DeleteInvitationsRequest struct {
	Headers DeleteInvitationsHeaders
	Request DeleteInvitationsRequestBody `request:"mediaType=application/json"`
}

type DeleteInvitationsResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	DeleteInvitationsResponse     *shared.DeleteInvitationsResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
