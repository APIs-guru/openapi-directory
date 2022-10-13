package shared

type SuppressViolationRequest struct {
	ComplianceType *string `json:"complianceType"`
	ListingID      *string `json:"listingId"`
}
