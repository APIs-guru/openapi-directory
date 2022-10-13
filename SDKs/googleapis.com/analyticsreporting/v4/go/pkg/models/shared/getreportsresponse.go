package shared

type GetReportsResponse struct {
	QueryCost               *int32                   `json:"queryCost"`
	Reports                 []Report                 `json:"reports"`
	ResourceQuotasRemaining *ResourceQuotasRemaining `json:"resourceQuotasRemaining"`
}
