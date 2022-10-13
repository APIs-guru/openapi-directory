package shared

type ViewBillingResponse struct {
	BillingRecords []BillingRecord `json:"BillingRecords"`
	NextPageMarker *string         `json:"NextPageMarker"`
}
