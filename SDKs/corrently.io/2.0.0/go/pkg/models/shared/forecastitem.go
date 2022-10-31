package shared

type ForecastItem struct {
	Co2GOekostrom *int64   `json:"co2_g_oekostrom,omitempty"`
	Energyprice   *float64 `json:"energyprice,omitempty"`
	Epochtime     *int64   `json:"epochtime,omitempty"`
	Gsi           *int64   `json:"gsi,omitempty"`
	Scaled        *bool    `json:"scaled,omitempty"`
	Sci           *int64   `json:"sci,omitempty"`
	TimeStamp     *int64   `json:"timeStamp,omitempty"`
}
