package shared

type SourceSchema struct {
	RecordColumns  []RecordColumn `json:"RecordColumns"`
	RecordEncoding *string        `json:"RecordEncoding,omitempty"`
	RecordFormat   RecordFormat   `json:"RecordFormat"`
}
