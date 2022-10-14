package shared

type ListPaymentsResponse struct {
	Payments []Payment `json:"payments,omitempty"`
}
