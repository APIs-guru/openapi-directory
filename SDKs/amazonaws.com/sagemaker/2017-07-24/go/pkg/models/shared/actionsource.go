package shared

type ActionSource struct {
	SourceID   *string `json:"SourceId"`
	SourceType *string `json:"SourceType"`
	SourceURI  string  `json:"SourceUri"`
}
