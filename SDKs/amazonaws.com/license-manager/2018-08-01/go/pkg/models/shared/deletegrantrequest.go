package shared

type DeleteGrantRequest struct {
	GrantArn     string  `json:"GrantArn"`
	StatusReason *string `json:"StatusReason,omitempty"`
	Version      string  `json:"Version"`
}
