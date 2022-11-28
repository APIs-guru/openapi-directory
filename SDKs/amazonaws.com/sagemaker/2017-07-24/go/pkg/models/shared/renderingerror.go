package shared

// RenderingError
// A description of an error that occurred while rendering the template.
type RenderingError struct {
	Code    string `json:"Code"`
	Message string `json:"Message"`
}
