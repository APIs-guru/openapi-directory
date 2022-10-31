package operations

import (
	"openapi/pkg/models/shared"
)

type SearchNodesQueryParams struct {
	DepthLevel   *int32  `queryParam:"style=form,explode=true,name=depth_level"`
	Filter       *string `queryParam:"style=form,explode=true,name=filter"`
	Limit        *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset       *int32  `queryParam:"style=form,explode=true,name=offset"`
	ParentID     *int64  `queryParam:"style=form,explode=true,name=parent_id"`
	SearchString string  `queryParam:"style=form,explode=true,name=search_string"`
	Sort         *string `queryParam:"style=form,explode=true,name=sort"`
}

type SearchNodesHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type SearchNodesRequest struct {
	QueryParams SearchNodesQueryParams
	Headers     SearchNodesHeaders
}

type SearchNodesResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	NodeList      *shared.NodeList
	StatusCode    int64
}
