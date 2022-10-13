package operations

import (
	"openapi/pkg/models/shared"
)

type RequestNodesQueryParams struct {
	DepthLevel  *int32  `queryParam:"style=form,explode=true,name=depth_level"`
	Filter      *string `queryParam:"style=form,explode=true,name=filter"`
	Limit       *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset      *int32  `queryParam:"style=form,explode=true,name=offset"`
	ParentID    *int64  `queryParam:"style=form,explode=true,name=parent_id"`
	RoomManager *bool   `queryParam:"style=form,explode=true,name=room_manager"`
	Sort        *string `queryParam:"style=form,explode=true,name=sort"`
}

type RequestNodesHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type RequestNodesRequest struct {
	QueryParams RequestNodesQueryParams
	Headers     RequestNodesHeaders
}

type RequestNodesResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	NodeList      *shared.NodeList
	StatusCode    int64
}
