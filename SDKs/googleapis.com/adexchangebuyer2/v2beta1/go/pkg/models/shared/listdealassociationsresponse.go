package shared

type ListDealAssociationsResponse struct {
	Associations  []CreativeDealAssociation `json:"associations"`
	NextPageToken *string                   `json:"nextPageToken"`
}
