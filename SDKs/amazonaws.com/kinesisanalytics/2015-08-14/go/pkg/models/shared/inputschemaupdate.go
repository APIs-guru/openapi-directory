package shared

type InputSchemaUpdate struct {
	RecordColumnUpdates  []RecordColumn `json:"RecordColumnUpdates"`
	RecordEncodingUpdate *string        `json:"RecordEncodingUpdate"`
	RecordFormatUpdate   *RecordFormat  `json:"RecordFormatUpdate"`
}
