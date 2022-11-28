package shared

// LockEntity
// List Locks by path
type LockEntity struct {
	AllowAccessByAnyUser *bool   `json:"allow_access_by_any_user,omitempty"`
	Depth                *string `json:"depth,omitempty"`
	Exclusive            *bool   `json:"exclusive,omitempty"`
	Owner                *string `json:"owner,omitempty"`
	Path                 *string `json:"path,omitempty"`
	Recursive            *bool   `json:"recursive,omitempty"`
	Scope                *string `json:"scope,omitempty"`
	Timeout              *int32  `json:"timeout,omitempty"`
	Token                *string `json:"token,omitempty"`
	Type                 *string `json:"type,omitempty"`
	UserID               *int32  `json:"user_id,omitempty"`
	Username             *string `json:"username,omitempty"`
}
