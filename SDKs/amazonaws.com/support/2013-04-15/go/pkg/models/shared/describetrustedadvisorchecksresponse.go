package shared

type DescribeTrustedAdvisorChecksResponse struct {
	Checks []TrustedAdvisorCheckDescription `json:"checks"`
}
