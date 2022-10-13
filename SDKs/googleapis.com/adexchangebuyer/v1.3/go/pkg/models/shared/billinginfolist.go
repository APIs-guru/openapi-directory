package shared

type BillingInfoList struct {
	Items []BillingInfo `json:"items"`
	Kind  *string       `json:"kind"`
}
