package shared

type ViewBillingResponse struct {
	BillingRecords []BillingRecord `json:"BillingRecords,omitempty"`
	NextPageMarker *string         `json:"NextPageMarker,omitempty"`
}
