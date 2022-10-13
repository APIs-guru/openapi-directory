package shared

type Constraints struct {
	AllowExplicitContent         *bool  `json:"allowExplicitContent"`
	MaximumQueueSegmentItemCount *int64 `json:"maximumQueueSegmentItemCount"`
	UpdateUserTasteProfile       *bool  `json:"updateUserTasteProfile"`
}
