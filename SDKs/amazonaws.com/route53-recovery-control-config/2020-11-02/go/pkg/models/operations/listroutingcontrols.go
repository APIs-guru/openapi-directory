package operations

import (
	"openapi/pkg/models/shared"
)

type ListRoutingControlsPathParams struct {
	ControlPanelArn string `pathParam:"style=simple,explode=false,name=ControlPanelArn"`
}

type ListRoutingControlsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListRoutingControlsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListRoutingControlsRequest struct {
	PathParams  ListRoutingControlsPathParams
	QueryParams ListRoutingControlsQueryParams
	Headers     ListRoutingControlsHeaders
}

type ListRoutingControlsResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	InternalServerException     *interface{}
	ListRoutingControlsResponse *shared.ListRoutingControlsResponse
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	ValidationException         *interface{}
}
