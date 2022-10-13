package shared

type ForecastItem struct {
	Co2GOekostrom *int64   `json:"co2_g_oekostrom"`
	Energyprice   *float64 `json:"energyprice"`
	Epochtime     *int64   `json:"epochtime"`
	Gsi           *int64   `json:"gsi"`
	Scaled        *bool    `json:"scaled"`
	Sci           *int64   `json:"sci"`
	TimeStamp     *int64   `json:"timeStamp"`
}
