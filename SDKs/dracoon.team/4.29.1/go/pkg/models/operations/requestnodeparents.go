package operations

import (
	"openapi/pkg/models/shared"
)

type RequestNodeParentsPathParams struct {
	NodeID int64 `pathParam:"style=simple,explode=false,name=node_id"`
}

type RequestNodeParentsHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type RequestNodeParentsRequest struct {
	PathParams RequestNodeParentsPathParams
	Headers    RequestNodeParentsHeaders
}

type RequestNodeParentsResponse struct {
	ContentType    string
	ErrorResponse  *shared.ErrorResponse
	NodeParentList *shared.NodeParentList
	StatusCode     int64
}
