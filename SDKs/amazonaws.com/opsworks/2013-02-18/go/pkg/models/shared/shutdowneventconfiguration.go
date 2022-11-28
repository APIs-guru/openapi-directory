package shared

// ShutdownEventConfiguration
// The Shutdown event configuration.
type ShutdownEventConfiguration struct {
	DelayUntilElbConnectionsDrained *bool  `json:"DelayUntilElbConnectionsDrained,omitempty"`
	ExecutionTimeout                *int64 `json:"ExecutionTimeout,omitempty"`
}
