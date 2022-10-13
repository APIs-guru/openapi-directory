package operations

import (
	"openapi/pkg/models/shared"
)

type ListControlPanelsQueryParams struct {
	ClusterArn *string `queryParam:"style=form,explode=true,name=ClusterArn"`
	MaxResults *int64  `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListControlPanelsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListControlPanelsRequest struct {
	QueryParams ListControlPanelsQueryParams
	Headers     ListControlPanelsHeaders
}

type ListControlPanelsResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ListControlPanelsResponse *shared.ListControlPanelsResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
