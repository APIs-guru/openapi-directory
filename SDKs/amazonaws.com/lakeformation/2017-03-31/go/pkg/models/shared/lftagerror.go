package shared

type LfTagError struct {
	Error *ErrorDetail `json:"Error"`
	LfTag *LfTagPair   `json:"LFTag"`
}
