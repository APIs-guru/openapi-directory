package shared

type DeleteGrantRequest struct {
	GrantArn     string  `json:"GrantArn"`
	StatusReason *string `json:"StatusReason"`
	Version      string  `json:"Version"`
}
