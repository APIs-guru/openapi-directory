package shared

// LifecycleEventConfiguration
// Specifies the lifecycle event configuration
type LifecycleEventConfiguration struct {
	Shutdown *ShutdownEventConfiguration `json:"Shutdown,omitempty"`
}
