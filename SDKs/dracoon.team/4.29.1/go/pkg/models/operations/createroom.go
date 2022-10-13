package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRoomHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type CreateRoomRequest struct {
	Headers CreateRoomHeaders
	Request shared.CreateRoomRequest `request:"mediaType=application/json"`
}

type CreateRoomResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Node          *shared.Node
	StatusCode    int64
}
