package shared

// ComplianceViolation
// This type is used by each listing violation that is returned under the listingViolations container.
type ComplianceViolation struct {
	ComplianceType *string            `json:"complianceType,omitempty"`
	ListingID      *string            `json:"listingId,omitempty"`
	OfferID        *string            `json:"offerId,omitempty"`
	Sku            *string            `json:"sku,omitempty"`
	Violations     []ComplianceDetail `json:"violations,omitempty"`
}
