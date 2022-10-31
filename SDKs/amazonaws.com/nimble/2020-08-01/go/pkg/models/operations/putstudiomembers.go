package operations

import (
	"openapi/pkg/models/shared"
)

type PutStudioMembersPathParams struct {
	StudioID string `pathParam:"style=simple,explode=false,name=studioId"`
}

type PutStudioMembersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzClientToken   *string `header:"style=simple,explode=false,name=X-Amz-Client-Token"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutStudioMembersRequestBody struct {
	IdentityStoreID string                   `json:"identityStoreId"`
	Members         []shared.NewStudioMember `json:"members"`
}

type PutStudioMembersRequest struct {
	PathParams PutStudioMembersPathParams
	Headers    PutStudioMembersHeaders
	Request    PutStudioMembersRequestBody `request:"mediaType=application/json"`
}

type PutStudioMembersResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerErrorException  *interface{}
	PutStudioMembersResponse      map[string]interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
