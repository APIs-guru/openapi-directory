package shared

type BasicScaling struct {
	IdleTimeout  *string `json:"idleTimeout,omitempty"`
	MaxInstances *int32  `json:"maxInstances,omitempty"`
}
