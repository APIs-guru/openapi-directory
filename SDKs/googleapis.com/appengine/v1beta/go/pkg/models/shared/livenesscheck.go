package shared

type LivenessCheck struct {
	CheckInterval    *string `json:"checkInterval"`
	FailureThreshold *int64  `json:"failureThreshold"`
	Host             *string `json:"host"`
	InitialDelay     *string `json:"initialDelay"`
	Path             *string `json:"path"`
	SuccessThreshold *int64  `json:"successThreshold"`
	Timeout          *string `json:"timeout"`
}
