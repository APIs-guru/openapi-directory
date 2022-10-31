package shared

type RandomSplitEntry struct {
	NextActivity *string `json:"NextActivity,omitempty"`
	Percentage   *int64  `json:"Percentage,omitempty"`
}
