package shared

// UserLockout
// User lockout information
type UserLockout struct {
	Enabled                  bool   `json:"enabled"`
	LockoutPeriod            *int32 `json:"lockoutPeriod,omitempty"`
	MaxNumberOfLoginFailures *int32 `json:"maxNumberOfLoginFailures,omitempty"`
}
