package shared

type RotateSecretResponse struct {
	Arn       *string `json:"ARN,omitempty"`
	Name      *string `json:"Name,omitempty"`
	VersionID *string `json:"VersionId,omitempty"`
}
