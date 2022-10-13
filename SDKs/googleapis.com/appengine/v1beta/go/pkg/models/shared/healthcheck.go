package shared

type HealthCheck struct {
	CheckInterval      *string `json:"checkInterval"`
	DisableHealthCheck *bool   `json:"disableHealthCheck"`
	HealthyThreshold   *int64  `json:"healthyThreshold"`
	Host               *string `json:"host"`
	RestartThreshold   *int64  `json:"restartThreshold"`
	Timeout            *string `json:"timeout"`
	UnhealthyThreshold *int64  `json:"unhealthyThreshold"`
}
