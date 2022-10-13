package shared

type SourceSchema struct {
	RecordColumns  []RecordColumn `json:"RecordColumns"`
	RecordEncoding *string        `json:"RecordEncoding"`
	RecordFormat   RecordFormat   `json:"RecordFormat"`
}
