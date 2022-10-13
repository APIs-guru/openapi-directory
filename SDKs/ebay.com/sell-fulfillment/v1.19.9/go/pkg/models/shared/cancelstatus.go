package shared

type CancelStatus struct {
	CancelRequests []CancelRequest `json:"cancelRequests"`
	CancelState    *string         `json:"cancelState"`
	CancelledDate  *string         `json:"cancelledDate"`
}
