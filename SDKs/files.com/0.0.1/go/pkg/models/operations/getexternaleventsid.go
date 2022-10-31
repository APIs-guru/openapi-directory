package operations

import (
	"openapi/pkg/models/shared"
)

type GetExternalEventsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetExternalEventsIDRequest struct {
	PathParams GetExternalEventsIDPathParams
}

type GetExternalEventsIDResponse struct {
	ContentType         string
	ExternalEventEntity *shared.ExternalEventEntity
	StatusCode          int64
}
