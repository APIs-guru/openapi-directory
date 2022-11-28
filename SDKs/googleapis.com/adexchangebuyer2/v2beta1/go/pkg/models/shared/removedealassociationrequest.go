package shared

// RemoveDealAssociationRequest
// A request for removing the association between a deal and a creative.
type RemoveDealAssociationRequest struct {
	Association *CreativeDealAssociation `json:"association,omitempty"`
}
