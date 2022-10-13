package shared

type PaymentPolicyResponse struct {
	Href            *string         `json:"href"`
	Limit           *int32          `json:"limit"`
	Next            *string         `json:"next"`
	Offset          *int32          `json:"offset"`
	PaymentPolicies []PaymentPolicy `json:"paymentPolicies"`
	Prev            *string         `json:"prev"`
	Total           *int32          `json:"total"`
}
