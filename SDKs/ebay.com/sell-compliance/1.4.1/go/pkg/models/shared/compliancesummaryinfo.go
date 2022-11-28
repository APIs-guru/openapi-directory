package shared

// ComplianceSummaryInfo
// This type is used by each unique eBay marketplace and compliance type combination that is returned in the getListingViolationsSummary response to indicate the total number of listing violations in regards to that eBay marketplace and compliance type.
type ComplianceSummaryInfo struct {
	ComplianceType *string `json:"complianceType,omitempty"`
	ListingCount   *int32  `json:"listingCount,omitempty"`
	MarketplaceID  *string `json:"marketplaceId,omitempty"`
}
