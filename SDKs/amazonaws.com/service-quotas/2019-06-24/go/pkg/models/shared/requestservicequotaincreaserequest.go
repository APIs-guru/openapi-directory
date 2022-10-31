package shared

type RequestServiceQuotaIncreaseRequest struct {
	DesiredValue float64 `json:"DesiredValue"`
	QuotaCode    string  `json:"QuotaCode"`
	ServiceCode  string  `json:"ServiceCode"`
}
