package operations

import (
	"openapi/pkg/models/shared"
)

type RequestDeletedNodePathParams struct {
	DeletedNodeID int64 `pathParam:"style=simple,explode=false,name=deleted_node_id"`
}

type RequestDeletedNodeHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type RequestDeletedNodeRequest struct {
	PathParams RequestDeletedNodePathParams
	Headers    RequestDeletedNodeHeaders
}

type RequestDeletedNodeResponse struct {
	ContentType   string
	DeletedNode   *shared.DeletedNode
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
