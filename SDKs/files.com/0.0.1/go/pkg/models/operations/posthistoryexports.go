package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PostHistoryExportsRequestBody struct {
	EndAt                    *time.Time `multipartForm:"name=end_at"`
	QueryAction              *string    `multipartForm:"name=query_action"`
	QueryDestination         *string    `multipartForm:"name=query_destination"`
	QueryFailureType         *string    `multipartForm:"name=query_failure_type"`
	QueryFileID              *string    `multipartForm:"name=query_file_id"`
	QueryFolder              *string    `multipartForm:"name=query_folder"`
	QueryInterface           *string    `multipartForm:"name=query_interface"`
	QueryIP                  *string    `multipartForm:"name=query_ip"`
	QueryParentID            *string    `multipartForm:"name=query_parent_id"`
	QueryPath                *string    `multipartForm:"name=query_path"`
	QuerySrc                 *string    `multipartForm:"name=query_src"`
	QueryTargetID            *string    `multipartForm:"name=query_target_id"`
	QueryTargetName          *string    `multipartForm:"name=query_target_name"`
	QueryTargetPermission    *string    `multipartForm:"name=query_target_permission"`
	QueryTargetPermissionSet *string    `multipartForm:"name=query_target_permission_set"`
	QueryTargetPlatform      *string    `multipartForm:"name=query_target_platform"`
	QueryTargetUserID        *string    `multipartForm:"name=query_target_user_id"`
	QueryTargetUsername      *string    `multipartForm:"name=query_target_username"`
	QueryUserID              *string    `multipartForm:"name=query_user_id"`
	QueryUsername            *string    `multipartForm:"name=query_username"`
	StartAt                  *time.Time `multipartForm:"name=start_at"`
	UserID                   *int32     `multipartForm:"name=user_id"`
}

type PostHistoryExportsRequest struct {
	Request *PostHistoryExportsRequestBody `request:"mediaType=multipart/form-data"`
}

type PostHistoryExportsResponse struct {
	ContentType         string
	HistoryExportEntity *shared.HistoryExportEntity
	StatusCode          int64
}
