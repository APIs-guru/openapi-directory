package shared

type ListTagsForStreamInput struct {
	ExclusiveStartTagKey *string `json:"ExclusiveStartTagKey"`
	Limit                *int64  `json:"Limit"`
	StreamName           string  `json:"StreamName"`
}
