package shared



type CreateReportTask struct {
    CampaignIds []string `json:"campaignIds,omitempty"`
    DateFrom *string `json:"dateFrom,omitempty"`
    DateTo *string `json:"dateTo,omitempty"`
    Dimensions []Dimension `json:"dimensions,omitempty"`
    InventoryReferences []InventoryReference `json:"inventoryReferences,omitempty"`
    ListingIds []string `json:"listingIds,omitempty"`
    MarketplaceID *string `json:"marketplaceId,omitempty"`
    MetricKeys []string `json:"metricKeys,omitempty"`
    ReportFormat *string `json:"reportFormat,omitempty"`
    ReportType *string `json:"reportType,omitempty"`
    
}

