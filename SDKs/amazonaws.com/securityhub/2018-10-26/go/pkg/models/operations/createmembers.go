package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMembersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateMembersRequestBody struct {
	AccountDetails []shared.AccountDetails `json:"AccountDetails"`
}

type CreateMembersRequest struct {
	Headers CreateMembersHeaders
	Request CreateMembersRequestBody `request:"mediaType=application/json"`
}

type CreateMembersResponse struct {
	ContentType               string
	CreateMembersResponse     *shared.CreateMembersResponse
	InternalException         *interface{}
	InvalidAccessException    *interface{}
	InvalidInputException     *interface{}
	LimitExceededException    *interface{}
	ResourceConflictException *interface{}
	StatusCode                int64
}
