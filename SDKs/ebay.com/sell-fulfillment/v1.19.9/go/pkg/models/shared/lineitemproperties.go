package shared

// LineItemProperties
// This type contains information about the eBay programs under which a line item was listed and sold.
type LineItemProperties struct {
	BuyerProtection   *bool `json:"buyerProtection,omitempty"`
	FromBestOffer     *bool `json:"fromBestOffer,omitempty"`
	SoldViaAdCampaign *bool `json:"soldViaAdCampaign,omitempty"`
}
