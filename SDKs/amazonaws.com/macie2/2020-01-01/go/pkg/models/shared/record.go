package shared

type Record struct {
	JSONPath    *string `json:"jsonPath,omitempty"`
	RecordIndex *int64  `json:"recordIndex,omitempty"`
}
