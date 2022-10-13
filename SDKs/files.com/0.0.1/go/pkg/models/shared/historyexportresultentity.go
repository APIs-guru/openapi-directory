package shared

type HistoryExportResultEntity struct {
	Action              *string `json:"action"`
	CreatedAt           *int32  `json:"created_at"`
	Destination         *string `json:"destination"`
	FailureType         *string `json:"failure_type"`
	FileID              *int32  `json:"file_id"`
	Folder              *string `json:"folder"`
	ID                  *int32  `json:"id"`
	Interface           *string `json:"interface"`
	IP                  *string `json:"ip"`
	ParentID            *int32  `json:"parent_id"`
	Path                *string `json:"path"`
	Src                 *string `json:"src"`
	TargetExpiresAt     *int32  `json:"target_expires_at"`
	TargetID            *int32  `json:"target_id"`
	TargetName          *string `json:"target_name"`
	TargetPermission    *string `json:"target_permission"`
	TargetPermissionSet *string `json:"target_permission_set"`
	TargetPlatform      *string `json:"target_platform"`
	TargetRecursive     *bool   `json:"target_recursive"`
	TargetUserID        *int32  `json:"target_user_id"`
	TargetUsername      *string `json:"target_username"`
	UserID              *int32  `json:"user_id"`
	Username            *string `json:"username"`
}
