package shared

type ComplianceSummaryInfo struct {
	ComplianceType *string `json:"complianceType"`
	ListingCount   *int32  `json:"listingCount"`
	MarketplaceID  *string `json:"marketplaceId"`
}
