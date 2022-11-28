package shared

// SuppressViolationRequest
// This is the base request type of the suppressViolation method, and is used to identify the listing violation that the seller wishes to suppress.
type SuppressViolationRequest struct {
	ComplianceType *string `json:"complianceType,omitempty"`
	ListingID      *string `json:"listingId,omitempty"`
}
