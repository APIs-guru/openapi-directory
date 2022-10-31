package shared

type InputSchemaUpdate struct {
	RecordColumnUpdates  []RecordColumn `json:"RecordColumnUpdates,omitempty"`
	RecordEncodingUpdate *string        `json:"RecordEncodingUpdate,omitempty"`
	RecordFormatUpdate   *RecordFormat  `json:"RecordFormatUpdate,omitempty"`
}
