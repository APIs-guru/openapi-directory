package shared



type SuppressViolationRequest struct {
    ComplianceType *string `json:"complianceType,omitempty"`
    ListingID *string `json:"listingId,omitempty"`
    
}

