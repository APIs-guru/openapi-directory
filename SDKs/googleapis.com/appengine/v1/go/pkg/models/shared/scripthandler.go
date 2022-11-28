package shared

// ScriptHandler
// Executes a script to handle the request that matches the URL pattern.
type ScriptHandler struct {
	ScriptPath *string `json:"scriptPath,omitempty"`
}
