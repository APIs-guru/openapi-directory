package shared

type ReportUsageBatchResponse struct {
	InvalidAssets             []string `json:"invalid_assets"`
	TotalAssetUsagesProcessed *int32   `json:"total_asset_usages_processed"`
}
