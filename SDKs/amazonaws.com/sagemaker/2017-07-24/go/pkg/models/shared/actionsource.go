package shared

type ActionSource struct {
	SourceID   *string `json:"SourceId,omitempty"`
	SourceType *string `json:"SourceType,omitempty"`
	SourceURI  string  `json:"SourceUri"`
}
