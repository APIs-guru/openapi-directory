package shared

type ContentTraffic struct {
	Count   int64  `json:"count"`
	Path    string `json:"path"`
	Title   string `json:"title"`
	Uniques int64  `json:"uniques"`
}
