package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteMembersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteMembersRequestBody struct {
	AccountIds []string `json:"AccountIds"`
}

type DeleteMembersRequest struct {
	Headers DeleteMembersHeaders
	Request DeleteMembersRequestBody `request:"mediaType=application/json"`
}

type DeleteMembersResponse struct {
	ContentType               string
	DeleteMembersResponse     *shared.DeleteMembersResponse
	InternalException         *interface{}
	InvalidAccessException    *interface{}
	InvalidInputException     *interface{}
	LimitExceededException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
