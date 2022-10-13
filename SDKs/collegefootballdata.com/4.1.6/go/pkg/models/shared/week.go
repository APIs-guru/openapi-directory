package shared

type Week struct {
	FirstGameStart *string `json:"firstGameStart"`
	LastGameStart  *string `json:"lastGameStart"`
	Season         *int64  `json:"season"`
	SeasonType     *string `json:"seasonType"`
	Week           *int64  `json:"week"`
}
