package operations

import (
	"openapi/pkg/models/shared"
)

type AddFavoritePathParams struct {
	NodeID int64 `pathParam:"style=simple,explode=false,name=node_id"`
}

type AddFavoriteHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type AddFavoriteRequest struct {
	PathParams AddFavoritePathParams
	Headers    AddFavoriteHeaders
}

type AddFavoriteResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Node          *shared.Node
	StatusCode    int64
}
