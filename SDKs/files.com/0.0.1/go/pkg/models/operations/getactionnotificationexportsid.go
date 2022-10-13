package operations

import (
	"openapi/pkg/models/shared"
)

type GetActionNotificationExportsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetActionNotificationExportsIDRequest struct {
	PathParams GetActionNotificationExportsIDPathParams
}

type GetActionNotificationExportsIDResponse struct {
	ActionNotificationExportEntity *shared.ActionNotificationExportEntity
	ContentType                    string
	StatusCode                     int64
}
