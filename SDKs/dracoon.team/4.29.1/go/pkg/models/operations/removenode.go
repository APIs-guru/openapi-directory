package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveNodePathParams struct {
	NodeID int64 `pathParam:"style=simple,explode=false,name=node_id"`
}

type RemoveNodeHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RemoveNodeRequest struct {
	PathParams RemoveNodePathParams
	Headers    RemoveNodeHeaders
}

type RemoveNodeResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
