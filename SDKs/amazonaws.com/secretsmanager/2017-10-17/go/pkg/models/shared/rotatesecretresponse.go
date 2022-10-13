package shared

type RotateSecretResponse struct {
	Arn       *string `json:"ARN"`
	Name      *string `json:"Name"`
	VersionID *string `json:"VersionId"`
}
