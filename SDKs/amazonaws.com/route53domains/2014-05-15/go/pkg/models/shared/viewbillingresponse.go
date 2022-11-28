package shared

// ViewBillingResponse
// The ViewBilling response includes the following elements.
type ViewBillingResponse struct {
	BillingRecords []BillingRecord `json:"BillingRecords,omitempty"`
	NextPageMarker *string         `json:"NextPageMarker,omitempty"`
}
