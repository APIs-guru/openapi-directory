package operations

import (
	"openapi/pkg/models/shared"
)

type InviteMembersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type InviteMembersRequestBody struct {
	AccountIds []string `json:"AccountIds"`
}

type InviteMembersRequest struct {
	Headers InviteMembersHeaders
	Request InviteMembersRequestBody `request:"mediaType=application/json"`
}

type InviteMembersResponse struct {
	ContentType               string
	InternalException         *interface{}
	InvalidAccessException    *interface{}
	InvalidInputException     *interface{}
	InviteMembersResponse     *shared.InviteMembersResponse
	LimitExceededException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
