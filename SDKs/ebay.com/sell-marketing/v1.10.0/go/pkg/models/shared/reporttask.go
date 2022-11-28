package shared

// ReportTask
// This type defines the fields in a report task.
type ReportTask struct {
	CampaignIds                      []string             `json:"campaignIds,omitempty"`
	DateFrom                         *string              `json:"dateFrom,omitempty"`
	DateTo                           *string              `json:"dateTo,omitempty"`
	Dimensions                       []Dimension          `json:"dimensions,omitempty"`
	InventoryReferences              []InventoryReference `json:"inventoryReferences,omitempty"`
	ListingIds                       []string             `json:"listingIds,omitempty"`
	MarketplaceID                    *string              `json:"marketplaceId,omitempty"`
	MetricKeys                       []string             `json:"metricKeys,omitempty"`
	ReportExpirationDate             *string              `json:"reportExpirationDate,omitempty"`
	ReportFormat                     *string              `json:"reportFormat,omitempty"`
	ReportHref                       *string              `json:"reportHref,omitempty"`
	ReportID                         *string              `json:"reportId,omitempty"`
	ReportName                       *string              `json:"reportName,omitempty"`
	ReportTaskCompletionDate         *string              `json:"reportTaskCompletionDate,omitempty"`
	ReportTaskCreationDate           *string              `json:"reportTaskCreationDate,omitempty"`
	ReportTaskExpectedCompletionDate *string              `json:"reportTaskExpectedCompletionDate,omitempty"`
	ReportTaskID                     *string              `json:"reportTaskId,omitempty"`
	ReportTaskStatus                 *string              `json:"reportTaskStatus,omitempty"`
	ReportTaskStatusMessage          *string              `json:"reportTaskStatusMessage,omitempty"`
	ReportType                       *string              `json:"reportType,omitempty"`
}
