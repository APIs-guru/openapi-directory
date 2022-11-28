package shared

// ListDealAssociationsResponse
// A response for listing creative and deal associations
type ListDealAssociationsResponse struct {
	Associations  []CreativeDealAssociation `json:"associations,omitempty"`
	NextPageToken *string                   `json:"nextPageToken,omitempty"`
}
