package shared

// ListAuctionPackagesResponse
// Response message for listing auction packages.
type ListAuctionPackagesResponse struct {
	AuctionPackages []AuctionPackage `json:"auctionPackages,omitempty"`
	NextPageToken   *string          `json:"nextPageToken,omitempty"`
}
