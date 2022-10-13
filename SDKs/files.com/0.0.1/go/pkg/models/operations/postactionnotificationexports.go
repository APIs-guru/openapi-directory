package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PostActionNotificationExportsRequestBody struct {
	EndAt              *time.Time `multipartForm:"name=end_at"`
	QueryFolder        *string    `multipartForm:"name=query_folder"`
	QueryMessage       *string    `multipartForm:"name=query_message"`
	QueryPath          *string    `multipartForm:"name=query_path"`
	QueryRequestMethod *string    `multipartForm:"name=query_request_method"`
	QueryRequestURL    *string    `multipartForm:"name=query_request_url"`
	QueryStatus        *string    `multipartForm:"name=query_status"`
	QuerySuccess       *bool      `multipartForm:"name=query_success"`
	StartAt            *time.Time `multipartForm:"name=start_at"`
	UserID             *int32     `multipartForm:"name=user_id"`
}

type PostActionNotificationExportsRequest struct {
	Request *PostActionNotificationExportsRequestBody `request:"mediaType=multipart/form-data"`
}

type PostActionNotificationExportsResponse struct {
	ActionNotificationExportEntity *shared.ActionNotificationExportEntity
	ContentType                    string
	StatusCode                     int64
}
