package shared

type GetServiceQuotaRequest struct {
	QuotaCode   string `json:"QuotaCode"`
	ServiceCode string `json:"ServiceCode"`
}
