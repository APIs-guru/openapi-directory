package shared

type SubscribedWorkteam struct {
	ListingID              *string `json:"ListingId"`
	MarketplaceDescription *string `json:"MarketplaceDescription"`
	MarketplaceTitle       *string `json:"MarketplaceTitle"`
	SellerName             *string `json:"SellerName"`
	WorkteamArn            string  `json:"WorkteamArn"`
}
