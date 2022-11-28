package shared

// ListPaymentsResponse
// Response definition for the payments list rpc.
type ListPaymentsResponse struct {
	Payments []Payment `json:"payments,omitempty"`
}
