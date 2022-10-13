package shared

type ComplianceViolation struct {
	ComplianceType *string            `json:"complianceType"`
	ListingID      *string            `json:"listingId"`
	OfferID        *string            `json:"offerId"`
	Sku            *string            `json:"sku"`
	Violations     []ComplianceDetail `json:"violations"`
}
