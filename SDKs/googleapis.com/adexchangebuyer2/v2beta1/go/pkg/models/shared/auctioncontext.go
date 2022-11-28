package shared

type AuctionContextAuctionTypesEnum string

const (
	AuctionContextAuctionTypesEnumOpenAuction AuctionContextAuctionTypesEnum = "OPEN_AUCTION"
	AuctionContextAuctionTypesEnumDirectDeals AuctionContextAuctionTypesEnum = "DIRECT_DEALS"
)

// AuctionContext
// Output only. The auction type the restriction applies to.
type AuctionContext struct {
	AuctionTypes []AuctionContextAuctionTypesEnum `json:"auctionTypes,omitempty"`
}
