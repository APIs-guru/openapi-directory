package shared

type CommitActivity struct {
	Days  []int64 `json:"days"`
	Total int64   `json:"total"`
	Week  int64   `json:"week"`
}
