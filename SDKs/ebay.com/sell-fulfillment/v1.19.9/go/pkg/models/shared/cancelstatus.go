package shared

type CancelStatus struct {
	CancelRequests []CancelRequest `json:"cancelRequests,omitempty"`
	CancelState    *string         `json:"cancelState,omitempty"`
	CancelledDate  *string         `json:"cancelledDate,omitempty"`
}
