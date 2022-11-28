package shared

// RenderingEngine
// Information about a rendering engine.
type RenderingEngine struct {
	Name    *RenderingEngineTypeEnum `json:"name,omitempty"`
	Version *string                  `json:"version,omitempty"`
}
