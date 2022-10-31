package shared

type ListAlertsResponse struct {
	Alerts        []Alert `json:"alerts,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
