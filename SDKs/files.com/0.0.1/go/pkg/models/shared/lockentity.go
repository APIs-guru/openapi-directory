package shared

type LockEntity struct {
	AllowAccessByAnyUser *bool   `json:"allow_access_by_any_user"`
	Depth                *string `json:"depth"`
	Exclusive            *bool   `json:"exclusive"`
	Owner                *string `json:"owner"`
	Path                 *string `json:"path"`
	Recursive            *bool   `json:"recursive"`
	Scope                *string `json:"scope"`
	Timeout              *int32  `json:"timeout"`
	Token                *string `json:"token"`
	Type                 *string `json:"type"`
	UserID               *int32  `json:"user_id"`
	Username             *string `json:"username"`
}
