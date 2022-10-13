package operations

import (
	"openapi/pkg/models/shared"
)

type ListMembersQueryParams struct {
	MaxResults     *int64  `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken      *string `queryParam:"style=form,explode=true,name=NextToken"`
	OnlyAssociated *bool   `queryParam:"style=form,explode=true,name=OnlyAssociated"`
}

type ListMembersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListMembersRequest struct {
	QueryParams ListMembersQueryParams
	Headers     ListMembersHeaders
}

type ListMembersResponse struct {
	ContentType            string
	InternalException      *interface{}
	InvalidAccessException *interface{}
	InvalidInputException  *interface{}
	LimitExceededException *interface{}
	ListMembersResponse    *shared.ListMembersResponse
	StatusCode             int64
}
