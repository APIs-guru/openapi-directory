package shared

type LineItemProperties struct {
	BuyerProtection   *bool `json:"buyerProtection"`
	FromBestOffer     *bool `json:"fromBestOffer"`
	SoldViaAdCampaign *bool `json:"soldViaAdCampaign"`
}
