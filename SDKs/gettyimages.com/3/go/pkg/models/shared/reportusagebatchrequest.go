package shared

type ReportUsageBatchRequest struct {
	AssetUsages []AssetUsage `json:"asset_usages"`
}
