package shared

// CreateReportTask
// This type defines the rules that govern the generation of a report task and the criteria that's used to create the report. The report-generation rules include the starting and ending dates for the report. Report-task criteria includes the report dimensions, metrics, listings covered in the report, and so on. For information on the required and optional fields for each report type, see Reading Promoted Listings reports.
type CreateReportTask struct {
	CampaignIds         []string             `json:"campaignIds,omitempty"`
	DateFrom            *string              `json:"dateFrom,omitempty"`
	DateTo              *string              `json:"dateTo,omitempty"`
	Dimensions          []Dimension          `json:"dimensions,omitempty"`
	InventoryReferences []InventoryReference `json:"inventoryReferences,omitempty"`
	ListingIds          []string             `json:"listingIds,omitempty"`
	MarketplaceID       *string              `json:"marketplaceId,omitempty"`
	MetricKeys          []string             `json:"metricKeys,omitempty"`
	ReportFormat        *string              `json:"reportFormat,omitempty"`
	ReportType          *string              `json:"reportType,omitempty"`
}
