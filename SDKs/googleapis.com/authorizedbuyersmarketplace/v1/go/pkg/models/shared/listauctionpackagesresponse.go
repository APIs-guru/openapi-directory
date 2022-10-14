package shared

type ListAuctionPackagesResponse struct {
	AuctionPackages []AuctionPackage `json:"auctionPackages,omitempty"`
	NextPageToken   *string          `json:"nextPageToken,omitempty"`
}
