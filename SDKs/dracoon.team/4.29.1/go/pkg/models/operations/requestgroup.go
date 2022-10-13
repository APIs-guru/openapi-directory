package operations

import (
	"openapi/pkg/models/shared"
)

type RequestGroupPathParams struct {
	GroupID int64 `pathParam:"style=simple,explode=false,name=group_id"`
}

type RequestGroupHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type RequestGroupRequest struct {
	PathParams RequestGroupPathParams
	Headers    RequestGroupHeaders
}

type RequestGroupResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Group         *shared.Group
	StatusCode    int64
}
