package shared

type DeleteGrantResponse struct {
	GrantArn *string          `json:"GrantArn,omitempty"`
	Status   *GrantStatusEnum `json:"Status,omitempty"`
	Version  *string          `json:"Version,omitempty"`
}
