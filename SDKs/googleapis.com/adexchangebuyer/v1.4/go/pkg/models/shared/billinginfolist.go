package shared

type BillingInfoList struct {
	Items []BillingInfo `json:"items,omitempty"`
	Kind  *string       `json:"kind,omitempty"`
}
