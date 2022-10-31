package shared



type ItemRouting struct {
    Destinations []string `json:"destinations,omitempty"`
    ReportIndex *int64 `json:"reportIndex,omitempty"`
    TrackingID *string `json:"trackingId,omitempty"`
    
}

