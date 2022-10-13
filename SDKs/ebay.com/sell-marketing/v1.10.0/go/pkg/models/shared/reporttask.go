package shared

type ReportTask struct {
	CampaignIds                      []string             `json:"campaignIds"`
	DateFrom                         *string              `json:"dateFrom"`
	DateTo                           *string              `json:"dateTo"`
	Dimensions                       []Dimension          `json:"dimensions"`
	InventoryReferences              []InventoryReference `json:"inventoryReferences"`
	ListingIds                       []string             `json:"listingIds"`
	MarketplaceID                    *string              `json:"marketplaceId"`
	MetricKeys                       []string             `json:"metricKeys"`
	ReportExpirationDate             *string              `json:"reportExpirationDate"`
	ReportFormat                     *string              `json:"reportFormat"`
	ReportHref                       *string              `json:"reportHref"`
	ReportID                         *string              `json:"reportId"`
	ReportName                       *string              `json:"reportName"`
	ReportTaskCompletionDate         *string              `json:"reportTaskCompletionDate"`
	ReportTaskCreationDate           *string              `json:"reportTaskCreationDate"`
	ReportTaskExpectedCompletionDate *string              `json:"reportTaskExpectedCompletionDate"`
	ReportTaskID                     *string              `json:"reportTaskId"`
	ReportTaskStatus                 *string              `json:"reportTaskStatus"`
	ReportTaskStatusMessage          *string              `json:"reportTaskStatusMessage"`
	ReportType                       *string              `json:"reportType"`
}
