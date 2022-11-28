package shared

// CanaryLastRun
// This structure contains information about the most recent run of a single canary.
type CanaryLastRun struct {
	CanaryName *string    `json:"CanaryName,omitempty"`
	LastRun    *CanaryRun `json:"LastRun,omitempty"`
}
