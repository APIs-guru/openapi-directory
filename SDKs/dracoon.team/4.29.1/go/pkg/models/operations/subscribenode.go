package operations

import (
	"openapi/pkg/models/shared"
)

type SubscribeNodePathParams struct {
	NodeID int64 `pathParam:"style=simple,explode=false,name=node_id"`
}

type SubscribeNodeHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type SubscribeNodeRequest struct {
	PathParams SubscribeNodePathParams
	Headers    SubscribeNodeHeaders
}

type SubscribeNodeResponse struct {
	ContentType    string
	ErrorResponse  *shared.ErrorResponse
	StatusCode     int64
	SubscribedNode *shared.SubscribedNode
}
