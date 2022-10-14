package shared

type RenderingEngine struct {
	Name    *RenderingEngineTypeEnum `json:"name,omitempty"`
	Version *string                  `json:"version,omitempty"`
}
