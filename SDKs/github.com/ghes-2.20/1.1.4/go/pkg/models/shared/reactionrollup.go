package shared

type ReactionRollup struct {
	Plus1      int64  `json:"+1"`
	Minus1     int64  `json:"-1"`
	Confused   int64  `json:"confused"`
	Eyes       int64  `json:"eyes"`
	Heart      int64  `json:"heart"`
	Hooray     int64  `json:"hooray"`
	Laugh      int64  `json:"laugh"`
	Rocket     int64  `json:"rocket"`
	TotalCount int64  `json:"total_count"`
	URL        string `json:"url"`
}
