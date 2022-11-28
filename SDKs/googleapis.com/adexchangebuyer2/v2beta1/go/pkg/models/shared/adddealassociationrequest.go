package shared

// AddDealAssociationRequest
// A request for associating a deal and a creative.
type AddDealAssociationRequest struct {
	Association *CreativeDealAssociation `json:"association,omitempty"`
}
