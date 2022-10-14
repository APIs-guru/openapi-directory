package operations

import (
	"openapi/pkg/models/shared"
)

type ListReplicationSetsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListReplicationSetsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListReplicationSetsRequestBody struct {
	MaxResults *int64  `json:"maxResults,omitempty"`
	NextToken  *string `json:"nextToken,omitempty"`
}

type ListReplicationSetsRequest struct {
	QueryParams ListReplicationSetsQueryParams
	Headers     ListReplicationSetsHeaders
	Request     ListReplicationSetsRequestBody `request:"mediaType=application/json"`
}

type ListReplicationSetsResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ListReplicationSetsOutput *shared.ListReplicationSetsOutput
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
