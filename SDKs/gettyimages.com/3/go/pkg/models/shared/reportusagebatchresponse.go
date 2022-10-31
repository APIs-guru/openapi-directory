package shared



type ReportUsageBatchResponse struct {
    InvalidAssets []string `json:"invalid_assets,omitempty"`
    TotalAssetUsagesProcessed *int32 `json:"total_asset_usages_processed,omitempty"`
    
}

