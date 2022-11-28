package shared

// EngineAttribute
// A name and value pair that is specific to the engine of the server.
type EngineAttribute struct {
	Name  *string `json:"Name,omitempty"`
	Value *string `json:"Value,omitempty"`
}
