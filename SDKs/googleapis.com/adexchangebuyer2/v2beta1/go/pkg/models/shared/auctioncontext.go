package shared

type AuctionContextAuctionTypesEnum string

const (
	AuctionContextAuctionTypesEnumOpenAuction AuctionContextAuctionTypesEnum = "OPEN_AUCTION"
	AuctionContextAuctionTypesEnumDirectDeals AuctionContextAuctionTypesEnum = "DIRECT_DEALS"
)

type AuctionContext struct {
	AuctionTypes []AuctionContextAuctionTypesEnum `json:"auctionTypes"`
}
