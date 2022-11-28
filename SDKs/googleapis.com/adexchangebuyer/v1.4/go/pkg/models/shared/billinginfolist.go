package shared

// BillingInfoList
// A billing info feed lists Billing Info the Ad Exchange buyer account has access to. Each entry in the feed corresponds to a single billing info.
type BillingInfoList struct {
	Items []BillingInfo `json:"items,omitempty"`
	Kind  *string       `json:"kind,omitempty"`
}
