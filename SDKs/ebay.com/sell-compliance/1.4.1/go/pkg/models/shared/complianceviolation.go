package shared



type ComplianceViolation struct {
    ComplianceType *string `json:"complianceType,omitempty"`
    ListingID *string `json:"listingId,omitempty"`
    OfferID *string `json:"offerId,omitempty"`
    Sku *string `json:"sku,omitempty"`
    Violations []ComplianceDetail `json:"violations,omitempty"`
    
}

