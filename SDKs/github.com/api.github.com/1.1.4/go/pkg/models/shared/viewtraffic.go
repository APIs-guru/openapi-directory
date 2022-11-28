package shared

// ViewTraffic
// View Traffic
type ViewTraffic struct {
	Count   int64     `json:"count"`
	Uniques int64     `json:"uniques"`
	Views   []Traffic `json:"views"`
}
