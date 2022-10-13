package shared

type ItemRouting struct {
	Destinations []string `json:"destinations"`
	ReportIndex  *int64   `json:"reportIndex"`
	TrackingID   *string  `json:"trackingId"`
}
