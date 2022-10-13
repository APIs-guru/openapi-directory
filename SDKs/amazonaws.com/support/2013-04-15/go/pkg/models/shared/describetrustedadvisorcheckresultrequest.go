package shared

type DescribeTrustedAdvisorCheckResultRequest struct {
	CheckID  string  `json:"checkId"`
	Language *string `json:"language"`
}
