package shared

type DeleteGrantResponse struct {
	GrantArn *string          `json:"GrantArn"`
	Status   *GrantStatusEnum `json:"Status"`
	Version  *string          `json:"Version"`
}
