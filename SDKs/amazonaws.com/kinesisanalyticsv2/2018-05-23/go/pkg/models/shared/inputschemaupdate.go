package shared

// InputSchemaUpdate
// Describes updates for an SQL-based Kinesis Data Analytics application's input schema.
type InputSchemaUpdate struct {
	RecordColumnUpdates  []RecordColumn `json:"RecordColumnUpdates,omitempty"`
	RecordEncodingUpdate *string        `json:"RecordEncodingUpdate,omitempty"`
	RecordFormatUpdate   *RecordFormat  `json:"RecordFormatUpdate,omitempty"`
}
