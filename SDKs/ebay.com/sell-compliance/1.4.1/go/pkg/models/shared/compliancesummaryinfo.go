package shared

type ComplianceSummaryInfo struct {
	ComplianceType *string `json:"complianceType,omitempty"`
	ListingCount   *int32  `json:"listingCount,omitempty"`
	MarketplaceID  *string `json:"marketplaceId,omitempty"`
}
