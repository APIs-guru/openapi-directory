package shared

type UpdateSecretResponse struct {
	Arn       *string `json:"ARN"`
	Name      *string `json:"Name"`
	VersionID *string `json:"VersionId"`
}
