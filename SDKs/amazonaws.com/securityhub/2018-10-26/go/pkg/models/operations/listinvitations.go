package operations

import (
	"openapi/pkg/models/shared"
)

type ListInvitationsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListInvitationsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListInvitationsRequest struct {
	QueryParams ListInvitationsQueryParams
	Headers     ListInvitationsHeaders
}

type ListInvitationsResponse struct {
	ContentType             string
	InternalException       *interface{}
	InvalidAccessException  *interface{}
	InvalidInputException   *interface{}
	LimitExceededException  *interface{}
	ListInvitationsResponse *shared.ListInvitationsResponse
	StatusCode              int64
}
