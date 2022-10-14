package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMemberHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateMemberRequestBodyAccount struct {
	AccountID *string `json:"accountId,omitempty"`
	Email     *string `json:"email,omitempty"`
}

type CreateMemberRequestBody struct {
	Account CreateMemberRequestBodyAccount `json:"account"`
	Tags    map[string]string              `json:"tags,omitempty"`
}

type CreateMemberRequest struct {
	Headers CreateMemberHeaders
	Request CreateMemberRequestBody `request:"mediaType=application/json"`
}

type CreateMemberResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateMemberResponse          *shared.CreateMemberResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
