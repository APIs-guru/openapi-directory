package shared

type LifecycleEventConfiguration struct {
	Shutdown *ShutdownEventConfiguration `json:"Shutdown,omitempty"`
}
