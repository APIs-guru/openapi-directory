package shared

type BulkEmailEntry struct {
	Destination             Destination              `json:"Destination"`
	ReplacementEmailContent *ReplacementEmailContent `json:"ReplacementEmailContent"`
	ReplacementTags         []MessageTag             `json:"ReplacementTags"`
}
