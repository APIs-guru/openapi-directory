package shared

// ContextSource
// A structure describing the source of a context.
type ContextSource struct {
	SourceID   *string `json:"SourceId,omitempty"`
	SourceType *string `json:"SourceType,omitempty"`
	SourceURI  string  `json:"SourceUri"`
}
