package shared

type BasicScaling struct {
	IdleTimeout  *string `json:"idleTimeout"`
	MaxInstances *int32  `json:"maxInstances"`
}
