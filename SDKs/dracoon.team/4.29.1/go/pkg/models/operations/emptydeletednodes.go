package operations

import (
	"openapi/pkg/models/shared"
)

type EmptyDeletedNodesPathParams struct {
	NodeID int64 `pathParam:"style=simple,explode=false,name=node_id"`
}

type EmptyDeletedNodesHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type EmptyDeletedNodesRequest struct {
	PathParams EmptyDeletedNodesPathParams
	Headers    EmptyDeletedNodesHeaders
}

type EmptyDeletedNodesResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
