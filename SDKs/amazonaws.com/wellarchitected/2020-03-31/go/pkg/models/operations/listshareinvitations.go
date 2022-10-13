package operations

import (
	"openapi/pkg/models/shared"
)

type ListShareInvitationsQueryParams struct {
	MaxResults         *int64  `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken          *string `queryParam:"style=form,explode=true,name=NextToken"`
	WorkloadNamePrefix *string `queryParam:"style=form,explode=true,name=WorkloadNamePrefix"`
}

type ListShareInvitationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListShareInvitationsRequest struct {
	QueryParams ListShareInvitationsQueryParams
	Headers     ListShareInvitationsHeaders
}

type ListShareInvitationsResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	InternalServerException    *interface{}
	ListShareInvitationsOutput *shared.ListShareInvitationsOutput
	StatusCode                 int64
	ThrottlingException        *interface{}
	ValidationException        *interface{}
}
