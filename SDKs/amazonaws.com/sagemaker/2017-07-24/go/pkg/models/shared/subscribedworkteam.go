package shared

// SubscribedWorkteam
// Describes a work team of a vendor that does the a labelling job.
type SubscribedWorkteam struct {
	ListingID              *string `json:"ListingId,omitempty"`
	MarketplaceDescription *string `json:"MarketplaceDescription,omitempty"`
	MarketplaceTitle       *string `json:"MarketplaceTitle,omitempty"`
	SellerName             *string `json:"SellerName,omitempty"`
	WorkteamArn            string  `json:"WorkteamArn"`
}
