package shared

type DirectDealsList struct {
	DirectDeals []DirectDeal `json:"directDeals"`
	Kind        *string      `json:"kind"`
}
