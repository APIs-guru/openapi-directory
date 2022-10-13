package shared

type PutSecretValueResponse struct {
	Arn           *string  `json:"ARN"`
	Name          *string  `json:"Name"`
	VersionID     *string  `json:"VersionId"`
	VersionStages []string `json:"VersionStages"`
}
