package shared

type CanaryLastRun struct {
	CanaryName *string    `json:"CanaryName"`
	LastRun    *CanaryRun `json:"LastRun"`
}
