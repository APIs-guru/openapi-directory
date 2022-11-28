package shared

// SubscribeListingRequest
// Message for subscribing to a listing.
type SubscribeListingRequest struct {
	DestinationDataset *DestinationDataset `json:"destinationDataset,omitempty"`
}
