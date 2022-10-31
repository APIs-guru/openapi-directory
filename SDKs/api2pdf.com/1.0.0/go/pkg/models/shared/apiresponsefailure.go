package shared

type APIResponseFailure struct {
	Reason  *string `json:"reason,omitempty"`
	Success *bool   `json:"success,omitempty"`
}
