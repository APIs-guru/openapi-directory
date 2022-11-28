package shared

// LfTagError
// A structure containing an error related to a <code>TagResource</code> or <code>UnTagResource</code> operation.
type LfTagError struct {
	Error *ErrorDetail `json:"Error,omitempty"`
	LfTag *LfTagPair   `json:"LFTag,omitempty"`
}
