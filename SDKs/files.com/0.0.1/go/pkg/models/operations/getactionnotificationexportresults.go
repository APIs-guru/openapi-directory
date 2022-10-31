package operations

import (
	"openapi/pkg/models/shared"
)

type GetActionNotificationExportResultsQueryParams struct {
	ActionNotificationExportID int32   `queryParam:"style=form,explode=true,name=action_notification_export_id"`
	Cursor                     *string `queryParam:"style=form,explode=true,name=cursor"`
	PerPage                    *int32  `queryParam:"style=form,explode=true,name=per_page"`
	UserID                     *int32  `queryParam:"style=form,explode=true,name=user_id"`
}

type GetActionNotificationExportResultsRequest struct {
	QueryParams GetActionNotificationExportResultsQueryParams
}

type GetActionNotificationExportResultsResponse struct {
	ActionNotificationExportResultEntities []shared.ActionNotificationExportResultEntity
	ContentType                            string
	StatusCode                             int64
}
