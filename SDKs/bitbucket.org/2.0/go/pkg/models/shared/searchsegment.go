package shared

type SearchSegment struct {
	Match *bool   `json:"match"`
	Text  *string `json:"text"`
}
