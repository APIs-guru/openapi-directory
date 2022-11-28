package shared

// ListAlertsResponse
// Response message for an alert listing request.
type ListAlertsResponse struct {
	Alerts        []Alert `json:"alerts,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
