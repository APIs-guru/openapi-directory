package shared

// ReportUsageBatchResponse
// Specifies the response from the Batch Usages endpoint.
type ReportUsageBatchResponse struct {
	InvalidAssets             []string `json:"invalid_assets,omitempty"`
	TotalAssetUsagesProcessed *int32   `json:"total_asset_usages_processed,omitempty"`
}
