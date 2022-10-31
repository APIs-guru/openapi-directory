package operations

import (
	"openapi/pkg/models/shared"
)

type ListMembersQueryParams struct {
	MaxResults     *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken      *string `queryParam:"style=form,explode=true,name=nextToken"`
	OnlyAssociated *string `queryParam:"style=form,explode=true,name=onlyAssociated"`
}

type ListMembersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListMembersRequest struct {
	QueryParams ListMembersQueryParams
	Headers     ListMembersHeaders
}

type ListMembersResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ListMembersResponse           *shared.ListMembersResponse
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
