package shared

type ContextSource struct {
	SourceID   *string `json:"SourceId"`
	SourceType *string `json:"SourceType"`
	SourceURI  string  `json:"SourceUri"`
}
