package shared

type ListDealAssociationsResponse struct {
	Associations  []CreativeDealAssociation `json:"associations,omitempty"`
	NextPageToken *string                   `json:"nextPageToken,omitempty"`
}
