package shared

type DirectDealsList struct {
	DirectDeals []DirectDeal `json:"directDeals,omitempty"`
	Kind        *string      `json:"kind,omitempty"`
}
