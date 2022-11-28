package shared

// ReportUsageBatchRequest
// Specifies the request information for the Batch Usages endpoint.
type ReportUsageBatchRequest struct {
	AssetUsages []AssetUsage `json:"asset_usages,omitempty"`
}
