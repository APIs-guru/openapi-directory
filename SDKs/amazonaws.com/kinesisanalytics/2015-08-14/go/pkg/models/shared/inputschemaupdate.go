package shared

// InputSchemaUpdate
// Describes updates for the application's input schema.
type InputSchemaUpdate struct {
	RecordColumnUpdates  []RecordColumn `json:"RecordColumnUpdates,omitempty"`
	RecordEncodingUpdate *string        `json:"RecordEncodingUpdate,omitempty"`
	RecordFormatUpdate   *RecordFormat  `json:"RecordFormatUpdate,omitempty"`
}
