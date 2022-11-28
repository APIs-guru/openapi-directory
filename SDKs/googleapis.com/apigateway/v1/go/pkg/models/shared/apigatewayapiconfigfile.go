package shared

// ApigatewayAPIConfigFile
// A lightweight description of a file.
type ApigatewayAPIConfigFile struct {
	Contents *string `json:"contents,omitempty"`
	Path     *string `json:"path,omitempty"`
}
