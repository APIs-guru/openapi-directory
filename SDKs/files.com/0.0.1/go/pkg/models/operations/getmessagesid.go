package operations

import (
	"openapi/pkg/models/shared"
)

type GetMessagesIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetMessagesIDRequest struct {
	PathParams GetMessagesIDPathParams
}

type GetMessagesIDResponse struct {
	ContentType   string
	MessageEntity *shared.MessageEntity
	StatusCode    int64
}
