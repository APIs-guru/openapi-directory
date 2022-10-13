package shared

type UserLockout struct {
	Enabled                  bool   `json:"enabled"`
	LockoutPeriod            *int32 `json:"lockoutPeriod"`
	MaxNumberOfLoginFailures *int32 `json:"maxNumberOfLoginFailures"`
}
