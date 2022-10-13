package shared

type ListAlertsResponse struct {
	Alerts        []Alert `json:"alerts"`
	NextPageToken *string `json:"nextPageToken"`
}
