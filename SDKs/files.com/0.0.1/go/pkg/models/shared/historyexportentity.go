package shared

import (
"time")

type HistoryExportEntity struct {
    EndAt *time.Time `json:"end_at,omitempty"`
    HistoryVersion *string `json:"history_version,omitempty"`
    ID *int32 `json:"id,omitempty"`
    QueryAction *string `json:"query_action,omitempty"`
    QueryDestination *string `json:"query_destination,omitempty"`
    QueryFailureType *string `json:"query_failure_type,omitempty"`
    QueryFileID *string `json:"query_file_id,omitempty"`
    QueryFolder *string `json:"query_folder,omitempty"`
    QueryInterface *string `json:"query_interface,omitempty"`
    QueryIP *string `json:"query_ip,omitempty"`
    QueryParentID *string `json:"query_parent_id,omitempty"`
    QueryPath *string `json:"query_path,omitempty"`
    QuerySrc *string `json:"query_src,omitempty"`
    QueryTargetID *string `json:"query_target_id,omitempty"`
    QueryTargetName *string `json:"query_target_name,omitempty"`
    QueryTargetPermission *string `json:"query_target_permission,omitempty"`
    QueryTargetPermissionSet *string `json:"query_target_permission_set,omitempty"`
    QueryTargetPlatform *string `json:"query_target_platform,omitempty"`
    QueryTargetUserID *string `json:"query_target_user_id,omitempty"`
    QueryTargetUsername *string `json:"query_target_username,omitempty"`
    QueryUserID *string `json:"query_user_id,omitempty"`
    QueryUsername *string `json:"query_username,omitempty"`
    ResultsURL *string `json:"results_url,omitempty"`
    StartAt *time.Time `json:"start_at,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

