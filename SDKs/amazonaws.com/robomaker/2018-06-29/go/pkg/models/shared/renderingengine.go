package shared

type RenderingEngine struct {
	Name    *RenderingEngineTypeEnum `json:"name"`
	Version *string                  `json:"version"`
}
