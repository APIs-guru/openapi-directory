package shared

type APIResponseFailure struct {
	Reason  *string `json:"reason"`
	Success *bool   `json:"success"`
}
