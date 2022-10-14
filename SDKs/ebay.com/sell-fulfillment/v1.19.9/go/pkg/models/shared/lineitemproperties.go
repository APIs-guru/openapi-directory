package shared

type LineItemProperties struct {
	BuyerProtection   *bool `json:"buyerProtection,omitempty"`
	FromBestOffer     *bool `json:"fromBestOffer,omitempty"`
	SoldViaAdCampaign *bool `json:"soldViaAdCampaign,omitempty"`
}
