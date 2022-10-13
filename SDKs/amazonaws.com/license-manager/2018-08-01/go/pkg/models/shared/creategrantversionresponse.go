package shared

type CreateGrantVersionResponse struct {
	GrantArn *string          `json:"GrantArn"`
	Status   *GrantStatusEnum `json:"Status"`
	Version  *string          `json:"Version"`
}
