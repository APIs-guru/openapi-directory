package shared

type PagedComplianceViolationCollection struct {
	Href              *string               `json:"href"`
	Limit             *int32                `json:"limit"`
	ListingViolations []ComplianceViolation `json:"listingViolations"`
	Next              *string               `json:"next"`
	Offset            *int32                `json:"offset"`
	Prev              *string               `json:"prev"`
	Total             *int32                `json:"total"`
}
