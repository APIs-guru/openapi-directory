package shared

// TracingConfigResponse
// The function's X-Ray tracing configuration.
type TracingConfigResponse struct {
	Mode *TracingModeEnum `json:"Mode,omitempty"`
}
