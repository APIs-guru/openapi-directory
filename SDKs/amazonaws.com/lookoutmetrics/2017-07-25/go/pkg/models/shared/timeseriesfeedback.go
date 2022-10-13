package shared

type TimeSeriesFeedback struct {
	IsAnomaly    *bool   `json:"IsAnomaly"`
	TimeSeriesID *string `json:"TimeSeriesId"`
}
