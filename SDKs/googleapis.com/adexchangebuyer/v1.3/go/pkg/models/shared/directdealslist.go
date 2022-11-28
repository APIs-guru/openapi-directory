package shared

// DirectDealsList
// A direct deals feed lists Direct Deals the Ad Exchange buyer account has access to. This includes direct deals set up for the buyer account as well as its merged stream seats.
type DirectDealsList struct {
	DirectDeals []DirectDeal `json:"directDeals,omitempty"`
	Kind        *string      `json:"kind,omitempty"`
}
