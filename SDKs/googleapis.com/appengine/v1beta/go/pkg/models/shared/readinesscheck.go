package shared

type ReadinessCheck struct {
	AppStartTimeout  *string `json:"appStartTimeout"`
	CheckInterval    *string `json:"checkInterval"`
	FailureThreshold *int64  `json:"failureThreshold"`
	Host             *string `json:"host"`
	Path             *string `json:"path"`
	SuccessThreshold *int64  `json:"successThreshold"`
	Timeout          *string `json:"timeout"`
}
