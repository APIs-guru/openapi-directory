package shared

import (
	"time"
)

type HistoryExportEntity struct {
	EndAt                    *time.Time `json:"end_at"`
	HistoryVersion           *string    `json:"history_version"`
	ID                       *int32     `json:"id"`
	QueryAction              *string    `json:"query_action"`
	QueryDestination         *string    `json:"query_destination"`
	QueryFailureType         *string    `json:"query_failure_type"`
	QueryFileID              *string    `json:"query_file_id"`
	QueryFolder              *string    `json:"query_folder"`
	QueryInterface           *string    `json:"query_interface"`
	QueryIP                  *string    `json:"query_ip"`
	QueryParentID            *string    `json:"query_parent_id"`
	QueryPath                *string    `json:"query_path"`
	QuerySrc                 *string    `json:"query_src"`
	QueryTargetID            *string    `json:"query_target_id"`
	QueryTargetName          *string    `json:"query_target_name"`
	QueryTargetPermission    *string    `json:"query_target_permission"`
	QueryTargetPermissionSet *string    `json:"query_target_permission_set"`
	QueryTargetPlatform      *string    `json:"query_target_platform"`
	QueryTargetUserID        *string    `json:"query_target_user_id"`
	QueryTargetUsername      *string    `json:"query_target_username"`
	QueryUserID              *string    `json:"query_user_id"`
	QueryUsername            *string    `json:"query_username"`
	ResultsURL               *string    `json:"results_url"`
	StartAt                  *time.Time `json:"start_at"`
	Status                   *string    `json:"status"`
}
