package shared

// PagedComplianceViolationCollection
// This type is the base response type of the getListingViolations method.
type PagedComplianceViolationCollection struct {
	Href              *string               `json:"href,omitempty"`
	Limit             *int32                `json:"limit,omitempty"`
	ListingViolations []ComplianceViolation `json:"listingViolations,omitempty"`
	Next              *string               `json:"next,omitempty"`
	Offset            *int32                `json:"offset,omitempty"`
	Prev              *string               `json:"prev,omitempty"`
	Total             *int32                `json:"total,omitempty"`
}
