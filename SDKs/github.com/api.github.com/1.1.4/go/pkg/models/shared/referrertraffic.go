package shared

type ReferrerTraffic struct {
	Count    int64  `json:"count"`
	Referrer string `json:"referrer"`
	Uniques  int64  `json:"uniques"`
}
