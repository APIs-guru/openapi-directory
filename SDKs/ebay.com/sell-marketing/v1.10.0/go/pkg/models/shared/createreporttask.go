package shared

type CreateReportTask struct {
	CampaignIds         []string             `json:"campaignIds"`
	DateFrom            *string              `json:"dateFrom"`
	DateTo              *string              `json:"dateTo"`
	Dimensions          []Dimension          `json:"dimensions"`
	InventoryReferences []InventoryReference `json:"inventoryReferences"`
	ListingIds          []string             `json:"listingIds"`
	MarketplaceID       *string              `json:"marketplaceId"`
	MetricKeys          []string             `json:"metricKeys"`
	ReportFormat        *string              `json:"reportFormat"`
	ReportType          *string              `json:"reportType"`
}
