package shared

type ListAuctionPackagesResponse struct {
	AuctionPackages []AuctionPackage `json:"auctionPackages"`
	NextPageToken   *string          `json:"nextPageToken"`
}
