package shared

// GetReportsResponse
// The main response class which holds the reports from the Reporting API `batchGet` call.
type GetReportsResponse struct {
	QueryCost               *int32                   `json:"queryCost,omitempty"`
	Reports                 []Report                 `json:"reports,omitempty"`
	ResourceQuotasRemaining *ResourceQuotasRemaining `json:"resourceQuotasRemaining,omitempty"`
}
