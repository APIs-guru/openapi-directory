package shared

// ListAlertsResponse
// Response definition for the alerts list rpc.
type ListAlertsResponse struct {
	Alerts []Alert `json:"alerts,omitempty"`
}
