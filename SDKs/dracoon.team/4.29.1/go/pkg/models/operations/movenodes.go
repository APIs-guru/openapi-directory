package operations

import (
	"openapi/pkg/models/shared"
)

type MoveNodesPathParams struct {
	NodeID int64 `pathParam:"style=simple,explode=false,name=node_id"`
}

type MoveNodesHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type MoveNodesRequest struct {
	PathParams MoveNodesPathParams
	Headers    MoveNodesHeaders
	Request    shared.MoveNodesRequest `request:"mediaType=application/json"`
}

type MoveNodesResponse struct {
	ContentType                       string
	ErrorResponse                     *shared.ErrorResponse
	Node                              *shared.Node
	StatusCode                        int64
	MoveNodes204ApplicationJSONString *string
}
