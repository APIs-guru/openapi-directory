package operations

import (
	"openapi/pkg/models/shared"
)

type ListPendingInvitationResourcesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListPendingInvitationResourcesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListPendingInvitationResourcesRequestBody struct {
	MaxResults                 *int64  `json:"maxResults,omitempty"`
	NextToken                  *string `json:"nextToken,omitempty"`
	ResourceShareInvitationArn string  `json:"resourceShareInvitationArn"`
}

type ListPendingInvitationResourcesRequest struct {
	QueryParams ListPendingInvitationResourcesQueryParams
	Headers     ListPendingInvitationResourcesHeaders
	Request     ListPendingInvitationResourcesRequestBody `request:"mediaType=application/json"`
}

type ListPendingInvitationResourcesResponse struct {
	ContentType                                     string
	InvalidNextTokenException                       *interface{}
	InvalidParameterException                       *interface{}
	ListPendingInvitationResourcesResponse          *shared.ListPendingInvitationResourcesResponse
	MalformedArnException                           *interface{}
	MissingRequiredParameterException               *interface{}
	ResourceShareInvitationAlreadyRejectedException *interface{}
	ResourceShareInvitationArnNotFoundException     *interface{}
	ResourceShareInvitationExpiredException         *interface{}
	ServerInternalException                         *interface{}
	ServiceUnavailableException                     *interface{}
	StatusCode                                      int64
}
