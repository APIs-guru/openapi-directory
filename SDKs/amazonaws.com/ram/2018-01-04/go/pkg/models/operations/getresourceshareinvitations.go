package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourceShareInvitationsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetResourceShareInvitationsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetResourceShareInvitationsRequestBody struct {
	MaxResults                  *int64   `json:"maxResults,omitempty"`
	NextToken                   *string  `json:"nextToken,omitempty"`
	ResourceShareArns           []string `json:"resourceShareArns,omitempty"`
	ResourceShareInvitationArns []string `json:"resourceShareInvitationArns,omitempty"`
}

type GetResourceShareInvitationsRequest struct {
	QueryParams GetResourceShareInvitationsQueryParams
	Headers     GetResourceShareInvitationsHeaders
	Request     GetResourceShareInvitationsRequestBody `request:"mediaType=application/json"`
}

type GetResourceShareInvitationsResponse struct {
	ContentType                                 string
	GetResourceShareInvitationsResponse         *shared.GetResourceShareInvitationsResponse
	InvalidMaxResultsException                  *interface{}
	InvalidNextTokenException                   *interface{}
	InvalidParameterException                   *interface{}
	MalformedArnException                       *interface{}
	ResourceShareInvitationArnNotFoundException *interface{}
	ServerInternalException                     *interface{}
	ServiceUnavailableException                 *interface{}
	StatusCode                                  int64
	UnknownResourceException                    *interface{}
}
