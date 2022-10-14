package shared

type HistoryExportResultEntity struct {
	Action              *string `json:"action,omitempty"`
	CreatedAt           *int32  `json:"created_at,omitempty"`
	Destination         *string `json:"destination,omitempty"`
	FailureType         *string `json:"failure_type,omitempty"`
	FileID              *int32  `json:"file_id,omitempty"`
	Folder              *string `json:"folder,omitempty"`
	ID                  *int32  `json:"id,omitempty"`
	Interface           *string `json:"interface,omitempty"`
	IP                  *string `json:"ip,omitempty"`
	ParentID            *int32  `json:"parent_id,omitempty"`
	Path                *string `json:"path,omitempty"`
	Src                 *string `json:"src,omitempty"`
	TargetExpiresAt     *int32  `json:"target_expires_at,omitempty"`
	TargetID            *int32  `json:"target_id,omitempty"`
	TargetName          *string `json:"target_name,omitempty"`
	TargetPermission    *string `json:"target_permission,omitempty"`
	TargetPermissionSet *string `json:"target_permission_set,omitempty"`
	TargetPlatform      *string `json:"target_platform,omitempty"`
	TargetRecursive     *bool   `json:"target_recursive,omitempty"`
	TargetUserID        *int32  `json:"target_user_id,omitempty"`
	TargetUsername      *string `json:"target_username,omitempty"`
	UserID              *int32  `json:"user_id,omitempty"`
	Username            *string `json:"username,omitempty"`
}
