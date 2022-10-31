package shared

type CreateGrantVersionResponse struct {
	GrantArn *string          `json:"GrantArn,omitempty"`
	Status   *GrantStatusEnum `json:"Status,omitempty"`
	Version  *string          `json:"Version,omitempty"`
}
