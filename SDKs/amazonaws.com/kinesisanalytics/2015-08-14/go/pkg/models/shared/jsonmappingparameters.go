package shared

// JSONMappingParameters
// Provides additional mapping information when JSON is the record format on the streaming source.
type JSONMappingParameters struct {
	RecordRowPath string `json:"RecordRowPath"`
}
