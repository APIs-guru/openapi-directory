package shared



type GetReportsResponse struct {
    QueryCost *int32 `json:"queryCost,omitempty"`
    Reports []Report `json:"reports,omitempty"`
    ResourceQuotasRemaining *ResourceQuotasRemaining `json:"resourceQuotasRemaining,omitempty"`
    
}

