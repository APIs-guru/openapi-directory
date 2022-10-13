package shared

type RandomSplitEntry struct {
	NextActivity *string `json:"NextActivity"`
	Percentage   *int64  `json:"Percentage"`
}
