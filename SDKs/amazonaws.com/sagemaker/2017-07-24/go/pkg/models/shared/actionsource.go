package shared

// ActionSource
// A structure describing the source of an action.
type ActionSource struct {
	SourceID   *string `json:"SourceId,omitempty"`
	SourceType *string `json:"SourceType,omitempty"`
	SourceURI  string  `json:"SourceUri"`
}
