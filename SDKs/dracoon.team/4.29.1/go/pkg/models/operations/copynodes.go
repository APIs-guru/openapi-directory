package operations

import (
	"openapi/pkg/models/shared"
)

type CopyNodesPathParams struct {
	NodeID int64 `pathParam:"style=simple,explode=false,name=node_id"`
}

type CopyNodesHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type CopyNodesRequest struct {
	PathParams CopyNodesPathParams
	Headers    CopyNodesHeaders
	Request    shared.CopyNodesRequest `request:"mediaType=application/json"`
}

type CopyNodesResponse struct {
	ContentType                       string
	ErrorResponse                     *shared.ErrorResponse
	Node                              *shared.Node
	StatusCode                        int64
	CopyNodes204ApplicationJSONString *string
}
