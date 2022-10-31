package shared

type ListLoggingConfigurationsRequest struct {
	Limit      *int64  `json:"Limit,omitempty"`
	NextMarker *string `json:"NextMarker,omitempty"`
}
