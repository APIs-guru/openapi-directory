package shared

// CloneTraffic
// Clone Traffic
type CloneTraffic struct {
	Clones  []Traffic `json:"clones"`
	Count   int64     `json:"count"`
	Uniques int64     `json:"uniques"`
}
